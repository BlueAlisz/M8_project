import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";

function Item({ item }) {
    const [count, setCount] = useState(item.amount)
    const [total, setTotal] = useState([item.allPrice])
    const [all, setAll] = useState(0)
    const history = useHistory()

    const deleteOrder = () => {
        axios.delete('http://localhost:8080/order', {
            data: { _id: item._id}

        }).then((response) => {
            console.log(response)
            window.location.reload();
        })
    }
    //console.log(total)
    const amountUp = () => {
        let amount = item.amount+1
        let allPrice = amount*item.price
        axios.patch('http://localhost:8080/orderUp', {
            _id: item._id,
            amount: amount,
            allPrice: allPrice
        }).then((response) => {
            console.log(response)
            //history.push('/home')
            window.location.reload();
        })
        console.log(item._id)
        console.log(amount)
        console.log(allPrice)
    }
    
    
    const amountDown = () => {
        let amount = item.amount-1
        let allPrice = amount*item.price
        axios.patch('http://localhost:8080/orderUp', {
            _id: item._id,
            amount: amount,
            allPrice: allPrice
        }).then((response) => {
            console.log(response)
            //history.push('/home')
            window.location.reload();
        })
        console.log(item._id)
        console.log(amount)
        console.log(allPrice)
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
                    <Button variant="warning" onClick={amountDown}>-</Button>{' '}
                    <Button variant="outline-warning" disabled>{item.amount}</Button>{' '}
                    <Button variant="warning" onClick={amountUp}>+</Button>{' '}
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

