import React, { useState, useEffect } from "react";
import axios from "axios"; 
import TweetsList from './tweets_list'
export default function EmotionTweets(props){
    const [tweets,setTweets] = useState([])
    async function getEmotions() {
        axios
          .get("/getEmotionsTweet",{emotion:props.match.params.emo})
          .then((res) => {
            setTweets(res.data.tweets);
        
          })
          .catch(() => {
            setTweets([{id:"1361577298282094592",emotion:"happy",real:"fake", sentiment:-3},{id:"1361577298282094592",emotion:"happy",real:"true", sentiment:1}])
          });
      }
      useEffect(() => {
        getEmotions();
      }, []);
      return(
          <TweetsList tweets={tweets}/>
      )
}