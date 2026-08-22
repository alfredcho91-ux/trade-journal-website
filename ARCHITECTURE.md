# Architecture

## 목적

`trade-journal-website`는 Trade Journal Free 데스크톱 프로그램을 소개하고 공식 다운로드 경로를 제공하는 정적 사이트입니다. 사용자 거래 데이터와 거래소 API를 다루지 않으며, 백엔드와 데이터베이스가 없습니다.

## 구조

```text
Browser
  -> Vite static assets
     -> React App
        -> product preview UI
        -> GitHub Releases download link
        -> GitHub source link
```

주요 화면은 단일 랜딩 페이지 안에서 섹션 앵커로 이동합니다.

- `src/main.tsx`: 섹션 구성, 제품 미리보기, FAQ 상태, 다운로드 URL
- `src/styles.css`: 반응형 어두운 트레이딩 플랫폼 스타일
- `public/_redirects`: 정적 호스팅 SPA fallback
- `VITE_WINDOWS_RELEASE_URL`, `VITE_MACOS_RELEASE_URL`: 공개 Windows/macOS ZIP 링크를 교체할 수 있는 선택적 환경변수

제품 미리보기는 실제 무료판 화면의 정보 구조를 설명하기 위한 정적 UI입니다. 거래 데이터나 실시간 시세를 호출하지 않습니다.

## 배포 경계

Cloudflare Pages에는 이 저장소의 루트만 연결합니다. Build command는 `npm run build`, output directory는 `dist`입니다. GitHub Releases의 ZIP은 사이트 빌드에 포함하지 않고 공개 링크로 연결합니다.

이 저장소에는 API Key, API Secret, Passphrase, credential master key, 개인 거래 DB를 절대 저장하지 않습니다.
