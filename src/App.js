import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Movies from './movies';
import Watchlist from './watchlist';
import Bannar from './compnents/bannar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState,useEffect } from 'react';
function App() {
  const[watchlist,setWatchlist]=useState([]);
  const Addmovietowatchlist=(movie)=>{
    let NewlyAddedwatchlist=[...watchlist,movie] //destructuring 
    localStorage.setItem('moviename',JSON.stringify(NewlyAddedwatchlist)); // convert [object] into string..
  setWatchlist(NewlyAddedwatchlist);
  }
   const Removewatchlist=(movie)=>{
  const Removelist=watchlist.filter((watchlistitem,index)=>{
    return watchlistitem.id!==movie.id
  }
  )
  setWatchlist(Removelist);
  localStorage.setItem("moviename",JSON.stringify(Removelist));
   }
   useEffect(()=>{
    let getmoviefromlocalstorage=localStorage.getItem('moviename');
    setWatchlist(JSON.parse(getmoviefromlocalstorage));
   },[])
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Bannar /> <Movies watchlist={watchlist} 
          Addmovietowatchlist={Addmovietowatchlist} Removewatchlist={Removewatchlist} /></>} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist}setWatchlist={setWatchlist}Removewatchlist={Removewatchlist}/>} />

        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
