// import React, { useState, useEffect } from "react";
import ReactWordcloud from 'react-wordcloud';
import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'


export default function TopicBlock(props){
    let statistics = []
    for (let stat in props.statistics){
        statistics.push(<div><h4>{stat}  : {props.statistics[stat]} </h4> <br/></div>)
    }
    const [clicked,setClicked] = useState(false)
    if (clicked){
        return    <Redirect to={"/topic/"+props.id} />
    }
    return (
        <div className="Trend" onClick={() =>setClicked(true)}>
            <h2>{props.trend}</h2>

            <ReactWordcloud words={props.topic} size={[50, 50]}/><br/>
            <br/>
            
            {statistics}
        </div>

    )



}
