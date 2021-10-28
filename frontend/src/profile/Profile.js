import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router";

function Profile({ className }){
    const [users, setUsers] = useState([])
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    const history = useHistory()
    
    useEffect(() => {
    async function getUser() {
        const users = await axios.get(`/users/me`)
        setUsers(users.data)
    }
            
    getUser();
            
    }, [])
    
    function goEdit(){
        history.push('/editprofile')
    }

    return(
        <>
        <div className={className}>
            <Container>
                <div className="main">
                    <h1>PROFILE</h1>
                    <Row>
                        <div className="detail">
                            <h5>Username: </h5>
                            <h5 className="front">{users.username}</h5>
                        </div>
                        <div className="detail">
                            <h5>Firstname: </h5>
                            <h5 className="front">{users.firstname}</h5>
                        </div>
                        <div className="detail">
                            <h5>Lastname: </h5>
                            <h5 className="front">{users.lastname}</h5>
                        </div>
                        <div className="detail">
                            <h5>Email: </h5>
                            <h5 className="front">{users.email}</h5>
                        </div>
                        <div className="detail">
                            <h5>Address: </h5>
                            <h5 className="front">{users.address}</h5>
                        </div>
                        
                    </Row>
                    
                    
                    
                    <button className="buttonPaid mt-3" onClick={goEdit}>Edit</button>
                </div>

            </Container>
        </div>
        
        </>
    )
    
}

export default styled(Profile)`
h1{
    text-align: center;
}
.container {
    background-color: white;
    width: 500px;
    height: 450px;
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
  width: 350px;
  margin-left: 50px;
  transition-duration: 0.4s;
}
.buttonPaid:hover {
  background-color: orangered;
  color: white;
}
`