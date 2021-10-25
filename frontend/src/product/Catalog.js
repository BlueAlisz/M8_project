import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import Item from './Item'
import { Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import CatalogMain from "../features/CatalogMain";

function Catalog({ className, products }) {
    // const [products, setProducts] = useState([])
    // let { catalog } = useParams()
    // console.log(catalog)

    // useEffect(() => {
    //     async function getProduct() {
    //     const products = await axios.get(`/products/${catalog}`)
    //     setProducts(products.data)
    //     }
        
    //     getProduct();
    // }, [])

    return (
        <>       
            <div className={className}>  
                <h1 style={{fontSize: "30px",marginTop: "10px"}}>
                    Product</h1>
                <Row className="card-container">
                    {products.map((value) => {
                        return <Item key={value._id} item={value} />;
                    })}
                </Row>
            </div>
    </>
    )
}

export default styled(Catalog)`
.card-text{
    font-size: 25px;
    color: red;
}
.card-body{
    padding: 5px 10px;
}
.image-item{
    height: 180px;

}
img {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.each-card{
    transition: 0.5s;    
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
    border: 1px solid whitesmoke;
    text-align: left;
    
  }
  .each-card:hover {
   box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;

  }
`