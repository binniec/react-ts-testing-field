import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Transactions from './pages/transactions/Transactions.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>
)
