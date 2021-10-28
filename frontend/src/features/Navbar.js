import { Navbar as RBNavbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { LinkContainer } from 'react-router-bootstrap';
import { BiUser} from "react-icons/bi"
import { BsFillBagFill } from "react-icons/bs";

function Navbar({ className }) {
    return(
        <div className={className}>
        <RBNavbar className="nav" variant="light">
            <Container fluid className="d-flex justify-content-between">
                <Nav className="inNav ">
                    <NavLink to="/home" className="home">Home</NavLink>
                    {/* <NavLink to="/product" className="product">Product</NavLink> */}
                    <NavDropdown title="Product">
                        <LinkContainer to={`/products/dry-food`}>
                            <NavDropdown.Item >Dry Food </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`/products/fresh-food`}>
                            <NavDropdown.Item >Fresh Food </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`/products/home-user`}>
                            <NavDropdown.Item >Home User </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`/products/packaging`}>
                            <NavDropdown.Item >Packaging </NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                <Nav>
                <RBNavbar.Brand href="/" className="brand">BLUE BAKERY SHOP</RBNavbar.Brand>
                </Nav>
                <Nav>
                    <NavDropdown title="profile">
                        <LinkContainer to={`/profile`}>
                            <NavDropdown.Item >Profile </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`/receiptHistory`}>
                            <NavDropdown.Item >Receipt </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`/products/home-user`}>
                            <NavDropdown.Item >Logout </NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
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
.dropdown-toggle{
    padding: 0px;
}
`