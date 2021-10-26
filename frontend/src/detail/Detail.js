import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";


function Detail({ className }) {
  const [products, setProducts] = useState([])
  
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  
  let { id } = useParams()
  
  useEffect(() => {
    async function getProduct() {
    const products = await axios.get(`/detail/${id}`)
    setProducts(products.data)
    }
        
    getProduct();
        
    }, [])

  
  
  function add(){
    let sum = count+1
    setCount(sum)
    setTotal(sum*products.price)
  }

  function minus(){
    
    let sum = count-1
    if(sum < 0){
      sum = 0
    }
    setCount(sum)
    setTotal(sum*products.price)
  }

    return (
        <>
        <div className={className}>
            <Container>
              <h5>products/dry-food/test</h5>
                <Row>
                  <Row>
                    <Col className="img">
                        <img src={products.image} alt="img"></img>
                    </Col>
                    <Col className="header">
                        <p className="head">{products.name}</p>
                        <p>{products.description}</p>
                        <Row className="main">
                          <Col className="price">
                            <h5>price</h5>
                            <h5 style={{color: "red"}}>{products.price}</h5>
                          </Col>
                          <Col className="amount">
                            <h5>amount</h5>
                            <Button variant="warning" onClick={minus}>-</Button>{' '}
                            <Button variant="outline-warning" disabled>{count}</Button>{' '}
                            <Button variant="warning" onClick={add}>+</Button>{' '}
                          </Col>
                                      
                          <Col className="total">
                            <h5>Total</h5>
                            <h5 style={{color: "red"}}>{total} Bath</h5>
                          </Col>
                        </Row>
                          <Button variant="warning" className="cart">ADD TO CART</Button>{' '}
                                
                    </Col>
                  </Row>
                </Row>
            </Container> 
          </div>         
        </>
    )
}

export default styled(Detail)`
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
