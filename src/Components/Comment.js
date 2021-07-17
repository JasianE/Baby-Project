import React from 'react'

function Comment(props){
    return(
        <div>
            <img src = {props.src} alt = 'image' className = 'profilePicture'></img>
        </div>
    )
}

export default Comment