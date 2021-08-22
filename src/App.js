import logo from './logo.svg';
import agile from './agile.png';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <p><strong>Hello world!! </strong></p>
        <p>AgileSprite~</p>
        <img src={agile} className="Agile-logo" alt="logo" />

        <img id="agile-icon-position" src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
