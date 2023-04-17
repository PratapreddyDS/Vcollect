
import Login from './Components/login/login';
import Customer from './Components/Customer/Customer';

// Import necessary components from React Router
import { Router, useRoutes, Navigator } from 'react-router-dom';


// Define your routes using useRoutes hook
const App = () => {
  // Use useRoutes hook to define your routes
  let element = useRoutes([
    { path: '/Login', element: <Login /> },
    { path: '/customer', element: <Customer /> }
  ]);

  return (
    <div>
      <h1>V`Collect</h1>
      {/* Render the routes using the element returned by useRoutes */}
      {element}
    </div>
  );
};

// Wrap your App component with Router component and pass location and navigator props
const Root = () => {
  return (
    <Router location={window.location.pathname} navigator={window.navigator as unknown as Navigator}>
      <App />
    </Router>
  );
};

export default Root;
