import Moviecard from "./compnents/movie-card";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from './compnents/pagination';
export default function Movies({watchlist,Addmovietowatchlist,Removewatchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageno,setPageno]=useState(1);
  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d0283349495194dd3bbf36d8ade2a72d&language=en-US&page=${pageno}`
      )
      //    .then(res=> console.log(res.data.results));
      .then((res) => setMovies(res.data.results));
  }, [pageno]);
const handleprev=()=>{
  if(pageno==1){
    setPageno(1);
  }
  else{
    setPageno(pageno-1);
  }
}
const handlenext=()=>{
  setPageno((pageno)=>pageno+1);
}

//  console.log(movies);
 console.log(watchlist);
  return (
    <div>
      <div className=" fw-3 p-3 text-center">Trending movies</div>
      <div className="d-flex flex-row= justify-content-around px-5 py-1 flex-wrap">
    
        {movies.map((movieob,index,array) => {
          // const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

          return (
            <div className="card1 mt-4">
            
              <Moviecard
                movie_name={movieob.original_title}
                poster={movieob.poster_path}
                Addmovietowatchlist={Addmovietowatchlist}
             movie={movieob}
             Removewatchlist={Removewatchlist}
             watchlist={watchlist}
              />
            </div>
          );
        })}

        {/* {movies.map((movieob,index,array) =>{
          return(
            <div className="card1 mt-4">
            
             <Moviecard
               movie_name={movieob.original_title}
               poster={movieob.poster_path}
               Addmovietowatchlist={Addmovietowatchlist}
            movie={movieob}
            Removewatchlist={Removewatchlist}
            watchlist={watchlist}
             />
           </div>
          )
        })} */}
      </div>
      <Pagination prev={handleprev} next={handlenext} pagenumber={pageno}/>
    </div>
  );
}
