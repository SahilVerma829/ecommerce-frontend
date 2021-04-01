import React,{useState,useEffect} from 'react'

import {getProducts} from "../Components/ApiHit"

import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const GridView = (props)=>{
    const [product,setProduct]= useState([])
    
    const getProduct=()=>{
        getProducts().then(data=>{
            console.log("data",data.data.data)
            const findData = data.data.data;
           
            setProduct(findData)
        }).catch((err)=>console.log("err",err))
    }

    useEffect(()=>{
        getProduct()
    },[]);

    return (
        product.map((item)=>
            <div className="card overflow-hidden m-3 border border-dark rounded-3 h-100" style={{width: "438px", height:"350px"}} key={item.pro_id}>
            <img src={"http://shreejodhana.com/fashion/"+item.pro_image} className="card-img-top" alt="cardImg" ></img>
            <div className="card-body ">
                <div className="d-flex">
                    <h5 color="dark" className="card-title flex-grow-1">{item.pro_name}</h5>
                    <h5 className="flex-shrink-1" >Rs. {item.pro_price}</h5>
                </div>
                <p className="card-text ">{item.pro_slug}</p>
                <Button  className="btn float-right p-2" 
                onClick={()=>{props.bedgeincrease(); props.addProducts(item)}}><AddShoppingCartIcon fontSize="large"/></Button>
            </div>
            </div>
        
        )
    )
}

export default GridView;