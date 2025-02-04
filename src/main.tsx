import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css'
import App from './App.tsx'
import FTSPage from './components/fts/fts.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <div className="testing-field-nav">
      <div>
        <a href='/'>react-testing-field</a>
      </div>
      <div>
        <a href='/fts'>FTS</a>
      </div>
    </div>
    <div className="testing-field-content">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fts" element={<FTSPage />} />
      </Routes>
    </div>
    
    </BrowserRouter>
  </StrictMode>
)
