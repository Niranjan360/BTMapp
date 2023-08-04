import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movielist = ({movies , title}) => {

    let[wid , setWid] = useState([null]);

    useEffect(()=>{
        let wishlist = JSON.parse(localStorage.getItem("wishlist"));
        let x = wishlist.map((m)=>{ return m.id });
        setWid(x);
    })

    let add = (movie)=>{
        let wishlist = localStorage.getItem("wishlist");    // take prv array
        wishlist = JSON.parse(wishlist)                     // convert form json to js
        wishlist.push(movie);                               // adding the movie to wishlist array
        wishlist = JSON.stringify(wishlist);
        localStorage.setItem("wishlist" , wishlist);
        toast.success("movie added to wishlist");
    }

    let remove = (id)=>{
        let wishlist = JSON.parse(localStorage.getItem('wishlist'));   
        for (let i = 0; i < wishlist.length; i++) 
        {
            if(wishlist[i].id==id)
            {
                wishlist.splice(i,1);
            }
        }
        localStorage.setItem("wishlist" , JSON.stringify(wishlist));
        toast.warn("Movie removed from wishlist");
    }

    return ( 
        <>
            <h1 id="title">{title}</h1>
            <div className="movies-list">
                {
                    movies.map((m)=>{ return(
                        <div className="movie">

                            {wid.includes(m.id) && <i className='bx bxs-heart' onClick={()=>{remove(m.id)}}></i>}
                            {!wid.includes(m.id) && <i className='bx bx-heart' onClick={()=>{add(m)}}></i>}

                            <Link to={`/moviedetails/${m.id}`}>
                                <img src={m.posterurl}/>
                                <h1>{m.moviename}</h1>
                                <p>IMBD : {m.rating} </p>
                                <p>{m.genre}</p>
                                <p>{m.languages[0]}</p>
                            </Link>
                        </div>
                    ) })
                }
            </div>
            <ToastContainer/>
        </>
    );
}
export default Movielist;


