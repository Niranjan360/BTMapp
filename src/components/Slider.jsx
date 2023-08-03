import { Sliderify } from "react-sliderify";

let Slider = ({movies})=>{


    return(
        <div className="sliders">
            <Sliderify autoPlay={true}  slideDurationInSecs="3" showSpot={false}>
            {
                movies.map((movie)=>{
                    return(<div style={{ height: "500px", background:`url(${movie.banner})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" , color: "white" , backgroundPosition:"center" }}>
                        </div>) 
                })
            }
            </Sliderify>
        </div>
    )
}

export default Slider;


