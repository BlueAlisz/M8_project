import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap'
import AuthService from './auth.service'
import { useParams } from "react-router";

function Verify({ className }){
    let { username } = useParams()
    AuthService.verifyUser(username)
   

    return(
        <h1>test</h1>
    )


}

export default styled(Verify)`
`