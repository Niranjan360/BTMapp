import { Link } from "react-router-dom";

const Movielist = ({movies , title}) => {

    return ( 
        <>
            <h1>{title}</h1>
            <div className="movies-list">
                {
                    movies.map((m)=>{ return(
                        <div className="movie">
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
        </>
    );
}
export default Movielist;


