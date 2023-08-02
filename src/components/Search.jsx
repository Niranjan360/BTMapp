import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Movielist from "./Movielist";
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect, useState } from "react";

const Search = () => {

    let {keyword} = useParams();
    let[movies , setMovies] = useState(null);
    let[error , setError] = useState(null);
    let[pending , setPending] = useState(true);

    useEffect(()=>{
            setTimeout(()=>{
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
                    setMovies(data);
                    setPending(false);
                })
                .catch((err)=>{
                    setError(err.message);
                    setPending(false);
                })

            } , 1000)
    } , [])

    return ( 
        <>
            <Navbar/>
            <div className="search-comp" style={{padding:"10px 80px"}}>
                {error!=null && <h1> {error} </h1>}

                {pending==true && <div id="loader"><BeatLoader color="#009e6f" size="25"/></div> } 

                {movies && <Movielist   movies={movies.filter((m)=>{ return m.moviename.toLowerCase().startsWith(keyword.toLowerCase())})} 
                                        title={`search result for : ${keyword}`}/>}
            </div>
        </>

    );
}
export default Search;