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
      "description": "자신감·집중도·FOMO·메모를 짧게 남기고 나중에 비교하세요. 모든 항목을 채울 필요는 없으며 모르는 값은 미기록으로 둘 수 있습니다.",
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
          "자신감·집중도·FOMO 등 기억나는 내용만 남깁니다. 미기록은 실패가 아니며 앱이 감정이나 동기를 추측하지 않습니다."
        ],
        [
          "전략 연결과 규칙 복기",
          "실제 사용한 플레이북 버전을 연결하고 규칙 준수·위반·판정 불가의 근거를 확인합니다."
        ]
      ],
      "steps": [
        [
          "샘플 또는 내 거래를 엽니다",
          "API 없이 샘플 거래를 열거나 읽기 전용으로 가져온 내 종료 거래에서 거래 리포트를 엽니다."
        ],
        [
          "기억나는 맥락만 남깁니다",
          "자신감·집중도·FOMO, 메모나 진입 유형 태그 중 필요한 내용부터 짧게 기록합니다. 모든 항목을 채우지 않아도 되며 모르는 값은 모르는 상태로 남깁니다."
        ],
        [
          "기록을 저장합니다",
          "행동 기록 저장으로 입력한 심리·행동·메모를 저장합니다. 빈 심리 항목을 나쁜 행동이나 실패로 해석하지 않습니다."
        ],
        [
          "사용한 전략이 있으면 연결합니다",
          "전략 할당에서 실제 사용한 전략과 버전을 선택해 저장합니다. 규칙은 당시 연결한 버전을 기준으로 평가합니다."
        ],
        [
          "규칙의 근거를 확인합니다",
          "준수는 확인된 충족, 위반은 평가 가능한 조건의 미충족, 판정 불가는 근거나 자동 평가 지원 부족입니다. 준수율은 평가 가능한 규칙 중 준수 비율, 평가 범위는 전체 규칙 중 평가 가능한 비율입니다."
        ],
        [
          "하루의 예시와 누적 기록을 봅니다",
          "샘플의 일일 저널에서는 기록이 있는 예시 날짜를 바로 열 수 있습니다. 누적된 기록은 안내형 분석의 질문이나 복기 요약에서 비교합니다."
        ]
      ],
      "example": "예: 이익으로 끝난 거래라도 ‘추격 진입’으로 기록했다면, 이후 분석 작업공간에서 해당 행동과 결과의 연관성을 따로 살펴볼 수 있습니다.",
      "connection": "저널은 제품의 바탕입니다. 플레이북의 기준을 거래에 연결하고, 쌓인 기록을 분석 작업공간과 거래 복기에서 검토합니다.",
      "screenshot": "이전 화면 참고: 이 캡처는 매매일지 상세가 아닌 계획 분석 목록입니다. 현재 저널 안내는 아래 사용 방법을 확인하세요."
    },
    "en": {
      "title": "Trade Journal · Keep the context",
      "description": "Keep short records of confidence, focus, FOMO, or notes for later comparison. You do not need to fill every field; unknown values can remain unrecorded.",
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
          "Record what you remember about confidence, focus, or FOMO. Unrecorded values are not failures; the app does not infer emotions or motives."
        ],
        [
          "Strategy and rules",
          "Assign the Playbook version actually used and inspect followed, violated, and not-evaluable results."
        ]
      ],
      "steps": [
        [
          "Open sample or personal trades",
          "Open a sample trade without API credentials, or open Trade report for one of your imported closed trades."
        ],
        [
          "Record what you remember",
          "Start with a short note, confidence, focus, FOMO, or setup tags. Use the fields that matter to you; unknown values can stay unknown."
        ],
        [
          "Save the record",
          "Use Save behavior journal to save your psychology, behavior, and notes. Missing psychology is not bad behavior or failure."
        ],
        [
          "Link a strategy if you used one",
          "Choose and save the Strategy Version actually used under Strategy Assignment. Rules are evaluated against that assigned version."
        ],
        [
          "Read the rule evidence",
          "FOLLOWED is confirmed compliance; VIOLATED is an evaluable condition not met; NOT_EVALUABLE means evidence or evaluation support is missing. Adherence is the followed share of evaluable rules; Coverage is the evaluable share of all rules."
        ],
        [
          "Explore a day and accumulated records",
          "In the sample Daily Journal, open a populated example day directly. Compare accumulated records through Guided Analytics questions or Review summaries."
        ]
      ],
      "example": "Example: a winning trade tagged as a FOMO entry can later be reviewed in Analytics for its association with outcomes.",
      "connection": "Journal is the foundation: link Playbook criteria to individual trades, then review accumulated records in Analytics and Trading Review.",
      "screenshot": "Earlier screen reference: this capture shows the Plan Lab list, not Journal detail. Follow the usage guide below for the current Journal flow."
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
      "description": "사람이 읽기 쉬운 규칙과 당시 전략 버전을 남기세요. 지원되는 조건만 자동 평가하며 글로만 작성한 규칙도 유효합니다.",
      "capabilities": [
        [
          "읽기 쉬운 규칙",
          "‘자신감 점수가 3 이상’처럼 조건을 읽고 진입·리스크·청산 기준을 작성합니다. 정확한 규칙 정의는 필요할 때 펼쳐 확인합니다."
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
          "진입·리스크·청산 규칙에 원하는 기준을 글로 적습니다. 자동 평가가 지원되는 조건은 추가로 설정할 수 있고 글로만 남긴 규칙도 저장할 수 있습니다. 화면은 읽기 쉬운 조건을 먼저 보여주며 정확한 정의도 확인할 수 있습니다."
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
      "screenshot": "이전 플레이북 화면: 현재는 사람이 읽기 쉬운 조건을 먼저 보여주고 정확한 규칙 정의는 펼쳐 확인합니다."
    },
    "en": {
      "title": "Strategy Playbook · Review the strategy you used",
      "description": "Keep readable rules and the Strategy Version you used. Supported conditions can be evaluated automatically; text-only rules remain valid.",
      "capabilities": [
        [
          "Readable rules",
          "Read conditions such as ‘Confidence score is at least 3’ and write entry, risk, and exit criteria. Expand the exact rule definition when needed."
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
          "Write your entry, risk, and exit criteria in words. Add supported evaluation conditions where useful; text-only rules can also be saved. Readable conditions appear first, with exact definitions available to inspect."
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
      "screenshot": "Earlier Playbook screen: current rules show readable conditions first, with exact definitions available on demand."
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
      "title": "안내형 분석 · 궁금한 질문부터 시작하기",
      "description": "심리·전략·종목·방향·규칙·시간에 관한 질문을 선택하고 기록된 차이와 표본을 확인하세요. 고급 분석은 선택 사항입니다.",
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
          "궁금한 질문을 선택합니다",
          "매매분석의 안내형 분석에서 심리·전략·종목·방향·규칙·시간 질문을 고릅니다. 지표와 분류 기준을 먼저 설정하지 않아도 분석을 시작할 수 있습니다."
        ],
        [
          "요약과 표본을 읽습니다",
          "질문을 선택하면 기록된 거래를 비교합니다. 관찰된 차이와 그룹별 판정 가능 표본, 미기록·사용 불가 정보를 함께 확인합니다."
        ],
        [
          "필요하면 기간과 조건을 바꿉니다",
          "기간·종목 등 조건 바꾸기를 펼쳐 수정한 뒤 분석 실행으로 적용합니다. 시간 범위는 표시된 UTC 종료 시각 기준입니다."
        ],
        [
          "규칙 분석의 의미를 구분합니다",
          "준수율은 평가 가능한 규칙 중 준수 비율, 평가 범위는 전체 규칙 중 평가 가능한 비율입니다. 판정 불가를 위반으로 보지 않습니다."
        ],
        [
          "고급 분석은 필요할 때 엽니다",
          "직접 조합하려면 고급 분석에서 지원되는 지표·분류 기준·정확한 필터를 설정합니다. 일반적인 질문을 살펴보는 데 필수는 아닙니다."
        ],
        [
          "관찰을 복기로 이어갑니다",
          "결과는 이 표본의 관찰된 연관성입니다. 원인이나 미래 성과가 확정된 것은 아니므로 근거 거래를 확인하고 복기에서 다음 질문을 좁힙니다."
        ]
      ],
      "example": "예: 특정 시간대의 성과가 낮아 보여도 거래가 몇 건인지 먼저 확인합니다. 시간대가 손실의 원인이라는 결론으로 곧바로 이어지지는 않습니다.",
      "connection": "저널의 기록과 플레이북 버전이 비교의 기준이 됩니다. 발견한 패턴은 거래 복기에서 검토하고 실험에서 측정할 가설로 연결할 수 있습니다.",
      "screenshot": "이전 지표·분류 설정 화면입니다. 현재 기본 진입 화면은 질문을 선택하는 안내형 분석이며, 직접 설정은 고급 분석에서 제공합니다."
    },
    "en": {
      "title": "Guided Analytics · Start with a question",
      "description": "Choose a question about psychology, strategy, symbol, direction, rules, or time and inspect recorded differences with their samples. Advanced Analytics is optional.",
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
          "Choose your question",
          "In Guided Analytics, select a question about psychology, strategy, symbol, direction, rules, or time. You can begin without configuring Metric and Dimension first."
        ],
        [
          "Read the answer and samples",
          "Selecting a question compares recorded trades. Read observed differences alongside evaluable samples and unrecorded or unavailable evidence for each group."
        ],
        [
          "Adjust the scope if needed",
          "Expand Adjust period and filters, edit the conditions, and select Run analysis to apply them. Dates use the displayed UTC closing-time basis."
        ],
        [
          "Distinguish rule measures",
          "Adherence is the followed share of evaluable rules; Coverage is the evaluable share of all rules. Not evaluable is not a violation."
        ],
        [
          "Open Advanced Analytics when needed",
          "Use Advanced Analytics to combine supported metrics, dimensions, and exact filters yourself. It is not required for ordinary guided questions."
        ],
        [
          "Continue with Review",
          "Results describe an observed association in this sample, not a proven cause or future performance. Inspect supporting trades and narrow the next question in Review."
        ]
      ],
      "example": "Example: if a time bucket looks weaker, check how many trades it contains. That difference alone does not establish time of day as the cause.",
      "connection": "Journal records and Playbook versions provide comparison criteria. Review findings in Trading Review and connect them to a measurable experiment.",
      "screenshot": "Earlier metric/dimension configuration screen. The current default is question-driven Guided Analytics; manual configuration is available in Advanced Analytics."
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
      "description": "최대 3개의 핵심 발견부터 읽고 의미·표본·다음 확인 행동을 살펴보세요. 상세 분석은 필요할 때 펼칩니다.",
      "capabilities": [
        [
          "핵심 발견 우선",
          "최대 3개의 발견에서 관찰 내용·의미·표본·다음 확인 행동부터 읽습니다. 전체 상세를 먼저 해석할 필요가 없습니다."
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
          "복기 범위를 정합니다",
          "매매분석의 복기에서 종료 거래 기간을 선택합니다. 필요하면 필터나 직전 동일 기간 비교를 설정하고 복기 실행을 누릅니다."
        ],
        [
          "핵심 발견부터 읽습니다",
          "최대 3개 발견에서 무엇이 관찰됐고 왜 살펴볼 만한지, 어떤 표본이 뒷받침하는지 확인합니다. 뚜렷한 발견이 없을 수도 있습니다."
        ],
        [
          "근거의 한계를 확인합니다",
          "관찰된 연관성, 근거 부족, 판단 보류를 구분합니다. 표본 부족이나 서로 다른 신호를 실행 실패나 손실의 원인으로 단정하지 않습니다."
        ],
        [
          "필요한 상세만 펼칩니다",
          "비교 근거나 전략·실행 근거를 열어 그룹·기준값·표본과 기술적 정의를 확인합니다. 전체 규칙 준수율과 진단의 실행 근거는 같은 지표가 아닙니다."
        ],
        [
          "다음 확인 행동을 선택합니다",
          "계획 이력이 궁금하면 계획 분석으로 이동합니다. 비교를 계속 살펴보려면 해당 비교의 실험 초안을 열고 관찰을 읽은 뒤 시험할 행동을 직접 적습니다."
        ]
      ],
      "example": "예: 전략 성과는 양호해 보이는데 실행 근거가 약하다면, 전략 전체를 바꾸기 전에 규칙 위반이나 계획 이탈의 근거부터 검토할 수 있습니다.",
      "connection": "분석 결과와 저널의 맥락을 복기로 연결합니다. 계획 비교가 필요하면 계획 분석으로, 측정할 행동이 정해졌다면 실험으로 이어갑니다.",
      "screenshot": "이전 복기 상세 화면입니다. 현재는 핵심 발견 요약이 먼저 나오며 기술적 근거는 필요할 때 펼칩니다."
    },
    "en": {
      "title": "Trading Review · Review strategy and execution",
      "description": "Start with up to three key findings, their meaning, sample evidence, and next actions. Expand analytical details when needed.",
      "capabilities": [
        [
          "Key findings first",
          "Read up to three findings with their observation, meaning, sample, and next action before opening full details."
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
          "Choose the review scope",
          "In Review, select the closed-trade period. Add filters or a preceding equal-length comparison if useful, then run the review."
        ],
        [
          "Read the key findings first",
          "Up to three findings explain what was observed, why it merits inspection, and the supporting samples. There may be no strong finding to highlight."
        ],
        [
          "Check evidence limits",
          "Distinguish observed association, insufficient evidence, and inconclusive assessments. Small samples or conflicting signals do not establish execution failure or the cause of a loss."
        ],
        [
          "Expand the details you need",
          "Open comparison or Strategy and Execution evidence to inspect groups, baselines, samples, and technical definitions. Overall rule adherence is not the same measure as diagnosis execution evidence."
        ],
        [
          "Choose what to inspect next",
          "Open Plan Lab to inspect plan history. To explore a comparison further, open its Experiment draft, read the observation, and write the behavior you want to test yourself."
        ]
      ],
      "example": "Example: positive strategy outcomes with weak execution evidence can prompt a closer review of rule violations or plan deviations before changing the strategy.",
      "connection": "Bring Analytics results and Journal context into review. Follow up in Plan Lab for plan comparisons or Experiments for a defined behavior change.",
      "screenshot": "Earlier Review detail screen. The current experience starts with key findings and reveals technical evidence on demand."
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
      "description": "진입 전에 무엇을 기록했고 이후 무엇을 바꿨는지, 최신 계획은 무엇인지 이력을 잃지 않고 확인하세요.",
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
          "진입 전 기록과 이후 변경",
          "진입 당시 근거, 나중에 바꾼 값, 최신 계획을 구분합니다. 이후 수정은 진입 당시 근거를 대체하지 않으며 정확한 전체 이력도 확인할 수 있습니다."
        ],
        [
          "계획 대비 실행",
          "사용 가능한 근거로 실제 결과와 계획 결과를 비교합니다. 계산할 수 없으면 결과 옆에 이유를 설명하며 0이나 실패로 처리하지 않습니다."
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
          "저장된 계획에서 수정 이력을 추가합니다. 진입 전에 기록한 내용·이후 변경·최신 계획을 구분해 읽고 필요한 경우 정확한 이력을 펼칩니다. 이후 변경이 진입 당시 근거를 바꾸지는 않습니다."
        ],
        [
          "계획과 실제 실행을 비교합니다",
          "계획 상세에서 실제 결과·계획 결과·실행 차이를 확인합니다. 계획 비교를 계산할 수 없으면 결과 옆 이유를 읽으세요. 가격 경로 부족 등 사유는 상황에 따라 다르며 판정 불가는 0이나 실패가 아닙니다."
        ],
        [
          "범위 분석을 불러옵니다",
          "필요할 때 ‘공식 분석 불러오기’를 눌러 계획 분석 집계와 진단을 계산합니다. 이는 과거 기록의 비교이며 미래 성과를 보장하지 않습니다."
        ]
      ],
      "example": "예: 거래 중 손절을 변경했다면 변경 이력을 남깁니다. 종료 후 입력한 계획도 복기에 활용할 수 있지만, 거래 전부터 존재한 계획으로 취급하지 않습니다.",
      "connection": "저널의 거래를 계획 기록과 연결해 의도와 실행을 살펴봅니다. 반복되는 차이는 거래 복기와 다음 행동 실험에서 검토할 질문이 됩니다.",
      "screenshot": "이전 계획 상세 화면입니다. 현재는 진입 전·이후 변경·최신 계획을 풀어 설명하고 계산 불가 결과 옆에 이유를 표시합니다."
    },
    "en": {
      "title": "Plan Lab · Compare plan and execution",
      "description": "See what was recorded before entry, what changed later, and the current plan revision without losing the underlying history.",
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
          "Before entry and later changes",
          "Distinguish entry-time evidence, later edits, and the latest plan. Later revisions do not replace entry-time evidence; the exact full history remains inspectable."
        ],
        [
          "Plan vs execution",
          "Compare actual and planned outcomes from available evidence. When a comparison cannot be calculated, a reason appears beside it rather than treating it as zero or failure."
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
          "Add a revision to the saved plan. Read what existed before entry, what changed later, and the latest plan, then inspect the exact history if needed. Later changes do not rewrite entry-time evidence."
        ],
        [
          "Compare plan and execution",
          "Inspect Actual, Plan result, and Execution delta in plan detail. If a comparison is unavailable, read the reason beside it. Reasons vary, including missing price-path evidence; unavailable is not zero or failure."
        ],
        [
          "Load aggregate analysis when needed",
          "Select Load official analysis to calculate Plan Lab summaries and diagnosis. These compare historical records and do not guarantee future performance."
        ]
      ],
      "example": "Example: record a revision after changing a stop in trade. A retrospective plan can support review, but is not treated as a plan that existed before entry.",
      "connection": "Connect Journal trades to plan records to inspect intent and execution. Recurring gaps inform Trading Review and the next behavior experiment.",
      "screenshot": "Earlier plan detail screen. The current view explains before-entry records, later changes, and the latest plan, with reasons beside unavailable results."
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
      "description": "복기에서 관찰된 차이를 읽고 직접 시험할 행동을 정한 뒤, 같은 측정 정의로 다음 기간을 비교하세요.",
      "capabilities": [
        [
          "행동·과정 실험",
          "앱은 관찰 내용과 비교 맥락을 제공합니다. 시험할 행동과 가설은 사용자가 직접 작성합니다."
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
          "복기에서 실험 초안을 엽니다",
          "비교의 실험 초안을 열면 관찰 내용, 읽기 쉬운 비교 맥락과 설명형 이름을 먼저 확인할 수 있습니다. 실험 화면에서 직접 새 초안을 만들 수도 있습니다."
        ],
        [
          "시험할 행동을 직접 적습니다",
          "복기에서 넘어온 행동·가설 입력란은 비어 있습니다. 앱은 관찰을 제공하고 사용자가 시험할 행동을 결정합니다. 관찰된 연관성만으로 행동을 추천하지 않습니다."
        ],
        [
          "무엇을 비교할지 확인합니다",
          "초안의 비교 요약을 읽고 다음 기간에 살펴볼 질문을 정합니다. 고급 측정 설정은 기본적으로 접혀 있습니다."
        ],
        [
          "필요한 측정 조건을 검토합니다",
          "고급 설정을 펼치면 정확한 지표·그룹·연산자·필터·기간을 확인할 수 있습니다. 실험보다 앞선 겹치지 않는 기준 기간, 목표와 최소 표본도 시작 전에 검토합니다."
        ],
        [
          "저장하고 실험을 시작합니다",
          "초안을 저장한 뒤 정의가 확정되면 실험 시작을 확인합니다. 활성화하면 정의가 잠기므로 결과를 본 뒤 기준을 바꾸지 않습니다."
        ],
        [
          "다음 기간을 측정합니다",
          "정한 조건에 맞는 기록을 쌓고 측정을 실행해 같은 정의의 현재값·기준값·표본을 비교합니다. 실험 완료는 관찰을 마쳤다는 상태이지 목표 달성을 뜻하지 않습니다."
        ],
        [
          "근거와 한계를 읽습니다",
          "기준 충족·미충족·판정 불가를 구분합니다. 표본 부족은 실패가 아니며 차이가 있어도 행동이 수익 변화를 일으켰다는 인과 증명은 아닙니다."
        ]
      ],
      "example": "예: 규칙 준수율을 목표 지표로 정하고 최소 표본을 확보한 뒤 측정합니다. 목표를 충족해도 그 행동이 수익 개선을 일으켰다는 인과 증명은 아닙니다.",
      "connection": "앱이 제공한 복기 관찰과 사용자가 정한 행동 가설을 구분합니다. 같은 분석 정의로 다음 기간을 비교하고 다음 기록과 계획에 참고합니다.",
      "screenshot": "이전 활성 실험·측정 화면입니다. 현재 복기에서 여는 초안은 관찰 요약과 빈 행동·가설 입력란부터 보여주고 고급 설정은 접혀 있습니다."
    },
    "en": {
      "title": "Experiments · Measure change against a target",
      "description": "Read an observed difference from Review, choose the behavior you want to test, then compare the next period using the same measurement definition.",
      "capabilities": [
        [
          "Behavior and process experiments",
          "The app supplies an observation and comparison context. You write the behavior and hypothesis you choose to test."
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
          "Open a draft from Review",
          "Open an Experiment draft for a comparison to see the observation, readable comparison context, and a descriptive name first. You can also create a new draft directly in Experiments."
        ],
        [
          "Write the behavior you choose",
          "The behavior/hypothesis field in a Review-created draft starts empty. The app provides the observation; you decide what to try. An association is not a behavior recommendation."
        ],
        [
          "Check what will be compared",
          "Read the comparison summary and choose the question for the next period. Advanced measurement settings start collapsed."
        ],
        [
          "Inspect measurement details as needed",
          "Expand advanced settings for exact metrics, groups, operators, filters, and periods. Before starting, review the earlier non-overlapping baseline, target, and minimum sample."
        ],
        [
          "Save and start",
          "Save the draft, then confirm Start experiment when its definition is ready. Activation locks the definition so criteria do not move after you see the result."
        ],
        [
          "Measure the next period",
          "Accumulate matching records and run Measure to compare current and baseline values with their samples under the same definition. Completed means observation ended, not that the target was met."
        ],
        [
          "Read the evidence and limits",
          "Distinguish criterion met, not met, and not evaluable. Insufficient samples are not failure; an observed difference does not prove the behavior caused a change in profit."
        ]
      ],
      "example": "Example: set a rule-adherence target and measure once sufficient samples are available. Meeting the target does not prove the behavior caused an increase in profit.",
      "connection": "Keep the observation supplied by Review separate from your chosen behavior hypothesis. Compare the next period with the same analytical definition and use the evidence in your next records and plans.",
      "screenshot": "Earlier active Experiment and Measure screen. Current Review-created drafts start with an observation summary and an empty behavior/hypothesis field; advanced settings are collapsed."
    }
  }
] as const;

export function featureDetailHref(id: string, language: string) {
  const page = featurePages.find(item => item.featureId === id || (id === 'rules' && item.featureId === 'playbook'));
  return page ? `/features/${page.slug}?lang=${language}${id === 'rules' ? '#capabilities' : ''}` : `/features?lang=${language}#${id}`;
}
