import React, { useState, useEffect } from "react";
import axios from "axios"; 
import TweetsList from './tweets_list'
import Pie from '../../utils/canvasjs/pie_chart';
import CanvasJSReact from '../../utils/canvasjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;


// 
const fakeOptions ={
	animationEnabled: true,
	
	title:{
		text:"Fakiness"
	},
	height: 260,
    width: 260,
	
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 127, label: "Fake" },
			{ y: 132, label: "True" },
			
		]
	}]}
export default function TopicView(props){
    const [tweets,setTweets] = useState([])
    const [emotion,setEmotion] = useState([])
    async function getTopic() {
        axios
          .get("/getTopic",{topic:props.match.params.topic})
          .then((res) => {
            setTweets(res.data.tweets);
            setEmotion(res.data.emotions);
        
          })
          .catch(() => {
            setEmotion([{ y: 32, label: "Anger" },
            { y: 22, label: "Disgust" },
            { y: 15, label: "Sad" },
            { y: 19, label: "Happy" },
            { y: 5, label: "Surprise" },
            { y: 16, label: "Fear" }])
            setTweets([{id:"1361577298282094592",emotion:"happy",real:"fake"},{id:"1361577298282094592",emotion:"happy",real:"true"}])
            

        });
      }
      useEffect(() => {
        getTopic();
      }, []);
      return(
          <div>
              <div className="Topic">
           <Pie title="Current emotions distirbution" dataPoints ={emotion} height={260} width={260}
				/* onRef={ref => this.chart = ref} */
			/>
             <CanvasJSChart options = {fakeOptions}
				/* onRef={ref => this.chart = ref} */
			/>
            </div>
          <TweetsList tweets={tweets}/>
          </div>
      )
}