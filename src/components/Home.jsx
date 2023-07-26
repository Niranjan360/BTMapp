import { useEffect, useState } from "react";

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

        {movies==null && <h1>Loading ..................</h1>}

        {movies &&  <>
                    <h1>All movies</h1>
                    <div className="movies-list">
                                    {
                                        movies.map((m)=>{ return(
                                            <div className="movie">
                                                <img src={m.posterurl}/>
                                                <h1>{m.moviename}</h1>
                                                <p>IMBD : {m.rating} </p>
                                                <p>{m.genre}</p>
                                                <p>{m.languages[0]}</p>
                                            </div>
                                        ) })
                                    }
                    </div>
                    </>}
        </div>
    );
}
export default Home;