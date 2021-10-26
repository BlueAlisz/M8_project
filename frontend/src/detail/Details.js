import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import Detail from "./Detail";


function Details({ className }){
    const [products, setProducts] = useState([])
    let { id } = useParams()

    useEffect(() => {
        async function getProduct() {
        const products = await axios.get(`/detail/${id}`)
        //const products = await axios.get("/products")
        setProducts(products.data)
        }
        
        getProduct();
        
    }, [])
    console.log(products._id)
    

    return(
        <>
            <div className={className}>
               <Container>
                    <Detail key={products._id} item={products.image}></Detail>
                    <Detail key={products._id} item={products.name}></Detail>
                    <Detail key={products._id} item={products.description}></Detail>
                    <Detail key={products._id} item={products.price}></Detail>
                    
                </Container> 
            </div> 
        </>
    )
}

export default styled(Details)`
img{
  width: 100%;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
  border: 1px solid whitesmoke;
  margin-top: 20px;
}
.head{
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  border-bottom: 2px solid gray;
}
.cart{
  margin-top: 20px;
  width: 100%;
}
.main{
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
  padding-top: 5px;
  padding-bottom: 5px;
}
`