export const guideContent = {
  ko: {
    meta: {
      title: 'Trade Journal | 사용법 및 API 연결 가이드',
      description: 'Trade Journal Windows 설치부터 Deepcoin·Binance 읽기 전용 API 연결, 첫 거래 동기화까지 설명하는 상세 가이드.',
    },
    header: { home: '제품 소개', language: 'View in English', languageLabel: 'EN', download: 'Windows 다운로드' },
    hero: {
      eyebrow: 'TRADE JOURNAL 사용 가이드',
      title: '설치부터 첫 거래 동기화까지',
      copy: 'Trade Journal은 거래소의 종료 거래를 가져와 성과와 매매 패턴을 복기하는 로컬 Windows 프로그램입니다. 아래 순서대로 진행하면 읽기 전용 API 연결과 첫 동기화까지 완료할 수 있습니다.',
      time: '예상 소요 시간', timeValue: '약 10분', platform: '지원 환경', platformValue: 'Windows 10/11 · x64', support: '지원 거래소', supportValue: 'Deepcoin SWAP · Binance SWAP',
      start: '빠른 시작 보기',
    },
    tocTitle: '이 페이지에서',
    toc: [['#quick-start', '전체 과정'], ['#install', 'Windows 설치'], ['#api', 'API Key 발급'], ['#permissions', '권한 설정'], ['#connect', '앱 연결'], ['#sync', '동기화'], ['#troubleshoot', '문제 해결'], ['#security', '보관과 삭제']],
    quick: {
      eyebrow: 'QUICK START', title: '전체 과정은 네 단계입니다.', copy: '실제 자격 증명을 만들기 전에 흐름과 보안 원칙부터 확인하세요.',
      steps: [['01', '프로그램 설치', '공식 Windows ZIP을 받아 완전히 압축 해제합니다.'], ['02', '읽기 전용 API 생성', '거래소에서 조회 권한만 있는 별도 Key를 만듭니다.'], ['03', '연결 확인 및 저장', 'Trade Journal에서 거래소와 자격 증명을 입력합니다.'], ['04', '거래 동기화', '첫 연결 후 최근 30일 종료 거래를 가져옵니다.']],
    },
    safety: { title: '가장 중요한 보안 원칙', copy: 'Read / View 권한만 켜고 주문, 선물 주문, 출금, 자산 이동 권한은 모두 끄세요. API Key, Secret, Passphrase를 다른 사람에게 보내거나 화면 캡처에 포함하지 마세요.' },
    install: {
      eyebrow: 'STEP 01 · WINDOWS', title: '다운로드하고 실행합니다.',
      steps: [['공식 파일 받기', 'GitHub Releases에서 Trade-Journal-Windows.zip을 다운로드합니다.'], ['차단 해제 확인', 'ZIP을 우클릭해 속성을 열고, 차단 해제가 보이면 체크한 뒤 적용합니다.'], ['완전히 압축 풀기', 'ZIP 내부에서 바로 실행하지 말고 원하는 폴더에 모든 파일을 압축 해제합니다.'], ['실행 파일 열기', '압축을 푼 폴더에서 Trade Journal\\Trade Journal.exe를 실행합니다.'], ['SmartScreen 확인', '경고가 나타나면 공식 GitHub 파일인지 확인한 뒤 추가 정보 → 실행을 선택합니다.'], ['로컬 화면 확인', '프로그램이 시작되면 기본 브라우저에 Trade Journal 화면이 열립니다.']],
      noteTitle: 'Windows 보안 기능을 끌 필요는 없습니다.', note: '현재 공개 빌드는 코드 서명이 없어 SmartScreen 경고가 표시될 수 있습니다. 실시간 보호는 그대로 두고, 반드시 공식 GitHub Releases에서 받은 파일인지 확인하세요.',
      exitTitle: '정상 종료', exit: '프로그램 오른쪽 위 전원 아이콘을 누르면 로컬 서버까지 종료됩니다. 브라우저만 닫아도 저장된 API 자격 증명은 삭제되지 않습니다.',
    },
    api: {
      eyebrow: 'STEP 02 · EXCHANGE', title: '거래소에서 읽기 전용 API Key를 만듭니다.', copy: '거래소의 메뉴 이름은 바뀔 수 있지만 원칙은 같습니다. Trade Journal 전용 Key를 만들고 조회 권한만 허용하세요.', choose: '연결할 거래소', required: '필요한 입력값',
      exchanges: {
        deepcoin: { name: 'Deepcoin', badge: 'Passphrase 필요', fields: ['API Key', 'API Secret', 'Passphrase'], steps: ['Deepcoin에 로그인하고 API 관리 또는 API Keys 메뉴를 엽니다.', '새 API Key를 만들고 Trade Journal처럼 알아볼 수 있는 이름을 지정합니다.', 'Key 생성 과정에서 별도의 Passphrase를 직접 정합니다.', 'Read 또는 View 권한만 켜고 거래·출금·자산 이동 권한은 모두 끕니다.', '가능하면 현재 컴퓨터의 공인 IP만 허용합니다.', 'API Key와 Secret을 안전하게 복사합니다. Secret은 다시 표시되지 않을 수 있습니다.'], warning: 'API Secret과 Passphrase는 서로 다른 값입니다. 앱에 입력할 때 두 값을 바꾸지 마세요.' },
        binance: { name: 'Binance', badge: 'Passphrase 불필요', fields: ['API Key', 'API Secret'], steps: ['Binance에 로그인하고 API Management 또는 API Keys 메뉴를 엽니다.', '새 API Key를 만들고 Trade Journal처럼 알아볼 수 있는 이름을 지정합니다.', 'Enable Reading 또는 읽기 권한만 유지합니다.', 'Spot & Margin Trading, Futures Trading, 출금, 자산 이동 권한은 모두 끕니다.', '가능하면 현재 컴퓨터의 공인 IP만 허용합니다.', 'API Key와 Secret을 안전하게 복사합니다. Binance에는 Passphrase를 입력하지 않습니다.'], warning: '현재 공식 데스크톱 공개판은 Binance SWAP 종료 거래를 지원합니다. Binance SPOT 기록은 지원 범위가 아닙니다.' },
      },
    },
    permissions: {
      eyebrow: 'PERMISSION CHECK', title: '저장하기 전에 권한을 다시 확인하세요.', columns: ['권한', '설정', '이유'], rows: [['Read / View', '켜기', '종료 거래 기록을 읽는 데 필요'], ['Order / Trading', '끄기', 'Trade Journal은 주문을 실행하지 않음'], ['Futures Trading', '끄기', '선물 주문 권한은 필요하지 않음'], ['Withdrawal', '끄기', '출금 기능을 제공하지 않음'], ['Asset Transfer', '끄기', '자산 이동 권한은 필요하지 않음']],
    },
    connect: {
      eyebrow: 'STEP 03 · TRADE JOURNAL', title: '앱에서 연결을 확인하고 저장합니다.',
      steps: [['Trade Journal 실행', '프로그램 실행 후 브라우저에 열린 로컬 화면을 사용합니다.'], ['매매일지 열기', '왼쪽 메뉴에서 매매일지로 이동합니다.'], ['API 연결 선택', '동기화 영역의 API 연결 버튼을 누릅니다.'], ['거래소 선택', 'Deepcoin 또는 Binance를 선택합니다.'], ['자격 증명 입력', 'API Key와 API Secret을 입력합니다. Deepcoin만 Passphrase를 추가로 입력합니다.'], ['연결 확인 및 저장', '읽기 권한 확인에 성공한 연결만 운영체제 보호 저장소에 저장됩니다.'], ['첫 동기화 대기', '처음 연결이 성공하면 최근 30일 종료 거래를 한 번 자동으로 가져옵니다.']],
      demoTitle: '앱에 입력하는 값', action: '연결 확인 및 저장', secure: '실제 Key는 이 웹사이트가 아닌 내 컴퓨터의 Trade Journal에만 입력합니다.',
    },
    sync: {
      eyebrow: 'STEP 04 · SYNC', title: '종료 거래를 가져오고 복기를 시작합니다.',
      firstTitle: '첫 연결', first: '연결 확인이 성공하면 최근 30일 종료 거래가 한 번 자동 동기화됩니다.', laterTitle: '이후 동기화', later: '매매일지에서 거래소와 SWAP을 선택하고 원하는 기간을 지정한 뒤 동기화 버튼을 누릅니다.',
      facts: [['중복 방지', '같은 거래는 거래소 식별자를 기준으로 중복 저장되지 않도록 정리됩니다.'], ['종료 거래 중심', '현재 공개판의 저널과 분석은 종료된 SWAP 거래를 기준으로 합니다.'], ['긴 기간 조회', '거래소 API 제한으로 오래 걸릴 수 있으므로 7일 또는 30일부터 확인하세요.'], ['로컬 분석', '이미 저장된 거래는 연결이 없어도 계속 분석할 수 있습니다.']],
    },
    troubleshoot: {
      eyebrow: 'TROUBLESHOOTING', title: '연결되지 않을 때 확인할 항목', items: [['연결 확인에 실패합니다', 'API Key와 Secret 앞뒤 공백을 지우고 다시 입력하세요. Deepcoin은 Secret과 Passphrase가 서로 바뀌지 않았는지 확인합니다.'], ['IP 제한 오류가 표시됩니다', '현재 공인 IP가 거래소 API 허용 목록에 정확히 등록되어 있는지 확인하세요. 네트워크가 바뀌면 공인 IP도 바뀔 수 있습니다.'], ['거래가 보이지 않습니다', '종료된 SWAP 거래인지, 선택한 동기화 기간 안에 있는지 확인하세요. Binance SPOT은 공식 지원 범위가 아닙니다.'], ['동기화가 너무 오래 걸립니다', '최근 7일 또는 30일처럼 짧은 기간부터 성공 여부를 확인한 뒤 범위를 늘리세요.'], ['SmartScreen 경고가 나옵니다', '공식 GitHub Releases에서 받은 파일인지 확인하고 추가 정보 → 실행을 선택하세요. Windows 보안 기능은 끄지 마세요.'], ['브라우저를 닫았습니다', 'Trade Journal.exe를 다시 실행하면 화면을 다시 열 수 있습니다. 완전히 종료하려면 프로그램의 전원 아이콘을 사용하세요.']],
      helpTitle: '그래도 해결되지 않나요?', help: 'API Key나 Secret은 첨부하지 말고 거래소 이름, 오류 문구, 사용한 거래 유형(SWAP)만 GitHub Issues에 남겨주세요.', issue: 'GitHub Issues 열기',
    },
    security: {
      eyebrow: 'CREDENTIALS', title: '연결 정보는 로컬 보호 저장소에 보관됩니다.', items: [['Windows Credential Manager', '데스크톱 앱은 브라우저 저장소가 아니라 운영체제의 보안 저장소를 사용합니다.'], ['화면과 로그에서 숨김', '저장된 API Secret은 화면이나 로그에 다시 표시되지 않습니다.'], ['앱에서 연결 삭제', 'API 연결 화면에서 연결을 삭제하면 저장된 해당 거래소 자격 증명도 삭제됩니다.'], ['거래소에서 Key 폐기', '더 이상 사용하지 않는다면 앱에서 삭제한 뒤 거래소 API 관리 화면에서도 Key를 폐기하세요.']],
    },
    finish: { eyebrow: 'READY', title: '이제 지난 거래를 검토할 준비가 끝났습니다.', copy: '기간 성과에서 패턴을 찾고, 그 결과를 만든 실제 거래까지 내려가 보세요.', home: '제품 기능 보기', download: 'Windows 다운로드' },
    footer: '현재 Windows 공개판의 Deepcoin SWAP·Binance SWAP 지원 범위를 기준으로 작성되었습니다.',
  },
  en: {
    meta: { title: 'Trade Journal | Setup and API connection guide', description: 'Detailed Windows setup, Deepcoin and Binance read-only API connection, and first-sync guide for Trade Journal.' },
    header: { home: 'Product overview', language: '한국어로 보기', languageLabel: '한국어', download: 'Download for Windows' },
    hero: { eyebrow: 'TRADE JOURNAL USER GUIDE', title: 'From installation to your first trade sync', copy: 'Trade Journal is a local Windows app that imports closed exchange trades for performance and pattern review. Follow the steps below to complete a read-only API connection and your first sync.', time: 'Estimated time', timeValue: 'About 10 minutes', platform: 'Platform', platformValue: 'Windows 10/11 · x64', support: 'Supported exchanges', supportValue: 'Deepcoin SWAP · Binance SWAP', start: 'View quick start' },
    tocTitle: 'ON THIS PAGE',
    toc: [['#quick-start', 'Overview'], ['#install', 'Windows setup'], ['#api', 'Create API key'], ['#permissions', 'Permissions'], ['#connect', 'Connect app'], ['#sync', 'Sync'], ['#troubleshoot', 'Troubleshoot'], ['#security', 'Storage and removal']],
    quick: { eyebrow: 'QUICK START', title: 'The full setup takes four steps.', copy: 'Review the flow and security rules before creating real credentials.', steps: [['01', 'Install the app', 'Download the official Windows ZIP and extract every file.'], ['02', 'Create a read-only API', 'Create a dedicated key with viewing permission only.'], ['03', 'Verify and save', 'Enter the exchange credentials inside Trade Journal.'], ['04', 'Sync trades', 'Import the most recent 30 days after the first connection.']] },
    safety: { title: 'The most important security rule', copy: 'Enable Read / View only. Disable orders, futures orders, withdrawals, and asset transfers. Never send anyone your API Key, Secret, or Passphrase or include them in screenshots.' },
    install: { eyebrow: 'STEP 01 · WINDOWS', title: 'Download and launch the app.', steps: [['Download the official file', 'Get Trade-Journal-Windows.zip from GitHub Releases.'], ['Check Unblock', 'Right-click the ZIP, open Properties, select Unblock if shown, and apply.'], ['Extract everything', 'Do not run from inside the ZIP. Extract every file to a folder first.'], ['Open the executable', 'Run Trade Journal\\Trade Journal.exe from the extracted folder.'], ['Confirm SmartScreen', 'Verify the official GitHub source, then choose More info → Run anyway.'], ['Check the local page', 'Trade Journal opens its local interface in your default browser.']], noteTitle: 'You do not need to disable Windows security.', note: 'The public build may be unsigned and trigger SmartScreen. Keep real-time protection enabled and verify that the file came from official GitHub Releases.', exitTitle: 'Exit cleanly', exit: 'Use the power icon in the top-right to stop the local server. Closing the browser does not delete saved credentials.' },
    api: { eyebrow: 'STEP 02 · EXCHANGE', title: 'Create a read-only API key at the exchange.', copy: 'Menu names may change, but the rule does not: create a dedicated Trade Journal key and allow read access only.', choose: 'Choose an exchange', required: 'Credentials required', exchanges: {
      deepcoin: { name: 'Deepcoin', badge: 'Passphrase required', fields: ['API Key', 'API Secret', 'Passphrase'], steps: ['Sign in to Deepcoin and open API Management or API Keys.', 'Create a new key with a recognizable name such as Trade Journal.', 'Set a separate Passphrase while creating the key.', 'Keep Read or View only. Disable trading, withdrawals, and asset transfers.', 'If possible, allow only this computer’s public IP.', 'Copy the API Key and Secret safely. The Secret may not be shown again.'], warning: 'API Secret and Passphrase are different values. Do not swap them in the app.' },
      binance: { name: 'Binance', badge: 'No passphrase', fields: ['API Key', 'API Secret'], steps: ['Sign in to Binance and open API Management or API Keys.', 'Create a new key with a recognizable name such as Trade Journal.', 'Keep only Enable Reading.', 'Disable Spot & Margin Trading, Futures Trading, withdrawals, and asset transfers.', 'If possible, allow only this computer’s public IP.', 'Copy the API Key and Secret safely. Do not enter a Passphrase for Binance.'], warning: 'The current desktop release supports Binance SWAP closed trades. Binance SPOT history is outside the supported scope.' },
    } },
    permissions: { eyebrow: 'PERMISSION CHECK', title: 'Check permissions again before saving.', columns: ['Permission', 'Setting', 'Reason'], rows: [['Read / View', 'On', 'Required to read closed trade history'], ['Order / Trading', 'Off', 'Trade Journal never places orders'], ['Futures Trading', 'Off', 'Futures-order access is not needed'], ['Withdrawal', 'Off', 'The app has no withdrawal function'], ['Asset Transfer', 'Off', 'Asset movement access is not needed']] },
    connect: { eyebrow: 'STEP 03 · TRADE JOURNAL', title: 'Verify and save the connection in the app.', steps: [['Launch Trade Journal', 'Use the local page opened in your browser.'], ['Open Journal', 'Choose Journal from the left navigation.'], ['Choose API Connection', 'Select API Connection in the sync area.'], ['Select the exchange', 'Choose Deepcoin or Binance.'], ['Enter credentials', 'Enter API Key and API Secret. Deepcoin also requires Passphrase.'], ['Verify and save', 'Only a connection that passes the read-access check is saved in protected OS storage.'], ['Wait for the first sync', 'The first successful connection imports the most recent 30 days of closed trades once.']], demoTitle: 'Values entered in the app', action: 'Verify and save connection', secure: 'Enter real credentials only in Trade Journal on your computer, never on this website.' },
    sync: { eyebrow: 'STEP 04 · SYNC', title: 'Import closed trades and start reviewing.', firstTitle: 'First connection', first: 'After verification succeeds, the app automatically imports the most recent 30 days of closed trades once.', laterTitle: 'Later syncs', later: 'In Journal, choose the exchange and SWAP, select a date range, then press Sync.', facts: [['Deduplication', 'Exchange identifiers keep the same trade from being stored twice.'], ['Closed-trade focus', 'The current journal and analysis are based on closed SWAP trades.'], ['Long date ranges', 'Exchange rate limits can make them slow, so start with 7 or 30 days.'], ['Local analysis', 'Previously saved trades remain available without a live connection.']] },
    troubleshoot: { eyebrow: 'TROUBLESHOOTING', title: 'What to check when connection fails', items: [['Verification fails', 'Remove spaces around API Key and Secret. For Deepcoin, confirm that Secret and Passphrase were not swapped.'], ['IP restriction error', 'Confirm that the exchange allowlist contains your current public IP. It can change with your network.'], ['Trades do not appear', 'Confirm they are closed SWAP trades inside the selected range. Binance SPOT is unsupported.'], ['Sync takes too long', 'Try 7 or 30 days first, then increase the range after a successful check.'], ['SmartScreen warns', 'Verify the official GitHub Releases source and choose More info → Run anyway. Do not disable Windows security.'], ['The browser was closed', 'Run Trade Journal.exe again to reopen the app. Use the power icon for a full shutdown.']], helpTitle: 'Still stuck?', help: 'Never attach an API Key or Secret. Include only the exchange, error text, and market type (SWAP) in a GitHub Issue.', issue: 'Open GitHub Issues' },
    security: { eyebrow: 'CREDENTIALS', title: 'Connection details stay in protected local storage.', items: [['Windows Credential Manager', 'The desktop app uses the operating-system secure store, not browser storage.'], ['Hidden from screens and logs', 'A saved API Secret is not shown again or written to logs.'], ['Remove in the app', 'Deleting the connection also deletes its saved exchange credentials.'], ['Revoke at the exchange', 'When no longer used, delete it in the app and revoke the key at the exchange.']] },
    finish: { eyebrow: 'READY', title: 'You are ready to review past trades.', copy: 'Start with period performance, find a pattern, then open the trades behind it.', home: 'Explore product features', download: 'Download for Windows' },
    footer: 'This guide reflects the Deepcoin SWAP and Binance SWAP scope of the current Windows public release.',
  },
} as const;
