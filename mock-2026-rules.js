(function(root){
 'use strict';
 const normalize=value=>String(value??'').normalize('NFKC').toLowerCase().replace(/[\s\p{P}\p{S}]+/gu,'');
 const groups={
  1:[
   ['누출 처치 용이',/(?:누출|누공|leak).{0,100}(?:처치|치료|관리|treatment|management).{0,30}(?:용이|쉽|쉬|수월|편리|easy|easier)/,/(?:easy|easier|용이|쉬운|쉬워|수월).{0,50}(?:treatment|management|처치|치료).{0,60}(?:leak|누출)/],
   ['담즙 역류 감소',/(?:담즙|bile).{0,20}(?:역류|reflux).{0,20}(?:감소|적|낮|줄|덜|decreas|reduc|less|lower)/,/(?:lower|less|reduc\w*|decreas\w*).{0,20}(?:bile).{0,10}reflux/],
   ['넓은 근위부 절제연',/(?:근위|상부|proximal).{0,25}(?:절제연|절제범위|margin).{0,35}(?:확보|넓|충분|크|광범위|extens|wide|larg)/,/(?:넓|충분|광범위|extens|wide|larg).{0,35}(?:근위|proximal).{0,20}(?:절제연|절제범위|margin)/],
   ['방사선 조사 범위 밖 문합',/(?:방사선|radiation).{0,30}(?:범위|조사야|조사영역|조사부위|조사구역|field|port).{0,35}(?:밖|외부|외측|피하|벗어|outside)/,/(?:outside|beyond).{0,30}radiation.{0,20}(?:field|port)/,/(?:방사선).{0,15}(?:조사|치료).{0,12}(?:받지않|되지않).{0,25}(?:문합|위치|부위)/]
  ],
  42:[
   ['철 과부하·침착',/(?:철|iron).{0,20}(?:과부하|과잉|축적|침착|overload|accumulat|deposit)/],
   ['장기 손상',/(?:장기|간|췌장|심장|organ|liver|pancrea|heart).{0,35}(?:손상|장애|damage|injury|dysfunction)/,/(?:간경변|당뇨|심근병|cirrhosis|diabetes|cardiomyopathy)/],
   ['Hepcidin 감소',/(?:hepcidin|헵시딘|헵시딘).{0,25}(?:감소|저하|결핍|부족|decreas|reduc|deficien)/,/(?:decreas\w*|reduc\w*|deficien\w*).{0,15}hepcidin/],
   ['장 철흡수 증가',/(?:장|철|intestinal|iron).{0,20}(?:흡수|absorption).{0,20}(?:증가|증대|촉진|increas|enhanc)/,/(?:increas\w*|enhanc\w*).{0,20}(?:intestinal|iron).{0,15}absorption/],
   ['Prussian blue 양성',/(?:prussianblue|프러시안블루|프루시안블루|프러시안청).{0,25}(?:양성|positive|푸른|청색|파란|blue)/,/(?:양성|positive).{0,15}prussianblue/]
  ]
 };
 // Conservative checks; manual correction is available for legitimate paraphrases.
 function contradiction(n,value){
  const t=normalize(value);
  if(/(?:아니다|아니며|아니고|하지않|되지않|않는다|not|negative)/.test(t)&&n===42)return true;
  if(n===1)return /(?:쉽지않|용이하지않|누출.{0,25}어렵|역류.{0,15}(?:증가|많|높)|절제연.{0,15}좁|조사(?:범위|야).{0,6}(?:안에|내에)|\bnot\b)/.test(t)||/\b(?:not|no)\b/i.test(value);
  if(n===42)return /(?:hepcidin|헵시딘)(?:작용|활성|농도|수치|생성|분비|의|이|은|가|는|activity|level|production|is)*(?:증가|increas)|흡수(?:가|는|의|율|이)*(?:감소|저하)|prussianblue(?:염색|는|가|이|의|stain|staining)*(?:음성|negative)/.test(t);
  return false;
 }
 function evaluate(q,answer){
  if(q.choices.length){
   const expected=[...new Set(q.answerIndices)].sort((a,b)=>a-b);
   const actual=Array.isArray(answer)?[...new Set(answer)].sort((a,b)=>a-b):[];
   return {correct:expected.length>0&&actual.length===expected.length&&expected.every((v,i)=>v===actual[i]),missing:[]};
  }
  if(typeof answer!=='string'||!answer.trim())return {correct:false,missing:['미응답']};
  const text=normalize(answer);
  if(q.id==='mock-45-2'){
   const diagnosis=/(?:간농양|간내농양|liverabscess|hepaticabscess)/.test(text);
   const drainage=/(?:경피적?(?:카테터|도관)?배액(?:술)?|percutaneous(?:catheter)?drainage)/.test(text)||/\bpcd\b/i.test(answer);
   const negative=/(?:아니|아님|않|불필요|금기)/.test(text)||/\b(?:not|no|without)\b/i.test(answer);
   return {correct:diagnosis&&drainage&&!negative,missing:[...(!diagnosis?['간농양']:[]),...(!drainage?['경피적 카테터 배액술(PCD)']:[])],contradiction:negative};
  }
  if(q.globalNumber===134)return {correct:text==='eusguidedfna',missing:[]};
  if(q.globalNumber===133){
   const terms=['hiatus','intrathoracic','substernal','subcutaneous'];
   const found=text.match(/hiatus|intrathoracic|substernal|subcutaneous/g)||[];
   const invalid=/아니|않|아님/.test(text)||/\b(?:not|no)\b/i.test(answer);
   return {correct:!invalid&&found.join('|')===terms.join('|'),missing:[]};
  }
  const rules=groups[q.globalNumber];if(!rules)return {correct:false,missing:['채점 기준 없음']};
  const missing=rules.filter(([label,...variants])=>!variants.some(re=>re.test(text))).map(([label])=>label);
  const negative=contradiction(q.globalNumber,answer);
  return {correct:!negative&&missing.length===0,missing,contradiction:negative};
 }
 function correct(q,answer,overrides){return !q.choices.length&&typeof overrides?.[q.id]==='boolean'?overrides[q.id]:evaluate(q,answer).correct;}
 function score(questions,answers,overrides){let earned=0,total=0;for(const q of questions){total+=q.points;if(correct(q,answers[q.id],overrides))earned+=q.points;}return {earned,total};}
 const api={normalize,evaluate,correct,score,groups};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ExamRules=api;
})(typeof window!=='undefined'?window:globalThis);
