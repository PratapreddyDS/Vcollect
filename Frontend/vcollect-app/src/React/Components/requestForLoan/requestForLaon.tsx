import React, { useState } from 'react';
import { constants } from '../../../constants';
import { toast } from 'react-toastify';


const LoanDetails = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [installments, setInstallments] = useState('');

  interface Loan {
    Loan_Amount: string;
    NumberOfInstallments: string;
    Cur_Instal_TobePaid: number;
    Status: string;
    Paid_total: number;
    Account_Status: string;
    Cust_Id: string|null;
  }
  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loanObject: Loan = {
      Loan_Amount: loanAmount,
      NumberOfInstallments: installments,
      Cur_Instal_TobePaid: 1,
      Status: 'Wait',
      Paid_total: 0,
      Account_Status: 'Pending',
      Cust_Id: localStorage.getItem("Cust_id"),
    };
   
    console.log('check the requested data', loanObject)


    fetch(constants.backendAPi+'api/loanRequest/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
          loanObject
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
      toast.success('Successfully requested Loan', {
        position: toast.POSITION.TOP_CENTER,
      });

      if(data["status"] ===200){
        
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





  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loanAmount">Loan Amount:</label>
      <input type="number" id="loanAmount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} required />

      <label htmlFor="installments">Number of Installments:</label>
      <input type="number" id="installments" value={installments} onChange={(e) => setInstallments(e.target.value)} required />


      <button type="submit">Submit</button>

    </form>
  );
}

export default LoanDetails;