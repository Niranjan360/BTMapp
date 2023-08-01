import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";

const Editmovie = () => {

    let moviename = useRef();    
    let hero = useRef();    
    let heroine = useRef();    
    let director = useRef();    
    let producer = useRef();    
    let cast = useRef();    
    let duration = useRef();    
    let release = useRef();    
    let rating = useRef();    
    let poster = useRef();    
    let banner = useRef();    
    let trailer = useRef();    
    let synopsis = useRef();  
    
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:4000/movies/"+id)
        .then(res=>res.json())
        .then((prevData)=>{
            moviename.current.value = prevData.moviename;
            hero.current.value= prevData.hero ;
            heroine.current.value= prevData.heroine ;
            director.current.value = prevData.director;
            producer.current.value  = prevData.production;
            cast.current.value = prevData.cast;
            duration.current.value = prevData.duration;
            // release.current.value = prevData.releasedate; not working
            rating.current.value = prevData.rating;
            poster.current.value = prevData.posterurl;
            banner.current.value = prevData.banner;
            trailer.current.value = prevData.trailerurl;
            synopsis.current.value = prevData.synopsis;
        })
    } , [])

    let handleEditmovie = (e)=>{
        e.preventDefault();

        let updatedMovie = {
                            "moviename": moviename.current.value ,
                            "hero": hero.current.value,
                            "heroine": heroine.current.value,
                            "director": director.current.value,
                            "production": producer.current.value,
                            "cast": cast.current.value.split(","),
                            "genre": "",
                            "duration": duration.current.value,
                            "releasedate": release.current.value,
                            "rating": rating.current.value,
                            "languages": [],
                            "posterurl": poster.current.value,
                            "banner": banner.current.value,
                            "trailerurl": trailer.current.value,
                            "synopsis": synopsis.current.value
                        }

        let geners = document.getElementsByName("gener");
        for(let i=0; i<geners.length ; i++)
        {
            if( geners[i].checked )
            {
                updatedMovie.genre =  updatedMovie.genre + " " + geners[i].value
            }
        }

        let lang = document.getElementsByName("lang");
        for(let i=0; i<lang.length ; i++)
        {
            if( lang[i].checked )
            {
                updatedMovie.languages.push(lang[i].value);
            }
        }

        fetch("http://localhost:4000/movies/"+id , 
                                                {
                                                    method : "PUT",
                                                    headers:{'Content-Type': 'application/json'},
                                                    body:JSON.stringify(updatedMovie)
                                                }
        )
        .then((res)=>{return (res.json());})
        .then((data)=>{ 
            toast.success("movie updated successfully");
            setTimeout(()=>{
                let res = window.confirm("Do you want to stay in same page or direct to details page ");
                console.log(res);
                if(res)
                {
                    navigate("/moviedetails/"+data.id);
                }
                else{
                    window.location.reload();
                }
            } , 3000)
        })

    }

    return ( 
        <>
        <Navbar/>

        <div className="add-movie">
            <h1>Edit Movie</h1>
            <ToastContainer />

            <form onSubmit={handleEditmovie}>
                <input type="text" placeholder="Movie name" ref={moviename}/>  
                <input type="text" placeholder="Hero" ref={hero}/>
                <input type="text" placeholder="Heroine" ref={heroine}/>
                <input type="text" placeholder="Director" ref={director}/>
                <input type="text" placeholder="Production house" ref={producer}/>
                <input type="text" placeholder="Cast" ref={cast}/>
                <fieldset>
                    <legend align="center">Select movie gener</legend>
                    <div className="gener-options">
                        <input type="checkbox" name="gener" value="Action"/><label>Action</label>
                        <input type="checkbox" name="gener" value="Drama" /><label>Drama</label>
                        <input type="checkbox" name="gener" value="Comedy" /><label>Comedy</label>
                        <input type="checkbox" name="gener" value="Suspense" /><label>Suspense</label>
                        <input type="checkbox" name="gener" value="Thriller" /><label>Thriller</label>
                        <input type="checkbox" name="gener" value="Divine" /><label>Divine</label>
                        <input type="checkbox" name="gener" value="Romance" /><label>Romance</label>
                        <input type="checkbox" name="gener" value="Sci-fi" /><label>Sci-fi</label>
                        <input type="checkbox" name="gener" value="Horror" /><label>Horror</label>
                        <input type="checkbox" name="gener" value="fiction" /><label>fiction</label>
                    </div>
                </fieldset>

                <input type="text" placeholder="duration in Hrs and min"  ref={duration} />
                <input type="date" placeholder="Release date" ref={release}/>
                <input type="number" min="1" max="10" step="0.1" placeholder="Ratings" ref={rating}/>

                <fieldset>
                <legend align="center">Select movie languages available</legend>

                    <div className="language-options">
                    <input type="checkbox" name="lang" value="Kannada"/><label>Kannada</label>
                    <input type="checkbox" name="lang" value="Hindi" /><label>Hindi</label>
                    <input type="checkbox" name="lang" value="Tamil" /><label>Tamil</label>
                    <input type="checkbox" name="lang" value="Telgu" /><label>Telgu</label>
                    <input type="checkbox" name="lang" value="Malayalam" /><label>Malayalam</label>
                    </div>
                </fieldset>

                <input type="url" placeholder="poster url" ref={poster}/>
                <input type="url" placeholder="banner url" ref={banner}/>
                <input type="url" placeholder="youtube trailer url" ref={trailer}/>

                <textarea cols="55" rows="7" placeholder="Synopsis" ref={synopsis}></textarea>

                <input type="submit" value="Update movie" />
            </form>

        </div>
        </>
    );
}
export default Editmovie;