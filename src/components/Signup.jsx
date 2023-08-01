import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    let [name , setName] = useState("");
    let [email , setEmail] = useState("");
    let [password , setPassword] = useState("");
    let [phone , setPhone] = useState("");

    let navigate = useNavigate();

    let handleSignup = (e)=>{
        e.preventDefault();

        let userObj = {
                        "name": name ,
                        "email": email,
                        "password": password,
                        "phone": phone
                    }
        
        fetch("http://localhost:5000/users" , {
                                                    method:"POST",
                                                    headers:{"Content-Type" :"application/json"},
                                                    body: JSON.stringify(userObj)
                                                })
        .then(()=>{
            toast("Signup successfull !!");
            setTimeout(()=>{navigate("/login");} , 1500)
        })
    }


    return (<div className="signup">
        <h1>Register to use the App</h1>

        <form onSubmit={handleSignup}>
            <input type="text" placeholder="Name" 
            value={name} onChange={(e)=>{setName(e.target.value);}}/>

            <input type="email" placeholder="Email id" 
            value={email} onChange={(e)=>{setEmail(e.target.value);}} />

            <input type="password" placeholder="Password" 
            value={password} onChange={(e)=>{setPassword(e.target.value);}}/>

            <input type="tel" placeholder="Phone number" maxLength="10" minLength="10" 
            value={phone} onChange={(e)=>{setPhone(e.target.value);}}/>

            <input type="submit" value="Signup" />
        </form>

        <span>Already have an account ? <Link to="/login">Login</Link> </span>

        <ToastContainer />

    </div> );
}

export default Signup;