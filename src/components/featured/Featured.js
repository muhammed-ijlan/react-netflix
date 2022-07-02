import { PlayArrow, InfoOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Featured.scss'

export default function Featured({ type, setGenre }) {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjk4NWY5YTg5ODQ0YjUzOTk5MjQwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjQyMTY0OSwiZXhwIjoxNjU2ODUzNjQ5fQ.ofJhGdBu1Nr1hc9K-BJ5C-sEUt2Q0ubEWZU3VPX91Hs"
                    }
                }
                )
                setContent(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }

        getRandomContent();
    }, [type])


    return (
        <div className='featured'>
            {type && (
                <div className="catagory">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                        <option >Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="pic" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">{content.description}</span>
                <div className="buttons">
                    <button className="play"><PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more"><InfoOutlined />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
