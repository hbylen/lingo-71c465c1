import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 创建应用根元素
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}