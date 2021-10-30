import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Item({ item }) {
  return (

    <Col className="card-menu mt-3" sm={6} md={3}>
      <Card className="each-card">
      <Link
        to={`/detail/${item._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        
          <div className="card-image">
            <Card.Img className="image-item" variant="top" src={item.image} />
          </div>
          
        <Card.Body >
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className="card-text">{item.price} Bath</Card.Text>
        </Card.Body>
          
          
        
      </Link></Card>
    </Col>

  );
}


export default Item;

