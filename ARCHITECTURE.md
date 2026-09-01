# Architecture

## 목적

`trade-journal-website`는 Trade Journal 데스크톱 프로그램을 소개하고 공식 다운로드 경로를 제공하는 정적 사이트입니다. 사용자 거래 데이터와 거래소 API를 다루지 않으며, 백엔드와 데이터베이스가 없습니다.

## 구조

```text
Browser
  -> Vite static assets
     -> React App
        -> product and current-release information
        -> GitHub Releases download link
        -> GitHub source link
```

주요 제품 소개는 랜딩 페이지 안에서 섹션 앵커로 이동하며, 상세 설치 문서는 별도 `/guide` 경로로 제공합니다.

- `src/main.tsx`: React 진입점
- `src/App.tsx`: 홈페이지 섹션, 언어 전환, 모바일 메뉴, FAQ와 스크린샷 확대 상태
- `src/GuidePage.tsx`: Windows 설치, 거래소 API 권한, 앱 연결, 동기화와 문제 해결 가이드
- `src/guideContent.ts`: 상세 가이드의 한국어·영어 원문
- `src/content.tsx`: 한국어·영어 제품 카피와 FAQ 원문
- `src/styles.css`: 제품 마케팅 사이트 디자인 시스템과 반응형 레이아웃
- `public/screenshots/`: 실제 데스크톱 앱 화면
- `public/_redirects`: 정적 호스팅 SPA fallback
- `VITE_WINDOWS_RELEASE_URL`: 공개 Windows ZIP 링크를 교체할 수 있는 선택적 환경변수

공개판 정보는 현재 배포된 Windows 버전과 실제 지원 범위에 맞춰 코드 상수로 관리합니다. 거래 데이터나 실시간 시세를 호출하지 않습니다.

## 배포 경계

Cloudflare Pages에는 이 저장소의 루트만 연결합니다. Build command는 `npm run build`, output directory는 `dist`입니다. GitHub Releases의 ZIP은 사이트 빌드에 포함하지 않고 공개 링크로 연결합니다. 현재 공개 대상은 Windows 10/11 x64 빌드입니다.

이 저장소에는 API Key, API Secret, Passphrase, credential master key, 개인 거래 DB를 절대 저장하지 않습니다.
