import "./watchlist.css";
import genereids from './genreids';
import { MdOutlineArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { useEffect, useState } from "react";
import image from "./2021-04-04.jpg";
export default function Watchlist({watchlist,setWatchlist,Removewatchlist}) {
 const [search,setSearch]=useState("");
 const[genre,setGenre]=useState(["All generes"]);
 const [currentgenre,setCurrentGenre]=useState('All generes')
const handlesearch=(event)=>{
setSearch(event.target.value);
}
const sortincrement=()=>{
 let sortedinc=watchlist.sort((moviea,movieb)=>{
  return moviea.vote_average-movieb.vote_average
 });
 setWatchlist([...sortedinc]);
}
const sortdecrement=()=>{
  let sorteddec=watchlist.sort((moviea,movieb)=>{
   return movieb.vote_average - moviea.vote_average
  });
  setWatchlist([...sorteddec]);
 }
 const sortpopularityasc=()=>{
  
  let popularityasc=watchlist.sort((moviea,movieb)=>{
      return moviea.popularity-movieb.popularity
    })
    setWatchlist([...popularityasc]);
  }
 
 
 
useEffect(()=>{
 let temp=watchlist.map((movieobj)=>{
  return genereids[movieobj.genre_ids[0]];
 })
 temp=new Set(temp);
 setGenre(["All generes",...temp]);
},[watchlist])
const handlegenre=(genre)=>{
setCurrentGenre(genre);
}

console.log(genre)
  return (  
    <div>
      
        <div className="d-flex justify-content-center mt-4">
           {genre.map((genre)=>{
            return <div onClick={()=>{handlegenre(genre)}} className={currentgenre==genre?"action mx-3 text-dark text-center d-flex justify-content-center":"action bg-secondary mx-3 text-dark text-center d-flex justify-content-center"}>{genre}</div>
           })
           } 
            {/* <div className="action mx-3 d-flex justify-content-center">action</div> */}
        </div>
      <div className="d-flex justify-content-center mt-4">
        <input
          type="text"
          onChange={handlesearch}
          value={search}
          placeholder="search movie"
          className="px-3"
          style={{
            backgroundColor: "#ccd1d1",
            border: "none",
            height: "30px",
            width: "200px",
          }}
        />
       <p>{search}</p> 
      </div>
      <div className="mt-3">
        <table className="border b-2 mx-4 w-100 text-center">
          <thead className="border b-2">
            <tr>
              <th>Name</th>
            <th><div className="d-flex justify-content-center m-2 px-1"><p onClick={sortincrement}><MdOutlineArrowUpward/></p><th>Ratings</th><p onClick={sortdecrement}><MdArrowDownward/></p></div></th>
             {/* <th>Ratings</th> */}
              {/* <th>popularity</th> */}
             <th> <div className="d-flex justify-content-center m-2 px-1"><th onClick={sortpopularityasc}><MdOutlineArrowUpward/></th><th>popularity</th><th onClick={sortdecrement}><MdArrowDownward/></th></div></th>

              <th>genre</th>
            </tr>
          </thead>
          <tbody className="">
          
      {watchlist.filter((movieobj)=>{
      
        if(currentgenre==='All generes'){
           return true;
        }
        else{
          return genereids[movieobj.genre_ids[0]]===currentgenre;
        }
      }).
filter((movobj)=>{
  return search===""?movobj:movobj.original_title.toLowerCase().includes(search)})
  .map((item)=>{
        return(
          
          <tr key={item.id}>    
            <td className="py-2">
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}` }
            height="150px"
            width="200px"
            alt="adding image"
          />
          <div className="table_movie_name"> {item.original_title}</div>
        </td>
        <td className="mt-4 px-2 py-2">{item.vote_average}</td>
        <td className="mt-4 px-2 py-2"> {item.popularity}</td>
        <td className="mt-4 px-4 py-2"> {genereids[item.genre_ids[0]]}</td>
        <td className="mt-4 px-4 py-2 text-danger"onClick={()=>Removewatchlist(item)}> delete</td>

      </tr>
        )
      })}
          
          </tbody>
        </table>
      </div>
    </div>
  );
}
