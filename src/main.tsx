import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GuidePage from './GuidePage';
import FeaturesPage from './FeaturesPage';
import { featurePages } from './featurePages';
import './styles.css';

const isGuideRoute = window.location.pathname.replace(/\/$/, '') === '/guide';
const isFeaturesRoute = window.location.pathname.replace(/\/$/, '') === '/features';
const featurePage = featurePages.find(page => window.location.pathname.replace(/\/$/, '') === `/features/${page.slug}`);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isGuideRoute ? <GuidePage /> : isFeaturesRoute || featurePage ? <FeaturesPage slug={featurePage?.slug} /> : <App />}
  </StrictMode>,
);
