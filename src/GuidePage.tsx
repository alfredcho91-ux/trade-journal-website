import { useEffect, useState } from 'react';
import { AlertTriangle, ArrowLeft, ArrowRight, Check, ChevronDown, Database, Download, ExternalLink, KeyRound, LockKeyhole, MonitorDown, Power, RefreshCw, ShieldCheck, Trash2 } from 'lucide-react';
import type { Language } from './content';
import { guideContent } from './guideContent';

const releaseUrl = import.meta.env.VITE_WINDOWS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Windows.zip';
const sourceUrl = 'https://github.com/alfredcho91-ux/trade-journal-free';
type Exchange = 'deepcoin' | 'binance';

function Heading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="docs-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export default function GuidePage() {
  const [language, setLanguage] = useState<Language>('ko');
  const [exchange, setExchange] = useState<Exchange>('deepcoin');
  const t = guideContent[language];
  const isEnglish = language === 'en';
  const selected = t.api.exchanges[exchange];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = t.meta.description;
  }, [language, t.meta.description, t.meta.title]);

  return (
    <div id="guide-top" className="docs-shell">
      <a className="skip-link" href="#guide-content">{isEnglish ? 'Skip to guide' : '가이드 본문으로 건너뛰기'}</a>
      <header className="docs-header">
        <div className="container docs-header-inner">
          <a className="brand" href="/" aria-label={isEnglish ? 'Trade Journal product home' : 'Trade Journal 제품 홈페이지'}><img src="/trading-journal-logo.png" alt="Trade Journal" /></a>
          <div className="docs-header-actions">
            <a className="docs-home" href="/"><ArrowLeft size={15} aria-hidden="true" />{t.header.home}</a>
            <button type="button" className="language-toggle" onClick={() => setLanguage(isEnglish ? 'ko' : 'en')} aria-label={t.header.language}>{t.header.languageLabel}</button>
            <a className="button button-primary button-compact" href={releaseUrl}><Download size={16} aria-hidden="true" />{t.header.download}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="docs-hero">
          <div className="container docs-hero-inner">
            <div className="docs-hero-copy">
              <span className="eyebrow eyebrow-live"><i />{t.hero.eyebrow}</span>
              <h1>{t.hero.title}</h1>
              <p>{t.hero.copy}</p>
              <a className="button button-primary" href="#quick-start">{t.hero.start}<ArrowRight size={17} aria-hidden="true" /></a>
            </div>
            <dl className="docs-summary">
              <div><dt>{t.hero.time}</dt><dd>{t.hero.timeValue}</dd></div>
              <div><dt>{t.hero.platform}</dt><dd>{t.hero.platformValue}</dd></div>
              <div><dt>{t.hero.support}</dt><dd>{t.hero.supportValue}</dd></div>
            </dl>
          </div>
        </section>

        <div className="container docs-layout">
          <aside className="docs-sidebar">
            <strong>{t.tocTitle}</strong>
            <nav aria-label={isEnglish ? 'Guide sections' : '가이드 목차'}>{t.toc.map(([href, label], index) => <a href={href} key={href}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}</nav>
          </aside>

          <div id="guide-content" className="docs-content">
            <section id="quick-start" className="docs-section">
              <Heading eyebrow={t.quick.eyebrow} title={t.quick.title} copy={t.quick.copy} />
              <ol className="quick-steps">{t.quick.steps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
              <div className="docs-alert docs-alert-important"><ShieldCheck size={21} aria-hidden="true" /><div><h3>{t.safety.title}</h3><p>{t.safety.copy}</p></div></div>
            </section>

            <section id="install" className="docs-section">
              <Heading eyebrow={t.install.eyebrow} title={t.install.title} />
              <ol className="docs-instructions">{t.install.steps.map(([title, copy], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
              <div className="docs-note"><ShieldCheck size={19} aria-hidden="true" /><div><h3>{t.install.noteTitle}</h3><p>{t.install.note}</p></div></div>
              <div className="docs-note"><Power size={19} aria-hidden="true" /><div><h3>{t.install.exitTitle}</h3><p>{t.install.exit}</p></div></div>
            </section>

            <section id="api" className="docs-section">
              <Heading eyebrow={t.api.eyebrow} title={t.api.title} copy={t.api.copy} />
              <div className="exchange-choice">
                <span>{t.api.choose}</span>
                <div role="group" aria-label={t.api.choose}>{(['deepcoin', 'binance'] as const).map((key) => <button type="button" key={key} aria-pressed={exchange === key} onClick={() => setExchange(key)}><strong>{t.api.exchanges[key].name}</strong><small>{t.api.exchanges[key].badge}</small></button>)}</div>
              </div>
              <div className="credential-list"><KeyRound size={20} aria-hidden="true" /><div><span>{t.api.required}</span><strong>{selected.fields.join(' · ')}</strong></div></div>
              <ol className="docs-instructions docs-instructions-compact">{selected.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol>
              <div className="docs-warning"><AlertTriangle size={18} aria-hidden="true" /><p>{selected.warning}</p></div>
            </section>

            <section id="permissions" className="docs-section">
              <Heading eyebrow={t.permissions.eyebrow} title={t.permissions.title} />
              <div className="docs-table-wrap"><table className="docs-table"><caption className="sr-only">{t.permissions.title}</caption><thead><tr>{t.permissions.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{t.permissions.rows.map(([permission, setting, reason], index) => <tr key={permission}><th scope="row">{permission}</th><td><span className={index === 0 ? 'permission-yes' : 'permission-no'}>{setting}</span></td><td>{reason}</td></tr>)}</tbody></table></div>
            </section>

            <section id="connect" className="docs-section">
              <Heading eyebrow={t.connect.eyebrow} title={t.connect.title} />
              <div className="docs-connect-grid">
                <ol className="docs-instructions">{t.connect.steps.map(([title, copy], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
                <div className="credential-demo" aria-label={t.connect.demoTitle}>
                  <div><KeyRound size={18} aria-hidden="true" /><strong>{t.connect.demoTitle}</strong><span>READ ONLY</span></div>
                  <label><span>Exchange</span><b>{selected.name}<ChevronDown size={14} /></b></label>
                  <label><span>API Key</span><b>••••••••••••••••</b></label>
                  <label><span>API Secret</span><b>••••••••••••••••</b></label>
                  {exchange === 'deepcoin' && <label><span>Passphrase</span><b>••••••••••••</b></label>}
                  <span className="credential-demo-action"><ShieldCheck size={15} />{t.connect.action}</span>
                  <p><LockKeyhole size={14} />{t.connect.secure}</p>
                </div>
              </div>
            </section>

            <section id="sync" className="docs-section">
              <Heading eyebrow={t.sync.eyebrow} title={t.sync.title} />
              <div className="sync-cards"><article><RefreshCw size={21} /><span>01</span><h3>{t.sync.firstTitle}</h3><p>{t.sync.first}</p></article><ArrowRight size={19} aria-hidden="true" /><article><Database size={21} /><span>02</span><h3>{t.sync.laterTitle}</h3><p>{t.sync.later}</p></article></div>
              <dl className="docs-facts">{t.sync.facts.map(([title, copy]) => <div key={title}><dt><Check size={15} />{title}</dt><dd>{copy}</dd></div>)}</dl>
            </section>

            <section id="troubleshoot" className="docs-section">
              <Heading eyebrow={t.troubleshoot.eyebrow} title={t.troubleshoot.title} />
              <div className="docs-faq">{t.troubleshoot.items.map(([title, copy], index) => <details key={title} open={index === 0}><summary><span>{title}</span><ChevronDown size={18} /></summary><p>{copy}</p></details>)}</div>
              <div className="docs-note"><ExternalLink size={19} aria-hidden="true" /><div><h3>{t.troubleshoot.helpTitle}</h3><p>{t.troubleshoot.help}</p><a className="text-link" href={`${sourceUrl}/issues`} target="_blank" rel="noreferrer">{t.troubleshoot.issue}<ExternalLink size={14} /></a></div></div>
            </section>

            <section id="security" className="docs-section">
              <Heading eyebrow={t.security.eyebrow} title={t.security.title} />
              <div className="storage-items">{t.security.items.map(([title, copy], index) => { const Icon = [LockKeyhole, ShieldCheck, Trash2, KeyRound][index]; return <article key={title}><Icon size={19} /><div><h3>{title}</h3><p>{copy}</p></div><Check size={16} /></article>; })}</div>
            </section>
          </div>
        </div>

        <section className="docs-finish"><div className="container docs-finish-inner"><div><span className="eyebrow">{t.finish.eyebrow}</span><h2>{t.finish.title}</h2><p>{t.finish.copy}</p></div><div><a className="button button-secondary" href="/"><ArrowLeft size={17} />{t.finish.home}</a><a className="button button-primary" href={releaseUrl}><Download size={18} />{t.finish.download}</a></div></div></section>
      </main>
      <footer className="docs-footer"><div className="container"><a className="brand" href="/"><img src="/trading-journal-logo.png" alt="Trade Journal" /></a><p>{t.footer}</p><a href={sourceUrl} target="_blank" rel="noreferrer">GitHub<ExternalLink size={13} /></a></div></footer>
    </div>
  );
}
