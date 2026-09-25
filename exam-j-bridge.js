// Only active inside the exam explanation frame. Normal site views are unchanged.
(()=>{
 const params=new URLSearchParams(location.search);
 if(parent===window||params.get('examPreview')!=='1')return;
 const number=Number(params.get('question'));
 const report=type=>parent.postMessage({type,question:number},'*');
 try{
  const q=jblQuestions.find(q=>q.globalNumber===number);
  if(!q)throw Error('J question not found');
  const style=document.createElement('style');
  style.textContent='.masthead,.jbl-topbar,.jbl-bottom-nav,[data-jbl-edit],[data-jbl-save-files]{display:none!important}body.jbl-mode .jbl-wrap{width:100%;max-width:none;padding:12px 10px 28px!important}body.jbl-mode main{padding:0!important}';
  document.head.append(style);
  const s=standaloneState();s.linkedQuestionNumber=number;s.index=0;s.panel=null;
  s.answerShown[q.id]=true;s.explanationShown[q.id]=true;
  showView('jbl',false);renderJblStandalone();window.scrollTo(0,0);report('exam-j-ready');
 }catch{report('exam-j-error');}
 window.addEventListener('keydown',e=>{if(e.key==='Escape')report('exam-j-close');});
})();
