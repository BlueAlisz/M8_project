import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";


function ItemDetail({ detail }){
    
    return(
        <>
            <p>
            Name: {detail.name} || Amount: {detail.amount} || Price: {detail.price}
            </p>
        </>
    )

}

export default ItemDetail