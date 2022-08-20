import React from "react";

const TransactionCard = ({ transaction }) => {
  return (
    <div className="transaction-card">
      <p>{transaction.developer}</p>
      <p>{transaction.date}</p>
      <p>{transaction.status}</p>
      <p>{transaction.credits}</p>
    </div>
  );
};

export default TransactionCard;
