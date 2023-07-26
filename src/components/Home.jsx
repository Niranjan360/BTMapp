import { useEffect, useState } from "react";
import Movielist from "./Movielist";

const Home = () => {    

    let[movies , setMovies] = useState(null);

    useEffect(()=>{
            setTimeout(()=>{
                fetch("http://localhost:4000/movies")
                .then((res)=>{return res.json() })
                .then((data)=>{
                    console.log(data.length);
                    setMovies(data);
                })
            } , 3000)
    } , [])

    return ( 
        <div className="home">

        {movies==null && <div id="loader"></div>}

        {movies &&  <>
                        <Movielist movies={movies} title="All movie"/>
                        <Movielist movies={movies} title="Action movie"/>
                    </>}
        </div>
    );
}
export default Home;