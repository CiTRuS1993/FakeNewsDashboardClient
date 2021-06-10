import React, { useState, useEffect } from "react";
import axios from "axios"; 
import CanvasJSReact from '../../utils/canvasjs/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const stubclaims = [
    { y: 1, label: "1.1.2021" },
    { y: 1, label: "2.1.2021" },
    { y: 3, label: "3.1.2021" },
    { y: 2, label: "4.1.2021" },
    { y: -1, label: "5.1.2021" },
    { y: 1, label: "6.1.2021" },
    { y: 1, label: "7.1.2021" },
    { y: 0, label: "8.1.2021" },
    { y: -3, label: "9.1.2021" },
    { y: 1, label: "10.1.2021"},
    { y: -2, label: "11.1.2021"},
    { y: 1, label: "12.1.2021"}
]
const stubtrending = [
    { y: 3, label: "1.1.2021" },
    { y: 1, label: "2.1.2021" },
    { y: 0, label: "3.1.2021" },
    { y: 0, label: "4.1.2021" },
    { y: 0, label: "5.1.2021" },
    { y: 0, label: "6.1.2021" },
    { y: 1, label: "7.1.2021" },
    { y: -1, label: "8.1.2021" },
    { y: 1, label: "9.1.2021" },
    { y: 1, label: "10.1.2021"},
    { y: 1, label: "11.1.2021"},
    { y: -2, label: "12.1.2021"}
]

const stubtopics = [
    { y: 1, label: "1.1.2021" },
    { y: 1, label: "2.1.2021" },
    { y: -1, label: "3.1.2021" },
    { y: 1, label: "4.1.2021" },
    { y: 2, label: "5.1.2021" },
    { y: 1, label: "6.1.2021" },
    { y: 3, label: "7.1.2021" },
    { y: -1, label: "8.1.2021" },
    { y: 1, label: "9.1.2021" },
    { y: 1, label: "10.1.2021"},
    { y: -3, label: "11.1.2021"},
    { y: 1, label: "12.1.2021"}
]


function Sentiment(){
    const [topics,setTopics] = useState([])
    const [claims,setClaims] = useState([])
    const [trends,setTrends] = useState([])


    var yLabels = ["Negative","Natural","Positive"];

    const options = {
        animationEnabled: true,	
        title:{
            text: "sentiment over time"
        },
        axisY : {
            title: "sentiment"
        },
        toolTip: {
            shared: true
        },
        axisY: {
            interval: 3,
            maximum: 3,
            minimum:-3,
            labelFormatter: function ( e ) {  
                
              var yCats = yLabels[(e.value+3)/3];
              return yCats;
            } 
          },
        data: [{
            type: "spline",
            name: "topics",
            showInLegend: true,
            dataPoints:topics},
        {
            type: "spline",
            name: "trends",
            showInLegend: true,
            dataPoints: trends
        },
        {
            type: "spline",
            name: "claims",
            showInLegend: true,
            dataPoints: claims
        }],
        // weight: "90vh",
        // height: "20vh"
    }

    async function getSentiment() {
        axios
          .get("/api/getSentiment")
          .then((res) => {
            let topics = res.data.topics.map((sent)=> {return {y: sent.sentiment, label: sent.date}})
            let claims = res.data.claims.map((sent)=> {return {y: sent.sentiment, label: sent.date}})
            let trends = res.data.trends.map((sent)=> {return {y: sent.sentiment, label: sent.date}})

            setTopics(topics)
            setClaims(claims)
            setTrends(trends)
        
          })
          .catch(() => {
            setTopics(stubtopics)
            setClaims(stubclaims)
            setTrends(stubtrending)
          });
      }
      useEffect(() => {
        getSentiment();
      }, []);

      return(

        <div className="sentiment">
        <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
      )

}

export default Sentiment