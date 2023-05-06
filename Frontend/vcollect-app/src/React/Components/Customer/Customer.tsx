import './Customer.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { constants } from '../../../constants';


const Customer = () => {
  const Marital_Status = ['Married', 'Unmarried', 'Divorce'];

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    ssn: '',
    age:'' ,
    Marital_Status: '',
    emailId: '',
    Salary: '',
    TotalAssets: '',
    cust_id:localStorage.getItem("Cust_id")
  });

  // const [showForm, setShowForm] = useState(false); // State to toggle form visibility


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log("name:" +name)
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (e: FormEvent<HTMLFormElement| HTMLSelectElement >) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('FormData:',formData);
    console.log("is console is working",localStorage.getItem('Cust_id'))
    fetch(constants.backendAPi+'api/Register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formData
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



    setFormData({
    lastName: '',
    firstName: '',
    ssn: '',
    age:'' ,
    Marital_Status: '',
    emailId: '',
    Salary: '',
    TotalAssets: '',
    cust_id:''
    });
    // setShowForm(false);
  };


  

  return (
    <div>

      <form onSubmit={handleSubmit}>         

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          maxLength={40}
        />

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          maxLength={40}
        />


        <label htmlFor="ssn">SSN:</label>
        <input
          type="number"
          id="ssn"
          name="ssn"
          value={formData.ssn}
          onChange={handleChange}
          required
          minLength={9}
          maxLength={9}
        />

      <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          maxLength={3}
        />

      <label htmlFor="Marital_Status">Marital Status:</label>
        <select
          id="Marital_Status"
          name="Marital_Status"
          value={formData.Marital_Status}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          {Marital_Status.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <label htmlFor="emailId">Email ID:</label>
        <input
          type="text"
          id="emailId"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
          required

        />

        <label htmlFor="Salary">Salary:</label>
        <input
          type="number"
          id="Salary"
          name="Salary"
          value={formData.Salary}
          onChange={handleChange}
          required
          maxLength={10}
        />

      <label htmlFor="TotalAssets">Total Assets:</label>
        <input
          type="number"
          id="TotalAssets"
          name="TotalAssets"
          value={formData.TotalAssets}
          onChange={handleChange}
          required
          maxLength={10}
        />


        <button  type="submit"  >Submit</button>
        </form>
    </div>
  );
};

export default Customer;



