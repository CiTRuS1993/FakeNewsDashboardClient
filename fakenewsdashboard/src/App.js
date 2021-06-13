import "./App.css";
import Temperature from "./component/dashboard/temperature.js";
import Emotion from "./component/dashboard/emotion.js";
import World from "./component/dashboard/globe.js";
import { Link } from "react-router-dom";
import Trends from "./component/dashboard/trends.js";
import Sentiment from "./component/dashboard/sentiment.js";
import SideMenu from "./component/menu/side_menu.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/users/Login";
import Register from "./component/users/register";
import EmotionTweets from "./component/dashboard/emotion_tweets.js";
import axios from "axios"; 

import { userContext } from "./utils/userContext";
import TrendView from "./component/dashboard/trend_view.js"
import TopicView from "./component/dashboard/Topic_view.js"
axios.defaults.baseURL = process.env.PUBLIC_URL || "http://localhost:5000";
function App() {
  const [isAuthenticated, userHasAuthenticated] = useState({
    auth: false,
    username: "test",
    token: "",
  });
  console.log('public url: ', process.env.PUBLIC_URL)
  return (
    <div className="App">
      <userContext.Provider value={[isAuthenticated, userHasAuthenticated]}>
      <Router basename={process.env.PUBLIC_URL}> 
      <header className="logo" align='left'>
       {/* <h1>Fake News Dashboard</h1> */}
       {/* <div className="button1"> */}
        <Link to="/" ><button className="dashboardbtn">Dashboard</button></Link>
      {/* </div> */}
      </header>
      
      <div className='body'>
      
        
          {/* <div className='menu'> 
            <SideMenu />
          </div> */}
          
            <div className="Content">
            <Switch>
              
              <Route path="/login">
                <Login />
                </Route>
                <Route exact path="/emotion_tweets/:emo" component={EmotionTweets} />
                <Route exact path="/trend/:trend" component={TrendView} />
                <Route exact path="/topic/:topic" component={TopicView} />

                
                <Route path="/register">
                <Register />
                </Route>
                <Route path="/">
                <div>
                  <div className='little_space'/>
                  <div className='row'>
                    <div className= 'right_space'/>
                    <div className= 'right_space'/>
                    <div className='column'>
                      {/* <h3>Overall Current Data analysis</h3> */}
                      <div className='title1'/>
                      <Temperature />
                      <div className='space'/>
                      <Emotion /> 
                    </div>
                    <div className='right_space'/>
                    <div className= 'right_space'/>

                    <div className='column'>
                      {/* <h3>Overall tweets sentiment classification over time</h3> */}
                      <div className='title2'/>
                      {/* <div className='big_space'/> */}
                      <div className='little_space'/>
                      <Sentiment />
                    </div>
                  </div>
                <div className='big_space'/>
                {/* <h3>Currently Hot trending topics</h3>
                <h5>Google Trends trending topics analysis in the past 24 hours</h5> */}
                <div className='title3'/>
                <div className='title4'/>
                <Trends /> 
                {/* <h3>Overall tweets sentiment classification over time</h3>
                <Sentiment /> */}
                {/* <World /> */}
                </div>
              </Route>
              </Switch>
            </div>
         
        
      </div>
      </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
