import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";


function Detail({ className }) {
    const [products, setProducts] = useState([])
    let { id } = useParams()

    useEffect(() => {
        async function getProduct() {
        const products = await axios.get(`/products/id/${id}`)
        setProducts(products.data)
        }

        getProduct();
    }, [])


    return (
        <>
            <div className={className}>
                <Container>
                    <h5>products/dry-food/test</h5>
                    <Row>
                        <Row>
                            <Col className="img">
                                <img src="https://www.yokintertrade.co.th/shopping/system/resource/file/kdseq_product_15.JPG?date=222243.1" alt="img"></img>
                            </Col>
                            <Col className="header">
                                <p className="head">น้ำตาลซองEqual 50ซอง/กล่อง</p>
                                <p>น้ำตาลสารสกัดจากหญ้าหวาน ใช้สำหรับปรุงอาหารคาวหวานและเครื่องดื่มให้พลังงานน้อย เหมาะสำหรับผู้ที่ต้องการควบคุมน้ำหนัก ควบคุมน้ำตาล-สกัดจากใบหญ้าหวานธรรมชาติ-ให้รสชาติหวานกลมกล่อม 
                                    ไม่มีรสสัมผัสค้างปลายลิ้น-แคลอรีน้อยกว่าน้ำตาล 50%-เพลิดเพลินความหวานง่ายๆ ไม่ว่าจะเป็นเมนูอาหาร หรือ เมนูเครื่องดื่ม-สะดวก ใช้งานง่าย แบบถุงซิปล็อค-สามารถใช้เพอร์ เวีย ในการอบขนม ทน
                                    ความร้อนได้ รสชาติหวานไม่เปลี่ยนแปลง-เพอร์ เวีย สตีเวีย น้ำตาลผสมสารสกัดจากหญ้าหวาน : ปริมาณ 1 ช้อนชา ให้ความหวานเทียบเท่ากับน้ำตาล 2 ช้อนชา-สำหรับผู้ที่ต้องการควบคุมน้ำหนัก
                                </p>
                                <input placeholder="Enter a number" required type="number" value="0" min="-100" max="100"/>
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
.number-input input[type="number"] {
  -webkit-appearance: textfield;
    -moz-appearance: textfield;
          appearance: textfield;
}
.number-input input[type=number]::-webkit-inner-spin-button,
.number-input input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.number-input {
  margin-bottom: 3rem;
}
.number-input button {
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  position: relative;
}
.number-input button:before,
.number-input button:after {
  display: inline-block;
  position: absolute;
  content: '';
  height: 2px;
  transform: translate(-50%, -50%);
}
.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.number-input input[type=number] {
  text-align: center;
}
.number-input.number-input {
  border: 1px solid #ced4da;
  width: 10rem;
  border-radius: .25rem;
}
.number-input.number-input button {
  width: 2.6rem;
  height: .7rem;
}
.number-input.number-input button.minus {
  padding-left: 10px;
}
.number-input.number-input button:before,
.number-input.number-input button:after {
  width: .7rem;
  background-color: #495057;
}
.number-input.number-input input[type=number] {
  max-width: 4rem;
  padding: .5rem;
  border: 1px solid #ced4da;
  border-width: 0 1px;
  font-size: 1rem;
  height: 2rem;
  color: #495057;
}
`