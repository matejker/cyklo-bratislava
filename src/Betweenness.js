import React, { useState } from "react";
import { InlineMath, BlockMath } from 'react-katex';
import { Link } from "react-router-dom";
import Toggle from './Toggle';

import strava_heatmap from './img/strava_heatmap.png';
import slovnaft_bike_heatmap from './img/slovnaft_bike_heatmap.png';
import edge_bc_cyclo from './img/edge_bc_cyclo.png';
import edge_bc from './img/edge_bc.png';

function Betweenness() {
    const [mapMode, setMapMode] = useState("Bike");

    return (
        <>
            <h2 id={'intro'}>3. Heatmaps and betweenness</h2>
            <h3 id={"heatmaps"}>3.1. Heatmaps</h3>
            <p>
                A good proxy for a potentially suitable cycle path could be such a road segment which is
                frequently used by other cyclists. We could say it <em>lies in between other routes</em> chosen
                by cyclists. One approach is to look at heatmaps for instance as I did for
                &nbsp;<Link to={"/rekola-rides#heatmap"}>Rekola rides</Link>, other Bratislava bike-sharing
                platform <em>SlovnaftBike</em> or the global Strava heatmap.
            </p>

            <div className="center">
                <img src={strava_heatmap} style={{width: '900px', marginLeft: '-100px'}} />
                <div style={{textAlign: 'justify'}}>
                <span className="image-desc">
                    <a href={"https://www.strava.com/maps/global-heatmap?style=light&terrain=false&sport=Ride&gColor=bluered&gOpacity=100&labels=false&poi=false#11.73/48.1516/17.1121"}>Global Strava heatmap</a>
                </span>
                </div>
            </div>

            <p>
                Even though all of those heatmaps shows which roads are frequently used by cyclists, they are all strongly skewed
                based on the user base. For instance, Strava heatmap is more frequently used by recreational cyclists [?], while
                bike-sharing platforms can be assumed to be used by commuters and tourists. In addition, bike-sharings are
                determined by the cycle stations and their distribution.
            </p>

            <div className="center">
                <img src={slovnaft_bike_heatmap} style={{width: '900px', marginLeft: '-100px'}} />
                <div style={{textAlign: 'justify'}}>
                <span className="image-desc">
                    Heatmap of SlovnaftBike bike-sharing system. The heatmap shows rides for one week.&nbsp;
                    <a href={"https://geoportal.bratislava.sk/pfa/apps/sites/#/verejny-mapovy-portal/app/6f1aea97308b4e819781b4a71ed93249"}>Heatmapa jázd bicyklov SlovnaftBAjk za jeden týždeň</a>
                </span>
                </div>
            </div>

            <h3 id={"betweenness"}>3.2. Betweenness</h3>
            <p>
                Different approach would be to look at all the Bratislava city network as if cyclists from all points (nodes)
                would like to go to all other points, ideally choosing the shortest paths. Then we could look at all
                of the <em>streets</em> / links of the network and see which of them are the most frequently used, i.e.
                which links lies <em>in between</em> the shortest paths. The ones which are more frequently used tend to
                be more important.
            </p>

            <p>
                In order to quantify this value, in network science, there is a concept of <em>betweenness centrality</em>
                &nbsp;which is defined as
                <BlockMath>{`l_i = \\sum_{st}\\frac{n ^ i_{st}}{g_{st}}`}</BlockMath>
                where <InlineMath>{`g_{st}`}</InlineMath> is the total number of the shortest paths from node
                &nbsp;<i>s</i> to node <i>t</i> and <InlineMath>{`n^i_{st}`}</InlineMath> is the number of those
                paths that pass through link <i>i</i>. [1] There are many variations of this measure, the most common one
                is node betweenness, which is the sum of all the shortest paths that pass through the node. Or random walk
                betweenness, which is the number of times a random walk passes through a node. For other variations, see [2].
            </p>

            <div className="center">
                <Toggle
                    values={['Bike', 'Car']}
                    checkedValue={mapMode}
                    setCheckedValue={setMapMode}
                    id={'workday-toggle'}
                    name={'workday-toggle'}
                />
                <img src={(mapMode === 'Bike') ? edge_bc_cyclo : edge_bc } style={{width: '1000px', marginLeft: '-150px'}} />
                <div style={{textAlign: 'justify'}}>
                    <span className="image-desc">
                        Betweenness centrality of Bratislava city network. The darker the value, the more higher value has the edge
                        betweenness. Switching between modes shows the difference between bike and car network.
                    </span>
                </div>
            </div>

            <p>
                Here, let's look at the betweenness centrality of Bratislava city network. We can see the betweenness
                for car and bike network. I think the most obvious difference is the betweenness are the bridges over
                Danube river. For cyclists is the <em>Most SNP</em> absolutely unattractive, while for cars it is the
                complete opposite. Obviously, <em>Stary most</em> is not open for cars, other bridges are visibly build
                more for cars than for cyclists.
            </p>

            <h3 id={"directness"}>3.3. Directness</h3>
            <p>
                The betweenness centrality of the network is a good proxy for the <em>directness</em> of the network. The
                directness in network science means, how straight is the shortest path between points A and B on given
                network compared to the <em>euclidean / shortest path on the graph</em>. This directness is measured for all possible
                points A and B, and averaged over of all them. If we build cycle paths on the streets with high betweenness
                centrality, we can expect that the network will be more direct and useful for commuting cyclists
                &nbsp;<em>in general</em>.
            </p>

            <h3 id={"conclusion"}>3.4. Conclusion</h3>

            <p>
                Pretty much all of the heatmaps and betweenness centrality of the network are showing the same thing
                and highlighting the roughly the same streets. It also shows that cyclist are using existing cycle paths,
                which is clearly visible on the heatmap of SlovnaftBike bike-sharing and Strava.
            </p>

            <h3 className="reference">References:</h3>
            <ol className="reference">
                <li>
                    Newman, M. E. J. (2010), <em>Networks: an introduction</em>, Oxford University Press, Oxford;
                    New York
                </li>
                <li>
                    Borgatti, S. P. (2005), <em>Centrality and network flow</em>, 27(1), 55–71. https://doi.org/10.1016/j.socnet.2004.11.008
                </li>
            </ol>
        </>
    )
}

export default Betweenness;