import Addmovie from "./components/Addmovie";
import Home from "./components/Home";
import Moviedetails from "./components/Moviedetails";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Watchlist from "./components/Watchlist";
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() 
{
  return(
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addmovie" element={<Addmovie/>}/>
          <Route path="/favmovie" element={<Watchlist/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
