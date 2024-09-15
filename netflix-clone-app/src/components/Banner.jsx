import React, { useState, useEffect } from 'react';
import './Banner.css';
import instance from './axios';
import movieRequestUrl from './requetUrls';
function Banner() {
  const [movie, setMovie] = useState([]);
   useEffect(()=>{
    async function fetchBannerData()
        {
        const banner = await instance.get(movieRequestUrl.fetchNetflixOriginals);
        setMovie(banner?.data.results[Math.floor(Math.random() * banner.data.results.length -1)]);
        return banner;
      }
    fetchBannerData();
   }, []);
 console.log(movie);

 function truncate(str, n){
    return str?.length >n ? str.subtr(0, 0 -1) + "..." :str;
 }
  return (
  <header className="banner"
      style={{
    backgroundSize:"cover",
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    backgroundPosition:"center center",
     }}
     >

   <div className = "banner__contents">
        <h1 className ="banner__title">
           {movie?.title|| movie?.name || movie.original_name }</h1>
        <div className = "banner__buttons">
            <button classname = "banner__button">Play</button>
            <button classname = "banner__button">My List</button>
        </div>
        <h1 className = "banner__description">{truncate(movie?.overview, 150)} </h1>
    </div>

   <div className="banner__fadeBotton"/>
 </header>);
  }

export default Banner;
