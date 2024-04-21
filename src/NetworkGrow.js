import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BlockMath } from "react-katex";

import betweenness_grow from "./img/betweenness_grow.gif";
import closeness_grow from "./img/closeness_grow.gif";
import random_grow from "./img/random_grow.gif";
import betweenness_rekola from "./img/betweenness_rekola.gif";
import betweenness_rekola_path from "./img/betweenness_rekola_path.gif";
import grow_measures from "./img/grow_measures.png";

function NetworkGrow() {
  const [strategyValue, setStrategyValue] = useState("betweenness");

  const strategy = {
    betweenness: betweenness_grow,
    closeness: closeness_grow,
    rekola: betweenness_rekola,
    random: random_grow,
  };

  return (
    <>
      <h2 id={"intro"}>5. Robustness</h2>
      <p>
        In the previous chapter, I have demonstrated several strategies to
        connect disconnected components of the cycle network. Although, we
        managed to connect the network into one large component, there is still
        a missing piece. In some way all the previous strategies were solving
        &nbsp;
        <a href={"https://en.wikipedia.org/wiki/Minimum_spanning_tree"}>
          Minimum spanning tree
        </a>{" "}
        problem. Hence, such a network is connected and a cyclist can go from
        any point of cycle paths to any other point, such a network is not very
        direct, is not covering much of the city area and more importantly not
        robust. Removing a single edge from the network can disconnect the
        network into two components. Therefore, it is crucial to look at the
        robustness, coverage and overall directness of the network.
      </p>

      <p>
        Szell et al. [1] proposed a strategy to grow the cycle network in a way
        that they first seed a regular grid of points in distance of 1km from
        each other, all the points they connect in a dense network. There are
        two extremes how you can connect those points. First, an utopian is to
        connect all the points with each other, forming a{" "}
        <em>fully connected</em> network. Second, a more economic approach is to
        connect all the points using mentioned Minimum spanning tree. The
        authors proposed a strategy which uses a <em>greedy triangulation</em>,
        which connects the closest points first, and then iteratively adds new
        edges to the network only if a new edge is not crossing any of the
        existing edges. This forms a <em>high clique</em> and{" "}
        <em>planar graph</em>
        &nbsp;which is also very robust [2].
      </p>

      <h3>5.1. Grow network strategies</h3>
      <p>
        Later, authors elaborate how to prioritize the new edges, the propose
        three strategies. First, to connect first points with the highest (node)
        betweenness centrality, second to connect points with the highest
        closeness centrality, and third to connect points randomly. To use
        findings from the second chapter (
        <Link to={"/rekola-rides"}>Rekola rides</Link>), I add one more strategy
        which is prioritize connecting points which are frequently used by
        bike-sharing cyclists.
      </p>

      <p>
        Betweenness centrality I have defined in the{" "}
        <Link to={"/betweenees"}>previous chapter</Link> and the closeness
        centrality is the reciprocal of the average shortest path distance
        between all other nodes in the network. The higher the value, the more
        central the node is i.e. the more closer it is to all other nodes. To
        calculate the overall closeness centrality of the network, we can use
        the following formula [2]:
        <BlockMath>{`c_i = \\frac{n-1}{\\sum_{j}d_G(i, j)}`}</BlockMath>
      </p>

      <p>
        On the following maps, we can see how the network is growing using
        different strategies.
      </p>

      <div className="center">
        <ul className={"inline"}>
          <li>
            <input
              type={"radio"}
              value={"betweenness"}
              id={"radio-betweenness"}
              checked={strategyValue === "betweenness"}
              onChange={() => setStrategyValue("betweenness")}
            />
            <label htmlFor={"radio-betweenness"}>Betweenness</label>
          </li>
          <li>
            <input
              type={"radio"}
              value={"closeness"}
              id={"radio-closeness"}
              checked={strategyValue === "closeness"}
              onChange={() => setStrategyValue("closeness")}
            />
            <label htmlFor={"radio-closeness"}>Closeness</label>
          </li>
          <li>
            <input
              type={"radio"}
              value={"rekola"}
              id={"radio-rekola"}
              checked={strategyValue === "rekola"}
              onChange={() => setStrategyValue("rekola")}
            />
            <label htmlFor={"radio-rekola"}>Rekola</label>
          </li>
          <li>
            <input
              type={"radio"}
              value={"random"}
              id={"radio-random"}
              checked={strategyValue === "random"}
              onChange={() => setStrategyValue("random")}
            />
            <label htmlFor={"radio-random"}>Random</label>
          </li>
        </ul>
        <img
          src={strategy[strategyValue]}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
      </div>

      <p>
        To simplify the map, I used the main polygon for <em>Bratislava</em>{" "}
        generated by &nbsp;
        <a
          href={
            "https://nominatim.openstreetmap.org/ui/search.html?q=Bratislava+city"
          }
        >
          Open Street Map
        </a>
        &nbsp;which is then seeded with points in distance of ~1km from each
        other.
      </p>

      <h3>5.2. Observations</h3>
      <ul>
        <li>
          <em>Betweeness</em>: It prioritize the flow and stretch the most
          demanding parts of the system. It first tries to connect more distant
          parts and then reinforce the core and central parts.
        </li>
        <li>
          <em>Closeness</em>: Here it first connects the central parts and
          expand towards the peripheries.
        </li>
        <li>
          <em>Rekola</em>: Unlike in the betweeness strategy, here is the flow
          not uniform but it is reflecting the actual (and highly skewed)
          traffic.
        </li>
        <li>
          <em>Random</em>: This is just a null model for general comparison.
        </li>
      </ul>

      <div className="center">
        <img
          src={betweenness_rekola_path}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
        <div style={{ textAlign: "justify" }}>
          <span className="image-desc">
            Instead of straight lines, here we have the shorted paths between
            the points. This is the result of Rekola strategy.
          </span>
        </div>
      </div>

      <h3>5.3. Measures</h3>

      <ul>
        <li>
          <em>Directness:</em> ratio of the shortest path on the graph and the
          shortest path in the euclidean space for two points.
          <BlockMath>{`D_{ij} = \\frac{d_E(i, j)}{d_G(i, j)}`}</BlockMath>
        </li>
        <li>
          <em>Global directness:</em> average directness over all pairs of
          nodes.
          <BlockMath>{`D = { \\biggl \\langle \\frac{d_E(i, j)}{d_G(i, j)} \\biggr \\rangle}_{i \\neq j} = \\frac{1}{n(n-1)}\\sum_{i \\neq j}D_{ij}`}</BlockMath>
          <em>
            However, it is computationally very expensive to calculate all the
            paths, we can choose just some random subset of nodes.
          </em>
        </li>
        <li>
          <em>Global efficiency:</em> Efficiency in general means, how difficult
          would be to reach other points if we remove one node from the network.
          Global efficiency is the average of the inverse of the shortest paths.
          <BlockMath>{`E_{global} = \\frac{\\sum_{i \\neq j}\\frac{1}{d_G(i, j)}}{\\sum_{i \\neq j}\\frac{1}{d_E(i, j)}}`}</BlockMath>
        </li>
        <li>
          <em>Local efficiency:</em> The local efficiency is the global
          efficiency of the subgraph of the neighbors of the node <em>i</em>.
          <BlockMath>{`E_{local} = \\frac{1}{n}\\sum_{i=1}^nE_{global}(i)`}</BlockMath>
        </li>
      </ul>

      <div className="center">
        <img
          src={grow_measures}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
      </div>
      <p>
        To summarise the results, the authors of the paper [1] found that the
        betweenness strategy grow faster for coverage, connectivity and general
        directness of the network. The closeness strategy is the best for the
        optimal connectivity and the local efficiency, but slow for coverage.
        The Rekola strategy, it is clear from the maps, is almost identical to
        the closeness strategy.
      </p>

      <h3>5.4. Conclusion</h3>
      <p>
        This approach builds robust, connected, direct and dense cyclo network
        which is covering vast area of the city. Also this is very useful for
        growing the network from scratch, but it completely ignores the existing
        infrastructure. In the next chapter, I will try to outline a very simple
        strategy how to extend the existing network of cycle paths.
      </p>

      <h3 className="reference">References:</h3>
      <ol className="reference">
        <li>
          Szell, M., Mimar, S., Perlman, T. et al.{" "}
          <em>Growing urban bicycle networks</em>. Sci Rep 12, 6765 (2022).
          &nbsp;{" "}
          <a href={"https://doi.org/10.1038/s41598-022-10783-y"}>
            https://doi.org/10.1038/s41598-022-10783-y
          </a>
        </li>
        <li>
          Newman, M. E. J. (2010), <em>Networks: an introduction</em>, Oxford
          University Press, Oxford; New York
        </li>
      </ol>
    </>
  );
}

export default NetworkGrow;
