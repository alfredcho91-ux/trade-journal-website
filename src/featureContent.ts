import type { Language } from './content';

type Feature = {
  id: string;
  name: string;
  question: string;
  copy: string;
  actions: string[];
  takeaway: string;
};

type FeatureContent = {
  title: string;
  intro: string;
  groups: { id: string; title: string; copy: string; features: Feature[] }[];
};

export const featureContent: Record<Language, FeatureContent> = {
  ko: {
    title: '내 거래를 이해하는 데 필요한 기능들.',
    intro: '기록을 모으고, 전략과 실행을 검토하고, 다음 행동 변화를 측정하세요. 지금 확인하고 싶은 질문부터 살펴보면 됩니다.',
    groups: [
      {
        id: 'record', title: '기록하기', copy: '거래 결과에 당시의 판단과 전략을 함께 남깁니다.',
        features: [
          {
            id: 'sync', name: '거래소 연결', question: '거래 내역을 매번 직접 옮겨야 하나요?',
            copy: 'Deepcoin SWAP과 Binance의 읽기 전용 연결로 종료 거래를 가져옵니다. 기록을 옮기는 작업을 줄이고 복기할 데이터를 모을 수 있습니다.',
            actions: ['읽기 전용 API로 거래소 연결', '첫 연결 성공 시 최근 30일 종료 거래 가져오기', '이후 앱에서 동기화해 기록 갱신'],
            takeaway: '가져온 기록은 내 컴퓨터의 SQLite에 저장됩니다. 동기화에는 인터넷 연결이 필요하며 주문·취소·출금은 실행하지 않습니다.',
          },
          {
            id: 'journal', name: '매매일지', question: '무엇을 거래했고, 어떤 생각으로 진입했나요?',
            copy: '종료 거래의 결과와 내가 남긴 계획·태그·복기 기록을 함께 봅니다. 손익 숫자만으로는 기억하기 어려운 거래의 맥락을 남기는 곳입니다.',
            actions: ['기간별 거래와 성과 확인', '진입 유형과 실수 태그 등 복기 기록 추가', '거래에 실제 사용한 전략 버전 연결'],
            takeaway: '나중에 전략이나 행동별 결과를 비교할 수 있도록, 각 거래에 판단의 근거를 남깁니다.',
          },
          {
            id: 'playbook', name: '전략 플레이북', question: '전략을 고치기 전과 후의 거래를 구분하고 싶나요?',
            copy: '진입·리스크·청산 규칙을 전략으로 정리하고 버전으로 보존합니다. 각 거래에는 실제 사용한 버전을 연결해 당시의 기준으로 돌아볼 수 있습니다.',
            actions: ['전략과 진입·리스크·청산 규칙 작성', '규칙 변경을 새 버전으로 기록', '저널에서 거래별 전략 버전 선택'],
            takeaway: '현재 규칙과 과거에 적용한 규칙이 섞이지 않아, 어떤 기준으로 거래했는지 명확해집니다.',
          },
        ],
      },
      {
        id: 'review', title: '전략·실행 복기하기', copy: '결과를 보고, 그 결과를 만든 거래와 실행 기록을 다시 확인합니다.',
        features: [
          {
            id: 'rules', name: '규칙 준수 분석', question: '수익은 났지만, 내가 정한 규칙도 지켰나요?',
            copy: '거래에 연결한 전략 규칙을 기록된 사실과 대조합니다. 수익·손실과 별도로 실행 과정을 검토할 수 있습니다.',
            actions: ['진입·리스크·청산별 규칙 결과 확인', '준수·위반·판정 불가와 그 이유 확인', '판정 가능한 규칙의 비율과 준수율 함께 검토'],
            takeaway: '필요한 계획이나 지표가 없으면 판정 불가로 표시합니다. 정보 부족을 준수 또는 위반으로 단정하지 않습니다.',
          },
          {
            id: 'analytics', name: '분석 작업공간 · 패턴 분석', question: '특정 전략이나 장세에서 결과가 반복되나요?',
            copy: '성과 지표를 전략·규칙·장세·진입 유형 등의 조건으로 비교합니다. 전체 평균에 가려진 차이를 살펴보고 근거 거래로 내려가 확인할 수 있습니다.',
            actions: ['보고 싶은 지표와 비교 조건 선택', '표본 수와 데이터 부족 여부 함께 확인', '패턴 후보와 실제 거래를 연결해 검토'],
            takeaway: '관찰된 차이는 다음 복기의 출발점입니다. 작은 표본이나 단순한 연관성을 미래 성과의 보장으로 해석하지 않습니다.',
          },
          {
            id: 'diagnosis', name: '거래 복기 · 전략과 실행', question: '전략을 바꿀까요, 실행 습관부터 살펴볼까요?',
            copy: '기간 성과와 전략·실행 근거를 함께 검토합니다. 전략의 관찰된 결과와 규칙 준수 같은 실행 근거를 나누어 다음에 확인할 문제를 좁힙니다.',
            actions: ['기간별 성과·전략·실행 요약 확인', '패턴과 전략·실행 진단의 근거 검토', '발견한 문제를 행동 실험으로 연결'],
            takeaway: '근거가 부족하거나 서로 충돌하면 결론을 유보합니다. 손실 원인을 확정하는 진단은 아닙니다.',
          },
        ],
      },
      {
        id: 'improve', title: '계획하고 측정하기', copy: '바꿀 행동과 비교 기준을 정해 두고, 다음 기록에서 다시 확인합니다.',
        features: [
          {
            id: 'plan', name: '계획 분석', question: '계획한 손절과 목표를 실제로 지켰나요?',
            copy: '손절·목표가·최대 보유시간을 기록하고 실제 실행과 비교합니다. 거래가 끝난 뒤 기억에 의존하기보다 저장한 계획으로 복기할 수 있습니다.',
            actions: ['확인된 진행중 포지션에 계획 기록', '종료 거래의 계획과 실제 실행 비교', '계획과 달라진 지점을 확인해 다음 복기에 반영'],
            takeaway: '거래 전 계획과 진행중 기록, 종료 후 회고 입력을 구분합니다. 회고로 입력한 계획을 거래 전부터 알고 있던 계획처럼 취급하지 않습니다.',
          },
          {
            id: 'experiments', name: '실험 · 측정', question: '행동을 바꾼 뒤 기록에서 어떤 차이가 나타났나요?',
            copy: '관찰한 문제를 가설로 정리하고 기준 기간·측정 지표·판정 조건을 정합니다. 측정 화면에서 이전 기간과 비교해 다음 행동을 검토합니다.',
            actions: ['패턴이나 진단에서 실험 초안 만들기', '가설·기준·최소 표본 등 측정 조건 고정', '같은 지표로 비교 결과와 근거 부족 여부 확인'],
            takeaway: '결과를 본 뒤 기준을 바꾸지 않고 변화를 검토합니다. 비교 결과만으로 행동 변화가 수익 개선의 원인이라고 증명할 수는 없습니다.',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Tools to understand your own trades.',
    intro: 'Collect your records, review strategy and execution, then measure the next behavior change. Start with the question you want to answer.',
    groups: [
      {
        id: 'record', title: 'Keep a record', copy: 'Keep the decision and strategy alongside the result.',
        features: [
          {
            id: 'sync', name: 'Exchange connections', question: 'Do I have to copy every trade by hand?',
            copy: 'Import closed trades through read-only Deepcoin SWAP and Binance connections. Spend less time transferring records and gather the data for your review.',
            actions: ['Connect with read-only API access', 'Import the recent 30 days after the first successful connection', 'Run sync in the app to refresh your records'],
            takeaway: 'Imported records are stored in SQLite on your computer. Sync needs an internet connection; the app does not place orders, cancel them, or withdraw funds.',
          },
          {
            id: 'journal', name: 'Trade Journal', question: 'What did I trade, and what was I thinking?',
            copy: 'Review closed-trade results alongside your plans, tags, and notes. Preserve the context that a profit or loss figure alone cannot explain.',
            actions: ['Review trades and performance by period', 'Add review notes such as setup and mistake tags', 'Assign the strategy version actually used'],
            takeaway: 'Keep the reasoning with each trade so you can later compare results by strategy or recorded behavior.',
          },
          {
            id: 'playbook', name: 'Strategy Playbook', question: 'How do I separate trades before and after a rule change?',
            copy: 'Write entry, risk, and exit rules and preserve them as strategy versions. Link the version actually used to each trade to review it against the right criteria.',
            actions: ['Write a strategy and its entry, risk, and exit rules', 'Record changes as a new version', 'Select the strategy version for each journal trade'],
            takeaway: 'Keep current rules distinct from the rules applied to past trades.',
          },
        ],
      },
      {
        id: 'review', title: 'Review strategy and execution', copy: 'Inspect the result, then return to the trades and process evidence behind it.',
        features: [
          {
            id: 'rules', name: 'Rule adherence', question: 'The trade made money. Did I also follow my rules?',
            copy: 'Compare assigned strategy rules against recorded facts. Review the process separately from whether the trade won or lost.',
            actions: ['Check entry, risk, and exit rule results', 'See followed, violated, or not-evaluable outcomes and their reasons', 'Review evaluable coverage alongside adherence'],
            takeaway: 'Missing plans or metrics produce a not-evaluable result. Missing information is not treated as compliance or a violation.',
          },
          {
            id: 'analytics', name: 'Analytics Workspace · Patterns', question: 'Do results repeat in a particular strategy or market?',
            copy: 'Compare performance metrics by strategy, rule, regime, setup, and other dimensions. Explore differences hidden by the overall average and inspect supporting trades.',
            actions: ['Select a metric and comparison dimension', 'Check sample counts and unavailable data', 'Review pattern candidates alongside the actual trades'],
            takeaway: 'Observed differences are a starting point for review. Small samples and associations do not guarantee future performance.',
          },
          {
            id: 'diagnosis', name: 'Trading Review · Strategy vs Execution', question: 'Should I revisit the strategy or my execution habits?',
            copy: 'Review period performance alongside strategy and execution evidence. Separate observed strategy outcomes from process evidence such as rule adherence to narrow down what to inspect next.',
            actions: ['Review period performance, strategy, and execution summaries', 'Inspect the evidence behind patterns and diagnoses', 'Turn a finding into a behavior experiment'],
            takeaway: 'Insufficient or conflicting evidence leaves the diagnosis inconclusive. It does not establish the cause of a loss.',
          },
        ],
      },
      {
        id: 'improve', title: 'Plan and measure', copy: 'Choose the behavior and comparison criteria, then revisit them in your next records.',
        features: [
          {
            id: 'plan', name: 'Plan Lab', question: 'Did I follow the stop and targets I planned?',
            copy: 'Record stops, targets, and maximum holding time, then compare the plan with execution. Review the saved plan rather than relying on memory after the trade closes.',
            actions: ['Record a plan for a verified open position', 'Compare closed-trade plans with actual execution', 'Inspect deviations to inform the next review'],
            takeaway: 'Pre-trade plans, in-trade records, and retrospective entries remain distinct. A retrospective plan is not treated as one known before entry.',
          },
          {
            id: 'experiments', name: 'Experiments · Measure', question: 'What changed in my records after I changed a behavior?',
            copy: 'Turn an observed issue into a hypothesis and define the baseline, metric, and decision criteria. Compare against the baseline in Measure to review your next action.',
            actions: ['Create a draft from a pattern or diagnosis', 'Lock the hypothesis, baseline, and minimum sample criteria', 'Compare the same metric and check for insufficient evidence'],
            takeaway: 'Review change without moving the criteria after seeing the result. The comparison does not prove that the behavior caused an improvement in profit.',
          },
        ],
      },
    ],
  },
};
