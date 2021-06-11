import React, { useState, useEffect } from "react";
import axios from "axios"; 
import ReactWordcloud from 'react-wordcloud';
import TopicBlock from './topic_block'
export default function TrendView(props){
    const [topics,setTopics] = useState([]);
    
    
    async function getTopics() {
        axios
          .get("/api/getTopics",{trend:props.match.params.trend})
          .then((res) => {

            setTopics( res.data.topics);
        
          })
          .catch(() => {
            setTopics([{id:0,topic:[{text:"Donald",value:50},{text:"Trump",value:45}],statistics:{sentiment:2,emotion:"happy",real:"fake"}},{id:1,topic:[{text:"liar",value:25},{text:"success",value:45},{text:"cheap",value:30}],sentiment:2,statistics:{sentiment:-1, emotion:"happy",real:"true"}}])
          });
      }
      useEffect(() => {
        getTopics();
      }, []);

      const topicsView = topics.map((topic) =><TopicBlock id={topic.id} topic={topic.topic} statistics={topic.statistics} />)

      return(
          <div className="Trend">
              {topicsView}
          </div>
      )

}