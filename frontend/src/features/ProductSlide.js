import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import styled from 'styled-components';
function ProductSlide({  className }) {
  const imageMenu = [
    'https://media.discordapp.net/attachments/743022293759819777/888356354698387456/macaronnn.jpg',
    'https://cdn.discordapp.com/attachments/743022293759819777/888092884916658186/waffles.jpg',
    'https://cdn.discordapp.com/attachments/743022293759819777/887704019894677594/cadied.jpg'
  ]

  return (
    <div className={className}>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageMenu[0]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Macaron</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageMenu[1]}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Waffles</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageMenu[2]}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Candied Strawberries</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );
}


ProductSlide.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled (ProductSlide)`
h3{
  font-size:50px;
}`;
