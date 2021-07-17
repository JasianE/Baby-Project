import React, {useState} from 'react'
import './general.css'
import menu from '../Assets/menu.svg'
import youtube from '../Assets/youtube.svg'
import magnify from '../Assets/magnify.svg'
import video from '../Assets/video-plus.svg'
import apps from '../Assets/apps.svg'
import dots from '../Assets/dots-vertical.svg'
import account from '../Assets/account-circle.svg'

function Nav(){
    const [searchBar, setSearchBar] = useState('')

    function handleChange(e){
        e.preventDefault()
        setSearchBar(e.target.value)
    }

    return(
        <nav className = 'navbar'>
            <img src = {menu} alt = 'menu' className = 'menu'></img>
            <img src = {youtube} alt = 'youtube' className = 'youtube'></img>
            <h1 className = 'youtubeText'>Youtube</h1>
            <form>
                <input 
                    className = 'searchBar'
                    type = 'text'
                    name = 'searchBar'
                    onChange = {handleChange}
                    value = {searchBar}
                    placeholder = 'Search'
                />
            </form>
            <div className = 'trickster'>
                <img className = 'glass' src = {magnify} alt = 'magnifying glass'></img>
            </div>
            <img className = 'video' src = {video} alt = 'video'></img>
            <img className = 'apps' src = {apps} alt = 'apps'></img>
            <img className = 'dots' src = {dots} alt = 'dots'></img>
            <div className = 'accountCircle'>
                <img className = 'accountCircleImage' src = {account} alt = 'accountCircleImage'></img>
                <h2 className = 'signIn'>SIGN IN</h2>
            </div>
        </nav>
    )
}

export default Nav