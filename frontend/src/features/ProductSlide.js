import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import styled from 'styled-components';
function ProductSlide({  className }) {
  const imageMenu = [
    'https://bakestory.co/wp-content/uploads/2019/09/%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88-04.jpg',
    'https://bakestory.co/wp-content/uploads/2019/09/%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88-02.jpg',
    'https://www.smeleader.com/wp-content/uploads/2019/06/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88.jpg'
  ]

  return (
    <div className={className}>
      <Carousel >
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src={imageMenu[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src={imageMenu[1]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src={imageMenu[2]}
            alt="Third slide"
          />
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
  font-size:20px;
}
.carousel{
  height: 300px;
  
}
 img{
  width: 1296px;
  height: 300px;
  border-radius: 30px;
}`; 
