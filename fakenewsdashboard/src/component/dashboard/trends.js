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
mainEmo:"fear",avgSentiment:57,avgAuthenticity:17,avgFakiness:78
},
"some Trends":{
    mainEmo:"happy",avgSentiment:3,avgAuthenticity:87,avgFakiness:2
    }
}
function Trends() {
    const [trends,setTrends] = useState(stubtrending)
    const [words,setWords] = useState(stubwords)
    const [statistics,setStatistics] = useState(stubstat)


    async function getTrends() {
        axios
          .get("/getTrends")
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
                console.log(res.data[trend].statistics)
                stat[trend] =  res.data[trend].statistics.map((stat)=> 
                    {return {sentiment: stat.avgSentiment, emotion: stat.mainEmo, real:stat.avgFakiness}})

            }
            setTrends(trnd);
            setWords(wrds);
            setStatistics(stat)
        
          })
          .catch(() => {
            setTrends(stubtrending);
            setWords(stubwords);
            setStatistics(stubstat)
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