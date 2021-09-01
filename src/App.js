import logo from './logo.svg';
import agile from './agileSprite.png';

import './App.css';
import { Button } from '@material-ui/core';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <p><strong>Hello world!! </strong></p>
        ----***** AgileSprite *****---- <br/>
        <a

        >
        </a>
        <Button
            color="primary"
            className="App-link"
            href="https://github.com/PinkPanther-ny/IT_project_0"
            //target="_blank"
            rel="noopener noreferrer"
        >Check our github repo
        </Button>

        <a href="https://dashboard.heroku.com/apps/test0agilesprite">
          <img src={agile} className="Agile-logo" alt="logo" /></a>
        <a href="https://dashboard.heroku.com/apps/test0agilesprite">
          Go to our heroku console
        </a>

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
