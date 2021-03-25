import Globe from 'react-globe.gl';

import React, { useState, useEffect } from "react";
import jsondata from '../../utils/ne_110m_populated_places_simple.json.js'

export default function World (){
    const [places, setPlaces] = useState(jsondata);
   
    // useEffect(() => {
    //   // load data 
    //   fetch('../../utils/ne_110m_populated_places_simple.geojson').then(res => res.json())
    //     .then(({ features }) => setPlaces(features));
    // }, []);
    // setPlaces();
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['red', 'green'][Math.round(Math.random() * 1)], ['red', 'green'][Math.round(Math.random() * 1)]],
      label:[['true', 'fake'][Math.round(Math.random() * 1)]]
    }));
  
    return <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      arcsData={arcsData}
      arcLabel={d=>d.label}
      arcColor={'color'}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      labelsData={places.features}
      labelLat={d => d.properties.latitude}
      labelLng={d => d.properties.longitude}
      labelText={d => d.properties.name}
      labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}
      labelResolution={2}
    />;
  };