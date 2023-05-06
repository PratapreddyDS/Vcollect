
import Login from './Components/login/login';
import Customer from './Components/Customer/Customer';
import Menu from './Components/Menu/Menu';
// import UpdateDetails from './Components/UpdateDetails/UpdateDetails';
import LoanDetails from './Components/requestForLoan/requestForLaon';


// Import necessary components from React Router
// import { Router, useRoutes, Navigator, Routes, Route } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentMethod from './Components/Payments/PaymentMethods';
import LoanStatus from './Components/LoanStatus/LoanStatus';
import Installments from './Components/Instalments/Intsallments';
import AgentView from './Components/Agent/Agent';
import HomeLogin from './Components/HomeLogin/HomeLogin';
import EmployeeLogin from './Components/EmployeeLogin/EmployeeLogin';
import AdminApproval from './Components/Admin/Admin';


// Define your routes using useRoutes hook
const App = () => {
  // Use useRoutes hook to define your routes
  // let element = useRoutes([
  //   { path: '/Login', element: <Login /> },
  //   { path: '/customer', element: <Customer /> },
  //   { path: '/Home', element: <MainHome />},
  //   {path: '/update', element: <UpdateDetails/>},
  //   {path: '/loanRequest', element: <LoanDetails/>}
  // ]);

  return (
    <div>
      <h1>V`Collect</h1>
      {/* Render the routes using the element returned by useRoutes */}
      {/* {element} */}

      <Router >
        <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/EmployeeLogin" element={< EmployeeLogin />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path='/customer' element={ <Customer />} />
          <Route path='/loanRequest' element={ <LoanDetails />} />
          <Route path="/Payments" element={<PaymentMethod />} />
          <Route path="/LoanStatus" element={<LoanStatus />} />
          <Route path="/Installments" element={<Installments />} />
          <Route path="/Agent" element={<AgentView />} />
          <Route path="/Admin" element={<AdminApproval />} />


        </Routes>
      </Router>

    </div>
  );
};

// Wrap your App component with Router component and pass location and navigator props
// const Root = () => {
//   return (
//     <Router location={window.location.pathname} navigator={window.navigator as unknown as Navigator}>
//       <App />
//     </Router>
//   );
// };

export default App;
