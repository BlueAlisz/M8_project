import styled from "styled-components";
import PropTypes from "prop-types";
import ProductSlide from "./ProductSlide";



function Home({ className }) {

    return (
        <div className={className}>  
            <ProductSlide />  
            
        </div>
    )
}

Home.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Home)`
    
`;
