import React, { useState, useEffect } from "react";
import { Map, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import stations from "./data/stations_clustered";

import return_mornings from "./data/return_mornings";
import return_evenings from "./data/return_evenings";
import rent_evenings from "./data/rent_evenings";
import rent_mornings from "./data/rent_mornings";

import { ColorHeatmap, ColorHeatmapValues } from "./colorHeatmap";

const HeatMap = () => {
  const rentMorningValues = rent_mornings.map((v) =>
    v.reduce((partialSum, a) => partialSum + a, 0),
  );
  const returnMorningValues = return_mornings.map((v) =>
    v.reduce((partialSum, a) => partialSum + a, 0),
  );
  const rentEveningValues = rent_mornings.map((v) =>
    v.reduce((partialSum, a) => partialSum + a, 0),
  );
  const returnEveningValues = return_evenings.map((v) =>
    v.reduce((partialSum, a) => partialSum + a, 0),
  );

  const [values, setValues] = useState(rentMorningValues);
  const [opposite, setOpposite] = useState(return_mornings);
  const [index, setIndex] = useState(-1);
  const [colors, setColors] = useState(ColorHeatmap(values));

  const [checkedValue, setCheckedValue] = useState("Rents");
  const [timeChecked, setTimeChecked] = useState("Mornings");

  useEffect(() => {
    if (checkedValue === "Rents" && timeChecked === "Mornings") {
      setColors(ColorHeatmap(rentMorningValues));
      setValues(rentMorningValues);
      setOpposite(return_mornings);
    } else if (checkedValue === "Rents" && timeChecked === "Afternoons") {
      setColors(ColorHeatmap(rentEveningValues));
      setValues(rentEveningValues);
      setOpposite(return_evenings);
    } else if (checkedValue === "Returns" && timeChecked === "Mornings") {
      setColors(ColorHeatmap(returnMorningValues));
      setValues(returnMorningValues);
      setOpposite(rent_mornings);
    } else if (checkedValue === "Returns" && timeChecked === "Afternoons") {
      setColors(ColorHeatmap(returnEveningValues));
      setValues(returnEveningValues);
      setOpposite(rent_evenings);
    }
  }, [checkedValue, timeChecked]);

  return (
    <>
      {/*<Toggle*/}
      {/*    values={['Rents', 'Returns']}*/}
      {/*    checkedValue={checkedValue}*/}
      {/*    setCheckedValue={setCheckedValue}*/}
      {/*    id={'toggle-mode'}*/}
      {/*    name={'toggle-mode'}*/}
      {/*/>*/}

      {/*<Toggle*/}
      {/*    values={['Mornings', 'Afternoons']}*/}
      {/*    checkedValue={timeChecked}*/}
      {/*    setCheckedValue={setTimeChecked}*/}
      {/*    id={'toggle-time'}*/}
      {/*    name={'toggle-time'}*/}
      {/*/>*/}
      <>
        <ul className={"inline"}>
          <li>
            <input
              type={"radio"}
              value={"rent"}
              id={"radio-rent"}
              checked={checkedValue === "Rents"}
              onChange={() => setCheckedValue("Rents")}
            />
            <label htmlFor={"radio-rent"}>Rents</label>
          </li>
          <li>
            <input
              type={"radio"}
              value={"return"}
              id={"radio-return"}
              checked={checkedValue === "Returns"}
              onChange={() => setCheckedValue("Returns")}
            />
            <label htmlFor={"radio-return"}>Returns</label>
          </li>
          {/*</ul>*/}
          {/*<ul className={'inline'}>*/}
          <li>
            <input
              type={"radio"}
              value={"morning"}
              id={"radio-morning"}
              checked={timeChecked === "Mornings"}
              onChange={() => setTimeChecked("Mornings")}
            />
            <label htmlFor={"radio-morning"}>Mornings</label>
          </li>
          <li>
            <input
              type={"radio"}
              value={"afternoon"}
              id={"radio-afternoon"}
              checked={timeChecked === "Afternoons"}
              onChange={() => setTimeChecked("Afternoons")}
            />
            <label htmlFor={"radio-afternoon"}>Afternoons</label>
          </li>
        </ul>
      </>

      <Map
        style={{ height: "80vh" }}
        zoom={16}
        bounds={stations.map((s) => s.location)}
      >
        {stations.map((s, i) => {
          return (
            <CircleMarker
              center={s.location}
              radius={5}
              fillOpacity={0.95}
              color={colors[i]}
              onMouseOver={() => {
                setColors(ColorHeatmap(opposite[i]));
                setIndex(i);
              }}
              onMouseOut={() => {
                setColors(ColorHeatmap(values));
                setIndex(-1);
              }}
              key={i}
            >
              {/* <Popup key={i}> */}
              {/*     {s.name} */}
              {/* </Popup> */}
            </CircleMarker>
          );
        })}
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
      </Map>
      {ColorHeatmapValues(index > 0 ? opposite[index] : values)}
    </>
  );
};

export default HeatMap;
