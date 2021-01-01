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
  
      <div className={ classNames({'app': true, 'menu-open': menu}) }>

        <header className="App-header">
          <i className="fas fa-money-bill-alt" />
          <h2 className="title">Small scale loan</h2>
          <i className="fas fa-bars" onClick={menuClicked}></i>
        </header>

        <nav className={ classNames({'menu': true, 'open': menu, 'close': !menu}) }>
          <i className="fas fa-bars close-button" onClick={ () => { setMenu(!menu); } }></i>
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
            <Route path="/todo">
              <Todos />
            </Route>
          </Switch>
        </main>

        <footer>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/">Contact us</Link></li>
          </ul>
        </footer>
        
      </div>
    </Router>
  );
}

export default App;
