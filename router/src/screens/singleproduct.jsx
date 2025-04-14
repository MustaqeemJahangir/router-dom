import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../style/style.css';
import Swal from 'sweetalert2'


// const Swal = require('sweetalert2')



function SingleProduct() {


    function hola() {
        Swal.fire({
            title: 'successfully pruchased',
            text: 'puhnay wala hay  ',
            icon: 'success',
            confirmButtonText: 'ok ! '
          })
    }

    const params=useParams()
     const [data,useData]=useState(null)

    console.log(params.id)

    useEffect(()=>{

        getdata()

    },[]

)
async function getdata() {

    try{
        let responce =  await axios (`https://fakestoreapi.com/products/${params.id}`)
        console.log(responce.data)
        useData(responce.data)

    }
    catch(error){
        console.log('error bro')

    }
    
}



    return(
        <>
        {/* <h2>singleProduct{params.id}</h2> */}
        <div className="main-heaider">
        {data ? <div className="singleproduct">
            <img src={data.image} alt="" />
            <h1>title: {data.title}</h1>
            <h2>category : {data.category}</h2>
            <h2>{data.description}</h2>
            <h3>rating : {data.rating.rate}</h3>
            <button onClick={hola}>buy now</button>

        

        </div>:<h1>....laoding</h1>}
        </div>        </>
    )
}

export default SingleProduct