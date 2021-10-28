import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router";

function EditProfile({ className }){
    const [users, setUsers] = useState([])
    const [firstname, setFirstname] = useState(users.firstname)
    const [lastname, setLastname] = useState(users.lastname)
    const [password, setPassword] = useState(users.password)
    const [email, setEmail] = useState(users.email)
    const [address, setAddress] = useState(users.address)
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    const history = useHistory()
    
    useEffect(() => {
    async function getUser() {
        const users = await axios.get(`/users/me`)
        setUsers(users.data)
    }
            
    getUser();
            
    }, [])
    
    function cancel(){
        history.push('/profile')
    }

    const changeUser = (event) => {
        event.preventDefault();
        axios.patch('http://localhost:8080/users/me', {
          email: email,
          firstname: firstname,
          lastname: lastname,
          password: password,
          address: address
        }).then((response) => {
          console.log(response);
          history.push('/profile')
        });
      };

    return(
        <>
        <div className={className}>
            <Container>
                <div className="main">
                    <h1>PROFILE</h1>
                    <Row>
                    <form id="create-form" className="createform">
                        <div className="input-group">
                        <input
                            name="name"
                            type="text"
                            id="name"
                            onChange={(event) => setFirstname(event.target.value)}
                            placeholder="First Name"
                        />
                        </div>
                        <div className="input-group">
                        <input
                            name="name"
                            type="text"
                            id="name"
                            onChange={(event) => setLastname(event.target.value)}
                            placeholder="Last Name"
                        />
                        </div>

                        <div className="input-group">
                        
                        <input
                            name="name"
                            type="text"
                            id="name"
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email"
                        />
                        </div>

                        <div className=" input-group">
                        <input
                            name="password"
                            type="password"
                            id="password"
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Password"
                        />
                        </div>

                        <div className=" input-group">
                        <input
                            name="name"
                            type="text"
                            id="name"
                            onChange={(event) => setAddress(event.target.value)}
                            placeholder="Address"
                        />
                        </div>
                    
                        <div className="btnSignup">
                        
                        </div>

                    </form>
                        
                    </Row>
                    <Row>
                        <Col>
                            <button className="buttonPaid mt-3" onClick={changeUser}>Confirm</button>
                        </Col>
                        <Col>
                            <button className="buttonPaid mt-3"onClick={cancel}>Cancel</button>
                        </Col>
                    </Row>
                    
                    
                    
                </div>

            </Container>
        </div>
        
        </>
    )
    
}

export default styled(EditProfile)`
h1{
    text-align: center;
}
.container {
    background-color: white;
    width: 500px;
    height: 520px;
    padding: 30px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
    transition: .3s;
  }
  .container:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
.front {
    margin-left: 5px;
}
p{
    margin-bottom: 10px;
}
.detail{
    display: inherit;
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
  width: 300px;
  margin-left: 50px;
  transition-duration: 0.4s;
}
.buttonPaid:hover {
  background-color: orangered;
  color: white;
}
form label {
    display: inline-block;
    margin-bottom: 0.5rem;
}
form input {
    padding: 0.3rem 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
    outline: none;    
    border-bottom: 1.5px solid #ced4da;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    transition: .3s;
}
  form input:hover {
    border-bottom: 1.5px solid darkgray;
}
form .input-group {
    margin-bottom: 1.5rem;
}
.createform{
    word-wrap: break-word;
}
`