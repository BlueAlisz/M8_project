import styled from "styled-components";
import PropTypes from "prop-types";
import ProductSlide from "./ProductSlide";
import Product from "../product/Product";


function Home({ className }) {

    return (
        <div className={className}>  
            <ProductSlide />  
            <Product />
        </div>
    )
}

Home.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Home)`
    
`;
