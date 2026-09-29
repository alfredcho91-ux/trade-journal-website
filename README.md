# Trade Journal Website

Trade Journal의 공식 소개·다운로드용 정적 웹사이트입니다. React + Vite로 구성되어 있으며 백엔드를 사용하지 않습니다.

현재 공개 다운로드 버전: `v1.0.26` (Windows 공개 베타, 53.9 MB)

## 포함 내용

- 프로그램 소개와 주요 기능
- `/features`: 기록하기 → 전략·실행 복기하기 → 계획하고 측정하기로 묶은 한/영 기능 안내. 기존 앵커는 유지하고, 메인 카드의 자세히 보기는 독립 상세 페이지로 연결합니다.
- 독립 상세 안내: `/features/journal`, `/features/strategy-playbook`(규칙 엔진 포함), `/features/analytics`, `/features/review`, `/features/plan-lab`, `/features/experiments`. 주요 기능·사용 순서·예시·관련 기능·저장 방식을 설명합니다.
- 각 상세 페이지는 한/영 전환을 지원하며, 기본 한국어 제목·설명·Open Graph 메타데이터를 빌드 시 HTML에도 포함합니다. 영어 전환 시 브라우저 메타데이터도 갱신됩니다.
- 기존 기능 캡처 6장은 접힌 ‘이전 제품 화면 참고’로 보존합니다. 현재 기본 UX를 보여주는 이미지로 소개하지 않습니다. 교체 대상과 이유는 아래에 기록했습니다. 관련 분석 화면 2장은 유지합니다.
- 실제 프로그램 스크린샷 기반 제품 소개
- 샘플 체험 → 짧은 저널 기록 → 안내형 분석 / 복기 → 계획 / 플레이북 → 실험 → 측정으로 이어지는 한/영 안내
- API 없이 여는 별도 샘플, 일반 프로필 복귀, 실제 자격 증명·동기화 미사용, 샘플 데이터 미이전
- 일일 저널에서 기록이 있는 샘플 날짜를 직접 여는 안내 (고정 예시 날짜는 문구에 넣지 않음)
- Strategy Playbook과 전략 버전 관리, 거래별 정확한 전략 버전 연결
- 기록된 사실을 준수·위반·판정 불가로 구분하는 규칙 엔진과 규칙 준수 분석
- 질문부터 선택하는 Guided Analytics와 선택적인 고급 분석
- 최대 3개 핵심 발견을 먼저 보여주는 Review, 표본·근거 부족·판단 보류와 상세 펼치기
- Review는 관찰을 제공하고 사용자는 빈 행동·가설 입력란에서 시험할 행동을 결정하는 실험 흐름
- 진입 전 기록·이후 변경·최신 계획·회고 기록의 구분과 비교 불가 사유 설명
- 읽기 쉬운 규칙, 선택적인 자동 평가, 유효한 글 전용 규칙과 정확한 전략 버전 이력
- Plan Lab의 계획 대비 실제 실행 분석과 Experiments의 기준 기간 비교 측정
- 기간 성과, 평균 보유시간, 매매 스타일 요약을 포함한 매매일지 소개
- 시장 흐름별 성과, 진입·청산 품질, 지표 기반 승패, 손절·익절 기대값 등 분석 소개
- 청산 후 1~10개 완료 봉 보유 결과와 근거 거래 드릴다운 흐름 소개
- 읽기 전용 API와 로컬 저장 보안 설명
- FAQ
- 거래소 API 발급·권한 설정·프로그램 연결 방법 안내
- 별도 `/guide` 경로의 Windows 설치 → 샘플 또는 내 거래 → 저널·안내형 분석·복기 → 선택적 API 연결 안내. 읽기 전용 권한과 앱에서만 자격 증명 입력 원칙 유지
- GitHub Releases 최신 Windows ZIP 다운로드 링크
- 공식 지원 거래소: Deepcoin SWAP, Binance
- 한국어 기본 / 영어 전환

## 콘텐츠 검증 기준 / Content baseline

Website baseline: `7fe8cc18aab3eea25c8d9c3b50c88ccb620c83b4`.
Product source: `d3ffee0bd3915721405b585a451b0dee5408d6fe`.
제품 main의 UX를 기준으로 한/영 안내를 맞췄으며 버전·다운로드 URL·크기·지원 거래소는 변경하지 않았습니다. 제품 main 자체가 새로운 릴리스의 증거는 아닙니다.

Both languages describe sample-first onboarding, optional short journal records, question-driven analytics, summary-first Review, user-owned experiment behavior, plan chronology, readable rules, and reasons for unavailable comparisons. Observed associations are not causal diagnoses, predictions, or prescriptions.

## 스크린샷 검토 / Screenshot review

이미지 파일은 교체하거나 생성하지 않았습니다. 다음 캡처는 현재 기본 UX와 달라 상세 페이지에서 이전 화면 참고로만 표시합니다. / Images are retained as collapsed historical references, not representations of the current default UX.

| 파일 / File | 교체 필요 이유 / Replacement needed |
| --- | --- |
| `feature-journal.png` | 매매일지 상세가 아닌 계획 목록 / Plan list, not Journal detail |
| `feature-strategy-playbook.png` | 원시 조건 식별자 노출 / Raw rule identifiers instead of readable conditions |
| `feature-analytics.png` | 지표·분류 설정 우선 / Builder-first rather than Guided Analytics |
| `feature-trading-review.png` | 상세 근거 우선 / Detailed evidence rather than the top-findings summary |
| `feature-plan-lab.png` | 버전 표시·계산 대기 화면 / Lacks current chronology and unavailable-result explanations |
| `feature-experiments-measure.png` | 기존 활성 실험 설정 / Does not show the current Review-to-draft handoff |

`trade-analysis-evidence.png`와 `exit-hold-result.png`는 별도의 과거 경로 분석 예시로 유지합니다. / These remain examples of the separate detailed and post-exit analyses, not the Guided Analytics entry screen.

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

생성 결과는 `dist/`입니다.

## Cloudflare Pages

| 항목 | 값 |
| --- | --- |
| Framework preset | Vite |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Branch | `main` |

기본 다운로드 링크는 아래 Releases 주소를 사용합니다.

`https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Windows.zip`

현재 공개판은 Windows 10/11 x64용입니다. 주소를 변경해야 하면 Cloudflare Pages 환경변수 `VITE_WINDOWS_RELEASE_URL`을 지정합니다. API Key, Secret, Passphrase 같은 민감정보는 이 사이트에 넣지 않습니다.
