import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    let [searchKey , setSearchKey] = useState("");
    let [movienames , setmovienames] = useState([]);
    let [filteredMovienames , setfilteredMovienames] = useState([]);

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
            let m = data.map((m)=>{ return m.moviename})
            console.log(m);
            setmovienames(m);
            m = m.filter((mName)=>{ return mName.toLowerCase().startsWith(searchKey.toLowerCase())})
            setfilteredMovienames(m);
        })
    } , [searchKey])

    let[menu , setMenu] = useState(false);
    
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

                {filteredMovienames && searchKey.length>0 && 
                <div id="suggestion">
                    {
                        filteredMovienames.map((mName)=>{ return(
                        <Link to={`/search/${mName}`}>
                            <p onClick={(e)=>{ setSearchKey(e.target.innerText)}}>{mName}</p>
                        </Link>
                        )})
                    }
                </div>}

            </div>
            <div id="nav-link">
                <Link to="/addmovie">Add Movie</Link>
                <Link to="/favmovie">Watchlist</Link>
                <Link to="/profile"  className='bx bxs-user-circle'> </Link>
            </div>
            <div id="hamberger" onClick={()=>{setMenu(!menu)}}>
            {menu ?     <i class='bx bx-menu-alt-left' ></i> : 
                        <i class='bx bx-menu'></i>
                        }
            </div>
            {menu && <div id="menu">
                        <Link to="/addmovie">Add Movie</Link>
                        <Link to="/favmovie">Watchlist</Link>
                        <Link to="/profile">Profile</Link>
                    </div>}
        </nav>
    );
}
export default Navbar;