import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Row, Col, Container, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import Item from "./Item";

function Receipt({ className }){
    const [receipt, setReceipt] = useState([])
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

    useEffect(() => {
        async function getRecceipt() {
            const receipts = await axios.get('/receipt/me')
            setReceipt(receipts.data)
        }

        getRecceipt()
    }, [])

    return(
        <>
            <div className={className}>
                <h5>Receipt History</h5>
                <div className="receipt">
                    {receipt.map((value) => {
                        return <Item key={value._id}
                        item={value}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default styled(Receipt)`
.main{
    margin-top: 10px;
}
p{
    margin-bottom: 0px;
}
.inside{
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
}
`