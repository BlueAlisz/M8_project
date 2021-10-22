import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiUser} from "react-icons/bi"
import { BsFillBagFill } from "react-icons/bs";

function Navbar({ className }) {
    return(
        <div className={className}>
        <RBNavbar className="nav" variant="light">
            <Container fluid className="d-flex justify-content-between">
                <Nav className="inNav ">
                    <NavLink to="/home" className="home">Home</NavLink>
                    <NavLink to="/product" className="product">Product</NavLink>
                </Nav>
                <Nav>
                <RBNavbar.Brand href="/" className="brand">BLUE BAKERY SHOP</RBNavbar.Brand>
                </Nav>
                <Nav>
                    <NavLink to="/bag" className="icon-btn" activeClassName="active" >
                        <BsFillBagFill size={25} color={"black"} />
                    </NavLink>
                    <NavLink to="/sign-in" className="icon-btn" activeClassName="active" >
                        <BiUser size={30} color={"black"} />
                    </NavLink>
                </Nav>
            </Container>
        </RBNavbar>

        </div>
        
    )
}

export default styled(Navbar)`
.nav{
    background-color: #FFDC9B;
    margin-bottom: 20px;
}
.inNav {
    margin: 10px;
    font-size: 20px;
    color: black;
    text-decoration: none;
}
.home{
    padding-right: 10px ;
    color: black;
    text-decoration:none
}
.product{
    color: black;
    text-decoration:none
}
.brand{
    text-align: center;
    font-size: 25px;
}
.icon-btn{
    margin-right: 15px;
    padding-bottom: 3px;
    
}
`