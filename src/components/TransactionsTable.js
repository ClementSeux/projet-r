import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionsTable = () => {
  const data = [
    {
      developer: "Athena",
      status: "Pending",
      date: "2022-01-10",
      credits: 500,
    },
    {
      developer: "Athena",
      status: "Validated",
      date: "2022-01-10",
      credits: 200,
    },
  ];
  return (
    <div className="table-container">
      {data.map((transaction, index) => (
        <TransactionCard key={index} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsTable;
