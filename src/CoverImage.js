
import React from 'react'
import Coverimg from "./images/coverimg2.jpg";
import "./App.css"

const Coverimage = ()=>{
    return(
        <div className="coverimg img-fluid bg-primary ">
            <img className="cover w-100 " src={Coverimg} alt="coverimage"/>
        </div>   
    )
}

export default Coverimage;