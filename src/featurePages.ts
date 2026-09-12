export const featurePages = [
  {
    "slug": "journal",
    "featureId": "journal",
    "related": [
      "strategy-playbook",
      "review"
    ],
    "ko": {
      "title": "Trade Journal · 거래 맥락을 남기는 저널",
      "description": "거래 내역에 메모, Setup, 심리·행동 기록과 전략 버전을 연결하고 규칙 준수를 복기하세요.",
      "capabilities": [
        [
          "거래 내역과 맥락",
          "종료 거래의 종목·방향·진입·청산·성과를 확인하고 당시 판단을 메모합니다."
        ],
        [
          "Setup과 행동 기록",
          "Setup·실수 태그, FOMO·보복 매매 같은 행동을 직접 기록해 반복되는 상황을 검토합니다."
        ],
        [
          "심리 기록",
          "거래 전·중·후 감정, 자신감과 집중도를 남깁니다. 앱이 감정이나 동기를 추측하지 않습니다."
        ],
        [
          "전략 연결과 규칙 복기",
          "실제 사용한 Playbook 버전을 연결하고 규칙 준수·위반·판정 불가의 근거를 확인합니다."
        ]
      ],
      "steps": [
        [
          "거래를 고릅니다",
          "동기화한 종료 거래에서 복기할 거래를 선택합니다."
        ],
        [
          "당시의 판단을 기록합니다",
          "메모·Setup·심리·행동을 입력하고 사용한 전략 버전을 연결합니다."
        ],
        [
          "결과와 과정을 함께 봅니다",
          "손익과 규칙 결과를 비교하고 다음 복기에서 확인할 질문을 남깁니다."
        ]
      ],
      "example": "예: 이익으로 끝난 거래라도 ‘FOMO 진입’으로 기록했다면, 이후 Analytics에서 해당 행동과 결과의 연관성을 따로 살펴볼 수 있습니다.",
      "connection": "저널은 제품의 바탕입니다. Playbook의 기준을 거래에 연결하고, 쌓인 기록을 Analytics와 Trading Review에서 검토합니다.",
      "screenshot": "거래 상세의 메모·Setup·심리 기록과 전략 할당·규칙 결과"
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
          "Choose a trade",
          "Select a synced closed trade to review."
        ],
        [
          "Record the decision",
          "Add notes, setup, psychology, and behavior, then assign the strategy version used."
        ],
        [
          "Review outcome and process",
          "Compare the result with rule evidence and leave a question for your next review."
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
      "title": "Strategy Playbook · 당시의 전략으로 복기하기",
      "description": "재사용할 전략과 수정 불가능한 과거 버전을 보존하고, 기록된 사실로 규칙 준수와 평가 가능 범위를 확인하세요.",
      "capabilities": [
        [
          "재사용할 전략",
          "진입·리스크·청산 기준을 한 전략에 모아 여러 거래에 같은 기준을 적용합니다."
        ],
        [
          "변경되지 않는 과거 버전",
          "규칙을 바꾸면 새 Strategy Version을 만듭니다. 과거 버전과 거래의 연결은 당시 기준의 출처를 보존합니다."
        ],
        [
          "명확한 규칙 판정",
          "자동 평가가 지원되는 규칙을 기록된 사실과 대조해 FOLLOWED(준수), VIOLATED(위반), NOT_EVALUABLE(판정 불가)로 구분합니다."
        ],
        [
          "준수율과 Coverage",
          "판정 가능한 규칙의 준수율과 전체 규칙 중 평가 가능한 범위를 함께 봅니다. 계획·지표가 없거나 자동 평가가 불가능한 규칙을 위반으로 처리하지 않습니다."
        ]
      ],
      "steps": [
        [
          "전략과 규칙을 만듭니다",
          "의도한 진입·리스크·청산 기준을 기록합니다."
        ],
        [
          "사용한 버전을 연결합니다",
          "저널의 거래에 당시 사용한 정확한 버전을 선택합니다."
        ],
        [
          "의도와 실행을 대조합니다",
          "관측값과 판정 이유를 보고, 기준 변경은 새 버전으로 남깁니다."
        ]
      ],
      "example": "예: 최대 보유시간을 바꿨다면 새 버전을 만듭니다. 이전 거래는 이전 버전에 연결된 상태로 남아 당시 기준으로 복기할 수 있습니다.",
      "connection": "‘따르려던 전략’은 Playbook에, ‘실제로 한 일’은 저널에 남깁니다. Analytics와 Trading Review가 두 기록을 함께 검토하도록 연결합니다.",
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
          "Define the strategy",
          "Write intended entry, risk, and exit rules."
        ],
        [
          "Assign the version used",
          "Select the exact version for the trade in Journal."
        ],
        [
          "Compare intent and execution",
          "Inspect observations and reasons; record changed criteria in a new version."
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
      "title": "Analytics Workspace · 기록에서 패턴 찾기",
      "description": "전략·Setup·심리·종목·방향·시간·규칙별 지표를 비교하고 필터와 표본 수를 함께 살펴보세요.",
      "capabilities": [
        [
          "성과와 전략 비교",
          "손익·수익률 등 지원 지표를 전략과 전략 버전별로 비교합니다."
        ],
        [
          "Setup과 심리 분석",
          "사용자가 남긴 Setup, 감정, 자신감·집중도와 행동 기록을 조건으로 결과를 살펴봅니다."
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
          "비교할 질문을 정합니다",
          "예를 들어 전략별 성과나 규칙 준수별 차이를 선택합니다."
        ],
        [
          "지표와 범위를 고릅니다",
          "기간·필터·비교 조건을 설정해 같은 정의의 결과를 봅니다."
        ],
        [
          "표본과 근거를 확인합니다",
          "관찰된 차이와 데이터 부족을 구분하고 관련 거래를 다시 검토합니다."
        ]
      ],
      "example": "예: 특정 시간대의 성과가 낮아 보여도 거래가 몇 건인지 먼저 확인합니다. 시간대가 손실의 원인이라는 결론으로 곧바로 이어지지는 않습니다.",
      "connection": "저널의 기록과 Playbook 버전이 비교의 기준이 됩니다. 발견한 패턴은 Trading Review에서 검토하고 Experiments에서 측정할 가설로 연결할 수 있습니다.",
      "screenshot": "Analytics Workspace의 지표·조건 선택, 결과 표와 표본 수"
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
          "Choose a question",
          "Start with a strategy comparison or a difference by rule adherence."
        ],
        [
          "Select metric and scope",
          "Set the period, filters, and grouping to compare consistently defined results."
        ],
        [
          "Inspect sample and evidence",
          "Separate observed differences from missing data and revisit relevant trades."
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
      "title": "Trading Review · 전략과 실행을 함께 검토하기",
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
          "전략 vs 실행",
          "전략의 관찰된 결과와 실행 과정의 근거를 구분해 전략 또는 실행 중 어디를 더 검토할지 판단합니다."
        ],
        [
          "근거의 한계 표시",
          "표본이나 정보가 부족하고 서로 충돌하면 결론을 유보합니다. 전체 규칙 준수율이 곧 실행 품질 진단을 뜻하지는 않습니다."
        ]
      ],
      "steps": [
        [
          "복기 범위를 고릅니다",
          "검토할 기간과 대상 거래를 정합니다."
        ],
        [
          "두 축의 근거를 읽습니다",
          "전략 결과와 실행 근거, 패턴과 데이터 품질을 함께 확인합니다."
        ],
        [
          "다음 질문을 남깁니다",
          "계획과 실제 실행을 더 살피거나, 관찰한 문제로 실험 초안을 만듭니다."
        ]
      ],
      "example": "예: 전략 성과는 양호해 보이는데 실행 근거가 약하다면, 전략 전체를 바꾸기 전에 규칙 위반이나 계획 이탈의 근거부터 검토할 수 있습니다.",
      "connection": "Analytics의 숫자와 저널의 맥락을 복기로 연결합니다. 계획 비교가 필요하면 Plan Lab으로, 측정할 행동이 정해졌다면 Experiments로 이어갑니다.",
      "screenshot": "Trading Review의 기간 요약, 패턴과 Strategy vs Execution 근거"
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
          "Choose the review scope",
          "Select a period and trade cohort."
        ],
        [
          "Read both evidence axes",
          "Inspect strategy outcomes, process evidence, patterns, and data quality."
        ],
        [
          "Choose the next question",
          "Review the plan against execution or draft an experiment from a finding."
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
      "title": "Plan Lab · 계획과 실행을 비교하기",
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
          "계획 변경은 새 revision으로 남습니다. 기존 revision을 덮어쓰지 않아 당시 저장한 값과 수정 순서를 보존합니다."
        ],
        [
          "계획 대비 실행",
          "사용 가능한 계획과 시장 경로로 실제 결과와 계획 결과를 비교합니다. 데이터 부족이나 부적격 계획은 제한을 표시합니다."
        ]
      ],
      "steps": [
        [
          "계획 종류를 선택합니다",
          "사전 계획을 남기거나 확인된 진행중 포지션·종료 거래를 선택합니다."
        ],
        [
          "기준을 저장합니다",
          "손절·목표·보유시간을 기록하고, 변경할 때 수정 이력을 추가합니다."
        ],
        [
          "거래 후 비교합니다",
          "계획 기록 시점과 평가 가능 범위를 확인하며 실제 실행과 차이를 검토합니다."
        ]
      ],
      "example": "예: 거래 중 손절을 변경했다면 변경 이력을 남깁니다. 종료 후 입력한 계획도 복기에 활용할 수 있지만, 거래 전부터 존재한 계획으로 취급하지 않습니다.",
      "connection": "저널의 거래를 계획 기록과 연결해 의도와 실행을 살펴봅니다. 반복되는 차이는 Trading Review와 다음 행동 실험에서 검토할 질문이 됩니다.",
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
          "Choose a plan type",
          "Record a pre-trade plan or select a verified open position or closed trade."
        ],
        [
          "Save the criteria",
          "Record stops, targets, and holding time; add a revision when the plan changes."
        ],
        [
          "Compare after the trade",
          "Review recording time and evaluable scope while inspecting deviations from execution."
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
      "title": "Experiments · 정한 기준으로 변화를 측정하기",
      "description": "행동 실험의 가설·지표·목표를 정의하고 활성화한 뒤, Measure로 기준 기간 대비 변화와 목표 충족 여부를 확인하세요.",
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
          "Measure의 결과",
          "같은 지표·조건으로 현재값과 기준값의 차이를 보고, 목표 충족·미충족·평가 불가를 구분합니다."
        ]
      ],
      "steps": [
        [
          "가설과 목표를 정합니다",
          "무엇을 바꿀지, 어떤 지표와 표본으로 판단할지 초안에 기록합니다."
        ],
        [
          "검토 후 활성화합니다",
          "실험 기간보다 앞선 비교 기간을 정하고, 조건을 확인해 실험을 시작합니다."
        ],
        [
          "Measure로 검토합니다",
          "목표 충족 여부와 표본·근거를 확인하고 다음 행동을 결정합니다."
        ]
      ],
      "example": "예: 규칙 준수율을 목표 지표로 정하고 최소 표본을 확보한 뒤 측정합니다. 목표를 충족해도 그 행동이 수익 개선을 일으켰다는 인과 증명은 아닙니다.",
      "connection": "Trading Review의 발견을 실행할 가설로 바꾸고, Analytics와 같은 지표 정의로 비교합니다. 검토한 결과는 다음 계획과 저널 기록에 반영합니다.",
      "screenshot": "실험 가설·목표·활성 상태와 Measure의 기준값·현재값·판정"
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
          "Define hypothesis and target",
          "Write what will change and which metric and sample will evaluate it."
        ],
        [
          "Review and activate",
          "Choose an earlier, non-overlapping baseline, check the criteria, and start the experiment."
        ],
        [
          "Review in Measure",
          "Inspect target status and sample evidence to decide your next action."
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
