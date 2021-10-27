import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import Item from "./Item";

function Bag({ className }){
    const [products, setProducts] = useState([])
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    useEffect(() => {
        async function getProduct() {
            const products = await axios.get('/order/me')
            setProducts(products.data)
        }

        getProduct()
    }, [])

    console.log(products)

    return(
        <>
            <div className={className}>  
                <h1 style={{fontSize: "30px",marginTop: "10px"}}>
                    Bag</h1>
                <Row className="main">
                    <Col md={8}>
                        {products.map((value) => {
                            return <Item key={value._id} item={value} />;
                        })}
                    </Col>
                    <Col md={4}>
                    Test
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default styled(Bag)`
img{
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
}
.product{
    background-color: white;
    border-radius: 50px;
    margin-bottom: 20px;
    margin-right: 20px;
}
.image{
    text-align: center;
}
.delete{
    margin-top: 40px;
}
`