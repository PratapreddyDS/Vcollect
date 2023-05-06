import React, { useState, useEffect } from "react";
import { constants } from "../../../constants";
import "./Agent.css";

interface LoanData {
  installmentNumber: number;
  amount: number;
  dueDate: string;
  status: string;
  [key: string]: any;
}


interface NameData {
  name: string;
}

const AgentView = () => {
  const [selectedName, setSelectedName] = useState("");
  const [loanData, setLoanData] = useState<LoanData[]>([]);
  const [nameData, setNameData] = useState<NameData[]>([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");


  const fetchNamesData = () => {
    fetch(constants.backendAPi + "api/loanList/")
      .then((response) => response.json())
      .then((data) => {
        console.log("check",data);
        setNameData(data);
      })
      .catch((error) => console.log(error));
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedName(event.target.value);
    // make API call to fetch loan data for the selected name
    fetch(constants.backendAPi+'api/getLoanDetails/',{

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
        First_Name : selectedName 
      })

    })
      .then((response) => response.json())
      .then((data) => setLoanData(data))
      .catch((error) => console.log(error));
  };

  const handleButtonClick = (rowIndex: number) => {
    console.log(`Button clicked for row ${rowIndex}`);

    fetch(constants.backendAPi+'api/sendMailToCust/',{

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
        First_Name : selectedName 
      })

    })
      .then((response) => response.json())
      .then((data) => setLoanData(data))
      .catch((error) => console.log(error));


  };

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = loanData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortKey] - b[sortKey];
    } else {
      return b[sortKey] - a[sortKey];
    }
  });

  return (
    <div>
      <label htmlFor="nameSelect">Select a name:</label>
      <select id="nameSelect" value={selectedName} onChange={handleNameChange} onClick={fetchNamesData}>
        <option value="">Select an option</option>
        {nameData.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {loanData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("installmentNumber")}>Installment number</th>
              <th onClick={() => handleSort("amount")}>Amount</th>
              <th onClick={() => handleSort("dueDate")}>Due date</th>
              <th onClick={() => handleSort("status")}>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td>{item.installmentNumber}</td>
                <td>{item.amount}</td>
                <td>{item.dueDate}</td>
                <td>{item.status}</td>
                <td>

                  <button onClick={() => handleButtonClick(index)}>
                    Button
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No loan data available.</p>
      )}
    </div>
  );
};

export default AgentView;
