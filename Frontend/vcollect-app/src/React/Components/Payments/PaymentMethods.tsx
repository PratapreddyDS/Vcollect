import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { constants } from '../../../constants';

const PaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('credit');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [installmentNumber, setInstallmentNumber] = useState('');

  // useEffect(() => {
  //   const loanId = localStorage.getItem('Cust_id');
  //   fetch(constants.backendAPi + 'api/getInstallmentNumber/' + loanId)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       data.installmentNumber = 1
  //       setInstallmentNumber(data.installmentNumber);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleCardNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardNumber(e.target.value);
  };

  const handleCardTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardType(e.target.value);
  };

  const handleExpiryDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCvv(e.target.value);
  };

  const handleNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInstallmentNumber(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Do payment processing here

    toast.success('Payment Done successfully', {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    console.log('Card Number', cardNumber);
    console.log('Card Type', cardType);
    console.log('Expiry Date', expiryDate);
    console.log('CVV', cvv);
    console.log('Installment Number', installmentNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} />
      </div>
      <div>
        <label htmlFor="cardType">Card Type:</label>
        <select id="cardType" value={cardType} onChange={handleCardTypeChange}>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
        </select>
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" value={expiryDate} onChange={handleExpiryDateChange} />
      </div>
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} />
      </div>
      <div>
        <label htmlFor="installmentNumber">Installment Number:</label>
        <input type="text" id="installmentNumber" value={installmentNumber} onChange={handleNumberChange}/>
      </div>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentMethod;
