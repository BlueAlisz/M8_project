import styled from "styled-components";
import Catalog from "../product/Catalog";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function CatalogMain({ className }) {
    const [products, setProducts] = useState([])
    let { catalog } = useParams()
    console.log(catalog)

    useEffect(() => {
        async function getProduct() {
        const products = await axios.get(`/products/${catalog}`)
        setProducts(products.data)
        }
        
        getProduct();
    }, [])

    return (
        <>
        
        {products.length > 0 ? (
        <div className={className}>  
            <Catalog products={products}/>  
        </div>
        ) : (
            <div>Loading products....</div>
        )
        }
        </>

    )}

export default styled(CatalogMain)`
    
`;
