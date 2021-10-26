import axios from 'axios';
import Navbar from "./features/Navbar";
import ProductSlide from './features/ProductSlide';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router';
import Home from './features/Home';
import React, { useState, useEffect } from "react";
import Catalog from './product/Catalog';
import CatalogMain from './features/CatalogMain';
import { useParams } from 'react-router-dom';
import Register from './user/Register';
import Login from './user/Login'
import Detail from './detail/Detail';

function App() {
  
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/detail/:id">
              <Detail />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/sign-in">
              <Register />
          </Route>
          <Route path="/products/:catalog">
              <CatalogMain />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
