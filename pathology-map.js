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
      const domains={12:'병리·형태',14:'병리·형태',23:'진단·치료',28:'진단·치료',29:'진단·치료',30:'진단·치료',39:'진단·치료',40:'진단·치료',42:'약물',43:'수술·합병증',4:'생리·기전',11:'병리·형태',22:'진단·치료',25:'약물',31:'진단·치료',32:'진단·치료',36:'진단·치료',56:'수술·합병증',5:'생리·기전',10:'병리·형태',13:'병리·형태',20:'소아',21:'소아',35:'진단·치료',37:'수술·합병증',38:'생리·기전'};
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
  const taxonomies={10:createTaxonomy(esophagusTree,esophagusWikiReferences,esophagusStudyNotes,'es','esophagus','식도'),11:createTaxonomy(stomachTree,stomachWikiReferences,stomachStudyNotes,'st','stomach','위'),12:createTaxonomy(intestineTree,intestineWikiReferences,intestineStudyNotes,'in','intestine','장')};
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
  return {data,decks,esophagusTree,esophagusWikiReferences,esophagusStudyNotes,stomachTree,stomachWikiReferences,stomachStudyNotes,intestineTree,intestineWikiReferences,intestineStudyNotes,refreshLayout:()=>activeTaxonomy?.refreshLayout(),matches,render,conceptId,supports:id=>!!(decks[id]||taxonomies[id]),exportSource:()=> 'window.PATHOLOGY_MAP = ('+createPathologyMap.toString()+')();\n'};
})();
