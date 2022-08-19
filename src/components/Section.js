import React from "react"
import '../App.css'

export default function Section(props){
    return(

    <div id="sectionOrigin" className="sectionOrigin">
        <div className="sectionContent">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        <div className="sectionImage">
            <img src={`../images/${props.coverImg}`} alt="" id="coffeeImage" className="sectionOriginImage"/>
        </div>
        
        <div className="originHeaderContent"></div>
    </div>
    )
}