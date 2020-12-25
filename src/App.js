import React, { useState } from 'react';
import './App.css';
import Todos from './todo/Todos';
import { BrowserRouter as Router, 
  Switch, 
  Link, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Small scale loan
      </header>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
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
      </Router>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>Home page</div>
  );
}
