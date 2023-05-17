// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './components/main';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
