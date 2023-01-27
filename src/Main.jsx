import { useEffect, useState } from 'react';
import React from 'react'
import './main.css'
import { db } from './Firebase';
const Main = () => {

  const [title, setTitle] = useState("")
  const [num, setNum] = useState(0)
  const [trailerUrl, setTrailerUrl] = useState("")
  const [username, setUsername] = useState("")
  const [desc, setDesc] = useState("")
  const [genre, setGenre] = useState("")
  const api_key = "api_key=9f02a73a699c175c26914cfc4ef6968e"
  const base_url = "https://api.themoviedb.org/3"
  const base_img_url = "https://image.tmdb.org/t/p/w500"
  const API_URL = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key 

  const findMovie = async (e) => {
    const mainUrl = `https://api.themoviedb.org/3/search/movie?${api_key}&query=${title}`  
    const data = await fetch(mainUrl);
    const movie = await data.json();
    // const trailerUrl = await movieTrailer(title);
    // console.log(trailerUrl);
    // const Num = movie.results.length;
    setDesc(movie?.results[num]?.overview);
    setTrailerUrl(movie?.results[num]?.poster_path);
    setNum(num + 1);
    if(num === movie.results.length){
      alert("No more movies to fetch, please reload and try again.")
    }
  }

  const addMovie = (e) => {
    e.preventDefault();
    db.collection('items').add({
      desc: desc,
      title: title ,
      trailerUrl: trailerUrl,
      username: username,
      genre: genre,
    })
    alert("Movie added successfully")
    window.location.reload();
  }
  const imgUrl = base_img_url + trailerUrl;

  return (
   <div className="antialiased  text-white-600 p-5">
    <h1 className="text-4xl font-bold mb-6">LOOP</h1>
   {/* //Generate Romantic Quotes here  */}
            <div x-show="card">
  <div className="space-y-4">

    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="card-nr">Username<span className="text-red-500">*</span></label>
      <input value={username} onChange={e => setUsername(e.target.value)} id="card-nr" className="text-sm text-white-800 bg-white border rounded leading-5 py-2 px-3 border-white-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="Enter Username..." />
    </div>

    <div className="flex space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">Movie Title<span className="text-red-500">*</span></label>
        <input value={title} onChange={e => setTitle(e.target.value)} id="card-expiry" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="What is the title of the movie?" />
      </div>
    </div>

    <div className="flex space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">Genre<span className="text-red-500">*</span></label>
        <input value={genre} onChange={e => setGenre(e.target.value)} id="card-expiry" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="What is the genre?" />
      </div>
    </div>
  </div>

  <div className="mt-6">
    <div className="mb-4">
      <button onClick={findMovie}className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Find</button>
    </div>
    <div className="mb-4">
      <button onClick={addMovie}className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Add</button>
    </div>
    {/* <div className="text-xs text-white-500 italic text-center">Reminder: You'll be Sacrificing 1:30:00 - 3:00:00 of your life</div>
    <div className="text-xs text-white-500 italic text-center">Twss Count, Aman: 3.5k, Betsi: 244</div> */}
   <p>{desc}</p>
    <img src={imgUrl}/>
  </div>
</div>
    </div>
      
  )
}

export default Main