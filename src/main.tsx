import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GuidePage from './GuidePage';
import FeaturesPage from './FeaturesPage';
import './styles.css';

const isGuideRoute = window.location.pathname.replace(/\/$/, '') === '/guide';
const isFeaturesRoute = window.location.pathname.replace(/\/$/, '') === '/features';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isGuideRoute ? <GuidePage /> : isFeaturesRoute ? <FeaturesPage /> : <App />}
  </StrictMode>,
);
