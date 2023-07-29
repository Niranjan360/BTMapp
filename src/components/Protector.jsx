import { Navigate } from "react-router-dom";

const Protector = ({Child}) => {

    let verify = ()=>{
        let result = localStorage.getItem("currentUser");
        if(result==null)
        {
            return false;
        }
        else{
            return true;
        }
    } 

    return (<>
        {
            verify() ? <Child/> : <Navigate to="/login"/>
        }
    </>  );
}
export default Protector;