import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container,} from "react-bootstrap";
import axios from "axios";
import ReceiptItem from "./ReceiptItem";
import { useHistory } from "react-router";

function Receipt({ className }){
    const [products, setProducts] = useState([])
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    const history = useHistory()

    useEffect(() => {
        async function getProduct() {
            const products = await axios.get('/order/me')
            setProducts(products.data)
        }

        getProduct()
    }, [])
    
    let total = 0
    products.forEach((product) => {
        total += parseInt(product.allPrice)
        
    });

    const reciept = () => {

        axios.post('http://localhost:8080/receipt', {

            total: total,
            item: products
            
        },{
            headers: {
                'Authorization': localStorage.getItem("token")
              }
        }).then((response) => {
            console.log(response);
            alert("Thank you for buying");
            history.push('/home')

            axios.delete('http://localhost:8080/orderAll',{

            }).then((response) => {
                
            })
        })
        
    }

    return(
        <>
        <div className={className}>
            <Container>
                <div className="main">
                    <h1>RECEIPT</h1>
                    <Row>
                        <Col><h5>Name</h5></Col>
                        <Col className="price">
                            <h5>price</h5>
                        </Col>
                    </Row>
                    <div className = "top">
                        {products.map((value) => {
                            return <ReceiptItem
                            key={value._id}
                            item={value} />
                        })}
                    </div>
                    <Row>
                        <Col>
                            <h5>Total:</h5>
                        </Col>
                        <Col>
                            <p className="price">
                                {total} Bath
                            </p>
                        </Col>
                    </Row>
                    
                    
                    <button className="buttonPaid mt-3" onClick={reciept}>Confirm</button>
                </div>

            </Container>
        </div>
        
        </>
    )
    
}

export default styled(Receipt)`
h1{
    text-align: center;
}
.container {
    background-color: white;
    width: 500px;
    height: 450px;
    padding: 30px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
    transition: .3s;
  }
  .container:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
.price {
    text-align: right;
}
p{
    margin-bottom: 10px;
}
.top{
    border-bottom: gray solid 1px;
}
.main{
    height: auto;
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