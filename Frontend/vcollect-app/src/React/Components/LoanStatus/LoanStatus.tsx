import React, { useState } from "react";
import { constants } from "../../../constants";
import "./LoanStatus.css";

const LoanStatus = () => {
  const [loanStatus, setLoanStatus] = useState("");

  const checkLoanStatus = () => {
    const loan_id = localStorage.getItem("Cust_id");
    console.log("Get the load_id",loan_id)
    fetch(constants.backendAPi + "api/loanStatus/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loan_id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data in status", data);
        setLoanStatus(data[0]['decision']);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loan-status">
      <label htmlFor="loanStatus">Loan Status</label>
      <input
        type="text"
        id="loanStatus"
        value={loanStatus}
        readOnly
        className="loan-status__input"
      />
      <button onClick={checkLoanStatus} className="loan-status__button">
        Check Status
      </button>
    </div>
  );
};

export default LoanStatus;
