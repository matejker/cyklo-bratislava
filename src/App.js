import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Connectedness from "./NetworkComponents";
import Betweenness from "./Betweenness";
import NetworkGrow from "./NetworkGrow";
import Home from "./Home";
import Manifest from "./Manifest";
import Recommendation from "./Recommendation";

import github from "./img/github.png";

import "./main.css";
import "katex/dist/katex.min.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div id="main">
          <h1>
            <Link to={"/"} className={"no-style"}>
              Cyclo Bratislava
            </Link>
          </h1>
          <em className="description">
            A data-driven and network approach to improve cyclo-infrastructure
            in Bratislava
          </em>

          <h2>Chapters</h2>
          <ol id={"chapters"}>
            <li>
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/betweenness">Betweenness</Link>
            </li>
            <li>
              <Link to="/connectedness">Connectedness</Link>
            </li>
            <li>
              <Link to="/robustness">Robustness</Link>
            </li>
            <li>
              <Link to="/recommendation">General recommendations</Link>
            </li>
          </ol>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/betweenness">
              <Betweenness />
            </Route>
            <Route path="/connectedness">
              <Connectedness />
            </Route>
            <Route path={"/robustness"}>
              <NetworkGrow />
            </Route>
            <Route path={"/manifest"}>
              <Manifest />
            </Route>
            <Route path="/recommendation">
              <Recommendation />
            </Route>
          </Switch>
        </div>
        <footer>
          &copy; Matej Kerekrety 2023 - {new Date().getFullYear()}
          &nbsp;
          <a href="https://github.com/matejker/cyklo-bratislava">
            <img src={github} />
          </a>
        </footer>
      </div>
    </Router>
  );
}
