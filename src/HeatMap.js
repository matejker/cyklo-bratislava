import React, { useState, useEffect } from "react";
import { Map, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import stations from './data/stations_clustered';
import rents from './data/rents';
import returns from './data/returns';
import rents_clustered from './data/rents_clustered';
import returns_clustered from './data/returns_clustered';
import { ColorHeatmap, ColorHeatmapValues } from './colorHeatmap';
import Toggle from './Toggle';


const HeatMap = () => {
    const rentValues = rents_clustered.map(v => v.reduce((partialSum, a) => partialSum + a, 0));
    const returnValues = returns_clustered.map(v => v.reduce((partialSum, a) => partialSum + a, 0));

    const [values, setValues] = useState(rentValues);
    const [opposite, setOpposite] = useState(returns_clustered);
    const [index, setIndex] = useState(-1);
    const [colors, setColors] = useState(ColorHeatmap(values));

    const [checkedValue, setCheckedValue] = useState('Rents');

    useEffect(() => {
        if (checkedValue === 'Rents') {
            setColors(ColorHeatmap(rentValues));
            setValues(rentValues);
            setOpposite(returns_clustered);
        } else {
            setColors(ColorHeatmap(returnValues));
            setValues(returnValues);
            setOpposite(rents_clustered);
        }
    }, [checkedValue]);

    return (
        <>
            <Toggle
                values={['Rents', 'Returns']}
                checkedValue={checkedValue}
                setCheckedValue={setCheckedValue}
                id={'toggle-mode'}
                name={'toggle-mode'}
            />

            <Map style={{ height: "80vh" }} zoom={16} bounds={stations.map(s => s.location)}>
                    {
                        stations.map((s, i) => {
                            return (
                                <CircleMarker
                                    center={s.location}
                                    radius={5}
                                    fillOpacity={0.95}
                                    color={colors[i]}
                                    onMouseOver={() => {
                                        setColors(ColorHeatmap(opposite[i]));
                                        setIndex(i)
                                    }}
                                    onMouseOut={() => {
                                        setColors(ColorHeatmap(values));
                                        setIndex(-1)
                                    }}
                                    key={i}
                                >
                                    {/* <Popup key={i}> */}
                                    {/*     {s.name} */}
                                    {/* </Popup> */}
                                </CircleMarker>
                            );
                            }
                        )
                    }
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />
            </Map>
            {ColorHeatmapValues((index > 0) ? opposite[index] : values)}
        </>
    );

};

export default HeatMap;