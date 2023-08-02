import Addmovie from "./components/Addmovie";
import Editmovie from "./components/Editmovie";
import Home from "./components/Home";
import Login from "./components/Login";
import Moviedetails from "./components/Moviedetails";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Protector from "./components/Protector";
import Search from "./components/Search";
import Signup from "./components/Signup";
import Watchlist from "./components/Watchlist";
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() 
{
  return(
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<Signup/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/" element={<Protector Child={Home}/>}/>

          <Route path="/addmovie" element={<Protector Child={Addmovie}/>}/>

          <Route path="/favmovie" element={<Protector Child={Watchlist}/>}/>

          <Route path="/profile" element={<Protector Child={Profile}/>}/>

          <Route path="/moviedetails/:id" element={<Moviedetails/>}/>

          <Route path="/edit/:id" element={<Editmovie/>}/>

          <Route path="/search/:keyword" element={<Search/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
