const Navbar = () => {
    return ( 
        <nav>
            <div id="logo">
                <a href="/">
                    <span>🕷</span>
                    MoviesHUB
                </a>
            </div>
            <div id="searchbar">
                <input type="text" placeholder="Search Movies" />
                <button>search</button>
            </div>
            <div id="nav-link">
                <a href="/addmovie">Add Movie</a>
                <a href="/favmovie">Watchlist</a>
                <a href="/profile"  className='bx bxs-user-circle'> 
                </a>
            </div>
        </nav>
    );
}
export default Navbar;