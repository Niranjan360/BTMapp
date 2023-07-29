import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    let [name , setName] = useState("");
    let [password , setPassword] = useState("");
    let navigate = useNavigate();

    let handleLogin = (e)=>{
        e.preventDefault();

        let currentUser = null;

        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        .then((data)=>{
            for (let i = 0; i < data.length; i++) 
            {
                if(data[i].name == name)
                {
                    currentUser = data[i];
                }
            }
            if(currentUser==null)
            {
                toast.error("User not found , please give a valid username !!");
            }
            else if(currentUser.password !=  password)
            {
                toast.warning("Invalid password !! , please try again")
            }
            else{
                toast.success("login Successfull");
                setTimeout(()=>{ 
                    localStorage.setItem("currentUser" , JSON.stringify(currentUser))
                    navigate("/home") 
                } , 1500)
            }
        })
    }

    return ( 
    <div className="login"> 
        <h1>Login to use the App</h1>
        <hr />

        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Name" 
            value={name} onChange={(e)=>{setName(e.target.value);}}/>

            
            <input type="password" placeholder="Password" 
            value={password} onChange={(e)=>{setPassword(e.target.value);}}/>

            <input type="submit" value="Login" />
        </form>

        <ToastContainer />

    </div> );
}
export default Login;