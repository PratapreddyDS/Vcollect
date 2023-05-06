import React, { useState } from 'react';
import Customer from '../Customer/Customer';
import Installments from '../Instalments/Intsallments';
import LoanStatus from '../LoanStatus/LoanStatus';
import PaymentMethod from '../Payments/PaymentMethods';
import LoanDetails from '../requestForLoan/requestForLaon';

import './Menu.css';

const Menu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
    // Perform further actions here based on the button clicked
  };

  return (
    <div className="button-stack">
      <button className={activeButton === 'updateDetails' ? 'active' : ''} onClick={() => handleButtonClick('updateDetails')}>
        Update Details
      </button>
      <button className={activeButton === 'requestForLoan' ? 'active' : ''} onClick={() => handleButtonClick('requestForLoan')}>
        Request for Loan
      </button>
      <button className={activeButton === 'loanStatus' ? 'active' : ''} onClick={() => handleButtonClick('loanStatus')}>
        Loan Status
      </button>
      <button className={activeButton === 'paymentOptions' ? 'active' : ''} onClick={() => handleButtonClick('paymentOptions')}>
        Payment Options
      </button>
      <button className={activeButton === 'installments' ? 'active' : ''} onClick={() => handleButtonClick('installments')}>
        Installments
      </button>
      {/* <button className={activeButton === 'loanAccountStatus' ? 'active' : ''} onClick={() => handleButtonClick('loanAccountStatus')}>
        Loan Account Status
      </button> */}

      <div className="content">
        {activeButton === 'updateDetails' && <Customer />}
        {activeButton === 'requestForLoan' && <LoanDetails />}
        {activeButton === 'paymentOptions' && <PaymentMethod />}
        {activeButton === 'loanStatus' && <LoanStatus />}
        {activeButton === 'installments' && <Installments />}



        {/* Add the rest of your page content here */}
      </div>

    </div>
  );
};

export default Menu;
