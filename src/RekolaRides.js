import React, { useState } from "react";
import { InlineMath } from "react-katex";
import HeatMap from "./HeatMap";
import Toggle from "./Toggle";

import rides_heatmap from "./img/rides_heatmap.png";
import drive_rides_heatmap from "./img/drive_rides_heatmap.png";
import all_rides_heatmap from "./img/all_rides_heatmap.png";
import rides_workdays from "./img/rides_workdays.png";
import rides_weekends from "./img/rides_weekends.png";
import rides_workdays_proportions from "./img/rides_workdays_proportions.png";
import rides_weekends_proportions from "./img/rides_weekends_proportions.png";
import weather_vs_rides from "./img/weather_vs_rides.png";
import ride_duration_frequency from "./img/ride_duration_frequency.png";
import ride_length_frequency from "./img/ride_length_frequency.png";

function RekolaRides() {
  const [weekendsValue, setWeekendsValue] = useState("Abs.");
  const [workdayValue, setWorkdayValue] = useState("Abs.");
  const [heatmapValue, setHeatmapValue] = useState("bike");

  return (
    <>
      <h2 id="intro">2. Analysis of Rekola bike sharing in Bratislava</h2>
      <p>
        Rekola [1] is a bike-sharing service operating in Bratislava and some
        other places in Czech Republic such as Prague. Their signature pink
        coloured bikes are distributed all over the wider city center and
        available to registered users for short-term rental (up to 24 hours).
        Users, then can see and use all the available bikes at the fixed
        stations. In this section I will take a look at some basic mobility
        patterns and discover where city cyclist choose to cycle.
      </p>

      <h3 id="data">2.2. Data</h3>
      <p>
        In this project, I have scraped this <em>publicly available</em> map
        through their API and every 10 minutes I made a snapshot of the
        available bikes at the stations. Once a bike is in use or is out of
        service, it is not present on the map. Based on this continues cycle
        where bikes disappear and reappear on the map (API snapshot), I have
        constructed rides. A ride consists of start and end position, duration
        of a ride (from 10 minutes to 8 hours{" "}
        <sup>
          <a href="#40min">1</a>
        </sup>
        ) and obviously the bike which has been used.
      </p>

      <p>
        Data has been collected over 300 days throughout the year including all
        seasons - from autumn 2022 to winter 2024, therefore, capturing all
        kinds of weather conditions and mobility patterns.
      </p>

      <p>
        Additionally, to compare mobility patterns with historical weather data,
        I had used Meteostat [2] Python library. Meteostat offers historical
        weather data for numerous world location, including Bratislava{" "}
        <sup>
          <a href="#meteostat">2</a>
        </sup>
        , on hourly, daily and monthly bases. Data contains information about
        average daily temperature (°C), precipitation total (mm), average wind
        speed (km/h) and peak wind gust (km/h).
      </p>

      <h3 id="stats">2.3. Mobility patterns</h3>
      <p>
        Over the scope of months scraping the API, I have collected over 130K
        rides. Here are few observations.
      </p>
      <p>
        Cycling similarly to other types of transport in the city, is not evenly
        distributed over the week. Workdays (Monday to Friday) are in general
        more popular days for cycling, then weekends. A year average for
        workdays is about 500 rides, while for weekends it is about 300 rides.
        More over, the distribution of rides over the day is also different for
        workdays and weekends.
      </p>

      <div className="center">
        <Toggle
          values={["Abs.", "Prop."]}
          checkedValue={workdayValue}
          setCheckedValue={setWorkdayValue}
          id={"workday-toggle"}
          name={"workday-toggle"}
        />
        <img
          src={
            workdayValue === "Abs."
              ? rides_workdays
              : rides_workdays_proportions
          }
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
        <div style={{ textAlign: "justify" }}>
          <span className="image-desc">
            Absolute values are calculated as <InlineMath>{`F^d_t`}</InlineMath>{" "}
            number of rides at time t on a day d. Proportional values are
            calculated as{" "}
            <InlineMath>{`\\hat{F}^d_t = F^d_t / \\sum_{\\tau}F^d_\\tau`}</InlineMath>
            .
          </span>
        </div>
      </div>

      <p>
        During the workdays, it seems that many people are using bikes for
        commuting to work and school, which matches the 8 hours work time, with
        the peak starting at 7am and another more disperse peak at 4pm. This
        bi-modal distribution is even more clear for proportion value plot.
      </p>

      <div className="center">
        <Toggle
          values={["Abs.", "Prop."]}
          checkedValue={weekendsValue}
          setCheckedValue={setWeekendsValue}
          id={"weekend-toggle"}
          name={"weekend-toggle"}
        />
        <img
          src={
            weekendsValue === "Abs."
              ? rides_weekends
              : rides_weekends_proportions
          }
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
      </div>
      <p>
        On the other hand, over the weekends the usage of bikes is more equally
        distributed with no sharp peak. Those observations match bike sharing
        patterns seen in other cities, for instance Paris [3] and New York [4].
      </p>

      <h4 id={"weather"}>2.3.1. Weather</h4>
      <p>
        Weather and seasonality is in general the most determining factor on
        users' cycling. During the winter time average number of rides drops to
        200, while spring and autumn times are around 550, and summer peaks at
        800 rides per day.
      </p>
      <div className="center">
        <img src={weather_vs_rides} />
      </div>

      <p>
        There is a strong correlation (<em>~0.85</em>) between average daily
        temperature and number of rides for both workdays and non-workdays
        (including public holidays). Other factors (alone) such as precipitation
        or wind speed / gusts do not seem to have a significant impact on the
        number of rides, unsurprisingly all those factors have negative but
        insignificant correlation (<em>~-0.20</em>).
      </p>

      <h4 id={"durations"}>2.3.2. Ride durations</h4>
      <p>
        When it comes to lengths and durations of rides, those travels are in
        general shorter ones. Which supports the fact that bike rides tend to be
        used for shorter distances in city. Also this is highly skewed, because
        the city bikes are located in the city center, and therefore, rides from
        suburban areas aren't possible, and most of the rides are at most from
        the most distant station to the city center. However, the data is
        generated as 10 minutes snapshots, therefore, the duration of a ride is
        multiple of 10 with an overall <em>bin-midpoint</em> average of 22.71
        minutes{" "}
        <sup>
          <a href="#avg">4</a>
        </sup>
        .
      </p>

      <div className="center">
        <img
          src={ride_duration_frequency}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
      </div>

      <p>
        Although, the actual rides which users rode while renting the bike are{" "}
        <strong>not</strong> publicly available, I had looked at the theoretical
        shortest paths between start and end points. Then grouped those
        theoretical shortest distances into 100m bins with their frequencies.
        The theoretical average distance is 2.05km.
      </p>

      <p>
        <em>
          Theoretical shortest distance means if we take start and endpoint of a
          ride, i.e. start and end node of the street network, we can calculate
          the shortest distance, e.g. by using{" "}
          <a href={"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"}>
            Dijkstra's algorithm
          </a>
          . It as also neglects the type of the road, traffic, etc. calm one way
          street is treated the same as busy road. Ultimately, this does not
          mean that users actually took that path, actually in general cyclist
          do not take the most direct path [6], but it is as close we can get
          using this dataset.
        </em>
      </p>

      <div className="center">
        <img
          src={ride_length_frequency}
          style={{ width: "1000px", marginLeft: "-150px" }}
        />
      </div>

      <h4 id="heatmap">2.3.3. Heatmap</h4>
      <p>
        Future more, those shortest paths can be then plotted on the city map,
        which forms a sort of heatmap of most common <em>theoretical</em>{" "}
        routes.
      </p>

      <p>
        The heatmap is created by overlaying all the theoretical shortest paths
        on top of each other and this forms a sort of{" "}
        <em>betweenness centrality</em> of the street network. The brighter the
        color, the more paths pass through that street segment. This can be used
        to identify the most common and important routes.
      </p>

      <div className="center">
        <ul className={"inline"}>
          <li>
            <input
              type={"radio"}
              value={"bike"}
              id={"radio-bike"}
              checked={heatmapValue === "bike"}
              onChange={() => setHeatmapValue("bike")}
            />
            <label htmlFor={"radio-bike"}>Bike</label>
          </li>
          <li>
            <input
              type={"radio"}
              value={"car"}
              id={"radio-car"}
              checked={heatmapValue === "car"}
              onChange={() => setHeatmapValue("car")}
            />
            <label htmlFor={"radio-car"}>Car</label>
          </li>
          <li>
            <input
              type={"radio"}
              value={"all"}
              id={"radio-all"}
              checked={heatmapValue === "all"}
              onChange={() => setHeatmapValue("all")}
            />
            <label htmlFor={"radio-all"}>All</label>
          </li>
        </ul>
        <img
          src={
            heatmapValue === "bike"
              ? rides_heatmap
              : heatmapValue === "all"
                ? all_rides_heatmap
                : drive_rides_heatmap
          }
          style={{ width: "960px", marginLeft: "-130px" }}
        />
      </div>

      <p>
        Switching between bike and car mode, it shows the difference between the
        most common routes. Those modes are different OSM filters, where{" "}
        <a
          href={
            "https://github.com/gboeing/osmnx/blob/main/osmnx/_overpass.py#L72-L77"
          }
        >
          bike mode
        </a>{" "}
        is optimized for cycling and{" "}
        <a
          href={
            "https://github.com/gboeing/osmnx/blob/main/osmnx/_overpass.py#L39-L46"
          }
        >
          car mode
        </a>{" "}
        is optimized shows all the streets where car are allowed. All mode shows{" "}
        <a
          href={
            "https://github.com/gboeing/osmnx/blob/main/osmnx/_overpass.py#L89-L92"
          }
        >
          all the streets
        </a>
        . For example on the bike mode, you can't see highways and bridges such
        as <em>Most SNP</em> or <em>Most Apollo</em> (2<sup>nd</sup> and 3
        <sup>rd</sup> bridges from left) looks completely different.
      </p>

      <p>
        Most important observations for different modes are that the bike mode
        heatmap is <em>less direct</em>&nbsp; compared to the all streets mode
        heatmap. This is because many of the roads are primarily designed for
        cars and bikes has to find more indirect routes. It can be seen on the
        example of <em>Most SNP</em> or &nbsp; <em>Prístavný most</em> which are
        totally car centric and not bike friendly. Cyclist (based on shortest
        paths) find it easier to use the <em>Starý most</em> instead. On the{" "}
        <em>all streets</em> mode we can see many more paths passing{" "}
        <em>Most SNP</em>. If they were allowed to use <em>Most SNP</em> in the
        same way as car does, we would likely to see more cyclist passing that
        bridge.
      </p>

      <h3 id={"rents-n-returns"}>2.4. Rents and returns</h3>
      <p>
        The fundamental idea of bike-sharing is to rent the bike from one
        station, ride the bike and then return the bike at another station. The
        essence of <em>floating</em> bikes in the close system of station, is
        captured on the map below. This shows a sort of <em>heatmap</em> of
        rents and returns, both for each station and entire bike-sharing system.
      </p>

      <p>
        Unsurprisingly, most of the rents and returns are located in the center
        of the city.
      </p>

      <div
        style={{ width: "1000px", marginLeft: "-150px", textAlign: "center" }}
      >
        <HeatMap />
      </div>

      <div style={{ textAlign: "justify" }}>
        <span className="image-desc">
          Based on the mode on the top of the map, it shows both bikes' rents
          and returns. The more "orange" the color, the more bikes were rented
          or returned, respectively. By hovering over a station, it shows a
          heatmap of bikes' returns or rents from that particular station. If
          mode is "rent", for a given stations, the map shows where the bikes
          were returned starting from that station. On the flip side, for
          "return" mode, it displays heatmap of where bikes were rented and
          ended at this station. The bottom color schema shows linearly
          distributed <i>color bins</i>
          &nbsp; with their quantities.
        </span>
      </div>

      <h3 id={"observations"}>2.5. Observations</h3>
      <p>
        There is roughly the same number of available bikes and stations to park
        (~300). The station network is very dense and many stations are in a
        close proximity to another stations, often less than 100m. Such a set up
        could be convenient for bike returns as user can return the bike into
        large pool of possible places. On the other hand, such equal number of
        bikes and stations tend to favour some "central" stations - hubs, makes
        hard to find available bikes at all stations. For example station{" "}
        <em>Eurovea 1</em> attracts (and also produces) about 2.5% of all rides.
      </p>

      <p>
        There is a reason to believe that Rekola is not <em>re-balancing</em>{" "}
        the bikes in between the stations. There is a slight discrepancy between
        bikes rentals and returns. This discrepancy averages for about 0.22% of
        total rides for all stations. This is likely to be linked to data
        collection process, where some longer rides aren't counted, also bikes
        can be reported to be broken, etc.
      </p>

      <h3 id={"conclusion"}>2.6. Conclusion</h3>
      <p>
        Bratislava is (not yet) know for its residents to use bikes as a primary
        mode of transport. The daily average of rides is about 500, which for a
        city of half a million population isn't tremendous number. (obviously,
        there are other bike-sharing platforms and private bikes, etc.). It
        shows that the cycling isn't an insignificant part of the city's
        transport system, but helps us to understand important mobility patterns
        and frequent routes.
      </p>
      <h3 className="reference">References:</h3>
      <ol className="reference">
        <li>
          Rekola Bikesharing SK s.r.o.,{" "}
          <em>"Rekola - Discover city with Rekola Bikesharing</em>, &nbsp;
          <a href="https://www.rekola.sk/">link</a>
        </li>
        <li>
          Christian Sebastian Lamprecht (2023) <em>"Meteostat Python"</em>.
          0000-0003-3301-2852, &nbsp;
          <a href="https://meteostat.net/en/">link</a>
        </li>
        <li>
          Nicolas Gast, Guillaume Massonnet, Daniël Reijsbergen, Mirco
          Tribastone. (2015) &nbsp;
          <em>
            Probabilistic Forecasts of Bike-Sharing Systems for Journey
            Planning.
          </em>
          &nbsp;The 24th ACM International Conference on Information and
          Knowledge Management Oct 2015, Melbourne, Australia.
          ff10.1145/2806416.2806569ff. ffhal-01185840f
        </li>
        <li>
          Chiariotti, Federico, Chiara Pielli, Andrea Zanella, and Michele
          Zorzi. (2018) &nbsp;
          <em>A Dynamic Approach to Rebalancing Bike-Sharing Systems</em>.
          &nbsp;Sensors 18, no. 2: 512. https://doi.org/10.3390/s18020512
        </li>
        <li>
          Newman, M. E. J. (2010), <em>Networks: an introduction</em>, Oxford
          University Press, Oxford; New York
        </li>
        <li>
          Zhu S, Levinson D (2015){" "}
          <em>
            Do People Use the Shortest Path? An Empirical Test of Wardrop’s
            First Principle.
          </em>{" "}
          PLOS ONE 10(8): e0134322. https://doi.org/10.1371/journal.pone.0134322
        </li>
      </ol>

      <ol className="foot-notes">
        <li id="40min">
          Snapshot is done every 10 minutes, so if a bike is rented and returned
          within this timeframe, there is a chance, I missed the ride
          completely. On the other hand, there is a scenario where a bike is
          rented (rental is recorded), then returned and then immediately rented
          by someone else (so it didn't appear in the next snapshot), in such a
          case, I would take that as a one long ride. To prevent such scenarios,
          I had set up the upper limit for all rides to max 8 hours, after that
          the <em>ride</em> is discarded.
        </li>
        <li id="meteostat">
          The closest station in Meteostat for Bratislava city center is station
          / point with ID=11816, which is Bratislava Ivanka.
        </li>
        <li id="avg">
          However, the snapshots are 10 minutes, hence, the bin size is 10. The
          average can be estimated as mid-interval value (5, 15, 25...) weighted
          with the frequency, therefore, 22.71 minutes or using &nbsp;
          <a href="https://en.wikipedia.org/wiki/Interval_arithmetic">
            interval arithmetic
          </a>
          , average lies in interval 17.71 - 27.71 minutes.
        </li>
      </ol>
    </>
  );
}

export default RekolaRides;
