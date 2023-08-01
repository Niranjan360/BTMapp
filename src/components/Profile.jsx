import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Modal from 'react-modal';

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

    let navigate = useNavigate();

    let handleLogout  = ()=>{
        let x = window.confirm("are you sure ?");
        if(x)
        {
            localStorage.removeItem("currentUser");
            navigate("/login");
        }
    }

    let handleUpdateProfile = ()=>{
        // logic update profile == PUT 
        // name , email , phone == new value
        // password == old value

    }

    let handleResetPassword = ()=>{
        // logic update password == PUT 
        // password == new value if and only id=f old password is same as typed one
        // name , email , phone == old values

    }


    useEffect(()=>{
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        setUser(currentUser);
    })

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
    setIsOpen(true);
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
    }

    function closeModal() {
    setIsOpen(false);
    }

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

                <form className="update-profile">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="email" />
                    <input type="tel" max="10" min="10" placeholder="phone" />
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

                <form className="update-password">
                    <input type="text" placeholder="Old password" />
                    <input type="password" placeholder="New password" />
                    <input type="text" placeholder="Confirm password" />
                    <input type="submit" value="Reset password" />
                </form>
                
            </Modal>



        </div>
    );
}
export default Profile;