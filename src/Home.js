import React from "react";

function Home() {
  return (
    <>
      <h2>1. Intro</h2>
      <p>
        Cities and their traffic are complex systems, lots of different levels
        of interactions and dependencies are involved. With the rising urgency
        of climate change and the need to reduce the carbon footprint, and
        constant increase of urban population, it is crucial to include
        sustainable transport such as cycling into the urban planning and
        transportation.
      </p>

      <p>
        Bratislava is the capital of Slovakia, and it is a city with a
        population of around half-million people. Cycling doesn't belong to
        preferred means of transport in Bratislava, but it is slowly gaining
        popularity. Over the past few years, the city has been investing in
        cycling infrastructure, and more bike-sharing platforms are available.
      </p>

      <p>
        This project tries to raise question what is good cycling
        infrastructure, and how to measure it. There are lots of different
        aspects of cyclo paths which could be considered, such as safety,
        quality of the road, width and type of cycle paths, whether it is
        separated from the road or not, etc. In this project, I would like to
        raise awareness of different concept, treating cycle paths as form of
        network consisting of streets and their intersections. This approach
        allows us to use tools from network science and graph theory to, first
        quantify and measure the underlying network, and second, propose some
        strategies for extending the existing network of cycle paths. Throughout
        this project I will try to define and explain a good cycle network,
        which should be <strong>connected</strong>, <strong>direct</strong> and{" "}
        <strong>robust</strong>.
      </p>

      <p>
        Firstly, I will look at the mobility patterns of{" "}
        <em>selected subset of Bratislava cyclist</em>, specifically users of
        bike-sharing platform <em>Rekola</em>. I will look at the data of bike
        rides, which describe habits of cyclists and their preferences.
      </p>

      <p>
        Secondly, by looking at the <em>underlying network</em> of Bratislava
        city, and I will try to quantify it. To solve <em>connectedness</em> of
        the network, I will propose some strategies for extending the existing
        network of cyclo paths based on paper of Natera, L.G et al. [1].
      </p>

      <p>
        Thirdly, to make a good cycle network, it should be <em>direct</em> and{" "}
        <em>useful</em> for commuting cyclists, <em>useful</em> cycle path is
        the one which is going to be used by cyclists and lies in between their
        points of interests. Here I will look at different kinds of heat maps
        and betweenness centrality of the network.
      </p>

      <p>
        Fourthly, all kinds of road networks are facing disturbances, such as
        road maintenance, accidents, or natural disasters such as flooding.
        Therefore, network should be <em>robust</em>, i.e. it should be able to
        withstand disturbances. Here I will look at the robustness of the
        network in a light of Szell, M. et al. paper [2].
      </p>

      <p>
        Finally, I will plot general strategy how to extend the network of cycle
        paths in Bratislava by adding some most frequently used streets by
        cyclists and simply connecting it into a coherent and connected system.
      </p>

      <p>
        To conclude, building cycle paths is a tricky and radical tasks which
        requires not insignificant investments, city planning, political will
        and public support. This project doesn't aim to provide exact solution
        and determine the best cycle paths, but rather to raise awareness of
        existing network measures and strategies, which are calculated and
        simulated for Bratislava.
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

export default Home;
