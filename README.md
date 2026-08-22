# Trade Journal Website

Trade Journal Free의 공식 소개·다운로드용 정적 웹사이트입니다. React + Vite로 구성되어 있으며 백엔드를 사용하지 않습니다.

## 포함 내용

- 프로그램 소개와 주요 기능
- 매매일지·매매분석·Risk Lab 화면 미리보기
- 읽기 전용 API와 로컬 저장 보안 설명
- FAQ
- GitHub Releases 최신 Windows ZIP 다운로드 링크

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

기본 Windows 다운로드 링크는 아래 Releases 주소를 사용합니다.

`https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Free-Windows.zip`

주소를 변경해야 하면 Cloudflare Pages 환경변수 `VITE_WINDOWS_RELEASE_URL`을 지정합니다. API Key, Secret, Passphrase 같은 민감정보는 이 사이트에 넣지 않습니다.
