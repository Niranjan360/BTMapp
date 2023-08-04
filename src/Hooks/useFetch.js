import { useEffect, useState } from "react";

function useFetch(reqAPI)
{
    
    let[data , setData] = useState(null);
    let[error , setError] = useState(null);
    let[pending , setPending] = useState(true);

    useEffect(()=>{
            setTimeout(()=>{
                fetch(reqAPI)
                .then((res)=>{
                    if(res.ok==true){
                        return res.json() 
                    }
                    else{
                        throw new Error('Sorry not data found for this please try for different')
                    }
                })
                .then((data)=>{
                    setData(data);
                    setPending(false);
                })
                .catch((err)=>{
                    setError(err.message);
                    setPending(false);
                })

            } , 1000)
    } , [])

    return {data , error , pending};

}

export default useFetch;