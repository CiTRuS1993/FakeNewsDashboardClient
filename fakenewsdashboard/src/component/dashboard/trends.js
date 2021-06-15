import React, { useState, useEffect } from "react";
import axios from "axios"; 
import TrendBlock from './trend_block'

const stubwords = {"Donald Trump":[
    {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'bad',
      value: 17,
    },
  ],
"some Trends":[
    {text: 'foos',
    value:23},
    {text: 'other',
        value:50},
        {
            text: 'thought',
            value: 16,
          },
          {
            text: 'bad',
            value: 17,
          },
]
}
const stubtrending = ["Donald Trump","some Trends"]

const stubstat = {"Donald Trump":{
emotion:"fear",sentiment:-1,avg_fake:78
},
"some Trends":{
    emotion:"happy",sentiment:3,avg_fake:2
    }
}
function Trends() {
    const [trending,setTrends] = useState({trend:stubtrending,words:stubwords,statistics:stubstat})
    // const [words,setWords] = useState(stubwords)
    // const [statistics,setStatistics] = useState(stubstat)
    let trends = trending.trend
    let words = trending.words
    let statistics = trending.statistics

    async function getTrends() {
        axios
          .get("/api/getTrends")
          .then((res) => {
            // alert("d")
            let trnd =[];
            let wrds = {};
            let stat = {};
            console.log(res.data)

            for (let trend in res.data) {
                trnd.push(trend);
                wrds[trend] = res.data[trend].words;
                // stat[trend] = res.data[trend].statistics;
                console.log(res.data[trend].statistics +"!!!!")
                  let s = res.data[trend].statistics
                  stat[trend] =    {sentiment: s.sentiment, emotion: s.emotion, real:s.avg_fake}

            }
            setTrends({trend:trnd,words:wrds,statistics:stat});
            // setWords(wrds);
            // setStatistics(stat)
        
          })
          .catch(() => {
            setTrends({trend:stubtrending,words:stubwords,statistics:stubstat});
            
          });
      }
      useEffect(() => {
        getTrends();
      }, []);
      

      let trendsView = trends.map((trend) =><TrendBlock trend={trend} statistics={statistics[trend]} words={words[trend]} />)

      return (
        <div className="trends">
            {trendsView}
        </div>
      )


}

export default Trends