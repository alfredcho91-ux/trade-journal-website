import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Download } from 'lucide-react';
import type { Language } from './content';
import { featureContent } from './featureContent';
import { featurePages, featureDetailHref } from './featurePages';
import FeatureDetail from './FeatureDetail';

const releaseUrl = import.meta.env.VITE_WINDOWS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Windows.zip';

export default function FeaturesPage({ slug }: { slug?: string }) {
  const [language, setLanguage] = useState<Language>(() => new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'ko');
  const isEnglish = language === 'en';
  const t = featureContent[language];
  const homeUrl = isEnglish ? '/?lang=en' : '/';
  const page = featurePages.find(item => item.slug === slug);
  const title = page ? page[language].title : t.title;
  const intro = page ? page[language].description : t.intro;

  useEffect(() => {
    // A direct hash may be resolved before React has mounted its target.
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: 'instant' });
  }, [slug]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = page ? `${title} | Trade Journal` : isEnglish ? 'Features | Trade Journal' : '기능 안내 | Trade Journal';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = intro;
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', intro);
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute('content', isEnglish ? 'en_US' : 'ko_KR');
    document.querySelector<HTMLMetaElement>('meta[property="og:locale:alternate"]')?.setAttribute('content', isEnglish ? 'ko_KR' : 'en_US');
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', document.title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', intro);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);
  }, [isEnglish, language, intro, title, page]);

  return (
    <div className="docs-shell features-shell">
      <a className="skip-link" href="#feature-content">{isEnglish ? 'Skip to features' : '기능 설명으로 건너뛰기'}</a>
      <header className="docs-header">
        <div className="container docs-header-inner">
          <a className="brand" href={homeUrl}><img src="/trading-journal-logo.png" alt="Trade Journal" /></a>
          <div className="docs-header-actions">
            <a className="docs-home" href={homeUrl}><ArrowLeft size={15} aria-hidden="true" />{isEnglish ? 'Product home' : '제품 홈'}</a>
            <button type="button" className="language-toggle" onClick={() => setLanguage(isEnglish ? 'ko' : 'en')} aria-label={isEnglish ? '한국어로 보기' : 'View in English'}>{isEnglish ? '한국어' : 'EN'}</button>
            <a className="button button-primary button-compact" href={releaseUrl}><Download size={16} aria-hidden="true" />{isEnglish ? 'Windows download' : 'Windows 다운로드'}</a>
          </div>
        </div>
      </header>
      <main>
        <section className="docs-hero">
          <div className="container">
            <div className="docs-hero-copy">
              <span className="eyebrow">{isEnglish ? 'FEATURE GUIDE · WINDOWS DESKTOP' : '기능 안내 · WINDOWS 데스크톱'}</span>
              <h1>{title}</h1>
              <p>{intro}</p>
            </div>
            <nav className="feature-groups" aria-label={isEnglish ? 'Choose a review stage' : '사용 단계 선택'}>
              {page ? [['#capabilities', isEnglish ? 'Capabilities' : '주요 기능'], ['#how-it-works', isEnglish ? 'How to use' : '사용 방법'], ['#next-step', isEnglish ? 'Next steps' : '다음 단계']].map(([href, label], index) => <a href={href} key={href}><span>0{index + 1}</span><strong>{label}</strong><ArrowRight size={18} aria-hidden="true" /></a>) : t.groups.map((group, index) => <a href={`#${group.id}`} key={group.id}><span>0{index + 1}</span><strong>{group.title}</strong><ArrowRight size={18} aria-hidden="true" /></a>)}
            </nav>
          </div>
        </section>
        <div className="container docs-layout">
          <aside className="docs-sidebar">
            <strong>{isEnglish ? 'Explore the features' : '기능 살펴보기'}</strong>
            <nav aria-label={isEnglish ? 'Feature sections' : '기능 목차'}>
              {page ? featurePages.map((item, index) => <a href={`/features/${item.slug}?lang=${language}`} key={item.slug} aria-current={item.slug === page.slug ? 'page' : undefined}><span>0{index + 1}</span>{item[language].title.split(' · ')[0]}</a>) : t.groups.flatMap(group => group.features).map((feature, index) => <a href={`#${feature.id}`} key={feature.id}><span>{String(index + 1).padStart(2, '0')}</span>{feature.name}</a>)}
            </nav>
          </aside>
          <div id="feature-content" className="docs-content">
            {page ? <FeatureDetail page={page} language={language} /> : t.groups.map((group, groupIndex) => (
              <section className="feature-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
                <div className="docs-heading feature-group-heading"><span className="eyebrow">0{groupIndex + 1}</span><h2 id={`${group.id}-title`}>{group.title}</h2><p>{group.copy}</p></div>
                {group.features.map(feature => (
                  <article className="feature-detail" id={feature.id} key={feature.id} aria-labelledby={`${feature.id}-title`}>
                    <span className="mono-label">{feature.name}</span>
                    <h3 id={`${feature.id}-title`}>{feature.question}</h3>
                    <p>{feature.copy}</p>
                    <ul className="feature-actions">{feature.actions.map(action => <li key={action}><Check size={15} aria-hidden="true" /><span>{action}</span></li>)}</ul>
                    <p className="feature-takeaway">{feature.takeaway}</p>
                    {feature.id !== 'sync' && <a className="text-link feature-guide-cta" href={featureDetailHref(feature.id, language)} aria-label={`${feature.name} ${isEnglish ? 'details' : '상세 안내'}`}>{isEnglish ? 'Explore this feature' : '기능 상세 보기'}<ArrowRight size={15} aria-hidden="true" /></a>}
                    {feature.id === 'sync' && <a className="text-link" href="/guide">{isEnglish ? 'Setup and API connection guide' : '설치·API 연결 가이드'}<ArrowRight size={15} aria-hidden="true" /></a>}
                    {feature.id === 'analytics' && (
                      <div className="feature-screenshots">
                        <figure>
                          <a href="/screenshots/trade-analysis-evidence.png" target="_blank" rel="noreferrer" aria-label={isEnglish ? 'Open actual trade analysis screenshot in a new tab' : '실제 거래 분석 화면 새 탭에서 크게 보기'}><img src="/screenshots/trade-analysis-evidence.png" width="2624" height="1504" loading="lazy" alt={isEnglish ? 'Actual Trade Journal detailed analysis screen showing market conditions and supporting trades' : '시장 상황별 성과와 근거 거래를 보여주는 실제 Trade Journal 상세 거래 분석 화면'} /></a>
                          <figcaption>{isEnglish ? 'Actual detailed analysis screen: follow a finding to its supporting trades. Select the image to enlarge.' : '실제 상세 거래 분석 화면: 집계 결과에서 근거 거래까지 확인합니다. 이미지를 누르면 크게 볼 수 있습니다.'}</figcaption>
                        </figure>
                        <figure>
                          <a href="/screenshots/exit-hold-result.png" target="_blank" rel="noreferrer" aria-label={isEnglish ? 'Open actual post-exit analysis screenshot in a new tab' : '실제 청산 후 보유 분석 화면 새 탭에서 크게 보기'}><img src="/screenshots/exit-hold-result.png" width="1838" height="886" loading="lazy" alt={isEnglish ? 'Actual post-exit analysis comparing recorded exits with results after more completed candles' : '실제 청산과 이후 완료 봉을 더 보유했을 때의 결과를 비교하는 분석 화면'} /></a>
                          <figcaption>{isEnglish ? 'Post-exit analysis: compare the recorded exit with the result after holding more completed candles. This historical comparison is not a forecast.' : '청산 후 보유 분석: 실제 청산과 이후 완료 봉을 더 보유했을 때의 결과를 비교합니다. 과거 경로 비교이며 미래 예측이 아닙니다.'}</figcaption>
                        </figure>
                      </div>
                    )}
                  </article>
                ))}
              </section>
            ))}
          </div>
        </div>
        <section className="docs-finish"><div className="container docs-finish-inner"><div><span className="eyebrow">TRADE JOURNAL</span><h2>{isEnglish ? 'Start with your own records.' : '내 거래 기록부터 시작하세요.'}</h2><p>{isEnglish ? 'A local-first Windows desktop app with read-only exchange connections.' : '읽기 전용 거래소 연결을 사용하는 로컬 우선 Windows 데스크톱 앱입니다.'}</p></div><a className="button button-primary" href={releaseUrl}><Download size={18} aria-hidden="true" />{isEnglish ? 'Download for Windows' : 'Windows 다운로드'}</a></div></section>
      </main>
      <footer className="docs-footer"><div className="container"><a className="brand" href={homeUrl}><img src="/trading-journal-logo.png" alt="Trade Journal" /></a><p>{isEnglish ? 'A journal for reviewing your own trades. Not investment advice.' : '내 거래를 기록하고 복기하는 도구입니다. 투자자문을 제공하지 않습니다.'}</p><a href={homeUrl}>{isEnglish ? 'Back to home' : '홈으로 돌아가기'}<ArrowLeft size={13} aria-hidden="true" /></a></div></footer>
    </div>
  );
}
