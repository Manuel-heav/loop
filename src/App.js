import { useEffect, useState } from 'react';
import './app.css'
import Main from './Main';
import Showcase from './Showcase';

function App() {


  const [image, setImage] = useState("");
    const api_key = "api_key=9f02a73a699c175c26914cfc4ef6968e"
    const base_url = "https://api.themoviedb.org/3"
    const base_img_url = "https://image.tmdb.org/t/p/w500"
    const API_URL = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key 

    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then(datas => (
            datas.results.map(data => setImage(data.poster_path))
        ))

    }, [API_URL]);

    const backImg = base_img_url + image;

    const myStyle={
      backgroundImage:"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  
  return (
    <div className="app" style={{myStyle}}>
          <Main />
    </div>
  );
}

export default App;
