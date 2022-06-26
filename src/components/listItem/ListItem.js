import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons'
import React from 'react'
import './ListItem.scss'

export default function ListItem() {
    return (
        <div className='listItem'>
            <img src="https://woottoncommonsense.com/wp-content/uploads/2020/12/RgOWIjNBqW2ASCmQ3wuGb5GAYnDSRHd1EMipCwJI.jpeg" alt="" />
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
        </div>
    )
}
