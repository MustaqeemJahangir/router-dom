import React from "react";
import { useParams } from "react-router-dom";


function SingleProduct() {

    const params=useParams()

    console.log(params.id)
    
    return(
        <>
        <h2>singleProduct{params.id}</h2>
        </>
    )
}

export default SingleProduct