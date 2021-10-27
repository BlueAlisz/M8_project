import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import Item from "./Item";

function Bag({ className }){
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [sum, setSum] = useState(0)
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

    useEffect(() => {
        async function getProduct() {
            const products = await axios.get('/order/me')
            setProducts(products.data)
        }

        getProduct()
    }, [])

    console.log(products)
    function add(price){
        let sums = count+1
        let total = sums*price
        
        setCount(sums)
        setTotal(total)
        setSum(total)
    }
    
    function minus(price){
        let sums = count-1
        let total = sums*price
        
        if(sums < 0){
          sums = 0
        }
        setCount(sums)
        setTotal(total)
        setSum(total)
    }
    const reciept = () => {

        axios.post('http://localhost:8080/receipt', {

            total: count,
            item: products
            
        },{
            headers: {
                'Authorization': localStorage.getItem("token")
              }
        }).then((response) => {
            console.log(response);
        })
    }
    return(
        <>
            <div className={className}>  
                <h1 style={{fontSize: "30px",marginTop: "10px"}}>
                    Bag</h1>
                <Row className="main">
                    <Col md={8}>
                        {products.map((value) => {
                            return <Item 
                            key={value._id} 
                            item={value}
                            add={add}
                            minus={minus}
                            count={count}
                            total={total} />;
                        })}
                    </Col>
                    <Col md={4}>
                        <Row className="paid">
                            <Col>
                            <h5 className="mt-3 mx-3">Total</h5>
                            </Col>
                            <Col className="sumPrice mt-3 mx-3">
                            <h5>{sum}</h5>
                            </Col>

                            
                            <button className="buttonPaid mb-3" onClick={reciept}>Buy</button>
                            
                        </Row>
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
.paid{
    background-color: white;
    border-radius: 30px;
}
.image{
    text-align: center;
}
.delete{
    margin-top: 40px;
}
.sumPrice{
    text-align: right;
}
.buttonPaid{
    background-color: orange;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 350px;
  margin-left: 50px;
  transition-duration: 0.4s;
}
.buttonPaid:hover {
  background-color: orangered;
  color: white;
}
`