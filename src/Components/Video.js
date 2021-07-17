import React, {useState} from 'react'
import thumbUp from '../Assets/thumb-up.svg'
import thumbDown from '../Assets/thumb-down.svg'
import share from '../Assets/share.svg'
import playlistPlus from '../Assets/playlist-plus.svg'
import dots from '../Assets/dots-horizontal.svg'
import blue from '../Assets/blue-like-button.png'
import heyGuysItsMeVideoGameDunkey from '../Assets/unnamed.jpg'
import check from '../Assets/check-circle.svg'
import Banner from './Banner'
import amongus from '../Assets/amongus.jpg'
import photo from '../Assets/photo.jpg'

function Video(){
    const [liked, setLiked] = useState(false)
    const [disLiked, setDisLiked] = useState(false)

    function handleClick(e){
        if(e.target.className === 'up'){
            setDisLiked(false)
            setLiked(!liked)
        }
        else{
            setLiked(false)
            setDisLiked(!disLiked)
        }
    }
    return(
        <div>
            <div className = 'videoPlayer'>
                <iframe width="1000" height="550" src="https://www.youtube.com/embed/MIchMEqVwvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br></br>
            <div className = 'videoDescription'>
                <h2 className = 'ImDoneWithAmongusTuesdays'>I'm Done With Among us Tuesdays</h2>
                <h4 className = 'views'>2,631,809 views Dec 8, 2020</h4>

                <img src = {liked ? blue : thumbUp} alt = 'thumb' className = 'up' onClick = {handleClick}></img>
                <h4 className = 'amongus'>263K</h4>

                <img src = {disLiked ? blue : thumbDown} alt = 'thumb' className = {disLiked ? 'down2' : 'down'} onClick = {handleClick}></img>
                <h4 className = 'amongus2'>2.1K</h4>

                <img src = {share} alt = 'share' className = 'share'></img>
                <h4 className = 'amongus3'>SHARE</h4>

                <img src = {playlistPlus} alt = 'playList' className = 'playListPlus'></img>
                <h4 className = 'amongus4'>SAVE</h4>

                <img src = {dots} alt = 'dots' className = 'dots'></img>
            </div>
            <hr className = 'mainHR'></hr>
            <hr className = 'toby'></hr>
            <div className = 'youtuberDescription'>
                <img src = {heyGuysItsMeVideoGameDunkey} className = 'heyGuysItsMeVideoGameDunkey' alt = 'HeyGuys Its ME VideoGameDunkey'></img>
                <h4 className = 'amongus5'>videogamedunkey</h4>
                <h4 className = 'amongus6'>6.79M subscribers</h4>
                <img src = {check} className = 'checked' alt = 'check'></img>

                <div className = 'subscribe'>
                    <h4 className = 'textsub'>SUBSCRIBE</h4>
                </div>
                <p className = 'dunkey'> 
                    The end of an era. <br></br>
                    new video on dunk tank https://www.youtube.com/watch?v=xxK77...<br></br>
                    subscribe to my twitch https://www.twitch.tv/dunkstream<br></br>
                    subscribe to my twitter https://twitter.com/vgdunkey<br></br>
                    subscribe to my wife https://www.youtube.com/watch?v=5td7P...<br></br>
                    subscribe to my store https://dunkeyscastle.com/<br></br>
                </p>
            </div>
            <div className = 'Amonguse'>
                <Banner src = {amongus} name = 'Among Us' date = '2018' gaming = 'GAME'/>
            </div>
            <div className = 'gamer'>
                <Banner src = {photo} name = 'Gaming' gaming = 'GAMING' />
            </div>
        </div>
    )
}

export default Video