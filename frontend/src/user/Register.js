import React, { useState } from "react";
import styled from "styled-components";
import { Link ,useHistory} from "react-router-dom";
import axios from "axios";


function Register({ className }) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPs, setCheckPs] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory()

  const addUser = (event) => {
    event.preventDefault();
    if( password !== checkPs){
      alert("Password dont't match")
    }else{
    axios.post('http://localhost:8080/sign-up', {
      username: username,
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
    }).then((response) => {
      console.log(response);
      alert('Please go to email for verify')
      history.push('/login')
    });
    }
  };
    
  

  return (
    <>
      <div className={className}>
        <div className="container">
          <h1>Sign Up</h1>

          <form id="create-form" className="createform">
            <div className="input-group">
              <input
                name="name"
                type="text"
                id="name"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
              />
            </div>
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
                placeholder="Last name"
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
                name="password"
                type="password"
                id="password"
                onChange={(event) => setCheckPs(event.target.value)}
                placeholder="Password"
              />
            </div>
          
            <div className="btnSignup">
              <button onClick={addUser}>Sign Up</button>
            </div>
            

            <Link to="/login" className="link-login">Already have account ?</Link>

          </form>
        </div>
      </div>
    </>
  );
};


export default styled(Register)`

.container {
    background-color: white;
    width: 380px;
    height: 650px;
    padding: 30px;
    margin-left: 500px;
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
  
.btnSignup {
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
    background-color: orange;
    border-radius: 0.75rem;
    border: none;
    margin-bottom: 30px;
}
form .input-group {
    margin-bottom: 1.5rem;
}
.link-login {
    margin: 0 auto;
    color: gray;
    text-decoration: none;
    transition: 0.2s;
    margin-left: 25%;
}
.link-login:hover {
    color: black;
}
`;
