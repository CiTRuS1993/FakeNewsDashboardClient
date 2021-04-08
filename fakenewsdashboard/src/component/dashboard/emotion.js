import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { Redirect } from 'react-router-dom'
import Pie from '../../utils/canvasjs/pie_chart';

function Emotion() {
    const [emotions, setEmotion] = useState([
        { y: 32, label: "Anger" },
        { y: 22, label: "Disgust" },
        { y: 15, label: "Sad" },
        { y: 19, label: "Happy" },
        { y: 5, label: "Surprise" },
        { y: 16, label: "Fear" }
    ]); 
    const [choosen, setChoosen] = useState("")
    function emotion_choose(e){
        setChoosen(e.dataPoint.label)
    }

    async function getEmotions() {
        axios
          .get("/api/getEmotions")
          .then((res) => {
            let emotions = res.data.emotions.map((emo)=> {return {y: emo.amount, label: emo.label}})
            setEmotion(emotions);
            
        
          })
          .catch(() => {
            
          });
      }
      useEffect(() => {
        getEmotions();
      }, []);
    if(choosen !== ""){
        return(
            <Redirect to={"/emotion_tweets/"+choosen} />
        )
    }
    return(
        <div className="emotions">
             <Pie title="Current emotions distirbution" dataPoints ={emotions} onClick={emotion_choose}
				/* onRef={ref => this.chart = ref} */
			/>
        </div>
    )

}
export default Emotion;
