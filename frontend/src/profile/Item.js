import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";
import ItemDetail from "./ItemDetail"

function Item({ item }){
    const [show, setShow] = useState(true);
    
    // item.item.map((value)=> {
    //     console.log(value.name)
    // })


    return(
    <>
    <div className="main">
      <Alert show={show} variant="warning">
        <Alert.Heading>Receipt ID: {item._id}</Alert.Heading>
            <div className="inside">
            {item.item.map((value) => {
                return <ItemDetail key={value._id}
                detail={value}
            />
            })}
            </div>
            <h5>Total: {item.total}</h5>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="warning">
            Close Detail
          </Button>
        </div>
      </Alert>

      {!show && <Button variant="warning" onClick={() => setShow(true)}>Receipt ID: {item._id}</Button>}
    </div>
    </>
    )
}

export default Item