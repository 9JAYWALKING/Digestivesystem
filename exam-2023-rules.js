(function(root){
 'use strict';
 const normalize=v=>String(v??'').normalize('NFKC').toLowerCase().replace(/[\s\p{P}\p{S}]+/gu,'');
 const matches=(patterns,text)=>patterns.some(pattern=>new RegExp(pattern,'i').test(text));
 function evaluate(q,answer){
  if(q.choices.length){
   const a=Array.isArray(answer)?[...new Set(answer)].sort((x,y)=>x-y):[];
   const b=[...new Set(q.answerIndices)].sort((x,y)=>x-y);
   const correct=b.length>0&&a.length===b.length&&b.every((v,i)=>v===a[i]);
   return {correct,earned:correct?q.points:0,missing:[]};
  }
  if(typeof answer!=='string'||!answer.trim())return {correct:false,earned:0,missing:['미응답']};
  const g=q.grading,t=normalize(answer);
  // Ambiguous negation and laundry lists are left to the user's manual correction.
  const negative=/아니다|아님|하지않|되지않/.test(t)||/\b(?:not|isn't|isnt)\b/i.test(answer);
  const forbidden=g.forbidden&&matches(g.forbidden,t);
  if(negative||forbidden)return {correct:false,earned:0,missing:['부정·상충 표현 확인 필요']};
  if(g.aliases){
   const compact=t.replace(/^(?:정답은|정답|답은|답)/,'').replace(/(?:입니다|이다)$/,'');
   const correct=g.aliases.some(a=>normalize(a)===compact)||normalize(q.modelAnswer)===t;
   return {correct,earned:correct?q.points:0,missing:correct?[]:['허용 진단명·표현을 확인하세요']};
  }
  if(g.units){
   const locations=g.units.map(unit=>{const match=new RegExp(unit.heading,'i').exec(t);return match?{index:match.index,end:match.index+match[0].length}:null;});
   let earned=0;const missing=[];
   g.units.forEach((unit,i)=>{
    const start=locations[i];let segment='';
    if(start){const next=locations.filter(x=>x&&x.index>start.index).map(x=>x.index);segment=t.slice(start.end,next.length?Math.min(...next):t.length);}
    if(start&&unit.groups.every(group=>matches(group.patterns,segment)))earned++;
    else missing.push(unit.label);
   });
   return {correct:earned===q.points,earned,missing};
  }
  const missing=g.groups.filter(group=>!matches(group.patterns,t)).map(group=>group.label);
  const correct=missing.length===0;
  return {correct,earned:g.partial?g.groups.length-missing.length:correct?q.points:0,missing};
 }
 const canCorrect=q=>!q.choices.length||q.allowManual===true;
 function pointsFor(q,answer,overrides){return canCorrect(q)&&typeof overrides?.[q.id]==='boolean'?(overrides[q.id]?q.points:0):evaluate(q,answer).earned;}
 function correct(q,answer,overrides){return pointsFor(q,answer,overrides)===q.points;}
 function score(questions,answers,overrides){let earned=0,total=0;for(const q of questions){earned+=pointsFor(q,answers[q.id],overrides);total+=q.points;}return {earned,total};}
 const api={normalize,evaluate,pointsFor,correct,score,canCorrect};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ExamRules=api;
})(typeof window!=='undefined'?window:globalThis);
