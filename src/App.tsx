import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  KeyRound,
  LockKeyhole,
  Menu,
  MonitorDown,
  Search,
  ShieldCheck,
  Target,
  X,
} from 'lucide-react';
import { content, type Language } from './content';

const releaseUrl = import.meta.env.VITE_WINDOWS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Windows.zip';
const sourceUrl = 'https://github.com/alfredcho91-ux/trade-journal-free';
const releaseInfo = {
  version: 'v1.0.14',
  platform: 'Windows 10/11 · x64',
  size: '45.6 MB',
} as const;

type ScreenshotKey = 'analysis' | 'exit';

function ProductLogo({ language }: { language: Language }) {
  return (
    <a className="brand" href="#top" aria-label={language === 'en' ? 'Trade Journal home' : 'Trade Journal 홈'}>
      <img src="/trading-journal-logo.png" alt="Trade Journal" />
    </a>
  );
}

function DownloadButton({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <a className={`button button-primary${compact ? ' button-compact' : ''}`} href={releaseUrl}>
      <Download size={compact ? 16 : 18} aria-hidden="true" />
      <span>{label}</span>
      <ArrowRight size={compact ? 15 : 17} aria-hidden="true" />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy, compact = false }: { eyebrow: string; title: ReactNode; copy: string; compact?: boolean }) {
  return (
    <div className={`section-intro${compact ? ' section-intro-compact' : ''}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState<ScreenshotKey | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const t = content[language];
  const isEnglish = language === 'en';

  const screenshots = {
    analysis: {
      src: '/screenshots/trade-analysis-evidence.png',
      alt: t.hero.imageAlt,
      title: t.hero.visualTitle,
    },
    exit: {
      src: '/screenshots/exit-hold-result.png',
      alt: t.analysis.screenshotAlt,
      title: t.analysis.screenshotEyebrow,
    },
  } as const;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = isEnglish
      ? 'Trade Journal | Find patterns in your trades'
      : 'Trade Journal | 내 거래에서 패턴을 찾으세요';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = isEnglish
        ? 'A local-first Windows trade journal for reviewing closed trades, finding patterns, and tracing analysis back to the trades behind it.'
        : '종료 거래를 분석하고 패턴을 찾으며 결과를 만든 근거 거래까지 추적하는 로컬 우선 Windows 트레이딩 저널.';
    }
  }, [isEnglish, language]);

  useEffect(() => {
    if (!activeScreenshot) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveScreenshot(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [activeScreenshot]);

  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => {
    setLanguage(isEnglish ? 'ko' : 'en');
    setMenuOpen(false);
  };

  const navItems = [
    ['#product', t.nav.product],
    ['#analysis', t.nav.analysis],
    ['#security', t.nav.security],
    ['/guide', t.nav.workflow],
    ['#faq', t.nav.faq],
  ] as const;

  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">{t.skip}</a>

      <header className="site-header">
        <div className="container header-inner">
          <ProductLogo language={language} />
          <nav className={`site-nav${menuOpen ? ' nav-open' : ''}`} aria-label={isEnglish ? 'Primary navigation' : '주요 메뉴'}>
            {navItems.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <button type="button" className="language-toggle" onClick={toggleLanguage} aria-label={isEnglish ? '한국어로 보기' : 'View in English'}>{isEnglish ? '한국어' : 'EN'}</button>
            <span className="mobile-download"><DownloadButton label={t.nav.download} compact /></span>
          </nav>
          <div className="header-actions">
            <DownloadButton label={t.nav.download} compact />
            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-label={isEnglish ? (menuOpen ? 'Close menu' : 'Open menu') : (menuOpen ? '메뉴 닫기' : '메뉴 열기')}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true" />
          <div className="container hero-copy">
            <span className="eyebrow eyebrow-live"><i />{t.hero.eyebrow}</span>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p>{t.hero.copy}</p>
            <div className="hero-actions">
              <DownloadButton label={t.nav.download} />
              <a className="button button-secondary" href="#workflow">{t.hero.secondary}<ArrowRight size={17} aria-hidden="true" /></a>
            </div>
            <ul className="hero-facts" aria-label={isEnglish ? 'Product facts' : '제품 정보'}>
              {t.hero.facts.map((fact) => <li key={fact}><Check size={14} aria-hidden="true" />{fact}</li>)}
            </ul>
          </div>

          <div className="container hero-product">
            <button className="product-shot" type="button" onClick={() => setActiveScreenshot('analysis')} aria-label={t.hero.openImage}>
              <span className="product-window-bar" aria-hidden="true">
                <span className="window-dots"><i /><i /><i /></span>
                <b>Trade Journal</b>
                <small>Windows desktop</small>
              </span>
              <span className="product-image-viewport">
                <img src="/screenshots/trade-analysis-evidence.png" alt={t.hero.imageAlt} />
              </span>
            </button>
            <div className="product-shot-caption">
              <span>01 / {t.hero.visualLabel}</span>
              <div><strong>{t.hero.visualTitle}</strong><p>{t.hero.visualCopy}</p></div>
              <Search size={17} aria-hidden="true" />
            </div>
          </div>

          <div className="container exchange-line" aria-label={isEnglish ? 'Supported exchanges and platform' : '지원 거래소 및 플랫폼'}>
            <span>{isEnglish ? 'SUPPORTED' : '지원 거래소'}</span>
            <strong>DEEPCOIN SWAP</strong>
            <strong>BINANCE</strong>
            <i />
            <span>WINDOWS 10/11 · X64</span>
          </div>
        </section>

        <section id="product" className="section problem-section">
          <div className="container">
            <SectionIntro eyebrow={t.problem.eyebrow} title={t.problem.title} copy={t.problem.copy} />
            <div className="question-list">
              {t.problem.questions.map(([question, answer], index) => (
                <article key={question}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
            <p className="problem-closing">{t.problem.closing}</p>
          </div>
        </section>

        <section className="section flow-section" aria-labelledby="flow-title">
          <div className="container">
            <div className="flow-heading">
              <span className="eyebrow">{t.flow.eyebrow}</span>
              <h2 id="flow-title">{t.flow.title}</h2>
              <p>{t.flow.copy}</p>
            </div>
            <ol className="process-flow">
              {t.flow.steps.map(([title, copy], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{title}</strong><small>{copy}</small></div>
                  {index < t.flow.steps.length - 1 && <ArrowRight size={16} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="analysis" className="section analysis-section">
          <div className="container">
            <SectionIntro eyebrow={t.analysis.eyebrow} title={t.analysis.title} copy={t.analysis.copy} />
            <div className="analysis-feature">
              <div className="analysis-feature-copy">
                <span className="mono-label">{t.analysis.screenshotEyebrow}</span>
                <h3>{t.analysis.screenshotTitle}</h3>
                <p>{t.analysis.screenshotCopy}</p>
                <button type="button" className="inline-action" onClick={() => setActiveScreenshot('exit')}>
                  <Search size={16} aria-hidden="true" />{t.analysis.openImage}
                </button>
              </div>
              <button className="analysis-shot" type="button" onClick={() => setActiveScreenshot('exit')} aria-label={t.analysis.openImage}>
                <img src="/screenshots/exit-hold-result.png" alt={t.analysis.screenshotAlt} loading="lazy" />
              </button>
            </div>
            <div className="analysis-stories">
              {t.analysis.stories.map(([title, copy, metric], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <small>{metric}</small>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="evidence-note"><BarChart3 size={19} aria-hidden="true" /><p>{t.analysis.evidence}</p><ArrowRight size={18} aria-hidden="true" /></div>
          </div>
        </section>

        <section className="section plan-section">
          <div className="container plan-layout">
            <div className="plan-copy">
              <span className="eyebrow">{t.plan.eyebrow}</span>
              <h2>{t.plan.title}</h2>
              <p>{t.plan.copy}</p>
              <small><LockKeyhole size={14} aria-hidden="true" />{t.plan.note}</small>
            </div>
            <div className="plan-compare" aria-label={isEnglish ? 'Conceptual comparison of a trading plan and actual execution' : '거래 계획과 실제 실행 비교 개념도'}>
              <div className="compare-row compare-planned">
                <b>{t.plan.planned}</b>
                <div className="compare-track">
                  {t.plan.labels.map((label, index) => <span key={label} className={`track-point point-${index}`}><i />{label}</span>)}
                </div>
              </div>
              <div className="compare-divider"><span>{isEnglish ? 'TRADE CLOSED' : '거래 종료'}</span></div>
              <div className="compare-row compare-actual">
                <b>{t.plan.actual}</b>
                <div className="actual-events">
                  {t.plan.actualLabels.map((label, index) => <span key={label}><i>{index + 1}</i>{label}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="section security-section">
          <div className="container security-layout">
            <div className="security-copy">
              <span className="eyebrow">{t.security.eyebrow}</span>
              <h2>{t.security.title}</h2>
              <p>{t.security.copy}</p>
              <a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">{t.security.source}<ExternalLink size={15} aria-hidden="true" /></a>
            </div>
            <div className="security-facts">
              {t.security.items.map(([title, copy], index) => {
                const Icon = [ShieldCheck, LockKeyhole, Database, GitBranch][index];
                return <article key={title}><Icon size={20} aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div><Check size={17} aria-hidden="true" /></article>;
              })}
              <div className="website-data"><span>{t.security.website}</span><strong>{t.security.websiteValue}</strong></div>
            </div>
          </div>
        </section>

        <section id="workflow" className="section workflow-section">
          <div className="container">
            <SectionIntro eyebrow={t.workflow.eyebrow} title={t.workflow.title} copy={t.workflow.safety} compact />
            <ol className="workflow-steps">
              {t.workflow.steps.map(([title, copy], index) => {
                const Icon = [MonitorDown, LockKeyhole, Target][index];
                return (
                  <li key={title}>
                    <span>0{index + 1}</span>
                    <Icon size={23} aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </li>
                );
              })}
            </ol>
            <a className="guide-entry" href="/guide">
              <span><KeyRound size={19} aria-hidden="true" /></span>
              <div><strong>{t.workflow.guideCta}</strong><p>{t.workflow.guideCopy}</p></div>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section release-section">
          <div className="container release-layout">
            <div className="release-copy">
              <span className="eyebrow">{t.release.eyebrow}</span>
              <h2>{t.release.title}</h2>
              <p>{t.release.copy}</p>
              <div className="release-actions">
                <DownloadButton label={t.release.button} />
                <a className="button button-secondary" href={sourceUrl} target="_blank" rel="noreferrer"><GitBranch size={17} aria-hidden="true" />{t.release.source}</a>
              </div>
            </div>
            <dl className="release-specs">
              <div><dt>{t.release.version}</dt><dd>{releaseInfo.version}</dd></div>
              <div><dt>{t.release.platform}</dt><dd>{releaseInfo.platform}</dd></div>
              <div><dt>{t.release.size}</dt><dd>{releaseInfo.size}</dd></div>
            </dl>
          </div>
          <div className="container smart-screen-note"><ShieldCheck size={18} aria-hidden="true" /><p>{t.release.smartScreen}</p></div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-heading"><span className="eyebrow">{t.faq.eyebrow}</span><h2>{t.faq.title}</h2></div>
            <div className="faq-list">
              {t.faq.items.map(([question, answer], index) => {
                const open = openFaq === index;
                const panelId = `faq-panel-${index}`;
                return (
                  <article className={open ? 'faq-item faq-open' : 'faq-item'} key={question}>
                    <h3>
                      <button type="button" onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open} aria-controls={panelId}>
                        <span>{question}</span><ChevronDown size={19} aria-hidden="true" />
                      </button>
                    </h3>
                    <div id={panelId} className="faq-answer" role="region" hidden={!open}><p>{answer}</p></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="container final-inner">
            <span className="eyebrow">{t.final.eyebrow}</span>
            <h2>{t.final.title}</h2>
            <p>{t.final.copy}</p>
            <DownloadButton label={t.nav.download} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div><ProductLogo language={language} /><p>{t.footer.copy}</p></div>
          <nav aria-label={isEnglish ? 'Footer navigation' : '하단 메뉴'}>
            {navItems.slice(0, 3).map(([href, label]) => <a key={href} href={href}>{label}</a>)}
            <a href={sourceUrl} target="_blank" rel="noreferrer">{t.footer.source}<ExternalLink size={13} aria-hidden="true" /></a>
            <a href={`${sourceUrl}/issues`} target="_blank" rel="noreferrer">{t.footer.contact}<ExternalLink size={13} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="container footer-bottom"><span>{t.footer.privacy}</span><span>{t.footer.disclaimer}</span><span>© 2026 Trade Journal</span></div>
      </footer>

      {activeScreenshot && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={screenshots[activeScreenshot].title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveScreenshot(null); }}>
          <button ref={closeButtonRef} type="button" className="lightbox-close" onClick={() => setActiveScreenshot(null)} aria-label={isEnglish ? 'Close image' : '이미지 닫기'}><X size={21} /></button>
          <figure>
            <img src={screenshots[activeScreenshot].src} alt={screenshots[activeScreenshot].alt} />
            <figcaption>{screenshots[activeScreenshot].title}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
