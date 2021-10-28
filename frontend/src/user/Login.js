import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login({ className }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserdata] = useState("")
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory()
  
  axios.post('http://localhost:8080/userData',{
      username: username
    }).then((response) => {
      //console.log(response.data.status)
      setUserdata(response.data.status)
      
    })
  //ส่งไป backend
  const login = (event) => {
    
    if(userData !== "Active"){
      alert('Please verify your email')
    }else{
      axios.post('http://localhost:8080/login',{
        username: username,
        password: password
    }).then((response) => {
        console.log(response)
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        history.push('/profile')
    })
    }
  }
  

  return (
    <>
      <div className={className}>
        <div className="container">
          <h1>Sign In</h1>
          <form id="create-form" className="createform" action="sign-in" method="post">
            <div className="input-group">
             
              <input
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
              />
            </div>

            <div className=" input-group">
              
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="btnLogIn">
              <button onClick={login} type="button">Log in</button>
              

            </div>
            <h1>{loginStatus}</h1>

            <Link to="/sign-up" className="link-signup">Don't have account ?</Link>

          </form>
        </div>
        
      </div>
    </>
  );
}


export default styled(Login)`
height: 600px;
padding-top: 50px;


  .container {
    background-color: white;
    width: 380px;
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
 
  h1 {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 30px;
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
  
  .btnLogIn {
    display: flex;
    justify-content: center;
  }
  button {
    width: 100%;
    transition: .3s;
    margin-top: 30px;
  }
  button:hover {
    box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
  }
  form button {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    color: #ffffff;
    background-color: #28a745;
    border-radius: 0.75rem;
    border: none;
    margin-bottom: 30px;
  }
  form .input-group {
    margin-bottom: 1.5rem;
  }
  .link-signup {
    margin: 0 auto;
    color: gray;
    text-decoration: none;
    transition: 0.2s;
    margin-left: 25%;
  }
  .link-signup:hover {
    color: black;
  }
 
`;
