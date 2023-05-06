import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import "./HomeLogin.css";

const HomeLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isEmployeeIn, setisEmployeeIn] = useState(false);



  const handleCustomerLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsLoggedIn(true);
    };

  const handleEmployeeLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setisEmployeeIn(true);
};

  return (
    <div className="home-page-container">
      <div className="home-page-left">
        <h1>Welcome to our Application</h1>
        <p>
          No Need To Worry About the Money. Get all you need, we care about your every transaction.
        </p>
      </div>
      <div className="home-page-right">
        <button className="customer-login-button" onClick={handleCustomerLogin}>
          Customer Login
        </button>
        {isLoggedIn &&<Navigate to="/login" />}
        <button className="employee-login-button" onClick={handleEmployeeLogin}>
          Employee Login
        </button>
        {isEmployeeIn &&<Navigate to="/EmployeeLogin" />}
      </div>
    </div>
  );
};

export default HomeLogin;