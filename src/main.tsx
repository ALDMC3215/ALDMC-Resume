import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { RetroApp } from './retro/RetroApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <RetroApp />
    </ThemeProvider>
  </React.StrictMode>
);
