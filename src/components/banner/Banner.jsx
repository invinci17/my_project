import React from 'react'
import './Banner.css'

const imageUrl = "https://media.istockphoto.com/id/1408387705/photo/social-media-marketing-social-issues-social-gathering.jpg?s=1024x1024&w=is&k=20&c=46_sy24JgGBYHE8MjS8Yh9LSJpEteRWiAEF5YoRITpk="

const Banner = () => {
  return (
    <div className='headerContainer'>
    <div  className={"player-wrapper flex-basis"}>
                        <div className="react-player">
                            <img src={imageUrl} alt="asdasdasdasd"/>
                        </div>
                    </div>
                    </div>
  )
}

export default Banner