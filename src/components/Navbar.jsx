import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    let [searchKey , setSearchKey] = useState("");
    let[movienames , setMovienames]= useState(null);
    let[filteredname , setfilteredname]= useState(null);


    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{
            if(res.ok==true){
                return res.json() 
            }
            else{
                throw new Error('Sorry not data found for this please try for different')
            }
        })
        .then((data)=>{
            let m = data.map((movie)=>{ return movie.moviename});
            setMovienames(m);
            m = movienames.filter((name)=>{ return name.toLowerCase().startsWith(searchKey.toLowerCase())});
            setfilteredname(m);
        })
    } , [searchKey])
    
    return ( 
        <nav>
            <div id="logo">
                <Link to="/">
                    <span>🕷</span>
                    MoviesHUB
                </Link>
            </div>
            <div id="searchbar">
                <input type="text" placeholder="Search Movies" 
                value={searchKey} onChange={(e)=>{setSearchKey(e.target.value);  }} />

                <Link to={`/search/${searchKey}`}><button>search</button></Link>

                {movienames && searchKey.length>0  && 
                <div id="suggestion">
                    {
                        filteredname.map((name)=>{ return(<p>{name}</p>)})
                    }
                </div>}

            </div>
            <div id="nav-link">
                <Link to="/addmovie">Add Movie</Link>
                <Link to="/favmovie">Watchlist</Link>
                <Link to="/profile"  className='bx bxs-user-circle'> </Link>
            </div>


        </nav>
    );
}
export default Navbar;