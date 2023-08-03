import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Movielist from "./Movielist";
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const Search = () => {

    let {keyword} = useParams();

    let {data : movies , error , pending} = useFetch("http://localhost:4000/movies")

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