import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

const container = document.getElementById('root');
const reactDomRoot = createRoot(container);

reactDomRoot.render(
  <StrictMode>
    <App className="app">React 애플리케이션 개발 환경 매뉴얼 구성</App>
  </StrictMode>
);
