// import logo from './logo.svg';
import './App.css';
import Main from './components/main';

function App() {
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Main/>
      </header>
    </div>
  );
}

export default App;
