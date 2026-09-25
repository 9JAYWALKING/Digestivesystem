(function(root){
 'use strict';
 const normalize=v=>String(v??'').normalize('NFKC').toLowerCase().replace(/[\s\p{P}\p{S}]+/gu,'');
 const match=(patterns,t)=>patterns.some(p=>new RegExp(p,'i').test(t));
 function unitCount(units,t){
  const locations=units.flatMap((u,i)=>[...t.matchAll(new RegExp(u.heading,'gi'))].map(m=>({unit:i,index:m.index,end:m.index+m[0].length})));
  return units.filter((u,i)=>{
   return locations.filter(x=>x.unit===i).some(start=>{
    const next=locations.filter(x=>x.unit!==i&&x.index>start.index).map(x=>x.index);
    const segment=t.slice(start.end,next.length?Math.min(...next):t.length);
    return u.groups.every(g=>match(g.patterns,segment));
   });
  }).length;
 }
 function evaluate(q,answer){
  if(q.ungradable)return {correct:false,earned:0,missing:['채점 제외']};
  if(q.choices.length){
   const a=Array.isArray(answer)?[...new Set(answer)].sort((x,y)=>x-y):[],b=[...new Set(q.answerIndices)].sort((x,y)=>x-y);
   const correct=b.length>0&&a.length===b.length&&b.every((v,i)=>v===a[i]);return {correct,earned:correct?q.points:0,missing:[]};
  }
  if(typeof answer!=='string'||!answer.trim())return {correct:false,earned:0,missing:['미응답']};
  const g=q.grading,t=normalize(answer);
  const failed=()=>({correct:false,earned:0,missing:['채점 키워드와 표현 확인 필요']});
  // Negations in legitimate descriptions (e.g. absence of biliary change) are allowed.
  // Keyword matching is approximate, so feedback always offers manual correction.
  if(g.volumeMl){
   const clean=answer.trim().replace(/(?<=\d),(?=\d{3}(?:\D|$))/g,'');
   const m=/^(?:정답\s*[:：]?\s*)?(?:하루\s*)?(\d+(?:\.\d+)?)\s*(ml|cc|l|밀리리터|리터)\s*(?:입니다|이다)?[.]?$/i.exec(clean);
   const correct=!!m&&Number(m[1])*(['l','리터'].includes(m[2].toLowerCase())?1000:1)===g.volumeMl;
   return {correct,earned:correct?q.points:0,missing:correct?[]:['양과 단위 확인 필요']};
  }
  if(g.aliases){
   const compact=t.replace(/^(?:정답은|정답|답은|답)/,'').replace(/(?:입니다|이다)$/,'');
   const correct=g.aliases.some(a=>normalize(a)===compact||normalize(a)===t);
   return {correct,earned:correct?q.points:0,missing:correct?[]:['인정 표현 확인 필요']};
  }
  if(g.ordered){
   const hits=g.ordered.map(p=>{const m=new RegExp(p,'i').exec(t);return m?m.index:-1;});
   const correct=hits.every((x,i)=>x>=0&&(!i||x>hits[i-1]))&&!/아니|아님|\bnot\b/i.test(answer);
   return {correct,earned:correct?q.points:0,missing:correct?[]:['순서와 용어 확인 필요']};
  }
  if(/모두(?:틀|아니)|전부(?:틀|아니)|해당없|정답없/.test(t))return failed();
  if(g.alternatives){
   const names=[...new Set(g.alternatives.map(p=>p.groups[0].patterns.join('|')))];
   const correct=g.alternatives.some(p=>{
    const name=p.groups[0].patterns.join('|');
    return [...t.matchAll(new RegExp(name,'gi'))].some(start=>{
     const others=names.filter(x=>x!==name).flatMap(x=>[...t.matchAll(new RegExp(x,'gi'))]).filter(m=>m.index>start.index).map(m=>m.index);
     const segment=t.slice(start.index,others.length?Math.min(...others):t.length);
     return !/투여하지않|복용하지않|사용하지않|권하지않/.test(segment)&&p.groups.every(x=>match(x.patterns,segment));
    });
   });
   return {correct,earned:correct?q.points:0,missing:correct?[]:['약물·용량·복용법 조합 확인 필요']};
  }
  let earned=0;const missing=[];const weight=g.parts.reduce((s,p)=>s+p.weight,0);
  for(const p of g.parts){
   const hit=p.groups.filter(x=>match(x.patterns,t)).length;
   const ok=hit>=(p.minGroups??p.groups.length)&&(!p.units||unitCount(p.units,t)>=(p.minUnits??p.units.length));
   if(ok)earned+=q.points*p.weight/weight;else missing.push(p.label);
  }
  earned=Math.round(earned*10000)/10000;
  return {correct:missing.length===0,earned,missing};
 }
 const canCorrect=q=>!q.ungradable&&(!q.choices.length||q.allowManual===true);
 const pointsFor=(q,a,overrides)=>canCorrect(q)&&typeof overrides?.[q.id]==='boolean'?(overrides[q.id]?q.points:0):evaluate(q,a).earned;
 const correct=(q,a,o)=>!q.ungradable&&pointsFor(q,a,o)===q.points;
 function score(qs,answers,overrides){let earned=0,total=0;for(const q of qs){if(q.ungradable)continue;total+=q.points;earned+=pointsFor(q,answers[q.id],overrides);}return {earned:Math.round(earned*10000)/10000,total};}
 const api={normalize,evaluate,canCorrect,pointsFor,correct,score};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ExamRules=api;
})(typeof window!=='undefined'?window:globalThis);
