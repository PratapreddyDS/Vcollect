

/* eslint-disable react/no-direct-mutation-state */
import React, { ChangeEvent, Component } from 'react';
// import Success from '../Success/Success';
import './login.css';
import '../Success/Success.css';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Customer from '../Customer/Customer';
// import { useNavigate } from 'react-router-dom';



interface State {
  loginUsername: string;
  loginPassword: string;
  newUsername: string;
  password: string;
  confirmPassword: string;
  message : string;
  passwordMatch: boolean;
  buttonClicked: boolean,
  loginClicked: boolean

}

interface Props {}

class Login extends Component<Props, State> {
  state = {
    loginUsername: '',
    loginPassword: '',
    newUsername:'',
    password: '',
    confirmPassword: '',
    message: '',
    passwordMatch: false,
    buttonClicked: false,
    loginClicked : false,
  };

  submitPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('onSubmit Works');
    const { password, confirmPassword } = this.state;
    this.state.passwordMatch = password === confirmPassword;



    if(!this.state.passwordMatch){
        this.state.message = 'Password dint matched'
    }else{
        toast.success('Sign up successfull', {
            position: toast.POSITION.TOP_CENTER
          });
    }
    
    this.state.buttonClicked = true;

    console.log("this.state.buttonClicked",this.state.buttonClicked)

    this.setState({ 

        newUsername:'',
        password: '',
        confirmPassword: '',

    })
    
  };

  handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) =>{

    event.preventDefault();
    this.setState({ loginClicked: true });
    console.log('login working')
    // this.navigate('/customer');


  }


  storeValues = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { value, id } = event.currentTarget;

    this.setState({
        [id]: value,
    } as unknown as Pick<State, keyof State>);
  };

  render() {
    
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
              value={this.state.loginUsername}
              onChange={this.storeValues}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="loginPassword"
              name="password"
              value={this.state.loginPassword}
              onChange={this.storeValues}
              required
            />
            <button 
                type="submit" 
                value="Login"
                onClick={this.handleOnClick}> 
                Login </button>
          </form>
          { this.state.loginClicked ? (< Customer/>): null}

          <h2>Sign up</h2>
          <form>
            <label htmlFor="new-username">Username:</label>
            <input 
                type="text" 
                id="newUsername" 
                name="new-username" 
                value={this.state.newUsername}
                onChange={this.storeValues}
                required />

            <label htmlFor="new-password">Password:</label>
            <input
              type="password"
              id="password"
              name="new-password"
              value={this.state.password}
              onChange={this.storeValues}
              required
            />

            <label htmlFor="confirm-password">Retype Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirm-password"
              value={this.state.confirmPassword}
              onChange={this.storeValues}
              required
            />

            <div id="password-match">{this.state.passwordMatch ? '' : this.state.message}</div>
            <div>
              <button type="submit" onClick={this.submitPassword}>
                Sign Up
              </button>
              <ToastContainer /> 
            </div>
          </form>
        </div>
        
      </>

    );
  }
}

export default Login;




