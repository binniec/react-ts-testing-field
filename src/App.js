// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './components/main';

function App() {
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
