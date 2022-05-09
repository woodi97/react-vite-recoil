import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from '@/client/Root';
import '@/styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
