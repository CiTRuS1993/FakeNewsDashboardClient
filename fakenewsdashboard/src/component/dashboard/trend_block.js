// import React, { useState, useEffect } from "react";
import ReactWordcloud from 'react-wordcloud';
import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'


function TrendBlock(props){
    let statistics = []
    for (let stat in props.statistics){
        statistics.push(<div><h4>{stat}  : {props.statistics[stat]} </h4> <br/></div>)
    }
    const [clicked,setClicked] = useState(false)
    if (clicked){
        return    <Redirect to={"/trend/"+props.trend} />
    }
    return (
        <div className="Trend" onClick={() =>setClicked(true)}>
            <h2>{props.trend}</h2>

            <ReactWordcloud words={props.words} size={[50, 50]}/><br/>
            <br/>
            
            {statistics}
        </div>

    )



}

export default TrendBlock