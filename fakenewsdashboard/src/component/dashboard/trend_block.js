// import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Thermometer from "react-thermometer-component";
import CanvasJSReact from "../../utils/canvasjs/canvasjs.react";
import sad from "../../utils\\emojis\\sad.png";
import angry from "../../utils\\emojis\\angry.png";

import happy from "../../utils\\emojis\\happy.png";

import surprised from "../../utils\\emojis\\suprised.png";

import disgust from "../../utils\\emojis\\disgust.png";

    

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const stubtweets = [
  { y: 1, label: "1.1.2021" },
  { y: 1, label: "2.1.2021" },
  { y: -1, label: "3.1.2021" },
  { y: 1, label: "4.1.2021" },
  { y: 2, label: "5.1.2021" },
  { y: 1, label: "6.1.2021" },
  { y: 3, label: "7.1.2021" },
  { y: -1, label: "8.1.2021" },
  { y: 1, label: "9.1.2021" },
  { y: 1, label: "10.1.2021" },
  { y: -3, label: "11.1.2021" },
  { y: 1, label: "12.1.2021" },
];

const emojis = {
    Sad :sad,

    Anger :angry,

    Happy : happy,
    Surprise : surprised,
    Digust : disgust,
    Fear:surprised
}
const options = {
  animationEnabled: true,
  title: {
    text: "tweets over time",
  },
  axisY: {
    title: "tweets",
  },
  toolTip: {
    shared: true,
  },
  data: [
    {
        markerSize: 1,
      type: "line",
      name: "tweets",
      lineThickness: 1,
      dataPoints: stubtweets,
    },
  ],
  height: 100,
  width: 200,
};
function TrendBlock(props) {
  let statistics = [];
  for (let stat in props.statistics) {
    statistics.push(
      <div>
        <h4>
          {stat} : {props.statistics[stat]}{" "}
        </h4>{" "}
        <br />
      </div>
    );
  }
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return <Redirect to={"/trend/" + props.trend} />;
  }
  return (
    <div className="Trend" onClick={() => setClicked(true)}>
      <div class="flex-container">
        <div class="flex-child">
          {" "}
          <Thermometer
            theme="dark"
            value={(17*(3+props.statistics.sentiment)).toFixed()
            }
            max="100"
            steps="3"
            format="%"
            // size="large"
            size="small"
            // height="300"
            // height="100"
          />
        </div>
        <div class="flex-child green">
          <Thermometer
            theme="dark"
            value={props.statistics.avg_fake}
            max="100"
            steps="3"
            format="%"
            // size="large"
            size="small"
            // height="300"
            // height="100"
          />
        </div>

        <div class="flex-child">
          <h2>{props.trend}</h2>
          <div style={{ height: 100, width: 100 }}>
            <ReactWordcloud words={props.words} />
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-child">
          <div style={{ height: 100, width: 100 }}><img src={emojis[props.statistics.emotion]} height="100" alt ={props.emotion}></img></div></div>
          <div class="flex-child">
            <CanvasJSChart
              options={options}
              /* onRef={ref => this.chart = ref} */
            />
          </div>
        </div>
      </div>
    
  );
}

export default TrendBlock;
