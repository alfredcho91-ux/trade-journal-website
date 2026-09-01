# Trade Journal Website

Trade Journal의 공식 소개·다운로드용 정적 웹사이트입니다. React + Vite로 구성되어 있으며 백엔드를 사용하지 않습니다.

현재 공개 다운로드 버전: `v1.0.14` (Windows 공개 베타)

## 포함 내용

- 프로그램 소개와 주요 기능
- 실제 프로그램 스크린샷 기반 제품 소개
- 거래 → 성과 → 패턴 → 근거 거래 → 복기 기준으로 이어지는 제품 흐름
- 기간 성과, 평균 보유시간, 매매 스타일 요약을 포함한 매매일지 소개
- 시장 흐름별 성과, 진입·청산 품질, 지표 기반 승패, 손절·익절 기대값 등 분석 소개
- 청산 후 1~10개 완료 봉 보유 결과와 근거 거래 드릴다운 흐름 소개
- 읽기 전용 API와 로컬 저장 보안 설명
- FAQ
- 거래소 API 발급·권한 설정·프로그램 연결 방법 안내
- 별도 `/guide` 경로의 상세 Windows 설치·API 연결·동기화·문제 해결 문서
- GitHub Releases 최신 Windows ZIP 다운로드 링크
- 공식 지원 거래소: Deepcoin SWAP, Binance
- 한국어 기본 / 영어 전환

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
