import { useState } from 'react';
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

const releaseUrl = import.meta.env.VITE_WINDOWS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Free-Windows.zip';
const macReleaseUrl = import.meta.env.VITE_MACOS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Free-macOS.zip';
const sourceUrl = 'https://github.com/alfredcho91-ux/trade-journal-free';
type Language = 'ko' | 'en';

const featuresByLanguage = {
  ko: [
  {
    icon: BookOpen,
    eyebrow: 'JOURNAL',
    title: '거래를 한 줄로 정리',
    copy: '거래소에서 읽어온 종료 포지션을 수익률, 수수료, 펀딩, 보유시간과 함께 한눈에 봅니다.',
    accent: 'blue',
  },
  {
    icon: LineChart,
    eyebrow: 'REPLAY',
    title: '진입부터 청산까지 복기',
    copy: '실제 캔들 위에 ENTRY, 분할 진입, TP, EXIT를 표시하고 당시의 RSI와 모멘텀을 다시 확인합니다.',
    accent: 'green',
  },
  {
    icon: BarChart3,
    eyebrow: 'ANALYSIS',
    title: '감이 아니라 근거로 개선',
    copy: '승패, 추세 국면, 행동 태그, 손절과 SL/TP 시뮬레이션으로 반복되는 실수를 찾습니다.',
    accent: 'amber',
  },
  ],
  en: [
    { icon: BookOpen, eyebrow: 'JOURNAL', title: 'Put every trade in context', copy: 'Bring closed positions together with returns, fees, funding, and holding time.', accent: 'blue' },
    { icon: LineChart, eyebrow: 'REPLAY', title: 'Replay entry to exit', copy: 'See ENTRY, adds, TP, and EXIT on real candles with the indicators from that moment.', accent: 'green' },
    { icon: BarChart3, eyebrow: 'ANALYSIS', title: 'Improve with evidence', copy: 'Find recurring mistakes through outcomes, market regimes, behavior tags, and risk tests.', accent: 'amber' },
  ],
} as const;

const faqsByLanguage = {
  ko: [
  {
    question: '어떤 거래소를 지원하나요?',
    answer: '현재 Deepcoin, Binance, Bybit, OKX의 읽기 전용 거래 기록 동기화를 지원합니다. 거래소별 API 연결 방식은 다르지만, 주문 실행과 출금 기능은 모든 버전에서 제공하지 않습니다.',
  },
  {
    question: 'API Key가 외부로 전송되나요?',
    answer: '무료 데스크톱 배포판은 API Key를 브라우저 저장소에 저장하지 않습니다. macOS Keychain 또는 Windows Credential Manager를 우선 사용하고, 서버 모드에서는 암호화된 저장소를 사용합니다. API는 반드시 Read Only 권한으로 만들어야 합니다.',
  },
  {
    question: 'Windows에서 바로 실행할 수 있나요?',
    answer: '네. GitHub Releases에서 Windows ZIP을 내려받아 압축을 풀고 실행하면 됩니다. 별도의 Python이나 Node.js 설치 없이 사용할 수 있도록 패키징합니다.',
  },
  {
    question: 'Cloudflare Pages에 배포할 수 있나요?',
    answer: '이 소개 사이트는 백엔드가 없는 Vite 정적 사이트라 Cloudflare Pages에 바로 배포할 수 있습니다. 프로그램 자체는 로컬 데스크톱 앱으로 실행되며, 이 사이트는 다운로드와 문서 안내를 담당합니다.',
  },
  ],
  en: [
    { question: 'Which exchanges are supported?', answer: 'Read-only trade history sync is available for Deepcoin, Binance, Bybit, and OKX. Exchange connection methods differ, but the app never places orders or withdrawals.' },
    { question: 'Are my API keys sent outside my computer?', answer: 'The desktop build does not store keys in browser storage. It prefers macOS Keychain or Windows Credential Manager, and server mode uses encrypted storage. Always create a Read Only API key.' },
    { question: 'Can I run it immediately on Windows?', answer: 'Yes. Download the Windows ZIP from GitHub Releases, extract it, and launch the app. The packaged build does not require a separate Python or Node.js installation.' },
    { question: 'Can this website be deployed to Cloudflare Pages?', answer: 'Yes. This site is a backend-free Vite static site and can be deployed directly to Cloudflare Pages. The desktop app remains local; this website handles the introduction and download.' },
  ],
} as const;

function ProductLogo() {
  return (
    <a className="brand" href="#top" aria-label="Trade Journal Free 홈">
      <span className="brand-mark">TJ</span>
      <span>
        <strong>Trade Journal</strong>
        <small>FREE</small>
      </span>
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
        return (
          <g key={x}>
            <line x1={x} x2={x} y1={high} y2={low} stroke={color} strokeWidth="1" />
            <rect x={x - 2.2} y={Math.min(open, close)} width="4.4" height="8" rx=".8" fill={color} />
          </g>
        );
      })}
      <line className="chart-marker-entry" x1="47" x2="47" y1="5" y2="60" />
      <line className="chart-marker-exit" x1="86" x2="86" y1="5" y2="60" />
      {!small && <><text x="48" y="8" className="marker-label marker-label-entry">ENTRY</text><text x="87" y="8" className="marker-label marker-label-exit">EXIT</text></>}
    </svg>
  );
}

function JournalPreview({ language }: { language: Language }) {
  const isEnglish = language === 'en';
  return (
    <div className="app-window">
      <div className="window-topbar"><span className="window-dots"><i /><i /><i /></span><span>Trade Journal Free <em>SYNCED</em></span><span className="window-menu">•••</span></div>
      <div className="window-body journal-preview">
        <aside className="preview-sidebar"><ProductLogo /><span className="sidebar-section">WORKSPACE</span><span className="sidebar-link active"><BookOpen size={14} /> {isEnglish ? 'Journal' : '매매일지'}</span><span className="sidebar-link"><BarChart3 size={14} /> {isEnglish ? 'Analysis' : '매매분석'}</span><span className="sidebar-link"><ShieldCheck size={14} /> Risk Lab</span><span className="sidebar-status"><i /> {isEnglish ? 'API connected' : 'API 연결됨'}</span></aside>
        <div className="preview-main"><div className="preview-heading"><div><span className="mini-kicker">TRADING JOURNAL</span><h3>{isEnglish ? 'Recent trades' : '최근 거래'}</h3></div><span className="date-filter">{isEnglish ? 'Last 90 days' : '최근 90일'}⌄</span></div><div className="stat-row"><span><b>42</b><small>{isEnglish ? 'Closed trades' : '종료 거래'}</small></span><span><b className="green-text">+8.42%</b><small>{isEnglish ? 'Net return' : '순수익률'}</small></span><span><b>1.62</b><small>Profit Factor</small></span></div><div className="journal-table"><div className="table-head"><span>{isEnglish ? 'Symbol' : '종목'}</span><span>{isEnglish ? 'Side' : '방향'}</span><span>{isEnglish ? 'Entry' : '진입가'}</span><span>{isEnglish ? 'Exit' : '종료가'}</span><span>{isEnglish ? 'Result' : '결과'}</span></div><div className="table-row"><span>BTC/USDT</span><span className="tag-long">LONG</span><span>64,299</span><span>65,218</span><strong className="green-text">+2.71%</strong></div><div className="table-row"><span>ETH/USDT</span><span className="tag-short">SHORT</span><span>3,462</span><span>3,418</span><strong className="green-text">+1.26%</strong></div><div className="table-row"><span>BTC/USDT</span><span className="tag-short">SHORT</span><span>63,820</span><span>64,210</span><strong className="red-text">-0.61%</strong></div></div></div>
      </div>
    </div>
  );
}

function AnalysisPreview({ language }: { language: Language }) {
  const isEnglish = language === 'en';
  return (
    <div className="app-window analysis-window">
      <div className="window-topbar"><span className="window-dots"><i /><i /><i /></span><span>Trade Analysis <em>90 DAYS</em></span><span className="window-menu">•••</span></div>
      <div className="analysis-preview-body"><div className="analysis-title"><span className="mini-kicker">TRADE ANALYSIS</span><h3>{isEnglish ? 'Review the numbers behind every trade' : '매매를 숫자로 복기'}</h3><span className="analysis-filter">{isEnglish ? 'ALL · LONG · SHORT' : '전체 · LONG · SHORT'}</span></div><div className="analysis-cards"><span><small>{isEnglish ? 'Win rate' : '승률'}</small><b>58.3%</b><i className="sparkline green-spark">╱╲╱╱╲╱</i></span><span><small>{isEnglish ? 'Avg hold' : '평균 보유'}</small><b>6h 20m</b><i className="sparkline">╲╱╱╲╱</i></span><span><small>{isEnglish ? 'Biggest leak' : '가장 큰 누수'}</small><b className="red-text">{isEnglish ? 'Early exit' : '조기청산'}</b><i className="sparkline red-spark">╱╲╲╱╲</i></span></div><div className="regime-chart"><div className="regime-labels"><span>{isEnglish ? 'Aligned trend' : '정렬 상승'}</span><strong>+1.84R</strong></div><div className="regime-bar"><i style={{ width: '76%' }} /><i style={{ width: '48%' }} /><i style={{ width: '62%' }} /></div><div className="regime-labels"><span>{isEnglish ? 'Trend conflict' : '추세 충돌'}</span><strong className="red-text">-0.42R</strong></div><div className="regime-bar muted"><i style={{ width: '42%' }} /><i style={{ width: '23%' }} /><i style={{ width: '35%' }} /></div></div></div>
    </div>
  );
}

function RiskPreview({ language }: { language: Language }) {
  const isEnglish = language === 'en';
  return (
    <div className="app-window risk-window">
      <div className="window-topbar"><span className="window-dots"><i /><i /><i /></span><span>Risk Lab <em>PRICE BASED</em></span><span className="window-menu">•••</span></div>
      <div className="risk-preview-body"><div className="analysis-title"><span className="mini-kicker">RISK LAB</span><h3>{isEnglish ? 'Find a better risk boundary' : '손실의 경계를 찾기'}</h3></div><div className="risk-tool-row"><label>SL (%)<b>1.5</b></label><label>TP (%)<b>3.0</b></label><button>{isEnglish ? 'Run analysis' : '분석 실행'} <ArrowRight size={13} /></button></div><div className="heatmap"><span className="heatmap-title">{isEnglish ? 'SL × TP expectancy' : 'SL × TP 기대값'}</span><div className="heatmap-grid">{['+0.08%', '+0.12%', '+0.21%', '-0.04%', '+0.17%', '+0.34%', '-0.12%', '+0.04%', '+0.19%', '-0.22%', '-0.08%', '+0.07%'].map((value, index) => <span className={value.startsWith('+') ? 'heat-positive' : 'heat-negative'} key={index}>{value}</span>)}</div></div><div className="recommendation"><span>{isEnglish ? 'Suggested range' : '추천 범위'}</span><strong>SL 1.3% ~ 1.8%</strong><small>{isEnglish ? 'Price movement · per-trade expectancy' : '가격 움직임 기준 · 거래당 기대값으로 비교'}</small></div></div>
    </div>
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [language, setLanguage] = useState<Language>('ko');
  const isEnglish = language === 'en';
  const t = isEnglish ? {
    nav: ['Features', 'Preview', 'Security', 'FAQ'], eyebrow: 'Free open-source trading journal', heroTitle: 'Better trading starts with understanding your own trades.', heroLead: 'Bring exchange fills together safely and replay every entry and exit. Trade Journal Free does not trade for you; it helps you prepare for the next one.', download: 'Free download for Windows', github: 'View on GitHub', note: 'Read-only API · No order execution · Local-first storage', preview: 'LIVE PREVIEW', netReturn: 'Net return', recent: 'Last 90 days', proof: 'Read-only records in one workspace', featuresEyebrow: 'BUILT FOR REVIEW', featuresTitle: 'Keep the lesson,<br />not just the trade.', featuresCopy: 'A workspace for discovering the behaviors and market conditions you repeat—not just another trade list.', previewEyebrow: 'PRODUCT PREVIEW', previewTitle: 'Simple screens,<br />enough evidence.', previewCopy: 'The same information flow used in the app: find it in the journal, replay it on a chart, then turn it into a better rule.', securityEyebrow: 'LOCAL-FIRST SECURITY', securityTitle: 'Your trade records<br /><span>stay on your computer.</span>', securityCopy: 'Trade Journal Free is not an advertising or external analysis service. Run it personally and fetch only the records you need with read-only API keys.', securityLink: 'Inspect the storage and source code', workflowEyebrow: 'THREE STEPS', workflowTitle: 'Install, connect,<br />and review the next trade.', workflow: [['Free app download', 'Get the Windows ZIP, extract it, and launch.'], ['Connect an exchange', 'Connect a read-only API to sync closed positions.'], ['Start reviewing', 'Use charts and analysis to see what to keep and change.']], faqTitle: 'Questions<br />before you start', downloadEyebrow: 'START YOUR REVIEW', downloadTitle: 'Before the next trade,<br />look at the last one.', downloadCopy: 'Trade Journal Free is free and never places orders.', source: 'View source and releases', footer: 'A free open-source trade review tool for individual traders.', links: ['Features', 'Security', 'FAQ'], copyright: '© 2026 Trade Journal Free'
  } : {
    nav: ['기능', '화면 미리보기', '보안', 'FAQ'], eyebrow: '무료 오픈소스 트레이딩 저널', heroTitle: '더 나은 매매는, 내 거래를 이해하는 것에서 시작됩니다.', heroLead: '거래소의 체결 기록을 안전하게 모으고, 진입부터 청산까지 다시 보세요. Trade Journal Free는 매매를 대신하지 않고, 다음 거래를 더 잘 준비하게 합니다.', download: 'Windows 무료 다운로드', github: 'GitHub에서 보기', note: 'Read-only API · 주문 실행 없음 · 로컬 우선 저장', preview: 'LIVE PREVIEW', netReturn: '순수익률', recent: '최근 90일', proof: '읽기 전용 기록을 한곳에서', featuresEyebrow: 'BUILT FOR REVIEW', featuresTitle: '거래를 쌓는 데서<br />끝나지 않도록', featuresCopy: '단순한 거래 목록이 아니라, 내가 반복하는 행동과 시장 환경을 발견하는 작업 공간입니다.', previewEyebrow: 'PRODUCT PREVIEW', previewTitle: '화면은 복잡하지 않게,<br />근거는 충분하게', previewCopy: '실제 앱에서 사용하는 정보 흐름을 그대로 담았습니다. 표에서 발견하고, 차트로 복기하고, 분석으로 다음 규칙을 정합니다.', securityEyebrow: 'LOCAL-FIRST SECURITY', securityTitle: '거래 기록은<br /><span>당신의 컴퓨터에</span>', securityCopy: 'Trade Journal Free는 매매 기록을 광고 데이터나 외부 분석 서버로 보내는 서비스가 아닙니다. 개인용으로 실행하고, 읽기 전용 API로 필요한 기록만 가져옵니다.', securityLink: '저장 구조와 코드를 확인하기', workflowEyebrow: 'THREE STEPS', workflowTitle: '설치하고, 연결하고,<br />다음 거래를 준비하세요.', workflow: [['무료 앱 다운로드', 'Windows ZIP을 받고 압축을 풀어 바로 실행합니다.'], ['거래소 연결', '읽기 전용 API를 연결하면 종료 포지션을 동기화합니다.'], ['복기 시작', '차트와 분석으로 잘한 점과 고칠 점을 확인합니다.']], faqTitle: '시작하기 전에<br />궁금한 점', downloadEyebrow: 'START YOUR REVIEW', downloadTitle: '다음 거래 전에,<br />지난 거래를 먼저 보세요.', downloadCopy: 'Trade Journal Free는 무료이며, 주문을 대신하지 않습니다.', source: '소스코드와 릴리스 보기', footer: '개인 트레이더를 위한 무료 오픈소스 거래 복기 도구.', links: ['기능', '보안', 'FAQ'], copyright: '© 2026 Trade Journal Free'
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
            <a href="#features" onClick={closeMenu}>{t.nav[0]}</a>
            <a href="#preview" onClick={closeMenu}>{t.nav[1]}</a>
            <a href="#security" onClick={closeMenu}>{t.nav[2]}</a>
            <a href="#faq" onClick={closeMenu}>{t.nav[3]}</a>
            <a className="nav-github" href={sourceUrl} target="_blank" rel="noreferrer" onClick={closeMenu}><GitBranch size={16} /> GitHub</a>
            <button type="button" className="language-toggle" onClick={toggleLanguage}>{isEnglish ? '한국어' : 'EN'}</button>
            <DownloadButton compact label={t.download} />
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse-dot" /> {t.eyebrow}</div>
              <h1>{isEnglish ? <>Better trading starts with<br /><span>understanding your own trades.</span></> : <>더 나은 매매는,<br /><span>내 거래를 이해하는<br />것에서 시작됩니다.</span></>}</h1>
              <p className="hero-lead">{t.heroLead}</p>
              <div className="hero-actions"><DownloadButton label={t.download} /><DownloadButton label={isEnglish ? 'Download for macOS' : 'macOS 다운로드'} href={macReleaseUrl} /><a className="button button-ghost" href={sourceUrl} target="_blank" rel="noreferrer"><GitBranch size={17} /> {t.github}</a></div>
              <p className="hero-note"><LockKeyhole size={14} /> {t.note}</p>
            </div>
            <div className="hero-visual">
              <div className="visual-caption"><span><i className="status-dot" /> {t.preview}</span><span>BTC/USDT · 4H</span></div>
              <div className="hero-chart-window">
                <div className="chart-window-head"><span>BTC/USDT <b>4H</b></span><span className="chart-price">63,869.0 <small>+1.42%</small></span></div>
                <CandleChart language={language} />
                <div className="chart-legend"><span><i className="legend-blue" />VWAP</span><span><i className="legend-green" />{isEnglish ? 'RSI oversold rebound' : 'RSI 과매도 반등'}</span><span><i className="legend-amber" />ENTRY / EXIT</span></div>
              </div>
              <div className="floating-stat stat-top"><span>{t.netReturn}</span><strong>+8.42%</strong><small>{t.recent}</small></div>
              <div className="floating-stat stat-bottom"><span>{isEnglish ? 'Trade analysis' : '거래 분석'}</span><strong>42</strong><small>{isEnglish ? 'Closed positions' : '종료 포지션'}</small></div>
            </div>
          </div>
          <div className="container hero-proof"><span>DEEPCOIN</span><span>BINANCE</span><span>BYBIT</span><span>OKX</span><i /><small>{t.proof}</small></div>
        </section>

        <section id="features" className="section section-features">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">{t.featuresEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.featuresTitle }} /></div><p>{t.featuresCopy}</p></div>
            <div className="feature-grid">{featuresByLanguage[language].map(({ icon: Icon, eyebrow, title, copy, accent }) => <article className={`feature-card accent-${accent}`} key={title}><span className="feature-icon"><Icon size={21} /></span><span className="card-eyebrow">{eyebrow}</span><h3>{title}</h3><p>{copy}</p><ArrowRight className="feature-arrow" size={18} /></article>)}</div>
          </div>
        </section>

        <section id="preview" className="section section-preview">
          <div className="container">
            <div className="section-heading preview-heading"><div><span className="eyebrow">{t.previewEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.previewTitle }} /></div><p>{t.previewCopy}</p></div>
            <div className="showcase-grid"><div className="showcase-item showcase-wide"><JournalPreview language={language} /><div className="showcase-caption"><span>01</span><div><h3>{isEnglish ? 'Trade Journal' : '매매일지'}</h3><p>{isEnglish ? 'Review closed positions and net returns in latest-first order.' : '종료 포지션과 순수익률을 최신순으로 확인합니다.'}</p></div></div></div><div className="showcase-item"><AnalysisPreview language={language} /><div className="showcase-caption"><span>02</span><div><h3>{isEnglish ? 'Trade Analysis' : '매매분석'}</h3><p>{isEnglish ? 'Find the difference between outcomes and behavior.' : '승패와 행동의 차이를 찾아냅니다.'}</p></div></div></div><div className="showcase-item"><RiskPreview language={language} /><div className="showcase-caption"><span>03</span><div><h3>Risk Lab</h3><p>{isEnglish ? 'Compare price-based stops and expectancy.' : '가격 기준 손절과 기대값을 비교합니다.'}</p></div></div></div></div>
          </div>
        </section>

        <section id="security" className="section section-security">
          <div className="container security-layout"><div className="security-copy"><span className="eyebrow">{t.securityEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.securityTitle }} /><p>{t.securityCopy}</p><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">{t.securityLink} <ExternalLink size={15} /></a></div><div className="security-list"><div className="security-row"><span className="security-icon"><ShieldCheck size={20} /></span><div><h3>{isEnglish ? 'Read-only APIs' : '읽기 전용 API'}</h3><p>{isEnglish ? 'No order, cancellation, or withdrawal permissions.' : '주문·취소·출금 권한을 사용하지 않습니다.'}</p></div><Check className="security-check" size={18} /></div><div className="security-row"><span className="security-icon"><LockKeyhole size={20} /></span><div><h3>{isEnglish ? 'Keys stay out of browser storage' : '키를 브라우저에 저장하지 않음'}</h3><p>{isEnglish ? 'macOS Keychain and Windows Credential Manager come first.' : 'macOS Keychain, Windows Credential Manager를 우선 사용합니다.'}</p></div><Check className="security-check" size={18} /></div><div className="security-row"><span className="security-icon"><Database size={20} /></span><div><h3>{isEnglish ? 'Your records stay local' : '내 컴퓨터에 남는 기록'}</h3><p>{isEnglish ? 'Journal data and analysis results are stored in local SQLite.' : '저널 데이터와 분석 결과는 로컬 SQLite에 저장됩니다.'}</p></div><Check className="security-check" size={18} /></div></div></div>
        </section>

        <section className="section section-workflow"><div className="container"><div className="workflow-intro"><span className="eyebrow">{t.workflowEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.workflowTitle }} /></div><div className="workflow-grid">{t.workflow.map(([title, copy], index) => { const Icon = [MonitorDown, Layers3, Sparkles][index]; return <div key={title}><span>{`0${index + 1}`}</span><Icon size={22} /><h3>{title}</h3><p>{copy}</p></div>; })}</div></div></section>

        <section id="faq" className="section section-faq"><div className="container faq-layout"><div className="faq-heading"><span className="eyebrow">FAQ</span><h2 dangerouslySetInnerHTML={{ __html: t.faqTitle }} /><CircleHelp size={38} /></div><div className="faq-list">{faqsByLanguage[language].map((faq, index) => <FAQItem key={faq.question} {...faq} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />)}</div></div></section>

        <section className="download-section"><div className="container download-inner"><div><span className="eyebrow">{t.downloadEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.downloadTitle }} /><p>{t.downloadCopy}</p></div><div className="download-side"><div className="download-buttons"><DownloadButton label={t.download} /><DownloadButton label={isEnglish ? 'Download for macOS' : 'macOS 다운로드'} href={macReleaseUrl} /></div><a className="text-link muted-link" href={sourceUrl} target="_blank" rel="noreferrer"><GitBranch size={16} /> {t.source}</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><ProductLogo /><p>{t.footer}</p><div className="footer-links"><a href="#features">{t.links[0]}</a><a href="#security">{t.links[1]}</a><a href="#faq">{t.links[2]}</a><a href={sourceUrl} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a></div><span className="copyright">{t.copyright}</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
