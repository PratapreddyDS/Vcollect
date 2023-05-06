


import React, { ChangeEvent, useState } from 'react';
import './EmployeeLogin.css';
import '../Success/Success.css';
import 'react-toastify/dist/ReactToastify.css';
import { constants } from '../../../constants';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';



const EmployeeLogin = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAgentLoggedIn, setAgentLoggedIn] = useState(false);

  

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // Perform login logic here
    console.log("Into the Handle Login")
    fetch(constants.backendAPi+'api/checkLogin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword
      })
    })
    .then(response => {
      if (!response.ok) {
          toast.success('Login is not successful', {
          position: toast.POSITION.TOP_CENTER
        });
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Handle successful response from server
      if(data["status"] ===200){

        console.log("check the ADMIN",data["data"]["Role"])

        if (data["data"]["Role"] === "Admin"){
          console.log("check the ADMIN")
          setIsLoggedIn(true);
        }
        else if (data["data"]["Role"] === "Agent"){
          setAgentLoggedIn(true);
        }
        else{

          console.log("something underwent")

        }
      }else{
        toast.success('Login is not successful', {
          position: toast.POSITION.TOP_CENTER
        });

      }

    })
    .catch(error => {
      console.error('There was a problem with the login request:', error); // Handle error from server
    });
  };
  
  

  const storeValues = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { value, id } = event.currentTarget;
    switch (id) {
      case 'loginUsername':
        setLoginUsername(value);
        break;
      case 'loginPassword':
        setLoginPassword(value);
        break;
     
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="loginUsername"
            name="username"
            value={loginUsername}
            onChange={storeValues}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            value={loginPassword}
            onChange={storeValues}
            required
          />
          <button type="submit" value="Login" onClick={handleLogin}>
            Login
          </button>
        </form>
        {/* { isLoggedIn? (<Link to= '/Customer'></Link> ): null} */}
        {isLoggedIn &&<Navigate to="/Admin" />}
        {isAgentLoggedIn && <Navigate to="/Agent" />}

      </div>
    </>
  );
}

export default EmployeeLogin;
