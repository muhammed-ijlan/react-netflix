import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ListItem.scss'

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            try {

                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjk4NWY5YTg5ODQ0YjUzOTk5MjQwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjQxMDEwOSwiZXhwIjoxNjU2ODQyMTA5fQ.2qPjfs_rPxn-3eT-4xvueyf7R2sKkzXEKWDwzh3BZ3s"
                    }
                })

                setMovie(res.data)

            } catch (err) {
                console.log(err)
            }
        }

        getMovie();
    }, [item])

    return (
        <Link to={{ pathname: "/watch", movie: movie }}>

            <div className='listItem'
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={movie.imgSmall} alt="img" />
                {isHovered && (
                    <React.Fragment>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className='icon' />
                                <Add className='icon' />
                                <ThumbUpAltOutlined className='icon' />
                                <ThumbDownOutlined className='icon' />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className='limit'>{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="description">
                                {movie.description}
                            </div>
                            <div className="genre">
                                {movie.genre}
                            </div>

                        </div>
                    </React.Fragment>
                )}
            </div>
        </Link>
    )
}
