import "../App.css";
export default function Moviecard({
  poster,
  movie_name,
  Addmovietowatchlist,
  movie,
  Removewatchlist,
  watchlist,
}) {
  function Checkwatchlist(movie) {
   
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;  // Movie is in the watchlist
      }
    }
    return false;  // Movie is not in the watchlist
  }
  

  return (
    <div
      className="card2 d-flex flex-column mb-3"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster})`,
        backgroundSize: "cover",
      }}
    >
      {/* <img src={poster} alt="image1"  />  */}
      {/* <p className='movie'>{movie_name} </p> */}
      <div className="movie">{movie_name}</div>
     {Checkwatchlist(movie)? <div
      className="d-flex flex-row-reverse m-3 fs-6"
      onClick={() => Removewatchlist(movie)}
    >
      <p style={{ backgroundColor: "gray", borderRadius: "100" }}>
        X
      </p>
    </div>
    :
      <div
      className="d-flex flex-row-reverse m-3 fs-6"
      onClick={() => Addmovietowatchlist(movie)}
    >
      <p style={{ backgroundColor: "gray", borderRadius: "360px" }}>
        &#128525;
      </p>
    </div>
    }
    </div>
  );
}
