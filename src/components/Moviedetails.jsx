import { useParams } from "react-router-dom";

const Moviedetails = () => {

    let {id} = useParams();

    return ( 
            <div>
                <h1>this is movie details component of {id} </h1>
            </div>);
}
export default Moviedetails;