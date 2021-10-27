import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Item({ item }) {
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)

    
    function add(){
        let sum = count+1
        setCount(sum)
        setTotal(sum*item.price)
    }
    
    function minus(){
        
        let sum = count-1
        if(sum < 0){
          sum = 0
        }
        setCount(sum)
        setTotal(sum*item.price)
    }

    const deleteOrder = () => {
        
        axios.delete('http://localhost:8080/order', {
            data: { _id: item._id}

        }).then((response) => {
            console.log(response)
            window.location.reload();
        })
        
        
    }

  return (
      <Row className="product" >
          <Col className="image" md={5}>
          <img src={item.image}></img>
          </Col>
          <Col md={7}>
            <h5 className="mt-3">{item.name}</h5>
            <Row>
                <Col>
                <h5>price</h5>
                <h5 style={{color: "red"}}>{item.price}</h5>
            </Col>
            <Col>
                <h5>Total</h5>
                <h5 style={{color: "red"}}>{total} Bath</h5>
            </Col>
            </Row>
            <Row>
                <Col>
                    <p>amount</p>
                    <Button variant="warning" onClick={minus}>-</Button>{' '}
                    <Button variant="outline-warning" disabled>{count}</Button>{' '}
                    <Button variant="warning" onClick={add}>+</Button>{' '}
                </Col>
                <Col className="delete">
                <Button variant="danger" onClick={deleteOrder}>Delete</Button>
            
                
                </Col>
            </Row>
            
            
            
            
            
          </Col>
      </Row>
  )

    

  
}


export default Item;

