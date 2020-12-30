import React, { useState } from 'react';
import './App.css';
import Todos from './Todo/Todos';
import Home from "./Home/Home";
import { BrowserRouter as Router, 
  Switch, 
  Link, 
  Route
} from 'react-router-dom';
var classNames = require('classnames');

function App() {
  const [menu, setMenu] = useState(false);
  const menuClicked = () => {
    setMenu(!menu);
  }

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    <Router>
      <div className="App">
        <header className="App-header">
          <i class="fas fa-money-bill-alt" />
          <h2 class="title">Small scale loan</h2>
          <i className="fas fa-bars" onClick={menuClicked}></i>
        </header>

        <nav className={ classNames({'menu': true, 'open': menu, 'close': !menu}) }>
          <i class="fas fa-bars close-button" onClick={ () => { setMenu(!menu); } }></i>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/">Contact us</Link>
        </nav>
        
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo" exact>
              <Todos />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
