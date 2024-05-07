import React from "react";
import { Link } from "react-router-dom";

import edge_betweeness_cyclo_paths from "./img/edge_betweeness_cyclo_paths.png";
import l2c_betweenness_existing from "./img/l2c_betweenness_existing.png";
import all_together from "./img/all_together.png";
import final from "./img/final.png";

function Recommendation() {
  return (
    <>
      <h2>5. General recommendations</h2>
      <p>
        Models described in previous chapters are demonstrating important
        properties of a <em>good</em> cycle network. First, Natera et.al. [1]
        showed how to increase{" "}
        <Link to={"/connectedness"}>network connectedness</Link>
        &nbsp; by adding new links to the network. Then, Szell et.al. [2] showed
        how to increase the <Link to={"/robustness"}>robustness</Link> and
        coverage using dense greedy triangulation, but it doesn't consider
        already existing infrastructure. In this chapter, I will propose a
        general recommendation and outline some routes for extending the network
        of cycle paths in Bratislava.
      </p>

      <h3>5.1. Directness</h3>
      <p>
        Probably the most important aspect of cycle path success is the its{" "}
        <em>usefulness</em>, in previous chapters I demonstrated that a{" "}
        <em>good proxy</em> would be betweenness and directness of the network.
        First, I would add the most important links to the existing network,
        i.e. the ones with the highest betweenness centrality.
      </p>

      <div className="center">
        <img
          src={edge_betweeness_cyclo_paths}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
        <div style={{ textAlign: "justify" }}>
          <span className="image-desc">
            Blue - existing cycle paths, orange - new edges with high
            betweenness centrality.
          </span>
        </div>
      </div>

      <h3>5.2. Connectedness</h3>
      <p>
        This network contains many of the most important links, but it is not
        connected. Therefore, to make it connected, I used{" "}
        <em>Largest-to-closest</em> component algorithm proposed by Natera
        et.al. [1].
      </p>

      <div className="center">
        <img
          src={l2c_betweenness_existing}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
        <div style={{ textAlign: "justify" }}>
          <span className="image-desc">
            Blue - existing cycle paths, orange - new edges with high
            betweenness centrality.
          </span>
        </div>
      </div>

      <h3>5.3. Robustness and coverage</h3>
      <p>
        To reinforce the links, we can connect the <em>death-end</em> paths with
        the closest <em>death-end</em>. This will increase the robustness and
        coverage of the network. This closes all the gaps in the network and its
        directness overcomes the average discreteness of cars in this area.
      </p>

      <div className="center">
        <img
          src={all_together}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
        <div style={{ textAlign: "justify" }}>
          <span className="image-desc">
            Blue - existing cycle paths, high betweenness and L2C links, red -
            newly connected endpoints.
          </span>
        </div>
      </div>

      <h3>5.4. Limitations</h3>
      <p>
        Even though the proposed strategy is based on the state-of-the-art
        research, it is not perfect. It outlines how to build{" "}
        <em>good enough</em> cyclo network, with significant margins for
        improvement. Many of the paths are doubling already existing
        infrastructure, and it is not clear how to prioritize the new links,
        even strategies proposed in previous chapter could be an inspiration.
      </p>
      <div className="center">
        <img src={final} style={{ width: "1000px", marginLeft: "-150px" }} />
      </div>

      <h3>5.5. Conclusion</h3>
      <p>
        Main purpose of this project was to raise awareness of different
        concept, treating cycle paths as form of network. To simulate two of the
        models [1, 2] for extending the network of cycle paths specifically for
        Bratislava, and to calculate and demonstrate centrality, betweenness and
        directness. Last but not least, to describe some of the mobility
        patterns of cyclists in Bratislava.
      </p>

      <h3 className="reference">References:</h3>
      <ol className="reference">
        <li>
          Natera, L.G., Battiston, F., Iñiguez, G., and Szell, M. (2019){" "}
          <em>Data-driven strategies for optimal bicycle network growth</em>,{" "}
          <a href={"https://arxiv.org/abs/1907.07080"}>arXiv:1907.07080</a>
        </li>
        <li>
          Szell, M., Mimar, S., Perlman, T. et al.{" "}
          <em>Growing urban bicycle networks</em>. Sci Rep 12, 6765 (2022).
          &nbsp;{" "}
          <a href={"https://doi.org/10.1038/s41598-022-10783-y"}>
            https://doi.org/10.1038/s41598-022-10783-y
          </a>
        </li>
      </ol>
    </>
  );
}

export default Recommendation;
