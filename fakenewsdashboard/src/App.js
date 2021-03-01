import "./App.css";
import Temperature from "./component/dashboard/temperature.js";
import Emotion from "./component/dashboard/emotion.js";
import World from "./component/dashboard/globe.js";

import Trends from "./component/dashboard/trends.js";
import Sentiment from "./component/dashboard/sentiment.js";
import SideMenu from "./component/menu/side_menu.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/users/Login";
import Register from "./component/users/register";
import EmotionTweets from "./component/dashboard/emotion_tweets.js";
import { userContext } from "./utils/userContext";
import TrendView from "./component/dashboard/trend_view.js"
import TopicView from "./component/dashboard/Topic_view.js"
function App() {
  const [isAuthenticated, userHasAuthenticated] = useState({
    auth: false,
    username: "test",
    token: "",
  });

  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
      <userContext.Provider value={[isAuthenticated, userHasAuthenticated]}>
        <Router>
          <div>
            <SideMenu />
          </div>
          
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
                <Emotion /> <Temperature />
                <Trends /> 
                <Sentiment /><World />
                </div>
              </Route>
              </Switch>
            </div>
         
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
