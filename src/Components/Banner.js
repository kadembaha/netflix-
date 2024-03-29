import React,{ useState , useEffect} from 'react';
import './Banner.css';
import requests from '../Requests';
import axios from '../axios';

function Banner() {
    
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            
        return request;
            }
            fetchData();
    }, [])
    function truncate(description,n){
        console.log(description?.length);
        console.log(n);
        return description?.length > n ? description.substr(0, n-1)+'....': description;
        
    }
    return (
       <header className="banner" style={{
           backgroundSize : "cover",
           backgroundImage :`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
           backgroundPosition:"center center",
       }}>
          <div className="banner__content">
              <h1 className="banner__title">
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className="banner__buttons">
                  <button className="banner__button">Play</button>
                  <button className="banner__button">My List</button>
              </div>
              <h1 className="banner_description">
                  {truncate(movie?.overview ,150)}
              </h1>
          </div> 
          <div className="banner__fadeBottom">

          </div>

       </header>
           )
}

export default Banner;
