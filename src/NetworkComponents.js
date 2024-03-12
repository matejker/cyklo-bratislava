import React from "react";

import cyclo_network from './img/cyclo_network.png'
import algorithmsMeasures  from './img/AlgorithmsMeasures.png'
import cc from './img/cc.gif'
import l2c from './img/l2c.gif'
import l2s from './img/l2s.gif'
import r2c from './img/r2c.gif'

import { InlineMath } from 'react-katex';

function Connectedness() {

    return (
        <>
            <h2 id="intro">4. Connectedness</h2>

            <p>
                Bratislava has up to 200kms of inner-city cyclo paths. Those paths include dedicated lanes, shared lanes,
                and <em>cyclo highways</em> (e.g. the Danube riverbank). For a moment let's forget about the quality of
                the infrastructure and focus on the network itself. The network is a graph, where the edges are the streets
                and the nodes are the intersections of streets / road segments between them.
            </p>

            <h3 id="components">4.1. Components</h3>
            <p>
                One of the most frequent complaints about cycle paths in Bratislava is that they are not connected.
                Many cities have the same issues and Bratislava's cyclo-network is not an exception.
                A good example is a bike line which ends in the middle of nowhere with no clear connection to the next one.
                All nodes which are possible to visit without leaving cycle paths forms a <em>component</em> [1]. In a
                perfect world, the network would be one big component. In reality, it is not. The network is divided into
                several components. The biggest one is the <em>main component</em> which contains most of the nodes.
                In Bratislava, the main component has 40km of cycle paths, followed by 10km and 4km components. Other remaining
                245 small components have less than 3km of cycle paths.
            </p>
            <p>
                <em>Disclaimer: All of the cycle paths / line are fetch from OSM with following filters:</em>
                <code>
                    ["highway"="cycleway"];["cycleway"~"lane|shared_lane"];["cycleway:right"~"track"];["cycleway"~"track"];
                    ["highway"~"path"]["bicycle"~"designated"];["cycleway:left"~"track"]</code>
            </p>

            <div className="center">
                <img src={cyclo_network} style={{width: '900px', marginLeft: '-100px'}} />
                <div style={{textAlign: 'justify'}}>
                <span className="image-desc">
                    Map of Bratislava, cycle paths are highlighted in blue. Visually it confirms the existence of several
                    disconnected components. The biggest component is mainly formed by <em>cyclo highways</em> of
                    the Danube riverbank (<em>hradza</em>) and bridges.
                </span>
                </div>
            </div>

            <h3 id={"connecting"}>4.2. Connecting cyclo-network into one component</h3>
            <p>
                In order to increase network usability is to connect this disconnected network into one large
                component. Such an idea had Natera et al. [2] in their paper. They proposed multiple strategies
                to connect disconnected components. The most straightforward one is to build new cycle paths between
                largest and second largest components (L2S). The second strategy builds new path between the largest
                and closest component (L2C). The third strategy connect a random component to the closest one (R2C).
                Final strategy is to connect closest components first (CC), i.e. minimal investments first. All those
                algorithms are used iteratively until the network is one large component.
            </p>

            <p>
                In a following section, I will compare those strategies and plot how they add new cycle paths to the
                existing ones.
            </p>

            <h4 id={"l2s"}>4.2.1. Largest to second largest components</h4>
            <p>
                The largest (the one with the largest number of nodes) and second largest components are connected
                by the closest nodes in between. The algorithm quickly increase the global network connectedness.
            </p>
            <div className="center">
                <img src={l2s} style={{width: '900px', marginLeft: '-100px'}} />
            </div>

            <h4 id={"l2c"}>4.2.2. Largest to closest components</h4>
            <p>
                The largest and closest components are connected by the closest nodes in between. This stragegy
                optimizes the network connectedness and the cost of the new paths.
            </p>
            <div className="center">
                <img src={l2c} style={{width: '900px', marginLeft: '-100px'}} />
            </div>

            <h4 id={"r2c"}>4.2.3. Random to closest components</h4>
            <p>
                A baseline algorithm which connects a random component to the closest one. The idea behind this
                strategy is to check if the order in which components are connected matters. It is expected that
                random strategy will underperform in almost all metrics.
            </p>
            <div className="center">
                <img src={l2c} style={{width: '900px', marginLeft: '-100px'}} />
            </div>

            <h4 id={"cc"}>4.2.4. Closest to closest components</h4>
            <p>
                The two closest components are connected by the closest nodes in between. This strategy is expected to
                optimize the connect network with minimal cost first, i.e. <em>quick wins</em>.
            </p>
            <div className="center">
                <img src={cc} style={{width: '900px', marginLeft: '-100px'}} />
            </div>

            <h3 id={"results"}>4.3. Results</h3>
            <p>
                While all the algorithms are going to connect the cycle network into one large component, the difference
                lies in the order in which those new links are added. To quantify the strategies, authors of
                &nbsp;<em>Data-driven strategies for optimal bicycle network growth</em> paper [2] looked are
                following network measures channing with new extra kilometers of bike lines added.
            </p>
            <ol>
                <li><em>Fraction of nodes</em> <InlineMath>{`n_{LCC}`}</InlineMath> - how quickly are new nodes added to the largest component</li>
                <li><em>Fraction of link kilometers</em> <InlineMath>{`\\ell_{LCC}`}</InlineMath> - how quickly are new kilometers of cycle paths added to the largest component (relative)</li>
                <li><em>Kilometers gain</em> <InlineMath>{`G_{LCC}`}</InlineMath> - how quickly are new kilometers of cycle paths added to the largest component (absolute) </li>
                <li><em>Bike-car directness</em> <InlineMath>{`\\Delta`}</InlineMath> - how much is the cycle network similar in directness compared to cars</li>
            </ol>

            <p>
                <em>
                    Directness in network science means, how straight is the shortest path between points A and B on
                    given network compared to the </em> euclidean / direct <em>paths. This directness is measured for all
                    possible points A and B, and averaged over of all them. However, this is very computationally
                    expensive calculation, in practice only a random subset of nodes is used for the calculation.</em>
            </p>

            <div className="center">
                <img src={algorithmsMeasures} style={{width: '900px', marginLeft: '-100px'}} />
                <div style={{textAlign: 'justify'}}>
                    <span className="image-desc">
                        This and previous images were generated using code from [3]. The code is available on GitHub &nbsp;
                        <a href={"https://github.com/nateraluis/bicycle-network-growth"}>nateraluis/bicycle-network-growth</a>
                        &nbsp;
                    </span>
                </div>
            </div>

            <p>
                Result for Bratislava matches the results from the paper [2]. The L2C strategy is the best in all,
                adding just 5km of new cycle paths to the network, the largest component size is doubled (form 75km to 150km).
                Interesting and very positive result, by adding just a few extra kilometers of cycle paths will match
                and even surpass the directness of cars. Looking at the paper results [2], especially US cities which
                are car-centric and it will require a lot of new cycle paths to match the directness of cars. This is
                obviously a very good result for Bratislava.
            </p>

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
                <li>
                    Natera, L.G et al. <em>Developing optimal bicycle network growth strategies</em>,&nbsp;
                    <a href={"https://github.com/nateraluis/bicycle-network-growth"}>nateraluis/bicycle-network-growth</a>
                </li>
            </ol>
        </>
    );
}

export default Connectedness;