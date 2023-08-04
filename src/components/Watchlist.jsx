import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Movielist from "./Movielist";

const Watchlist = () => {

    let[favMovies , setFav] = useState(null);

    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("wishlist"));
        setFav(x);
    } )

    return ( 
        <>
            <Navbar/>
            <div className="fav-movies">
                {favMovies && <Movielist movies={favMovies} title="Wishlist" />}

                {favMovies && favMovies.length==0 && <h2>No movies in wishlist please add some and visit</h2>}
            </div>
        </>
    );
}
export default Watchlist;