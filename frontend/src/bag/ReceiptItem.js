import { Col, Row } from "react-bootstrap";


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

