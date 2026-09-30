window.PATHOLOGY_MAP = (function createPathologyMap() {
  'use strict';
  const version = 1;

  const field = (id, label, answer, aliases = [], hint = '') => ({ id, label, answer, aliases, hint });
  const node = (id, label, heading, clue, fields, aliases = [], questions = [], image = '') => ({ id, label, heading, clue, fields, aliases, questions, image });
  const data = [
    { id:'congenital', label:'선천성 기형', nodes:[
      node('atresia','식도폐쇄 · 기관식도샛길','식도폐쇄와 기관식도샛길','위쪽 식도가 막힌 주머니로 끝나고, 아래쪽 식도가 기관과 연결될 수 있다.',[
        field('type','가장 흔한 형태','C형',['C','type C'],'A–E 중 하나'),
        field('rate','C형 빈도 · 강의록 기준','86.6%',['86.6'],'80%대')
      ],['식도폐쇄','기관식도샛길','esophageal atresia','tracheoesophageal fistula','TEF'],[], 'tracheoesophageal-fistula-types.jpg'),
      node('bronchogenic','기관지원성 낭종','기관지원성 낭종과 장원성·중복 낭종','기관지 계통의 상피로 덮인 앞창자 기원 낭종이다.',[
        field('lining','피복 상피','거짓중층섬모원주상피',['pseudostratified ciliated columnar epithelium','위중층섬모원주상피'],'섬모를 가진 기관지형 상피')
      ],['bronchogenic cyst','기관지성 낭종'],[], 'bronchogenic-cyst-histology.jpg'),
      node('enterogenous','장원성 · 중복 낭종','기관지원성 낭종과 장원성·중복 낭종','소화관 계통으로 분화하며 식도형 상피가 피복할 수 있는 낭종이다.',[
        field('lining','Wiki에서 제시한 식도형 피복 상피','중층편평상피',['stratified squamous epithelium'],'정상 식도를 덮는 상피')
      ],['장원성 낭종','중복 낭종','enterogenous cyst','duplication cyst'],[], 'enterogenous-duplication-cyst-histology.jpg')
    ]},
    { id:'nonneoplastic', label:'기타 비종양성 질환', nodes:[
      node('achalasia','Achalasia','식도이완불능증 · Achalasia','식도 몸통의 연동 운동이 사라지고, 삼킬 때 LES가 충분히 이완하지 못한다.',[
        field('plexus','억제성 신경세포가 소실되는 신경얼기','Myenteric plexus',['Auerbach plexus','Auerbach’s plexus','Auerbach','근육층신경얼기','근층간신경총'],'점막밑이 아니라 근육층'),
        field('secondary','이차성 원인의 대표 질환','Chagas병',['Chagas disease','Chagas','샤가스병'],'자율신경얼기를 파괴하는 감염'),
        field('cancer','위험이 증가하는 악성종양','편평세포암종',['SCC','squamous cell carcinoma','식도 편평세포암종'],'샘암종과 구분')
      ],['식도이완불능증','이완불능증'],[25], 'achalasia-gross.jpg'),
      node('sliding','Sliding hernia','식도열공탈장 · Hiatal hernia','위식도접합부와 위의 일부가 함께 횡격막 위로 올라간다.',[
        field('type','다른 이름','Axial type',['axial','축성','축성 탈장'],'축성 / 비축성'),
        field('effect','대표적으로 연결되는 식도염','역류성 식도염',['reflux esophagitis','GERD','위식도역류질환'],'LES의 역류 방지 기능이 약해진다')
      ],['미끄럼형 식도열공탈장','미끄럼형','sliding hiatal hernia','축성 식도열공탈장','axial hernia'],[26,735,770], 'hiatal-hernia-types.jpg'),
      node('paraesophageal','Paraesophageal hernia','식도열공탈장 · Hiatal hernia','위식도접합부는 제자리에 있고 위의 일부만 식도 옆으로 올라간다.',[
        field('type','다른 이름','Nonaxial type',['nonaxial','비축성','rolling type','rolling'],'축성 / 비축성'),
        field('vascular','돌출된 위의 혈류가 차단되는 합병증','교액',['strangulation'],'조여서 혈류가 막힌다'),
        field('lumen','통과 장애가 생기는 합병증','폐쇄',['obstruction'],'내용물의 통과가 막힌다')
      ],['식도주위형 식도열공탈장','식도주위형','비축성 식도열공탈장','rolling hernia'],[735,769], 'hiatal-hernia-types.jpg'),
      node('varices','Esophageal varices','식도정맥류 · Esophageal varices','문맥–전신정맥 우회로가 발달하면서 식도 원위부의 정맥이 확장된다.',[
        field('cause','핵심 혈역학적 원인','문맥고혈압',['portal hypertension'],'간경변으로 문맥 혈류가 방해된다'),
        field('layer','확장된 정맥이 위치하는 층','점막밑층',['점막하층','submucosa'],'상피 바로 안이 아니라 그 아래 벽층')
      ],['식도정맥류','정맥류'],[], 'esophageal-varices-histology.jpg')
    ]},
    { id:'inflammation', label:'식도염 · 점막 손상', nodes:[
      node('mallory','Mallory–Weiss 열상','Mallory–Weiss 열상','반복 구토 후 위식도접합부를 세로로 가로지르는 점막 열상과 출혈이 생긴다.',[
        field('fullwall','전층 파열일 때 구분할 질환','Boerhaave 증후군',['Boerhaave','Boerhaave syndrome','보어하브 증후군'],'점막 열상과 식도벽 전층 파열의 구분')
      ],['Mallory Weiss','Mallory Weiss syndrome','Mallory Weiss tear','말로리 바이스 증후군'],[], 'mallory-weiss-laceration.jpg'),
      node('chemical','화학물질 · 약물성 식도염','화학물질·약물성 식도염','부식성 물질, 걸린 알약, 방사선 등의 직접 손상으로 괴사·궤양이 생길 수 있다.',[
        field('late','손상이 아문 뒤 반흔 때문에 생기는 변화','협착',['반흔성 협착','stricture','stenosis'],'치유 과정에서 내강이 좁아진다')
      ],['화학물질성 식도염','약물성 식도염','화학성 식도염','chemical esophagitis']),
      node('candida','Candida 식도염','칸디다 식도염','흰색 판·거짓막이 관찰되며 조직에서 진균 형태를 확인한다.',[
        field('fungus','조직에서 균사와 함께 확인하는 형태','거짓균사',['pseudohyphae','가성균사'],'hyphae와 함께 관찰되는 진균 형태')
      ],['칸디다 식도염','식도 칸디다증','Candida esophagitis','Candida','칸디다'],[156,736], 'candida-esophagitis-histology.jpg'),
      node('hsv','HSV 식도염','단순헤르페스바이러스 식도염','다핵성과 핵 형태 변화가 단서이며 궤양 가장자리의 상피세포가 중요하다.',[
        field('site','생검에서 중요한 궤양의 부위','가장자리',['궤양 가장자리','ulcer edge','edge','margin'],'바닥과 가장자리 중 선택')
      ],['HSV','Herpes esophagitis','HSV esophagitis','단순헤르페스바이러스 식도염','헤르페스 식도염'],[771], 'herpes-esophagitis-histology.jpg'),
      node('cmv','CMV 식도염','거대세포바이러스 식도염','커진 감염세포의 핵내봉입체가 단서이며 간질세포·혈관내피세포를 확인한다.',[
        field('inclusion','대표적인 핵내봉입체 모양','Owl-eye',['owl eye','올빼미눈','올빼미 눈 모양'],'동물의 눈에 비유한다'),
        field('site','감염세포를 확인하는 궤양의 부위','바닥',['궤양 바닥','ulcer base','base'],'HSV와 생검 위치를 대비')
      ],['CMV','CMV esophagitis','거대세포바이러스 식도염'],[], 'cmv-esophagitis-histology.jpg'),
      node('reflux','Reflux esophagitis','역류성 식도염 · Reflux esophagitis','위 내용물의 역류로 편평상피가 손상되며 기저층과 고유판 유두의 변화가 나타난다.',[
        field('basal','기저층에서 나타나는 변화','기저층 과증식',['basal zone hyperplasia','basal hyperplasia','기저층 과형성'],'증식세포층의 두께가 증가'),
        field('papilla','고유판 유두에서 나타나는 변화','고유판 유두 연장',['papillary elongation','elongation of lamina propria papillae','유두 연장'],'상피 위쪽으로 길게 뻗는다')
      ],['역류성 식도염','GERD','위식도역류질환'],[26], 'reflux-esophagitis-basal-zone-hyperplasia.jpg'),
      node('eoe','Eosinophilic esophagitis','호산구성 식도염 · Eosinophilic esophagitis','알레르기·아토피 배경과 관련되며 내시경에서 동심원 고리들이 관찰될 수 있다.',[
        field('count','조직 기준 · 호산구 / HPF','15개 이상',['15','≥15','15개','15 이상','15개/HPF 이상'],'고배율 한 시야의 호산구 수'),
        field('ring','고리형 식도의 명칭','Trachealization',['기관화','기관화 소견'],'기관의 연골 고리처럼 보인다')
      ],['호산구성 식도염','EoE'],[773], 'eosinophilic-esophagitis-endoscopy.jpg')
    ]},
    { id:'metaplasia', label:'화생 · 전암성 변화', nodes:[
      node('barrett','Barrett esophagus','Barrett esophagus','만성 역류 후 편평상피가 장형 원주상피로 바뀌며, 단순 원주상피만으로는 판단하지 않는다.',[
        field('cell','장상피화생을 확인하는 핵심 세포','Goblet cell',['배상세포','술잔세포','goblet cells'],'점액을 포함하는 장형 세포'),
        field('step','화생 다음의 전암성 변화','Dysplasia',['이형성'],'metaplasia → ? → carcinoma'),
        field('cancer','진행할 수 있는 암종','Adenocarcinoma',['샘암종','선암','식도샘암종','식도 선암'],'편평세포암종과 대비')
      ],['Barrett 식도','바렛 식도','Barrett','바레트 식도'],[], 'barrett-esophagus-histology.jpg')
    ]},
    { id:'benign', label:'양성종양', nodes:[
      node('papilloma','Squamous papilloma','Squamous papilloma (편평유두종)','성숙한 편평상피가 중심 축을 유두 모양으로 둘러싸는 양성 상피성 종양이다.',[
        field('core','유두 중심의 축','Fibrovascular core',['섬유혈관성 축','섬유혈관축'],'섬유조직과 혈관으로 구성')
      ],['편평유두종','식도 편평유두종'],[], 'squamous-papilloma-histology.jpg'),
      node('leiomyoma','Leiomyoma','식도종양','',[],['평활근종'])
    ]},
    { id:'malignant', label:'악성종양', nodes:[
      node('scc','Squamous cell carcinoma','Squamous cell carcinoma (식도 편평세포암종)','편평분화를 보이며 음주·흡연 및 만성 자극과 연관된다.',[
        field('site','호발 위치','중부 1/3',['중부','중간 1/3','middle third','middle'],'상부 / 중부 / 하부'),
        field('pearl','고분화 종양의 대표 구조','Keratin pearl',['각질진주','각화진주'],'각질이 동심원 모양으로 쌓인다'),
        field('marker','강의록의 편평분화 표지자','p40',[],'p로 시작하는 표지자')
      ],['SCC','편평세포암종','식도 편평세포암종','편평세포암'],[157], 'squamous-cell-carcinoma-keratin-pearl.jpg'),
      node('adeno','Adenocarcinoma','식도샘암종 · Adenocarcinoma','불규칙한 악성 샘구조와 점액을 만들며, 원위부 식도에 주로 발생한다.',[
        field('site','호발 위치','하부 1/3',['하부','원위부','아래쪽 1/3','lower third','distal'],'SCC의 위치와 대비'),
        field('background','대표적인 배경 병변','Barrett 식도',['Barrett esophagus','Barrett','바렛 식도','바레트 식도'],'역류 → 장상피화생'),
        field('marker','강의록에서 샘분화와 비교한 표지자','CK7',[],'cytokeratin 계열')
      ],['식도샘암종','샘암종','선암','식도선암'],[], 'adenocarcinoma-histology-a.jpg')
    ]}
  ];
  const normal = value => String(value || '').normalize('NFKC').toLowerCase().replace(/≥/g,'>=').replace(/≤/g,'<=').replace(/[’‘']/g,'').replace(/[^\p{L}\p{N}.<>=]/gu,'');
  const matches = (value, item) => [item.answer, ...(item.aliases || [])].some(answer => normal(value) !== '' && normal(value) === normal(answer));
  const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const stomachData = [
  {id:'congenital',label:'선천성 기형',nodes:[
    node('heterotopic-pancreas','Heterotopic pancreas','이소성 이자 · Heterotopic pancreas','위벽에 정상적으로 분화한 이자 조직이 존재한다.',[
      field('meaning','핵심 개념','이소성 이자',['이소성 췌장','ectopic pancreas','heterotopic pancreas'],'정상 조직이 다른 위치에 존재')
    ],['이소성 이자','이소성 췌장']),
    node('pyloric-stenosis','Congenital pyloric stenosis','선천성 날문협착 · Congenital pyloric stenosis','생후 약 3주에 분출성 구토가 나타나는 영아의 날문 병변이다.',[
      field('muscle','비후하는 근육층','돌림근층',['윤상근층','circular muscle','circular muscle layer'],'날문을 고리처럼 둘러싼 근육'),
      field('sex','더 흔한 성별','남아',['남자','남성','male'],'남아 / 여아')
    ],['선천성 날문협착','비후성 유문협착증','유문협착증'])
  ]},
  {id:'acute',label:'급성 손상 · 미란과 궤양',nodes:[
    node('acute-gastritis','Acute gastritis','급성위염 · Acute gastritis','점막 손상 부위에 급성 염증세포가 침윤한다. 염증이 거의 없는 gastropathy와 구별한다.',[
      field('cell','활동성 염증을 나타내는 세포','중성구',['neutrophil','neutrophils','호중구'],'위오목·샘 상피로 침윤'),
      field('erosion','미란이 넘지 않는 층','점막근육층',['muscularis mucosae','점막근층'],'궤양과 깊이를 구별하는 경계')
    ],['급성위염','급성 위염'],[], 'acute-gastritis-neutrophils-in-gland.jpg'),
    node('acute-ulcer','Acute gastric ulcer','급성위궤양 · Acute gastric ulcer','중증 스트레스 상황에서 작은 궤양들이 여러 곳에 생기며 만성 궤양과 다른 바닥을 보인다.',[
      field('scar','만성 궤양과 달리 없는 변화','섬유화',['fibrosis','섬유성 반흔','fibrous scar'],'오래된 치유 반응과 비교'),
      field('depth','궤양이 넘어서는 층','점막근육층',['muscularis mucosae','점막근층'],'미란보다 깊다')
    ],['급성위궤양','급성 위궤양'],[], 'acute-gastric-ulcers-gross.jpg'),
    node('curling','Curling ulcer','급성위궤양 · Acute gastric ulcer','심한 피부 손상 후 생기는 스트레스성 궤양이다.',[
      field('cause','대표적인 유발 상황','화상',['burn','burns','심한 화상'],'Cushing 궤양과 구분')
    ],['Curling','Curling 궤양','컬링 궤양']),
    node('cushing','Cushing ulcer','급성위궤양 · Acute gastric ulcer','두개강 내 질환과 관련된 스트레스성 궤양이다.',[
      field('cause','대표적인 유발 상황','두개내압 상승',['두개강내압 상승','increased intracranial pressure','뇌압 상승','뇌손상'],'Curling 궤양과 구분')
    ],['Cushing','Cushing 궤양','쿠싱 궤양'])
  ]},
  {id:'chronic',label:'만성위염 · 원인과 분포의 대비',nodes:[
    node('hp-gastritis','H. pylori 만성위염','Helicobacter pylori 만성위염','점액층의 균, 만성 활동성 염증, 림프소포와 장상피화생을 연결한다.',[
      field('site','주로 시작하는 부위','날문방',['antrum','전정부','위전정부'],'자가면역위염의 몸통·바닥과 대비'),
      field('enzyme','산성 환경 생존에 중요한 효소','Urease',['요소분해효소'],'요소를 분해한다'),
      field('metaplasia','장상피화생을 보여주는 세포','Goblet cell',['배상세포','술잔세포','goblet cells'],'점액을 담은 장형 상피세포')
    ],['H. pylori 위염','헬리코박터 위염','helicobacter pylori gastritis','HP 위염'],[737], 'helicobacter-pylori-surface-mucus.jpg'),
    node('autoimmune-gastritis','Autoimmune gastritis','자가면역위염 · Autoimmune gastritis','벽세포와 내인자에 대한 자가면역반응 때문에 산 분비와 영양소 흡수가 함께 저하된다.',[
      field('site','주된 침범 부위','몸통·바닥',['body fundus','body and fundus','체부 저부','위체부 위저부','몸통 바닥'],'날문방은 상대적으로 보존'),
      field('vitamin','흡수가 감소하는 비타민','Vitamin B12',['B12','비타민 B12'],'내인자가 필요한 비타민'),
      field('gastrin','혈중 gastrin의 변화','증가',['상승','increase','increased','높다'],'위산 감소에 대한 반응'),
      field('anemia','대표적인 빈혈','악성빈혈',['pernicious anemia'],'B12 결핍과 연결')
    ],['자가면역위염','자가면역 위염'],[420], 'autoimmune-gastritis-parietal-cell-antibody.jpg')
  ]},
  {id:'peptic',label:'소화성 궤양 · 형태와 과분비',nodes:[
    node('peptic-ulcer','만성 소화성 궤양','소화성 궤양 · Peptic ulcer','원형·타원형의 punched-out 결손과 깨끗한 바닥, 궤양을 향해 모이는 주름을 보인다.',[
      field('site','위에서의 호발부위','날문방 작은굽이',['antrum lesser curvature','전정부 소만','위전정부 소만','작은굽이','소만부'],'위의 바깥쪽 큰굽이와 대비'),
      field('layer1','궤양 바닥의 첫 층 · 표면','괴사성 잔해',['necrotic debris','necrotic fibrinoid debris','괴사층','괴사조직'],'NIGS의 N'),
      field('layer2','두 번째 층','염증세포층',['염증세포','inflammatory cells','염증층'],'NIGS의 I'),
      field('layer3','세 번째 층','육아조직',['granulation tissue'],'NIGS의 G'),
      field('layer4','네 번째 층 · 가장 깊은 층','섬유성 반흔',['fibrous scar','fibrosis','섬유화','반흔조직'],'NIGS의 S')
    ],['소화성 궤양','peptic ulcer','chronic peptic ulcer'],[271,417,738], 'peptic-ulcer-four-histologic-layers.jpg'),
    node('zes','Zollinger–Ellison 증후군','Zollinger–Ellison 증후군','이자 또는 십이지장의 호르몬 분비 종양이 위산 과다와 다발성 궤양을 일으킨다.',[
      field('tumor','원인 종양','Gastrinoma',['가스트린종'],'위산 분비를 자극하는 호르몬'),
      field('gastrin','증가하는 호르몬','Gastrin',['가스트린'],'자가면역위염과 달리 위산도 증가')
    ],['Zollinger Ellison','ZES','졸링거 엘리슨 증후군'],[160,418,774], 'giant-cerebriform-rugal-folds.jpg')
  ]},
  {id:'polyps',label:'용종 · 재생성 병변과 이형성',nodes:[
    node('hyperplastic-polyp','Hyperplastic polyp','과형성용종 · Hyperplastic polyp','염증성 배경에서 위오목 상피와 샘이 재생성으로 증식한다.',[
      field('glands','샘의 특징적인 변화','낭성 확장',['cystic dilation','cystic dilatation','낭성 샘확장'],'늘어난 샘의 모양')
    ],['과형성용종','과형성 용종'],[], 'gastric-hyperplastic-polyp.jpg'),
    node('adenoma','Gastric adenoma','위선종 · Gastric adenoma','샘상피가 종양성으로 증식하며 길고 진한 핵, 핵의 거짓중층화와 샘의 밀집을 보인다.',[
      field('key','과형성용종과 구별하는 상피 변화','이형성',['dysplasia','상피 이형성'],'단순한 재생성 증식이 아니다'),
      field('architecture','위험이 더 높은 샘구조 · 관상형과 대비','융모형',['villous','villous type'],'tubular / villous')
    ],['위선종','위 선종','선종'],[], 'gastric-adenoma-villous.jpg')
  ]},
  {id:'depth',label:'위샘암종 · 침윤 깊이',nodes:[
    node('early-cancer','Early gastric cancer','조기위암 · Early gastric cancer','림프절 전이가 있더라도 위벽의 얕은 층에만 국한되면 이 범주에 속한다.',[
      field('deepest','허용되는 가장 깊은 층','점막밑층',['submucosa','점막하층'],'고유근육층에 도달하기 전'),
      field('t1a','T1a의 침범 층','점막층',['mucosa','점막'],'T1b와 대비'),
      field('type3','육안분류 0-III의 형태','굴착형',['excavated','excavated type','함몰궤양형'],'0-IIc의 얕은 함몰과 구별')
    ],['조기위암','EGC'],[159], 'early-gastric-cancer-type-zero.jpg'),
    node('advanced-cancer','Advanced gastric cancer','진행위암 · Advanced gastric cancer','침윤 깊이로 조기위암과 구별하며 육안 형태는 Borrmann 분류로 나눈다.',[
      field('depth','진행위암이 되는 최소 침범 층','고유근육층',['muscularis propria','proper muscle','고유근층'],'점막근육층과 혼동하지 않기')
    ],['진행위암','AGC'],[270,272,419], 'borrmann-advanced-gastric-cancer-types.jpg')
  ]},
  {id:'borrmann',label:'위샘암종 · Borrmann 육안분류',nodes:[
    node('borrmann1','Borrmann I','진행위암 · Advanced gastric cancer','진행위암이 내강으로 돌출하는 종괴를 만든다.',[
      field('shape','육안 형태','폴립형',['polypoid','융기형','polypoid type'],'궤양보다는 돌출 종괴')
    ],['Borrmann 1','Borrmann I형','I형','1형'],[270,272,419]),
    node('borrmann2','Borrmann II','Borrmann II형과 III형의 육안 감별','궤양을 둘러싼 융기성 경계가 뚜렷하고 주변 침윤이 비교적 제한된다.',[
      field('shape','육안 형태','궤양융기형',['ulcerofungating','ulcerofungating type','국한궤양형'],'주변으로 넓게 스며드는 III형과 대비')
    ],['Borrmann 2','Borrmann II형','II형','2형'],[270,272,419], 'assets/lecture-11-stomach-pathology-part2/borrmann-type-two-ulcer-gross-a.jpg'),
    node('borrmann3','Borrmann III','Borrmann II형과 III형의 육안 감별','궤양 주변으로 종양이 넓게 침윤하며 벽의 비후와 주름의 단절이 관찰된다.',[
      field('shape','육안 형태','궤양침윤형',['ulceroinfiltrative','ulceroinfiltrative type'],'II형보다 넓은 주변 침윤'),
      field('frequency','Borrmann 분류 중 빈도','가장 흔함',['가장 흔하다','최다','most common'],'강의록의 대표 유형')
    ],['Borrmann 3','Borrmann III형','III형','3형'],[270,272,739], 'assets/lecture-11-stomach-pathology-part2/borrmann-type-three-cross-sections.jpg'),
    node('borrmann4','Borrmann IV','진행위암 · Advanced gastric cancer','뚜렷한 국소 궤양보다 위벽 전체의 미만성 침윤과 두꺼워짐이 중심이다.',[
      field('shape','육안 형태','미만침윤형',['diffuse infiltrative','미만성 침윤형'],'국소 종괴보다 넓은 벽 침윤'),
      field('name','가죽병 모양의 위를 이르는 용어','Linitis plastica',['가죽병위','경성위'],'위벽이 뻣뻣해진다')
    ],['Borrmann 4','Borrmann IV형','IV형','4형'],[270,272], 'assets/lecture-11-stomach-pathology-part2/borrmann-type-four-linitis-plastica.jpg')
  ]},
  {id:'lauren',label:'위샘암종 · Lauren 조직학적 분류',nodes:[
    node('intestinal','Lauren 장형','장형 · Intestinal type','샘을 형성하는 종양세포가 팽창성으로 자라며 만성 위축성 위염과 연결된다.',[
      field('background','대표적인 배경 점막 변화','장상피화생',['intestinal metaplasia'],'위점막이 장형 상피로 바뀐다'),
      field('structure','암세포가 형성하는 구조','샘',['glands','gland','샘구조','선구조'],'미만형은 잘 형성하지 못한다')
    ],['intestinal type','장형','장형 위암'],[270,272], 'assets/lecture-11-stomach-pathology-part2/gastric-adenocarcinoma-intestinal-type.jpg'),
    node('diffuse','Lauren 미만형','미만형 · Diffuse type','서로 잘 붙지 않는 세포가 하나씩 흩어져 위벽을 침윤하며 장상피화생 없이도 발생한다.',[
      field('cell','세포 내 점액이 핵을 밀어내는 형태','반지세포',['signet ring cell','signet-ring cell','인환세포'],'세포 밖 점액웅덩이와 구별'),
      field('gene','세포 결합과 관련된 대표 유전자','CDH1',['E-cadherin','E cadherin'],'GS형과도 연결된다')
    ],['diffuse type','미만형','미만형 위암'],[28,259,270,272], 'assets/lecture-11-stomach-pathology-part2/gastric-adenocarcinoma-diffuse-signet-ring.jpg')
  ]},
  {id:'tcga',label:'위샘암종 · TCGA 분자분류',nodes:[
    node('ebv','EBV 양성형','TCGA 분자분류','바이러스와 연관되며 PD-L1/PD-L2 과발현과 면역세포 신호가 특징이다.',[
      field('mutation','대표적인 돌연변이','PIK3CA',[],'PI3K 신호전달 계열')
    ],['EBV','EBV positive','EBV-positive'],[30,270,272]),
    node('msi','MSI형','TCGA 분자분류','DNA 불일치 복구 이상으로 반복서열이 불안정해지고 과돌연변이 양상을 보인다.',[
      field('silencing','침묵되는 대표 복구 유전자','MLH1',[],'불일치 복구에 관여')
    ],['MSI','MSI-high','microsatellite instability','MSI 불안정형'],[30,270,272]),
    node('gs','Genomically stable형','TCGA 분자분류','CDH1·RHOA 변화와 세포 간 결합력 상실이 대표적이다.',[
      field('histology','연관되는 Lauren 조직형','미만형',['diffuse','diffuse type'],'샘형성보다 개별 세포 침윤')
    ],['GS','genomically stable','GS형'],[259,270,272]),
    node('cin','Chromosomal instability형','TCGA 분자분류','장형 조직학과 RTK–RAS 경로 활성화가 연결된다.',[
      field('mutation','대표적인 돌연변이','TP53',['p53'],'종양억제유전자')
    ],['CIN','chromosomal instability','CIN형'],[270,272])
  ]},
  {id:'other-tumors',label:'다른 종양 · MALT · GIST · NET',nodes:[
    node('malt','MALT 림프종','MALT 림프종','만성 H. pylori 자극과 연결되는 저등급 B세포림프종으로, 종양세포가 위샘을 파괴한다.',[
      field('lesion','림프종세포가 샘상피를 침범하는 소견','Lymphoepithelial lesion',['림프상피병변','림프상피 병변'],'림프구와 상피가 함께 들어가는 명칭'),
      field('translocation','대표적인 염색체 전좌','t(11;18)',['11;18','11 18'],'API2–MALT1 융합'),
      field('marker','대표 B세포 표지자 하나','CD20',['CD19'],'CD5·CD10과 구별')
    ],['MALT lymphoma','위 MALT 림프종'],[741], 'assets/lecture-11-stomach-pathology-part2/gastric-malt-lymphoma-lymphoepithelial-lesion.jpg'),
    node('gist','GIST','위장관기질종양 · Gastrointestinal stromal tumor','위장관 박동조율세포 계통에서 유래하며 방추형 또는 상피양 세포로 이루어진다.',[
      field('origin','기원 세포','Cajal 사이질세포',['interstitial cell of Cajal','Cajal','카할세포','Cajal 세포'],'장운동의 박동조율세포'),
      field('marker','대표적인 양성 면역표지자','c-KIT',['KIT','CD117'],'tyrosine kinase receptor'),
      field('risk1','위험도 기준 · 종양의 크기 외','유사분열 수',['mitotic count','mitosis','유사분열','유사분열수'],'50 HPF당 측정하는 항목')
    ],['위장관기질종양','gastrointestinal stromal tumor'],[33,607], 'assets/lecture-11-stomach-pathology-part2/gist-spindle-cell-histology.jpg'),
    node('net','Gastric NET','위 신경내분비종양 · Gastric neuroendocrine tumor','비교적 균일한 종양세포가 들보·소포 형태로 배열되며 신경내분비 표지자에 양성이다.',[
      field('marker','대표적인 면역표지자 하나','Chromogranin',['chromogranin A','synaptophysin'],'분비과립 또는 시냅스소포 표지자'),
      field('grade','유사분열 수와 함께 등급을 결정하는 지표','Ki-67 index',['Ki67','Ki-67','Ki67 index'],'증식 중인 세포 비율')
    ],['위 신경내분비종양','위 NET','NET','gastric neuroendocrine tumor'],[161,426], 'assets/lecture-11-stomach-pathology-part2/gastric-neuroendocrine-tumor-histology.jpg'),
    node('net1','위 NET Type I','위 NET의 세 유형','고가스트린혈증과 무위산증, 악성빈혈이 함께 나타나는 배경에서 생긴다.',[
      field('background','배경 질환','자가면역위염',['autoimmune gastritis','만성 위축성 자가면역위염'],'위산 감소에 대한 gastrin 상승')
    ],['NET 1형','NET I형','Type I','Type 1','위 NET 1형']),
    node('net2','위 NET Type II','위 NET의 세 유형','MEN1에서 gastrinoma와 연결되어 생기며 고가스트린혈증과 위산 과분비가 동반된다.',[
      field('syndrome','연관 증후군','Zollinger–Ellison 증후군',['ZES','Zollinger Ellison','Zollinger Ellison syndrome'],'다발성 소화성 궤양과 연결')
    ],['NET 2형','NET II형','Type II','Type 2','위 NET 2형']),
    node('net3','위 NET Type III','위 NET의 세 유형','뚜렷한 고가스트린혈증 없이 산발적으로 생기며 대개 단일 종괴이다.',[
      field('prognosis','Type I·II와 비교한 예후','더 나쁨',['나쁘다','불량','나쁨','더 나쁘다','worse'],'발생 배경이 다른 유형과 비교')
    ],['NET 3형','NET III형','Type III','Type 3','위 NET 3형'])
  ]}
];

  // Concept IDs do not depend on displayed names or question numbering.
  const decks = {
    10: {courseId:10, title:'식도 병리', namespace:'esophagus', imageRoot:'assets/lecture-10-esophagus-pathology/', data},
    11: {courseId:11, title:'위 병리', namespace:'stomach', imageRoot:'assets/lecture-11-stomach-pathology/', data:stomachData}
  };
  function createDeck(config) {
  const {data,courseId,title,imageRoot}=config;
  const key='digestive-pathology-map-'+courseId+'-v1';
  const nodes = data.flatMap(group=>group.nodes);
  let state = {mode:'overview',group:'all',attempts:{},records:{},collapsed:[],retry:false,retryIds:[],images:[]};
  let loaded = false, storageOK = true;
  function load() {
    if (loaded) return; loaded = true;
    try {
      const saved=JSON.parse(localStorage.getItem(key)||'null');
      if(saved?.version===version) {
        state.mode=['overview','features','diagnosis'].includes(saved.mode)?saved.mode:'overview';
        state.group=['all',...data.map(g=>g.id)].includes(saved.group)?saved.group:'all';
        for(const prop of ['attempts','records']) if(saved[prop]&&typeof saved[prop]==='object'&&!Array.isArray(saved[prop])) state[prop]=saved[prop];
        for(const prop of ['collapsed','images','retryIds']) if(Array.isArray(saved[prop])) state[prop]=saved[prop].filter(x=>typeof x==='string');
        state.retry=saved.retry===true;
      }
    } catch (_) { storageOK=false; }
  }
  function persist() { try { localStorage.setItem(key,JSON.stringify({version,...state})); storageOK=true; } catch (_) { storageOK=false; } }
  function question(node, f) {return f || {id:'name',label:'질환명',answer:node.label,aliases:node.aliases,hint:`대표 정답 표기는 '${node.label.slice(0,1)}'로 시작합니다.`};}
  function idFor(node,f) {return node.id+':'+(f?.id || 'name');}
  function record(id, correct, assisted) { state.records[id]={review:!correct||assisted,updatedAt:Date.now()}; persist(); }
  function quizFields(n) {return state.mode==='diagnosis' ? (n.clue?[null]:[]) : n.fields;}
  function render(target, api) {
    load();
    const validNumbers=new Set(api.questions.map(q=>Number(q.globalNumber)));
    const headings=api.headings;
    const links=n=>{
      const heading=headings.find(h=>h.heading===n.heading);
      return `<div class="pm-links">${heading?`<a class="wiki-link" href="#lecture-${courseId}" data-wiki-course="${courseId}" data-wiki-section="${escape(heading.slug)}">Wiki 근거</a>`:''}${n.questions.filter(x=>validNumbers.has(x)).map(x=>`<a class="jbl-question-link" href="#jbl-q-${x}" data-jbl-question-link="${x}">${x}번</a>`).join('')}</div>`;
    };
    function visibleFields(n){return quizFields(n).filter(f=>!state.retry||state.retryIds.includes(idFor(n,f)));}
    function fieldHTML(n,f) {
      const item=question(n,f),id=idFor(n,f),a=state.attempts[id]||{};
      let message='';
      if(a.status==='correct')message=a.assisted?'정답 · 힌트 사용, 다시 복습':'정답';
      if(a.status==='wrong')message='등록된 정답 표현과 달라요. 비교 후 직접 인정할 수도 있어요.';
      if(a.status==='revealed')message='정답 확인 · 다시 복습';
      return `<div class="pm-field" data-pm-field="${id}"><label for="pm-input-${id}">${escape(item.label)}</label><form data-pm-check="${id}" class="pm-answer-form"><input id="pm-input-${id}" name="answer" value="${escape(a.value||'')}" placeholder="답을 입력하세요" autocomplete="off" spellcheck="false" aria-describedby="pm-result-${id}" ${a.status==='correct'?'readonly':''}><button type="submit" ${a.status==='correct'?'disabled':''}>확인</button></form><div class="pm-field-actions"><button type="button" data-pm-action="hint" data-id="${id}">힌트</button><button type="button" data-pm-action="reveal" data-id="${id}">정답 보기</button></div>${a.hint?`<div class="pm-hint">힌트 · ${escape(item.hint||n.clue)}</div>`:''}<div id="pm-result-${id}" class="pm-result ${a.status==='correct'?'is-correct':''}" role="status">${escape(message)}${['wrong','revealed'].includes(a.status)?`<div class="pm-solution">${escape(item.answer)}</div>`:''}${a.status==='wrong'?`<button type="button" data-pm-action="accept" data-id="${id}">같은 뜻이에요 · 정답 인정</button>`:''}</div></div>`;
    }
    function nodeHTML(n,index) {
      const diagnosis=state.mode==='diagnosis';
      const a=state.attempts[idFor(n,null)];
      const known=!diagnosis||['correct','wrong','revealed'].includes(a?.status);
      const imageShown=state.images.includes(n.id);
      const clueHTML=n.clue?(state.mode==='features'?'':`<p class="pm-clue">${escape(n.clue)}</p>`):'';
      return `<article class="pm-node" data-pm-node="${n.id}"><div class="pm-disease"><h4>${known?escape(n.label):`질환 ${index+1}`}</h4>${known?links(n):'<span class="pm-secondary">정답 확인 후 Wiki·J 연결</span>'}${n.image?`<button type="button" class="pm-photo-toggle" data-pm-action="photo" data-id="${n.id}" aria-expanded="${imageShown}">${imageShown?'사진 닫기':'사진 보기'}</button>`:''}</div><div class="pm-features">${clueHTML}${state.mode==='overview'?`<dl>${n.fields.map(f=>`<div><dt>${escape(f.label)}</dt><dd>${escape(f.answer)}</dd></div>`).join('')}</dl>`:visibleFields(n).map(f=>fieldHTML(n,f)).join('')}${imageShown?`<figure class="pm-figure"><img src="${escape(n.image.startsWith('assets/')?n.image:imageRoot+n.image)}" loading="lazy" alt="${known?escape(n.label):'질환 판별용'} 참고 사진"><figcaption>${courseId}강 Wiki 수록 사진 · 클릭하면 확대</figcaption></figure>`:''}</div></article>`;
    }
    const groups=data.filter(g=>state.group==='all'||state.group===g.id).map(g=>({...g,nodes:g.nodes.filter(n=>state.mode==='overview'?(!state.retry||state.retryIds.some(id=>id.startsWith(n.id+':'))):visibleFields(n).length)})).filter(g=>g.nodes.length);
    const count=groups.flatMap(g=>g.nodes.flatMap(n=>state.mode==='overview'?[]:visibleFields(n).map(f=>idFor(n,f))));
    const done=count.filter(id=>['correct','revealed','wrong'].includes(state.attempts[id]?.status)).length;
    const right=count.filter(id=>state.attempts[id]?.status==='correct').length;
    const review=Object.values(state.records).filter(r=>r?.review).length;
    target.innerHTML=`<section class="pm-shell"><header class="pm-header"><div><h3>${escape(title)} MAP</h3></div><div class="pm-progress" aria-live="polite">${state.mode==='overview'?`${nodes.length}개 질환·유형`: `${done} / ${count.length} 확인 · ${right}개 정답`}</div></header><div class="pm-toolbar"><div class="pm-modes" role="group" aria-label="구조도 학습 방식">${[['overview','전체 구조'],['features','특징 채우기'],['diagnosis','질환 맞히기']].map(([id,label])=>`<button type="button" data-pm-action="mode" data-id="${id}" aria-pressed="${state.mode===id}">${label}</button>`).join('')}</div><label class="pm-group-select">학습 범위 <select data-pm-group><option value="all">전체 범위</option>${data.map(g=>`<option value="${g.id}" ${state.group===g.id?'selected':''}>${g.label}</option>`).join('')}</select></label><button type="button" data-pm-action="retry" aria-pressed="${state.retry}">다시 볼 항목 ${review}</button>${state.mode!=='overview'?'<button type="button" data-pm-action="new">현재 범위 다시 풀기</button>':''}<button type="button" data-pm-action="fold">${groups.length&&groups.every(g=>state.collapsed.includes(g.id))?'모두 펼치기':'모두 접기'}</button></div>${!storageOK?'<p class="pm-storage-warning" role="status">브라우저 저장소를 사용할 수 없어 현재 화면에서만 기록됩니다.</p>':''}<div class="pm-map"><div class="pm-root">${escape(title)}</div><div class="pm-branches">${groups.map(g=>`<section class="pm-group"><div class="pm-group-head"><button type="button" data-pm-action="group" data-id="${g.id}" aria-expanded="${!state.collapsed.includes(g.id)}" aria-controls="pm-group-${g.id}"><span>${escape(g.label)}</span><span aria-hidden="true">${state.collapsed.includes(g.id)?'+':'−'}</span></button><span>${g.nodes.length}개 질환·유형</span></div><div id="pm-group-${g.id}" class="pm-nodes" ${state.collapsed.includes(g.id)?'hidden':''}>${g.nodes.map(nodeHTML).join('')}</div></section>`).join('')||'<div class="pm-empty">이 범위·학습 방식에서 다시 볼 항목이 없습니다. 범위를 바꾸거나 다시 보기 필터를 꺼주세요.</div>'}</div></div></section>`;
    function refresh(id) {const y=window.scrollY;render(target,api);if(id)target.querySelector(`[data-pm-field="${id}"] input`)?.focus({preventScroll:true});window.scrollTo({top:y,behavior:'instant'});}
    function resolve(id) {const [nid,fid]=id.split(':');const n=nodes.find(n=>n.id===nid);return n?{n,f:fid==='name'?null:n.fields.find(f=>f.id===fid)}:null;}
    target.querySelector('[data-pm-group]').onchange=e=>{state.group=e.target.value;persist();refresh();};
    target.querySelectorAll('input[name="answer"]').forEach(input=>input.oninput=()=>{const id=input.closest('[data-pm-field]').dataset.pmField;state.attempts[id]={...(state.attempts[id]||{}),value:input.value,status:''};persist();});
    target.querySelectorAll('[data-pm-check]').forEach(form=>form.onsubmit=e=>{
      e.preventDefault();const id=form.dataset.pmCheck,{n,f}=resolve(id),item=question(n,f),value=form.elements.answer.value;
      if(!value.trim()){form.elements.answer.focus();return;}
      const a=state.attempts[id]||{},correct=matches(value,item);
      state.attempts[id]={...a,value,status:correct?'correct':'wrong',assisted:!!a.assisted||!!a.hint||!!a.revealedAnswer,revealedAnswer:!correct||!!a.revealedAnswer};
      record(id,correct,state.attempts[id].assisted);refresh(id);
    });
    target.querySelectorAll('[data-pm-action]').forEach(button=>button.onclick=()=>{
      const action=button.dataset.pmAction,id=button.dataset.id;
      if(action==='mode'){state.mode=id;state.collapsed=[];}
      if(action==='group'){state.collapsed=state.collapsed.includes(id)?state.collapsed.filter(x=>x!==id):[...state.collapsed,id];}
      if(action==='fold'){const ids=groups.map(g=>g.id);const all=ids.every(id=>state.collapsed.includes(id));state.collapsed=all?state.collapsed.filter(id=>!ids.includes(id)):[...new Set([...state.collapsed,...ids])];}
      if(action==='photo'){state.images=state.images.includes(id)?state.images.filter(x=>x!==id):[...state.images,id];}
      if(action==='retry'){
        state.retry=!state.retry;
        if(state.retry){if(state.mode==='overview')state.mode='features';state.retryIds=Object.keys(state.records).filter(id=>state.records[id]?.review);state.retryIds.forEach(id=>{delete state.attempts[id];});state.collapsed=[];}
      }
      if(action==='new'){count.forEach(id=>{delete state.attempts[id];});}
      if(['hint','reveal','accept'].includes(action)){
        const a=state.attempts[id]||{};
        if(action==='hint'){state.attempts[id]={...a,hint:true,assisted:true};record(id,false,true);}
        if(action==='reveal'){state.attempts[id]={...a,status:'revealed',assisted:true};record(id,false,true);}
        if(action==='accept'){state.attempts[id]={...a,status:'correct',manual:true};record(id,true,!!a.assisted);}
      }
      persist();refresh(['hint','reveal','accept'].includes(action)?id:null);
    });
    target.querySelectorAll('.pm-figure img').forEach(img=>{
      img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','참고 사진 확대');
      const open=()=>{const dialog=document.createElement('dialog');dialog.className='pm-image-dialog';const close=document.createElement('button');close.textContent='닫기';close.type='button';const large=document.createElement('img');large.src=img.src;large.alt=img.alt;dialog.append(close,large);document.body.append(dialog);close.onclick=()=>dialog.close();dialog.addEventListener('close',()=>{dialog.remove();img.focus();});dialog.showModal();close.focus();};
      img.onclick=open;img.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}};
    });
  }
  return {render};
  }
const b=(label,...children)=>({label,children});
const l=label=>({label});
const esophagusTree=b('식도',
 b('선천성 이상',
  b('Esophageal atresia',l('A형 · 폐쇄만'),l('B형 · 근위부 누공 동반'),l('C형 · 원위부 누공 동반'),l('D형 · 양쪽 누공 동반'),l('E형 · H-type 누공 (폐쇄 없음)')),
  b('낭종',l('기관지원성 낭종'),l('장원성·중복 낭종')),
  l('이소성 위점막')
 ),
 b('비종양성 질환',
  b('역류·감각',
   b('GERD',l('NERD'),l('ERD · 역류성 식도염')),
   l('Reflux hypersensitivity'),l('Functional heartburn'),l('Sandifer syndrome · 관련 증후군'),l('영아의 생리적 GER · 비교')
  ),
  b('운동질환',
   b('EGJ 이완 장애',
    b('Achalasia',b('원인별',l('일차성'),l('이차성 · Chagas 등')),b('운동 패턴별',l('Type I'),l('Type II'),l('Type III'))),
    l('EGJOO')
   ),
   b('체부 수축 장애',l('DES'),l('Hypercontractile esophagus'),l('IEM'),l('Absent contractility')),
   b('약물·음주 관련',l('Opioid-induced dysfunction'),l('음주 관련 운동 이상'))
  ),
  b('구조적 이상',
   b('게실성 병변',l('Zenker diverticulum'),l('Mid-esophageal diverticulum'),l('Epiphrenic diverticulum'),l('Intramural diverticulosis')),
   b('Web·Ring',b('Web 관련',l('Web'),l('Plummer–Vinson syndrome')),b('Ring',l('Schatzki ring'),l('Muscular ring'))),
   b('Hiatal hernia',l('I · Sliding'),l('II · Paraesophageal'),l('III · Mixed'),l('IV · 다른 장기 동반')),
   b('후천성 협착',l('Peptic stricture'),l('부식성 손상 후'),l('방사선 손상 후'),l('문합부 협착'))
  ),
  b('식도염·점막 손상',
   b('감염성',l('Candida'),b('바이러스성',l('HSV'),l('CMV'),l('VZV')),b('기타 감염',l('Lactobacillus'),l('β-hemolytic streptococci'),l('결핵'),l('Cryptosporidium'),l('Pneumocystis'))),
   b('비감염성',l('Eosinophilic esophagitis'),l('Pill-induced esophagitis'),l('Radiation esophagitis'),l('Corrosive esophagitis'),l('GVHD 관련 손상'))
  ),
  b('혈관성 병변',l('Esophageal varices')),
  b('열상·천공·누출',
   b('점막 열상',l('Mallory–Weiss tear')),
   b('전층 천공·파열',l('기구 조작·의인성'),l('Boerhaave syndrome'),l('외상·이물성'),l('기존 병변에 의한 천공')),
   l('후천성 기관식도누공'),
   b('식도 재건 후 국소 문제',l('문합부 누출'),l('Conduit necrosis'))
  )
 ),
 b('화생·이형성',
  b('Barrett esophagus',b('이형성 여부',l('이형성 없음'),l('Low-grade dysplasia'),l('High-grade dysplasia')),b('분절 길이',l('Short segment'),l('Long segment')))
 ),
 b('종양·폴립',
  b('양성종양',b('상피성',l('Squamous papilloma')),b('비상피성',l('Leiomyoma'),l('Granular cell tumor'),l('Lipoma'),l('Neurofibroma'))),
  b('폴립성 병변',l('Fibrovascular polyp'),l('Inflammatory fibroid polyp'),l('Sentinel polyp')),
  b('악성종양',b('상피성 · 식도암',l('Squamous cell carcinoma'),l('Adenocarcinoma')),b('비상피성',l('Leiomyosarcoma')))
 )
);

  // Curated against current Wiki content. Resolve headings at click time, never by
  // substring search: e.g. esophageal adenocarcinoma must not open gastric cancer.
  const esophagusWikiReferences={};
  const wikiRef=(courseId,heading)=>({courseId,heading});
  function linkLeaves(labels,...refs){labels.forEach(label=>{esophagusWikiReferences[label]=refs.map(ref=>({...ref}));});}
  linkLeaves(['A형 · 폐쇄만','B형 · 근위부 누공 동반','C형 · 원위부 누공 동반','D형 · 양쪽 누공 동반','E형 · H-type 누공 (폐쇄 없음)'],
    wikiRef(21,'EA와 TEF의 형태'),wikiRef(10,'식도폐쇄와 기관식도샛길'),wikiRef(21,'식도폐쇄증의 진단과 동반 기형'));
  linkLeaves(['기관지원성 낭종','장원성·중복 낭종'],wikiRef(10,'기관지원성 낭종과 장원성·중복 낭종'));
  linkLeaves(['이소성 위점막'],wikiRef(10,'Barrett esophagus'));
  linkLeaves(['NERD'],wikiRef(35,'정의와 Spectrum'),wikiRef(35,'산 노출과 증상 연관성의 해석'));
  linkLeaves(['ERD · 역류성 식도염'],wikiRef(10,'역류성 식도염 · Reflux esophagitis'),wikiRef(35,'Los Angeles classification'),wikiRef(35,'약물치료와 PPI trial'));
  linkLeaves(['Reflux hypersensitivity','Functional heartburn'],wikiRef(35,'Reflux hypersensitivity와 Functional heartburn'),wikiRef(35,'산 노출과 증상 연관성의 해석'));
  linkLeaves(['Sandifer syndrome · 관련 증후군'],wikiRef(20,'Sandifer syndrome과 역류검사'));
  linkLeaves(['영아의 생리적 GER · 비교'],wikiRef(20,'역류보다 중요한 성장곡선'),wikiRef(21,'Gastroesophageal reflux'),wikiRef(20,'GERD의 식이와 수면 자세'));
  linkLeaves(['일차성','이차성 · Chagas 등'],wikiRef(10,'식도이완불능증 · Achalasia'),wikiRef(35,'Achalasia'),wikiRef(35,'Achalasia의 치료와 POEM'));
  linkLeaves(['Type I','Type II','Type III'],wikiRef(35,'Achalasia'),wikiRef(35,'Achalasia의 치료와 POEM'),wikiRef(10,'식도이완불능증 · Achalasia'));
  linkLeaves(['EGJOO'],wikiRef(35,'Chicago classification의 분기'),wikiRef(35,'Achalasia'));
  linkLeaves(['DES'],wikiRef(35,'Distal esophageal spasm'));
  linkLeaves(['Hypercontractile esophagus'],wikiRef(35,'Hypercontractile esophagus'));
  linkLeaves(['IEM','Absent contractility'],wikiRef(35,'약한 수축과 없는 수축'));
  linkLeaves(['Opioid-induced dysfunction','음주 관련 운동 이상'],wikiRef(35,'약물·음주에 의한 운동 이상'));
  linkLeaves(['Zenker diverticulum','Mid-esophageal diverticulum','Epiphrenic diverticulum','Intramural diverticulosis'],wikiRef(35,'Esophageal diverticulum'));
  linkLeaves(['Web','Plummer–Vinson syndrome','Schatzki ring','Muscular ring'],wikiRef(35,'Web과 Ring'));
  linkLeaves(['I · Sliding','II · Paraesophageal'],wikiRef(10,'식도열공탈장 · Hiatal hernia'),wikiRef(35,'Hiatal hernia'));
  linkLeaves(['III · Mixed','IV · 다른 장기 동반'],wikiRef(35,'Hiatal hernia'));
  linkLeaves(['Peptic stricture'],wikiRef(35,'증상·감별·합병증'),wikiRef(10,'임상 소견과 합병증'));
  linkLeaves(['부식성 손상 후'],wikiRef(35,'Corrosive esophagitis'),wikiRef(10,'화학물질·약물성 식도염'));
  linkLeaves(['방사선 손상 후'],wikiRef(35,'Radiation esophagitis'));
  linkLeaves(['문합부 협착'],wikiRef(21,'식도폐쇄증의 수술과 추적 관찰'));
  linkLeaves(['Candida'],wikiRef(10,'칸디다 식도염'),wikiRef(13,'Candida와 Herpes 감염성 식도염'),wikiRef(35,'Candida esophagitis'));
  linkLeaves(['HSV'],wikiRef(10,'단순헤르페스바이러스 식도염'),wikiRef(13,'다핵세포와 바이러스 감별'),wikiRef(35,'HSV esophagitis'));
  linkLeaves(['CMV'],wikiRef(10,'거대세포바이러스 식도염'),wikiRef(35,'CMV esophagitis'));
  linkLeaves(['VZV','Lactobacillus','β-hemolytic streptococci','결핵','Cryptosporidium','Pneumocystis'],wikiRef(35,'VZV와 기타 감염'));
  linkLeaves(['Eosinophilic esophagitis'],wikiRef(10,'호산구성 식도염 · Eosinophilic esophagitis'),wikiRef(20,'EoE의 진단과 증상'));
  linkLeaves(['Pill-induced esophagitis'],wikiRef(10,'화학물질·약물성 식도염'),wikiRef(35,'약제 유발성 식도염'));
  linkLeaves(['Radiation esophagitis'],wikiRef(10,'화학물질·약물성 식도염'),wikiRef(35,'Radiation esophagitis'));
  linkLeaves(['Corrosive esophagitis'],wikiRef(10,'화학물질·약물성 식도염'),wikiRef(35,'Corrosive esophagitis'));
  linkLeaves(['GVHD 관련 손상'],wikiRef(10,'화학물질·약물성 식도염'));
  linkLeaves(['Esophageal varices'],wikiRef(10,'식도정맥류 · Esophageal varices'));
  linkLeaves(['Mallory–Weiss tear'],wikiRef(10,'Mallory–Weiss 열상'),wikiRef(35,'Mallory-Weiss tear'),wikiRef(37,'Boerhaave와 Mallory–Weiss'));
  linkLeaves(['기구 조작·의인성','외상·이물성','기존 병변에 의한 천공'],wikiRef(35,'식도천공'),wikiRef(37,'원인과 천공 위치'),wikiRef(37,'치료 원칙은 진단·봉합·배액으로 이어진다'));
  linkLeaves(['Boerhaave syndrome'],wikiRef(37,'Boerhaave와 Mallory–Weiss'),wikiRef(35,'식도천공'),wikiRef(37,'치료 원칙은 진단·봉합·배액으로 이어진다'));
  linkLeaves(['후천성 기관식도누공'],wikiRef(10,'임상 소견, 전파와 예후'),wikiRef(35,'증상과 전이'));
  linkLeaves(['문합부 누출'],wikiRef(37,'흉강 내 누출이 위험한 이유'),wikiRef(21,'식도폐쇄증의 수술과 추적 관찰'));
  linkLeaves(['Conduit necrosis'],wikiRef(37,'저산소증에서 도관 괴사로 이어지는 악순환'),wikiRef(37,'위를 올릴 때 혈류가 중요한 이유'));
  linkLeaves(['이형성 없음','Low-grade dysplasia','High-grade dysplasia'],wikiRef(10,'추적 관찰'),wikiRef(35,'추적관찰과 치료'),wikiRef(13,'Barrett esophagus'));
  linkLeaves(['Short segment','Long segment'],wikiRef(10,'길이와 암 위험'),wikiRef(35,'정의와 암 위험'),wikiRef(13,'Barrett esophagus'));
  linkLeaves(['Squamous papilloma'],wikiRef(10,'Squamous papilloma (편평유두종)'),wikiRef(35,'양성종양과 비상피성 병변'));
  linkLeaves(['Leiomyoma','Granular cell tumor','Lipoma','Neurofibroma','Fibrovascular polyp','Inflammatory fibroid polyp','Sentinel polyp','Leiomyosarcoma'],wikiRef(35,'양성종양과 비상피성 병변'));
  linkLeaves(['Squamous cell carcinoma'],wikiRef(10,'Squamous cell carcinoma (식도 편평세포암종)'),wikiRef(13,'식도 Squamous cell carcinoma'),wikiRef(35,'식도암'),wikiRef(35,'식도암의 치료 선택'),wikiRef(37,'식도절제술의 기본 설계'));
  linkLeaves(['Adenocarcinoma'],wikiRef(10,'식도샘암종 · Adenocarcinoma'),wikiRef(35,'식도암'),wikiRef(35,'식도암의 치료 선택'),wikiRef(37,'식도절제술의 기본 설계'));
  ['NERD','ERD · 역류성 식도염'].forEach(label=>esophagusWikiReferences[label].push(wikiRef(5,'GERD · gastroesophageal reflux disease')));
  ['일차성','이차성 · Chagas 등','Type I','Type II','Type III','DES'].forEach(label=>esophagusWikiReferences[label].push(wikiRef(38,'식도 운동질환')));

  // MAP annotations are deliberately separate from the Wiki and question sources.
  // A question is linked only when its actual subject matches, not by keyword hits.
  const esophagusStudyNotes={};
  function study(labels,clue,questions=[]){
    (Array.isArray(labels)?labels:[labels]).forEach(label=>{esophagusStudyNotes[label]={clue,questions:[...questions]};});
  }
  study('식도','음식이 내려가지 않는 문제, 역류·점막 손상, 화생과 종양을 나누어 본다.',[446]);
  study('선천성 이상','태어날 때부터 통로가 끊겼는지, 비정상 연결이나 조직이 있는지 구분한다.');
  study('Esophageal atresia','식도의 폐쇄 여부와 기관식도누공의 위치를 따로 확인한다. E형은 폐쇄 없이 누공만 있다.',[232,559]);
  study('A형 · 폐쇄만','위아래 식도가 끊겨 있고 기관과의 누공은 없다.');
  study('B형 · 근위부 누공 동반','폐쇄된 식도의 위쪽 끝이 기관과 연결된다.');
  study('C형 · 원위부 누공 동반','가장 흔한 형태로, 상부 식도는 막히고 하부 식도는 기관과 연결된다.');
  study('D형 · 양쪽 누공 동반','폐쇄된 식도의 위쪽과 아래쪽이 각각 기관과 연결된다.');
  study('E형 · H-type 누공 (폐쇄 없음)','식도의 통로는 이어져 있지만 기관과의 비정상 연결이 남아 있다.');
  study('낭종','Foregut 유래 낭종을 벽을 덮는 상피와 조직의 성격으로 구별한다.');
  study('기관지원성 낭종','호흡기형 섬모 상피가 기관지원성 낭종을 구별하는 단서다.');
  study('장원성·중복 낭종','소화관 성격의 낭종으로, 편평상피로 덮인 경우도 있어 상피만 단순 대입하지 않는다.');
  study('이소성 위점막','위점막이 식도에 있는 것과 goblet cell을 보이는 Barrett metaplasia를 구분한다.');
  study('비종양성 질환','통로의 형태, 운동, 점막 손상 가운데 무엇이 주된 문제인지 먼저 나눈다.');
  study('역류·감각','역류의 양과 점막 손상뿐 아니라 역류와 증상이 실제로 연결되는지도 본다.');
  study('GERD','역류로 증상이나 손상이 생기는 질환이며, 내시경에 식도염이 보여야만 하는 것은 아니다.',[345,447,448,758]);
  study('NERD','내시경에 erosion이 없는 역류질환으로, 정상 내시경의 heartburn을 모두 NERD로 묶지는 않는다.');
  study('ERD · 역류성 식도염','역류에 의한 점막 손상이 보이며, 내시경의 mucosal break 범위로 LA grade를 나눈다.',[26,345,448,758]);
  study('Reflux hypersensitivity','산 노출은 정상이지만 역류 사건과 증상의 시간적 연관성은 있다.',[218]);
  study('Functional heartburn','산 노출도 정상이고 역류와 증상의 연관성도 없어 RH와 구별된다.');
  study('Sandifer syndrome · 관련 증후군','역류와 함께 목을 비틀거나 등을 젖히는 자세가 나타날 수 있다.');
  study('영아의 생리적 GER · 비교','잘 자라는 영아의 역류를 성장 부진·합병증이 있는 GERD와 구분한다.');
  study('운동질환','EGJ가 잘 열리는지 먼저 보고, 그다음 체부 수축의 시점·강도·성공률을 읽는다.',[8,142,286,674]);
  study('EGJ 이완 장애','출구의 이완이 불충분한 상태에서 정상 peristalsis가 남아 있는지가 다음 분기다.');
  study('Achalasia','LES relaxation 장애와 정상 peristalsis 소실이 함께 나타난다.',[25,220,449,463]);
  study('원인별','일차성 신경 손상과 Chagas 등의 이차성 원인을 나누는 축이다.');
  study('운동 패턴별','같은 achalasia라도 체부의 pressurization과 spasm 양상에 따라 I–III형으로 나뉜다.');
  study('일차성','Myenteric plexus의 억제성 조절 소실을 LES 이완 장애와 연결한다.',[25]);
  study('이차성 · Chagas 등','Chagas disease처럼 다른 원인에 의한 신경 손상도 achalasia 양상을 만들 수 있다.');
  study('Type I','정상 peristalsis가 없고, 뚜렷한 panesophageal pressurization도 없다.');
  study('Type II','정상 peristalsis는 없지만 막힌 출구 위에서 식도 전체 압력이 함께 올라간다.');
  study('Type III','EGJ 이완 장애에 premature / spastic contraction이 동반된다.');
  study('EGJOO','IRP가 높으면서 일부 peristalsis는 남아 있어 achalasia와 구별한다.');
  study('체부 수축 장애','출구가 열려도 체부가 너무 일찍, 너무 강하게, 또는 너무 약하게 수축할 수 있다.');
  study('DES','정상 IRP에서 premature contraction이 나타나는 시간의 문제다.');
  study('Hypercontractile esophagus','체부 수축이 지나치게 강한 것이 핵심이며, DES의 조기 수축과는 다르다.');
  study('IEM','약하거나 실패한 수축이 많아 bolus를 효과적으로 운반하지 못한다.');
  study('Absent contractility','IRP는 정상이지만 체부 수축이 모두 실패하는 패턴이다.');
  study('약물·음주 관련','운동검사 패턴만으로 결론 내리기 전에 가역적인 원인도 확인한다.');
  study('Opioid-induced dysfunction','Opioid 복용이 EGJOO·spasm·type III achalasia와 비슷한 패턴을 만들 수 있다.');
  study('음주 관련 운동 이상','과도한 음주력도 식도 운동 이상을 해석할 때 확인한다.');
  study('구조적 이상','벽이 밖으로 돌출되는 게실, 내강을 좁히는 병변, 위치가 바뀌는 탈장을 나눈다.');
  study('게실성 병변','돌출 위치와 만들어지는 기전을 함께 보면 각 게실의 이름이 정리된다.');
  study('Zenker diverticulum','상부식도괄약근 부근의 후방 돌출에 음식이 고여 역류·구취가 생긴다.');
  study('Mid-esophageal diverticulum','중부 식도에서 주변 염증에 의한 traction과 연결한다.');
  study('Epiphrenic diverticulum','횡격막 바로 위에 생기며 achalasia 등 하부 통과 저항과 연결된다.');
  study('Intramural diverticulosis','큰 주머니보다는 식도벽의 작은 gland duct가 확장된 병변이다.');
  study(['Web·Ring','Web 관련','Ring'],'얇은 막이 일부를 가리는 web과 둘레를 따라 좁아지는 ring을 구별한다.');
  study('Web','얇은 막이 식도 내강의 일부를 가려 삼킴을 방해한다.');
  study('Plummer–Vinson syndrome','Esophageal web에 철결핍빈혈과 dysphagia가 동반되는 조합이다.');
  study('Schatzki ring','GE junction의 점막성 ring으로, 고형식이 갑자기 걸리는 단서와 연결한다.');
  study('Muscular ring','점막성 Schatzki ring과 구분하는 근육성 ring이다.');
  study('Hiatal hernia','GE junction 자체가 올라가는지, 옆으로 위가 올라가는지가 기본 분기다.',[735,769,770]);
  study('I · Sliding','GE junction과 위가 함께 올라가 역류 방어가 약해진다.',[26,770]);
  study('II · Paraesophageal','GE junction은 제자리에 있고 위가 옆으로 올라가 폐쇄·교액이 문제가 된다.',[735,769]);
  study('III · Mixed','Sliding과 paraesophageal 요소가 함께 있는 형태다.');
  study('IV · 다른 장기 동반','위 이외의 장기도 식도열공을 통해 함께 올라온다.');
  study('후천성 협착','염증·손상·수술 후 반흔 때문에 좁아진 통로를 원인별로 나눈다.');
  study('Peptic stricture','반복된 역류성 염증이 반흔과 협착으로 이어진다.');
  study('부식성 손상 후','부식성 손상의 급성기를 지난 뒤 섬유화와 협착이 남을 수 있다.');
  study('방사선 손상 후','방사선 손상의 후기 섬유화가 내강을 좁힐 수 있다.');
  study('문합부 협착','식도 연결 부위가 좁아지는 문제로, 새는 문합부 누출과 구분한다.');
  study('식도염·점막 손상','감염원에 의한 손상과 역류·약제·면역 등의 비감염성 손상을 구별한다.');
  study('감염성','Candida의 plaque, HSV의 작은 궤양, CMV의 크고 깊은 궤양을 대조한다.',[156,221,382,736,771]);
  study('Candida','흰 plaque와 yeast / pseudohyphae가 핵심 단서다.',[156,221,382,736]);
  study('바이러스성','궤양의 형태와 바이러스 변화가 보이는 세포·위치를 함께 읽는다.');
  study('HSV','작은 punched-out ulcer의 가장자리 상피에서 다핵세포 등 바이러스 변화를 본다.',[771]);
  study('CMV','크고 깊은 궤양의 바닥 쪽 내피·기질세포에서 핵내 봉입체를 찾는다.');
  study('VZV','Varicella 또는 zoster 상황에서 나타나는 식도 감염도 감별에 포함된다.');
  study('기타 감염','흔한 세 감염원 외에 강의에서 제시한 감염원들을 따로 묶었다.');
  study(['Lactobacillus','β-hemolytic streptococci','결핵'],'강의에서 기타 감염성 식도염의 원인으로 제시한 세균성 감염이다.');
  study('Cryptosporidium','강의의 기타 감염원 목록에 포함된 원충으로, 진균과 구분한다.');
  study('Pneumocystis','강의의 기타 감염원 목록에 포함된 진균이다.');
  study('비감염성','호산구성 염증과 약제·방사선·부식성 물질 등에 의한 손상을 나눈다.');
  study('Eosinophilic esophagitis','연하 증상에 호산구 침윤이 동반되며 rings와 furrows가 단서가 된다.',[773]);
  study('Pill-induced esophagitis','약이 오래 머문 부위의 손상으로, 적은 물·복용 직후 눕기와 중부 kissing ulcer를 연결한다.');
  study('Radiation esophagitis','급성 점막 손상과 후기 섬유화·협착을 시간에 따라 구분한다.');
  study('Corrosive esophagitis','부식성 물질의 급성 손상 뒤 천공 또는 후기 협착이 문제가 될 수 있다.');
  study('GVHD 관련 손상','이식 후 면역 매개 점막 손상으로, 감염성 식도염과 별도로 구분한다.');
  study(['혈관성 병변','Esophageal varices'],'Portal hypertension으로 하부 식도의 정맥이 확장되어 출혈 위험이 생긴다.');
  study('열상·천공·누출','점막만 찢어진 것인지, 전층 결손을 통해 식도 밖으로 새는 것인지 구분한다.');
  study(['점막 열상','Mallory–Weiss tear'],'심한 구토 뒤 GE junction 부근 점막이 길게 찢어지는 병변이다.');
  study('전층 천공·파열','식도 밖으로 샌 내용물에 의한 종격동·흉강 오염이 핵심 문제다.');
  study('기구 조작·의인성','내시경·확장술 등 기구 조작 후 발생한 천공을 떠올린다.');
  study('Boerhaave syndrome','심한 구토 뒤 전층 파열이 생겨, 점막 열상인 Mallory–Weiss와 구분한다.');
  study('외상·이물성','외상이나 이물에 의해 식도벽 전층이 손상될 수 있다.');
  study('기존 병변에 의한 천공','종양·염증 등으로 약해진 식도벽에서도 천공이 생길 수 있다.');
  study('후천성 기관식도누공','식도암 등으로 기관과 식도 사이에 연결이 생기는 것으로, 선천성 TEF와 구분한다.');
  study('식도 재건 후 국소 문제','문합부에서 새는 문제와 재건 도관의 혈류가 끊기는 문제를 나눈다.',[195,511]);
  study('문합부 누출','흉강 안으로 새면 종격동·흉강 오염이 생겨 문합 위치가 중요하다.',[1,194,195,424,511]);
  study('Conduit necrosis','올려 놓은 도관의 혈류가 부족하면 허혈과 괴사로 이어진다.');
  study('화생·이형성','상피의 종류가 바뀌는 metaplasia와 종양성 세포 변화인 dysplasia를 구별한다.');
  study('Barrett esophagus','식도의 intestinal metaplasia에서 goblet cell을 확인하고 adenocarcinoma 위험과 연결한다.');
  study('이형성 여부','Barrett 상피에 dysplasia가 있는지와 그 정도를 나누는 축이다.');
  study('이형성 없음','Barrett metaplasia는 있지만 dysplasia는 확인되지 않은 상태다.');
  study('Low-grade dysplasia','Barrett 상피에 저도 이형성이 있는 상태로, 단순 metaplasia와 구별한다.');
  study('High-grade dysplasia','고도 이형성은 더 적극적인 평가·치료와 연결되며 침윤암 자체와는 구분한다.');
  study('분절 길이','길이는 dysplasia 여부와 별개의 분류 축이다.');
  study('Short segment','Barrett 변화가 짧은 구간에 분포한다. 짧다는 이유로 이형성 여부를 대신 판단하지 않는다.');
  study('Long segment','Barrett 변화가 긴 구간에 분포하며 암 위험 평가에 길이도 함께 고려한다.');
  study('종양·폴립','양성·악성과 발생 조직을 나누되, SET라는 외형만으로 양성을 확정하지 않는다.');
  study('양성종양','대표적인 leiomyoma와 상피성·비상피성 종양을 구분한다.');
  study('상피성','상피 유래 양성종양의 대표로 squamous papilloma를 연결한다.');
  study('비상피성','상피 이외 조직에서 생기는 종양으로, 양성인지 악성인지는 별도로 구분한다.');
  study('Squamous papilloma','Fibrovascular core를 편평상피가 덮는 유두상 양성종양이다.');
  study('Leiomyoma','식도의 대표적인 양성 평활근종으로, 이름이 비슷한 leiomyosarcoma와 구별한다.');
  study(['Granular cell tumor','Lipoma','Neurofibroma'],'강의에 제시된 비상피성 양성종양으로, SET의 감별 목록에서 함께 본다.');
  study('폴립성 병변','폴립은 돌출된 형태를 나타내며, 각 병변의 조직과 배경은 다를 수 있다.');
  study(['Fibrovascular polyp','Inflammatory fibroid polyp'],'강의의 식도 폴립성 병변 목록에 포함된다.');
  study('Sentinel polyp','GERD와 관련해 제시되는 폴립성 병변이다.');
  study(['악성종양','상피성 · 식도암'],'SCC와 adenocarcinoma의 발생 배경·위치를 구별한 뒤 침윤 깊이와 치료를 연결한다.',[118,119,199,219,319,659,133,403]);
  study('Squamous cell carcinoma','흡연·음주와 중부 식도, keratin pearl·intercellular bridge를 연결한다.',[118,157,199,219]);
  study('Adenocarcinoma','GERD–Barrett을 배경으로 하부 식도·GE junction에 생기는 gland-forming malignancy다.');
  study('Leiomyosarcoma','평활근 유래 악성종양으로, leiomyoma와 같은 양성군에 넣지 않는다.');

  // Parent links use the same exact-heading resolver as disease links.
  linkLeaves(['식도'],wikiRef(35,'전체 흐름'),wikiRef(10,'식도 병리의 감별 핵심'));
  linkLeaves(['선천성 이상'],wikiRef(10,'식도의 선천성 기형'),wikiRef(21,'Esophageal atresia와 TEF'));
  linkLeaves(['Esophageal atresia'],wikiRef(10,'식도폐쇄와 기관식도샛길'),wikiRef(21,'EA와 TEF의 형태'),wikiRef(21,'식도폐쇄증의 진단과 동반 기형'));
  linkLeaves(['낭종'],wikiRef(10,'기관지원성 낭종과 장원성·중복 낭종'));
  linkLeaves(['비종양성 질환'],wikiRef(35,'전체 흐름'),wikiRef(10,'기타 비종양성 식도질환'));
  linkLeaves(['역류·감각','GERD'],wikiRef(35,'정의와 Spectrum'),wikiRef(35,'산 노출과 증상 연관성의 해석'),wikiRef(20,'역류보다 중요한 성장곡선'));
  linkLeaves(['운동질환','EGJ 이완 장애','체부 수축 장애'],wikiRef(35,'Chicago classification의 분기'),wikiRef(38,'식도 운동질환'));
  linkLeaves(['Achalasia','원인별','운동 패턴별'],wikiRef(10,'식도이완불능증 · Achalasia'),wikiRef(35,'Achalasia'),wikiRef(35,'Achalasia의 치료와 POEM'));
  linkLeaves(['약물·음주 관련'],wikiRef(35,'약물·음주에 의한 운동 이상'));
  linkLeaves(['구조적 이상'],wikiRef(35,'식도의 구조적 질환'));
  linkLeaves(['게실성 병변'],wikiRef(35,'Esophageal diverticulum'));
  linkLeaves(['Web·Ring','Web 관련','Ring'],wikiRef(35,'Web과 Ring'));
  linkLeaves(['Hiatal hernia'],wikiRef(10,'식도열공탈장 · Hiatal hernia'),wikiRef(35,'Hiatal hernia'));
  linkLeaves(['후천성 협착'],wikiRef(35,'증상·감별·합병증'),wikiRef(35,'Corrosive esophagitis'),wikiRef(21,'식도폐쇄증의 수술과 추적 관찰'));
  linkLeaves(['식도염·점막 손상','감염성','바이러스성'],wikiRef(10,'감염성 식도염'),wikiRef(35,'감염성 식도염'),wikiRef(13,'다핵세포와 바이러스 감별'));
  linkLeaves(['기타 감염'],wikiRef(35,'VZV와 기타 감염'));
  linkLeaves(['비감염성'],wikiRef(10,'화학물질·약물성 식도염'),wikiRef(35,'비감염성 식도 손상'),wikiRef(20,'EoE의 진단과 증상'));
  linkLeaves(['혈관성 병변'],wikiRef(10,'식도정맥류 · Esophageal varices'));
  linkLeaves(['열상·천공·누출','점막 열상'],wikiRef(37,'Boerhaave와 Mallory–Weiss'),wikiRef(35,'식도천공'));
  linkLeaves(['전층 천공·파열'],wikiRef(37,'원인과 천공 위치'),wikiRef(37,'치료 원칙은 진단·봉합·배액으로 이어진다'));
  linkLeaves(['식도 재건 후 국소 문제'],wikiRef(37,'흉강 내 누출이 위험한 이유'),wikiRef(37,'위를 올릴 때 혈류가 중요한 이유'));
  linkLeaves(['화생·이형성','Barrett esophagus'],wikiRef(10,'Barrett esophagus'),wikiRef(13,'Barrett esophagus'),wikiRef(35,'정의와 암 위험'));
  linkLeaves(['이형성 여부'],wikiRef(10,'추적 관찰'),wikiRef(35,'추적관찰과 치료'));
  linkLeaves(['분절 길이'],wikiRef(10,'길이와 암 위험'),wikiRef(35,'정의와 암 위험'));
  linkLeaves(['종양·폴립'],wikiRef(10,'식도종양'),wikiRef(35,'식도종양'));
  linkLeaves(['양성종양','비상피성','폴립성 병변'],wikiRef(35,'양성종양과 비상피성 병변'));
  linkLeaves(['상피성'],wikiRef(10,'Squamous papilloma (편평유두종)'));
  linkLeaves(['악성종양','상피성 · 식도암'],wikiRef(10,'식도종양'),wikiRef(35,'식도암'),wikiRef(35,'식도암의 치료 선택'),wikiRef(37,'식도절제술의 기본 설계'),wikiRef(37,'Conduit는 무엇으로 만들고 어디로 올리는가'));

  // Different diagnostic axes remain separate: a single cancer can have a
  // depth, a gross type, a histologic type and a molecular type simultaneously.
  const stomachWikiReferences={},stomachStudyNotes={};
  const sr=(courseId,heading)=>({courseId,heading});
  const s=(label,clue,refs,questions=[],children=[])=>{
    stomachWikiReferences[label]=refs;
    stomachStudyNotes[label]={clue,questions};
    return children.length?{label,children}:{label};
  };
  const sp=heading=>sr(11,heading),sc=heading=>sr(36,heading);
  const ulcerRefs=[sp('소화성 궤양 · Peptic ulcer'),sr(31,'점막 방어와 궤양의 깊이'),sr(13,'Peptic ulcer')];
  const stageRefs=[sr(22,'위궤양의 치유 단계: A1부터 S2까지'),sr(31,'치유 단계: A1·A2·H1·H2·S1·S2')];
  const forrestRefs=[sr(22,'Forrest 분류와 지혈 대상'),sr(31,'출혈 상태: Forrest classification')];
  const depthRefs=[sp('TNM 분류'),sc('EGC와 AGC를 가르는 것은 침윤 깊이')];
  const earlyGrossRefs=[sp('EGC의 육안적 분류'),sc('EGC의 Type 0: 융기·평탄·함몰을 순서대로')];
  const advancedGrossRefs=[sp('AGC의 육안적 분류'),sc('AGC의 Borrmann 분류: 궤양의 경계와 침윤 범위')];
  const whoRefs=[sp('WHO 조직학적 분류'),sr(13,'위샘암종의 혼합된 조직 형태')];
  const laurenRefs=[sp('Lauren 분류')],tcgaRefs=[sp('TCGA 분자분류')];
  const netRefs=[sp('위 신경내분비종양 · Gastric neuroendocrine tumor'),sp('WHO 분류와 등급')];
  const setRefs=[sc('SET는 위치를 묘사하는 말이지, GIST라는 진단명이 아니다')];
  const stomachTree=s('위','먼저 구조적 병변과 기능·운동 문제를 나눈다. 위암에서는 침윤 깊이·육안형·조직형을 서로 다른 질문으로 읽는다.',[sp('위질환의 범주'),sc('무엇이 자랐고, 얼마나 깊으며, 어디까지 치료해야 하는가')],[],[
    s('선천성·이소성','위가 형성되거나 발달하는 과정의 문제다. 조직이 놓인 위치가 다른 경우와 출구가 좁아지는 경우를 구분한다.',[sp('선천성 기형')],[],[
      s('비후성 유문협착','유문 근육의 비후로 위 배출이 막힌다. 영아의 분출성 비담즙성 구토를 초음파 소견과 연결한다.',[sp('선천성 날문협착 · Congenital pyloric stenosis'),sr(21,'Hypertrophic pyloric stenosis')],[135,634]),
      s('이소성 이자','정상 위치 밖에 있는 이자 조직이다. 위에서는 상피하 병변처럼 보일 수 있지만, SET라는 모양만으로 GIST와 같다고 판단하지 않는다.',[sp('이소성 이자 · Heterotopic pancreas'),...setRefs],[121,350])
    ]),
    s('위염·점막 손상','염증세포, 손상의 깊이, 샘의 소실을 따로 본다. 위염의 원인과 그 결과인 위축·화생은 서로 배타적인 질병 목록이 아니다.',[sp('급성위염과 급성위궤양'),sp('만성위염')],[],[
      s('급성 손상','급성 염증·미란과 염증이 적은 gastropathy를 구별한다. 미란은 아직 muscularis mucosae를 넘지 않은 손상이다.',[sp('급성위염 · Acute gastritis'),sr(13,'Erosive gastritis')],[],[
        s('급성·미란성 위염','Neutrophil을 동반한 급성 점막 손상이다. 표면 결손이 얕은 erosion인지 깊은 ulcer인지 구분한다.',[sp('급성위염 · Acute gastritis'),sr(13,'Erosive gastritis')],[660,783]),
        s('Gastropathy','점막 손상에 비해 염증이 적은 경우를 위염과 구별해 부른다. NSAIDs 등 점막 방어를 약화시키는 원인을 함께 살핀다.',[sp('급성위염 · Acute gastritis'),sr(31,'점막 방어와 궤양의 깊이')])
      ]),
      s('만성위염 · 원인','H. pylori는 antrum 중심의 감염으로, 자가면역위염은 body·fundus의 parietal cell 소실로 대비한다.',[sp('자가면역위염과 헬리코박터 만성위염의 비교')],[420],[
        s('H. pylori 위염','감염에 의한 만성 염증이다. Antrum의 D cell 기능 저하와 산분비 증가 경로, 오래된 위축·화생 경로를 나누어 이해한다.',[sp('Helicobacter pylori 만성위염'),sr(31,'Antral gastritis에서 DU로 이어지는 D cell 경로'),sr(31,'위축성 위염에서 장상피화생으로')],[391,420,737,784]),
        s('자가면역위염','Body·fundus의 parietal cell이 소실되어 산과 intrinsic factor가 줄고 gastrin은 증가한다. Pernicious anemia와 NET의 배경을 함께 연결한다.',[sp('자가면역위염 · Autoimmune gastritis'),sp('자가면역위염과 헬리코박터 만성위염의 비교')],[27,420])
      ]),
      s('감염성 위염','H. pylori 이외의 감염도 점막을 손상시킨다. 실습에서는 CMV 감염 세포의 형태를 직접 확인한다.',[sr(13,'CMV gastritis')],[],[
        s('CMV gastritis','위 점막 손상과 함께 커진 감염 세포·봉입체를 찾는 조직학적 문제다. 전체 구조에서 의심 세포로 배율을 좁혀 본다.',[sr(13,'CMV gastritis'),sr(13,'CMV 감염 의심 세포')],[425])
      ]),
      s('위축·화생 · 변화의 축','위염이 지속되며 생기는 조직 변화다. 위축은 샘의 소실, 화생은 세포 종류의 변화로 구분한다.',[sr(31,'위축성 위염에서 장상피화생으로'),sp('발생 기전과 위험인자')],[],[
        s('위축성 위염','위샘이 소실되고 점막이 얇아진 상태다. H. pylori 감염과 자가면역위염 모두 원인이 될 수 있다.',[sr(31,'위축성 위염에서 장상피화생으로'),sp('자가면역위염 · Autoimmune gastritis')]),
        s('장상피화생','위 점막에 goblet cell 등 장상피의 특징이 나타난다. 제균의 의미와 이미 생긴 조직 변화의 회복 가능성을 같은 것으로 보지 않는다.',[sr(31,'위축성 위염에서 장상피화생으로'),sr(13,'Benign mucosa와 intestinal metaplasia')])
      ])
    ]),
    s('궤양·산 과분비','점막 방어와 공격 인자의 균형이 무너지면 궤양이 생긴다. 위치·원인·치유 단계·출혈 상태는 각각 다른 평가축이다.',ulcerRefs,[271,417],[
      s('급성 스트레스 궤양','심한 전신 스트레스 상황에서 생기는 급성 궤양이다. 만성 소화성 궤양의 반흔성 바닥과 구분한다.',[sp('급성위궤양 · Acute gastric ulcer')],[],[
        s('Curling ulcer','심한 화상과 연관된 스트레스 궤양이다. 발생 배경으로 Cushing ulcer와 구별한다.',[sp('급성위궤양 · Acute gastric ulcer')]),
        s('Cushing ulcer','두개내 병변과 연관된 스트레스 궤양이다. 이름보다 어떤 전신 상황에서 발생했는지를 연결한다.',[sp('급성위궤양 · Acute gastric ulcer')])
      ]),
      s('소화성 궤양 · PUD','Muscularis mucosae를 넘어가는 결손이다. 만성 궤양은 necrosis–inflammation–granulation–scar의 층을 연결해 읽는다.',ulcerRefs,[271,417,738],[
        s('발생 위치 · GU / DU','위궤양과 십이지장궤양을 비교하는 가지다. 위궤양은 점막 방어 손상, DU는 증가한 acid load를 중심으로 이해한다.',[sr(31,'DU와 GU는 산분비가 같은가'),sp('호발부위')],[117,455],[
          s('Gastric ulcer · GU','위의 궤양이다. 산분비 증가만으로 설명하지 말고 점막 방어 손상을 확인하며, 악성 궤양과의 감별도 필요하다.',[sp('호발부위'),sr(31,'DU와 GU는 산분비가 같은가'),sc('악성 감별은 한 단서보다 소견의 조합으로 한다')],[455,352,458,666]),
          s('Duodenal ulcer · DU','위와 대비할 십이지장 구부의 궤양이다. Antrum의 H. pylori 감염이 산분비 증가를 거쳐 DU로 이어지는 경로를 연결한다.',[sp('호발부위'),sr(31,'Antral gastritis에서 DU로 이어지는 D cell 경로')],[117,343,661])
        ]),
        s('주요 원인','H. pylori와 NSAIDs가 대표적이며 한 환자에서 함께 작용할 수 있다. 제균과 약물성 손상 예방은 목적이 다르다.',[sr(31,'H. pylori가 궤양과 위염을 만드는 과정'),sr(31,'NSAIDs: 위장관 위험과 심혈관 위험을 함께 보기')],[],[
          s('H. pylori 관련 궤양','균에 의한 점막 손상과 산분비 조절 이상을 연결한다. 현재 궤양의 치유와 제균을 통한 재발 예방을 나누어 본다.',[sr(31,'H. pylori가 궤양과 위염을 만드는 과정'),sr(31,'현재 궤양의 치료와 재발 예방은 다르다')],[3,343,661,784]),
          s('NSAID 관련 궤양','Prostaglandin 감소로 점막 보호가 약해진다. 과거 궤양·출혈, 고령, 병용약물을 확인해 예방 전략을 정한다.',[sr(31,'COX-1과 COX-2를 구별하는 이유'),sr(31,'NSAID 궤양의 고위험군'),sr(31,'예방의 중심은 고위험군의 PPI')],[136,222,349])
        ]),
        s('합병증','출혈·천공·폐쇄는 같은 궤양에서 생길 수 있지만, 증상과 응급 처치의 방향이 다르다.',[sr(31,'출혈·천공·폐쇄를 나누는 단서')],[],[
          s('궤양 출혈','혈관 손상으로 출혈한다. Forrest 분류는 출혈 흔적과 재출혈 위험을 평가하는 축이지 치유 단계의 이름이 아니다.',forrestRefs,[258]),
          s('궤양 천공','벽을 관통하면 복강 또는 후복막으로 내용물이 누출된다. 위치에 따라 사진과 임상 단서가 달라진다.',[sr(31,'천공: 구부와 후복막 부위를 구분')]),
          s('위출구 폐쇄','염증성 부종 또는 반흔성 협착 때문에 배출이 막힌다. 구조적 폐쇄가 없는 gastroparesis와 구별한다.',[sr(31,'폐쇄: 염증성 부종과 반흔성 협착')])
        ]),
        s('내시경 평가축','치유는 A–H–S, 출혈은 Forrest, 악성 의심은 주름·변연·바닥으로 읽는다. 한 궤양에 이 평가들이 동시에 적용된다.',[sr(31,'내시경에서 궤양을 읽는 세 가지 축'),sr(22,'GU의 치유 단계와 Forrest는 서로 독립된 축이다')],[],[
          s('치유 단계 · A–H–S','활동기에서 재생과 반흔으로 진행하는 순서다. 출혈 위험 분류와 섞지 않는다.',stageRefs,[],[
            s('Active · A1 / A2','활동성 궤양의 시기다. 궤양 바닥·변연·주변 부종을 보며 A1과 A2를 비교한다.',[sr(22,'Active stage: A1과 A2')]),
            s('Healing · H1 / H2','재생상피가 자라고 궤양 결손이 작아진다. 변연의 재생과 남은 백태를 함께 본다.',[sr(22,'Healing stage: H1과 H2, 재생상피를 읽는 법')]),
            s('Scar · S1 / S2','S1은 적색 반흔, S2는 백색 반흔이다. 색의 변화는 치유 경과를 읽는 단서다.',[sr(22,'Scar stage: S1은 적색 반흔, S2는 백색 반흔')])
          ]),
          s('출혈 상태 · Forrest','활동성 출혈과 최근 출혈의 흔적을 구분한다. 내시경 지혈 필요성을 판단할 때 연결한다.',forrestRefs,[],[
            s('Forrest I · 활동성 출혈','Ia는 분출성, Ib는 삼출성 출혈이다.',forrestRefs),
            s('Forrest II · 출혈 흔적','IIa는 노출혈관, IIb는 부착 혈전, IIc는 평평한 착색 반점이다. 세 가지를 같은 위험도로 묶지 않는다.',forrestRefs),
            s('Forrest III · 깨끗한 바닥','출혈 흔적이 없는 clean base다. 활동성 출혈이나 노출혈관과 구분한다.',forrestRefs)
          ]),
          s('양성·악성 궤양 감별','양성은 비교적 질서 있는 주름과 경계, 악성은 불규칙한 변연·주름의 단절 등을 조합해 의심한다. 한 소견만으로 확진하지 않는다.',[sr(22,'양성·악성 위궤양: 그림의 ①–⑨를 읽는 법'),sc('악성 감별은 한 단서보다 소견의 조합으로 한다')],[352,458,666,738])
        ])
      ]),
      s('Zollinger–Ellison','Gastrinoma의 gastrin 과다로 심한 산분비가 생기는 증후군이다. 다발성·재발성·치료에 잘 낫지 않는 궤양에서 의심한다.',[sp('Zollinger–Ellison 증후군'),sr(31,'낫지 않는 궤양: Zollinger–Ellison syndrome')],[160,223,398,418,774])
    ]),
    s('기능·운동','증상을 설명할 구조적 병변이 없는 FD와 실제 위 배출 지연인 gastroparesis를 같은 진단으로 묶지 않는다.',[sr(32,'소화불량증에서 FD의 위치'),sr(38,'운동질환과 기능성 질환')],[],[
      s('기능성 소화불량 · FD','원인을 설명할 구조적 질환 없이 불편한 소화불량 증상이 지속된다. 식후 불편과 통증·쓰림을 기준으로 아형을 나누며 둘은 겹칠 수 있다.',[sr(32,'먼저 확인할 공통 조건'),sr(32,'PDS와 EPS를 구분하는 기준')],[505,765,789],[
        s('PDS · 식후불편감증후군','식후 포만감·조기 만복감이 중심이다. 식사와의 관계, 위의 적응·배출 기전을 치료 선택에 연결한다.',[sr(32,'식사 후 불편한 PDS와 통증이 중심인 EPS'),sr(32,'PDS와 EPS의 치료 순서')],[123,255,454,766]),
        s('EPS · 명치통증증후군','명치 통증·쓰림이 중심이다. PDS와 중복될 수 있으며 산 억제 치료의 위치를 구분한다.',[sr(32,'식사 후 불편한 PDS와 통증이 중심인 EPS'),sr(32,'PDS와 EPS의 치료 순서')],[464,765])
      ]),
      s('Gastroparesis','기계적 폐쇄 없이 위 배출이 지연된다. 당뇨·수술·약물 등의 원인을 위 운동과 연결해 이해한다.',[sr(38,'위의 저장·연동·배출'),sr(38,'Gastroparesis와 pseudo-obstruction의 원인')],[10,145,288,465])
    ]),
    s('용종·종양','표면에서 보이는 용종·SET라는 모양과 조직학적 진단을 구별한다. 암의 여러 분류는 한 종양에 겹쳐 붙는 별개의 정보다.',[sp('위용종과 선종'),sp('위의 악성종양'),sc('GIST와 상피하종양')],[],[
      s('점막 용종·선종','점막에서 솟은 병변이라도 재생성 용종과 이형성을 가진 선종은 의미가 다르다.',[sp('위용종과 선종')],[],[
        s('Hyperplastic polyp','염증·재생과 관련된 용종으로, 늘어나거나 낭성 확장된 샘을 본다. Dysplasia가 중심인 선종과 구별한다.',[sp('과형성용종 · Hyperplastic polyp')]),
        s('Gastric adenoma','이형성을 가진 상피성 종양이다. Tubular·tubulovillous·villous 구조와 이형성 정도를 함께 본다.',[sp('위선종 · Gastric adenoma')])
      ]),
      s('상피하 병변 · SET','정상에 가까운 점막 아래에서 솟아 보인다는 위치·모양의 표현이다. GIST뿐 아니라 이소성 이자·지방종 등도 포함하는 감별 범주다.',setRefs,[121,350],[
        s('GIST','Cajal cell 계열의 종양으로 KIT·PDGFRA와 연결된다. 크기만으로 양성이라 단정하지 않고 mitosis·위치 등을 함께 평가한다.',[sp('위장관기질종양 · Gastrointestinal stromal tumor'),sc('GIST의 기원세포·호발부위·예후를 구분한다'),sc('2 cm와 mitotic count를 함께 읽는 위험도표')],[33,224,350,562,607,639]),
        s('SET의 이소성 이자','위의 이소성 이자가 상피하 융기로 보이는 경우다. 선천성·이소성 가지의 병변을 내시경의 관점에서 다시 보는 것이다.',[sp('이소성 이자 · Heterotopic pancreas'),...setRefs]),
        s('Leiomyoma','평활근종도 상피하 병변의 감별 대상이다. 표면 모양만으로 GIST와 동일시하지 않는다.',setRefs),
        s('Lipoma','지방종은 SET 감별에 포함된다. 상피하 융기라는 표현 자체가 악성종양의 진단은 아니다.',setRefs),
        s('Cyst · 낭성 병변','낭성 병변도 상피하 융기처럼 보일 수 있다. 병변의 성상을 확인하는 과정이 필요하다.',setRefs)
      ]),
      s('위샘암종','상피성 악성종양이다. 아래 가지는 서로 다른 질병 목록이 아니라 같은 암을 깊이·모양·조직·분자로 설명하는 분류축이다.',[sp('위샘암종 · Gastric adenocarcinoma'),sp('위암의 분류 축'),sc('위암의 모양과 깊이는 별개의 분류다')],[158,270],[
        s('침윤 깊이 · T','림프절 전이 여부와 구분해 벽의 어느 층까지 침윤했는지를 판단한다. EGC와 AGC를 가르는 기준도 깊이다.',depthRefs,[351,457,608,665,785],[
          s('EGC · T1','점막 또는 점막밑층까지 침윤한 위암이다. 림프절 전이가 있어도 깊이 기준상 EGC일 수 있다. 내시경 절제의 조건은 별도로 판단한다.',[sp('조기위암 · Early gastric cancer'),...depthRefs,sr(13,'조기위암과 침윤 깊이'),sc('조기암이어도 모두 내시경 절제할 수는 없다')],[351,457,459,608,665,785],[
            s('T1a · 점막','Lamina propria 또는 muscularis mucosae까지 침윤한다. Submucosa 침윤과 구분한다.',depthRefs),
            s('T1b · 점막밑층','Submucosa에 침윤했지만 아직 muscularis propria에는 도달하지 않았다.',[...depthRefs,sc('점막밑층과 고유근육층을 구분해서 본다')])
          ]),
          s('AGC · T2 이상','Muscularis propria 이상으로 침윤한 위암이다. Borrmann 분류는 그와 별도로 육안 모양을 나타낸다. 치료에서는 수술 가능성과 항암치료의 시점·목적을 구분한다.',[sp('진행위암 · Advanced gastric cancer'),...depthRefs,sc('진행성 위암 치료는 시점과 목적을 구분한다')],[459],[
            s('T2 · 고유근육층','Muscularis propria 침윤이다. Muscularis mucosae와 혼동하지 않는다.',depthRefs),
            s('T3 · 장막밑층','Subserosa까지 침윤했지만 장막 표면을 침범하지 않은 단계다.',depthRefs),
            s('T4a · 장막','장막, 즉 visceral peritoneum을 침범한다.',depthRefs),
            s('T4b · 인접 구조','인접 장기·구조로 직접 침윤한다.',depthRefs)
          ])
        ]),
        s('육안 모양','내시경·절제 표본에서 보는 외형이다. 모양만으로 조직형이나 전체 병기를 치환하지 않는다.',[...earlyGrossRefs,...advancedGrossRefs],[159,419,739],[
          s('EGC · Type 0','융기·평탄·함몰을 나누고 혼합형에서는 함께 표기한다.',earlyGrossRefs,[159],[
            s('0-I · 융기형','뚜렷하게 솟은 형이다.',earlyGrossRefs),
            s('0-II · 표면형','얕은 표면 변화 안에서 융기·평탄·함몰을 나눈다.',earlyGrossRefs,[],[
              s('0-IIa · 표면융기','살짝 솟은 표면형이다.',earlyGrossRefs),
              s('0-IIb · 표면평탄','뚜렷한 융기나 함몰이 없는 평탄형이다.',[...earlyGrossRefs,sr(13,'평탄부 IIb와 함몰부 IIc')]),
              s('0-IIc · 표면함몰','얕게 들어간 표면형이다.',[...earlyGrossRefs,sr(13,'평탄부 IIb와 함몰부 IIc')])
            ]),
            s('0-III · 함몰형','깊게 파인 형태다. 육안 함몰의 깊이와 암의 조직학적 침윤 깊이는 별도로 평가한다.',earlyGrossRefs,[159])
          ]),
          s('AGC · Borrmann','진행위암을 종괴·궤양 경계·주변 침윤·미만성 침윤으로 나누는 육안 분류다.',advancedGrossRefs,[419,739,667],[
            s('Borrmann I형','폴립처럼 돌출된 종괴형이다.',advancedGrossRefs),
            s('Borrmann II형','궤양이 있으면서 주위와 경계가 비교적 뚜렷하다. 침윤성 변연의 III형과 대비한다.',[...advancedGrossRefs,sp('Borrmann II형과 III형의 육안 감별')]),
            s('Borrmann III형','궤양 주변으로 침윤하여 경계가 불분명하다.',[...advancedGrossRefs,sp('Borrmann II형과 III형의 육안 감별')],[739]),
            s('Borrmann IV형','위벽을 미만성으로 침윤하며 두껍고 뻣뻣한 linitis plastica 형태를 보일 수 있다.',advancedGrossRefs,[667])
          ])
        ]),
        s('조직형 · Lauren','샘을 만드는 장형과 세포가 흩어지는 미만형을 대비한다. WHO의 세부 조직형과 완전히 같은 목록은 아니다.',laurenRefs,[28,259,270],[
          s('Intestinal type','샘 구조를 형성하며 만성위염·위축·장상피화생의 경로와 연결된다.',[sp('장형 · Intestinal type'),...laurenRefs],[259,270]),
          s('Diffuse type','응집력이 낮은 세포가 퍼져 침윤한다. CDH1과 signet-ring cell, 미만성 위벽 침윤을 함께 연결한다.',[sp('미만형 · Diffuse type'),...laurenRefs],[28,270]),
          s('Mixed type','장형과 미만형의 특징이 함께 있는 분류다.',laurenRefs,[270])
        ]),
        s('조직형 · WHO','현미경에서 샘의 형태·점액·세포 응집성을 기준으로 구분한다.',whoRefs,[270],[
          s('Tubular adenocarcinoma','관 모양의 샘을 형성한다. 비정상적인 샘 구조와 세포 이형성을 함께 본다.',[...whoRefs,sr(13,'위샘암종의 샘 구조와 세포 이형성')],[158]),
          s('Papillary adenocarcinoma','섬유혈관 중심축을 가진 유두상 구조가 특징이다.',whoRefs),
          s('Micropapillary carcinoma','작은 유두상 군집을 이루지만 전형적인 섬유혈관 중심축이 없다.',whoRefs),
          s('Mucinous adenocarcinoma','세포 밖의 풍부한 점액을 읽는다. 세포 안에 점액이 차는 signet-ring cell과 대비한다.',whoRefs),
          s('Poorly cohesive carcinoma','세포가 서로 잘 붙지 않아 낱개 또는 작은 집단으로 침윤한다. Signet-ring cell 형태가 여기에 포함된다.',[...whoRefs,sr(13,'Poorly cohesive와 poorly differentiated')],[],[
            s('Signet-ring cell 형태','세포 내 점액이 핵을 한쪽으로 밀어 반지 모양을 만든다. Poorly cohesive 범주 안에서 보는 세포 형태다.',[...whoRefs,sr(13,'Mucin과 signet-ring cell')])
          ])
        ]),
        s('분자형 · TCGA','EBV·MSI·GS·CIN은 분자적 특징의 축이다. Lauren이나 WHO 조직형과 같은 수준의 육안 분류가 아니다.',tcgaRefs,[30,270],[
          s('EBV-associated','EBV 감염과 연관된 분자군이다. 강의의 PIK3CA·PD-L1/PD-L2 연결을 확인한다.',tcgaRefs,[30]),
          s('MSI','DNA mismatch repair 이상과 microsatellite instability를 연결한다.',tcgaRefs,[30]),
          s('GS · Genomically stable','CDH1·RHOA 및 diffuse-type과의 연관을 묶는다.',tcgaRefs,[270]),
          s('CIN · Chromosomal instability','염색체 불안정성, TP53 및 RTK/RAS 경로와 연결한다.',tcgaRefs,[270])
        ])
      ]),
      s('림프종','위의 종양을 모두 상피성 위암으로 보지 않는다. H. pylori와 연결되는 MALT lymphoma는 제균의 치료적 의미가 다르다.',[sp('위 림프종 · Gastric lymphoma')],[],[
        s('MALT lymphoma','B세포 림프종으로 lymphoepithelial lesion을 찾는다. 일부 국소 병변은 H. pylori 제균으로 치료할 수 있어 위선암과 대비된다.',[sp('MALT 림프종'),sr(13,'위 MALT lymphoma'),sc('MALT lymphoma: 제균이 종양 치료가 되는 경우')],[122,225,741])
      ]),
      s('신경내분비 종양군','분화가 좋은 NET과 나쁜 NEC를 구별한다. 위 NET의 발생 배경인 Type I–III와 증식 등급 G1–G3는 별개의 축이다.',netRefs,[426],[
        s('NET · 발생 배경','같은 위 NET이라도 gastrin 증가의 원인이 다르다. 산분비가 낮은 I형과 높은 II형을 대비한다.',[sp('위 NET의 세 유형')],[],[
          s('NET Type I','자가면역위염·위축을 배경으로 산분비는 감소하고 gastrin은 증가한다.',[sp('위 NET의 세 유형'),sp('자가면역위염 · Autoimmune gastritis')]),
          s('NET Type II','ZES·MEN1과 연결된다. Gastrin 증가와 함께 산분비도 증가한다.',[sp('위 NET의 세 유형'),sp('Zollinger–Ellison 증후군')]),
          s('NET Type III','고gastrin혈증의 배경 없이 산발적으로 발생하는 유형이다.',[sp('위 NET의 세 유형')])
        ]),
        s('NET · 증식 등급','Mitosis와 Ki-67로 G1·G2·G3를 나눈다. G3라는 숫자만으로 poorly differentiated NEC와 같다고 해석하지 않는다.',netRefs,[426]),
        s('NEC','Poorly differentiated neuroendocrine carcinoma다. Small-cell·large-cell 형태를 포함하며 NET의 G3와 구별한다.',netRefs,[426]),
        s('MiNEN','Neuroendocrine 성분과 non-neuroendocrine 성분이 함께 있는 종양이다.',netRefs)
      ])
    ])
  ]);

  const intestineWikiReferences={},intestineStudyNotes={};
  const ir=(courseId,heading)=>({courseId,heading});
  const ip=heading=>ir(12,heading),ic=(courseId,heading)=>ir(courseId,heading);
  const it=(label,clue,refs,questions=[],children=[])=>{
    intestineWikiReferences[label]=refs;intestineStudyNotes[label]={clue,questions};
    return children.length?{label,children}:{label};
  };
  const obstructionRefs=[ip('장폐쇄 · Obstruction')];
  const ileocecalRefs=[ic(29,'회맹부 궤양과 IBD 유사 질환'),ic(29,'CD·장결핵·장베체트병: 회맹부 궤양을 가르기')];
  const wateryRefs=[ic(28,'비염증성 설사'),ic(28,'E. coli와 콜레라·기생충')];
  const invasiveRefs=[ic(28,'침습성 세균 비교'),ip('급성감염성 대장염 · Acute infectious colitis')];
  const toxinRefs=[ic(28,'독소형 식중독'),ic(28,'세균성 설사의 네 가지 기전')];
  const serratedRefs=[ip('Serrated lesion의 유형과 형태'),ic(30,'대장암으로 가는 두 경로'),ic(14,'Hyperplastic polyp과 Sessile serrated lesion 감별')];
  const adenomaRefs=[ip('Conventional adenoma'),ic(30,'Tubular, Tubulovillous, Villous adenoma')];
  const constipationRefs=[ic(38,'변비와 IBS의 구분'),ic(38,'변비 유형별 치료 비교')];
  const bowelStageRefs=[ip('TNM 병기'),ic(30,'TNM은 깊이·구역 림프절·원격 전이')];
  const intestineTree=it('장','소장·대장 질환을 발생·구조, 염증, 감염, 혈류, 흡수, 운동, 종양으로 나누어 본다. 같은 질환이 여러 기전을 가질 수 있으므로 분류 이름만으로 서로 배타적이라고 생각하지 않는다.',[ip('장질환의 범주')],[],[
    it('발생·구조 이상','태어날 때의 형성 이상과 이후 생긴 막힘·돌출을 구분한다. 무엇이 막혔는지뿐 아니라 혈류가 함께 손상됐는지도 중요하다.',[ip('선천성 기형'),...obstructionRefs],[],[
      it('선천성 장질환','내강의 연결, 회전, 신경절, 배출구 중 어느 부분이 발달하지 못했는지를 본다.',[ip('선천성 기형'),ic(21,'학습목표와 진단의 큰 흐름')],[],[
        it('Meckel diverticulum','난황장관의 잔재로 생기는 true diverticulum이다. 이소성 위점막이 있으면 궤양·무통성 출혈로 이어질 수 있다.',[ip('Meckel diverticulum'),ic(20,'혈변의 양상으로 좁히기')],[16,279,748,781]),
        it('Hirschsprung disease','원위부의 ganglion cell 결여로 이완이 되지 않아 그 위의 장이 확장된다. 넓어진 근위부와 병변인 좁은 원위부를 구분한다.',[ip('선천성 무신경절 거대결장 · Hirschsprung disease'),ic(14,'Aganglionic megacolon · Hirschsprung disease'),ic(21,'Hirschsprung disease')],[128,231,636,798]),
        it('장폐쇄증 · Atresia','장 내강 자체가 선천적으로 이어지지 않은 상태다. 막힌 높이에 따라 구토와 가스 분포가 달라진다.',[ic(21,'Duodenal atresia'),ic(21,'Jejunoileal atresia')],[],[
          it('Duodenal atresia','위와 근위 십이지장이 늘어난 double bubble, 그 아래 가스의 부재를 연결한다.',[ic(21,'Duodenal atresia')],[560]),
          it('Jejunoileal atresia','태아기 혈류장애와 연결하는 소장 폐쇄다. 사용되지 않은 가는 대장인 unused microcolon을 Hirschsprung의 transition zone과 구별한다.',[ic(21,'Jejunoileal atresia')])
        ]),
        it('Malrotation','장 회전·고정 이상이 midgut volvulus의 바탕이 된다. 담즙성 구토에서 꼬임과 허혈 위험을 함께 생각한다.',[ic(21,'Malrotation과 midgut volvulus')],[360]),
        it('항문직장기형 · ARM','직장 말단의 높이, 누공의 위치, 회음부 개구를 확인한다. 항문이 안 보인다는 사실만으로 수술 방식을 정하지 않는다.',[ic(21,'항문직장기형의 판단 원리'),ic(21,'남아의 치료방침'),ic(21,'여아의 치료방침')],[127,635],[
          it('낮은 회음부 누공','직장 출구가 회음부까지 내려온 단서다. 높은 병변·복잡한 기형과 구별한다.',[ic(21,'남아의 치료방침'),ic(21,'여아의 치료방침')],[635]),
          it('Vestibular fistula','직장이 질 안이 아니라 질 입구의 전정으로 열린다. 위치와 배출 상태를 확인한다.',[ic(21,'여아의 치료방침')]),
          it('Persistent cloaca','요로·질·직장이 공통관으로 모인다. 장의 배출뿐 아니라 요로와 hydrocolpos도 함께 평가한다.',[ic(21,'Cloaca와 hydrocolpos')])
        ])
      ]),
      it('기계적 장폐쇄','장 안의 병변, 바깥의 유착·탈장, 중첩·꼬임 때문에 통과가 막힌다. 막는 병변이 없는 가성 장폐색과 구별한다.',obstructionRefs,[17,399,620,796],[
        it('Adhesion · 유착','수술·염증 뒤의 유착이 장을 당기거나 꺾는다. 폐쇄에 교액성 혈류장애가 더해졌는지 확인한다.',[ip('Adhesion')],[796]),
        it('Hernia · 탈장','장 등이 복벽의 약한 부위를 통해 빠져나온다. 돌아가지 않는 감돈과 혈류까지 손상된 교액을 나누어 본다.',[ip('Hernia'),ic(21,'Inguinal hernia'),ic(21,'탈장과 hydrocele의 구분 및 치료방침')]),
        it('Intussusception · 장중첩','장 한 분절이 다른 장 안으로 말려 들어간다. 소아의 주기적 산통·currant-jelly stool·target sign을 연결하고, 성인에서는 lead point를 찾는다.',[ip('Intussusception'),ic(21,'Intussusception'),ic(30,'소장 종양을 의심해야 할 때')],[148,278,361,435,648]),
        it('Volvulus · 장염전','장간막의 축을 중심으로 장이 꼬인다. 통과 장애와 함께 혈관이 눌려 허혈이 생길 수 있다.',[ip('Volvulus'),ic(21,'Malrotation과 midgut volvulus')],[],[
          it('Midgut volvulus','Malrotation의 좁은 장간막 기저부를 축으로 꼬이는 상황이다. 소아의 갑작스러운 담즙성 구토와 전신 악화가 중요하다.',[ic(21,'Malrotation과 midgut volvulus')],[360]),
          it('결장 Volvulus','S상결장·맹장 등에서 장고리가 꼬이는 형태다. 장중첩의 망원경식 말림과 구분한다.',[ip('Volvulus')])
        ]),
        it('종양성·염증성 협착','종양이나 만성 염증의 협착도 내강을 막는다. CD에서는 점막이 호전돼도 협착 때문에 통증이 지속될 수 있다.',[ic(29,'CD의 협착·누공과 영양 합병증'),ic(43,'폐색과 천공 — Diverting colostomy와 Hartmann')],[306,495,554,729])
      ]),
      it('결장게실 질환','점막·점막밑층이 근육층의 약한 틈으로 돌출하는 false diverticulum이 중심이다. Meckel의 전층성 true diverticulum과 대비한다.',[ip('결장게실 · Colonic diverticulum'),ic(14,'결장게실과 Diverticulitis')],[],[
        it('Diverticulosis','게실이 존재하는 상태다. 게실 자체와 염증·천공이 생긴 상태를 같은 뜻으로 쓰지 않는다.',[ip('결장게실 · Colonic diverticulum'),ic(14,'게실벽의 근육층')]),
        it('Diverticulitis','게실에 염증이 생긴 상태로 농양·천공·누공이 이어질 수 있다. 대변뇨·기뇨가 있으면 방광과의 누공을 생각한다.',[ip('결장게실 · Colonic diverticulum'),ic(14,'괴사성 염증'),ic(14,'Serositis와 천공 의심')],[552,626])
      ])
    ]),
    it('염증·면역 질환','IBD의 만성 구조 변화와 감염·허혈을 구분한다. 분포, 침범 깊이, 궤양의 모양, 조직 소견을 같은 기준으로 비교한다.',[ip('염증성 장질환 · Inflammatory bowel disease'),ic(29,'UC와 Crohn병을 가르는 기본 구조')],[],[
      it('IBD','UC와 CD를 묶는 범주다. 진단은 한 소견이 아니라 임상·내시경·조직·영상을 종합하며 IBS와 구별한다.',[ip('Crohn disease와 ulcerative colitis 비교'),ic(29,'UC와 CD: 같은 기준으로 끝까지 비교하기'),ic(29,'치료약 비교: UC/CD·유도/유지·부작용'),ic(42,'IBD 치료제: 염증 표적과 유도·유지를 구분하기')],[303,487,492,775],[
        it('Ulcerative colitis','전형적으로 직장에서 연속되는 점막 중심 염증이다. 혈변·urgency·tenesmus와 crypt distortion을 연결한다.',[ip('궤양성대장염 · Ulcerative colitis'),ic(14,'Ulcerative colitis'),ic(29,'Ulcerative colitis'),ic(29,'병변 범위에 맞는 5-ASA 투여')],[186,490,724,726],[
          it('E1 · Proctitis','직장에 국한된다. 병변 범위는 약물이 도달해야 할 위치와 연결된다.',[ic(29,'범위와 조직 변화'),ic(29,'병변 범위에 맞는 5-ASA 투여')],[490,724]),
          it('E2 · Left-sided colitis','직장에서 이어져 비장만곡 원위부까지 침범한다.',[ic(29,'범위와 조직 변화'),ic(29,'병변 범위에 맞는 5-ASA 투여')]),
          it('E3 · Extensive colitis','비장만곡보다 근위부까지 퍼진다. 범위가 넓을수록 치료의 전달 범위와 장기 암 감시를 함께 생각한다.',[ic(29,'범위와 조직 변화'),ic(29,'대장암 감시와 Dysplasia')])
        ]),
        it('Crohn disease','Skip lesion과 전층 염증, 종주성 궤양·cobblestone을 연결한다. 비건락성 육아종은 지지 소견이지만 필수는 아니다.',[ip('Crohn disease'),ic(14,'Crohn disease'),ic(29,'Crohn’s disease'),ic(29,'CD의 협착·누공과 영양 합병증')],[14,57,187,306,495,647,729]),
        it('IBD의 합병증·특수 상황','별도의 IBD 아형이 아니라 경과 중 겹칠 수 있는 문제들이다. 염증의 깊이와 지속 기간을 이해하면 합병증이 연결된다.',[ic(29,'합병증은 염증의 깊이와 지속 기간을 반영한다')],[],[
          it('Toxic megacolon','기계적 폐쇄 없이 심한 대장 확장과 전신 독성이 동반된 상태다. UC뿐 아니라 CDI에서도 생길 수 있다.',[ic(29,'Toxic megacolon과 급성 중증 UC'),ic(28,'CDI의 중증도')],[805]),
          it('CD의 협착·누공','전층 손상은 협착·농양·누공을 설명한다. 협착이 의심될 때 캡슐내시경을 무조건 선택하지 않는다.',[ic(29,'CD의 협착·누공과 영양 합병증'),ic(29,'내시경과 영상검사의 역할')],[306,495,729]),
          it('IBD 관련 Dysplasia·암','질병 기간·대장 침범 범위·염증 부담과 암 감시를 연결한다. 가성용종 자체와 배경 장염의 암 위험은 다르다.',[ic(29,'대장암 감시와 Dysplasia'),ic(30,'암 위험과 예방을 이해하는 범위')],[302,491,723]),
          it('소아 IBD','성장 지연과 영양 상태가 핵심 단서다. 증상 완화뿐 아니라 성장 회복과 EEN의 위치를 함께 본다.',[ic(20,'소아 IBD에서 성장을 보는 이유'),ic(20,'관해유도와 EEN')],[280,436,647])
        ])
      ]),
      it('장베체트병','회맹부의 소수·깊은 원형 또는 타원형 궤양과 뚜렷한 경계를 본다. 구강·성기 궤양, 안구·피부 병변을 함께 확인한다.',[ic(29,'장베체트병'),...ileocecalRefs],[188,301,489,725]),
      it('Microscopic colitis','내시경이 거의 정상처럼 보여도 만성 비혈성 수양성 설사가 지속될 수 있다. 진단을 가르는 것은 생검이다.',[ip('미세대장염 · Microscopic colitis')],[],[
        it('Collagenous colitis','표면상피 아래 두꺼운 collagen band가 특징이다. Crypt 구조는 비교적 보존된다.',[ip('Collagenous colitis')]),
        it('Lymphocytic colitis','표면상피 내 lymphocyte 증가가 중심이며 collagen band는 두껍지 않다.',[ip('Lymphocytic colitis')])
      ]),
      it('Necrotizing enterocolitis','미숙아의 수유 불내성·복부팽만·전신 악화와 장벽 내 공기인 pneumatosis를 연결한다. 공기가 장벽·문맥·복강 중 어디에 있는지 본다.',[ic(21,'Necrotizing enterocolitis')])
    ]),
    it('감염성 장질환','병원체와 임상 양상은 완전히 일대일이 아니다. 수양성·염증성·전신성이라는 대표 양상을 출발점으로 삼고 독소와 침습을 구별한다.',[ip('감염성 소장대장염'),ic(28,'감염성 설사를 이해하는 순서'),ic(39,'노출력으로 좁히는 원인')],[11,143,289,468],[],),
    it('혈류장애','동맥 유입 차단, 저관류, 정맥 유출 장애를 구분한다. 어느 경우든 장벽 괴사와 천공까지 진행했는지가 중요하다.',[ip('허혈성 장질환 · Ischemic bowel disease'),ic(23,'전체 흐름'),ic(14,'Ischemic colitis · Ischemic bowel disease')],[],[
      it('급성 장간막 허혈','갑작스러운 복통에 위험인자와 혈류 기전을 연결한다. 동맥·정맥·비폐색성 유형을 나누어 본다.',[ic(23,'급성·만성 분류'),ic(23,'급성 허혈의 치료 비교')],[],[
        it('동맥 폐색성 허혈','막힌 동맥으로의 혈류를 회복할 수 있는지와 장 생존성을 평가한다. 색전과 혈전은 발생 방식이 다르다.',[ic(23,'Arterioocclusive의 위험인자'),ic(23,'급성 동맥 폐색의 치료'),ic(23,'동맥 공급과 측부순환')],[654],[
          it('Arterial embolism','심장 등 다른 부위에서 날아온 색전이 동맥을 막는다. AF와 갑작스러운 심한 복통이 대표 조합이다.',[ic(23,'Arterioocclusive의 위험인자'),ic(23,'갑작스러운 복통·쇼크·AF 증례')],[51,140,444]),
          it('Arterial thrombosis','기존 동맥 병변에서 혈전이 형성되어 막힌다. 이동해 온 embolus와 구별한다.',[ic(23,'급성·만성 분류'),ic(23,'Arterioocclusive의 위험인자')])
        ]),
        it('NOMI','혈관을 막는 뚜렷한 병변 없이 저관류·혈관 수축으로 허혈이 생긴다. 쇼크·중증 환자라는 맥락을 본다.',[ic(23,'NOMI'),ic(23,'NOMI의 위험인자')]),
        it('Mesenteric venous thrombosis','정맥 유출이 막혀 울혈·부종과 허혈이 발생한다. 혈전 성향과 췌장염 등 주변 염증을 연결한다.',[ic(23,'Mesenteric venous thrombosis'),ic(23,'Mesenteric venous thrombosis의 위험인자'),ic(23,'치료와 관찰')],[52,141,445])
      ]),
      it('만성 장 허혈','식후 증가하는 혈류 요구를 충족하지 못해 식후 복통, food fear, 체중 감소가 이어진다.',[ic(23,'Chronic intestinal ischemia'),ic(23,'식후 복통과 food fear')],[655]),
      it('Ischemic colitis','대장 혈류의 경계 부위와 저관류를 연결한다. 직장은 대개 보존되며 표면 탈락·출혈·crypt 소실을 본다.',[ip('허혈성 장질환 · Ischemic bowel disease'),ic(14,'Ischemic colitis · Ischemic bowel disease'),ic(23,'Ischemic colitis'),ic(29,'감염·허혈을 배제하는 이유')]),
      it('MALS','Median arcuate ligament에 의한 celiac artery 압박과 관련된 별도의 증후군이다. 일반적인 죽상경화성 장간막 협착과 구별한다.',[ic(23,'MALS')])
    ]),
    it('소화·흡수장애','장 안의 소화, 점막 통과, 흡수면적, 림프 운반 중 어느 단계가 문제인지 나누어 본다. 지방변이라는 증상 하나가 모든 원인을 같게 만들지는 않는다.',[ip('흡수장애 · Malabsorption'),ic(40,'흡수장애는 어느 단계의 문제인가'),ic(40,'대변 지방과 D-xylose')],[13,147,470,471,677],[],),
    it('기능·운동 질환','IBS의 복통–배변 관계, 추진력 저하, 출구의 협응 이상을 구분한다. 기계적 폐쇄가 없는지 먼저 확인한다.',[ic(38,'운동질환과 기능성 질환')],[],[
      it('IBS','구조적 병변보다 반복 복통과 배변·대변 횟수·형태 변화의 관계로 진단하는 기능성 질환이다. 염증성 IBD와 다르다.',[ic(38,'IBS의 정의와 병태생리'),ic(38,'Rome IV 진단 기준'),ic(42,'IBS 치료제: 설사형과 변비형을 반대로 외우지 않기')],[467,486],[],),
      it('변비·배출장애','증상이 같아도 느린 대장, 경련성 증상, 출구 협응 문제, 구조적 문제는 치료가 다르다.',constipationRefs,[9,144,287,461,673],[
        it('Colonic inertia','대장의 추진력이 떨어져 통과가 지연된다. 배출구만의 문제와 구분하고 colon transit time을 연결한다.',[ic(38,'이완성 변비와 colonic inertia'),...constipationRefs],[9,144,287,461,673]),
        it('경련성 변비','복통·가스와 함께 작은 덩어리 변, 불완전 배변감이 나타나는 강의의 분류다. IBS와의 관계를 살핀다.',[ic(38,'경련성 변비'),...constipationRefs],[9,144,287,461,673]),
        it('Pelvic floor dyssynergia','배변 시 골반저·항문이 적절히 이완하지 못하는 협응 장애다. 구조를 절제하는 치료와 biofeedback의 목적을 구별한다.',[ic(38,'직장형 변비와 배출장애'),...constipationRefs],[9,144,287,461,673]),
        it('구조적 배출장애','직장까지 내려온 변이 구조 변화 때문에 배출되지 못한다. Rectocele과 직장탈·직장중첩은 같은 이름이 아니다.',[ic(38,'직장형 변비와 배출장애'),ic(38,'구조적 배출장애의 사진'),...constipationRefs],[],[
          it('Rectocele · 직장류','직장벽이 주머니처럼 돌출되어 내용물이 남는 형태다. Rectal prolapse와 구분한다.',[ic(38,'구조적 배출장애의 사진')]),
          it('직장탈·직장중첩','직장의 탈출 또는 중첩이 배출을 방해하는 구조적 문제다. 기능적 항문경과 치료 방향을 비교한다.',[ic(38,'직장형 변비와 배출장애'),ic(38,'변비 유형별 치료 비교')],[9,144,287,461,673])
        ]),
        it('소아 기능성 변비·유분증','참기 행동으로 변이 고이고 다시 배변을 피하는 악순환을 이해한다. 변실금을 단순히 설사라고 판단하지 않는다.',[ic(20,'참기 행동과 유분증의 악순환'),ic(20,'변비 치료는 제거 후 유지')])
      ]),
      it('가성 장폐색','내강을 막는 기질적 병변 없이 운동 이상으로 폐색 같은 증상과 확장이 생긴다. 전신질환·신경·약물 원인을 연결한다.',[ic(38,'가성 장폐색'),ic(38,'Gastroparesis와 pseudo-obstruction의 원인')],[675]),
      it('Fecal incontinence','변을 유지·배출하는 운동·괄약근 기능의 문제다. 소아의 변 저류에 따른 넘침 유분증과는 원인을 따로 판단한다.',[ic(38,'운동질환과 기능성 질환'),ic(20,'참기 행동과 유분증의 악순환')],[466])
    ]),
    it('용종·종양','장기, 조직형, 육안 모양, 유전성 증후군, 암의 병기는 각각 다른 질문이다. 같은 병변에 여러 분류가 동시에 붙을 수 있다.',[ip('대장 폴립'),ic(30,'용종을 발견한 뒤의 판단 순서'),ic(43,'먼저 잡아야 할 흐름')],[],[]),
    it('충수·복막','충수의 염증과 종양을 나누고, 복막으로 염증이나 점액이 퍼지는 경우를 연결한다.',[ip('충수질환'),ip('복막염 · Peritonitis')],[],[
      it('Acute appendicitis','초기 배꼽 주위 통증에서 우하복부 통증으로 이동하는 흐름과 근육층의 neutrophil 침윤을 연결한다.',[ip('급성충수염 · Acute appendicitis'),ic(14,'근육층 내 Neutrophil')],[18,149,357,549,551,618,623,797]),
      it('충수 점액성 병변','Mucocele은 점액으로 늘어난 모양을 뜻하며 그 자체가 하나의 조직학적 진단은 아니다. 원인 병변과 침윤 양상을 따로 본다.',[ip('Mucocele과 충수 점액성 종양')],[],[
        it('Mucocele','내강에 점액이 차서 충수가 낭성으로 늘어난 상태다. 폐쇄성 원인인지 점액성 종양인지 확인한다.',[ip('Mucocele과 충수 점액성 종양')]),
        it('LAMN / HAMN','저등급·고등급 이형성을 구별하되 파괴적 침윤이 있는 점액성 선암과 나눈다. 파열 시 복막 파종의 문제를 생각한다.',[ip('Mucocele과 충수 점액성 종양')]),
        it('충수 Mucinous adenocarcinoma','Desmoplastic stroma를 동반하는 파괴적 침윤을 보이는 점액성 선암이다.',[ip('Mucocele과 충수 점액성 종양')]),
        it('Pseudomyxoma peritonei','복막에 점액이 파종되는 상태로 충수 점액성 종양을 먼저 연결한다. 점액의 존재와 종양세포의 등급을 따로 평가한다.',[ip('Pseudomyxoma peritonei')])
      ]),
      it('Appendiceal NET','충수 끝에서 우연히 발견되는 작은 NET가 전형적이다. 크기·등급·침윤과 절제연이 위험 평가에 중요하다.',[ip('충수 신경내분비종양 · Appendiceal neuroendocrine tumor'),ic(14,'충수 NET와 Acute appendicitis'),ic(14,'Nesting과 Salt-and-pepper chromatin')]),
      it('Peritonitis','장기 천공과 자극물질·감염이 복막에 염증을 만든다. 복강 안의 염증을 국소화하는 반응과 전신 악화를 함께 본다.',[ip('복막염 · Peritonitis')],[621,676])
    ])
  ]);
  const ib=label=>intestineTree.children.find(node=>node.label===label);
  ib('감염성 장질환').children=[
    it('독소형 식중독','음식 속에 미리 만들어진 독소와 섭취 후 장에서 생성되는 독소를 구분한다. 잠복기와 구토·설사 중 중심 증상이 달라진다.',toxinRefs,[184],[
      it('S. aureus 식중독','미리 만들어진 내열성 독소를 먹어 짧은 잠복기 뒤 구토가 두드러진다.',toxinRefs,[184]),
      it('B. cereus 식중독','빠른 구토형과 좀 더 늦은 설사형을 나눈다. 같은 균 이름이라도 독소와 생성 위치가 다르다.',toxinRefs,[184]),
      it('C. perfringens 식중독','장관에서 enterotoxin이 생성되는 설사형 식중독이다. 음식에 이미 존재하는 구토 독소와 대비한다.',toxinRefs)
    ]),
    it('비침습성·수양성 장염','점막 침습 없이 분비·흡수 이상이 중심인 대표 양상이다. 바이러스·세균·기생충 모두 가능하다.',wateryRefs,[732],[
      it('바이러스성 장염','구토·수양성 설사와 집단 발생, 소아의 탈수라는 맥락을 본다.',[ic(28,'바이러스성 위장관염')],[],[
        it('Norovirus','사람 간 전파와 집단 발생의 구토·수양성 설사를 연결한다.',[ic(28,'바이러스성 위장관염'),ic(28,'구토·수양성 설사와 집단 발생')],[804]),
        it('Rotavirus','영유아 설사와 탈수가 중요하다. NSP4·분비 변화·구토 신호를 연결해 이해한다.',[ic(28,'바이러스성 위장관염'),ic(28,'Rotavirus의 NSP4와 구토·설사')])
      ]),
      it('ETEC','LT·ST enterotoxin과 여행자설사를 연결한다. EIEC의 침습, STEC의 세포독소와 구별한다.',[ic(28,'E. coli와 콜레라·기생충'),ic(28,'여행자설사')],[54,58]),
      it('EPEC / EAEC','강의에서 비염증성 설사의 원인으로 묶는 대장균군이다. 대장균 전체를 EHEC의 기전으로 설명하지 않는다.',wateryRefs,[54,58]),
      it('Cholera','유행지역 노출 뒤 대량 수양성 설사를 일으키는 V. cholerae를 생각한다.',wateryRefs),
      it('지속성 기생충 설사','2주 이상 지속되는 설사·체중감소·재발과 관해에서 Giardia·Cryptosporidium·Cyclospora 등을 고려한다.',wateryRefs,[],[
        it('Giardiasis','만성 수양성 설사와 흡수장애의 감별에 들어간다. Tropical sprue의 유일한 확정 원인으로 바꾸어 외우지 않는다.',[...wateryRefs,ic(40,'Tropical sprue')]),
        it('Cryptosporidium / Cyclospora','지속성·재발성 설사에서 노출력과 숙주 상태를 함께 살피는 기생충군이다.',wateryRefs)
      ])
    ]),
    it('침습·세포독소성 장염','점막을 직접 침습하는 균과 독소로 손상시키는 균을 구별한다. 혈변이 있다고 항상 같은 항생제 전략을 쓰지는 않는다.',[ic(28,'염증성 설사와 주요 병원체'),ip('원인체 특이 병리소견')],[],[
      it('Shigellosis','적은 균량으로도 전파되며 발열·혈성 이질·후중감이 나타난다. 직장·S상결장 염증은 UC와 닮을 수 있다.',[ic(28,'Shigella'),ic(29,'감염·허혈을 배제하는 이유')]),
      it('EIEC 장염','상피 침습으로 Shigella와 비슷한 이질을 일으킨다.',[ic(28,'EIEC'),ic(28,'세균성 설사의 네 가지 기전')]),
      it('STEC / EHEC 장염','Shiga toxin에 의한 손상이다. 심한 복통·혈성 설사와 이후 HUS를 연결하며 침습성 대장균과 구분한다.',[ic(28,'STEC'),ic(28,'HUS')],[54,58,185,595],[
        it('설사 후 HUS','장염 뒤 생기는 전신 합병증이다. 용혈성 빈혈·혈소판감소·급성 신손상을 한 묶음으로 본다.',[ic(28,'HUS')],[185,595])
      ]),
      it('Campylobacter 장염','발열·복통·설사와 반응성 관절염·Guillain–Barré syndrome의 연관을 본다. 치료 필요성은 중증도와 함께 판단한다.',[ic(28,'침습성 세균 비교'),ic(28,'Campylobacter jejuni의 치료 선택'),ic(28,'Campylobacter 양성 환자의 치료')],[806]),
      it('Nontyphoidal Salmonella','급성 장염을 일으키는 비장티푸스성 Salmonella다. 전신 증상이 중심인 enteric fever와 구분한다.',invasiveRefs,[11,143,289,468]),
      it('Yersinia 장염','말단회장·회맹부 염증으로 가성충수염이나 CD와 닮을 수 있다.',[...invasiveRefs,ic(29,'감염·허혈을 배제하는 이유')]),
      it('아메바성 이질','장궤양과 함께 적혈구를 섭취한 trophozoite가 중요한 단서다.',[ic(28,'아메바성 이질과 성접촉 관련 직장염'),ic(29,'감염·허혈을 배제하는 이유')]),
      it('V. parahaemolyticus 장염','어패류 노출 뒤 수양성 또는 혈성 설사가 나타날 수 있다. V. cholerae의 대량 수양성 설사와 구분한다.',[ic(28,'침습성 세균 비교')]),
      it('Clostridioides difficile 감염','항생제 사용 등으로 장내 균형이 깨진 뒤 독소성 대장염이 생긴다. 증상과 대변검사를 함께 보며 위막은 없을 수도 있다.',[ic(28,'항생제·장내미생물·독소의 연결'),ic(28,'GDH·toxin·NAAT 알고리듬'),ic(28,'국내 치료표의 초회·악화·재발 치료')],[53,256,594,731,805],[
        it('Pseudomembranous colitis','괴사조직·fibrin·염증세포 등이 손상된 crypt에서 volcano처럼 솟는 위막성 대장염이다.',[ip('거짓막대장염 · Pseudomembranous colitis'),ic(28,'위막성 대장염'),ic(28,'CDI의 중증도')],[256,805])
      ]),
      it('CMV colitis','면역억제 중 악화되거나 치료에 반응하지 않는 장염에서 생각한다. Punched-out ulcer만으로 확진하지 않고 조직 검사를 연결한다.',[ic(29,'감염·허혈을 배제하는 이유'),ip('원인체 특이 병리소견')])
    ]),
    it('장티푸스 · Enteric fever','원위 소장의 침입 뒤 전신으로 확산하는 감염이다. 장염의 설사만 보는 대신 전신 발열과 Peyer patch 병변을 연결한다.',[ic(28,'Enteric fever'),ic(28,'장티푸스의 침입과 전신 확산'),ic(14,'Ileum의 Typhoid fever'),ip('원인체 특이 병리소견')],[311]),
    it('장결핵','회맹부의 횡행·환상 궤양, 열린 회맹판과 건락성 육아종을 연결한다. CD의 종주성 궤양·비건락성 육아종과 대비한다.',[ip('장결핵 · Tuberculous enterocolitis'),ic(28,'위장관 결핵'),ic(29,'장결핵과의 감별'),...ileocecalRefs],[31,261,301,489,725])
  ];
  ib('소화·흡수장애').children=[
    it('점막 손상','융모와 상피가 손상되어 흡수면적·기능이 떨어지는 범주다. 생검과 D-xylose를 소화효소 부족의 검사와 구별한다.',[ic(40,'대변 지방과 D-xylose'),ic(40,'영상·소장 생검')],[],[
      it('Celiac disease','Gluten 관련 면역반응에 의한 villous atrophy·crypt hyperplasia·상피 내 lymphocyte 증가를 연결한다.',[ip('Celiac disease'),ic(40,'Celiac disease'),ic(20,'Celiac disease와 IgA 검사의 함정')],[13,470,677]),
      it('Tropical sprue','열대지역과 관련된 흡수장애로, celiac과 달리 gluten-free diet 반응으로 설명하지 않는다.',[ic(40,'Tropical sprue')]),
      it('Whipple disease','T. whipplei의 다기관 감염이다. 설사·체중감소·관절통과 PAS-positive macrophage를 연결한다.',[ip('Whipple disease'),ic(40,'Whipple disease')])
    ]),
    it('흡수면적·장내 환경','점막이 손상되지 않아도 절제·정체·세균 과증식 때문에 흡수가 달라질 수 있다.',[ic(40,'주요 원인질환')],[],[
      it('Short bowel syndrome','광범위 소장 절제 뒤 흡수면적이 감소한다. 남은 길이뿐 아니라 회장·회맹판·대장의 보존 여부가 중요하다.',[ic(40,'Short bowel syndrome'),ic(40,'위·췌장·회장의 역할')],[147,470]),
      it('SIBO','해부학적 또는 기능적 정체로 소장 세균이 과증식한다. B12 감소·folate 증가와 담즙산 탈결합에 따른 지방변을 연결한다.',[ic(40,'Small intestinal bacterial overgrowth'),ic(40,'Schilling test')],[147]),
      it('Lactase deficiency','Lactose 분해 실패가 발효·가스와 삼투성 설사로 이어진다. 원발성 결핍과 점막 손상 뒤 이차성 결핍을 구별한다.',[ic(40,'Lactase deficiency'),ic(39,'삼투성 설사와 분비성 설사')],[470])
    ]),
    it('담즙산 관련 설사','회장 흡수 저하가 있어도 간이 소실량을 보충하는지에 따라 기전이 달라진다.',[ic(40,'담즙산 설사와 지방산 설사')],[291,767],[
      it('Bile acid diarrhea','회장에서 흡수되지 않은 담즙산이 대장으로 넘어가 분비를 자극한다. 제한된 회장 병변에서 pool은 유지될 수 있다.',[ic(40,'담즙산 설사와 지방산 설사'),ic(42,'Bismuth와 담즙산 결합 수지')],[291,767]),
      it('담즙산 고갈·지방성 설사','광범위 회장 병변에서는 pool 고갈로 지방 흡수가 떨어진다. 앞의 담즙산 분비성 설사와 같은 상황이 아니다.',[ic(40,'담즙산 설사와 지방산 설사')],[291,767])
    ]),
    it('Protein-losing enteropathy','특정 단일 병명이 아니라 장관 단백 소실로 저단백혈증·부종이 생기는 상태다. 점막 손상과 림프 경로를 나누어 본다.',[ic(40,'Protein-losing enteropathy')],[470],[
      it('Intestinal lymphangiectasia','장 림프관 확장과 림프를 통한 단백 소실을 연결한다. 생검의 확장된 림프관을 확인한다.',[ic(40,'Protein-losing enteropathy'),ic(40,'영상·소장 생검')])
    ]),
    it('설사 기전 · 별도의 축','삼투성·분비성·염증성·지방성이라는 기전은 질환명과 별개다. 한 질환에서 여러 기전이 겹칠 수 있다.',[ic(39,'만성 설사의 분류'),ic(39,'삼투성 설사와 분비성 설사'),ic(39,'지방성 설사')])
  ];
  ib('기능·운동 질환').children[0].children=[
    it('IBS-C','단단한 변이 우세한 변비형이다. 반복 복통이라는 IBS의 공통 조건을 먼저 만족해야 한다.',[ic(38,'대변 형태에 따른 아형'),ic(42,'IBS 치료제: 설사형과 변비형을 반대로 외우지 않기')]),
    it('IBS-D','묽은 변이 우세한 설사형이다. 감염·염증성 설사와 구별하고 증상 조절 약물을 연결한다.',[ic(38,'대변 형태에 따른 아형'),ic(42,'IBS 치료제: 설사형과 변비형을 반대로 외우지 않기')],[486]),
    it('IBS-M','단단한 변과 묽은 변이 함께 기준 이상 나타나는 혼합형이다.',[ic(38,'대변 형태에 따른 아형')]),
    it('IBS-U','IBS의 조건은 만족하지만 C·D·M의 대변형 기준에 들지 않는 아형이다.',[ic(38,'대변 형태에 따른 아형')])
  ];
  ib('용종·종양').children=[
    it('대장 용종 · 조직형','Hyperplastic·염증성·hamartomatous 병변과 dysplasia를 가진 선종, serrated 전구병변을 구분한다.',[ip('대장 폴립'),ic(30,'용종의 조직형과 암 위험도')],[],[
      it('Hyperplastic polyp','주로 crypt 상부의 serration을 보인다. Crypt base의 구조 이상이 특징인 SSL과 구분한다.',[ip('Hyperplastic polyp'),ic(14,'Hyperplastic polyp과 Sessile serrated lesion 감별'),ic(30,'Hyperplastic polyp와 Inflammatory polyp')],[273]),
      it('Inflammatory pseudopolyp','손상과 재생 뒤 남은 점막이 돌출한 병변이다. 용종 자체의 성격과 오래된 IBD의 대장암 위험을 구분한다.',[ic(30,'Hyperplastic polyp와 Inflammatory polyp'),ip('궤양성대장염 · Ulcerative colitis')]),
      it('Hamartomatous polyp','원래 있던 조직 성분이 비정상적인 배열로 자란다. 단일 용종의 조직형과 polyposis 증후군의 암 위험은 별개다.',[ip('Hamartomatous polyp'),ic(30,'Hamartomatous polyp와 Juvenile polyposis')],[],[
        it('Juvenile polyp','낭성으로 늘어난 샘과 염증이 풍부한 고유판이 특징이다. 소아의 소량 무통성 혈변에서 생각한다.',[ip('Hamartomatous polyp'),ic(20,'혈변의 양상으로 좁히기')],[646,782]),
        it('Peutz–Jeghers polyp','나뭇가지처럼 분지하는 평활근이 핵심이다. 입술·구강 색소침착 및 증후군의 암 위험과 연결한다.',[ip('Hamartomatous polyp'),ic(14,'Peutz-Jeghers polyp'),ic(30,'Peutz–Jeghers와 Cronkhite–Canada')],[597])
      ]),
      it('Conventional adenoma','Dysplasia가 있는 전암성 병변이다. 크기·villous component·이형성 정도로 위험을 평가한다.',adenomaRefs,[262],[],),
      it('Serrated 전구병변','거치상 모양이라도 SSL·TSA는 전암성 병변이다. 단순 hyperplastic polyp와 암 위험을 같게 보지 않는다.',serratedRefs,[32,273],[
        it('Sessile serrated lesion','Crypt base의 확장·분지·수평 L/T형 구조와 바닥까지 이어지는 serration을 본다. 초기에는 세포 이형성이 뚜렷하지 않을 수 있다.',serratedRefs,[32,273]),
        it('Traditional serrated adenoma','Slit-like serration, 호산성 세포질, ectopic crypt formation과 dysplasia를 연결한다.',[ip('Serrated lesion의 유형과 형태'),ic(30,'대장암으로 가는 두 경로')],[273])
      ])
    ]),
    it('용종의 육안 모양','유경·무경·옆으로 퍼지는 형태는 조직형과 다른 축이다. Sessile이라는 말만으로 villous 또는 SSL이라고 진단하지 않는다.',[ic(30,'Pedunculated, Sessile, LST'),ic(30,'크기와 침윤 소견에 맞는 절제')],[59],[
      it('Pedunculated','머리와 줄기가 있는 유경성 병변이다. 줄기의 혈관과 절제 시 출혈 위험을 연결한다.',[ic(30,'Pedunculated, Sessile, LST'),ic(30,'크기와 침윤 소견에 맞는 절제')]),
      it('Sessile','뚜렷한 줄기 없이 바닥이 넓게 붙어 있는 모양이다. 조직학적 진단을 뜻하지 않는다.',[ic(30,'Pedunculated, Sessile, LST')]),
      it('LST','높이 솟기보다 점막을 따라 옆으로 퍼지는 형태다. 함몰·큰 결절·불규칙한 표면은 침윤 평가로 연결한다.',[ic(30,'Pedunculated, Sessile, LST'),ic(30,'크기와 침윤 소견에 맞는 절제')])
    ]),
    it('Polyposis·유전성 암','용종 개수만 보지 말고 조직형, 유전방식, 대장 밖 소견을 함께 비교한다. Lynch는 수많은 용종이 없어도 고위험이다.',[ip('유전성 대장암 증후군'),ic(30,'유전성 대장암과 Polyposis의 감별')],[304,493,727],[],),
    it('대장직장암','주로 adenocarcinoma를 중심으로 위치별 증상·침윤 깊이·전이 경로를 연결한다. 전이 유무와 절제 가능성은 같은 질문이 아니다.',[ip('대장직장암 · Colorectal carcinoma'),ic(14,'직장 Adenocarcinoma'),ic(30,'대장암의 병기·전이·치료')],[],[
      it('위치에 따른 임상상','위치는 별개의 조직형이 아니라 증상과 수술·전이 경로를 설명하는 축이다.',[ip('육안·현미경 형태'),ic(30,'위치에 따라 달라지는 증상')],[],[
        it('우측 결장암','큰 돌출성 종괴가 생겨도 폐색이 늦을 수 있다. 만성 잠혈 출혈·철결핍빈혈과 연결한다.',[ip('육안·현미경 형태'),ic(30,'위치에 따라 달라지는 증상'),ic(43,'위치에 따른 절제와 국소절제의 조건')],[229]),
        it('좌측 결장암','둘레를 조이는 annular·napkin-ring 형태가 통과 장애와 조기 폐색을 설명한다.',[ip('육안·현미경 형태'),ic(30,'위치에 따라 달라지는 증상'),ic(43,'폐색과 천공 — Diverting colostomy와 Hartmann')],[230,553,628]),
        it('직장암','혈변·뒤무직·변 굵기 변화를 연결한다. 국소절제 조건, 수술 전 치료와 골반 신경 합병증을 함께 살핀다.',[ic(14,'직장 Adenocarcinoma'),ic(30,'간 전이가 흔한 이유와 하부 직장암의 예외'),ic(43,'위치에 따른 절제와 국소절제의 조건'),ic(43,'직장 수술 후 성기능과 배뇨장애')],[358,359,554,556,601,631,808])
      ]),
      it('발암 경로','CIN·MMR/MSI·CIMP는 분자 변화의 축이다. Serrated pathway와 MSI는 서로 완전히 배타적인 경로가 아니다.',[ip('세 가지 주요 경로'),ic(30,'대장암으로 가는 두 경로')],[421],[
        it('CIN · 선종–암 연속','APC에서 시작해 KRAS와 후기 TP53 변화 등을 연결하는 대표적인 conventional 경로다.',[ip('Adenoma–carcinoma sequence'),ic(30,'대장암으로 가는 두 경로')],[60,421]),
        it('dMMR / MSI','Mismatch repair 기능 소실로 반복서열 오류가 축적된다. Lynch의 germline 이상과 산발성 MLH1 methylation을 구분한다.',[ip('Microsatellite instability · MSI')],[421,742]),
        it('CIMP · Serrated 경로','Promoter methylation과 유전자 발현 억제를 연결한다. BRAF·serrated 병변, MLH1 silencing이 더해진 MSI를 함께 이해한다.',[ip('CpG island methylator phenotype · CIMP'),ip('Serrated pathway')],[273,421])
      ]),
      it('병기 · TNM','T는 벽 침윤 깊이, N은 구역 림프절, M은 원격 전이다. 위의 T분류와 경계가 같다고 외우지 않는다.',bowelStageRefs,[],[
        it('Tis / T1','대장의 점막 내 병변은 Tis, 점막밑층 침윤은 T1이다. 크기가 아니라 침윤 층을 본다.',[...bowelStageRefs,ic(14,'장벽 구조와 침윤 깊이')],[601]),
        it('T2 / T3 / T4','고유근층 침윤, 고유근층을 넘어 주위 조직 침윤, 장막 표면 또는 인접 장기 침범을 차례로 구별한다.',bowelStageRefs),
        it('N · M과 전이성 질환','구역 림프절과 원격전이를 구분한다. 간전이가 있어도 원발암과 함께 완전 절제할 수 있는지 별도로 판단한다.',[...bowelStageRefs,ic(30,'전이가 있어도 완전 절제가 가능하다면'),ic(43,'간전이 — 개수보다 완전 절제와 남길 간')],[307,358,496,555,613,629,730])
      ])
    ]),
    it('소장 종양','소장 종양은 드물지만 빈혈·출혈·반복 폐색·성인 장중첩에서 찾는다. 같은 악성종양이라도 조직형에 따라 절제 범위가 다르다.',[ip('소장종양'),ic(30,'소장 종양을 의심해야 할 때'),ic(43,'소장 종양은 수술 기준과 절제 범위를 비교한다')],[],[
      it('소장 Adenoma','십이지장·팽대부 주변 선종과 FAP의 연관을 본다. 대장 감시만으로 FAP 관리가 끝나는 것은 아니다.',[ip('소장종양'),ic(30,'FAP에서 대장과 상부위장관을 함께 감시하는 이유')],[305,494,728]),
      it('소장 Adenocarcinoma','발생 위치에 맞춰 절제 범위를 정한다. 팽대부 주변 십이지장과 공장·회장을 같은 수술로 취급하지 않는다.',[ip('소장종양'),ic(43,'Adenocarcinoma — 발생 위치에 맞는 절제')],[624]),
      it('소장 NET','회장 병변과 carcinoid syndrome을 연결한다. 위치·다발성·림프절 및 장간막 침범이 치료 판단에 중요하다.',[ip('소장종양'),ic(43,'NET — 림프절과 장간막을 함께 생각')],[627]),
      it('소장 Lymphoma','회장에 흔하며 무증상 우연 발견과 폐색을 동반한 경우의 치료 선택을 구별한다.',[ic(43,'Lymphoma — 무증상과 장폐색을 먼저 구분')],[85,807,809]),
      it('소장 GIST','음성 절제연을 확보한 분절절제를 다른 장암의 림프절·장간막 절제와 대비한다.',[ic(43,'GIST — 악성이라도 분절절제가 기본')],[606,810])
    ])
  ];
  const tumor=ib('용종·종양').children;
  tumor[0].children.find(node=>node.label==='Conventional adenoma').children=[
    it('Tubular adenoma','관 모양 샘이 우세한 선종이다. Tubular라도 크거나 HGD가 있으면 저위험이라고 단정하지 않는다.',adenomaRefs),
    it('Tubulovillous adenoma','관상과 융모상 구조가 섞인다. 조직 구성 비율로 구분한다.',adenomaRefs),
    it('Villous adenoma','융모상 구조가 우세하며 크고 sessile인 경우가 많다. 점액 배출과 상대적으로 높은 암 위험을 연결한다.',adenomaRefs,[262])
  ];
  tumor.find(node=>node.label==='Polyposis·유전성 암').children=[
    it('선종성 Polyposis','많은 선종을 만드는 증후군이다. APC와 MUTYH의 유전자·유전방식 차이를 구분한다.',[ip('유전성 대장암 증후군'),ic(30,'FAP와 AFAP')],[],[
      it('FAP','APC 관련 상염색체 우성 질환으로 수백–수천 개 선종이 전형적이다. 예방적 수술과 상부위장관 감시를 연결한다.',[ip('Familial adenomatous polyposis · FAP'),ic(14,'Familial polyposis와 Adenoma'),ic(30,'FAP와 AFAP'),ic(30,'FAP에서 대장과 상부위장관을 함께 감시하는 이유')],[305,494,728]),
      it('AFAP','전형적 FAP보다 용종이 적고 발병이 늦다. 용종 수가 적다는 이유로 암 감시와 수술 고려가 불필요해지는 것은 아니다.',[ic(30,'FAP와 AFAP'),ic(30,'FAP에서 대장과 상부위장관을 함께 감시하는 이유')],[305,494,728]),
      it('MUTYH-associated polyposis','Base-excision repair의 MUTYH 양대립유전자 이상과 상염색체 열성 유전을 연결한다.',[ip('MUTYH-associated polyposis')]),
      it('Gardner phenotype','선종성 용종증에 osteoma·연부조직 종양이 동반되는 조합이다.',[ic(30,'그 밖의 증후군')])
    ]),
    it('Lynch syndrome','수많은 용종 없이도 젊은 나이의 우측 대장암·다발암·장외암 위험이 높다. MMR 관련 유전성 이상을 연결한다.',[ip('Lynch syndrome · HNPCC'),ip('Microsatellite instability · MSI'),ic(30,'Lynch syndrome: 용종의 수보다 빠른 암 진행')],[304,493,727,742]),
    it('Hamartomatous polyposis','Hamartoma라는 조직형과 환자 전체의 암 위험을 구별한다.',[ip('Hamartomatous polyp'),ic(30,'Hamartomatous polyp와 Juvenile polyposis')],[],[
      it('Juvenile polyposis','다발성 juvenile polyp의 증후군이다. 단발성 소아 용종과 암 위험을 같게 보지 않는다.',[ic(30,'Hamartomatous polyp와 Juvenile polyposis')]),
      it('Peutz–Jeghers syndrome','Hamartomatous polyposis와 입술·구강의 색소침착을 연결한다. 여러 장기의 종양 위험을 함께 생각한다.',[ip('Hamartomatous polyp'),ic(14,'Peutz-Jeghers polyp'),ic(30,'Peutz–Jeghers와 Cronkhite–Canada')],[304,493,597,727])
    ]),
    it('Cronkhite–Canada syndrome','비유전성 polyposis에 탈모·손발톱 변화·색소침착, 설사·영양 저하가 동반된다. PJS와 대비한다.',[ic(30,'Peutz–Jeghers와 Cronkhite–Canada')]),
    it('Turcot phenotype','대장 종양성 병변과 뇌종양이 연결되는 표현이다. 단일 유전자 질환으로 단정하기보다 강의의 대표 조합으로 기억한다.',[ic(30,'그 밖의 증후군')])
  ];

  // One disease location, with pathology, clinical and treatment references together.
  const liverWikiReferences={},liverStudyNotes={};
  const lr=(courseId,heading)=>({courseId,heading});
  const lt=(label,clue,refs,questions=[],children=[])=>{
    liverWikiReferences[label]=refs;
    liverStudyNotes[label]={clue,questions};
    return children.length?{label,children}:{label};
  };
  const liverTree=lt('간','먼저 손상의 원인을 나누고, 여러 원인이 공통으로 만드는 간경변·간부전과 종양을 이어 본다. 질환명과 조직 소견, 진행 단계는 서로 다른 분류축이다.',[
    lr(16,'간손상의 기본 구조와 평가'),lr(44,'간검사를 읽는 세 축'),lr(53,'간경변을 이해하는 두 개의 축')
  ],[],[
    lt('감염성 질환','바이러스간염은 전파·만성화·혈청표지자로, 간농양은 원인균과 배액의 필요성으로 나눈다.',[
      lr(16,'간염바이러스 비교'),lr(45,'간 안의 고름집을 어떻게 읽을까')
    ],[],[
      lt('바이러스간염','HAV·HEV는 주로 fecal–oral, HBV·HCV·HDV는 혈액 노출과 연결한다. 급성·만성은 바이러스 종류와 별도로 판단한다.',[
        lr(49,'전파 경로와 만성화'),lr(16,'급성바이러스간염'),lr(16,'만성간염')
      ],[],[
        lt('A형 간염 · HAV','IgM anti-HAV가 급성감염의 단서다. 만성화하지 않으며 IgG 양성만으로 현재 간염을 진단하지 않는다.',[
          lr(49,'IgM anti-HAV와 IgG anti-HAV'),lr(16,'혈청학과 감염력 도식')
        ],[93,651,794,950]),
        lt('B형 간염 · HBV','HBsAg·anti-HBc·anti-HBs와 HBV DNA를 함께 읽는다. 만성감염은 비활동성 상태와 활동성 간염을 구별해야 한다.',[
          lr(16,'HBV 혈청학'),lr(49,'항원과 항체의 역할'),lr(51,'만성간염의 출발점 — 원인, 활동도, 섬유화')
        ],[],[
          lt('급성 B형 간염','HBsAg와 IgM anti-HBc가 전형적인 조합이다. Window period에는 HBsAg가 사라지고 anti-HBs가 아직 검출되지 않을 수 있다.',[
            lr(49,'회복하는 급성간염과 만성 감염'),lr(16,'Window period와 조합 판독')
          ],[650,949]),
          lt('만성 B형 간염','자연경과의 단계와 치료 기준을 구분한다. HBeAg 음성이라도 DNA·ALT가 상승하면 활동성 간염일 수 있다.',[
            lr(51,'과거 기출을 읽는 자연경과 분류'),lr(51,'2026년에는 바이러스혈증을 중심으로 다시 나눈다'),lr(51,'올해의 핵심 치료 시작 표'),lr(51,'일차 경구약과 환자 조건별 선택'),lr(26,'Chronic hepatitis B · Ground-glass hepatocyte')
          ],[111,416,481,534,750]),
          lt('HBV 재활성화','면역억제 전 현재 감염과 과거 감염을 확인한다. 급성 B형간염과 만성감염의 flare는 병력·검사 경과까지 보아야 구분된다.',[
            lr(51,'면역억제 치료 전 재활성화 예방'),lr(49,'임상 경과와 chronic flare 감별')
          ],[])
        ]),
        lt('C형 간염 · HCV','Anti-HCV는 노출의 흔적, HCV RNA는 현재 감염의 단서다. 항체 양성이 예방 면역을 의미하지 않으며 급성·만성 모두 치료를 검토한다.',[
          lr(49,'Anti-HCV와 HCV RNA'),lr(51,'Anti-HCV와 HCV RNA — 전체 판독 표'),lr(51,'치료 대상과 두 가지 중심 요법'),lr(16,'경과와 조직 단서'),lr(58,'HCV DAA — 자르기, 복제·조립, RNA 합성의 세 표적')
        ],[163,396,414,480,531,535,678,751]),
        lt('D형 간염 · HDV','HBV의 HBsAg를 필요로 한다. HBV와 동시에 감염되는 coinfection과 기존 HBV 감염에 더해지는 superinfection을 구별한다.',[
          lr(49,'HDV — 동시감염과 중복감염'),lr(16,'Coinfection과 superinfection')
        ],[]),
        lt('E형 간염 · HEV','오염된 물뿐 아니라 일부 유전자형의 동물·육류 노출도 단서다. 임신 중 중증화와 면역억제 환자의 만성화 예외를 기억한다.',[
          lr(49,'오염된 물, 임신, 만성화의 예외'),lr(49,'HEV 1·2형과 3·4형 비교'),lr(16,'E형 간염바이러스')
        ],[207,942]),
        lt('CMV 간염','간염바이러스 A–E만 간염을 일으키는 것은 아니다. CMV는 조직에서 커진 세포와 특징적인 봉입체를 확인하는 감별이다.',[
          lr(16,'Glycogen과 viral inclusion'),lr(16,'감염성 원인과 neonatal hepatitis')
        ],[945])
      ]),
      lt('간농양','발열·우상복부 통증과 간내 감염성 병변이 공통이다. 세균성인지 아메바성인지에 따라 배양·혈청검사와 치료 방향이 달라진다.',[
        lr(45,'간 안의 고름집을 어떻게 읽을까')
      ],[],[
        lt('Pyogenic liver abscess','항생제와 PCD를 함께 연결한다. K. pneumoniae 간농양에서는 안구·중추신경계 등 원격 감염도 중요하다.',[
          lr(45,'감염 경로와 원인균을 구분하기'),lr(45,'K. pneumoniae와 전이성 감염'),lr(45,'치료는 PCD와 항생제를 함께'),lr(45,'PCD 영상과 수술로 전환하는 조건')
        ],[116,217,267,434,548,612,733]),
        lt('Amebic liver abscess','E. histolytica가 장에서 문맥을 거쳐 간에 도달한다. Metronidazole 뒤 장내 원충 제거가 필요하며, 모든 환자가 배액 대상인 것은 아니다.',[
          lr(45,'장에서 간으로 오는 E. histolytica'),lr(45,'Metronidazole 뒤에는 장내 원충 제거'),lr(45,'배액이 필요한 예외와 파열 위험')
        ],[])
      ])
    ]),
    lt('지방간·독성 손상','지방이 있다는 조직 소견과 그 원인을 구별한다. 알코올·대사성 손상은 겹칠 수 있고 약물은 여러 형태의 간손상을 만들 수 있다.',[
      lr(16,'Steatosis'),lr(47,'지방간·간염·간경변은 같은 말이 아니다'),lr(49,'Intrinsic·idiosyncratic·indirect injury')
    ],[],[
      lt('알코올성 간질환','지방축적, 활동성 간염, 섬유화·간경변을 나누어 읽는다. 알코올성간염은 반드시 간경변이 있어야 생기는 질환이 아니다.',[
        lr(16,'알코올 간질환의 발병기전'),lr(47,'지방간·간염·간경변은 같은 말이 아니다')
      ],[165,276],[
        lt('Alcoholic fatty liver','알코올 손상에서 먼저 나타나는 변화는 간세포 내 지방축적이다. 간염의 ballooning·염증 소견과는 구별한다.',[
          lr(16,'Alcoholic fatty liver'),lr(16,'지방축적과 간세포 손상')
        ],[38,165]),
        lt('Alcoholic hepatitis','Ballooning·Mallory-Denk body·neutrophil을 묶어 읽는다. 임상에서는 최근 황달, 중증도, steroid 반응을 순서대로 평가한다.',[
          lr(16,'Alcoholic hepatitis'),lr(47,'최근 황달과 AST 우세의 간손상'),lr(47,'mDF·MELD·Lille의 역할 구분'),lr(47,'Prednisolone과 Lille 반응 평가')
        ],[68,191,316,405,478,508,768,792,822]),
        lt('Alcoholic fibrosis·cirrhosis','Pericellular·perivenular fibrosis가 누적되어 재생결절과 구조 왜곡으로 이어진다. 이후 합병증은 원인과 별개로 간경변 가지에서 함께 본다.',[
          lr(16,'Alcoholic fibrosis'),lr(16,'Alcoholic cirrhosis'),lr(53,'Compensated와 decompensated cirrhosis')
        ],[165,276])
      ]),
      lt('대사성 지방간','MASLD는 대사 위험인자와 연결한 질환 범주이고, MASH는 그 안에서 염증·간세포 손상을 동반한 형태다. 예전 NAFLD·NASH 명칭도 함께 읽는다.',[
        lr(48,'NAFLD·MAFLD·MASLD를 시대에 맞게 읽기'),lr(16,'MASLD와 MASH')
      ],[],[
        lt('MASLD','간의 지방축적에 심대사 위험인자를 연결한다. 진단 후에는 지방의 양만이 아니라 섬유화 위험을 평가한다.',[
          lr(48,'NAFLD·MAFLD·MASLD를 시대에 맞게 읽기'),lr(48,'첫 단계는 병력과 FIB-4'),lr(48,'TE·SWE·MRE·생검의 자리를 구분')
        ],[69,70,192,193,509]),
        lt('MASH · 이전 NASH','Steatosis에 ballooning·염증이 더해진다. 알코올성 손상과 조직이 닮았으므로 병력·대사 위험인자로 원인을 구분하며, 섬유화와 HCC로 진행할 수 있다.',[
          lr(16,'병리 소견과 알코올성 간질환의 비교'),lr(26,'NASH · Steatosis와 Ballooning'),lr(48,'Steatosis에서 MASH·섬유화로'),lr(48,'올해는 승인 약제가 있다는 점이 바뀌었다')
        ],[428,743,824]),
        lt('MetALD','대사 위험인자와 일정 범위의 음주가 겹친 지방간 범주다. 알코올성과 대사성을 언제나 완전히 배타적인 원인으로 나누지는 않는다.',[
          lr(48,'NAFLD·MAFLD·MASLD를 시대에 맞게 읽기')
        ],[])
      ]),
      lt('약인성 간손상 · DILI','노출 약물과 시간 관계를 확인한다. R ratio는 손상 형태, RUCAM은 인과 가능성, Hy’s law는 중증 위험을 읽는 도구다.',[
        lr(49,'Intrinsic·idiosyncratic·indirect injury'),lr(49,'R ratio — 어떤 모양으로 손상되었는가'),lr(49,'RUCAM — 그 약이 원인일 가능성'),lr(49,'Hy’s law — signal과 case를 구별')
      ],[91,334,652,795,819],[
        lt('Intrinsic injury','용량과 관련된 예측 가능한 독성이다. 대표적인 acetaminophen에서는 NAPQI·glutathione과 N-acetylcysteine을 연결한다.',[
          lr(49,'Acetaminophen — NAPQI와 glutathione'),lr(49,'Acetaminophen 중독의 치료 흐름')
        ],[]),
        lt('Idiosyncratic injury','개인의 감수성과 관련되며 잠복기가 다양하다. Isoniazid와 amoxicillin/clavulanate 등은 약을 끊은 시점까지 포함해 병력을 읽는다.',[
          lr(49,'Intrinsic·idiosyncratic·indirect injury'),lr(49,'Isoniazid — 일시적 적응과 임상 간염을 구별'),lr(49,'Amoxicillin/clavulanate — 다 먹고 난 뒤에도 발생')
        ],[532,653]),
        lt('Indirect injury','직접적인 세포 독성보다 약물의 면역·생물학적 작용을 거쳐 손상이 발생하는 범주다. 용량 의존 독성과 같은 뜻이 아니다.',[
          lr(49,'Intrinsic·idiosyncratic·indirect injury')
        ],[])
      ])
    ]),
    lt('자가면역성 질환','AIH는 간세포·interface, PBC는 작은 간내 담관, PSC는 간내·간외 담관을 중심으로 본다. 항체 하나보다 손상 위치와 검사 양상을 먼저 연결한다.',[
      lr(52,'간세포가 손상되는가, 담관이 손상되는가'),lr(17,'PBC와 PSC 비교')
    ],[],[
      lt('Autoimmune hepatitis · AIH','Interface hepatitis·plasma cell·rosette와 IgG 상승을 묶는다. 활동성에 따라 면역억제치료를 결정하며 AZA의 관해 유도·유지 역할을 구별한다.',[
        lr(16,'자가면역간염'),lr(52,'조직에서 보는 interface hepatitis'),lr(52,'언제 적극적으로 치료하는가'),lr(52,'관해 유도와 유지치료'),lr(52,'관해와 중단 후 재발')
      ],[164,275,404,429,533,772],[
        lt('Type 1 AIH','ANA·SMA가 대표적인 항체다. 모든 연령에서 가능하며 성인 AIH에서 흔히 보는 유형이다.',[
          lr(52,'Type 1과 Type 2를 가르는 항체'),lr(52,'다른 원인을 배제하고 점수를 더한다')
        ],[847]),
        lt('Type 2 AIH','Anti-LKM1·anti-LC1을 연결한다. Type 1과 항체를 바꾸어 외우지 않는다.',[
          lr(52,'Type 1과 Type 2를 가르는 항체'),lr(16,'임상 특징과 감별')
        ],[])
      ]),
      lt('Primary biliary cholangitis · PBC','작은 간내 담관의 비화농성 파괴, AMA·IgM, ALP·GGT 상승이 한 묶음이다. UDCA의 질병 조절 효과와 소양증 치료는 분리한다.',[
        lr(17,'PBC의 조직학적 진행'),lr(26,'Primary biliary cholangitis · PBC'),lr(52,'AMA와 IgM이 가리키는 방향'),lr(52,'UDCA가 좋아지게 하는 것과 못 하는 것'),lr(52,'소양증과 진행성 질환의 별도 치료')
      ],[50,264,393,484,596,846,848]),
      lt('Primary sclerosing cholangitis · PSC','간내·간외 담관의 협착과 확장이 만드는 beading, onion-skin fibrosis, UC와의 연관을 묶는다. 담관암 위험도 함께 연결한다.',[
        lr(17,'Primary sclerosing cholangitis · PSC'),lr(17,'PSC의 병리'),lr(52,'담즙정체성 자가면역 질환의 위치')
      ],[479,744]),
      lt('Overlap syndrome','AIH 소견에 담관 손상이 겹치면 PBC·PSC를 함께 평가한다. 항체가 둘 나온다는 사실만으로 overlap을 확정하지 않는다.',[
        lr(52,'AIH와 PBC가 겹치면 경과를 다시 읽는다'),lr(52,'두 질환을 함께 확인하는 Paris 기준')
      ],[],[
        lt('AIH–PBC overlap','Interface hepatitis와 담관 손상, 두 질환의 검사·항체 기준을 함께 확인한다. Paris 기준은 AIH와 PBC 각 영역을 따로 충족하는 구조다.',[
          lr(52,'두 질환을 함께 확인하는 Paris 기준'),lr(52,'AIH와 PBC가 겹치면 경과를 다시 읽는다')
        ],[]),
        lt('AIH–PSC overlap','AIH에서 담즙정체 소견이 두드러지면 MRCP 등으로 PSC의 담관 병변을 확인한다.',[
          lr(52,'두 질환을 함께 확인하는 Paris 기준'),lr(17,'Primary sclerosing cholangitis · PSC')
        ],[])
      ])
    ]),
    lt('축적·유전성 황달','철·구리의 축적과 bilirubin 처리 이상을 분리한다. 황달에서는 비포합형인지 포합형인지가 첫 갈림길이다.',[
      lr(16,'철, 구리, lipofuscin과 담즙'),lr(44,'비포합형과 포합형')
    ],[],[
      lt('금속 축적','철은 hepcidin–ferroportin, 구리는 ATP7B·담즙 배설과 연결한다. 색소의 모양만으로 단정하지 않고 염색과 검사를 함께 본다.',[
        lr(16,'Hemochromatosis'),lr(16,'Wilson disease')
      ],[],[
        lt('Hemochromatosis','철과부하가 간·췌장·심장 등을 손상시킨다. HFE 관련 유전성 질환의 hepcidin 저하와 Prussian blue 양성 철침착을 연결한다.',[
          lr(16,'Hepcidin과 ferroportin의 정상 조절'),lr(16,'Hereditary hemochromatosis에서 달라지는 경로'),lr(26,'Hemochromatosis'),lr(19,'Hemochromatosis')
        ],[42,482,745]),
        lt('Wilson disease','ATP7B 이상으로 구리의 담즙 배설이 감소한다. 간·신경정신 증상과 Kayser–Fleischer ring, ceruloplasmin·소변 구리를 함께 읽는다.',[
          lr(16,'정상 구리의 흡수·운반·배설'),lr(16,'Rhodanine stain과 구리 정량'),lr(48,'Ceruloplasmin·소변 구리·임상 소견을 묶어 진단'),lr(48,'치료는 구리를 제거하는 방향')
        ],[318,422,510,823,937])
      ]),
      lt('비포합형 bilirubin 증가','포합 능력이 감소하는 질환들이다. Gilbert와 Crigler–Najjar를 중증도와 UGT1A1 기능으로 나눈다.',[
        lr(44,'비포합형과 포합형'),lr(44,'Crigler–Najjar syndrome')
      ],[],[
        lt('Gilbert syndrome','단식·스트레스 뒤 가벼운 비포합형 황달이 나타난다. 다른 간검사는 정상이고 소변 bilirubin은 음성인 전형적 조합을 기억한다.',[
          lr(44,'Gilbert syndrome'),lr(44,'Bilirubin만 높은가 먼저 묻기')
        ],[115,344,546,609,816]),
        lt('Crigler–Najjar type I','UGT1A1 기능이 거의 없어 심한 비포합형 고빌리루빈혈증과 kernicterus 위험이 생긴다. Phenobarbital 반응이 없는 쪽이다.',[
          lr(44,'Crigler–Najjar syndrome')
        ],[]),
        lt('Crigler–Najjar type II','일부 포합 기능이 남아 type I보다 경하며, phenobarbital 반응이 구별점이다.',[
          lr(44,'Crigler–Najjar syndrome')
        ],[])
      ]),
      lt('포합형 bilirubin 증가','포합 뒤 수송·배설의 이상을 본다. Dubin–Johnson과 Rotor는 담도 폐쇄에 의한 황달과도 구별한다.',[
        lr(44,'Dubin–Johnson과 Rotor syndrome'),lr(44,'담즙정체에서는 초음파부터')
      ],[],[
        lt('Dubin–Johnson syndrome','MRP2 관련 담세관 배설 이상으로 포합형 bilirubin이 증가한다. 검게 착색된 간이 Rotor와의 대표적인 차이다.',[
          lr(44,'Dubin–Johnson과 Rotor syndrome')
        ],[]),
        lt('Rotor syndrome','포합형 고빌리루빈혈증을 보이지만 Dubin–Johnson의 검은 간은 없다. 두 질환을 모두 간세포 파괴성 간염으로 해석하지 않는다.',[
          lr(44,'Dubin–Johnson과 Rotor syndrome')
        ],[])
      ]),
      lt('유전성 담즙정체','진행성 PFIC와 재발성 BRIC를 구별한다. 아형에 따라 GGT가 정상일 수 있으므로 담즙정체가 항상 GGT 상승을 뜻하지 않는다.',[
        lr(44,'Dubin–Johnson과 Rotor syndrome')
      ],[],[
        lt('PFIC','Progressive familial intrahepatic cholestasis. FIC1·BSEP·MDR3 등 수송 기능에 따라 나누며 PFIC 3의 GGT 상승을 구별한다.',[
          lr(44,'Dubin–Johnson과 Rotor syndrome')
        ],[]),
        lt('BRIC','Benign recurrent intrahepatic cholestasis. 진행성 PFIC와 달리 반복되는 담즙정체 발작이라는 경과를 중심으로 읽는다.',[
          lr(44,'Dubin–Johnson과 Rotor syndrome')
        ],[])
      ])
    ]),
    lt('낭성·영아 질환','낭종이 담관과 통하는지, 문맥역 섬유화가 중심인지, 영아 황달에서 담도 폐쇄를 놓치지 않았는지를 구분한다.',[
      lr(17,'간내 담관 기형과 낭성 질환'),lr(20,'영아 황달 · indirect와 direct를 먼저 나눈다')
    ],[],[
      lt('간낭종·담관 발생 이상','PLD의 독립 낭종과 Caroli의 담관 확장은 연결성이 다르다. Congenital hepatic fibrosis는 낭종의 크기보다 문맥역 섬유화가 핵심이다.',[
        lr(17,'담관 기형 비교 그림 읽기'),lr(54,'Hepatic cyst와 polycystic liver disease')
      ],[277],[
        lt('Simple hepatic cyst','담관과 통하지 않는 장액성 공간이다. 대개 무증상이지만 출혈·감염 또는 복잡한 낭성 소견이 있으면 단순 낭종과 구별한다.',[
          lr(54,'Hepatic cyst와 polycystic liver disease'),lr(60,'단순 낭종과 다른 소견')
        ],[]),
        lt('Polycystic liver disease','다발성 독립 낭종과 ADPKD의 연관을 기억한다. 담관 자체가 늘어나는 Caroli disease와 달리 보통 담관과 연결되지 않는다.',[
          lr(17,'Polycystic liver disease'),lr(54,'Hepatic cyst와 polycystic liver disease')
        ],[277]),
        lt('Von Meyenburg complex','작고 불규칙한 담관들이 섬유성 바탕에 모인 bile duct hamartoma다. 악성 gland의 침윤과 구별한다.',[
          lr(17,'Von Meyenburg complex')
        ],[277]),
        lt('Congenital hepatic fibrosis','넓은 문맥역 섬유화와 비정상 담관, ARPKD와의 연관이 핵심이다. 문맥고혈압을 만들 수 있지만 흔한 간세포 손상성 간경변과 구조가 다르다.',[
          lr(17,'Congenital hepatic fibrosis'),lr(17,'담관 기형 비교 그림 읽기')
        ],[277]),
        lt('Caroli disease','간내 담관의 비폐쇄성·분절성 낭성 확장이다. 담관과 연결되며 congenital hepatic fibrosis와 동반할 수 있다.',[
          lr(17,'Caroli disease'),lr(17,'담관 기형 비교 그림 읽기')
        ],[277])
      ]),
      lt('영아 담즙정체','영아의 direct bilirubin 증가는 생리적 황달과 다르게 접근한다. 담도폐쇄증과 신생아간염을 먼저 구별한다.',[
        lr(16,'Neonatal cholestasis'),lr(20,'황달 감별을 압축하는 기준')
      ],[],[
        lt('Biliary atresia','지속 황달·회백색 변에서 놓치지 않아야 할 진행성 담도 폐쇄다. 진단과 Kasai 수술의 시기가 중요하다.',[
          lr(17,'Biliary atresia와 Secondary biliary cirrhosis'),lr(20,'담도폐쇄증의 진단과 수술 시기')
        ],[]),
        lt('Neonatal hepatitis','Giant-cell transformation을 보일 수 있는 영아 간염 패턴이다. 조직 모습만으로 원인 감염이나 대사질환까지 한 번에 확정하지 않는다.',[
          lr(16,'감염성 원인과 neonatal hepatitis'),lr(16,'신생아간염의 병리 소견')
        ],[746])
      ])
    ]),
    lt('혈류·혈관 장애','간으로 들어오는 혈류, sinusoid, 간정맥으로 나가는 혈류 중 어느 위치가 막히거나 부족한지 찾는다.',[
      lr(17,'간의 순환장애'),lr(16,'Lobule, acinus와 혈류'),lr(16,'Portal hypertension의 기준과 위치')
    ],[],[
      lt('유입·관류 장애','문맥 폐쇄와 동맥·전신 관류 부족을 구별한다. 저산소 손상은 산소 공급에 취약한 zone 3와 연결한다.',[
        lr(17,'간의 순환장애'),lr(16,'괴사의 분포와 범위')
      ],[],[
        lt('Portal vein thrombosis','문맥 유입이 막히는 prehepatic portal hypertension의 원인이다. 간정맥 유출 폐쇄인 Budd–Chiari와 위치가 다르다.',[
          lr(16,'Portal hypertension의 기준과 위치'),lr(34,'문맥 혈류를 확인하는 이유')
        ],[]),
        lt('Ischemic hepatitis','저관류·저산소 손상에서 centrilobular, zone 3 necrosis를 연결한다. 원인이 다른 간염에서도 간수치는 높아질 수 있으므로 상황을 함께 읽는다.',[
          lr(16,'괴사의 분포와 범위'),lr(17,'간의 순환장애')
        ],[34]),
        lt('Hepatic infarct','국소 혈류 공급 장애로 생기는 간의 경색이다. 광범위 저관류성 간손상과 같은 범위의 병변으로 보지 않는다.',[
          lr(17,'간의 순환장애')
        ],[])
      ]),
      lt('유출·sinusoid 장애','심장성 울혈, 큰 간정맥 폐쇄, 작은 sinusoid·terminal venule 손상을 구분한다.',[
        lr(17,'간의 순환장애')
      ],[],[
        lt('Passive congestion · 심장성 울혈','우심부전으로 zone 3에 울혈·출혈·섬유화가 생긴다. Nutmeg liver와 central-to-central의 reverse pattern을 연결한다.',[
          lr(17,'Passive congestion · 심장성 울혈'),lr(53,'새 복수는 진단적 천자부터')
        ],[40,169,431,679]),
        lt('Budd–Chiari syndrome','간정맥 또는 유출 부위 IVC의 폐쇄다. 간비대·복통·복수와 간정맥 혈전, 울혈·괴사를 연결한다.',[
          lr(17,'Budd–Chiari syndrome'),lr(19,'Budd-Chiari syndrome')
        ],[41,747]),
        lt('SOS · Veno-occlusive disease','Sinusoidal endothelial injury와 terminal hepatic venule의 폐쇄가 중심이다. 조혈모세포 이식·conditioning 치료 같은 배경을 확인한다.',[
          lr(17,'Veno-occlusive disease · VOD')
        ],[])
      ])
    ]),
    lt('간경변·간부전','여러 원인 질환이 공유하는 결과를 모았다. 원인 이름, 간기능 저하, 문맥고혈압 합병증은 같은 환자에게 함께 붙을 수 있다.',[
      lr(53,'간경변을 이해하는 두 개의 축'),lr(49,'간수치가 높은 것과 간부전은 다르다')
    ],[],[
      lt('급성 간부전 · ALF','기존 간경변 없이 급성 손상 뒤 응고장애와 간성뇌증이 생기는 상황이다. AST·ALT 높이만으로 중증도를 판단하지 않는다.',[
        lr(16,'급성간부전'),lr(49,'간수치가 높은 것과 간부전은 다르다'),lr(49,'King’s College criteria')
      ],[37,92,335,532,820]),
      lt('간경변 · Cirrhosis','Fibrous septa와 regenerative nodules가 함께 정상 구조를 재편한다. 보상 상태와 비대상화 여부가 치료·예후의 중요한 갈림길이다.',[
        lr(16,'원인과 진단 형태'),lr(26,'Liver cirrhosis'),lr(53,'Compensated와 decompensated cirrhosis'),lr(53,'Child-Pugh: 다섯 항목을 같은 방식으로 계산한다'),lr(53,'MELD 계열: 어떤 변수가 들어가는가')
      ],[209,338,423,537,749,850],[
        lt('대상성 간경변','뚜렷한 비대상화 합병증 없이 기능을 유지하는 단계다. 문맥고혈압을 찾아 첫 비대상화를 예방하고 원인 치료·HCC 감시를 계속한다.',[
          lr(53,'Compensated와 decompensated cirrhosis'),lr(53,'CSPH를 찾아 비대상화를 예방한다'),lr(53,'HCC surveillance')
        ],[]),
        lt('비대상성 간경변','복수·정맥류 출혈·간성뇌증 같은 사건은 질환이 한 단계 진행했다는 신호다. 합병증 치료와 간이식 평가를 함께 생각한다.',[
          lr(53,'Compensated와 decompensated cirrhosis'),lr(53,'간이식을 의뢰할 신호')
        ],[73,208,395]),
        lt('이차성 담즙성 간경변','담석·협착·종양 등으로 담즙 배출이 오래 막혀 생긴 결과다. PBC의 옛 명칭인 primary biliary cirrhosis와 혼동하지 않는다.',[
          lr(17,'Biliary atresia와 Secondary biliary cirrhosis'),lr(17,'간내 담관 질환')
        ],[])
      ]),
      lt('문맥고혈압·정맥류','문맥의 저항·유입과 우회혈류를 연결한다. 정맥류는 급성 지혈과 초출혈·재출혈 예방이 서로 다른 단계다.',[
        lr(53,'Portal circulation과 HVPG'),lr(53,'CSPH를 찾아 비대상화를 예방한다'),lr(58,'급성 출혈과 출혈 예방은 약부터 다르다')
      ],[536,688],[
        lt('식도정맥류·출혈','급성 출혈에서는 혈관수축제·항생제·EVL을 함께 생각한다. 예방에는 NSBB의 β₁·β₂ 작용과 적합성을 확인한다.',[
          lr(53,'내시경에서 보는 크기와 red color sign'),lr(53,'급성 정맥류 출혈: 세 가지를 동시에 시작한다'),lr(53,'1차 예방과 2차 예방'),lr(53,'Carvedilol 선택: 문맥압을 낮추되 관류를 지킨다'),lr(58,'Somatostatin과 Octreotide — 분비와 혈류를 함께 낮춘다')
        ],[48,74,176,211,339,387,538,788,884]),
        lt('위정맥류','식도정맥류와 위치·배액 경로가 다르다. EVO와 TIPS, BRTO/PARTO를 혈류 방향에 맞추어 구별한다.',[
          lr(53,'위정맥류와 EVO'),lr(53,'TIPS와 BRTO/PARTO는 혈류 방향이 반대다')
        ],[])
      ]),
      lt('체액 저류·감염','복수의 원인에는 SAAG·단백, 감염에는 PMN을 사용한다. 복부와 흉부의 체액 공간을 구분하면 SBP·SBE도 섞이지 않는다.',[
        lr(53,'새 복수는 진단적 천자부터'),lr(53,'간성흉수: 복강의 물이 흉막강으로 이동한다')
      ],[],[
        lt('복수','새 복수는 진단적 천자로 원인과 감염을 평가한다. Spironolactone·furosemide와 대량천자 후 albumin의 역할을 구별한다.',[
          lr(53,'새 복수는 진단적 천자부터'),lr(53,'복수의 단계별 치료와 이뇨제'),lr(53,'Albumin은 상황에 따라 목적과 용량이 다르다'),lr(58,'Spironolactone과 Furosemide를 함께 쓰는 이유')
        ],[679,849,885]),
        lt('난치성 복수','충분히 치료해도 반응하지 않는 경우와 부작용 때문에 이뇨제를 못 쓰는 경우를 나눈다. 반복 천자·TIPS·간이식의 자리를 함께 본다.',[
          lr(53,'난치성 복수: 효과가 없을 때와 쓸 수 없을 때'),lr(53,'간이식을 의뢰할 신호')
        ],[395]),
        lt('Spontaneous bacterial peritonitis · SBP','복수 PMN ≥250/mm³이면 배양 결과를 기다리지 않고 치료를 시작한다. 단순 복수의 양 증가와 구별한다.',[
          lr(53,'PMN 250: 배양을 기다리지 않는 이유'),lr(53,'예방과 다른 감염의 확인'),lr(53,'Albumin은 상황에 따라 목적과 용량이 다르다')
        ],[75,210]),
        lt('간성흉수','복강의 체액이 횡격막 결손을 통해 흉막강으로 이동하며 흔히 우측에 생긴다. 단순 간성흉수의 일반 흉관 지속 배액은 피한다.',[
          lr(53,'간성흉수: 복강의 물이 흉막강으로 이동한다'),lr(53,'간성흉수의 치료와 난치성 흉수')
        ],[]),
        lt('Spontaneous bacterial empyema · SBE','폐렴 없이 간성흉수에 생긴 감염이다. 흉수 배양 여부에 따라 PMN 기준이 달라지며, 육안상 고름이 필수는 아니다.',[
          lr(53,'SBE: 고름이 없어도 흉수 감염일 수 있다')
        ],[]),
        lt('저나트륨혈증','체액이 부족한 저혈량형과 물이 상대적으로 과다한 희석성 저나트륨혈증을 구분한다. 낮은 Na 수치 하나만 보고 같은 처치를 하지 않는다.',[
          lr(53,'저나트륨혈증: 저혈량인가 희석성인가')
        ],[])
      ]),
      lt('신장·뇌·폐 합병증','신장 관류 저하, 뇌기능 변화, 폐혈관 이상을 나눈다. 합병증이 생기면 감염·출혈·약물 같은 촉발 요인도 다시 찾는다.',[
        lr(53,'AKI와 HRS-AKI'),lr(53,'간성뇌증: 수치보다 임상과 유발인자'),lr(53,'폐합병증: 같은 호흡곤란을 세 가지 기전으로 나눈다')
      ],[],[
        lt('HRS-AKI','간경변·복수 환자의 AKI에서 적절한 혈량 평가·보충과 다른 원인 감별 뒤 판단한다. Creatinine 변화와 혈관수축제·albumin·이식 평가를 연결한다.',[
          lr(53,'작은 creatinine 변화도 의미가 있다'),lr(53,'HRS 진단: 적절한 혈량 보충 후에도 회복되지 않는가'),lr(53,'HRS 치료와 간이식 평가')
        ],[]),
        lt('간성뇌증 · HE','의식·행동 변화와 유발인자를 임상적으로 판단한다. Ammonia 숫자만으로 등급을 정하지 않으며 lactulose·rifaximin과 원인 교정을 연결한다.',[
          lr(53,'진단과 West Haven grade'),lr(53,'유발인자 전체를 한 묶음으로 외운다'),lr(53,'치료: Lactulose와 rifaximin, 보조제, 간이식'),lr(53,'단백질을 줄이지 않고 근육을 지킨다'),lr(58,'Lactulose와 Lactitol — 대장을 산성화하는 비흡수성 이당류')
        ],[73,88,177,208,340,408,488,539,852,886]),
        lt('Hepatopulmonary syndrome · HPS','폐내 혈관확장으로 산소화가 나빠진다. 간질환·문맥고혈압, A–a 산소차 증가, 폐내 혈관확장의 세 조건을 함께 확인한다.',[
          lr(53,'HPS: 폐혈관이 넓어졌는데 왜 저산소증이 생길까'),lr(53,'HPS의 진단: 세 조건을 함께 확인한다'),lr(53,'HPS의 중증도와 치료: A–a 차와 PaO₂의 역할을 구분한다')
        ],[]),
        lt('Portopulmonary hypertension · PoPH','문맥고혈압에 동반되는 전모세혈관성 폐고혈압이다. HPS의 혈관확장과 달리 폐혈관 저항·우심실 부담이 중심이며 우심도자로 확인한다.',[
          lr(53,'PoPH: 폐동맥압만 높다고 진단하지 않는다'),lr(53,'PoPH의 약물과 간이식')
        ],[])
      ]),
      lt('혈구·지혈 이상','혈구가 줄어드는 기전과 응고·항응고의 균형은 별개다. 간경변 환자에게 출혈과 혈전이 모두 생길 수 있다.',[
        lr(53,'혈액학적 이상: 혈구 수와 지혈의 균형을 나눈다')
      ],[],[
        lt('비장기능항진·혈구 감소','문맥고혈압성 비장 격리뿐 아니라 thrombopoietin 감소, 골수 억제·영양·감염·출혈도 확인한다.',[
          lr(53,'혈구 감소: 비장 격리와 생성 저하를 함께 본다'),lr(16,'Ascites와 splenomegaly')
        ],[]),
        lt('Rebalanced hemostasis','응고인자 감소와 항응고인자 감소 등이 공존하는 취약한 균형이다. INR 상승만으로 항응고 상태 또는 출혈 위험 전체를 판단하지 않는다.',[
          lr(53,'Rebalanced hemostasis: 출혈과 혈전이 공존한다'),lr(53,'활동성 출혈: 원인 지혈이 먼저다')
        ],[])
      ])
    ]),
    lt('결절·종양','재생·과형성인지 진정한 종양인지 먼저 나눈다. 악성 종양에서는 원발성·전이성을 구별하고, HCC는 종양 병기와 간기능을 함께 읽는다.',[
      lr(17,'간 종양과 종양 유사 병변'),lr(54,'간에 종괴가 보이면 세 가지를 나누어 생각한다')
    ],[],[
      lt('과형성·전암 결절','FNH·NRH는 종양 유사 병변이다. Dysplastic nodule은 세포 밀도·이형성과 HCC로의 진행 가능성을 따로 본다.',[
        lr(17,'간 종양과 종양 유사 병변'),lr(17,'Hepatocellular dysplasia와 Dysplastic nodule')
      ],[],[
        lt('Focal nodular hyperplasia · FNH','혈류 이상에 대한 국소 과형성으로 central stellate scar가 대표 단서다. HCA의 출혈·악성 전환 위험을 그대로 적용하지 않는다.',[
          lr(17,'Focal nodular hyperplasia · FNH'),lr(19,'Focal nodular hyperplasia · FNH'),lr(54,'FNH — 종양처럼 보여도 국소 혈류에 대한 과형성')
        ],[170,171,427,706]),
        lt('Nodular regenerative hyperplasia · NRH','간 전체의 작은 재생결절에 뚜렷한 fibrous septum이 없다는 점이 간경변과 다르다. 비간경변성 문맥고혈압을 만들 수 있다.',[
          lr(17,'Nodular regenerative hyperplasia · NRH')
        ],[]),
        lt('Dysplastic nodule','Large cell change와 small cell change를 구별한다. 특히 작은 세포의 밀도 증가와 N:C ratio 변화는 HCC로 향하는 결절을 읽는 단서다.',[
          lr(17,'Large cell change와 Small cell change'),lr(54,'다단계 발암과 arterial enhancement·washout')
        ],[168,485,941])
      ]),
      lt('양성 종양','Hemangioma는 혈관성 공간, HCA는 간세포성 신생물이다. 둘 다 양성이라는 말만으로 치료 위험을 같게 보지 않는다.',[
        lr(54,'양성 종양 — 관찰해도 되는 종괴와 위험을 평가할 종괴')
      ],[],[
        lt('Cavernous hemangioma','혈액으로 찬 확장 혈관 공간과 주변부에서 중심부로 채워지는 조영 양상을 연결한다. 흔히 파열하므로 모두 수술한다는 설명은 틀리다.',[
          lr(17,'Hemangioma'),lr(26,'Cavernous hemangioma'),lr(19,'Hepatic hemangioma'),lr(54,'Hemangioma — 혈액이 차는 공간이 영상의 답이 된다')
        ],[294,506,692,827]),
        lt('Hepatocellular adenoma · HCA','경구피임약·호르몬과의 연관, 출혈·괴사, 악성 전환 위험을 함께 본다. 분자 아형에 따라 중요한 단서가 다르다.',[
          lr(17,'Hepatocellular adenoma · HCA'),lr(19,'Hepatocellular adenoma'),lr(54,'HCA — 양성이라는 이름보다 출혈과 악성 전환을 기억한다')
        ],[22,293,691,790],[
          lt('HNF1α-inactivated HCA','Steatosis와 LFABP 발현 소실을 연결한다. 일부 germline HNF1A 이상은 MODY 3와 연관된다.',[
            lr(17,'HNF1α-inactivated HCA')
          ],[]),
          lt('β-catenin-activated HCA','CTNNB1 활성화와 HCC 진행 위험을 연결한다. 특히 exon 3 변이를 다른 아형과 구별한다.',[
            lr(17,'β-catenin-activated HCA'),lr(54,'HCA — 양성이라는 이름보다 출혈과 악성 전환을 기억한다')
          ],[]),
          lt('Inflammatory HCA','염증과 IL-6/JAK/STAT 경로, 비만·지방간과의 연관이 핵심이다. HNF1α형의 지방 변화와 같은 분류 기준이 아니다.',[
            lr(17,'Inflammatory HCA'),lr(17,'HCA의 분류표 보충')
          ],[])
        ])
      ]),
      lt('악성 종양','간에서 시작한 암과 다른 장기에서 전이한 암을 나눈다. HCC와 iCCA는 조직·조영 양상뿐 아니라 이식의 적용 원칙도 다르다.',[
        lr(54,'HCC가 아닌 악성 종양 — 같은 간종괴에도 규칙은 다르다'),lr(17,'간 종양과 종양 유사 병변')
      ],[],[
        lt('Hepatocellular carcinoma · HCC','간세포성 암의 trabecular 구조와 arterial enhancement·washout을 연결한다. 치료는 종양 부담과 남은 간의 기능을 함께 평가한다.',[
          lr(17,'HCC의 조직 패턴과 Desmoplasia'),lr(26,'세 번째 사진 · Malignant 부위'),lr(26,'Trabecular pattern과 핵 이형성'),lr(54,'다단계 발암과 arterial enhancement·washout'),lr(54,'BCLC의 큰 흐름'),lr(54,'간이식 — Milan criteria와 확장 기준'),lr(34,'TACE'),lr(50,'HCC — 면역·혈관신생을 동시에 겨냥')
        ],[20,693,791,825,829]),
        lt('Hepatoblastoma','영유아, 특히 어린 소아의 악성 간종양이다. AFP 상승과 fetal·embryonal 분화, 경우에 따라 mesenchymal 성분을 함께 본다.',[
          lr(17,'Hepatoblastoma'),lr(26,'Hepatoblastoma')
        ],[39]),
        lt('Intrahepatic cholangiocarcinoma · iCCA','담관 상피성 암으로 gland와 desmoplasia, mass-forming 성장을 연결한다. 기본 근치 치료는 절제이며 HCC의 이식 기준을 그대로 옮기지 않는다.',[
          lr(17,'담관암의 성장형과 조직'),lr(27,'Cholangiocarcinoma'),lr(54,'Intrahepatic cholangiocarcinoma'),lr(54,'iCCA의 절제와 이식 — 일반 원칙과 선택된 예외'),lr(60,'간내담관암 · Intrahepatic cholangiocarcinoma')
        ],[21,36,707,826]),
        lt('Angiosarcoma','악성 내피세포가 만드는 공격적인 혈관성 종양이다. 혈관에서 생겼다는 이유로 hemangioma와 같은 질환군으로 취급하지 않는다.',[
          lr(54,'Angiosarcoma와 metastatic tumor')
        ],[]),
        lt('Metastatic liver tumor','간의 악성 종양 전체로 범위를 넓히면 전이암이 가장 흔하다. 대장암 간전이는 선별된 경우 절제할 수 있어 전이 자체를 수술 불가와 동일시하지 않는다.',[
          lr(54,'Angiosarcoma와 metastatic tumor'),lr(43,'간전이 — 개수보다 완전 절제와 남길 간')
        ],[694])
      ])
    ])
  ]);

  // One disease hierarchy across pathology, clinical medicine, imaging and surgery.
  // Missing clinical Wikis are not represented by fabricated section links.
  const pancreatobiliaryWikiReferences={},pancreatobiliaryStudyNotes={};
  const pbr=(courseId,heading)=>({courseId,heading});
  const pbt=(label,clue,refs,questions=[],children=[])=>{
    pancreatobiliaryWikiReferences[label]=refs;
    pancreatobiliaryStudyNotes[label]={clue,questions};
    return children.length?{label,children}:{label};
  };
  const pancreatobiliaryTree=pbt('담췌','담즙의 저장·배출 경로인 담낭·담도와 소화효소·호르몬을 만드는 췌장을 나눈다. 두 경로가 만나는 팽대부에서는 한 병변이 황달과 췌장염을 함께 일으킬 수 있다.',[pbr(6,'간·담낭·이자의 해부학적 연결'),pbr(59,'담석의 이름보다, 어디가 막혔는지를 먼저 생각하자')],[],[
    pbt('담낭·담도','담낭 안의 돌, 담낭벽의 염증, 담관의 폐쇄는 서로 다른 문제다. 구조 이상 → 담석·폐쇄 → 염증 → 종양의 순서로 위치와 병변의 성격을 구분한다.',[pbr(59,'산통·담낭염·담관염의 갈림길'),pbr(60,'담즙이 흐르는 길을 따라 수술을 이해하기')],[71,315], [
      pbt('발생·구조 이상','담관이 닫혔는지, 늘어났는지, 췌관과 비정상적으로 합류하는지를 나눈다. 낭성 공간이 담관과 연결되는지도 중요하다.',[pbr(17,'간내 담관 기형과 낭성 질환'),pbr(21,'황달 · 수술이 필요한 환아 찾기')],[277], [
        pbt('담도폐쇄증','영아의 회색변·직접고빌리루빈혈증·triangular cord sign을 연결한다. 수술 중 담관조영으로 확인하고 조기에 Kasai 수술을 고려하는 진행성 폐쇄성 질환이다.',[pbr(17,'Biliary atresia와 Secondary biliary cirrhosis'),pbr(20,'담도폐쇄증의 진단과 수술 시기'),pbr(21,'Biliary atresia'),pbr(33,'어디에 쓰고 무엇과 구별하는가')],[129,561,649,815]),
        pbt('담관낭 · Choledochal cyst','담관 자체의 낭성·방추형 확장이다. 담즙정체·감염과 악성화 위험을 함께 보며, 독립적인 낭성종양과 구별한다.',[pbr(21,'Choledochal cyst'),pbr(59,'담관낭과 Caroli disease'),pbr(60,'Todani 분류와 치료')],[860], [
          pbt('I형 · 간외담관 확장','간외담관이 낭성 또는 방추형으로 늘어난다. 낭 절제와 hepaticojejunostomy로 연결한다.',[pbr(60,'Todani 분류와 치료')]),
          pbt('II형 · 담관 게실','담관 옆으로 돌출된 게실 형태다. 확장된 담관 전체를 뜻하는 I형과 구분한다.',[pbr(60,'Todani 분류와 치료')]),
          pbt('III형 · Choledochocele','십이지장 벽 안의 원위 담관이 낭성으로 확장된다. 내시경적 sphincterotomy를 연결한다.',[pbr(60,'Todani 분류와 치료')]),
          pbt('IVa형 · 간내·간외','간내·간외담관 모두에 다발성 확장이 있다. 간외 병변의 절제·재건과 간내 병변의 범위를 함께 판단한다.',[pbr(60,'Todani 분류와 치료'),pbr(59,'담관낭과 Caroli disease')],[860]),
          pbt('IVb형 · 간외 다발성','다발성 확장이 간외담관에 국한된다. 간내담관까지 확장되는 IVa형과 대비한다.',[pbr(60,'Todani 분류와 치료')]),
          pbt('V형 · Caroli disease','큰 간내담관의 분절성·낭성 확장으로 담관계와 연결된다. 반복 담관염·담석·담관암 위험을 보며, congenital hepatic fibrosis가 동반되면 Caroli syndrome이다.',[pbr(17,'Caroli disease'),pbr(59,'담관낭과 Caroli disease'),pbr(60,'Todani 분류와 치료')],[277])
        ]),
        pbt('췌담관 합류 이상 · APBDU','췌관과 담관의 비정상적인 합류로 췌장액 역류와 담도 점막 손상이 생길 수 있다. 담관낭이 없어도 담도계암, 특히 담낭암과 연결된다.',[pbr(60,'구조 이상에서 암 위험까지')],[643]),
        pbt('간내 담관발생 이상','작은 담관 과오종, 담관과 연결되지 않는 낭종, 문맥역 섬유화를 구분한다. 담관 자체가 확장되는 Caroli disease는 담관낭 V형에서 본다.',[pbr(17,'담관 기형 비교 그림 읽기')],[277], [
          pbt('Von Meyenburg complex','담관 과오종. 섬유성 기질 안에 작고 불규칙한 담관들이 모여 있으며 대개 우연히 발견된다.',[pbr(17,'Von Meyenburg complex')],[277]),
          pbt('Polycystic liver disease','담관계와 직접 연결되지 않는 다발성 간낭종. ADPKD와의 강한 연관을 Caroli disease·ARPKD 계열과 비교한다.',[pbr(17,'Polycystic liver disease')],[277]),
          pbt('Congenital hepatic fibrosis','넓은 문맥역 섬유화 속 비정상 담관이 특징이며 ARPKD와 연결된다. 간세포 기능이 비교적 보존돼도 문맥고혈압이 생길 수 있다.',[pbr(17,'Congenital hepatic fibrosis')],[277])
        ])
      ]),
      pbt('담석·기계적 폐쇄','담석은 성분과 위치라는 두 축으로 분류한다. 어떤 돌인가와 어디를 막았는가를 섞지 않아야 증상과 치료가 정리된다.',[pbr(59,'성분·위치·증상은 서로 다른 분류 축이다'),pbr(17,'Cholelithiasis · 담석증')],[43,130], [
        pbt('담석의 성분','Cholesterol 과포화, bilirubin 부하, 감염에 의한 탈포합은 다른 기전이다.',[pbr(59,'성분·모양·감염을 한 표로 묶기')],[130,214,590,861], [
          pbt('Cholesterol stone','Cholesterol supersaturation → crystal nucleation → 담낭 저운동·정체. 선택된 작고 비석회화된 돌에서 기능이 남은 담낭에 한해 UDCA 용해를 고려한다.',[pbr(17,'Cholesterol stone의 형성'),pbr(59,'Cholesterol stone — 과포화·핵화·저운동'),pbr(58,'Ursodiol — Cholesterol 담석을 녹이는 조건')],[43,130,861,432]),
          pbt('Black pigment stone','용혈 등으로 bilirubin 부하가 늘어 생기는 검은 색소석. 주로 감염되지 않은 담낭에서 생기며, 갈색석의 감염 기전과 구별한다.',[pbr(17,'Pigment stone의 형성'),pbr(59,'Black과 Brown — bilirubin이 많아졌는가, 감염이 있는가')],[214,590]),
          pbt('Brown pigment stone','담관의 감염·정체와 연결된다. 세균의 β-glucuronidase가 conjugated bilirubin을 탈포합하여 calcium bilirubinate 침전을 돕는다.',[pbr(17,'Pigment stone의 형성'),pbr(59,'Black과 Brown — bilirubin이 많아졌는가, 감염이 있는가')])
        ]),
        pbt('담석의 위치','담낭담석의 관찰·절제 원칙을 담관 안의 돌에 그대로 적용하지 않는다. 담관결석은 담즙 배출 장애와 감염의 원인이 된다.',[pbr(59,'담낭에서 내려온 돌과 담관에서 생긴 돌')],[],[
          pbt('담낭담석','단순 무증상 담석은 관찰이 기본이다. 전형적 biliary colic이나 합병증 병력이 있으면 담낭절제술을 고려하며, 1cm 담석과 1cm 담낭용종은 기준이 다르다.',[pbr(59,'Biliary colic — 산통이라는 이름과 통증의 양상은 다르다'),pbr(59,'무증상 담석과 수술 적응증을 나누기')],[131,132,341,591,862]),
          pbt('총담관결석','담낭에서 내려온 secondary stone과 담관에서 생긴 primary stone을 나눈다. 황달·담관염·췌장염을 일으킬 수 있으며 ERCP 배액·결석 제거와 담낭 치료를 구분한다.',[pbr(59,'담낭에서 내려온 돌과 담관에서 생긴 돌'),pbr(59,'Ultrasound에서 시작해 담낭과 담관을 나눈다')]),
          pbt('간내담관담석','반복 담관염·담관 협착·간농양과 연결되며 담관암 위험인자다. 조직에서는 담관 확장·반응성 상피·담관 주위 섬유화를 함께 본다.',[pbr(27,'Intrahepatic duct stone · Hepatolithiasis'),pbr(59,'담낭에서 내려온 돌과 담관에서 생긴 돌'),pbr(60,'담관암의 위험인자')],[514])
        ]),
        pbt('담석의 폐쇄·누공 합병증','담관 밖에서 누르는지, 누공이 생겼는지, 돌이 장으로 이동해 막았는지를 구분한다.',[pbr(59,'Mirizzi·누공·Gallstone ileus')],[],[
          pbt('Mirizzi syndrome','담낭 경부·담낭관에 감돈된 돌이 옆의 담관을 외부에서 압박한다. 총담관 내 결석과는 폐쇄 위치와 방식이 다르다.',[pbr(59,'Mirizzi·누공·Gallstone ileus')]),
          pbt('담낭–장관 누공','염증으로 담낭과 인접 장 사이의 길이 생긴다. 담낭–십이지장 누공이 흔하며, 돌이 이 길을 지나 장으로 내려갈 수 있다.',[pbr(59,'Mirizzi·누공·Gallstone ileus'),pbr(17,'급성·만성 담낭염의 합병증')]),
          pbt('Gallstone ileus','누공을 통해 내려온 큰 담석에 의한 기계적 장폐쇄다. 장폐쇄·pneumobilia·장내 이소성 담석을 함께 본다.',[pbr(59,'Mirizzi·누공·Gallstone ileus')])
        ])
      ]),
      pbt('염증·담즙정체성 손상','담낭벽의 염증과 담관의 감염·자가면역성 손상을 나눈다. RUQ pain이라는 공통 증상만으로 같은 질환으로 묶지 않는다.',[pbr(59,'산통·담낭염·담관염의 갈림길'),pbr(17,'PBC와 PSC 비교')],[],[
        pbt('담낭염','급성은 염증·허혈·괴사가, 만성은 섬유화와 반복 손상이 중심이다. 담석이 없는 중환자에서도 급성 담낭염이 생긴다.',[pbr(17,'Cholecystitis · 담낭염'),pbr(59,'Acute cholecystitis와 특수 형태')],[49,764], [
          pbt('급성 담낭염','지속되는 RUQ pain·Murphy sign·발열과 담낭벽 비후를 연결한다. 담도스캔에서 담낭 비시각화는 담낭관 폐쇄를 시사한다.',[pbr(59,'Acute cholecystitis와 특수 형태'),pbr(33,'급성 담낭염은 담낭관의 길이 막힌 상태로 읽기')],[67,190,472,550,657], [
            pbt('결석성 담낭염','담낭 경부·cystic duct의 담석 감돈으로 내압 상승과 화학적 염증이 시작된다. 초기부터 세균감염이 반드시 필요한 것은 아니다.',[pbr(17,'Acute calculous cholecystitis'),pbr(59,'Acute cholecystitis와 특수 형태')]),
            pbt('무결석성 담낭염','외상·화상·대수술·TPN·패혈증 등 중증 상태에서 담낭 허혈·정체가 생긴다. 담석이 보이지 않아도 배제하지 않는다.',[pbr(17,'Acute acalculous cholecystitis'),pbr(59,'Acute cholecystitis와 특수 형태')]),
            pbt('기종성 담낭염','가스 형성 감염으로 담낭벽·내강에 가스가 보이는 특수 형태다. 고령·당뇨 환자와 괴저·천공 위험을 연결한다.',[pbr(59,'Acute cholecystitis와 특수 형태')],[216,593])
          ]),
          pbt('만성 담낭염','반복 손상에 따른 벽의 섬유화와 만성 염증. Rokitansky–Aschoff sinus는 점막 함입으로, 깊은 gland가 보인다고 바로 침윤암은 아니다.',[pbr(17,'Chronic cholecystitis'),pbr(17,'Rokitansky–Aschoff sinus'),pbr(27,'Chronic cholecystitis')])
        ]),
        pbt('담낭의 폐쇄·염증 합병증','내용물이 맑은 점액인지 고름인지, 벽이 괴사·천공되었는지를 나눈다.',[pbr(59,'Hydrops와 Empyema는 내용물이 다르다')],[216,593], [
          pbt('Hydrops · Mucocele','지속적인 담낭관 폐쇄로 담즙 대신 맑은 액체·점액이 차서 팽창한다. 통증이 없더라도 단순 무증상 담석과 다르다.',[pbr(59,'Hydrops와 Empyema는 내용물이 다르다')],[216,593]),
          pbt('Empyema','폐쇄된 담낭 안에 고름이 고인 화농성 감염이다. 고열·백혈구 증가와 패혈증·천공 위험을 연결한다.',[pbr(59,'Hydrops와 Empyema는 내용물이 다르다'),pbr(17,'Acute calculous cholecystitis')]),
          pbt('괴저·천공성 담낭염','혈류 저하로 담낭벽이 괴사하고 파열하면 국소 농양 또는 복막염으로 이어진다.',[pbr(59,'Hydrops와 Empyema는 내용물이 다르다'),pbr(17,'급성·만성 담낭염의 합병증')])
        ]),
        pbt('감염성 담관 질환','폐쇄된 담즙에 세균감염이 겹친 급성 담관염과 담관 안의 기생충 감염을 구분한다.',[pbr(59,'Charcot triad와 중증 담관염'),pbr(27,'Clonorchiasis · 간흡충')],[],[
          pbt('급성 담관염','Charcot triad는 RUQ pain·황달·발열/오한이다. 저혈압·의식혼동이 더해지면 중증 감염을 생각하며 항생제와 필요한 담도배액으로 연결한다.',[pbr(59,'Charcot triad와 중증 담관염')],[215,342,592,863]),
          pbt('간흡충증 · Clonorchiasis','담관 안의 기생충과 egg를 확인한다. 만성 담관 자극·담즙정체와 담관암 위험을 연결하며 담낭암의 위험인자와 섞지 않는다.',[pbr(27,'Clonorchiasis · 간흡충'),pbr(60,'담관암의 위험인자')],[36,707])
        ]),
        pbt('만성 담관 손상','작은 간내담관을 파괴하는 PBC, 간내·간외담관을 협착시키는 PSC, 오래된 폐쇄의 결과인 이차성 담도성 간경변을 나눈다.',[pbr(17,'PBC와 PSC 비교')],[],[
          pbt('PBC','중년 여성·소양증·AMA와 작은 간내담관의 florid duct lesion을 연결한다. 치료는 UDCA가 중심이며 초기부터 간경변인 것은 아니다.',[pbr(17,'Primary biliary cholangitis · PBC'),pbr(52,'AMA와 IgM이 가리키는 방향'),pbr(52,'UDCA가 좋아지게 하는 것과 못 하는 것')],[50,484]),
          pbt('PSC','간내·간외담관의 다발성 협착과 확장으로 beading, 조직에서는 onion-skin fibrosis. UC 동반과 담관암 위험을 함께 기억한다.',[pbr(17,'Primary sclerosing cholangitis · PSC'),pbr(17,'PSC의 병리'),pbr(59,'Beading과 Onion-skin을 연결하기')],[479,744,951]),
          pbt('이차성 담도성 간경변','담석·협착·종양·담도폐쇄증 등으로 담즙 배출이 오래 막힌 결과다. 담즙정체와 portal fibrosis를 원인 폐쇄에 연결한다.',[pbr(17,'Biliary atresia와 Secondary biliary cirrhosis')])
        ])
      ]),
      pbt('담낭벽·용종성 병변','용종은 돌출된 모양이지 조직 진단이 아니다. 비신생물성 가성 용종·과형성과 진성 선종을 나누고, 악성은 아래 종양 가지에서 본다.',[pbr(60,'진성 용종과 가성 용종'),pbr(59,'Adenomyomatosis와 Cholesterolosis')],[513], [
        pbt('Cholesterolosis · 용종','Lamina propria의 foamy macrophage에 cholesterol이 축적된 비신생물성 병변이다. Cholesterol polyp은 진성 선종과 다르다.',[pbr(60,'진성 용종과 가성 용종'),pbr(59,'Adenomyomatosis와 Cholesterolosis')]),
        pbt('Adenomyomatosis','점막·근층 과형성과 Rokitansky–Aschoff sinus가 특징이다. 담낭벽 속 점막 함입을 침윤성 암으로 오인하지 않는다.',[pbr(60,'진성 용종과 가성 용종'),pbr(17,'Rokitansky–Aschoff sinus'),pbr(59,'Adenomyomatosis와 Cholesterolosis')]),
        pbt('Inflammatory polyp','염증세포를 포함한 육아·섬유조직으로 이루어진 비신생물성 용종이다.',[pbr(60,'진성 용종과 가성 용종')]),
        pbt('담낭 선종','신생물성 진성 용종이자 전암병변이다. 단일·유경성 병변이 흔하며 크기·무경성 여부·성장·증상을 함께 판단한다.',[pbr(60,'진성 용종과 가성 용종'),pbr(60,'악성 위험인자와 10 mm 기준')],[513]),
        pbt('Porcelain gallbladder','만성 손상에 따른 담낭벽 석회화다. 내강의 calcium salt 침전인 limey bile과 다르며, 기출에서는 수술 적응증·암 위험과 연결된다.',[pbr(17,'Chronic cholecystitis'),pbr(59,'무증상 담석과 수술 적응증을 나누기'),pbr(60,'담낭암과 담관암의 위험인자를 섞지 않기')],[132,643,862])
      ]),
      pbt('담도계 종양','담관·담낭·팽대부 중 어디에 생겼는지가 수술을 바꾼다. 상피내·유두상 전구병변과 기질로 침윤한 adenocarcinoma도 구분한다.',[pbr(60,'위치에 따라 달라지는 수술'),pbr(60,'전암병변과 성장 형태')],[197,400], [
        pbt('상피내·유두상 전구병변','담관의 BilIN·IPNB와 담낭의 ICPN을 나눈다. 이름이 비슷한 췌장의 PanIN·IPMN과는 장기가 다르다.',[pbr(60,'전암병변과 성장 형태')],[],[
          pbt('BilIN','담관의 현미경적 상피내 종양성 병변이다. 기질 침윤을 보이는 담관선암과 구분한다.',[pbr(60,'전암병변과 성장 형태')]),
          pbt('IPNB','담관 내 유두상 종양이다. 실습 표본의 papillary adenocarcinoma에서는 관 내 유두상 병변과 기질 침윤성 선암이 함께 보인다.',[pbr(27,'Common bile duct의 Papillary adenocarcinoma'),pbr(60,'전암병변과 성장 형태')]),
          pbt('ICPN','담낭의 intracholecystic papillary neoplasm이다. 담관 IPNB·췌관 IPMN과 위치를 구별하고, 침윤암 동반 여부를 별도로 본다.',[pbr(60,'전암병변과 성장 형태'),pbr(60,'담낭암과 담관암의 위험인자를 섞지 않기')])
        ]),
        pbt('담관의 낭성 종양','두꺼운 벽·격벽·벽결절을 가진 낭성 병변은 단순 낭종과 다르다. 담관 자체의 확장인 choledochal cyst와도 구분한다.',[pbr(60,'담관의 낭성 종양')],[],[
          pbt('Biliary cystadenoma','강의의 전통적 낭선종 명칭. 점액성 상피와 복잡한 낭벽을 보며, 흡인·unroofing만으로 끝내지 않고 완전 절제의 필요성을 판단한다.',[pbr(60,'단순 낭종과 다른 소견'),pbr(60,'흡인이나 unroofing만으로 끝내지 않기')]),
          pbt('Biliary cystadenocarcinoma','강의에서 낭선암으로 제시한 악성 낭성 병변이다. 과거 명칭을 현대 MCN·IPNB와 단순히 일대일 대응시키지 않는다.',[pbr(60,'단순 낭종과 다른 소견'),pbr(60,'흡인이나 unroofing만으로 끝내지 않기')])
        ]),
        pbt('담관암 · Cholangiocarcinoma','불규칙 gland와 풍부한 desmoplasia를 보이는 선암이다. 간내담석·간흡충·PSC·담관낭 등의 위험인자와 발생 위치를 함께 본다.',[pbr(17,'Cholangiocarcinoma'),pbr(27,'Cholangiocarcinoma'),pbr(60,'담관암의 위험인자'),pbr(50,'담도암 — GemCis에 면역치료를 더한다')],[36,197,400,514,707], [
          pbt('간내담관암 · iCCA','간실질 내 종괴형이 가장 흔하다. 담관을 바로 막지 않으면 초기 황달이 없을 수 있고, 절제 가능하면 간절제와 림프절 곽청을 연결한다.',[pbr(17,'담관암의 성장형과 조직'),pbr(60,'종괴형이 가장 흔하다'),pbr(60,'간절제와 림프절 곽청')],[292,514,826]),
          pbt('간문부담관암 · Klatskin','좌우 간관의 합류부 부근 종양으로 폐쇄성 황달이 중요하다. Bismuth–Corlette는 담관의 길이 방향 침범 범위이지 TNM 자체가 아니다.',[pbr(17,'위치와 위험인자'),pbr(60,'좌우 간관의 합류부를 먼저 찾는다'),pbr(60,'Bismuth-Corlette 분류'),pbr(60,'길이 방향 침윤과 남길 간의 기능')],[260,386,644], [
            pbt('Bismuth I형','합류부 아래에 병변이 있고 좌우 간관의 합류는 보존된다. 상류 담관 확장만으로 높은 형으로 올리지 않는다.',[pbr(60,'Bismuth-Corlette 분류')],[644]),
            pbt('Bismuth II형','좌우 간관 합류부를 침범하지만 2차 분지까지는 이르지 않는다.',[pbr(60,'Bismuth-Corlette 분류')]),
            pbt('Bismuth IIIa형','우측 2차 담관 분지까지 연장된다. IIIa는 right, IIIb는 left로 구분한다.',[pbr(60,'Bismuth-Corlette 분류')]),
            pbt('Bismuth IIIb형','좌측 2차 담관 분지까지 연장된다.',[pbr(60,'Bismuth-Corlette 분류')]),
            pbt('Bismuth IV형','양측 2차 담관 분지 침범 또는 다발성 침범 형태다. 범위와 함께 혈관 관계·남길 간의 기능을 평가한다.',[pbr(60,'Bismuth-Corlette 분류'),pbr(60,'길이 방향 침윤과 남길 간의 기능')])
          ]),
          pbt('원위부 담관암','췌장 두부·십이지장과 밀접한 원위 CBD의 선암이다. 근치 수술은 Whipple·PPPD로, distal pancreatectomy와 다르다.',[pbr(60,'Distal CBD cancer의 수술')],[645,793])
        ]),
        pbt('담낭암','대부분 adenocarcinoma이며 침윤 깊이가 절제 범위를 결정한다. T1a는 단순절제, T2는 간 쐐기절제·regional LND를 포함한 확대절제와 연결한다.',[pbr(17,'Carcinoma of the gallbladder'),pbr(60,'담낭암과 담관암의 위험인자를 섞지 않기'),pbr(60,'T 병기가 수술 범위를 결정한다'),pbr(60,'이미 담낭을 뗀 뒤 T2가 발견되었다면')],[263,512,643]),
        pbt('팽대부 종양','담관·췌관의 출구에 생겨 작은 병변도 황달·췌장염을 일으킬 수 있다. 선종의 국소절제와 침윤암의 수술을 분리한다.',[pbr(60,'팽대부 선종과 침윤암')],[],[
          pbt('팽대부 선종','담관·췌관 내 침범이 없는 선종은 endoscopic papillectomy를 고려한다. 절제 후 재발 추적이 필요하다.',[pbr(60,'팽대부 선종과 침윤암')]),
          pbt('팽대부 선암','침윤암은 작은 크기라도 림프절 전이를 배제할 수 없다. PD·PPPD를 생각하며 선종의 내시경절제와 혼동하지 않는다.',[pbr(60,'팽대부 선종과 침윤암'),pbr(43,'Adenocarcinoma — 발생 위치에 맞는 절제')],[624])
        ])
      ]),
      pbt('기능장애·수술 후·출혈','담낭을 제거해도 담관의 돌·협착, 말단 출구의 기능장애, 담즙산 설사 등은 남을 수 있다. 수술 후 증상을 모두 수술 합병증으로 단정하지 않는다.',[pbr(59,'담도 안과 담도 밖을 함께 살펴야 한다')],[864], [
        pbt('기능성 담낭질환','담석 없이 반복되는 전형적 산통과 담낭 배출 기능 저하를 보는 질환이다. 중환자의 급성 무결석성 담낭염과 구별한다.',[pbr(59,'Acute cholecystitis와 특수 형태')]),
        pbt('담도 협착','수술 손상·만성 염증 등으로 담즙 배출이 좁아질 수 있다. 폐쇄의 위치·원인을 확인하며 악성 협착과 구별한다.',[pbr(59,'Hemobilia와 담도폐쇄의 다른 원인'),pbr(59,'담도 안과 담도 밖을 함께 살펴야 한다')],[864]),
        pbt('Oddi 괄약근 장애','담낭을 제거해도 담즙·췌장액의 말단 출구가 남아 있다. 통증만으로 확정하지 않고 검사 이상·담관 확장 등 객관적 소견을 함께 평가한다.',[pbr(59,'담도 안과 담도 밖을 함께 살펴야 한다')],[864]),
        pbt('담낭절제 후 담즙산 설사','대장으로 유입된 담즙산에 의한 수양성 설사다. 잔류 담석·담도 협착과는 기전이 다르며 담즙산 결합제를 연결한다.',[pbr(59,'담도 안과 담도 밖을 함께 살펴야 한다'),pbr(40,'담즙산 설사와 지방산 설사')],[864]),
        pbt('Hemobilia','담도 안의 출혈이다. 간생검·담도 시술·외상 뒤 RUQ pain·황달·위장관 출혈을 연결하며, 발열·오한이 중심인 담관염과 구별한다.',[pbr(59,'Hemobilia와 담도폐쇄의 다른 원인')])
      ])
    ]),
    pbt('췌장','Acini·duct의 외분비 기능과 islet의 내분비 기능을 구분한다. 염증·섬유화, 염증 뒤 저류, 낭성종양, 고형종양은 서로 다른 가지다.',[pbr(17,'췌장의 구조와 기능'),pbr(6,'이자 · Pancreas')],[],[
      pbt('선천·발생 이상','조직이 없는지, 관이 융합하지 않았는지, 십이지장을 둘러싸는지, 다른 장기에 췌장 조직이 있는지를 구분한다.',[pbr(17,'선천기형 · Congenital anomalies')],[],[
        pbt('Agenesis','췌장 전체 또는 일부의 발생 결손이다. 결손 범위에 따라 외분비·내분비 기능에 영향을 줄 수 있다.',[pbr(17,'Agenesis')]),
        pbt('Pancreas divisum','Dorsal·ventral duct가 융합하지 않은 췌관 이상이다. 많은 췌장액이 minor papilla로 배액되지만 대부분 무증상이다.',[pbr(17,'Pancreas divisum')]),
        pbt('Annular pancreas','췌장 조직이 십이지장 제2부를 고리처럼 둘러싸 협착·폐쇄를 일으킬 수 있다.',[pbr(17,'Annular pancreas'),pbr(21,'Duodenal atresia')]),
        pbt('Ectopic pancreas','정상 췌장과 직접 연결되지 않은 이소성 췌장 조직이다. 위의 SET로 보일 때 중앙 umbilication을 GIST의 표면 궤양과 구별한다.',[pbr(17,'Ectopic pancreas'),pbr(36,'미입췌 · Ectopic pancreas'),pbr(22,'상피하종양: 매끈한 융기와 표면 궤양을 구분한다')])
      ]),
      pbt('췌장염','급성은 조기 효소 활성화와 염증·괴사, 만성은 반복 손상에 따른 섬유화·실질 소실이다. 혈중 효소 상승과 기능 소실을 같은 것으로 보지 않는다.',[pbr(17,'급성췌장염 · Acute pancreatitis'),pbr(17,'만성췌장염 · Chronic pancreatitis')],[309,811,813], [
        pbt('급성췌장염','등으로 뻗는 심한 상복부 통증·췌장효소 상승·영상 소견을 함께 본다. 흔한 원인은 담석과 음주이며, 효소 수치가 높다고 그만큼 중증이라는 뜻은 아니다.',[pbr(17,'원인 분류'),pbr(17,'세 가지 시작점과 공통 결과'),pbr(20,'췌장효소는 중증도 점수가 아니다')],[308,309,497,615,811], [
          pbt('간질성·부종성 손상','부종·염증이 중심인 급성 손상이다. 경증에서는 견디는 범위의 조기 경구식이를, 경구 섭취가 어렵다면 경장영양을 생각한다. 일률적인 장기 금식·예방적 항생제와 구별한다.',[pbr(17,'정의와 손상 범위')],[181,502,812]),
          pbt('괴사성·출혈성 손상','췌장 실질·주변 지방의 괴사와 혈관 손상·출혈을 본다. 효소성 지방괴사의 chalky appearance·saponification을 염증성 부종과 구별한다.',[pbr(17,'급성췌장염의 병리'),pbr(17,'활성효소가 만드는 네 가지 손상'),pbr(27,'Enzymatic fat necrosis와 췌장 손상')],[309,811])
        ]),
        pbt('만성췌장염','Fibrosis + acinar atrophy + 상대적으로 남은 islet이 핵심이다. 금주·금연과 통증·영양 관리를 연결하고, 외분비부전에는 효소를 보충한다.',[pbr(17,'만성췌장염 · Chronic pancreatitis'),pbr(17,'만성췌장염의 병리'),pbr(58,'Pancreatin과 Pancrelipase')],[180,182,310,499,500,614,616,813], [
          pbt('독성·폐쇄성 만성췌장염','장기간 음주와 지속적인 췌관 폐쇄가 반복 손상·섬유화로 이어질 수 있다. 관 확장·췌관 결석을 기능 소실과 함께 본다.',[pbr(17,'원인과 유전적 소인'),pbr(17,'발병기전의 네 축')],[180,500]),
          pbt('유전성 췌장염','PRSS1 등 효소 활성화·억제와 관련된 유전적 소인이 중요하다. 원인불명 췌장염을 모두 cystic fibrosis와 같은 말로 쓰지 않는다.',[pbr(17,'원인과 유전적 소인')],[813])
        ])
      ]),
      pbt('비종양성 저류·기능부전','췌장염 뒤 생긴 액체·괴사물 저류는 낭성종양과 분리한다. 외분비 소실은 지방변, 내분비 소실은 당뇨병으로 연결한다.',[pbr(17,'Pancreatic pseudocyst'),pbr(17,'비가역적 기능장애와 반복 손상'),pbr(58,'Pancreatin과 Pancrelipase')],[182,499,616], [
        pbt('Pancreatic pseudocyst','췌장염·췌관 손상 뒤 생기는 액체 저류다. Granulation·fibrous wall은 있지만 epithelial lining은 없으며, 고형 괴사물이 많은 WON과 구분한다.',[pbr(17,'형성과 구조'),pbr(17,'Pseudocyst와 walled-off necrosis 구별'),pbr(27,'상피가 없는 내면')],[179,498,610]),
        pbt('Walled-off necrosis · WON','괴사성 췌장염 뒤 괴사조직을 포함한 저류에 성숙한 벽이 생긴 상태다. 대개 4주 이후이며, 액체 중심인 pseudocyst와 내용물이 다르다.',[pbr(17,'Pseudocyst와 walled-off necrosis 구별')]),
        pbt('췌장 외분비부전','소화효소 부족으로 지방변·체중 감소·지용성 비타민 흡수 저하가 생긴다. Pancrelipase는 췌장을 자극하는 약이 아니라 부족한 효소를 음식과 함께 공급하는 약이다.',[pbr(58,'Pancreatin과 Pancrelipase'),pbr(40,'대변 지방과 D-xylose'),pbr(40,'위·췌장·회장의 역할')],[147,470,182]),
        pbt('췌장성 당뇨병','췌장 손상이 내분비 기능 소실까지 이르면 발생할 수 있다. Islet의 상대적 보존은 끝까지 손상되지 않는다는 뜻이 아니다.',[pbr(17,'비가역적 기능장애와 반복 손상'),pbr(17,'네 가지 핵심 소견')],[813]),
        pbt('Cystic fibrosis · 췌장 침범','CFTR 관련 유전질환으로 췌장 외분비부전을 일으킬 수 있다. 소아에서 지방변·성장부진·대변 elastase 감소를 연결하고 효소 보충을 생각한다.',[pbr(20,'만성 설사의 소아 특이 감별'),pbr(17,'원인과 유전적 소인'),pbr(58,'Pancreatin과 Pancrelipase')])
      ]),
      pbt('종양·전구병변','낭성이라고 모두 양성은 아니고, 고형이라고 모두 PDAC는 아니다. 관과의 연결·점액·기질·세포 분화를 기준으로 묶는다.',[pbr(17,'감별과 연결'),pbr(19,'낭성 종양의 비교 축')],[],[
        pbt('상피성 낭성종양','SCN은 장액성 작은 낭, MCN은 ovarian-type stroma, IPMN은 췌관과 연결된 점액성 유두상 증식으로 구분한다. Pseudocyst는 이 가지에 속하지 않는다.',[pbr(17,'MCN과 IPMN의 감별'),pbr(19,'낭성 종양의 비교 축')],[173,940], [
          pbt('Serous cystic neoplasm · SCN','여러 작은 낭의 벌집·스펀지 모양과 맑은 액체, cuboidal serous lining이 특징이다. 대표적인 양성 낭성종양으로 점액성 종양과 구별한다.',[pbr(17,'Serous cystadenoma'),pbr(19,'Serous cystic neoplasm · SCN'),pbr(27,'Serous cystadenoma')]),
          pbt('Mucinous cystic neoplasm · MCN','여성·body/tail·thick mucin·ovarian-type stroma를 묶는다. 보통 췌관과 연결되지 않으며, 이형성 등급과 침윤암 동반 여부를 따로 본다.',[pbr(17,'Mucinous cystic neoplasm · MCN'),pbr(17,'이형성과 침윤'),pbr(19,'Mucinous cystic neoplasm · MCN')],[173]),
          pbt('IPMN','췌관과 연결된 점액성 유두상 종양이며 ovarian-type stroma는 없다. Fish-mouth papilla의 점액 배출과 확장된 duct 안의 papilla를 연결한다.',[pbr(17,'Intraductal papillary mucinous neoplasm · IPMN'),pbr(27,'Intraductal papillary mucinous neoplasm · IPMN'),pbr(17,'MCN과 IPMN의 감별')],[173,430,483,604,940,952], [
            pbt('Main-duct IPMN','주췌관을 침범하는 형태다. 확장된 주췌관과 유두부의 점액 배출 소견을 연결한다.',[pbr(17,'췌관과 연결된 점액성 종양'),pbr(27,'늘어난 duct와 cystic space')],[952,483]),
            pbt('Branch-duct IPMN','분지췌관을 침범하는 형태다. 낭성 병변과 췌관의 연결이 MCN을 구분하는 단서가 된다.',[pbr(17,'췌관과 연결된 점액성 종양'),pbr(17,'MCN과 IPMN의 감별')]),
            pbt('Mixed-type IPMN','주췌관과 분지췌관에 함께 관여한다. 점액성 상피의 이형성과 침윤 여부는 관의 형태 분류와 별도로 평가한다.',[pbr(17,'췌관과 연결된 점액성 종양'),pbr(17,'유두상 구조와 조직 판독')])
          ])
        ]),
        pbt('췌관 상피·췌관암','PanIN은 상피 안의 현미경적 전구병변이고 PDAC는 침윤성 선암이다. 낭성 전구병변인 MCN·IPMN과도 구분한다.',[pbr(17,'PanIN과 췌관암의 전구병변'),pbr(17,'Pancreatic ductal carcinoma')],[],[
          pbt('PanIN','현미경적 비침윤성 췌관 상피 병변이다. KRAS·p16·p53/SMAD4 등의 변화 축적을 침윤암 발생과 연결하며 high-grade도 침윤암 자체는 아니다.',[pbr(17,'Pancreatic intraepithelial neoplasia'),pbr(17,'형태 변화와 유전자 도식')]),
          pbt('췌관선암 · PDAC','단단한 회백색 침윤성 종괴와 풍부한 desmoplasia가 특징이다. 두부 병변은 폐쇄성 황달·double duct sign, 체부·미부 병변은 늦은 발견을 연결한다. 조직 확인이 필요할 때 EUS 유도 검체 획득을 생각한다.',[pbr(17,'Pancreatic ductal carcinoma'),pbr(17,'위치에 따른 증상과 진행'),pbr(19,'Pancreatic cancer와 double duct sign'),pbr(19,'췌장암의 혈관 침범과 전이'),pbr(50,'수술 후 보조치료와 전이성 치료')],[24,45,134,152,268,322,433,473,515,603,703,734,762,880,922,923])
        ]),
        pbt('다른 고형·혼합형 종양','고형 종괴 안에 출혈성 낭성변성이 있을 수 있다. SPN·acinar cell carcinoma·신경내분비종양은 PDAC와 다른 분화의 종양이다.',[pbr(17,'Solid-pseudopapillary tumor'),pbr(17,'위치에 따른 증상과 진행')],[],[
          pbt('Solid pseudopapillary neoplasm · SPN','젊은 여성의 경계 좋은 고형·출혈성 낭성 종괴다. 작은 혈관 주위에 남은 세포가 pseudopapilla를 만들며, 대체로 경과가 좋아도 완전한 양성으로 보지는 않는다.',[pbr(17,'Solid-pseudopapillary tumor'),pbr(17,'왜 pseudopapillary인가'),pbr(17,'생물학적 성격'),pbr(19,'Solid pseudopapillary tumor · SPN')],[837]),
          pbt('Acinar cell carcinoma','선방세포 분화를 보이는 췌장의 악성종양이다. 췌관 상피 분화의 PDAC, 신경내분비 분화의 pNET와 구분한다.',[pbr(17,'위치에 따른 증상과 진행')]),
          pbt('췌장 신경내분비종양 · pNET','신경분비과립·시냅스 소포 등의 신경내분비 분화가 특징이다. 과혈관성 조영증강과 간전이를 연결하며, 기능성은 호르몬 증후군으로, 비기능성은 종괴 효과로 접근한다.',[],[112,183,501,617], [
            pbt('기능성 pNET','분비 호르몬에 따라 임상 증후군이 달라진다. 수업에서 반복 연결된 gastrinoma와 VIPoma를 먼저 구분한다.',[pbr(11,'Zollinger–Ellison 증후군'),pbr(39,'삼투성·분비성 원인의 연결')],[112,183], [
              pbt('Gastrinoma · ZES','Gastrin 과다 → 위산 과다 → 반복·다발성 궤양과 설사. 췌장뿐 아니라 십이지장에도 생기며, gastrin과 위내 pH·secretin 검사를 맥락에 맞게 읽는다.',[pbr(11,'Zollinger–Ellison 증후군'),pbr(31,'언제 보통의 PUD가 아니라고 생각할까'),pbr(31,'Gastrin을 확인하고 종양을 찾는다'),pbr(25,'PPI의 임상적응증')],[160,774,919]),
              pbt('VIPoma','VIP에 의한 분비성 수양성 설사를 연결한다. 탈수·전해질 소실을 평가하고, somatostatin analogue인 octreotide의 분비 억제 작용을 떠올린다.',[pbr(39,'삼투성·분비성 원인의 연결'),pbr(42,'Somatostatin과 Octreotide'),pbr(58,'Somatostatin과 Octreotide — 분비와 혈류를 함께 낮춘다')])
            ]),
            pbt('비기능성 pNET','뚜렷한 호르몬 과다 증후군 없이 종괴의 성장·전이로 발견될 수 있다. 비기능성이라는 말이 신경내분비 분화가 없거나 양성이라는 뜻은 아니다.',[],[112,183,501,617])
          ])
        ])
      ])
    ])
  ]);

  function createTaxonomy(esophagusTree,esophagusWikiReferences,esophagusStudyNotes,namespace,storageName,title){
  // Independent expansion state; legacy quiz records are intentionally untouched.
  const esophagusBranches=new Map();
  function identifyEsophagusNode(node,id=namespace){
    node.id=id;
    if(node.children){
      esophagusBranches.set(id,node);
      node.children.forEach((child,index)=>identifyEsophagusNode(child,id+'-'+index));
    }
  }
  identifyEsophagusNode(esophagusTree,namespace);
  const esophagusStateKey='digestive-'+storageName+'-taxonomy-v1';
  let esophagusOpen=null;
  let esophagusResizeObserver=null;
  let esophagusRefreshLayout=()=>{};
  function loadEsophagusState(){
    if(esophagusOpen)return;
    esophagusOpen=new Set();
    try{
      const saved=JSON.parse(localStorage.getItem(esophagusStateKey));
      if(Array.isArray(saved))saved.forEach(id=>{if(id!==namespace&&esophagusBranches.has(id))esophagusOpen.add(id);});
    }catch(_){}
  }
  function saveEsophagusState(){
    try{localStorage.setItem(esophagusStateKey,JSON.stringify([...esophagusOpen]));}catch(_){}
  }
  function renderEsophagusTree(target,api){
    esophagusResizeObserver?.disconnect();
    loadEsophagusState();
    target.innerHTML=`<section class="em-shell" aria-label="${title} 질환 분류도"><div class="em-toolbar"><button type="button" class="em-collapse">모두 접기</button></div><div class="em-viewport" tabindex="0" role="region" aria-label="${title} 분류도 · 가로 스크롤 가능"><div class="em-tree"></div></div></section>`;
    const viewport=target.querySelector('.em-viewport');
    const controls=new Map();
    let selectedLeaf=null,referencePanel=null;
    function keepReferencesVisible(){
      if(!referencePanel?.isConnected||!viewport.clientWidth||!viewport.clientHeight)return;
      const bounds=viewport.getBoundingClientRect(),box=referencePanel.getBoundingClientRect();
      if(box.right>bounds.right-10)viewport.scrollLeft+=box.right-bounds.right+10;
      else if(box.left<bounds.left+10)viewport.scrollLeft+=box.left-bounds.left-10;
      const final=referencePanel.getBoundingClientRect();
      if(final.top<bounds.top+10)viewport.scrollTop+=final.top-bounds.top-10;
      else if(final.bottom>bounds.bottom-10)viewport.scrollTop+=final.bottom-bounds.bottom+10;
    }
    esophagusRefreshLayout=()=>requestAnimationFrame(()=>{
      keepReferencesVisible();
      const source=viewport.closest('[data-context-link-source]');
      if(!source||!referencePanel?.isConnected)return;
      const bounds=source.getBoundingClientRect(),box=referencePanel.getBoundingClientRect();
      if(box.top<bounds.top+12)source.scrollTop+=box.top-bounds.top-12;
      else if(box.bottom>bounds.bottom-12)source.scrollTop+=box.bottom-bounds.bottom+12;
    });
    function closeReferences(restoreFocus=false){
      if(selectedLeaf){
        selectedLeaf.setAttribute('aria-expanded','false');
        selectedLeaf.removeAttribute('aria-controls');
        if(restoreFocus)selectedLeaf.focus({preventScroll:true});
      }
      referencePanel?.remove();referencePanel=null;selectedLeaf=null;
    }
    function showReferences(node,label,wrap){
      if(selectedLeaf===label){closeReferences();return;}
      const before=label.getBoundingClientRect();
      closeReferences();selectedLeaf=label;
      label.setAttribute('aria-expanded','true');label.setAttribute('aria-controls','em-wiki-panel');
      const panel=document.createElement('section');referencePanel=panel;
      panel.id='em-wiki-panel';panel.className='em-wiki-panel';panel.setAttribute('aria-label',node.label+' 학습 연결');
      const head=document.createElement('div');head.className='em-wiki-head';
      const title=document.createElement('strong');title.textContent=node.label;
      const close=document.createElement('button');close.type='button';close.textContent='×';close.setAttribute('aria-label','학습 연결 닫기');close.onclick=()=>closeReferences(true);
      head.append(title,close);panel.append(head);
      const list=document.createElement('div');list.className='em-wiki-list';panel.append(list);
      const note=esophagusStudyNotes[node.label];
      if(note?.clue){const clue=document.createElement('p');clue.className='em-clue';clue.textContent=note.clue;list.append(clue);}
      const domains={6:'병리·형태',15:'생리·기전',18:'진단·치료',33:'진단·치료',55:'수술·합병증',59:'진단·치료',16:'병리·형태',17:'병리·형태',26:'병리·형태',27:'병리·형태',19:'진단·치료',44:'진단·치료',45:'진단·치료',47:'진단·치료',48:'진단·치료',49:'진단·치료',51:'진단·치료',52:'진단·치료',53:'진단·치료',54:'진단·치료',58:'약물',34:'수술·합병증',50:'약물',60:'수술·합병증',41:'생리·기전',12:'병리·형태',14:'병리·형태',23:'진단·치료',28:'진단·치료',29:'진단·치료',30:'진단·치료',39:'진단·치료',40:'진단·치료',42:'약물',43:'수술·합병증',4:'생리·기전',11:'병리·형태',22:'진단·치료',25:'약물',31:'진단·치료',32:'진단·치료',36:'진단·치료',56:'수술·합병증',5:'생리·기전',10:'병리·형태',13:'병리·형태',20:'소아',21:'소아',35:'진단·치료',37:'수술·합병증',38:'생리·기전'};
      const refs=esophagusWikiReferences[node.label]||[];
      const seen=new Set(),groups=new Map();
      refs.forEach(ref=>{
        const resolved=api?.resolveWikiReference?.(ref.courseId,ref.heading);
        const key=ref.courseId+':'+(resolved?.slug||ref.heading);
        if(seen.has(key))return;seen.add(key);
        const link=document.createElement(resolved?'a':'div');
        link.className=resolved?'em-wiki-link wiki-link':'em-wiki-unavailable';
        if(resolved){
          link.href='#lecture-'+resolved.courseId;
          link.dataset.wikiCourse=String(resolved.courseId);link.dataset.wikiSection=resolved.slug;
        }
        const meta=document.createElement('span');meta.className='em-wiki-meta';
        meta.textContent=ref.courseId+'강';
        const name=document.createElement('span');name.textContent=resolved?.heading||ref.heading;
        link.append(meta,name);
        if(!resolved){const note=document.createElement('small');note.textContent='문단 확인 필요';link.append(note);}
        const domain=domains[ref.courseId]||'Wiki';
        if(!groups.has(domain)){
          const group=document.createElement('section');group.className='em-ref-group';
          const heading=document.createElement('h3');heading.textContent=domain;group.append(heading);groups.set(domain,group);
        }
        groups.get(domain).append(link);
      });
      ['병리·형태','생리·기전','진단·치료','소아','수술·합병증','약물','Wiki'].forEach(domain=>{if(groups.has(domain))list.append(groups.get(domain));});
      const validQuestions=new Map((api?.questions||[]).map(q=>[Number(q.globalNumber),q]));
      const numbers=(note?.questions||[]).filter(n=>validQuestions.has(n));
      if(numbers.length){
        const group=document.createElement('section');group.className='em-ref-group';
        const heading=document.createElement('h3');heading.textContent='관련 J';group.append(heading);
        const links=document.createElement('div');links.className='em-j-links';
        numbers.forEach(number=>{
          const link=document.createElement('a');link.className='jbl-question-link';link.href='#jbl-q-'+number;
          link.dataset.jblQuestionLink=String(number);link.textContent=number+'번';
          link.title=validQuestions.get(number).question||number+'번 문항';links.append(link);
        });group.append(links);list.append(group);
      }
      // Keep details beside the selected node, not beyond all of its descendants.
      wrap.insertBefore(panel,wrap.querySelector(':scope > .em-children'));
      const after=label.getBoundingClientRect();
      viewport.scrollTop+=after.top-before.top;viewport.scrollLeft+=after.left-before.left;
      keepReferencesVisible();
    }
    function createNode(node,depth=0){
      const wrap=document.createElement('div');
      wrap.className='em-node'+(depth===0?' em-root':'')+(node.children?'':' em-terminal');
      const label=document.createElement(depth>0?'button':'span');
      label.className='em-label'+(node.children?' em-branch':' em-leaf');
      const text=document.createElement('span');text.textContent=node.label;label.append(text);
      const nodeHead=document.createElement('div');nodeHead.className='em-node-head';nodeHead.append(label);wrap.append(nodeHead);
      if(!node.children){
        label.type='button';label.setAttribute('aria-expanded','false');label.dataset.emLeaf=node.id;
        const symbol=document.createElement('span');symbol.className='em-symbol';symbol.textContent='›';symbol.setAttribute('aria-hidden','true');label.append(symbol);
        label.onclick=()=>showReferences(node,label,wrap);
        return wrap;
      }
      const info=document.createElement('button');info.type='button';info.className='em-info';info.textContent='i';
      info.dataset.emInfo=node.id;info.setAttribute('aria-label',node.label+' 학습 연결');info.title=node.label+' 학습 연결';
      info.setAttribute('aria-expanded','false');info.onclick=()=>showReferences(node,info,wrap);nodeHead.append(info);
      const children=document.createElement('div');children.className='em-children';children.id='em-children-'+node.id;
      children.setAttribute('role','group');children.setAttribute('aria-label',node.label+' 하위 분류');
      node.children.forEach(child=>children.append(createNode(child,depth+1)));
      wrap.append(children);
      if(depth===0)return wrap;
      label.type='button';label.dataset.emNode=node.id;
      label.setAttribute('aria-controls',children.id);
      const symbol=document.createElement('span');symbol.className='em-symbol';symbol.setAttribute('aria-hidden','true');label.append(symbol);
      function update(){
        const expanded=esophagusOpen.has(node.id);
        children.hidden=!expanded;label.setAttribute('aria-expanded',String(expanded));symbol.textContent=expanded?'−':'+';
      }
      controls.set(node.id,update);update();
      label.addEventListener('click',()=>{
        const before=label.getBoundingClientRect();
        if(esophagusOpen.has(node.id)){
          if(selectedLeaf&&wrap.contains(selectedLeaf))closeReferences();
          // Closing a branch resets its descendants for another step-by-step pass.
          [...esophagusOpen].forEach(id=>{if(id===node.id||id.startsWith(node.id+'-'))esophagusOpen.delete(id);});
          controls.forEach((refresh,id)=>{if(id===node.id||id.startsWith(node.id+'-'))refresh();});
        }else{esophagusOpen.add(node.id);update();}
        saveEsophagusState();
        const after=label.getBoundingClientRect();
        viewport.scrollTop+=after.top-before.top;
        viewport.scrollLeft+=after.left-before.left;
        // Keep the selected parent and at least the next column together in view.
        if(esophagusOpen.has(node.id)){
          const bounds=viewport.getBoundingClientRect();
          const next=children.firstElementChild?.firstElementChild?.getBoundingClientRect();
          const parent=label.getBoundingClientRect();
          if(next&&next.right>bounds.right-14){
            const shift=Math.min(next.right-bounds.right+14,Math.max(0,parent.left-bounds.left-14));
            viewport.scrollLeft+=shift;
          }
        }
      });
      return wrap;
    }
    target.querySelector('.em-tree').append(createNode(esophagusTree));
    target.querySelector('.em-shell').addEventListener('keydown',event=>{
      if(event.key==='Escape'&&referencePanel){event.preventDefault();event.stopPropagation();closeReferences(true);}
    });
    // Opening a Wiki halves the source pane. Keep the selected link list visible
    // instead of stranding it outside the newly narrowed MAP viewport.
    if(typeof ResizeObserver!=='undefined'){
      esophagusResizeObserver=new ResizeObserver(()=>keepReferencesVisible());
      esophagusResizeObserver.observe(viewport);
    }
    target.querySelector('.em-collapse').onclick=()=>{
      closeReferences();
      esophagusOpen.clear();controls.forEach(refresh=>refresh());saveEsophagusState();
      viewport.scrollTop=0;viewport.scrollLeft=0;
    };
  }

    return {render:renderEsophagusTree,disconnect:()=>esophagusResizeObserver?.disconnect(),refreshLayout:()=>esophagusRefreshLayout()};
  }
  const taxonomies={10:createTaxonomy(esophagusTree,esophagusWikiReferences,esophagusStudyNotes,'es','esophagus','식도'),11:createTaxonomy(stomachTree,stomachWikiReferences,stomachStudyNotes,'st','stomach','위'),12:createTaxonomy(intestineTree,intestineWikiReferences,intestineStudyNotes,'in','intestine','장'),16:createTaxonomy(liverTree,liverWikiReferences,liverStudyNotes,'li','liver','간'),17:createTaxonomy(pancreatobiliaryTree,pancreatobiliaryWikiReferences,pancreatobiliaryStudyNotes,'pb','pancreatobiliary','담췌')};
  let activeTaxonomy=null;

  const controllers = new Map();
  function render(target,api) {
    const id=Number(api.courseId || 10);
    if(!decks[id]&&!taxonomies[id]) {target.textContent='이 강의의 MAP은 아직 준비되지 않았습니다.';return;}
    activeTaxonomy?.disconnect();
    activeTaxonomy=taxonomies[id]||null;
    if(activeTaxonomy){activeTaxonomy.render(target,api);return;}
    if(!controllers.has(id))controllers.set(id,createDeck(decks[id]));
    controllers.get(id).render(target,api);
  }
  function conceptId(courseId,nodeId) {
    const deck=decks[courseId];
    return deck?.data.some(g=>g.nodes.some(n=>n.id===nodeId)) ? 'pathology:'+deck.namespace+':'+nodeId : null;
  }
  return {data,decks,esophagusTree,esophagusWikiReferences,esophagusStudyNotes,stomachTree,stomachWikiReferences,stomachStudyNotes,intestineTree,intestineWikiReferences,intestineStudyNotes,liverTree,liverWikiReferences,liverStudyNotes,pancreatobiliaryTree,pancreatobiliaryWikiReferences,pancreatobiliaryStudyNotes,refreshLayout:()=>activeTaxonomy?.refreshLayout(),matches,render,conceptId,supports:id=>!!(decks[id]||taxonomies[id]),exportSource:()=> 'window.PATHOLOGY_MAP = ('+createPathologyMap.toString()+')();\n'};
})();
