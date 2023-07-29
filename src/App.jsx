import Addmovie from "./components/Addmovie";
import Home from "./components/Home";
import Login from "./components/Login";
import Moviedetails from "./components/Moviedetails";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Protector from "./components/Protector";
import Signup from "./components/Signup";
import Watchlist from "./components/Watchlist";
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() 
{
  return(
    <BrowserRouter>
      <div className="app">
        { !(window.location.pathname=="/" || window.location.pathname=="/login") &&  <Navbar/>}
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>


          <Route path="/home" element={<Protector Child={Home}/>}/>
          <Route path="/addmovie" element={<Protector Child={Addmovie}/>}/>


          <Route path="/favmovie" element={<Watchlist/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/moviedetails/:id" element={<Moviedetails/>}/>


        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
