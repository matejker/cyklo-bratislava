import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RekolaRides from './RekolaRides';
import Connectedness from './NetworkComponents';
import Betweenness from './Betweenness';
import NetworkGrow from './NetworkGrow';
import Home from './Home';
import Manifest from './Manifest';
import Recommendation from './Recommendation';

import github from './img/github.png';

import './main.css';
import 'katex/dist/katex.min.css';



export default function App() {
    return (
        <Router>
            <div className="App">
                <div id="main">
                    <h1><Link to={"/cyklo-bratislava/"} className={'no-style'}>Cyclo Bratislava</Link></h1>
                    <em className="description">
                        A data-driven and network approach to improve cyclo-infrastructure in Bratislava
                    </em>

                    <h2>Chapters</h2>
                    <ol id={"chapters"}>
                        <li><Link to="/cyklo-bratislava/">Intro</Link></li>
                        <li><Link to="/cyklo-bratislava/rekola-rides">Rekola rides</Link></li>
                        <li><Link to="/cyklo-bratislava/betweenness">Betweenness</Link></li>
                        <li><Link to="/cyklo-bratislava/connectedness">Connectedness</Link></li>
                        <li><Link to="/cyklo-bratislava/robustness">Robustness</Link></li>
                        <li><Link to="/cyklo-bratislava/recommendation">General recommendations</Link></li>
                        <li><Link to="/cyklo-bratislava/manifest">Manifest</Link> (SK)</li>
                    </ol>


                    <Switch>
                        <Route exact path="/cyklo-bratislava/">
                            <Home />
                        </Route>
                        <Route path="/cyklo-bratislava/rekola-rides">
                            <RekolaRides />
                        </Route>
                        <Route path="/cyklo-bratislava/betweenness">
                            <Betweenness />
                        </Route>
                        <Route path="/cyklo-bratislava/connectedness">
                            <Connectedness />
                        </Route>
                        <Route path={"/cyklo-bratislava/robustness"}>
                            <NetworkGrow />
                        </Route>
                        <Route path={"/cyklo-bratislava/manifest"}>
                            <Manifest />
                        </Route>
                        <Route path="/cyklo-bratislava/recommendation">
                            <Recommendation />
                        </Route>
                    </Switch>
                </div>
                <footer>
                    &copy; Matej Kerekrety 2023 - {(new Date().getFullYear())}
                    &nbsp;<a href="https://github.com/matejker/tic-tac-toe"><img src={github} /></a>
                </footer>
            </div>
        </Router>
    );
}
