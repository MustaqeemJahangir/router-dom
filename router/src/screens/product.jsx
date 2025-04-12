import React, { useEffect, useState } from "react";
import Card from "../component1/card";
import axios from "axios";


function Product() {





    const [data,setData]=useState(null)
    useEffect(()=>{
        getData()
    },[])
  async  function getData() {

    
        try{
            let responce = await axios ('https://fakestoreapi.com/products')
            console.log(responce.data)
            setData(responce.data)

        }
        catch(error){
            console.log('error')
        }
        
    }

    
  
    




    return(
    <>
    <div className="main-box">
    {data ? data.map((item)=>{
        return(
            <div>
                <Card image={item.image} price={item.price} category={item.category} id={item.id}/>
            </div>
        
        )


    }):<h1>loading...</h1>}
    </div>
    
    </>
    )
    
}

export default Product