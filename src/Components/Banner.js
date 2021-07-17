import React from 'react'
import chevron from '../Assets/che.svg'

function Banner(props){
    console.log(props)
    return(
        <div className = 'banner'>
            <img src = {props.src} className = 'amo' alt = {props.src}></img>
            <h4 className= 'gameName'>{props.name}</h4>
            {props.date ? <h4 className = 'date'>{props.date}</h4> : null}
            <h4 className = 'explore'>BROWSE {props.gaming}</h4>
            <img className = 'cur' src = {chevron} alt = 'chevron or whatever the fuck a chevron is woxihuanchibingchiling'></img>
        </div>
    )
}

export default Banner