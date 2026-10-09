# Trade Journal Website

Trade Journal의 공식 소개·다운로드용 정적 웹사이트입니다. React + Vite로 구성되어 있으며 백엔드를 사용하지 않습니다.

일반 다운로드: `v1.0.26` (Windows x64, 53.9 MB). 최근 UI: `v1.0.28` 제한 베타 (54.2 MB).
GitHub의 `/releases/latest`는 제한 베타를 포함하지 않습니다. 기본 다운로드는 유지하고 베타 릴리스 페이지에서 변경 내용과 검증 한계를 안내합니다.

## 포함 내용

- 프로그램 소개와 주요 기능
- `/features`: 기록하기 → 전략·실행 복기하기 → 계획하고 측정하기로 묶은 한/영 기능 안내. 기존 앵커는 유지하고, 메인 카드의 자세히 보기는 독립 상세 페이지로 연결합니다.
- 독립 상세 안내: `/features/journal`, `/features/strategy-playbook`(규칙 엔진 포함), `/features/analytics`, `/features/review`, `/features/plan-lab`, `/features/experiments`. 주요 기능·사용 순서·예시·관련 기능·저장 방식을 설명합니다.
- 각 상세 페이지는 한/영 전환을 지원하며, 기본 한국어 제목·설명·Open Graph 메타데이터를 빌드 시 HTML에도 포함합니다. 영어 전환 시 브라우저 메타데이터도 갱신됩니다.
- 최근 업데이트 섹션과 가이드: 핵심 기간 성과 → 거래 목록, 상세 성과·차트·달력 펼치기, 샘플 안내, 리포트와 키보드 조작.
- 매매일지·플레이북·분석·복기·계획의 실제 합성 샘플 캡처를 v1.0.28 제한 베타 화면으로 표시합니다. 매매일지는 한/영 캡처를 사용합니다. 실험의 이전 캡처는 접힌 참고 화면으로 유지합니다.
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

Website baseline: `1b2cbe1a86125784ea88d9cacb04b44ae87e2b06`.
Product source: `9718c0a828f7244859f360d03d9e14103d20e625` (`v1.0.28`).
Verified 2026-10-09 against product source, UI audit records and published GitHub Releases.

- [일반 공개판 / Standard release v1.0.26](https://github.com/alfredcho91-ux/trade-journal-free/releases/tag/v1.0.26): 53,859,392 bytes, not marked prerelease.
- [제한 베타 / Limited beta v1.0.28](https://github.com/alfredcho91-ux/trade-journal-free/releases/tag/v1.0.28): 54,172,695 bytes, marked prerelease. Clean-machine Windows and live exchange acceptance remain outstanding; it is not promoted to the default download.
- Product source alone is not proof of a published release. The website package version is independent of the product download version.
- Desktop Windows product positioning remains. The responsive marketing site does not imply mobile app support.

Both languages cover the updated period summary, expandable details, dialog keyboard navigation, readable tables and sample guidance. Existing rule semantics, plan history, read-only credentials, evidence limits and user-owned experiments remain unchanged. Associations do not imply causes, predictions or prescriptions.

## 스크린샷 검토 / Screenshot review

제품의 실제 합성 샘플 검증 캡처를 그대로 재사용했습니다. 새 이미지 합성이나 실제 계정·거래 정보 사용은 없습니다. / Reused real application captures of synthetic sample data, without image alteration or private account data.

| Website asset | Verified product capture | Context |
| --- | --- | --- |
| `journal-v1.0.28-ko.jpg` | `.cache/design-polish/journal-final-ko-1440.png` | Korean summary-first Journal |
| `journal-v1.0.28-en.jpg` | `.cache/design-polish/journal-final-en-1440.png` | English summary-first Journal |
| `playbook-v1.0.28-ko.jpg` | `.cache/design-final/playbook-final-1440.png` | Readable rules and version history |
| `analytics-v1.0.28-ko.jpg` | `.cache/design-final/analytics-1440.png` | Guided long/short comparison and sample limits |
| `review-v1.0.28-ko.jpg` | `.cache/design-final/review-1440.png` | Observed findings first |
| `plan-v1.0.28-ko.jpg` | `.cache/design-final/plan-final-1440.png` | Closed-trade list and plan coverage |

The capture provenance is documented in the product's `docs/design/ui-regression-final.md` and `docs/releases/v1.0.28.md`. The source files have PNG names but JPEG contents; website extensions match their actual format. Bytes were copied unchanged. All six were visually checked for private identifiers before publication.

English pages label Korean screenshots where an English capture is unavailable. The Experiments capture remains a collapsed historical reference; it does not show the current observation-to-draft handoff. Earlier unused feature assets are retained for existing direct links. `trade-analysis-evidence.png` and `exit-hold-result.png` remain separate detailed/post-exit analysis examples.

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
