import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";


const Moviedetails = () => {

    let {id} = useParams();

    let[movie , setMovie] = useState(null);
    let[error , setError] = useState(null);
    let[pending , setPending] = useState(true);
    let navigate = useNavigate();

    useEffect(()=>{
            setTimeout(()=>{

                fetch("http://localhost:4000/movies/" + id)
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
                    setMovie(data);
                    setPending(false);
                })
                .catch((err)=>{
                    setError(err.message);
                    setPending(false);
                })
            } , 1000)
    } , [])

    let handleDelete = ()=>{
        let x = window.confirm("Are you sure , do you want ti delete the movie ?");
        if(x)
        {
            fetch("http://localhost:4000/movies/"+id , {method:"DELETE"} )
            .then(()=>{
                navigate("/home");
            })
        }
    }

    return ( 
            <div>
                <Navbar/>

                {error!=null && <h1> {error} </h1>}

                {pending==true && <div id="loader"><BeatLoader color="#F2C744" size="25"/></div> }


                {movie && 
                            <div className="movie-details">
                                <img src={movie.posterurl} alt="" />
                                <div>
                                    <h1>{movie.moviename}</h1>
                                    <p>Hero : {movie.hero} , Heroine : {movie.heroine} </p>
                                    <p>Director : {movie.director}</p>
                                    <p>Gener : {movie.genre}</p>
                                    <p>production House : {movie.production}</p>
                                    <p>Cast : {movie.cast.join("  ,  ")} </p>
                                    <p>Languages : {movie.languages.join("  ,  ")}</p>
                                    <p>Story : {movie.synopsis}</p>
                                    <p><b>IMDB</b> : {movie.rating}</p>

                                </div>

                                <div className="trailer-cont">
                                    <h1>{movie.moviename} - Triler</h1>
                                    <iframe width="560" height="315" src={movie.trailerurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <Link to={`/edit/${id}`}> <button>Edit Movie</button></Link>
                                <button onClick={handleDelete}>Delete</button>

                            </div> }

                
                
            </div>);
}
export default Moviedetails;