import React, { useState, useEffect } from "react";
import Thermometer from 'react-thermometer-component'
import { Link } from "react-router-dom";
import axios from "axios"; 

function Temperature() {
  const [sentiment, setSentiment] = useState(0);

  const [fakiness, setFakiness] = useState(0);

  const [authenticity, setAuthenticity] = useState(0);

  async function getTemp() {
    axios
      .get("/api/getTemp")
      .then((res) => {
        setSentiment(res.data.sentiment);
        setFakiness(res.data.fakiness);
        setAuthenticity(res.data.authenticity);
      })
      .catch(() => {
        setSentiment(14);
        setFakiness(0);
        setAuthenticity(2);
      });
  }
  useEffect(() => {
    getTemp();
  }, []);

  return (
    <div className="Widget">
        <Thermometer
          theme="dark"
          value={sentiment}
          max="100"
          steps="3"
          format="%"
          size="large"
          height="300"
        /><h3>sentiment</h3>
        
        <Thermometer
          theme="dark"
          value={fakiness}
          max="100"
          steps="3"
          format="%"
          size="large"
          height="300"
          
          
        /><h3>fakiness</h3>
        
        <Thermometer
          theme="dark"
          value={authenticity}
          max="100"
          steps="3"
          format="%"
          size="large"
          height="300"
        /><h3>authenticity</h3> 
    </div>
  );
}

export default Temperature;
