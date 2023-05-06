

// /* eslint-disable react/no-direct-mutation-state */
// import React, { ChangeEvent, Component } from 'react';
// // import Success from '../Success/Success';
// import './login.css';
// import '../Success/Success.css';


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Customer from '../Customer/Customer';
// // import { useNavigate } from 'react-router-dom';



// interface State {
//   loginUsername: string;
//   loginPassword: string;
//   newUsername: string;
//   password: string;
//   confirmPassword: string;
//   message : string;
//   passwordMatch: boolean;
//   buttonClicked: boolean,
//   loginClicked: boolean

// }

// interface Props {}

// class Login extends Component<Props, State> {
//   state = {
//     loginUsername: '',
//     loginPassword: '',
//     newUsername:'',
//     password: '',
//     confirmPassword: '',
//     message: '',
//     passwordMatch: false,
//     buttonClicked: false,
//     loginClicked : false,
//   };

//   submitPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     console.log('onSubmit Works');
//     const { password, confirmPassword } = this.state;
//     this.state.passwordMatch = password === confirmPassword;
//     if(!this.state.passwordMatch){
//         this.state.message = 'Password dint matched'
//     }else{
//         toast.success('Sign up successfull', {
//             position: toast.POSITION.TOP_CENTER
//           });
//     }
    
//     this.state.buttonClicked = true;

//     console.log("this.state.buttonClicked",this.state.buttonClicked)

//     this.setState({ 

//         newUsername:'',
//         password: '',
//         confirmPassword: '',

//     })
    
//   };

//   handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) =>{

//     event.preventDefault();
//     this.setState({ loginClicked: true });
//     console.log('login working')
//     // this.navigate('/customer');


//   }


//   storeValues = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     const { value, id } = event.currentTarget;

//     this.setState({
//         [id]: value,
//     } as unknown as Pick<State, keyof State>);
//   };

//   render() {
    
//     return (
//       <>
//         <div>
//           <h2>Login</h2>
//           <form>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="loginUsername"
//               name="username"
//               value={this.state.loginUsername}
//               onChange={this.storeValues}
//               required
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="loginPassword"
//               name="password"
//               value={this.state.loginPassword}
//               onChange={this.storeValues}
//               required
//             />
//             <button 
//                 type="submit" 
//                 value="Login"
//                 onClick={this.handleOnClick}> 
//                 Login </button>
//           </form>
//           { this.state.loginClicked ? (< Customer/>): null}

//           <h2>Sign up</h2>
//           <form>
//             <label htmlFor="new-username">Username:</label>
//             <input 
//                 type="text" 
//                 id="newUsername" 
//                 name="new-username" 
//                 value={this.state.newUsername}
//                 onChange={this.storeValues}
//                 required />

//             <label htmlFor="new-password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="new-password"
//               value={this.state.password}
//               onChange={this.storeValues}
//               required
//             />

//             <label htmlFor="confirm-password">Retype Password:</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirm-password"
//               value={this.state.confirmPassword}
//               onChange={this.storeValues}
//               required
//             />

//             <div id="password-match">{this.state.passwordMatch ? '' : this.state.message}</div>
//             <div>
//               <button type="submit" onClick={this.submitPassword}>
//                 Sign Up
//               </button>
//               <ToastContainer /> 
//             </div>
//           </form>
//         </div>
        
//       </>

//     );
//   }
// }

// export default Login;


import React, { ChangeEvent, useState } from 'react';
import './login.css';
import '../Success/Success.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink } from 'react-router-dom';
import Customer from '../Customer/Customer';
import Menu from '../Menu/Menu';
import { constants } from '../../../constants';
// import { useNavigate } from 'react-router-dom';

import { useNavigate } from 'react-router';
import { Navigate } from "react-router-dom";



const Login = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate;
  // const [buttonClicked, setButtonClicked] = useState(false);
  // const [loginClicked, setLoginClicked] = useState(false);

  const submitPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isPasswordMatch = password === confirmPassword;
    setPasswordMatch(isPasswordMatch);
    if (!isPasswordMatch) {
      setMessage('Passwords do not match');
    } else {

      console.log("Into the Handle Login")
      fetch(constants.backendAPi+'api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Username: newUsername,
          Password: confirmPassword,
          Role : "Customer"
        })
      })
      .then(response => {
        console.log("check response",response)
        if (response.status === 226){
          toast.success('User already exists', {
            position: toast.POSITION.TOP_CENTER
          });
        }
        if (!response.ok) {
            toast.success('Sign up is not successful', {
            position: toast.POSITION.TOP_CENTER
          });
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Handle successful response from server
        // setIsLoggedIn(true);
        if(data["status"] ===200){
          toast.success('Sign up successful', {
            position: toast.POSITION.TOP_CENTER,
          });
          // window.location.href = 'Customer';
        }else if(data["status"] ===401){

          toast.success(data["Message"], {
            position: toast.POSITION.TOP_CENTER
          });

        }
        else{
          toast.success('Sign up is not successful', {
            position: toast.POSITION.TOP_CENTER
          });
  
        }
  
      })
      .catch(error => {
        console.error('There was a problem with the login request:', error); // Handle error from server
      });

      // toast.success('Sign up successful', {
      //   position: toast.POSITION.TOP_CENTER
      // });
    }
    // setButtonClicked(true);
    setNewUsername('');
    setPassword('');
    setConfirmPassword('');
  };



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
        // navigate('/customer', { state: { username: String(loginUsername) } });
        // window.location.href = 'Customer';
        console.log(data["data"]["Cust_Id"])
        localStorage.setItem('Cust_id', data["data"]["Cust_Id"]);

        setIsLoggedIn(true);

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
      case 'newUsername':
        setNewUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
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
        {isLoggedIn &&<Navigate to="/Menu" />}

        <h2>Sign up</h2>
        <form>
          <label htmlFor="new-username">Username:</label>
          <input
            type="text"
            id="newUsername"
            name="new-username"
            value={newUsername}
            onChange={storeValues}
            required
          />

          <label htmlFor="new-password">Password:</label>
          <input
            type="password"
            id="password"
            name="new-password"
            value={password}
            onChange={storeValues}
            required
          />

          <label htmlFor="confirm-password">Retype Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirm-password"
            value={confirmPassword}
            onChange={storeValues}
            required
          />

          <div id="password-match">{passwordMatch ? '' : message}</div>
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

export default Login;
