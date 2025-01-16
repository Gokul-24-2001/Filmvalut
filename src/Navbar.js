import { MdMovieCreation } from "react-icons/md";
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <div className="p-1 d-flex gap-3 border border-2 bg- $light ">
            <h5><MdMovieCreation ></MdMovieCreation></h5> 
            <Link className="text-decoration-none" to="/"><h5>Home</h5></Link>
            <Link   className="text-decoration-none" to="/watchlist"><h5>watchlist</h5></Link>
        </div>
    )
}