import React, { useState } from "react";

import './main.css';
import 'katex/dist/katex.min.css';

import edge_bc from './img/edge_bc.png'
import edge_bc_cyclo from './img/edge_bc_cyclo.png'

import { InlineMath } from 'react-katex';
import github from './img/github.png';

function NetworkComponents() {
    return (
        <div className="App">
            <div id="main">
                <h1>Cyclo Bratislava</h1>
                <em className="description">
                    Bratislava cyclo-network debunked
                </em>

                <h2>Chapters</h2>
                <ol start={3}>
                    <li><a href="#intro">Bratislava cyclo-network</a></li>
                    <ol>
                        <li><a href="#components">Connectivity and components</a></li>
                        <li><a href="#connecting">Connecting cyclo-network into one component</a></li>
                        <ol>
                            <li><a href="#weather">Weather</a></li>
                            <li><a href="#durations">Ride durations</a></li>
                            <li><a href="#heatmap">Heatmap</a></li>
                        </ol>
                        <li><a href="#rents-n-returns">Rents and returns</a></li>
                        <li><a href="#observations">Observations</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                    </ol>
                </ol>
                <h2 id="intro">3. Bratislava cyclo-network</h2>

                <h3 className="reference">References:</h3>
                <ol className="reference">
                    <li>
                        Newman, M. E. J. (2010), <em>Networks: an introduction</em>, Oxford University Press, Oxford;
                        New York
                    </li>
                    <li>
                        Natera, L.G., Battiston, F., Iñiguez, G., and Szell, M. (2019) <em>Data-driven strategies for
                        optimal bicycle network growth</em>, <a href={"https://arxiv.org/abs/1907.07080"}>arXiv:1907.07080</a>
                    </li>
                </ol>
            </div>
            <footer>
                &copy; Matej Kerekrety 2023 - {(new Date().getFullYear())}
                &nbsp;<a href="https://github.com/matejker/tic-tac-toe"><img src={github} /></a>
            </footer>
        </div>
    );
}

export default NetworkComponents;