import './App.css';
import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ex2">Exercice 2</Link>
            </li>
            <li>
              <Link to="/ex3">Excercice3</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/ex2">
          <Ex2/>
        </Route>
        <Route path="/ex3">
          <Ex3/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
