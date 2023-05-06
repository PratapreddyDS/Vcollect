import React, { useState, useEffect } from "react";
import { constants } from "../../../constants";
import "./Installments.css";

interface LoanData {
  installmentNumber: number;
  amount: number;
  dueDate: string;
  status: string;
  [key: string]: any;
}

const Installments = () => {
  const [loanData, setLoanData] = useState<LoanData[]>([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetchLoanData();
  }, []);

  const fetchLoanData = () => {
    fetch(constants.backendAPi + "api/getInstallments/",{

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cust_id: localStorage.getItem("Cust_id"),
      }),


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

  useEffect(() => {
    const sortedData = [...loanData].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];
      
      if (valueA < valueB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    
    setLoanData(sortedData);
  }, [sortKey, sortOrder]);

  return (
    <div>
      {loanData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("installmentNumber")}>Installment number</th>
              <th onClick={() => handleSort("amount")}>Amount</th>
              <th onClick={() => handleSort("dueDate")}>Due date</th>
              <th onClick={() => handleSort("status")}>Status</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((item, index) => (
              <tr key={index}>
                <td>{item.installmentNumber}</td>
                <td>{item.amount}</td>
                <td>{item.dueDate}</td>
                <td>{item.status}</td>
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

export default Installments;
