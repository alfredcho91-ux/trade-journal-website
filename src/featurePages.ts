export const featurePages = [
  {
    "slug": "journal",
    "featureId": "journal",
    "related": [
      "strategy-playbook",
      "review"
    ],
    "ko": {
      "title": "매매일지 · 거래 맥락을 남기는 저널",
      "description": "거래 내역에 메모, 진입 유형, 심리·행동 기록과 전략 버전을 연결하고 규칙 준수를 복기하세요.",
      "capabilities": [
        [
          "거래 내역과 맥락",
          "종료 거래의 종목·방향·진입·청산·성과를 확인하고 당시 판단을 메모합니다."
        ],
        [
          "진입 유형과 행동 기록",
          "진입 유형·실수 태그, 추격 진입·보복 매매 같은 행동을 직접 기록해 반복되는 상황을 검토합니다."
        ],
        [
          "심리 기록",
          "거래 전·중·후 감정, 자신감과 집중도를 남깁니다. 앱이 감정이나 동기를 추측하지 않습니다."
        ],
        [
          "전략 연결과 규칙 복기",
          "실제 사용한 플레이북 버전을 연결하고 규칙 준수·위반·판정 불가의 근거를 확인합니다."
        ]
      ],
      "steps": [
        [
          "종료 거래를 엽니다",
          "매매일지에서 복기할 종료 거래를 고르고 ‘거래 리포트’를 엽니다. 종목·방향·진입·청산·성과와 차트를 먼저 확인합니다."
        ],
        [
          "계획을 기록합니다",
          "계획 손절률 (%)·계획 목표수익률 (%)과 계획 진입 근거를 입력하고 진입 유형 태그를 쉼표로 구분해 적습니다. 이 값은 사용자가 남기는 거래 설명이지 전략의 출처가 아닙니다."
        ],
        [
          "심리와 행동을 남깁니다",
          "심리 영역에서 거래 전·중·후 상태와 자신감·집중도를, 행동 영역에서 추격 진입·보복 매매와 실수 태그를 기록합니다. 메모 영역에는 추가 내용을 남깁니다."
        ],
        [
          "행동 기록을 저장합니다",
          "‘행동 기록 저장’을 눌러 계획·심리·행동·메모 변경을 저장합니다. 저장 상태가 완료된 뒤 다음 항목으로 이동합니다."
        ],
        [
          "전략 버전을 할당합니다",
          "전략 할당 영역에서 ‘전략 할당’을 누르고 실제 사용한 전략과 버전을 선택한 뒤 ‘전략 저장’을 누릅니다. 이것이 당시 전략 기준의 출처입니다."
        ],
        [
          "규칙 판정을 읽습니다",
          "규칙 준수 영역에서 준수는 확인된 충족, 위반은 평가 가능한 조건의 미충족, 판정 불가는 필요한 근거가 없거나 자동 평가할 수 없음을 뜻합니다. 준수율은 평가 가능한 규칙 중 준수 비율이고 평가 범위는 전체 규칙 중 평가 가능한 비율입니다."
        ],
        [
          "누적 기록으로 이동합니다",
          "개별 거래의 설명·전략 출처·규칙 판정을 확인한 뒤 분석 작업공간에서 조건별 기록을 비교하거나 거래 복기에서 기간 단위 근거를 검토합니다."
        ]
      ],
      "example": "예: 이익으로 끝난 거래라도 ‘추격 진입’으로 기록했다면, 이후 분석 작업공간에서 해당 행동과 결과의 연관성을 따로 살펴볼 수 있습니다.",
      "connection": "저널은 제품의 바탕입니다. 플레이북의 기준을 거래에 연결하고, 쌓인 기록을 분석 작업공간과 거래 복기에서 검토합니다.",
      "screenshot": "거래 상세의 메모·진입 유형·심리 기록과 전략 할당·규칙 결과"
    },
    "en": {
      "title": "Trade Journal · Keep the context",
      "description": "Connect trade history with notes, setup tags, psychology, behavior, strategy versions, and rule-adherence evidence.",
      "capabilities": [
        [
          "History and context",
          "Review symbol, direction, entry, exit, and performance beside notes on your decision."
        ],
        [
          "Setup and behavior",
          "Record setup and mistake tags, FOMO, and revenge trading yourself to review recurring situations."
        ],
        [
          "Psychology",
          "Record emotions before, during, and after the trade, plus confidence and focus. The app does not infer emotions or motives."
        ],
        [
          "Strategy and rules",
          "Assign the Playbook version actually used and inspect followed, violated, and not-evaluable results."
        ]
      ],
      "steps": [
        [
          "Open a closed trade",
          "Choose a closed trade in Journal and open Trade report. Review its symbol, direction, entry, exit, performance, and chart first."
        ],
        [
          "Record the PLAN",
          "Enter Planned stop (%), Planned target (%), and Planned entry rationale, then type comma-separated Setup tags. These are user-recorded descriptions, not strategy provenance."
        ],
        [
          "Add psychology and behavior",
          "Use PSYCHOLOGY for before, during, and after states plus confidence and focus. Use BEHAVIOR for FOMO, revenge trading, and Mistake tags; add context under NOTES."
        ],
        [
          "Save the behavior journal",
          "Select Save behavior journal to persist PLAN, PSYCHOLOGY, BEHAVIOR, and NOTES changes. Wait for the saved state before moving on."
        ],
        [
          "Assign the Strategy Version",
          "Under Strategy Assignment, select Assign Strategy, choose the Strategy and Version actually used, then select Save Strategy. This records the strategy provenance for that trade."
        ],
        [
          "Read rule evaluation",
          "In Rule Adherence, FOLLOWED means confirmed compliance, VIOLATED means an evaluable condition was not met, and NOT_EVALUABLE means required evidence or an evaluator is unavailable. Adherence is the followed share of evaluable rules; Coverage is the evaluable share of all rules."
        ],
        [
          "Continue with accumulated records",
          "After reviewing the trade description, strategy provenance, and rule evidence, compare recorded conditions in Analytics or examine period evidence in Trading Review."
        ]
      ],
      "example": "Example: a winning trade tagged as a FOMO entry can later be reviewed in Analytics for its association with outcomes.",
      "connection": "Journal is the foundation: link Playbook criteria to individual trades, then review accumulated records in Analytics and Trading Review.",
      "screenshot": "Trade detail with notes, setup, psychology, strategy assignment, and rule results"
    }
  },
  {
    "slug": "strategy-playbook",
    "featureId": "playbook",
    "related": [
      "journal",
      "analytics"
    ],
    "ko": {
      "title": "전략 플레이북 · 당시의 전략으로 복기하기",
      "description": "재사용할 전략과 수정 불가능한 과거 버전을 보존하고, 기록된 사실로 규칙 준수와 평가 가능 범위를 확인하세요.",
      "capabilities": [
        [
          "재사용할 전략",
          "진입·리스크·청산 기준을 한 전략에 모아 여러 거래에 같은 기준을 적용합니다."
        ],
        [
          "변경되지 않는 과거 버전",
          "규칙을 바꾸면 새 전략 버전을 만듭니다. 과거 버전과 거래의 연결은 당시 기준의 출처를 보존합니다."
        ],
        [
          "명확한 규칙 판정",
          "자동 평가가 지원되는 규칙을 기록된 사실과 대조해 준수, 위반, 판정 불가로 구분합니다."
        ],
        [
          "준수율과 평가 범위",
          "판정 가능한 규칙의 준수율과 전체 규칙 중 평가 가능한 범위를 함께 봅니다. 계획·지표가 없거나 자동 평가가 불가능한 규칙을 위반으로 처리하지 않습니다."
        ]
      ],
      "steps": [
        [
          "전략을 만듭니다",
          "플레이북에서 ‘새 전략’을 누르고 전략 이름·설명, 초기 버전 라벨·설명을 입력합니다. 새 전략과 첫 전략 버전이 함께 생성됩니다."
        ],
        [
          "규칙을 정의합니다",
          "진입 규칙·리스크 규칙·청산 규칙에서 ‘규칙 추가’를 누르고 조건을 작성합니다. 지원되는 평가 조건을 설정한 뒤 ‘전략 생성’으로 저장합니다."
        ],
        [
          "버전 상태를 관리합니다",
          "버전 기록에서 현재 버전과 활성·비활성·은퇴 상태를 확인합니다. 사용할 정의는 ‘활성화’하고 더 이상 사용할 버전은 ‘은퇴’시킵니다."
        ],
        [
          "변경은 새 버전으로 남깁니다",
          "‘새 버전’을 누르고 기준 버전 또는 빈 규칙 세트를 선택한 뒤 새 버전 라벨·설명·규칙을 저장합니다. 기존 버전 정의는 읽기 전용으로 유지됩니다."
        ],
        [
          "거래에 정확한 버전을 연결합니다",
          "매매일지의 전략 할당 영역에서 당시 사용한 전략 버전을 선택합니다. 이후 새 버전을 활성화해도 과거 거래의 할당은 바뀌지 않습니다."
        ],
        [
          "규칙 엔진 결과를 검토합니다",
          "규칙 준수 기능은 거래에 할당된 그 전략 버전의 규칙을 저장된 사실과 비교합니다. 근거가 있으면 준수 또는 위반, 부족하면 판정 불가로 남습니다."
        ]
      ],
      "example": "예: 최대 보유시간을 바꿨다면 새 버전을 만듭니다. 이전 거래는 이전 버전에 연결된 상태로 남아 당시 기준으로 복기할 수 있습니다.",
      "connection": "‘따르려던 전략’은 플레이북에, ‘실제로 한 일’은 저널에 남깁니다. 분석 작업공간과 거래 복기가 두 기록을 함께 검토하도록 연결합니다.",
      "screenshot": "전략 버전 목록과 진입·리스크·청산 규칙, 세 가지 판정 상태"
    },
    "en": {
      "title": "Strategy Playbook · Review the strategy you used",
      "description": "Preserve reusable strategies and immutable historical versions; evaluate rule adherence and coverage from recorded facts.",
      "capabilities": [
        [
          "Reusable strategies",
          "Keep entry, risk, and exit criteria together and apply the same strategy across trades."
        ],
        [
          "Immutable historical versions",
          "Rule changes create a new Strategy Version. Historical versions and trade assignments preserve the source of the original criteria."
        ],
        [
          "Deterministic evaluation",
          "Supported rules compare recorded facts and return FOLLOWED, VIOLATED, or NOT_EVALUABLE."
        ],
        [
          "Adherence and coverage",
          "Review adherence among evaluable rules alongside the share that can be evaluated. Missing plans, metrics, or unsupported evaluators do not count as violations."
        ]
      ],
      "steps": [
        [
          "Create a Strategy",
          "Select New Strategy in Playbook and enter Strategy name, Strategy description, Initial version label, and Version description. The Strategy and its first Strategy Version are created together."
        ],
        [
          "Define the rules",
          "Use Add rule under Entry rules, Risk rules, and Exit rules, then enter each criterion and any supported evaluation condition. Select Create Strategy to save it."
        ],
        [
          "Manage version states",
          "In Version History, inspect the current version and its ACTIVE, INACTIVE, or RETIRED state. Use Activate for the definition you intend to use and Retire when a version is no longer current."
        ],
        [
          "Record changes in a new version",
          "Select New Version, choose a Based on version or Empty rule set, and save a new label, description, and rules. Existing version definitions remain read-only."
        ],
        [
          "Assign the exact version to trades",
          "In Journal, use Strategy Assignment to select the Strategy Version that applied to the trade. Activating a later version does not rewrite historical assignments."
        ],
        [
          "Review Rule Engine results",
          "Rule Adherence evaluates saved facts against the rules in that assigned Strategy Version. Supported evidence returns FOLLOWED or VIOLATED; unavailable evidence remains NOT_EVALUABLE."
        ]
      ],
      "example": "Example: change the maximum holding time in a new version. Earlier trades stay linked to the old version for review against their original criteria.",
      "connection": "Playbook captures the intended strategy; Journal captures recorded execution. Analytics and Trading Review help examine the two together.",
      "screenshot": "Strategy versions, entry/risk/exit rules, and the three evaluation states"
    }
  },
  {
    "slug": "analytics",
    "featureId": "analytics",
    "related": [
      "review",
      "experiments"
    ],
    "ko": {
      "title": "분석 작업공간 · 기록에서 패턴 찾기",
      "description": "전략·진입 유형·심리·종목·방향·시간·규칙별 지표를 비교하고 필터와 표본 수를 함께 살펴보세요.",
      "capabilities": [
        [
          "성과와 전략 비교",
          "손익·수익률 등 지원 지표를 전략과 전략 버전별로 비교합니다."
        ],
        [
          "진입 유형과 심리 분석",
          "사용자가 남긴 진입 유형, 감정, 자신감·집중도와 행동 기록을 조건으로 결과를 살펴봅니다."
        ],
        [
          "종목·방향·시간 필터",
          "대상 거래와 비교 범위를 선택합니다. 요일·시간대 분석은 종료 시각 기준을 확인하며 해석합니다."
        ],
        [
          "규칙과 패턴 탐색",
          "준수 여부별 차이와 패턴 후보를 탐색하고, 표본 수·평가 불가 데이터를 함께 확인합니다."
        ]
      ],
      "steps": [
        [
          "분석 영역을 고릅니다",
          "매매분석의 분석 작업공간에서 패턴 탐색, 전략, 심리, 규칙, 시간 중 질문에 맞는 영역을 선택합니다."
        ],
        [
          "지표와 분류 기준을 선택합니다",
          "지표에서 볼 값을, 분류 기준에서 전략·전략 버전·진입 유형·심리·종목·방향·규칙 결과 같은 지원 그룹을 선택합니다."
        ],
        [
          "기간과 필터를 설정합니다",
          "필수 시작 시각·종료 시각을 입력하고 필터를 펼쳐 기록된 조건이나 정확한 전략 버전을 좁힙니다. 시간 분석은 화면에 표시된 청산 시각과 협정 세계시 기준을 따릅니다."
        ],
        [
          "분석을 실행합니다",
          "‘분석 실행’을 눌러 현재 지표·분류 기준·필터 조합을 제출합니다. 설정을 바꾸면 다시 실행해야 새 범위가 결과에 반영됩니다."
        ],
        [
          "요약과 그룹 결과를 읽습니다",
          "선택 거래 수와 각 그룹의 값, 전체 표본, 평가 가능, 사용 불가 수를 함께 봅니다. 표·막대 비교 또는 시간 추이와 ‘값순 정렬’로 표시 방식을 바꿀 수 있습니다."
        ],
        [
          "표본과 규칙 근거를 해석합니다",
          "표본 부족·평가 가능한 표본 없음·사용 불가 이유를 확인합니다. 준수율은 평가 가능한 규칙 중 준수 비율이고 평가 범위는 전체 규칙 중 평가 가능한 비율이므로 서로 바꾸어 해석하지 않습니다."
        ],
        [
          "관찰을 다음 복기로 넘깁니다",
          "결과는 이 표본에서 관찰된 역사적 연관성입니다. 원인이나 미래 성과의 증명이 아니므로 관련 거래를 다시 보고 거래 복기 또는 실험에서 다음 질문을 좁힙니다."
        ]
      ],
      "example": "예: 특정 시간대의 성과가 낮아 보여도 거래가 몇 건인지 먼저 확인합니다. 시간대가 손실의 원인이라는 결론으로 곧바로 이어지지는 않습니다.",
      "connection": "저널의 기록과 플레이북 버전이 비교의 기준이 됩니다. 발견한 패턴은 거래 복기에서 검토하고 실험에서 측정할 가설로 연결할 수 있습니다.",
      "screenshot": "분석 작업공간의 지표·조건 선택, 결과 표와 표본 수"
    },
    "en": {
      "title": "Analytics Workspace · Explore recorded patterns",
      "description": "Compare metrics by strategy, setup, psychology, symbol, direction, time, and rule evidence with filters and sample counts.",
      "capabilities": [
        [
          "Performance and strategy",
          "Compare supported profit, return, and other metrics by strategy and version."
        ],
        [
          "Setup and psychology",
          "Explore outcomes alongside user-recorded setups, emotions, confidence, focus, and behavior."
        ],
        [
          "Symbol, direction, and time",
          "Select the trade cohort and comparison scope. Interpret weekday and hour breakdowns using their close-time basis."
        ],
        [
          "Rules and patterns",
          "Explore differences by adherence and pattern candidates alongside sample counts and unavailable evidence."
        ]
      ],
      "steps": [
        [
          "Choose an analysis section",
          "In Trade Analysis, open Analytics Workspace and choose Edge Explorer, Strategy, Psychology, Rules, or Time for the question you want to inspect."
        ],
        [
          "Select Metric and Dimension",
          "Choose the value under Metric and a supported grouping under Dimension, such as Strategy, Strategy Version, Setup, Psychology, Symbol, Direction, or Rule results."
        ],
        [
          "Set period and filters",
          "Enter the required Start time and End time, then open Filters to narrow recorded conditions or an exact Strategy Version. Time breakdowns use the displayed close / exit time and UTC basis."
        ],
        [
          "Run the analysis",
          "Select Run analysis to submit the current Metric, Dimension, and filter combination. After changing the setup, run it again to refresh the result scope."
        ],
        [
          "Read summary and grouped results",
          "Review selected trades plus each group’s Value, Total sample, Evaluable, and Unavailable counts. Switch between Table, Bar comparison or Time series, and Rank by value as useful."
        ],
        [
          "Interpret sample and rule evidence",
          "Check Limited sample, No evaluable samples, and unavailable reasons. Adherence is the followed share of evaluable rules; Coverage is the evaluable share of all rules, so they answer different questions."
        ],
        [
          "Carry the observation forward",
          "The result is an observed historical association within this sample, not proof of cause or future performance. Revisit relevant trades, then refine the question in Trading Review or an Experiment."
        ]
      ],
      "example": "Example: if a time bucket looks weaker, check how many trades it contains. That difference alone does not establish time of day as the cause.",
      "connection": "Journal records and Playbook versions provide comparison criteria. Review findings in Trading Review and connect them to a measurable experiment.",
      "screenshot": "Analytics Workspace metric/filter controls, result table, and sample counts"
    }
  },
  {
    "slug": "review",
    "featureId": "diagnosis",
    "related": [
      "plan-lab",
      "experiments"
    ],
    "ko": {
      "title": "거래 복기 · 전략과 실행을 함께 검토하기",
      "description": "기간별 복기에서 반복 패턴과 전략·실행 근거를 나눠 보고, 다음에 확인할 문제를 좁혀 보세요.",
      "capabilities": [
        [
          "구조화된 복기",
          "기간 성과와 전략·실행·심리 기록을 함께 검토합니다."
        ],
        [
          "반복 패턴",
          "대상 거래에서 관찰된 차이와 기준값, 표본 수를 함께 살펴봅니다."
        ],
        [
          "전략과 실행",
          "전략의 관찰된 결과와 실행 과정의 근거를 구분해 전략 또는 실행 중 어디를 더 검토할지 판단합니다."
        ],
        [
          "근거의 한계 표시",
          "표본이나 정보가 부족하고 서로 충돌하면 결론을 유보합니다. 전체 규칙 준수율이 곧 실행 품질 진단을 뜻하지는 않습니다."
        ]
      ],
      "steps": [
        [
          "복기 화면을 엽니다",
          "매매분석의 ‘복기’ 탭에서 시작 시각·종료 시각으로 종료 거래 복기 기간을 정합니다. 필요하면 ‘기록된 필터 / 정확한 전략 버전’에서 대상을 좁힙니다."
        ],
        [
          "비교 범위를 선택합니다",
          "직전 동일 길이 기간과 비교하려면 ‘직전 동일 기간과 비교’를 선택한 뒤 ‘복기 실행’을 누릅니다. 비교하지 않아도 현재 기간 복기 결과는 생성됩니다."
        ],
        [
          "기간 요약을 읽습니다",
          "성과, 전략, 실행, 심리, 근거 품질을 순서대로 확인합니다. 각 값과 함께 거래·표본·평가 가능·사용 불가 수를 읽어 근거 범위를 확인합니다."
        ],
        [
          "발견한 패턴을 검토합니다",
          "관찰 그룹과 기준값, 차이, 적격 근거 또는 근거 부족을 함께 봅니다. 차이는 선택 표본의 관찰이며 원인이나 금융 조언이 아닙니다."
        ],
        [
          "전략과 실행을 구분합니다",
          "전략 축은 관찰된 결과를, 실행 축은 선택된 과정 규칙과 진입 이탈 근거를 보여줍니다. 전략 문제가 실행 문제와 같지 않으며, 근거가 부족하거나 충돌하면 결론 유보로 남습니다."
        ],
        [
          "다음 검토 행동을 정합니다",
          "계획과 실행 차이가 궁금하면 계획 분석에서 거래를 비교합니다. 측정할 행동이 명확하면 ‘발견에서 실험 만들기’ 또는 ‘진단에서 실험 만들기’로 실험 초안을 만듭니다."
        ]
      ],
      "example": "예: 전략 성과는 양호해 보이는데 실행 근거가 약하다면, 전략 전체를 바꾸기 전에 규칙 위반이나 계획 이탈의 근거부터 검토할 수 있습니다.",
      "connection": "분석 결과와 저널의 맥락을 복기로 연결합니다. 계획 비교가 필요하면 계획 분석으로, 측정할 행동이 정해졌다면 실험으로 이어갑니다.",
      "screenshot": "거래 복기의 기간 요약, 패턴과 전략·실행 근거"
    },
    "en": {
      "title": "Trading Review · Review strategy and execution",
      "description": "Structure a period review around recurring patterns and separate strategy outcomes from execution evidence.",
      "capabilities": [
        [
          "Structured review",
          "Examine period performance, strategy, execution, and recorded psychology together."
        ],
        [
          "Recurring patterns",
          "Inspect observed differences alongside their baseline and sample counts."
        ],
        [
          "Strategy vs execution",
          "Separate observed strategy outcomes from process evidence to decide what needs closer inspection."
        ],
        [
          "Evidence limits",
          "Insufficient or conflicting evidence leaves a diagnosis inconclusive. Global rule adherence is not the same measure as diagnosis execution quality."
        ]
      ],
      "steps": [
        [
          "Open Review",
          "In Trade Analysis, open the Review tab and set Start time and End time for the closed-trade period. Use Recorded filters / exact StrategyVersion when you need a narrower cohort."
        ],
        [
          "Choose the comparison scope",
          "Enable Compare immediately preceding equal-length period when useful, then select Run review. The current-period Review still runs when period comparison is off."
        ],
        [
          "Read the period summary",
          "Work through Performance, Strategy, Execution, Psychology, and Evidence quality. Read trades, samples, evaluable, and unavailable counts alongside each value to understand its evidence scope."
        ],
        [
          "Inspect Pattern findings",
          "Compare the observed group with its baseline, Delta, and Eligible evidence or Insufficient evidence status. The difference is a sample observation, not a causal conclusion or financial advice."
        ],
        [
          "Separate Strategy from Execution",
          "Strategy axis shows observed outcomes; Execution axis shows selected process-rule and entry-deviation evidence. A strategy problem is not the same as an execution problem, and limited or conflicting evidence remains Inconclusive."
        ],
        [
          "Choose the next review action",
          "Use Plan Lab to inspect plan-versus-execution gaps. When a behavior is specific enough to measure, select Create experiment from finding or Create experiment from diagnosis to start a draft."
        ]
      ],
      "example": "Example: positive strategy outcomes with weak execution evidence can prompt a closer review of rule violations or plan deviations before changing the strategy.",
      "connection": "Bring Analytics results and Journal context into review. Follow up in Plan Lab for plan comparisons or Experiments for a defined behavior change.",
      "screenshot": "Trading Review period summary, patterns, and Strategy vs Execution evidence"
    }
  },
  {
    "slug": "plan-lab",
    "featureId": "plan",
    "related": [
      "journal",
      "experiments"
    ],
    "ko": {
      "title": "계획 분석 · 계획과 실행을 비교하기",
      "description": "사전·진행중·회고 계획과 수정 이력을 구분하고, 손절·목표·손익비를 실제 실행과 비교하세요.",
      "capabilities": [
        [
          "기록 시점 구분",
          "거래 전 저장한 사전 계획, 진행중 포지션의 계획, 종료 후 회고 입력을 구분합니다."
        ],
        [
          "손절·목표·손익비",
          "계획한 진입·손절·목표와 최대 보유시간을 기록하고, 필요한 가격이 있을 때 손익비를 확인합니다."
        ],
        [
          "추가되는 수정 이력",
          "계획 변경은 새 수정 이력으로 남습니다. 기존 수정 이력을 덮어쓰지 않아 당시 저장한 값과 수정 순서를 보존합니다."
        ],
        [
          "계획 대비 실행",
          "사용 가능한 계획과 시장 경로로 실제 결과와 계획 결과를 비교합니다. 데이터 부족이나 부적격 계획은 제한을 표시합니다."
        ]
      ],
      "steps": [
        [
          "작업할 계획 흐름을 고릅니다",
          "종료 거래는 ‘종료 거래에서 계획 입력’ 목록에서 ‘열기’를 누릅니다. 거래 전에는 ‘사전 계획 기록’을, 진행 중에는 동기화된 진행 중 포지션의 계획 입력을 사용합니다."
        ],
        [
          "진입과 위험 기준을 입력합니다",
          "사전 계획은 거래소·종목·방향과 계획 진입가(단일 가격 또는 가격 범위)를 정합니다. 손절가, 1차 목표가, 선택적 2차 목표가, 최대 보유시간을 입력하면 가능한 경우 목표 손익비가 표시됩니다."
        ],
        [
          "근거와 메모를 남깁니다",
          "추가 계획 메모에서 진입 근거와 계획 청산 조건을 적고 필요하면 메모를 추가합니다. 진행 중 계획은 이미 체결된 실제 진입가를 기준으로 손절·목표가 구조를 기록합니다."
        ],
        [
          "현재 초안을 저장합니다",
          "‘계획 저장’을 눌러 현재 입력을 저장합니다. 종료 거래에서 뒤늦게 입력한 계획은 회고 입력, 거래 전 저장한 계획은 검증된 사전 계획, 진입 후 기록은 거래 중 기록으로 구분됩니다."
        ],
        [
          "변경은 수정 이력으로 추가합니다",
          "저장된 계획에서 ‘수정 이력 추가’를 눌러 변경값을 저장합니다. 새 수정 이력이 추가되며 이전에 저장한 계획은 조용히 덮어써지지 않습니다. 저장 전 현재 초안은 아직 새 기록이 아닙니다."
        ],
        [
          "계획과 실제 실행을 비교합니다",
          "종료 거래의 ‘분석 보기’ 또는 계획 상세에서 실제 결과, 계획 결과, 실행 차이와 기록 시점을 확인합니다. 비교 가능 여부는 계획 출처와 사용 가능한 과거 가격 경로에 따라 달라집니다."
        ],
        [
          "범위 분석을 불러옵니다",
          "필요할 때 ‘공식 분석 불러오기’를 눌러 계획 분석 집계와 진단을 계산합니다. 이는 과거 기록의 비교이며 미래 성과를 보장하지 않습니다."
        ]
      ],
      "example": "예: 거래 중 손절을 변경했다면 변경 이력을 남깁니다. 종료 후 입력한 계획도 복기에 활용할 수 있지만, 거래 전부터 존재한 계획으로 취급하지 않습니다.",
      "connection": "저널의 거래를 계획 기록과 연결해 의도와 실행을 살펴봅니다. 반복되는 차이는 거래 복기와 다음 행동 실험에서 검토할 질문이 됩니다.",
      "screenshot": "사전·진행중·회고 표시, 계획 수정 이력, 계획 대비 실제 실행"
    },
    "en": {
      "title": "Plan Lab · Compare plan and execution",
      "description": "Distinguish pre-trade, in-trade, and retrospective plans with immutable revisions; compare stops, targets, and reward-risk with execution.",
      "capabilities": [
        [
          "Record timing",
          "Distinguish saved pre-trade plans, plans for open positions, and retrospective closed-trade entries."
        ],
        [
          "Stops, targets, and reward-risk",
          "Record intended entry, stop, targets, and maximum holding time; inspect reward-risk when required prices are available."
        ],
        [
          "Append-only revisions",
          "Changes create a new revision without overwriting earlier revisions, preserving saved values and their order."
        ],
        [
          "Plan vs execution",
          "Use eligible plans and available market paths to compare actual and planned outcomes; missing data and ineligible plans retain their limitations."
        ]
      ],
      "steps": [
        [
          "Choose a plan workflow",
          "For a closed trade, select Open under Enter plans from closed trades. Before entry, use Record pre-trade; while a synced position is open, use its in-trade plan action."
        ],
        [
          "Enter entry and risk criteria",
          "For a pre-trade plan, choose Exchange, Symbol, Side, and Plan Entry as Exact or Range. Enter Stop Loss, TP1, optional TP2, and Maximum hold hours to see Target R:R when inputs allow it."
        ],
        [
          "Add rationale and notes",
          "Under Additional plan notes, enter Entry rationale and Planned exit condition, then add a Memo if needed. An in-trade plan uses the filled entry as the reference for its SL and TP structure."
        ],
        [
          "Save the current draft",
          "Select Save plan to persist the entry. A late closed-trade entry is Retrospective, a plan saved before entry is Verified pre-trade, and a plan recorded after entry is Recorded in trade."
        ],
        [
          "Add changes as a Revision",
          "From a saved plan, select Add revision and save the changed values. A new Revision is appended; the earlier saved Plan is not silently rewritten. Until saved, the current draft is not a new historical record."
        ],
        [
          "Compare plan and execution",
          "Use View analysis or the plan detail to inspect Actual, Plan result, Execution delta, and record timing. Eligibility depends on plan provenance and available historical price-path evidence."
        ],
        [
          "Load aggregate analysis when needed",
          "Select Load official analysis to calculate Plan Lab summaries and diagnosis. These compare historical records and do not guarantee future performance."
        ]
      ],
      "example": "Example: record a revision after changing a stop in trade. A retrospective plan can support review, but is not treated as a plan that existed before entry.",
      "connection": "Connect Journal trades to plan records to inspect intent and execution. Recurring gaps inform Trading Review and the next behavior experiment.",
      "screenshot": "Plan timing labels, revision history, and plan-versus-execution results"
    }
  },
  {
    "slug": "experiments",
    "featureId": "experiments",
    "related": [
      "review",
      "analytics"
    ],
    "ko": {
      "title": "실험 · 정한 기준으로 변화를 측정하기",
      "description": "행동 실험의 가설·지표·목표를 정의하고 활성화한 뒤, 측정 기능으로 기준 기간 대비 변화와 목표 충족 여부를 확인하세요.",
      "capabilities": [
        [
          "행동·과정 실험",
          "관찰한 문제를 사용자가 소유한 가설로 정리합니다. 패턴이나 진단에서 초안을 만들 수 있습니다."
        ],
        [
          "측정 가능한 목표",
          "지표, 비교 집단, 기간, 기준 기간, 목표값과 최소 표본을 정합니다."
        ],
        [
          "활성화와 기준 고정",
          "초안을 검토하고 실험을 시작하면 정의가 잠깁니다. 결과를 본 뒤 조건을 바꾸지 않고 검토합니다."
        ],
        [
          "측정 결과",
          "같은 지표·조건으로 현재값과 기준값의 차이를 보고, 목표 충족·미충족·평가 불가를 구분합니다."
        ]
      ],
      "steps": [
        [
          "실험 초안을 엽니다",
          "매매분석의 실험 화면에서 ‘새 실험’을 누르거나 복기의 ‘발견에서 실험 만들기’ 또는 ‘진단에서 실험 만들기’로 관찰 조건이 채워진 초안을 엽니다."
        ],
        [
          "행동 가설과 측정 대상을 정의합니다",
          "이름과 가설에 시험할 행동·과정을 적고 목표 지표, 측정 기준, 실험 기간과 필요한 기록 필터를 선택합니다."
        ],
        [
          "기준 기간과 판정 조건을 정합니다",
          "실험 기간보다 앞선 겹치지 않는 기준 기간을 입력합니다. 판정 기준, 이상·이하 연산자, 목표값, 최소 판정 가능 표본과 거래 수를 설정합니다."
        ],
        [
          "초안을 저장하고 시작합니다",
          "‘초안 만들기’ 또는 ‘초안 저장’으로 검토 가능한 초안을 저장합니다. 조건이 확정되면 ‘실험 시작’을 누르고 확인하면 상태가 활성으로 바뀌며 정의가 잠깁니다."
        ],
        [
          "관찰 기간을 채웁니다",
          "고정한 기간·필터·그룹에 맞는 거래 기록을 계속 쌓습니다. 표본이 부족하거나 값이 평가 불가하면 측정 기능이 강제로 결론을 만들지 않습니다."
        ],
        [
          "완료하거나 측정을 실행합니다",
          "필요할 때 ‘측정’으로 현재 근거를 볼 수 있고, 관찰을 끝내려면 ‘실험 완료’를 누릅니다. 완료 상태 자체는 목표 달성을 뜻하지 않습니다."
        ],
        [
          "판정과 근거를 읽습니다",
          "측정 결과의 현재값, 기준값, 관찰 차이와 표본을 확인합니다. 기준 충족은 정한 목표 달성, 기준 미충족은 미달, 판정 불가는 충분히 평가할 수 없음을 뜻하며 인과관계를 증명하지 않습니다."
        ]
      ],
      "example": "예: 규칙 준수율을 목표 지표로 정하고 최소 표본을 확보한 뒤 측정합니다. 목표를 충족해도 그 행동이 수익 개선을 일으켰다는 인과 증명은 아닙니다.",
      "connection": "거래 복기의 발견을 실행할 가설로 바꾸고, 분석 작업공간과 같은 지표 정의로 비교합니다. 검토한 결과는 다음 계획과 저널 기록에 반영합니다.",
      "screenshot": "실험 가설·목표·활성 상태와 측정 결과의 기준값·현재값·판정"
    },
    "en": {
      "title": "Experiments · Measure change against a target",
      "description": "Define and activate a behavior experiment with a hypothesis, metric, and target, then use Measure to compare with a baseline.",
      "capabilities": [
        [
          "Behavior and process experiments",
          "Write a user-owned hypothesis from an observed issue or draft it from a pattern or diagnosis."
        ],
        [
          "Measurable goals",
          "Choose metric, cohort, period, baseline, target, and minimum sample."
        ],
        [
          "Activate and lock",
          "Review the draft and start the experiment to lock its definition before interpreting the result."
        ],
        [
          "Measurement outcomes",
          "Compare current and baseline values under the same metric and conditions; distinguish criterion met, not met, and not evaluable."
        ]
      ],
      "steps": [
        [
          "Open an Experiment draft",
          "In Trade Analysis, open Experiments and select New experiment, or use Create experiment from finding/diagnosis in Review to carry an observed condition into a draft."
        ],
        [
          "Define behavior and measurement",
          "Use Name and Hypothesis for the behavior or process being tested, then choose Target metric, Measurement dimension, experiment period, and any recorded filters."
        ],
        [
          "Set baseline and criterion",
          "Enter a non-overlapping Baseline period earlier than the experiment. Set Criterion basis, the At least/At most Operator, Target, and Minimum evaluable sample and trades."
        ],
        [
          "Save and start the draft",
          "Use Create draft or Save draft while reviewing the definition. When it is final, select Start experiment and confirm; its status becomes ACTIVE and the definition is locked."
        ],
        [
          "Fill the observation window",
          "Continue recording trades that match the fixed period, filters, and group. If the sample or values are unavailable, Measure does not force a conclusion."
        ],
        [
          "Complete or run Measure",
          "Select Measure whenever you need the current evidence, and use Complete experiment when observation is finished. COMPLETED is a lifecycle state, not a successful result."
        ],
        [
          "Read criterion and evidence",
          "Compare Current, Baseline, Observed delta, and samples. MET means the defined target was met, NOT_MET means it was not, and NOT_EVALUABLE means the evidence cannot support a result; none proves causation."
        ]
      ],
      "example": "Example: set a rule-adherence target and measure once sufficient samples are available. Meeting the target does not prove the behavior caused an increase in profit.",
      "connection": "Turn a Trading Review finding into a hypothesis and compare using shared Analytics definitions. Carry the review into the next plan and Journal records.",
      "screenshot": "Experiment hypothesis, target, active state, and Measure baseline/current values and criterion result"
    }
  }
] as const;

export function featureDetailHref(id: string, language: string) {
  const page = featurePages.find(item => item.featureId === id || (id === 'rules' && item.featureId === 'playbook'));
  return page ? `/features/${page.slug}?lang=${language}${id === 'rules' ? '#capabilities' : ''}` : `/features?lang=${language}#${id}`;
}
