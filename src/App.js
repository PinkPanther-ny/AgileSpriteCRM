import agile from './agileSprite.png';

import './App.css';
import {Button, ButtonGroup} from '@material-ui/core';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p><strong>Welcome ! <br/>
            Agile Sprite</strong></p>

        <a href="https://dashboard.heroku.com/apps/test0agilesprite">
          <img src={agile} className="Agile-logo" alt="logo" /></a>




        {/*<img id="agile-icon-position" src={logo} className="App-logo" alt="logo" />*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
      <body className="App-body">
      <ButtonGroup>
        <Button
            color="primary"
            size="medium"
            href="https://github.com/PinkPanther-ny/IT_project_0"
            //target="_blank"
            variant="contained"
            rel="noopener noreferrer"
        >Github repo
        </Button>

        <Button
            color="secondary"
            size="small"
            href="https://dashboard.heroku.com/apps/test0agilesprite"
            //target="_blank"
            variant="contained"
            rel="noopener noreferrer"
        >Heroku console
        </Button>
      </ButtonGroup>
      </body>


    </div>
  );
}

export default App;
