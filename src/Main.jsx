import React, { useEffect, useState } from 'react'

const Main = () => {

    const [movies, setMovies] = useState([]);
    const api_key = "api_key=9f02a73a699c175c26914cfc4ef6968e"
    const base_url = "https://api.themoviedb.org/3"
    const base_img_url = "https://image.tmdb.org/t/p/w500"
    const API_URL = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key 

    const randomNum = Math.floor(Math.random() * movies.length);
    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }, [API_URL]);
    setTimeout(() => {
        const backImg = base_img_url + movies[randomNum].backdrop_path;
        console.log(backImg)
    }, 1000)


  return (  
    <div className="main">

    </div>
  )
}

export default Main