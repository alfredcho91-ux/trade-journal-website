import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GuidePage from './GuidePage';
import './styles.css';

const isGuideRoute = window.location.pathname.replace(/\/$/, '') === '/guide';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isGuideRoute ? <GuidePage /> : <App />}
  </StrictMode>,
);
