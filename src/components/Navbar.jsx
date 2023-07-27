import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div id="logo">
                <Link to="/">
                    <span>🕷</span>
                    MoviesHUB
                </Link>
            </div>
            <div id="searchbar">
                <input type="text" placeholder="Search Movies" />
                <button>search</button>
            </div>
            <div id="nav-link">
                <Link to="/addmovie">Add Movie</Link>
                <Link to="/favmovie">Watchlist</Link>
                <Link to="/profile"  className='bx bxs-user-circle'> </Link>
            </div>
        </nav>
    );
}
export default Navbar;