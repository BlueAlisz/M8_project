import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Item({ item, add, minus, count, total }) {

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
                    <Button variant="warning" onClick={() => minus(item.price)}>-</Button>{' '}
                    <Button variant="outline-warning" disabled>{count}</Button>{' '}
                    <Button variant="warning" onClick={() => add(item.price)}>+</Button>{' '}
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

