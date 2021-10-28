import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";

function ReceiptItem({ item }) {

     
  return (
      <Row>
          <Col>
            <p>{item.name}</p>
          </Col>
          <Col className="price">
            <p>{item.allPrice} Bath</p>
          </Col>
      </Row>
      
    
  )
}


export default ReceiptItem;

