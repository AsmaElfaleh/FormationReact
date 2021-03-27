import './App.css';
import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';
import Ex4 from './pages/ex4';
import Ex5 from './pages/ex5';
import Ex6 from './pages/ex6';

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
              <Link to="/ex3">Exercice3</Link>
            </li>
            <li>
              <Link to="/ex4">Exercice 4</Link>
            </li>
            <li>
              <Link to="/ex5">Exercice 5</Link>
            </li>
            <li>
              <Link to="/ex6">Exercice 6</Link>
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
        <Route path="/ex4">
          <Ex4 />
        </Route>
        <Route path="/ex5">
          <Ex5 />
        </Route>
        <Route path="/ex6">
          <Ex6 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
