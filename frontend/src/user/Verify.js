import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap'
import AuthService from './auth.service'
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function Verify({ className }){
    let { username } = useParams()
    AuthService.verifyUser(username)
   

    return(
        
        <div className={className}>
            <div className="main">
                <h3 className="text">
                <strong>Account confirmed!</strong>
                </h3>
                <h3>
                    Please <NavLink to="/login" className="home">Sign In</NavLink>
                </h3>
                
            </div>
        
        </div>
    )


}

export default styled(Verify)`
.main{
    text-align: center;
    width: 500px;
    height: 125px;
    background: bisque;
    margin-left: 400px;
    margin-top: 200px;
    border-radius: 20px;
}
.home {
    margin: px;
    color: blue;
    text-decoration: none;
}
`