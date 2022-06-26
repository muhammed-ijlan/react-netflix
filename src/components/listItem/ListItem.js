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
            </div>
        </div>
    )
}
