import { useEffect, useState } from "react";
import Movielist from "./Movielist";
import Slider from "./Slider";
import BeatLoader from "react-spinners/BeatLoader";
import Navbar from "./Navbar";
import useFetch from "../Hooks/useFetch";

const Home = () => {    

    let {data : movies , error , pending} = useFetch("http://localhost:4000/movies");

    useEffect(()=>{
        let x =  localStorage.getItem("wishlist");
        if(x==null)
        {
            localStorage.setItem("wishlist" , "[]")
        }
    } , []);

    return ( 
        <>
            <Navbar/>
            <div className="home">

                    {error!=null && <h1> {error} </h1>}

                    {pending==true && <div id="loader"><BeatLoader color="#009e6f" size="25"/></div> }

                    {movies && <Slider movies={movies}/>}

                    {movies &&  <>
                    <Movielist movies={movies} title="All movies"/>

                    <Movielist movies={movies.filter((m)=>{ return m.rating>=8 })} title="Top rated movies"/>

                    <Movielist movies={movies.filter((m)=>{ return m.languages[0].toLowerCase() =="hindi" })} title="Bollywood"/>

                </>}
            </div>        

        </>
    );
}
export default Home;





