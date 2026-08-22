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

const releaseUrl = import.meta.env.VITE_WINDOWS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Free-Windows.zip';
const macReleaseUrl = import.meta.env.VITE_MACOS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Free-macOS.zip';
const sourceUrl = 'https://github.com/alfredcho91-ux/trade-journal-free';
const releaseInfo = {
  version: 'v1.0.0',
  windowsSize: '약 46 MB',
  macosSize: '약 31 MB',
  windowsPlatform: 'Windows 10/11 · x64',
  macosPlatform: 'macOS · Apple Silicon',
} as const;
const heroLeadByLanguage = {
  ko: '거래 기록을 자동으로 모으고, 진입부터 청산까지 복기하세요. 반복되는 강점과 실수를 찾아 다음 거래에 적용할 나만의 기준을 만듭니다.',
  en: 'Collect your trade history, replay every entry and exit, and turn recurring strengths and mistakes into rules you can use on the next trade.',
} as const;
const advancedFeaturesByLanguage = {
  ko: [
    ['MFE / MAE 분석', '진입 뒤 얼마나 유리했고 불리했는지 확인해 좋은 진입과 무리한 진입을 구분합니다.'],
    ['SL / TP 시뮬레이션', '가격 기준 손절·익절 조합을 비교해 내 거래에 맞는 위험 경계를 찾습니다.'],
    ['시장 국면별 성과', 'Weekly·Daily·4H 추세 조합 중 어떤 시장 상황에서 성과가 좋은지 확인합니다.'],
    ['조기청산 / 추가 보유', '조금 더 보유했을 때의 결과와 실제 청산을 비교해 청산 타이밍을 돌아봅니다.'],
    ['진입 후 가격 흐름', '청산 뒤 가격이 어떻게 움직였는지 확인해 한 줄 요약 이상의 맥락을 얻습니다.'],
    ['승리·손실 패턴 비교', '승리 거래와 손실 거래의 지표·방향·행동 차이를 비교해 반복 조건을 찾습니다.'],
  ],
  en: [
    ['MFE / MAE review', 'See how far a trade moved for and against you, then separate strong entries from weak ones.'],
    ['SL / TP simulation', 'Compare price-based stop and target combinations to find a risk boundary that fits your trading.'],
    ['Performance by regime', 'See which Weekly, Daily, and 4H market conditions have worked best for you.'],
    ['Early exit / extra hold', 'Compare the recorded exit with a little more holding time to review your timing.'],
    ['Post-entry price path', 'Follow what price did after entry and exit so one return number has real context.'],
    ['Win / loss patterns', 'Compare indicators, direction, and behavior between winning and losing trades.'],
  ],
} as const;
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
  { question: '거래 데이터는 어디에 저장되나요?', answer: '거래 기록과 분석 결과는 데스크톱 앱의 로컬 저장소에 남습니다. 이 소개 사이트는 거래 데이터를 수집하지 않습니다.' },
  { question: '어떤 API 권한이 필요한가요?', answer: '거래 기록 조회에 필요한 Read Only 권한만 사용하세요. 출금과 주문 권한은 활성화하지 않아도 됩니다.' },
  { question: 'API Key로 주문이나 출금이 가능한가요?', answer: 'Trade Journal Free는 주문·취소·출금을 실행하지 않습니다. 그래도 API를 만들 때는 반드시 읽기 전용 권한만 선택하세요.' },
  { question: 'API Key는 어떻게 보관되나요?', answer: '무료 데스크톱판은 브라우저 저장소에 키를 넣지 않고 운영체제의 보안 저장소 사용을 우선합니다. 사용 중인 배포판의 안내를 확인하세요.' },
  { question: 'API Key를 삭제할 수 있나요?', answer: '앱의 거래소 연결 관리에서 연결을 삭제하면 저장된 연결 정보도 함께 제거할 수 있습니다.' },
  { question: '어떤 거래소를 지원하나요?', answer: '현재 Deepcoin, Binance, Bybit, OKX의 읽기 전용 거래 기록 동기화를 지원합니다.' },
  { question: 'Windows SmartScreen 경고가 뜨는 이유는 무엇인가요?', answer: '무료 배포판은 Windows 코드 서명이 아직 없어 처음 실행할 때 경고가 표시될 수 있습니다. GitHub Releases의 파일인지 확인한 뒤 실행하세요.' },
  ],
  en: [
    { question: 'Where is my trade data stored?', answer: 'Trade records and analysis results stay in the desktop app’s local storage. This website does not collect trading data.' },
    { question: 'Which API permissions do I need?', answer: 'Use only the Read Only permissions needed to read trade history. Do not enable withdrawals or order access.' },
    { question: 'Can the API key place orders or withdrawals?', answer: 'Trade Journal Free never places, cancels, or withdraws orders. Create the exchange key with read-only access anyway.' },
    { question: 'How are API keys stored?', answer: 'The desktop build does not put keys in browser storage and prefers the operating system’s secure credential storage. Check the instructions for your build.' },
    { question: 'Can I delete an API key?', answer: 'Delete the exchange connection from the app’s connection settings to remove the saved connection information.' },
    { question: 'Which exchanges are supported?', answer: 'Read-only trade history sync is available for Deepcoin, Binance, Bybit, and OKX.' },
    { question: 'Why does Windows SmartScreen show a warning?', answer: 'The free build is not code-signed yet, so Windows may warn on first launch. Verify the file came from GitHub Releases before opening it.' },
  ],
} as const;

function ProductLogo() {
  return (
    <a className="brand" href="#top" aria-label="Trade Journal Free 홈">
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

const screenshotItems = [
  { src: '/screenshots/journal.png', ko: '매매일지', en: 'Trade Journal', copyKo: '거래 기록과 실제 순수익을 확인하는 화면', copyEn: 'The journal view for records and net results' },
  { src: '/screenshots/analysis.png', ko: '매매분석', en: 'Trade Analysis', copyKo: '승패와 반복되는 행동을 비교하는 화면', copyEn: 'Compare outcomes and recurring behavior' },
  { src: '/screenshots/risk-lab.png', ko: 'Risk Lab', en: 'Risk Lab', copyKo: '가격 기준 손절과 기대값을 비교하는 화면', copyEn: 'Compare price-based stops and expectancy' },
  { src: '/screenshots/chart-review.png', ko: '포지션 차트 복기', en: 'Position Replay', copyKo: '진입·청산과 지표를 캔들 위에서 복기하는 화면', copyEn: 'Replay entry, exit, and indicators on candles' },
] as const;

function ScreenshotGallery({ language }: { language: Language }) {
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [available, setAvailable] = useState<Record<string, boolean>>({});
  const isEnglish = language === 'en';
  const activeItem = screenshotItems.find((item) => item.src === activeSrc);
  return (
    <>
      <div className="screenshot-grid">
        {screenshotItems.map((item) => {
          const title = isEnglish ? item.en : item.ko;
          const copy = isEnglish ? item.copyEn : item.copyKo;
          return (
            <article className="screenshot-card" key={item.src}>
              <button type="button" className={`screenshot-frame ${available[item.src] ? 'screenshot-ready' : ''}`} onClick={() => available[item.src] && setActiveSrc(item.src)} aria-label={available[item.src] ? `${title} ${isEnglish ? 'enlarge' : '크게 보기'}` : `${title} ${isEnglish ? 'screenshot placeholder' : '스크린샷 준비 영역'}`}>
                {available[item.src] && <img src={item.src} alt={title} onError={() => setAvailable((current) => ({ ...current, [item.src]: false }))} />}
                {!available[item.src] && <span className="screenshot-placeholder"><MonitorDown size={22} /><b>{isEnglish ? 'Screenshot slot' : '스크린샷 영역'}</b><small>{isEnglish ? 'Add an image to public/screenshots/' : 'public/screenshots/에 이미지를 넣으면 표시됩니다.'}</small></span>}
                {!available[item.src] && <img className="asset-probe" src={item.src} alt="" aria-hidden="true" onLoad={() => setAvailable((current) => ({ ...current, [item.src]: true }))} onError={() => undefined} />}
              </button>
              <div className="screenshot-caption"><span>0{String(screenshotItems.indexOf(item) + 1)}</span><div><h3>{title}</h3><p>{copy}</p></div></div>
            </article>
          );
        })}
      </div>
      {activeItem && <div className="lightbox" role="dialog" aria-modal="true" aria-label={isEnglish ? `${activeItem.en} screenshot` : `${activeItem.ko} 스크린샷`} onClick={() => setActiveSrc(null)}><button type="button" className="lightbox-close" onClick={() => setActiveSrc(null)} aria-label={isEnglish ? 'Close image' : '이미지 닫기'}><X size={22} /></button><img src={activeItem.src} alt={isEnglish ? activeItem.en : activeItem.ko} onClick={(event) => event.stopPropagation()} /></div>}
    </>
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
            <a href="#advanced" onClick={closeMenu}>{isEnglish ? 'Analysis' : '고급 분석'}</a>
            <a href="#preview" onClick={closeMenu}>{t.nav[1]}</a>
            <a href="#security" onClick={closeMenu}>{t.nav[2]}</a>
            <a href="#faq" onClick={closeMenu}>{t.nav[3]}</a>
            <button type="button" className="language-toggle" onClick={toggleLanguage}>{isEnglish ? '한국어' : 'EN'}</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse-dot" /> {t.eyebrow}</div>
              <h1>{isEnglish ? <>Find patterns in your trades,<br /><span>build your own trading rules.</span></> : <>내 거래에서 패턴을 찾고,<br /><span>나만의 매매 기준을<br />만드세요.</span></>}</h1>
              <p className="hero-lead">{heroLeadByLanguage[language]}</p>
              <div className="hero-actions"><DownloadButton label={t.download} /><DownloadButton label={isEnglish ? 'Download for macOS' : 'macOS 다운로드'} href={macReleaseUrl} /><a className="button button-ghost" href={sourceUrl} target="_blank" rel="noreferrer"><GitBranch size={17} /> {t.github}</a></div>
              <div className="hero-badges"><span><LockKeyhole size={14} /> READ ONLY API</span><span><Database size={14} /> LOCAL DATA</span><span><ShieldCheck size={14} /> NO TRADE EXECUTION</span></div>
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
          <div className="container hero-proof"><span>DEEPCOIN</span><span>BINANCE</span><span>BYBIT</span><span>OKX</span><i /><small>{t.proof}</small></div>
        </section>

        <section id="features" className="section section-features">
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

        <section id="preview" className="section section-preview">
          <div className="container">
            <div className="section-heading preview-heading"><div><span className="eyebrow">{t.previewEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.previewTitle }} /></div><p>{t.previewCopy}</p></div>
            <div className="showcase-grid"><div className="showcase-item showcase-wide"><JournalPreview language={language} /><div className="showcase-caption"><span>01</span><div><h3>{isEnglish ? 'Trade Journal' : '매매일지'}</h3><p>{isEnglish ? 'Review closed positions and net returns in latest-first order.' : '종료 포지션과 순수익률을 최신순으로 확인합니다.'}</p></div></div></div><div className="showcase-item"><AnalysisPreview language={language} /><div className="showcase-caption"><span>02</span><div><h3>{isEnglish ? 'Trade Analysis' : '매매분석'}</h3><p>{isEnglish ? 'Find the difference between outcomes and behavior.' : '승패와 행동의 차이를 찾아냅니다.'}</p></div></div></div><div className="showcase-item"><RiskPreview language={language} /><div className="showcase-caption"><span>03</span><div><h3>Risk Lab</h3><p>{isEnglish ? 'Compare price-based stops and expectancy.' : '가격 기준 손절과 기대값을 비교합니다.'}</p></div></div></div></div>
          </div>
        </section>

        <section id="real-screens" className="section section-screenshots">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">{isEnglish ? 'REAL APP SCREENS' : '실제 프로그램 화면'}</span><h2>{isEnglish ? <>Bring your own<br /><span>screenshots here.</span></> : <>실제 화면을<br /><span>이곳에 담습니다.</span></>}</h2></div><p>{isEnglish ? 'The gallery is ready for real Journal, Analysis, Risk Lab, and replay screenshots. No simulated image is presented as a real product screen.' : '매매일지·매매분석·Risk Lab·차트 복기 화면을 넣을 수 있는 갤러리입니다. 실제 화면이 없을 때는 가짜 이미지를 보여주지 않습니다.'}</p></div>
            <ScreenshotGallery language={language} />
          </div>
        </section>

        <section id="security" className="section section-security">
          <div className="container security-layout"><div className="security-copy"><span className="eyebrow">{t.securityEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.securityTitle }} /><p>{t.securityCopy}</p><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">{t.securityLink} <ExternalLink size={15} /></a></div><div className="security-list"><div className="security-row"><span className="security-icon"><ShieldCheck size={20} /></span><div><h3>{isEnglish ? 'Read-only APIs' : '읽기 전용 API'}</h3><p>{isEnglish ? 'No order, cancellation, or withdrawal permissions.' : '주문·취소·출금 권한을 사용하지 않습니다.'}</p></div><Check className="security-check" size={18} /></div><div className="security-row"><span className="security-icon"><LockKeyhole size={20} /></span><div><h3>{isEnglish ? 'Keys stay out of browser storage' : '키를 브라우저에 저장하지 않음'}</h3><p>{isEnglish ? 'macOS Keychain and Windows Credential Manager come first.' : 'macOS Keychain, Windows Credential Manager를 우선 사용합니다.'}</p></div><Check className="security-check" size={18} /></div><div className="security-row"><span className="security-icon"><Database size={20} /></span><div><h3>{isEnglish ? 'Your records stay local' : '내 컴퓨터에 남는 기록'}</h3><p>{isEnglish ? 'Journal data and analysis results are stored in local SQLite.' : '저널 데이터와 분석 결과는 로컬 SQLite에 저장됩니다.'}</p></div><Check className="security-check" size={18} /></div></div></div>
        </section>

        <section className="security-proof"><div className="container security-proof-inner"><span className="security-badge"><ShieldCheck size={15} /> READ ONLY</span><span className="security-badge"><Database size={15} /> LOCAL DATA</span><span className="security-badge"><LockKeyhole size={15} /> NO TRADE EXECUTION</span><p>{isEnglish ? 'Use a read-only key, keep your records local, and review trades without giving the app order access.' : '읽기 전용 키를 사용하고, 기록은 내 컴퓨터에 보관하며, 주문 권한 없이 거래를 복기합니다.'}</p></div></section>

        <section className="section section-workflow"><div className="container"><div className="workflow-intro"><span className="eyebrow">{t.workflowEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.workflowTitle }} /></div><div className="workflow-grid">{t.workflow.map(([title, copy], index) => { const Icon = [MonitorDown, Layers3, Sparkles][index]; return <div key={title}><span>{`0${index + 1}`}</span><Icon size={22} /><h3>{title}</h3><p>{copy}</p></div>; })}</div></div></section>

        <section id="faq" className="section section-faq"><div className="container faq-layout"><div className="faq-heading"><span className="eyebrow">FAQ</span><h2 dangerouslySetInnerHTML={{ __html: t.faqTitle }} /><CircleHelp size={38} /></div><div className="faq-list">{faqsByLanguage[language].map((faq, index) => <FAQItem key={faq.question} {...faq} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />)}</div></div></section>

        <section className="download-section"><div className="container download-inner"><div><span className="eyebrow">{t.downloadEyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: t.downloadTitle }} /><p>{t.downloadCopy}</p></div><div className="download-side"><div className="download-buttons"><DownloadButton label={t.download} /><DownloadButton label={isEnglish ? 'Download for macOS' : 'macOS 다운로드'} href={macReleaseUrl} /></div><a className="text-link muted-link" href={sourceUrl} target="_blank" rel="noreferrer"><GitBranch size={16} /> {t.source}</a></div></div><div className="container download-facts"><div><b>{releaseInfo.windowsPlatform}</b><span>Windows · {releaseInfo.version} · {releaseInfo.windowsSize}</span></div><div><b>{releaseInfo.macosPlatform}</b><span>macOS · {releaseInfo.version} · {releaseInfo.macosSize}</span></div><div><b>{isEnglish ? 'Free · no account' : '무료 · 회원가입 불필요'}</b><span>{isEnglish ? 'Read-only API · no orders or withdrawals' : 'Read-only API · 주문·출금 기능 없음'}</span></div></div><p className="download-warning">{isEnglish ? 'Windows is not code-signed yet, so SmartScreen may show a first-launch warning. Verify the download source before opening it.' : 'Windows 버전은 아직 코드 서명이 없어 처음 실행할 때 SmartScreen 경고가 표시될 수 있습니다. 다운로드 출처를 확인한 뒤 실행하세요.'}</p></section>

        <section id="legal" className="legal-section"><div className="container legal-grid"><article><h3>{isEnglish ? 'Privacy' : '개인정보 처리방침'}</h3><p>{isEnglish ? 'This static site does not collect API keys or trading records.' : '이 정적 사이트는 API Key나 거래 기록을 수집하지 않습니다.'}</p></article><article><h3>{isEnglish ? 'Terms' : '이용약관'}</h3><p>{isEnglish ? 'Use the app at your own discretion and keep exchange keys read-only.' : '프로그램은 사용자의 판단 아래 이용하고 거래소 키는 읽기 전용으로 관리하세요.'}</p></article><article id="disclaimer"><h3>Disclaimer</h3><p>{isEnglish ? 'This is a personal trade journaling and analysis tool, not investment advice or an auto-trading service.' : '개인의 거래 기록과 분석을 위한 도구이며 투자자문이나 자동매매 서비스가 아닙니다.'}</p></article></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><ProductLogo /><p>{t.footer}</p><div className="footer-links"><a href="#features">{t.links[0]}</a><a href="#legal">{isEnglish ? 'Privacy' : '개인정보'}</a><a href="#legal">{isEnglish ? 'Terms' : '이용약관'}</a><a href="#disclaimer">Disclaimer</a><a href={sourceUrl} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a><a href={`${sourceUrl}/issues`} target="_blank" rel="noreferrer">{isEnglish ? 'Contact' : '문의'} <ExternalLink size={13} /></a></div><span className="copyright">{t.copyright}</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
