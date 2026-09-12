import { ArrowRight } from 'lucide-react';
import { featureContent } from './featureContent';
import { featurePages } from './featurePages';
import type { Language } from './content';

const screenshots: Record<string, { src: string; en: string; ko: string }> = {
  journal: {
    src: '/screenshots/feature-journal.png',
    en: 'Trade Journal report for a closed synthetic trade, showing rule evaluation and the behavior journal',
    ko: '합성 완료 거래의 규칙 평가와 행동 기록을 보여주는 Trade Journal 리포트',
  },
  'strategy-playbook': {
    src: '/screenshots/feature-strategy-playbook.png',
    en: 'Strategy Playbook showing an active strategy, version history, and entry, risk, and exit rules',
    ko: '활성 전략, 버전 이력, 진입·리스크·청산 규칙을 보여주는 Strategy Playbook',
  },
  analytics: {
    src: '/screenshots/feature-analytics.png',
    en: 'Analytics Edge Explorer showing a confidence-score analysis across 24 synthetic trades',
    ko: '24건의 합성 거래를 신뢰도 점수로 분석한 Analytics Edge Explorer',
  },
  review: {
    src: '/screenshots/feature-trading-review.png',
    en: 'Trading Review showing observed patterns and Strategy versus Execution evidence',
    ko: '관찰된 패턴과 전략 대 실행 근거를 보여주는 Trading Review',
  },
  'plan-lab': {
    src: '/screenshots/feature-plan-lab.png',
    en: 'Plan Lab detail showing a verified pre-trade plan, targets, reward-risk result, and actual-versus-plan comparison',
    ko: '검증된 사전 계획, 목표가, 손익비 결과와 실제 대비 계획 비교를 보여주는 Plan Lab',
  },
  experiments: {
    src: '/screenshots/feature-experiments-measure.png',
    en: 'Active experiment showing its hypothesis, measurement target, baseline, current result, and criterion met status',
    ko: '가설, 측정 목표, 기준 구간, 현재 결과와 기준 충족 상태를 보여주는 활성 실험',
  },
};

export default function FeatureDetail({ page, language }: { page: typeof featurePages[number]; language: Language }) {
  const en = language === 'en';
  const t = page[language];
  const summary = featureContent[language].groups.flatMap(group => group.features).find(item => item.id === page.featureId)!;
  const screenshot = screenshots[page.slug];

  return <>
    <section className="docs-section" aria-labelledby="purpose-title">
      <div className="docs-heading"><span className="eyebrow">{summary.name}</span><h2 id="purpose-title">{summary.question}</h2><p>{summary.copy}</p></div>
      <p className="detail-learning">{summary.takeaway}</p>
      <figure className="detail-screenshot">
        <a href={screenshot.src} target="_blank" rel="noreferrer" aria-label={en ? 'Enlarge product screenshot in a new tab' : '제품 화면 크게 보기 (새 탭)'}>
          <img src={screenshot.src} width="1440" height="900" alt={screenshot[language]} />
        </a>
        <figcaption>{t.screenshot}</figcaption>
      </figure>
    </section>
    <section id="capabilities" className="docs-section" aria-labelledby="capabilities-title">
      <div className="docs-heading"><h2 id="capabilities-title">{en ? 'What you can do' : '할 수 있는 일'}</h2></div>
      <div className="detail-capabilities">{t.capabilities.map(([title, copy], index) => <article key={title}><span className="mono-label">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
    <section id="how-it-works" className="docs-section" aria-labelledby="how-title">
      <div className="docs-heading"><h2 id="how-title">{en ? 'How it works' : '이렇게 사용합니다'}</h2></div>
      <ol className="docs-instructions">{t.steps.map(([title, copy], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      <aside className="detail-example"><h3>{en ? 'A review example' : '복기 예시'}</h3><p>{t.example}</p></aside>
      {page.slug === 'analytics' && <div className="feature-screenshots">
        <p className="detail-learning">{en ? 'Related product screens: detailed trade analysis and post-exit review. These are not screenshots of the Workspace controls above.' : '함께 활용하는 실제 상세 거래 분석·청산 후 보유 화면입니다. 위에서 설명한 Workspace 조작 화면과는 구분됩니다.'}</p>
        <figure><a href="/screenshots/trade-analysis-evidence.png" target="_blank" rel="noreferrer"><img src="/screenshots/trade-analysis-evidence.png" width="2624" height="1504" loading="lazy" alt={en ? 'Enlarge actual detailed trade analysis with supporting trades (new tab)' : '근거 거래를 보여주는 실제 상세 거래 분석 화면 크게 보기 (새 탭)'} /></a><figcaption>{en ? 'Detailed trade analysis: compare conditions and inspect supporting trades.' : '상세 거래 분석: 조건별 결과와 근거 거래를 함께 검토합니다.'}</figcaption></figure>
        <figure><a href="/screenshots/exit-hold-result.png" target="_blank" rel="noreferrer"><img src="/screenshots/exit-hold-result.png" width="1838" height="886" loading="lazy" alt={en ? 'Enlarge actual post-exit holding analysis (new tab)' : '실제 청산 후 보유 분석 화면 크게 보기 (새 탭)'} /></a><figcaption>{en ? 'Post-exit review compares historical completed candles; it does not predict future prices.' : '청산 후 보유 분석은 과거 완료 봉 비교이며 미래 가격 예측이 아닙니다.'}</figcaption></figure>
      </div>}
    </section>
    <section id="next-step" className="docs-section" aria-labelledby="next-title">
      <div className="docs-heading"><h2 id="next-title">{en ? 'Continue the review' : '다음 단계로 이어가기'}</h2><p>{t.connection}</p></div>
      <nav className="detail-related" aria-label={en ? 'Related features' : '관련 기능'}>{page.related.map(slug => {
        const related = featurePages.find(item => item.slug === slug)!;
        return <a className="text-link" key={slug} href={`/features/${slug}?lang=${language}`}>{related[language].title.split(' · ')[0]}<ArrowRight size={16} aria-hidden="true" /></a>;
      })}<a className="text-link" href={`/features?lang=${language}`}>{en ? 'All features' : '전체 기능 안내'}<ArrowRight size={16} aria-hidden="true" /></a></nav>
    </section>
    <section className="docs-section" aria-labelledby="local-title">
      <div className="docs-heading"><h2 id="local-title">{en ? 'Your records, stored locally' : '내 컴퓨터에 저장되는 기록'}</h2><p>{en ? 'Trade Journal is a local-first Windows app with SQLite storage. Read-only exchange connections communicate with your selected exchange, and market-data features make external data requests. It does not execute orders or automated buy/sell trades, is not a trading bot, and has no AI/LLM dependency. Windows app credentials are kept in Windows Credential Manager.' : 'Trade Journal은 SQLite에 기록을 저장하는 로컬 우선 Windows 앱입니다. 읽기 전용 연결은 선택한 거래소와 통신하며 시장 데이터 기능도 외부 데이터를 요청합니다. 주문 실행·자동 매수·매도를 제공하지 않는 앱으로, 트레이딩 봇이 아니며 AI/LLM 의존성이 없습니다. Windows 앱 자격 증명은 Windows Credential Manager에 보관합니다.'}</p></div>
      <a className="text-link" href="/guide#security">{en ? 'Storage and connection guide' : '저장·연결 가이드'}<ArrowRight size={15} aria-hidden="true" /></a>
    </section>
  </>;
}
