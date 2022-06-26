import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './ListItem.scss'

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false)

    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"



    return (
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="https://woottoncommonsense.com/wp-content/uploads/2020/12/RgOWIjNBqW2ASCmQ3wuGb5GAYnDSRHd1EMipCwJI.jpeg" alt="" />
            {isHovered && (
                <React.Fragment>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow />
                            <Add />
                            <ThumbUpAltOutlined />
                            <ThumbDownOutlined />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className=''>17+</span>
                            <span>1998</span>
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi sed corrupti ex eos quasi perferendis cumque totam earum accusantium excepturi
                        </div>
                        <div className="genre">
                            Action
                        </div>

                    </div>
                </React.Fragment>
            )}
        </div>
    )
}
