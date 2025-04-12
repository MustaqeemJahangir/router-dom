import React from "react";
import '../style/style.css';
import { useNavigate } from "react-router-dom";

function Card({category,price,image ,id}) {
const navigate=useNavigate()


  function showNext() {
    navigate(`/singleproduct/${id}`)    
  }

    return(
    <>
    <div className="card">
      <img  className="imageSet" src={image} alt="" />
      <h2>price : {price}</h2>
      <h2>category  : {category}</h2>
      <button onClick={showNext} >see more</button>
    </div>
    </>
    )
    
}

export default Card