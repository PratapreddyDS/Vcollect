import React, { useState } from 'react';
import { constants } from '../../../constants';

interface LoanRequest {
  id: number;
  loanId: number;
  moneyBorrowing: number;
  installments: number;
  decision: string;
}

function LoanRequestsTable() {
  const [loanRequests, setLoanRequests] = useState<LoanRequest[]>([]);

  fetch(constants.backendAPi+'api/loanRequest/')
    .then(response => response.json())
    .then(data => setLoanRequests(data));

const handleApprove = (loanId: number) => {
    fetch(constants.backendAPi + 'api/loanRequest/', {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Loan_Id : loanId,
            Status: 'Approved', // set the status field to 'Approved'
            // Account_Status : 'open'
        }),
    })
        .then((response) => {
        if (response.ok) {
            console.log('Loan request approved successfully');
            // update the loan request in the local state with the new status
            setLoanRequests((prevRequests) =>
            prevRequests.map((request) =>
                request.id === loanId ? { ...request, decision: 'Approved' } : request
            )
            );
        } else {
            console.error('Error approving loan request:', response.statusText);
        }
        })
        .catch((error) => {
        console.error('Error approving loan request:', error);
        });
    };
      

  const handleReject = (loanId: number) => {
    // send request to backend API to reject loan with given ID
    console.log("loan-Rejection",loanId)

    fetch(constants.backendAPi + 'api/loanRequest/', {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          Loan_Id : loanId,
          Status: 'Rejected', // set the status field to 'Approved'
          // Account_Status : 'open'
      }),
  })
      .then((response) => {
      if (response.ok) {
          console.log('Loan request approved successfully');
          // update the loan request in the local state with the new status
          setLoanRequests((prevRequests) =>
          prevRequests.map((request) =>
              request.id === loanId ? { ...request, decision: 'Approved' } : request
          )
          );
      } else {
          console.error('Error approving loan request:', response.statusText);
      }
      })
      .catch((error) => {
      console.error('Error approving loan request:', error);
      });

  };

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Loan ID</th>
          <th>Requested Loan</th>
          <th>Installments</th>
          <th>Decision</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {loanRequests.map((loanRequest) => (
          <tr key={loanRequest.id}>
            <td>{"VCL000000"+loanRequest.loanId}</td>
            <td>{loanRequest.moneyBorrowing}</td>
            <td>{loanRequest.installments}</td>
            <td>{loanRequest.decision}</td>
            <td>
              <button className="approve-button" onClick={() => handleApprove(loanRequest.loanId)}>Approve</button>
              <button className="reject-button" onClick={() => handleReject(loanRequest.loanId)}>Reject</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LoanRequestsTable;
