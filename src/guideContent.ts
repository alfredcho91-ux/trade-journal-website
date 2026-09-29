export const guideContent = {
  ko: {
    meta: {
      title: 'Trade Journal | 사용법 및 API 연결 가이드',
      description: 'Windows 설치, API 없는 샘플 체험, 짧은 기록과 안내형 분석, 선택적 읽기 전용 거래소 연결을 설명하는 가이드.',
    },
    header: { home: '제품 소개', language: '영문으로 보기', languageLabel: '영문', download: 'Windows 다운로드' },
    hero: {
      eyebrow: 'Trade Journal 사용 가이드',
      title: '설치부터 샘플 체험과 내 거래 복기까지',
      copy: '설치 후 API 없이 샘플을 먼저 체험하거나 내 거래소를 읽기 전용으로 연결하세요. 짧은 저널 기록과 질문형 분석, 복기 요약을 살펴본 뒤 필요한 경우 아래 API 안내를 따라 내 거래를 가져오면 됩니다.',
      time: '예상 소요 시간', timeValue: '약 10분', platform: '지원 환경', platformValue: 'Windows 10/11 · x64', support: '지원 거래소', supportValue: 'Deepcoin SWAP · Binance SWAP',
      start: '빠른 시작 보기',
    },
    tocTitle: '이 페이지에서',
    toc: [['#quick-start', '전체 과정'], ['#install', 'Windows 설치'], ['#sample', '샘플 또는 내 거래'], ['#api', '선택: API 키 발급'], ['#permissions', '권한 설정'], ['#connect', '앱 연결'], ['#sync', '동기화'], ['#troubleshoot', '문제 해결'], ['#security', '보관과 삭제']],
    quick: {
      eyebrow: '빠른 시작', title: '샘플부터 시작해도 됩니다.', copy: 'API 연결은 내 거래를 가져올 때 선택합니다. 샘플 체험에는 자격 증명이 필요하지 않습니다.',
      steps: [['01', '프로그램 설치', '공식 Windows ZIP을 받아 완전히 압축 해제합니다.'], ['02', '샘플 또는 내 거래 선택', 'API 없이 샘플을 열거나 내 프로필에서 읽기 전용 연결을 선택합니다.'], ['03', '기록과 질문 살펴보기', '저널의 짧은 기록, 안내형 분석 질문, 복기 핵심 발견을 살펴봅니다.'], ['04', '필요할 때 내 거래 연결', '샘플에서 일반 프로필로 돌아온 뒤 아래 API·권한·연결 안내를 따릅니다.']],
    },
    safety: { title: '가장 중요한 보안 원칙', copy: '읽기 / 조회 권한만 켜고 주문, 선물 주문, 출금, 자산 이동 권한은 모두 끄세요. API 키, 비밀 키, 암호 문구를 다른 사람에게 보내거나 화면 캡처에 포함하지 마세요.' },
    install: {
      eyebrow: '1단계 · Windows', title: '다운로드하고 실행합니다.',
      steps: [['공식 파일 받기', 'GitHub 릴리스에서 Trade-Journal-Windows.zip을 다운로드합니다.'], ['차단 해제 확인', 'ZIP을 우클릭해 속성을 열고, 차단 해제가 보이면 체크한 뒤 적용합니다.'], ['완전히 압축 풀기', 'ZIP 내부에서 바로 실행하지 말고 원하는 폴더에 모든 파일을 압축 해제합니다.'], ['실행 파일 열기', '압축을 푼 폴더에서 Trade Journal\\Trade Journal.exe를 실행합니다.'], ['SmartScreen 확인', '경고가 나타나면 공식 GitHub 파일인지 확인한 뒤 추가 정보 → 실행을 선택합니다.'], ['로컬 화면 확인', '프로그램이 시작되면 기본 브라우저에 Trade Journal 화면이 열립니다.']],
      noteTitle: 'Windows 보안 기능을 끌 필요는 없습니다.', note: '현재 공개 빌드는 코드 서명이 없어 SmartScreen 경고가 표시될 수 있습니다. 실시간 보호는 그대로 두고, 반드시 공식 GitHub 릴리스에서 받은 파일인지 확인하세요.',
      exitTitle: '정상 종료', exit: '프로그램 오른쪽 위 전원 아이콘을 누르면 로컬 서버까지 종료됩니다. 브라우저만 닫아도 저장된 API 자격 증명은 삭제되지 않습니다.',
    },
    sample: {
  "eyebrow": "API 없이 먼저 체험",
  "title": "샘플로 살펴보거나 내 거래로 시작하세요.",
  "copy": "샘플은 합성 거래임을 표시하는 별도 작업공간입니다. 실제 거래소 자격 증명이나 동기화를 사용하지 않으며 샘플 데이터가 일반 프로필로 이전되지 않습니다.",
  "steps": [
    [
      "샘플 작업공간 열기",
      "앱의 시작 안내에서 샘플 체험을 선택합니다. 거래소 API 키를 만들거나 입력할 필요가 없습니다."
    ],
    [
      "짧은 기록과 하루의 예시 보기",
      "자신감·집중도·FOMO·메모 등 기록된 맥락을 살펴보세요. 일일 저널의 기록이 있는 샘플 날짜 보기로 작성된 하루의 예시를 바로 열 수 있습니다."
    ],
    [
      "질문과 핵심 발견 읽기",
      "안내형 분석에서 질문을 선택하고 복기에서 최대 3개의 핵심 발견을 확인합니다. 근거 부족이나 판단 보류는 실패가 아닙니다."
    ],
    [
      "일반 프로필로 돌아오기",
      "샘플 종료로 내 프로필에 돌아옵니다. 내 거래를 가져오려면 아래 안내대로 읽기 전용 API를 연결하세요. 실제 키는 데스크톱 앱에만 입력합니다."
    ]
  ]
},
    api: {
      eyebrow: '선택 · 내 거래 연결', title: '거래소에서 읽기 전용 API 키를 만듭니다.', copy: '거래소의 메뉴 이름은 바뀔 수 있지만 원칙은 같습니다. Trade Journal 전용 키를 만들고 조회 권한만 허용하세요.', choose: '연결할 거래소', required: '필요한 입력값',
      exchanges: {
        deepcoin: { name: 'Deepcoin', badge: '암호 문구 필요', fields: ['API 키', 'API 비밀 키', '암호 문구'], steps: ['Deepcoin에 로그인하고 API 관리 또는 API 키 메뉴를 엽니다.', '새 API 키를 만들고 Trade Journal처럼 알아볼 수 있는 이름을 지정합니다.', '키 생성 과정에서 별도의 암호 문구를 직접 정합니다.', '읽기 또는 조회 권한만 켜고 거래·출금·자산 이동 권한은 모두 끕니다.', '가능하면 현재 컴퓨터의 공인 IP만 허용합니다.', 'API 키와 비밀 키를 안전하게 복사합니다. 비밀 키는 다시 표시되지 않을 수 있습니다.'], warning: 'API 비밀 키와 암호 문구는 서로 다른 값입니다. 앱에 입력할 때 두 값을 바꾸지 마세요.' },
        binance: { name: 'Binance', badge: '암호 문구 불필요', fields: ['API 키', 'API 비밀 키'], steps: ['Binance에 로그인하고 API 관리 또는 API 키 메뉴를 엽니다.', '새 API 키를 만들고 Trade Journal처럼 알아볼 수 있는 이름을 지정합니다.', '읽기 활성화 권한만 유지합니다.', '현물·마진 거래, 선물 거래, 출금, 자산 이동 권한은 모두 끕니다.', '가능하면 현재 컴퓨터의 공인 IP만 허용합니다.', 'API 키와 비밀 키를 안전하게 복사합니다. Binance에는 암호 문구를 입력하지 않습니다.'], warning: '현재 공식 데스크톱 공개판은 Binance SWAP 종료 거래를 지원합니다. Binance 현물 기록은 지원 범위가 아닙니다.' },
      },
    },
    permissions: {
      eyebrow: '권한 확인', title: '저장하기 전에 권한을 다시 확인하세요.', columns: ['권한', '설정', '이유'], rows: [['읽기 / 조회', '켜기', '종료 거래 기록을 읽는 데 필요'], ['주문 / 거래', '끄기', 'Trade Journal은 주문을 실행하지 않음'], ['선물 거래', '끄기', '선물 주문 권한은 필요하지 않음'], ['출금', '끄기', '출금 기능을 제공하지 않음'], ['자산 이동', '끄기', '자산 이동 권한은 필요하지 않음']],
    },
    connect: {
      eyebrow: '내 거래 연결 · 앱에서 저장', title: '앱에서 연결을 확인하고 저장합니다.',
      steps: [['Trade Journal 실행', '프로그램 실행 후 브라우저에 열린 로컬 화면을 사용합니다.'], ['매매일지 열기', '왼쪽 메뉴에서 매매일지로 이동합니다.'], ['API 연결 선택', '동기화 영역의 API 연결 버튼을 누릅니다.'], ['거래소 선택', 'Deepcoin 또는 Binance를 선택합니다.'], ['자격 증명 입력', 'API 키와 API 비밀 키를 입력합니다. Deepcoin만 암호 문구를 추가로 입력합니다.'], ['연결 확인 및 저장', '읽기 권한 확인에 성공한 연결만 운영체제 보호 저장소에 저장됩니다.'], ['첫 동기화 대기', '처음 연결이 성공하면 최근 30일 종료 거래를 한 번 자동으로 가져옵니다.']],
      demoTitle: '앱에 입력하는 값', action: '연결 확인 및 저장', secure: '실제 키는 이 웹사이트가 아닌 내 컴퓨터의 Trade Journal에만 입력합니다.',
    },
    sync: {
      eyebrow: '내 거래 연결 · 동기화', title: '종료 거래를 가져오고 복기를 시작합니다.',
      firstTitle: '첫 연결', first: '연결 확인이 성공하면 최근 30일 종료 거래가 한 번 자동 동기화됩니다.', laterTitle: '이후 동기화', later: '매매일지에서 거래소와 SWAP을 선택하고 원하는 기간을 지정한 뒤 동기화 버튼을 누릅니다.',
      facts: [['중복 방지', '같은 거래는 거래소 식별자를 기준으로 중복 저장되지 않도록 정리됩니다.'], ['종료 거래 중심', '현재 공개판의 저널과 분석은 종료된 SWAP 거래를 기준으로 합니다.'], ['긴 기간 조회', '거래소 API 제한으로 오래 걸릴 수 있으므로 7일 또는 30일부터 확인하세요.'], ['로컬 분석', '이미 저장된 거래는 연결이 없어도 계속 분석할 수 있습니다.']],
    },
    troubleshoot: {
      eyebrow: '문제 해결', title: '연결되지 않을 때 확인할 항목', items: [['연결 확인에 실패합니다', 'API 키와 비밀 키 앞뒤 공백을 지우고 다시 입력하세요. Deepcoin은 비밀 키와 암호 문구가 서로 바뀌지 않았는지 확인합니다.'], ['IP 제한 오류가 표시됩니다', '현재 공인 IP가 거래소 API 허용 목록에 정확히 등록되어 있는지 확인하세요. 네트워크가 바뀌면 공인 IP도 바뀔 수 있습니다.'], ['거래가 보이지 않습니다', '종료된 SWAP 거래인지, 선택한 동기화 기간 안에 있는지 확인하세요. Binance 현물 거래는 공식 지원 범위가 아닙니다.'], ['동기화가 너무 오래 걸립니다', '최근 7일 또는 30일처럼 짧은 기간부터 성공 여부를 확인한 뒤 범위를 늘리세요.'], ['SmartScreen 경고가 나옵니다', '공식 GitHub 릴리스에서 받은 파일인지 확인하고 추가 정보 → 실행을 선택하세요. Windows 보안 기능은 끄지 마세요.'], ['브라우저를 닫았습니다', 'Trade Journal.exe를 다시 실행하면 화면을 다시 열 수 있습니다. 완전히 종료하려면 프로그램의 전원 아이콘을 사용하세요.']],
      helpTitle: '그래도 해결되지 않나요?', help: 'API 키나 비밀 키는 첨부하지 말고 거래소 이름, 오류 문구, 사용한 거래 유형(SWAP)만 GitHub 이슈에 남겨주세요.', issue: 'GitHub 이슈 열기',
    },
    security: {
      eyebrow: '자격 증명', title: '연결 정보는 로컬 보호 저장소에 보관됩니다.', items: [['Windows 자격 증명 관리자', '데스크톱 앱은 브라우저 저장소가 아니라 운영체제의 보안 저장소를 사용합니다.'], ['화면과 로그에서 숨김', '저장된 API 비밀 키는 화면이나 로그에 다시 표시되지 않습니다.'], ['앱에서 연결 삭제', 'API 연결 화면에서 연결을 삭제하면 저장된 해당 거래소 자격 증명도 삭제됩니다.'], ['거래소에서 키 폐기', '더 이상 사용하지 않는다면 앱에서 삭제한 뒤 거래소 API 관리 화면에서도 키를 폐기하세요.']],
    },
    finish: { eyebrow: '준비 완료', title: '이제 지난 거래를 검토할 준비가 끝났습니다.', copy: '짧은 기록을 남기고 안내형 분석과 복기 요약에서 관찰된 차이·표본·근거의 한계를 살펴보세요.', home: '제품 기능 보기', download: 'Windows 다운로드' },
    footer: '현재 Windows 공개판의 Deepcoin SWAP·Binance SWAP 지원 범위를 기준으로 작성되었습니다.',
  },
  en: {
    meta: { title: 'Trade Journal | Setup and API connection guide', description: 'Windows setup, a sample without API credentials, short records, Guided Analytics, and optional read-only exchange connection.' },
    header: { home: 'Product overview', language: '한국어로 보기', languageLabel: '한국어', download: 'Download for Windows' },
    hero: { eyebrow: 'TRADE JOURNAL USER GUIDE', title: 'From installation to a sample and your own review', copy: 'After installing, try the sample without API credentials or connect your exchange read-only. Explore short Journal records, Guided Analytics questions, and Review summaries, then follow the API instructions if you want to import your own trades.', time: 'Estimated time', timeValue: 'About 10 minutes', platform: 'Platform', platformValue: 'Windows 10/11 · x64', support: 'Supported exchanges', supportValue: 'Deepcoin SWAP · Binance SWAP', start: 'View quick start' },
    tocTitle: 'ON THIS PAGE',
    toc: [['#quick-start', 'Overview'], ['#install', 'Windows setup'], ['#sample', 'Sample or your trades'], ['#api', 'Optional: API key'], ['#permissions', 'Permissions'], ['#connect', 'Connect app'], ['#sync', 'Sync'], ['#troubleshoot', 'Troubleshoot'], ['#security', 'Storage and removal']],
    quick: { eyebrow: 'QUICK START', title: 'You can start with the sample.', copy: 'An API connection is optional for importing your own trades. No credentials are required to try the sample.', steps: [['01', 'Install the app', 'Download the official Windows ZIP and extract every file.'], ['02', 'Choose sample or your trades', 'Open the sample without API keys, or choose a read-only connection in your normal profile.'], ['03', 'Explore records and questions', 'Look at short Journal records, Guided Analytics questions, and key Review findings.'], ['04', 'Connect your trades when ready', 'Return from the sample to your normal profile, then follow the API, permission, and connection instructions below.']] },
    safety: { title: 'The most important security rule', copy: 'Enable Read / View only. Disable orders, futures orders, withdrawals, and asset transfers. Never send anyone your API Key, Secret, or Passphrase or include them in screenshots.' },
    install: { eyebrow: 'STEP 01 · WINDOWS', title: 'Download and launch the app.', steps: [['Download the official file', 'Get Trade-Journal-Windows.zip from GitHub Releases.'], ['Check Unblock', 'Right-click the ZIP, open Properties, select Unblock if shown, and apply.'], ['Extract everything', 'Do not run from inside the ZIP. Extract every file to a folder first.'], ['Open the executable', 'Run Trade Journal\\Trade Journal.exe from the extracted folder.'], ['Confirm SmartScreen', 'Verify the official GitHub source, then choose More info → Run anyway.'], ['Check the local page', 'Trade Journal opens its local interface in your default browser.']], noteTitle: 'You do not need to disable Windows security.', note: 'The public build may be unsigned and trigger SmartScreen. Keep real-time protection enabled and verify that the file came from official GitHub Releases.', exitTitle: 'Exit cleanly', exit: 'Use the power icon in the top-right to stop the local server. Closing the browser does not delete saved credentials.' },
    sample: {
  "eyebrow": "TRY BEFORE API SETUP",
  "title": "Explore the sample or start with your trades.",
  "copy": "The sample is a separate workspace with clearly labelled synthetic trades. It uses no real exchange credentials or sync, and sample data never migrates into your normal profile.",
  "steps": [
    [
      "Open the sample workspace",
      "Choose the sample option in the app’s starting guidance. You do not need to create or enter API credentials."
    ],
    [
      "Explore short records and an example day",
      "Inspect recorded confidence, focus, FOMO, and notes. In Daily Journal, use View a populated sample day to open an existing daily review directly."
    ],
    [
      "Read questions and key findings",
      "Choose a question in Guided Analytics and inspect up to three key findings in Review. Insufficient evidence or an inconclusive result is not failure."
    ],
    [
      "Return to your normal profile",
      "Exit the sample to return to your profile. To import your trades, follow the read-only API instructions below. Enter real keys only inside the desktop app."
    ]
  ]
},
    api: { eyebrow: 'OPTIONAL · CONNECT YOUR TRADES', title: 'Create a read-only API key at the exchange.', copy: 'Menu names may change, but the rule does not: create a dedicated Trade Journal key and allow read access only.', choose: 'Choose an exchange', required: 'Credentials required', exchanges: {
      deepcoin: { name: 'Deepcoin', badge: 'Passphrase required', fields: ['API Key', 'API Secret', 'Passphrase'], steps: ['Sign in to Deepcoin and open API Management or API Keys.', 'Create a new key with a recognizable name such as Trade Journal.', 'Set a separate Passphrase while creating the key.', 'Keep Read or View only. Disable trading, withdrawals, and asset transfers.', 'If possible, allow only this computer’s public IP.', 'Copy the API Key and Secret safely. The Secret may not be shown again.'], warning: 'API Secret and Passphrase are different values. Do not swap them in the app.' },
      binance: { name: 'Binance', badge: 'No passphrase', fields: ['API Key', 'API Secret'], steps: ['Sign in to Binance and open API Management or API Keys.', 'Create a new key with a recognizable name such as Trade Journal.', 'Keep only Enable Reading.', 'Disable Spot & Margin Trading, Futures Trading, withdrawals, and asset transfers.', 'If possible, allow only this computer’s public IP.', 'Copy the API Key and Secret safely. Do not enter a Passphrase for Binance.'], warning: 'The current desktop release supports Binance SWAP closed trades. Binance SPOT history is outside the supported scope.' },
    } },
    permissions: { eyebrow: 'PERMISSION CHECK', title: 'Check permissions again before saving.', columns: ['Permission', 'Setting', 'Reason'], rows: [['Read / View', 'On', 'Required to read closed trade history'], ['Order / Trading', 'Off', 'Trade Journal never places orders'], ['Futures Trading', 'Off', 'Futures-order access is not needed'], ['Withdrawal', 'Off', 'The app has no withdrawal function'], ['Asset Transfer', 'Off', 'Asset movement access is not needed']] },
    connect: { eyebrow: 'YOUR TRADES · SAVE IN THE APP', title: 'Verify and save the connection in the app.', steps: [['Launch Trade Journal', 'Use the local page opened in your browser.'], ['Open Journal', 'Choose Journal from the left navigation.'], ['Choose API Connection', 'Select API Connection in the sync area.'], ['Select the exchange', 'Choose Deepcoin or Binance.'], ['Enter credentials', 'Enter API Key and API Secret. Deepcoin also requires Passphrase.'], ['Verify and save', 'Only a connection that passes the read-access check is saved in protected OS storage.'], ['Wait for the first sync', 'The first successful connection imports the most recent 30 days of closed trades once.']], demoTitle: 'Values entered in the app', action: 'Verify and save connection', secure: 'Enter real credentials only in Trade Journal on your computer, never on this website.' },
    sync: { eyebrow: 'YOUR TRADES · SYNC', title: 'Import closed trades and start reviewing.', firstTitle: 'First connection', first: 'After verification succeeds, the app automatically imports the most recent 30 days of closed trades once.', laterTitle: 'Later syncs', later: 'In Journal, choose the exchange and SWAP, select a date range, then press Sync.', facts: [['Deduplication', 'Exchange identifiers keep the same trade from being stored twice.'], ['Closed-trade focus', 'The current journal and analysis are based on closed SWAP trades.'], ['Long date ranges', 'Exchange rate limits can make them slow, so start with 7 or 30 days.'], ['Local analysis', 'Previously saved trades remain available without a live connection.']] },
    troubleshoot: { eyebrow: 'TROUBLESHOOTING', title: 'What to check when connection fails', items: [['Verification fails', 'Remove spaces around API Key and Secret. For Deepcoin, confirm that Secret and Passphrase were not swapped.'], ['IP restriction error', 'Confirm that the exchange allowlist contains your current public IP. It can change with your network.'], ['Trades do not appear', 'Confirm they are closed SWAP trades inside the selected range. Binance SPOT is unsupported.'], ['Sync takes too long', 'Try 7 or 30 days first, then increase the range after a successful check.'], ['SmartScreen warns', 'Verify the official GitHub Releases source and choose More info → Run anyway. Do not disable Windows security.'], ['The browser was closed', 'Run Trade Journal.exe again to reopen the app. Use the power icon for a full shutdown.']], helpTitle: 'Still stuck?', help: 'Never attach an API Key or Secret. Include only the exchange, error text, and market type (SWAP) in a GitHub Issue.', issue: 'Open GitHub Issues' },
    security: { eyebrow: 'CREDENTIALS', title: 'Connection details stay in protected local storage.', items: [['Windows Credential Manager', 'The desktop app uses the operating-system secure store, not browser storage.'], ['Hidden from screens and logs', 'A saved API Secret is not shown again or written to logs.'], ['Remove in the app', 'Deleting the connection also deletes its saved exchange credentials.'], ['Revoke at the exchange', 'When no longer used, delete it in the app and revoke the key at the exchange.']] },
    finish: { eyebrow: 'READY', title: 'You are ready to review past trades.', copy: 'Keep short records, then inspect observed differences, samples, and evidence limits through Guided Analytics and Review summaries.', home: 'Explore product features', download: 'Download for Windows' },
    footer: 'This guide reflects the Deepcoin SWAP and Binance SWAP scope of the current Windows public release.',
  },
} as const;
