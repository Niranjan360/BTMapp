import { useEffect, useState } from "react";
import Movielist from "./Movielist";

const Home = () => {    

    let[movies , setMovies] = useState(null);
    let[error , setError] = useState(null);
    let[pending , setPending] = useState(true);

    useEffect(()=>{
            setTimeout(()=>{

                fetch("http://localhost:4000/movies")
                .then((res)=>{
                    if(res.ok==true)
                    {
                        return res.json() 
                    }
                    else
                    {
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
            } , 3000)
    } , [])

    return ( 
        <div className="home">

        {error!=null && <h1> {error} </h1>}

        {pending==true && <div id="loader"></div>}

        {movies &&  <>
                        <Movielist movies={movies} title="All movies"/>

                        <Movielist movies={movies.filter((m)=>{ return m.rating>=8 })} title="Top rated movies"/>

                        <Movielist movies={movies.filter((m)=>{ return m.languages[0].toLowerCase() =="hindi" })} title="Bollywood"/>

                    </>}
        </div>
    );
}
export default Home;





