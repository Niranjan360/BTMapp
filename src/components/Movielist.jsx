const Movielist = ({movies , title}) => {

    return ( 
        <>
            <h1>{title}</h1>
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
        </>
    );
}
export default Movielist;