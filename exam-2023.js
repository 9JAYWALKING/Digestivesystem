'use strict';
const data=window.EXAM_DATA;
const rules=window.ExamRules;
const el=id=>document.getElementById(id);
const STORAGE_KEY='digestive-exam-2023-v1';
const durationMs=160*60*1000;
const collator=new Intl.Collator('ko',{numeric:true,sensitivity:'base'});
const questions=[...data.questions].sort((a,b)=>collator.compare(a.currentProfessor,b.currentProfessor)||a.globalNumber-b.globalNumber);
const signature=questions.map(q=>q.id).join('|');
let saved=null;
try{saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch{}
const state={index:0,answers:{},flags:[],overrides:{},startedAt:Date.now(),deadline:Date.now()+durationMs,submittedAt:null};
if(saved&&saved.signature===signature){
 if(Number.isFinite(saved.startedAt)&&Number.isFinite(saved.deadline)&&saved.deadline>saved.startedAt){state.startedAt=saved.startedAt;state.deadline=saved.deadline;}
 if(Number.isInteger(saved.index))state.index=Math.max(0,Math.min(questions.length-1,saved.index));
 for(const q of questions){
  const value=saved.answers?.[q.id];
  if(q.choices.length&&Array.isArray(value)&&value.every(n=>Number.isInteger(n)&&n>0&&n<=q.choices.length))state.answers[q.id]=q.multiple?value:value.slice(0,1);
  else if(!q.choices.length&&typeof value==='string')state.answers[q.id]=value;
  if(rules.canCorrect(q)&&typeof saved.overrides?.[q.id]==='boolean')state.overrides[q.id]=saved.overrides[q.id];
 }
 state.flags=Array.isArray(saved.flags)?saved.flags.filter(id=>questions.some(q=>q.id===id)):[];
 if(Number.isFinite(saved.submittedAt)&&saved.submittedAt>0)state.submittedAt=saved.submittedAt;
}else if(saved){el('storage-notice').hidden=false;el('storage-notice').textContent='문항 구성이 달라 이전 응시 기록을 불러오지 못했습니다. 기존 기록을 보존하려면 답안 백업을 확인하세요.';}
function persist(){
 try{localStorage.setItem(STORAGE_KEY,JSON.stringify({...state,signature,version:1}));el('storage-notice').hidden=true;return true;}
 catch{el('storage-notice').hidden=false;el('storage-notice').textContent='브라우저에 답안을 저장하지 못했습니다. 이 창을 닫지 말고 답안 백업을 내려받으세요.';return false;}
}
function backupAnswers(){
 const blob=new Blob([JSON.stringify({...state,signature,version:1},null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='2023-실전풀이-답안.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
el('backup-answers').addEventListener('click',backupAnswers);
function answered(q){const a=state.answers[q.id];return Array.isArray(a)?a.length>0:typeof a==='string'&&!!a.trim();}
function isCorrect(q){return rules.correct(q,state.answers[q.id],state.overrides);}
const buttons=questions.map((q,index)=>{
 const button=document.createElement('button');button.type='button';button.className='question-number';button.textContent=index+1;
 button.dataset.originalId=q.id;button.addEventListener('click',()=>go(index));el('question-navigation').append(button);return button;
});
function updateNavigation(){
 buttons.forEach((b,i)=>{
  const q=questions[i],correct=isCorrect(q);
  b.classList.toggle('answered',answered(q));b.classList.toggle('review-correct',!!state.submittedAt&&correct);b.classList.toggle('review-incorrect',!!state.submittedAt&&!correct);
  b.classList.toggle('flagged',state.flags.includes(q.id));b.setAttribute('aria-label',`${i+1}번 문항, ${state.submittedAt?(correct?'정답':'오답'):(answered(q)?'응답':'미응답')}`);
  if(i===state.index)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');
 });
}
function ensureActive(){if(state.submittedAt)return false;if(Date.now()>=state.deadline){finish(false);return false;}return true;}
function setChoice(q,index){
 if(!ensureActive())return;
 const selected=state.answers[q.id]||[];
 state.answers[q.id]=q.multiple?(selected.includes(index)?selected.filter(n=>n!==index):[...selected,index]):(selected.includes(index)?[]:[index]);
 persist();renderChoices(q);updateNavigation();
}
function renderChoices(q){
 el('choices').replaceChildren();
 q.choices.forEach((text,i)=>{
  const label=document.createElement('label');label.className='choice';
  const input=document.createElement('input');input.type=q.multiple?'checkbox':'radio';input.name='answer-'+q.id;input.value=i+1;input.checked=(state.answers[q.id]||[]).includes(i+1);input.disabled=!!state.submittedAt;
  const content=document.createElement('span');content.className='choice-content';content.textContent=`${i+1}. ${text}`;
  if(state.submittedAt&&input.checked){const correct=q.allowManual&&typeof state.overrides[q.id]==='boolean'?state.overrides[q.id]:q.answerIndices.includes(i+1);label.classList.add(correct?'review-correct':'review-incorrect');const icon=document.createElement('span');icon.className='correctness-icon';icon.textContent=correct?'✓':'✕';icon.setAttribute('aria-label',correct?'정답 선지':'오답 선지');content.append(icon);}
  input.addEventListener('click',()=>{setChoice(q,i+1);if(!state.submittedAt)el('choices').querySelectorAll('input')[i]?.focus({preventScroll:true});});
  label.append(input,content);el('choices').append(label);
 });
 if(!q.choices.length){
  const input=document.createElement('textarea');input.className='free-answer';input.value=state.answers[q.id]||'';input.disabled=!!state.submittedAt;input.setAttribute('aria-label','주관식 답안');input.spellcheck=false;
  input.addEventListener('input',()=>{if(!ensureActive())return;state.answers[q.id]=input.value;persist();updateNavigation();});el('choices').append(input);
 }
}
function render(){
 const q=questions[state.index];
 el('question-number').textContent=state.index+1;el('question-points').textContent=`총 ${q.points.toFixed(2)}점`;
 el('question-text').textContent=q.question;el('passage').textContent=q.passage||'';el('passage').hidden=!q.passage;
 el('flag-question').setAttribute('aria-pressed',String(state.flags.includes(q.id)));
 el('question-images').replaceChildren();
 (q.images||[]).forEach((src,i)=>{
  const img=document.createElement('img');img.src=src;img.alt=`문제 ${state.index+1} 이미지 ${i+1}`;
  img.addEventListener('error',()=>{const warning=document.createElement('p');warning.className='image-error';warning.textContent='이미지를 불러오지 못했습니다. 연결 상태를 확인하세요.';img.replaceWith(warning);},{once:true});el('question-images').append(img);
 });
 el('answers').querySelector('legend').textContent=q.multiple?'해당하는 답을 모두 선택하세요.':q.choices.length?'하나를 선택하세요.':'답을 입력하세요.';
 renderChoices(q);
 const review=!!state.submittedAt;
 el('review-answer').hidden=!review;el('review-answer').textContent=review?(q.choices.length?`${q.allowManual?'추정 정답':'정답'}: ${q.answerIndices.map(n=>`${n}. ${q.choices[n-1]}`).join(' / ')}`:`모범답안\n${q.modelAnswer}`):'';
 el('exam-override-note').hidden=!review||!q.examOverride;
 el('grade-correction').hidden=!review||!rules.canCorrect(q);
 el('exam-override-note').textContent=q.examNote||'실전시험용 정답 기준 적용 · 상세 해설의 원래 J와 다를 수 있습니다.';
 el('grading-guide').hidden=!review||!q.gradingGuide;el('grading-guide-text').textContent=q.gradingGuide||'';
 if(review&&rules.canCorrect(q)){
  const overridden=typeof state.overrides[q.id]==='boolean';
  el('correction-status').textContent=`${overridden?'정정':'자동 채점'}: ${isCorrect(q)?'정답':rules.pointsFor(q,state.answers[q.id],state.overrides)>0?'부분 정답':'오답'} · ${rules.pointsFor(q,state.answers[q.id],state.overrides).toFixed(2)} / ${q.points.toFixed(2)}점`;
  el('correct-as-right').setAttribute('aria-pressed',String(overridden&&state.overrides[q.id]===true));
  el('correct-as-wrong').setAttribute('aria-pressed',String(overridden&&state.overrides[q.id]===false));
  el('reset-correction').disabled=!overridden;
 }
 el('show-detail').hidden=!review;el('save-answers').textContent=review?'결과 보기':'답안 저장';
 el('previous').disabled=state.index===0;
 el('next').textContent=state.index===questions.length-1?(review?'결과 보기':'답안 저장'):'다음 페이지 ›';
 updateNavigation();el('page-status').textContent=`전체 ${questions.length}문항 중 ${state.index+1}번`;
 if(detailOpen)loadDetail();
}
function go(index){if(index<0||index>=questions.length)return;state.index=index;persist();render();el('question-text').focus({preventScroll:true});el('question-top').scrollIntoView({block:'start',behavior:'instant'});}
el('previous').addEventListener('click',()=>go(state.index-1));
el('next').addEventListener('click',()=>state.index===questions.length-1?finish(true):go(state.index+1));
el('save-answers').addEventListener('click',()=>finish(true));
el('flag-question').addEventListener('click',()=>{const id=questions[state.index].id;state.flags=state.flags.includes(id)?state.flags.filter(n=>n!==id):[...state.flags,id];persist();render();});
function correctGrade(value){
 const q=questions[state.index];if(!state.submittedAt||!rules.canCorrect(q))return;
 if(value===null)delete state.overrides[q.id];else state.overrides[q.id]=value;
 persist();updateResults();render();
}
el('correct-as-right').addEventListener('click',()=>correctGrade(true));
el('correct-as-wrong').addEventListener('click',()=>correctGrade(false));
el('reset-correction').addEventListener('click',()=>correctGrade(null));
function formatDate(t){return new Date(t).toLocaleString('ko-KR',{hour12:false});}
function updateResults(){
 const score=rules.score(questions,state.answers,state.overrides);
 el('exam-end-date').textContent=formatDate(state.deadline);el('submitted-date').textContent=`${formatDate(state.submittedAt)}에 제출됨`;
 el('total-grade').textContent=score.total.toFixed(2);el('earned-grade').textContent=score.earned.toFixed(2);
 el('final-score').textContent=`이번 퀴즈의 최종 점수는 ${score.earned.toFixed(2)}/${score.total.toFixed(2)} 입니다.`;
}
function showResults(push=true){closeDetail(false);el('exam-screen').hidden=true;el('result-screen').hidden=false;updateResults();if(push&&location.hash!=='#result')history.pushState(null,'','#result');window.scrollTo(0,0);el('result-title').focus({preventScroll:true});}
function showFeedback(push=true){el('result-screen').hidden=true;el('exam-screen').hidden=false;render();if(push&&location.hash!=='#review')history.pushState(null,'','#review');window.scrollTo(0,0);}
el('view-feedback').addEventListener('click',()=>{state.index=0;showFeedback();});
function finish(ask){
 if(state.submittedAt){showResults();return;}
 if(ask){const remaining=questions.filter(q=>!answered(q)).length;if(!window.confirm(`${remaining?`미응답 ${remaining}문항이 있습니다.\n`:''}답안을 저장하고 채점을 진행할까요? 저장 후 답안을 변경할 수 없습니다.`))return;}
 state.submittedAt=Math.min(Date.now(),state.deadline);persist();showResults();tick();
}
function restartTraining(){
 if(!state.submittedAt)return;
 if(!window.confirm('이 시험의 답안·점수·채점 정정·문제 표시 기록을 지우고 다시 훈련할까요? 160분이 새로 시작됩니다.'))return;
 const now=Date.now();
 const fresh={index:0,answers:{},flags:[],overrides:{},startedAt:now,deadline:now+durationMs,submittedAt:null};
 try{localStorage.setItem(STORAGE_KEY,JSON.stringify({...fresh,signature,version:1}));}
 catch{el('storage-notice').hidden=false;el('storage-notice').textContent='새 응시 기록을 저장하지 못해 초기화하지 않았습니다. 브라우저 저장소를 확인해 주세요.';return;}
 closeDetail(false);
 if(timer!==null)clearInterval(timer);
 Object.assign(state,fresh);
 el('storage-notice').hidden=true;
 el('earned-grade').textContent='0.00';el('final-score').textContent='';
 el('result-screen').hidden=true;el('exam-screen').hidden=false;
 history.replaceState(null,'',location.href.split('#')[0]);
 timer=setInterval(tick,1000);render();tick();
 window.scrollTo(0,0);el('question-text').focus({preventScroll:true});
}
el('restart-training').addEventListener('click',restartTraining);
let timer=null;
function tick(){
 const seconds=Math.max(0,Math.ceil((state.deadline-(state.submittedAt||Date.now()))/1000));
 el('remaining-time').textContent=`${Math.floor(seconds/3600)}:${String(Math.floor(seconds%3600/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
 if(seconds===0&&!state.submittedAt)finish(false);
 if(state.submittedAt&&timer!==null){clearInterval(timer);timer=null;}
}
let detailOpen=false,detailQuestion=null,detailTimeout=null,detailScroll=0;
function loadDetail(){
 const q=questions[state.index];if(detailQuestion===q.globalNumber)return;
 detailQuestion=q.globalNumber;clearTimeout(detailTimeout);
 el('detail-title').textContent=`문제 ${state.index+1} · J ${q.globalNumber}번`;
 el('detail-original').href=`./index.html#jbl-q-${q.globalNumber}`;
 el('detail-message').textContent='J 문항을 불러오는 중…';el('detail-status').hidden=false;
 el('detail-frame').title=`J ${q.globalNumber}번 문항과 상세 해설`;
 el('detail-frame').src=`./index.html?examPreview=1&question=${q.globalNumber}#jbl-q-${q.globalNumber}`;
 detailTimeout=setTimeout(()=>{el('detail-message').textContent='표시되지 않으면 원래 J를 열어주세요.'},15000);
}
function openDetail(){if(!state.submittedAt||el('exam-screen').hidden)return;if(!detailOpen)detailScroll=window.scrollY;detailOpen=true;document.body.classList.add('detail-open');el('detail-pane').hidden=false;el('show-detail').setAttribute('aria-expanded','true');loadDetail();el('question-top').scrollIntoView({block:'start',behavior:'instant'});}
function closeDetail(focus=true){if(!detailOpen)return;detailOpen=false;detailQuestion=null;clearTimeout(detailTimeout);document.body.classList.remove('detail-open');el('detail-pane').hidden=true;el('detail-frame').src='about:blank';el('show-detail').setAttribute('aria-expanded','false');window.scrollTo(0,detailScroll);if(focus)el('show-detail').focus({preventScroll:true});}
el('show-detail').addEventListener('click',openDetail);el('close-detail').addEventListener('click',()=>closeDetail());
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&detailOpen){e.preventDefault();closeDetail();}});
window.addEventListener('message',e=>{if(e.source!==el('detail-frame').contentWindow||!detailOpen)return;const m=e.data;if(!m||m.question!==detailQuestion)return;if(m.type==='exam-j-ready'){clearTimeout(detailTimeout);el('detail-status').hidden=true;}if(m.type==='exam-j-error'){clearTimeout(detailTimeout);el('detail-message').textContent='J 문항을 불러오지 못했습니다.';}if(m.type==='exam-j-close')closeDetail();});
window.addEventListener('popstate',()=>{if(!state.submittedAt)return;location.hash==='#review'?showFeedback(false):showResults(false);});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});
window.addEventListener('pagehide',persist);
persist();render();
if(state.submittedAt){location.hash==='#review'?showFeedback(false):showResults(false);}
else{timer=setInterval(tick,1000);}
tick();
