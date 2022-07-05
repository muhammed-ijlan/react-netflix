import React, { useEffect, useState } from 'react'
import './Row.css'

export default function Home({ data }) {
    const base_url = "https://image.tmdb.org/t/p/original"



    return (
        <div className='row'>
            <h2>Netflix Originals</h2>
            <div className='rowPosters'>
                {data.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} key={movie.id} alt="" className={`rowPoster`}></img>
                ))}
            </div>
        </div>
    )
}
