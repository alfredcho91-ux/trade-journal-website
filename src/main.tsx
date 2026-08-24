import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Layers3,
  LineChart,
  LockKeyhole,
  Menu,
  MonitorDown,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import './styles.css';

const releaseUrl = import.meta.env.VITE_WINDOWS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Windows.zip';
const sourceUrl = 'https://github.com/alfredcho91-ux/trade-journal-free';
const releaseInfo = {
  version: 'v1.0.14',
  windowsSize: '45.6 MB',
  windowsPlatform: 'Windows 10/11 · x64',
} as const;
const heroLeadByLanguage = {
  ko: '읽기 전용 API로 종료 거래를 가져오고, 기간 성과부터 개별 거래 복기까지 한 흐름으로 확인하세요. 반복되는 강점과 손실 원인을 다음 매매의 기준으로 바꿉니다.',
  en: 'Import closed trades with a read-only API, then move from period performance to each trade replay in one clear flow. Turn recurring strengths and losses into rules for the next trade.',
} as const;
const advancedFeaturesByLanguage = {
  ko: [
    ['시장 흐름별 성과', '주봉·일봉·4시간봉의 흐름 조합을 기준으로, 어떤 장세에서 내 매매가 잘 작동했는지 확인합니다.'],
    ['청산 후 보유 결과', '15분·1시간·2시간·4시간·일봉별로 청산 뒤 1~10개 봉을 더 보유했다면 평균 결과가 어땠는지 비교합니다.'],
    ['좋은 진입과 불리한 진입', '수익 거래와 손실 거래가 진입 뒤 얼마나 유리하거나 불리하게 움직였는지 쉽게 비교합니다.'],
    ['진입 당시 지표 비교', 'RSI, Stoch RSI, Slow Stochastic, MACD, VWAP, VPVR을 승리·손실 거래와 함께 다시 봅니다.'],
    ['손절·익절 기대값', '가격 기준 손절과 익절 조합을 실제 거래 경로에 적용해 기대값과 손실 폭을 비교합니다.'],
    ['근거 거래까지 추적', '통계에서 끝나지 않고, 해당 결과를 만든 거래 목록과 개별 차트 복기로 바로 이어집니다.'],
  ],
  en: [
    ['Performance by market regime', 'Use Weekly, Daily, and 4H market context to see where your trading has worked best.'],
    ['Results after holding beyond exit', 'Compare 1–10 completed candles after exit across 15m, 1H, 2H, 4H, and 1D views.'],
    ['Favorable versus adverse entries', 'Compare how winning and losing trades moved for and against you after entry.'],
    ['Indicators at entry', 'Review RSI, Stoch RSI, Slow Stochastic, MACD, VWAP, and VPVR beside winning and losing trades.'],
    ['Stop and target expectancy', 'Apply price-based stop and target combinations to real trade paths and compare expectancy.'],
    ['Trace every result to trades', 'Move from a statistic to its supporting trade list and then to an individual chart replay.'],
  ],
} as const;
type Language = 'ko' | 'en';

const featuresByLanguage = {
  ko: [
  {
    icon: BookOpen,
    eyebrow: 'JOURNAL',
    title: '동기화 후 바로 성과 확인',
    copy: '첫 연결이 성공하면 최근 종료 거래를 가져오고, 기간 순수익률·순수익금·승률·PF를 바로 확인합니다.',
    accent: 'blue',
  },
  {
    icon: LineChart,
    eyebrow: 'REPLAY',
    title: '한 거래를 끝까지 복기',
    copy: '실제 캔들 위에서 진입·부분 청산·종료를 확인하고, 당시 지표와 청산 뒤 움직임까지 다시 봅니다.',
    accent: 'green',
  },
  {
    icon: BarChart3,
    eyebrow: 'ANALYSIS',
    title: '결론에서 근거 거래까지',
    copy: '시장 흐름, 진입·청산 품질, 지표 비교 결과에서 실제 근거 거래와 개별 보고서로 이어집니다.',
    accent: 'amber',
  },
  ],
  en: [
    { icon: BookOpen, eyebrow: 'JOURNAL', title: 'See performance after sync', copy: 'After the first connection, import recent closed trades and review net return, PnL, win rate, and PF.', accent: 'blue' },
    { icon: LineChart, eyebrow: 'REPLAY', title: 'Replay one trade end to end', copy: 'Review entry, partial exits, and the final exit on real candles with the indicators from that moment.', accent: 'green' },
    { icon: BarChart3, eyebrow: 'ANALYSIS', title: 'Move from conclusions to evidence', copy: 'Open the supporting trades and individual reports behind market, entry, exit, and indicator findings.', accent: 'amber' },
  ],
} as const;

const faqsByLanguage = {
  ko: [
  { question: '거래 데이터는 어디에 저장되나요?', answer: '거래 기록과 분석 결과는 데스크톱 앱의 로컬 저장소에 남습니다. 이 소개 사이트는 거래 데이터를 수집하지 않습니다.' },
  { question: '어떤 API 권한이 필요한가요?', answer: '거래 기록 조회에 필요한 Read Only 권한만 사용하세요. 출금과 주문 권한은 활성화하지 않아도 됩니다.' },
  { question: 'API Key로 주문이나 출금이 가능한가요?', answer: 'Trade Journal은 주문·취소·출금을 실행하지 않습니다. 그래도 API를 만들 때는 반드시 읽기 전용 권한만 선택하세요.' },
  { question: 'API Key는 어떻게 보관되나요?', answer: 'Trade Journal은 브라우저 저장소에 키를 넣지 않고 운영체제의 보안 저장소 사용을 우선합니다. 사용 중인 배포판의 안내를 확인하세요.' },
  { question: 'API Key를 삭제할 수 있나요?', answer: '앱의 거래소 연결 관리에서 연결을 삭제하면 저장된 연결 정보도 함께 제거할 수 있습니다.' },
  { question: '어떤 거래소를 지원하나요?', answer: '현재 공개판은 Deepcoin SWAP과 Binance의 읽기 전용 거래 기록 동기화를 지원합니다.' },
  { question: '처음 연결하면 무엇이 일어나나요?', answer: '연결 검사가 성공하면 최근 30일의 종료 거래를 한 번 자동으로 동기화합니다. 이후에는 앱에서 동기화를 실행해 최신 기록을 가져올 수 있습니다.' },
  { question: 'Windows SmartScreen 경고가 뜨는 이유는 무엇인가요?', answer: '현재 Windows 공개판은 코드 서명이 아직 없어 처음 실행할 때 경고가 표시될 수 있습니다. GitHub Releases의 파일인지 확인한 뒤 실행하세요.' },
  ],
  en: [
    { question: 'Where is my trade data stored?', answer: 'Trade records and analysis results stay in the desktop app’s local storage. This website does not collect trading data.' },
    { question: 'Which API permissions do I need?', answer: 'Use only the Read Only permissions needed to read trade history. Do not enable withdrawals or order access.' },
    { question: 'Can the API key place orders or withdrawals?', answer: 'Trade Journal never places, cancels, or withdraws orders. Create the exchange key with read-only access anyway.' },
    { question: 'How are API keys stored?', answer: 'The desktop build does not put keys in browser storage and prefers the operating system’s secure credential storage. Check the instructions for your build.' },
    { question: 'Can I delete an API key?', answer: 'Delete the exchange connection from the app’s connection settings to remove the saved connection information.' },
    { question: 'Which exchanges are supported?', answer: 'The current public build supports read-only trade history sync for Deepcoin SWAP and Binance.' },
    { question: 'What happens after the first connection?', answer: 'After a successful connection check, Trade Journal imports recent closed trades from the last 30 days once. Run sync in the app later to refresh your records.' },
    { question: 'Why does Windows SmartScreen show a warning?', answer: 'The current Windows public build is not code-signed yet, so Windows may warn on first launch. Verify the file came from GitHub Releases before opening it.' },
  ],
} as const;

function ProductLogo() {
  return (
    <a className="brand" href="#top" aria-label="Trade Journal 홈">
      <img className="brand-image" src="/trading-journal-logo.png" alt="Trading Journal" />
    </a>
  );
}

function DownloadButton({ compact = false, label, href = releaseUrl }: { compact?: boolean; label: string; href?: string }) {
  return (
    <a className={`button button-primary ${compact ? 'button-compact' : ''}`} href={href}>
      <Download size={compact ? 16 : 18} />
      {label}
      <ArrowRight size={compact ? 15 : 17} />
    </a>
  );
}

function CandleChart({ small = false, language = 'ko' }: { small?: boolean; language?: Language }) {
  const isEnglish = language === 'en';
  const candles: Array<[number, number, number, number, 'up' | 'down']> = [
    [21, 48, 15, 59, 'down'], [31, 38, 28, 44, 'up'], [39, 34, 30, 42, 'up'], [47, 30, 23, 36, 'up'],
    [55, 32, 27, 40, 'down'], [63, 26, 19, 34, 'up'], [71, 23, 17, 29, 'up'], [79, 29, 21, 37, 'down'],
    [87, 20, 13, 31, 'up'], [95, 17, 10, 24, 'up'],
  ];
  return (
    <svg className={`candle-chart ${small ? 'candle-chart-small' : ''}`} viewBox="0 0 100 64" role="img" aria-label={isEnglish ? 'Price candle chart preview' : '가격 캔들 차트 미리보기'}>
      <path className="chart-grid" d="M0 12H100M0 28H100M0 44H100M0 60H100M20 0V64M40 0V64M60 0V64M80 0V64" />
      <path className="chart-line chart-line-blue" d="M0 53 C12 49, 17 51, 24 42 S36 37, 43 39 S55 25, 63 29 S74 21, 84 24 S93 13, 100 16" />
      <path className="chart-line chart-line-green" d="M0 57 C12 53, 22 54, 31 46 S48 41, 57 38 S71 33, 80 29 S91 24, 100 19" />
      {candles.map(([x, open, high, low, direction]) => {
        const close = direction === 'up' ? open - 8 : open + 8;
        const color = direction === 'up' ? '#3ddc97' : '#fb7185';
        const wickHigh = Math.max(2, high - 4);
        const wickLow = Math.min(62, low + 4);
        return (
          <g key={x}>
            <line x1={x} x2={x} y1={wickHigh} y2={wickLow} stroke={color} strokeWidth="1" />
            <rect x={x - 2.2} y={Math.min(open, close)} width="4.4" height={Math.max(3, Math.abs(close - open))} fill={color} />
          </g>
        );
      })}
      <line className="chart-marker-entry" x1="47" x2="47" y1="5" y2="60" />
      <line className="chart-marker-exit" x1="86" x2="86" y1="5" y2="60" />
      {!small && <><text x="48" y="8" className="marker-label marker-label-entry">ENTRY</text><text x="87" y="8" className="marker-label marker-label-exit">EXIT</text></>}
    </svg>
  );
}

function FAQItem({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item ${open ? 'faq-open' : ''}`}>
      <button type="button" onClick={onToggle} aria-expanded={open}><span>{question}</span><ChevronDown size={18} /></button>
      {open && <p>{answer}</p>}
    </div>
  );
}

function ApiConnectionGuide({ language }: { language: Language }) {
  const isEnglish = language === 'en';
  const steps = isEnglish ? [
    ['Open API management', 'Sign in to your exchange, open API Management or API Keys, and choose Create API Key. Menu names vary by exchange.'],
    ['Choose read-only access', 'Enable only read or view permissions. Keep order, cancellation, futures trading, and withdrawal permissions disabled.'],
    ['Add an IP restriction when available', 'If the exchange supports an IP whitelist, use it. This adds another barrier if the key is exposed.'],
    ['Copy the credentials once', 'Copy the API key and secret to a safe place. Some exchanges show the secret only once. Enter a passphrase only when that exchange requires one.'],
    ['Connect inside the app', 'Open the exchange connection screen in Trade Journal, select the exchange, enter the key, secret, and required passphrase, then run the connection test.'],
    ['First sync and removal', 'On the first successful connection, Trade Journal automatically imports the recent 30 days once. If you stop using the connection, delete it from the app and revoke the key at the exchange.'],
  ] : [
    ['거래소의 API 관리 메뉴 열기', '거래소에 로그인한 뒤 API Management 또는 API Keys 메뉴에서 API Key 생성을 선택합니다. 거래소마다 메뉴 이름은 다를 수 있습니다.'],
    ['읽기 전용 권한만 선택하기', 'Read 또는 View 권한만 켜세요. 주문·취소·선물 거래·출금 권한은 모두 끈 상태로 둡니다.'],
    ['가능하면 IP 제한 설정하기', '거래소가 IP 화이트리스트를 지원한다면 함께 설정하세요. API Key가 노출됐을 때 추가 보호막이 됩니다.'],
    ['발급 정보 안전하게 복사하기', 'API Key와 Secret Key를 안전한 곳에 복사합니다. 거래소에 따라 Secret은 발급 직후 한 번만 보여줍니다. Passphrase는 해당 거래소가 요구할 때만 입력합니다.'],
    ['프로그램에서 거래소 연결하기', 'Trade Journal의 거래소 연결 화면을 열고 거래소를 선택한 뒤 Key, Secret, 필요한 Passphrase를 입력하고 연결 테스트를 실행합니다.'],
    ['첫 자동 동기화와 연결 삭제', '처음 연결이 성공하면 최근 30일 거래를 한 번 자동으로 불러옵니다. 더 이상 사용하지 않을 때는 프로그램에서 연결을 삭제하고 거래소에서도 API Key를 폐기하세요.'],
  ];
  return (
    <div className="api-guide"><div className="api-guide-heading"><span className="eyebrow">{isEnglish ? 'API CONNECTION GUIDE' : 'API 발급 및 연결 안내'}</span><h3>{isEnglish ? 'Connect safely in a few steps.' : '안전하게 연결하는 순서'}</h3><p>{isEnglish ? 'The exact menu differs by exchange, but the permission rule is always the same: read-only access only.' : '거래소마다 메뉴 이름은 다르지만, 권한 원칙은 같습니다. 거래 기록을 읽는 권한만 사용하세요.'}</p></div><div className="api-step-grid">{steps.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div><div className="api-safety-note"><ShieldCheck size={19} /><p>{isEnglish ? 'Before saving: confirm that withdrawal and order permissions are off. Trade Journal is for recording and analysis; it does not need permission to trade.' : '저장하기 전 출금·주문 권한이 꺼져 있는지 다시 확인하세요. Trade Journal은 기록과 분석을 위한 프로그램이라 거래 권한이 필요하지 않습니다.'}</p></div></div>
  );
}

function WindowsLaunchGuide({ language }: { language: Language }) {
  const isEnglish = language === 'en';
  const steps = isEnglish
    ? [
        'Right-click the ZIP, open Properties, check Unblock if available, and click Apply.',
        'Extract the ZIP and run “Trade Journal.exe”.',
        'On the warning screen, click “More info” and then “Run anyway”.',
        'Use the local browser page that opens after the app starts.',
      ]
    : [
        'ZIP 파일을 우클릭해 속성을 열고, 차단 해제가 보이면 체크한 뒤 적용합니다.',
        '압축을 풀고 “Trade Journal.exe”를 실행합니다.',
        '경고 화면에서 “추가 정보”를 누른 뒤 “실행”을 선택합니다.',
        '앱 실행 후 열리는 로컬 브라우저 화면에서 사용합니다.',
      ];
  return (
    <section className="windows-launch-section">
      <div className="container windows-launch-guide">
        <span className="eyebrow">{isEnglish ? 'WINDOWS TEST BUILD' : 'WINDOWS 테스트 버전'}</span>
        <h2>{isEnglish ? 'SmartScreen may ask for confirmation.' : 'SmartScreen에서 실행을 확인할 수 있습니다.'}</h2>
        <p>{isEnglish ? 'This test build may not be code-signed. Microsoft Defender SmartScreen can show “Windows protected your PC” or “an unrecognized app was prevented from starting”. Windows has not verified the publisher yet; do not disable your security tools.' : '현재 테스트 버전은 코드 서명이 없을 수 있어 Microsoft Defender SmartScreen에 “Windows의 PC 보호” 또는 “인식할 수 없는 앱의 시작을 차단했습니다”라는 문구가 표시될 수 있습니다. “추가 정보”를 누른 뒤 “실행”을 선택하면 됩니다. Windows가 아직 게시자를 확인하지 못했다는 뜻이며, 보안 기능을 끌 필요는 없습니다.'}</p>
        <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
        <small>{isEnglish ? 'Continue only when the file came from the official GitHub repository. Do not run a file from an unknown source.' : '공식 GitHub 저장소에서 받은 파일인지 확인한 경우에만 진행하세요. 출처를 알 수 없는 파일은 실행하지 마세요.'}</small>
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [language, setLanguage] = useState<Language>('ko');
  const isEnglish = language === 'en';
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const t = isEnglish ? {
    nav: ['Product', 'Latest', 'Security', 'FAQ'],
    eyebrow: 'OPEN-SOURCE TRADE JOURNAL',
    download: 'Download for Windows',
    howTo: 'How it works',
    netReturn: 'Net return',
    recent: 'Recent 90 days',
    proof: 'Read-only records, kept on your computer',
    featuresEyebrow: 'FROM SYNC TO REVIEW',
    featuresTitle: 'Know what happened,<br />before the next trade.',
    featuresCopy: 'Bring closed trades together, see the result of the period, and trace the reasons behind every outcome.',
    securityEyebrow: 'LOCAL-FIRST SECURITY',
    securityTitle: 'Your trade records<br /><span>stay on your computer.</span>',
    securityCopy: 'Trade Journal is a desktop review tool, not a trading service. It uses only the records you choose to import with read-only API keys.',
    securityLink: 'Inspect the source and release history',
    workflowEyebrow: 'HOW IT WORKS',
    workflowTitle: 'Install, connect,<br /><span>then review the next trade.</span>',
    workflow: [['Download the app', 'Download the current Windows ZIP, extract it, and launch Trade Journal.'], ['Connect an exchange', 'Use a read-only API key. The first successful connection imports the recent 30 days of closed trades once.'], ['Review with evidence', 'Move from period results to trade replay, market context, and the evidence behind each finding.']],
    faqTitle: 'Questions<br />before you start',
    downloadEyebrow: 'CURRENT PUBLIC BUILD',
    downloadTitle: 'Start with the trades<br /><span>you already made.</span>',
    downloadCopy: 'Windows public beta · Version v1.0.14 · Free to use · No account required.',
    source: 'View source and release history',
    footer: 'An open-source desktop tool for reviewing and understanding your own trades.',
    links: ['Product', 'Security', 'FAQ'],
    copyright: '© 2026 Trade Journal',
  } : {
    nav: ['제품 소개', '이번 업데이트', '보안', 'FAQ'],
    eyebrow: '오픈소스 트레이딩 저널',
    download: 'Windows 다운로드',
    howTo: '사용 방법',
    netReturn: '순수익률',
    recent: '최근 90일',
    proof: '읽기 전용 거래 기록을 내 컴퓨터에서',
    featuresEyebrow: '동기화부터 복기까지',
    featuresTitle: '지난 거래를 이해하고,<br />다음 기준을 만드세요.',
    featuresCopy: '종료 거래를 한곳에 모으고, 기간 성과를 확인한 뒤, 각각의 결과가 왜 나왔는지 근거 거래까지 추적합니다.',
    securityEyebrow: 'LOCAL-FIRST SECURITY',
    securityTitle: '거래 기록은<br /><span>당신의 컴퓨터에</span>',
    securityCopy: 'Trade Journal은 거래를 실행하는 서비스가 아니라, 내 거래를 복기하는 데스크톱 도구입니다. 읽기 전용 API로 가져온 기록만 분석합니다.',
    securityLink: '소스와 릴리스 기록 확인하기',
    workflowEyebrow: '사용 방법',
    workflowTitle: '설치하고, 연결하고,<br /><span>다음 거래를 복기하세요.</span>',
    workflow: [['앱 다운로드', '현재 Windows ZIP을 받고 압축을 푼 뒤 Trade Journal을 실행합니다.'], ['거래소 연결', '읽기 전용 API를 연결합니다. 첫 연결이 성공하면 최근 30일의 종료 거래를 한 번 불러옵니다.'], ['근거와 함께 복기', '기간 성과에서 개별 거래 복기, 시장 상황, 분석 근거까지 한 흐름으로 확인합니다.']],
    faqTitle: '시작하기 전에<br />궁금한 점',
    downloadEyebrow: '현재 공개판',
    downloadTitle: '다음 거래 전에,<br /><span>지난 거래를 먼저 보세요.</span>',
    downloadCopy: 'Windows 공개 베타 · v1.0.14 · 무료 사용 · 회원가입 불필요',
    source: '소스와 릴리스 기록 보기',
    footer: '내 거래를 복기하고 이해하기 위한 오픈소스 데스크톱 도구.',
    links: ['제품 소개', '보안', 'FAQ'],
    copyright: '© 2026 Trade Journal',
  };
  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => { setLanguage(isEnglish ? 'ko' : 'en'); closeMenu(); };

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <ProductLogo />
          <button type="button" className="mobile-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="메뉴 열기">{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`site-nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#product" onClick={closeMenu}>{t.nav[0]}</a>
            <a href="#advanced" onClick={closeMenu}>{isEnglish ? 'Analysis' : '고급 분석'}</a>
            <a href="#updates" onClick={closeMenu}>{t.nav[1]}</a>
            <a href="#security" onClick={closeMenu}>{t.nav[2]}</a>
            <a href="#faq" onClick={closeMenu}>{t.nav[3]}</a>
            <button type="button" className="language-toggle" onClick={toggleLanguage}>{isEnglish ? '한국어' : 'EN'}</button>
          </nav>
        </div>
      </header>

      <div className="product-banner"><div className="container product-banner-inner"><span>{isEnglish ? 'WINDOWS PUBLIC BETA · V1.0.14' : 'WINDOWS 공개 베타 · V1.0.14'}</span><div><a href="#product" onClick={closeMenu}>{isEnglish ? 'Product overview' : '제품 소개'} <ArrowRight size={14} /></a><a href="#how-to" onClick={closeMenu}>{isEnglish ? 'How to use' : '사용 방법'} <ArrowRight size={14} /></a></div></div></div>

      <main>
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse-dot" /> {t.eyebrow}</div>
              <h1 className={isEnglish ? undefined : 'hero-title-ko'}>{isEnglish ? <>Find patterns in your trades,<br /><span>build your own trading rules.</span></> : <>내 거래에서<br />패턴을 찾아<br /><span>나만의 매매법을 만드세요</span></>}</h1>
              <p className="hero-lead">{heroLeadByLanguage[language]}</p>
              <div className="hero-actions"><DownloadButton label={t.download} /><a className="button button-ghost" href="#how-to"><ArrowRight size={17} /> {t.howTo}</a></div>
              <div className="hero-badges"><span><LockKeyhole size={14} /> {isEnglish ? 'READ ONLY API' : '읽기 전용 API'}</span><span><Database size={14} /> {isEnglish ? 'LOCAL DATA' : '내 컴퓨터에 저장'}</span><span><ShieldCheck size={14} /> {isEnglish ? 'NO TRADE EXECUTION' : '주문 실행 없음'}</span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-caption"><span>{isEnglish ? 'CHART PREVIEW' : '차트 미리보기'}</span><span>BTC/USDT · 4H</span></div>
              <div className="hero-chart-window">
                <div className="chart-window-head"><span>BTC/USDT <b>4H</b></span><span className="chart-price">63,869.0 <small>+1.42%</small></span></div>
                <CandleChart language={language} />
                <div className="chart-legend"><span><i className="legend-blue" />VWAP</span><span><i className="legend-green" />{isEnglish ? 'RSI oversold rebound' : 'RSI 과매도 반등'}</span><span><i className="legend-amber" />ENTRY / EXIT</span></div>
              </div>
              <div className="floating-stat stat-top"><span>{t.netReturn}</span><strong>+8.42%</strong><small>{t.recent}</small></div>
              <div className="floating-stat stat-bottom"><span>{isEnglish ? 'Trade analysis' : '거래 분석'}</span><strong>42</strong><small>{isEnglish ? 'Closed positions' : '종료 포지션'}</small></div>
            </div>
          </div>
          <div className="container hero-proof"><span>DEEPCOIN SWAP</span><span>BINANCE</span><i /><small>{t.proof}</small></div>
        </section>

        <section id="product" className="section section-features">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">{t.featuresEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.featuresTitle }} /></div><p>{t.featuresCopy}</p></div>
            <div className="feature-grid">{featuresByLanguage[language].map(({ icon: Icon, eyebrow, title, copy, accent }) => <article className={`feature-card accent-${accent}`} key={title}><span className="feature-icon"><Icon size={21} /></span><span className="card-eyebrow">{eyebrow}</span><h3>{title}</h3><p>{copy}</p><ArrowRight className="feature-arrow" size={18} /></article>)}</div>
          </div>
        </section>

        <section id="advanced" className="section section-advanced">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">{isEnglish ? 'MORE THAN A JOURNAL' : '단순한 매매일지가 아닙니다'}</span><h2>{isEnglish ? <>Turn trade history<br /><span>into a better process.</span></> : <>기록을 넘어,<br /><span>나만의 기준을 찾습니다.</span></>}</h2></div><p>{isEnglish ? 'The point is not to collect more numbers. It is to find the conditions and decisions you can repeat with confidence.' : '숫자를 더 많이 쌓는 것이 목적이 아닙니다. 반복할 수 있는 조건과 의사결정을 발견하는 것이 목적입니다.'}</p></div>
            <div className="advanced-grid">{advancedFeaturesByLanguage[language].map(([title, copy], index) => { const Icon = [LineChart, ShieldCheck, Layers3, ArrowRight, BarChart3, CircleHelp][index]; return <article className="advanced-card" key={title}><span className="advanced-icon"><Icon size={20} /></span><span className="card-eyebrow">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>; })}</div>
          </div>
        </section>

        <section id="updates" className="section section-updates">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">{isEnglish ? 'CURRENT RELEASE' : '현재 공개판'}</span><h2>{isEnglish ? <>A clearer path from<br /><span>result to evidence.</span></> : <>결과에서 근거 거래까지,<br /><span>더 빠르게 확인합니다.</span></>}</h2></div><p>{isEnglish ? 'The current public build keeps the work focused: import closed positions, understand the period, and open the trades behind every conclusion.' : '현재 공개판은 종료 거래를 가져온 뒤, 기간 성과를 이해하고, 각 결론을 만든 실제 거래까지 바로 확인하는 흐름에 집중합니다.'}</p></div>
            <div className="release-strip"><div><span>{isEnglish ? 'PUBLIC BUILD' : '공개 배포본'}</span><strong>{releaseInfo.version}</strong></div><div><span>{isEnglish ? 'PLATFORM' : '지원 환경'}</span><strong>{releaseInfo.windowsPlatform}</strong></div><div><span>{isEnglish ? 'DOWNLOAD' : '다운로드'}</span><strong>{releaseInfo.windowsSize}</strong></div><DownloadButton compact label={isEnglish ? 'Get Windows ZIP' : 'Windows ZIP 받기'} /></div>
            <div className="update-grid">
              <article><span>01</span><h3>{isEnglish ? 'Period performance, at a glance' : '기간 성과를 한눈에'}</h3><p>{isEnglish ? 'Net return, PnL, win rate, Profit Factor, average hold time, and a compact trading-style summary sit together in the journal.' : '순수익률, 순수익금, 승률, Profit Factor, 평균 보유시간과 매매 스타일 요약을 매매일지에서 함께 확인합니다.'}</p></article>
              <article><span>02</span><h3>{isEnglish ? 'Analysis that leads to the trades' : '거래로 이어지는 분석'}</h3><p>{isEnglish ? 'Market context, entry and exit quality, and indicator findings can open their supporting trades and individual replays.' : '시장 상황, 진입·청산 품질, 지표 분석 결과에서 근거 거래 목록과 개별 거래 복기로 이어집니다.'}</p></article>
              <article><span>03</span><h3>{isEnglish ? 'Exit timing in your chosen view' : '선택한 시간 단위의 청산 복기'}</h3><p>{isEnglish ? 'Compare the actual exit with holding 1 to 10 more completed candles in 15m, 1H, 2H, 4H, or 1D views.' : '15분·1시간·2시간·4시간·일봉에서 청산 뒤 1~10개 완료 봉을 더 보유했을 때의 결과를 비교합니다.'}</p></article>
            </div>
          </div>
        </section>

        <section id="security" className="section section-security">
          <div className="container security-layout"><div className="security-copy"><span className="eyebrow">{t.securityEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.securityTitle }} /><p>{t.securityCopy}</p><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">{t.securityLink} <ExternalLink size={15} /></a></div><div className="security-list"><div className="security-row"><span className="security-icon"><ShieldCheck size={20} /></span><div><h3>{isEnglish ? 'Read-only APIs' : '읽기 전용 API'}</h3><p>{isEnglish ? 'No order, cancellation, or withdrawal permissions.' : '주문·취소·출금 권한을 사용하지 않습니다.'}</p></div><Check className="security-check" size={18} /></div><div className="security-row"><span className="security-icon"><LockKeyhole size={20} /></span><div><h3>{isEnglish ? 'Keys stay out of browser storage' : '키를 브라우저에 저장하지 않음'}</h3><p>{isEnglish ? 'macOS Keychain and Windows Credential Manager come first.' : 'macOS Keychain, Windows Credential Manager를 우선 사용합니다.'}</p></div><Check className="security-check" size={18} /></div><div className="security-row"><span className="security-icon"><Database size={20} /></span><div><h3>{isEnglish ? 'Your records stay local' : '내 컴퓨터에 남는 기록'}</h3><p>{isEnglish ? 'Journal data and analysis results are stored in local SQLite.' : '저널 데이터와 분석 결과는 로컬 SQLite에 저장됩니다.'}</p></div><Check className="security-check" size={18} /></div></div></div>
        </section>

        <section className="security-proof"><div className="container security-proof-inner"><span className="security-badge"><ShieldCheck size={15} /> {isEnglish ? 'READ ONLY' : '읽기 전용'}</span><span className="security-badge"><Database size={15} /> {isEnglish ? 'LOCAL DATA' : '내 컴퓨터에 저장'}</span><span className="security-badge"><LockKeyhole size={15} /> {isEnglish ? 'NO TRADE EXECUTION' : '주문 실행 없음'}</span><p>{isEnglish ? 'Use a read-only key, keep your records local, and review trades without giving the app order access.' : '읽기 전용 키를 사용하고, 기록은 내 컴퓨터에 보관하며, 주문 권한 없이 거래를 복기합니다.'}</p></div></section>

        <section id="how-to" className="section section-workflow"><div className="container"><div className="workflow-intro"><span className="eyebrow">{isEnglish ? 'HOW TO USE' : '사용 방법'}</span><h2>{isEnglish ? <>Download, connect,<br /><span>then review your next trade.</span></> : <>설치하고, 연결하고,<br /><span>다음 거래를 복기하세요.</span></>}</h2></div><div className="workflow-grid">{t.workflow.map(([title, copy], index) => { const Icon = [MonitorDown, Layers3, Sparkles][index]; return <div key={title}><span>{`0${index + 1}`}</span><Icon size={22} /><h3>{title}</h3><p>{copy}</p></div>; })}</div><ApiConnectionGuide language={language} /></div></section>

        <section id="faq" className="section section-faq"><div className="container faq-layout"><div className="faq-heading"><span className="eyebrow">FAQ</span><h2 dangerouslySetInnerHTML={{ __html: t.faqTitle }} /><CircleHelp size={38} /></div><div className="faq-list">{faqsByLanguage[language].map((faq, index) => <FAQItem key={faq.question} {...faq} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />)}</div></div></section>

        <section className="download-section"><div className="container download-inner"><div><span className="eyebrow">{t.downloadEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.downloadTitle }} /><p>{t.downloadCopy}</p></div><div className="download-side"><div className="download-buttons"><DownloadButton label={t.download} /></div><a className="text-link muted-link" href={sourceUrl} target="_blank" rel="noreferrer"><GitBranch size={16} /> {t.source}</a></div></div><div className="container download-facts"><div><b>{releaseInfo.windowsPlatform}</b><span>Windows · {releaseInfo.version} · {releaseInfo.windowsSize}</span></div><div><b>{isEnglish ? 'Free · no account' : '무료 · 회원가입 불필요'}</b><span>{isEnglish ? 'No account or payment required' : '회원가입이나 결제가 필요하지 않습니다'}</span></div><div><b>{isEnglish ? 'Read-only API' : '읽기 전용 API'}</b><span>{isEnglish ? 'No order, cancellation, or withdrawal functions' : '주문·취소·출금 기능을 제공하지 않습니다'}</span></div></div><p className="download-warning">{isEnglish ? 'Windows is not code-signed yet, so SmartScreen may show a first-launch warning. Verify the download source before opening it.' : 'Windows 버전은 아직 코드 서명이 없어 처음 실행할 때 SmartScreen 경고가 표시될 수 있습니다. 다운로드 출처를 확인한 뒤 실행하세요.'}</p></section>

        <WindowsLaunchGuide language={language} />

        <section id="legal" className="legal-section"><div className="container legal-grid"><article><h3>{isEnglish ? 'Privacy' : '개인정보 처리방침'}</h3><p>{isEnglish ? 'This static site does not collect API keys or trading records.' : '이 정적 사이트는 API Key나 거래 기록을 수집하지 않습니다.'}</p></article><article><h3>{isEnglish ? 'Terms' : '이용약관'}</h3><p>{isEnglish ? 'Use the app at your own discretion and keep exchange keys read-only.' : '프로그램은 사용자의 판단 아래 이용하고 거래소 키는 읽기 전용으로 관리하세요.'}</p></article><article id="disclaimer"><h3>Disclaimer</h3><p>{isEnglish ? 'This is a personal trade journaling and analysis tool, not investment advice or an auto-trading service.' : '개인의 거래 기록과 분석을 위한 도구이며 투자자문이나 자동매매 서비스가 아닙니다.'}</p></article></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><ProductLogo /><p>{t.footer}</p><div className="footer-links"><a href="#product">{t.links[0]}</a><a href="#legal">{isEnglish ? 'Privacy' : '개인정보'}</a><a href="#legal">{isEnglish ? 'Terms' : '이용약관'}</a><a href="#disclaimer">Disclaimer</a><a href={sourceUrl} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a><a href={`${sourceUrl}/issues`} target="_blank" rel="noreferrer">{isEnglish ? 'Contact' : '문의'} <ExternalLink size={13} /></a></div><span className="copyright">{t.copyright}</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
