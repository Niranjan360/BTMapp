import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
},
};


const Profile = () => {

    let[user , setUser] = useState(null);
    let name = useRef();
    let email = useRef();
    let phone = useRef()
    let op = useRef();
    let np = useRef();
    let cp = useRef();
    let navigate = useNavigate();

    let handleLogout  = ()=>{
        let x = window.confirm("are you sure ?");
        if(x)
        {
            localStorage.removeItem("currentUser");
            navigate("/login");
        }
    }

    let handleUpdateProfile = (e)=>{
        e.preventDefault();
        let updatedUser = {
            id : user.id,
            name : name.current.value,
            email : email.current.value,
            phone : phone.current.value,
            password : user.password
        }

        fetch("http://localhost:5000/users/"+ user.id , {
                                                            method:"PUT",
                                                            headers :{"Content-Type":"application/json"},
                                                            body:JSON.stringify(updatedUser)
                                                        })
        .then(()=>{
            localStorage.setItem("currentUser" , JSON.stringify(updatedUser))
            setUser(updatedUser);
            toast.success("Profile updated succesffuly");
            closeModal();
        })
    }

    let handleResetPassword = (e)=>{
        e.preventDefault();

        if(op.current.value == user.password )
        {
            if(op.current.value == np.current.value)
            {   
                toast.warning("New password is same as old , please give different.")
            }
            else if(np.current.value != cp.current.value)
            {
                toast.warning("Password mismatch , please type both as same !!");
            }
            else
            {
                let updatedUser = {
                    id : user.id,
                    name:user.name,
                    email:user.email,
                    phone:user.phone,
                    password : np.current.value
                }

                fetch("http://localhost:5000/users/"+ user.id , {
                                                            method:"PUT",
                                                            headers :{"Content-Type":"application/json"},
                                                            body:JSON.stringify(updatedUser)
                                                        })
                .then(()=>{
                    localStorage.removeItem("currentUser")
                    toast.success("Password reset successfull , please login again");
                    setTimeout(()=>{ navigate("/login") } , 2000);
                })
            }
        }
        else{
            toast.warning("Sorry invalid old password !!")
        }


    }

    useEffect(()=>{
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        setUser(currentUser);
    },[])

    /*--------------- functions for 1st modal componment ---------------------------*/
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
        name.current.value = user.name;
        email.current.value = user.email;
        phone.current.value = user.phone;
    }

    function closeModal() {
    setIsOpen(false);
    }
    /* ----------------------------------------------------------------------- */


    /*--------------- functions for 2nd modal componment ---------------------------*/

    let subtitle1;
    const [modalIsOpen1, setIsOpen1] = useState(false);

    function openModal1() {
    setIsOpen1(true);
    }

    function afterOpenModal1() {
    // references are now sync'd and can be accessed.
    subtitle1.style.color = '#f00';
    }

    function closeModal1() {
    setIsOpen1(false);
    }
    /* ----------------------------------------------------------------------- */


    return ( 
        <div>
            <Navbar/>

            {user && <div className="profile">
                <img src="https://i.pinimg.com/originals/e9/ba/82/e9ba8260cac522d417041dab1004e5e9.jpg" id="cover" />
                <img src="https://avatars.githubusercontent.com/u/76938846?v=4" id="profilePic"/>

                <h1>Name  : {user.name}</h1>
                <h1>Email : {user.email}</h1>
                <h1>Phone : {user.phone}</h1>

                <div className="btns">
                <button onClick={handleLogout}>Logout</button>
                <button onClick={openModal}>Update Profile</button>
                <button onClick={openModal1}>Reset Password</button>
                </div>

            </div>}

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update profile</h2>

                <form className="update-profile" onSubmit={handleUpdateProfile}>
                    <input type="text" placeholder="Name" ref={name}/>
                    <input type="email" placeholder="email" ref={email} />
                    <input type="tel" max="10" min="10" placeholder="phone" ref={phone} />
                    <input type="submit" value="update profile" />
                </form>
                
            </Modal>

            <Modal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal1}
                onRequestClose={closeModal1}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle1 = _subtitle)}>Reset password</h2>

                <form className="update-password" onSubmit={handleResetPassword}>
                    <input type="text" placeholder="Old password" ref={op} />
                    <input type="password" placeholder="New password" ref={np}/>
                    <input type="text" placeholder="Confirm password" ref={cp} />
                    <input type="submit" value="Reset password" />
                </form>
                
            </Modal>

            <ToastContainer />

        </div>
    );
}
export default Profile;