import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { BrowserRouter as  Router, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
// import Customer from '../Customer/Customer';
// import { useNavigate } from 'react-router-dom';

interface State {
  loginUsername: string;
  loginPassword: string;
  newUsername: string;
  password: string;
  confirmPassword: string;
  message: string;
  passwordMatch: boolean;
  buttonClicked: boolean;
  loginClicked: boolean;
}

const testLogin: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState<State>({
    loginUsername: '',
    loginPassword: '',
    newUsername: '',
    password: '',
    confirmPassword: '',
    message: '',
    passwordMatch: false,
    buttonClicked: false,
    loginClicked: false,
  });

  // const navigate = useNavigate();

  const submitPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('onSubmit Works');
    const { password, confirmPassword } = state;
    setState((prevState) => ({
      ...prevState,
      passwordMatch: password === confirmPassword,
    }));

    if (!state.passwordMatch) {
      setState((prevState) => ({
        ...prevState,
        message: 'Password dint matched',
      }));
    } else {
      toast.success('Sign up successful', {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    setState((prevState) => ({
      ...prevState,
      buttonClicked: true,
    }));

    console.log('state.buttonClicked', state.buttonClicked);

    setState((prevState) => ({
      ...prevState,
      newUsername: '',
      password: '',
      confirmPassword: '',
    }));
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      loginClicked: true,
    }));
    console.log('login working');
    // navigate('/customer');
  };

  const storeValues = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { value, id } = event.currentTarget;

    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <div>
        <h2>testLogin</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="loginUsername"
            name="username"
            value={state.loginUsername}
            onChange={storeValues}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            value={state.loginPassword}
            onChange={storeValues}
            required
          />
          <button type="submit" value="testLogin" onClick={handleOnClick}>
            testLogin
          </button>
        </form>
        {/* {state.loginClicked ? ( */}
        
        <h2>Sign up</h2>
        <form>
          <label htmlFor="new-username">Username:</label>
          <input
            type="text"
            id="newUsername"
            name="new-username"
            value={state.newUsername}
            onChange={storeValues}
            required
          />

          <label htmlFor="new-password">Password:</label>
          <input
            type="password"
            id="password"
            name="new-password"
            value={state.password}
            onChange={storeValues}
            required
          />

          <label htmlFor="confirm-password">Retype Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirm-password"
              value={state.confirmPassword}
              onChange={storeValues}
              required
            />

            <div id="password-match">{state.passwordMatch ? '' : state.message}</div>
            <div>
              <button type="submit" onClick={submitPassword}>
                Sign Up
              </button>
              <ToastContainer /> 
            </div>
          </form>
        </div>
        
      </>

    );
  }


export default testLogin;