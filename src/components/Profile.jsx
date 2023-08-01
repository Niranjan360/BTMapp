import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Profile = () => {

    let navigate = useNavigate();

    let handleLogout  = ()=>{
        let x = window.confirm("are you sure ?");
        if(x)
        {
            localStorage.removeItem("currentUser");
            navigate("/login");
        }
    }
    return ( 
        <div>
            <Navbar/>
            <h1>This is profile comp</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Profile;