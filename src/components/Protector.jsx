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


/*
HOC 

WHAT : a higher-order component is a function that takes a component and returns a new component.

WHY : A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
*/