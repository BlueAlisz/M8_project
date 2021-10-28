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
    const updateOrder = () => {
        axios.post('http://localhost:8080/orderUpdate', {
            _id: item._id,
            amount: count,
            allPrice: total
        }).then((response) => {
            console.log(response)
            history.push('/home')
            history.push('/bag')
        })
    }
    
    // let test = 0
    // test += parseInt(total)
    // //console.log(test)
        
    
    

    function add(){
        let sums = count+1
        let total = sums*item.price
        let totalPrice = 0
        totalPrice = totalPrice + total
        //console.log(totalPrice)
        setCount(sums)
        setTotal(total)
        updateOrder()
    }
    
    function minus(){
        let sums = count-1
        let total = sums*item.price
        if(sums < 0){
          sums = 0
        }
        setCount(sums)
        setTotal(total)
        updateOrder()
    }
    //let sum = item.amount * item.price

    

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

