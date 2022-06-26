import { PlayArrow, InfoOutlined } from '@material-ui/icons'
import React from 'react'
import './Featured.scss'

export default function Featured({ type }) {
    return (
        <div className='featured'>
            {type && (
                <div className="catagory">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option >Genre</option>
                        <option value="adventure">Adventure</option>
                    </select>
                </div>
            )}
            <img src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2022/6/25/original/rowanatkinson.jpg" alt="pic" />
            <div className="info">
                <img src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQN4Zlf6kgJSks0oM0N7PV_DlpEjBdCW8GmmfUqV6lkpVEqJmw-xWuw4EpLbY5YiadOk21Ng0aJKzDYfbR1Wspssaa1R1p4XCSxFqjsDifitgGhIRUVqIq-r64K22jNmXfYxQaAG6qlHL_PLHYpxfHqyZOxOd7z9aN9labuD_iIrHl62QJ6N-w.png?r=6c3" alt="" />
                <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quos molestiae tempore dolorem enim eaque similique quae temporibus molestias voluptas accusamus tempora, repellendus totam quis, consectetur, ipsum distinctio vel recusandae.</span>
                <div className="buttons">
                    <button className="play"><PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more"><InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
