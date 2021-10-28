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
import Bag from './bag/Bag';
import Receipt from './bag/Receipt';
import Verify from './user/Verify';
import Profile from './profile/Profile';
import EditProfile from './profile/EditProfile';
function App() {
//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
        <Route path="/editprofile">
              <EditProfile />
          </Route>
          <Route path="/profile">
              <Profile />
          </Route>
          <Route path="/users/confirm/:username">
              <Verify />
          </Route>
          <Route path="/confirmOrder">
              <Receipt />
          </Route>
          <Route path="/bag">
              <Bag />
          </Route>
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
