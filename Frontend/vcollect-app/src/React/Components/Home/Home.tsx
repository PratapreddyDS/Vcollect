import React, { useState } from 'react';
import './Home.css';

interface HomePageProps {
  onLogin: (userType: string) => void;
  onSearch: (query: string) => void;
}

const Home: React.FC<HomePageProps> = ({ onLogin, onSearch }) => {
  const [showCustomerLoginForm, setShowCustomerLoginForm] = useState(false);
  const [showEmployeeLoginForm, setShowEmployeeLoginForm] = useState(false);

  const handleCustomerLoginClick = () => {
    setShowCustomerLoginForm(true);
    setShowEmployeeLoginForm(false);
  };

  const handleEmployeeLoginClick = () => {
    setShowEmployeeLoginForm(true);
    setShowCustomerLoginForm(false);
  };

  return (
    <div className="home-page">
      <div className="top-bar">
        <button id="customer-login" onClick={handleCustomerLoginClick}>
          Customer Login
        </button>
        <button id="employee-login" onClick={handleEmployeeLoginClick}>
          Employee Login
        </button>
      </div>
      <div className="main-content">
        <h1>Welcome to the Loan Application</h1>
        <p>Apply for a loan or check your application status.</p>
        {showCustomerLoginForm && (
          <form>
            <h2>Customer Login</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
            <button type="submit">Login</button>
          </form>
        )}
        {showEmployeeLoginForm && (
          <form>
            <h2>Employee Login</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
