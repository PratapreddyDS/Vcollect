import React from 'react';
import './Home.css';
// import customerImage from './customerImage.png'; // Import the customer image
// import employeeImage from './employee.jpg'; // Import the employee image

interface HomePageProps {
  onLogin: (userType: string) => void;
  onSearch: (query: string) => void;
}

const Home: React.FC<HomePageProps> = ({ onLogin, onSearch }) => {
  return (
    <div className="homepage">
      <header>
        <div>
          <img src="path/to/logo.png" alt="Logo" />
          <h1>Loan Application</h1>
        </div>
        <div>
          <button id="customer-login" onClick={() => onLogin('customer')}>
            Customer Login
          </button>
          <button id="employee-login" onClick={() => onLogin('employee')}>
            Employee Login
          </button>
        </div>
      </header>
      <div id="search-bar">
        <input type="text" id="search-input" placeholder="Search" />
        <button id="search-button" onClick={() => onSearch('search query')}>
          Search
        </button>
      </div>
    <div>
        <img src="customerImage.png" alt='Customer_image'/>
        <h2>Customer Login</h2>
        <p>Log in as a customer to apply for a loan or check your application status.</p>
        <button onClick={() => onLogin('customer')}>Customer Login</button>
      </div>
      <div>
        <img src="employeeImage.png" alt='employee_image'/>
        <h2>Employee Login</h2>
        <p>Log in as an employee to review loan applications and make decisions.</p>
        <button onClick={() => onLogin('employee')}>Employee Login</button>
      </div>
    </div>
  );
};

export default Home;