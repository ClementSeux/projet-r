import React from "react";

const TransactionCard = ({ transaction }) => {
  return (
    <div className="transaction-card">
      <div className="developer">
        <p>Développeur</p>
        <p>
          <span className="bold-text">{transaction.developer}</span>
        </p>
      </div>
      <p>{transaction.date}</p>
      <p>{transaction.status}</p>
      <p>{transaction.credits}</p>
    </div>
  );
};

export default TransactionCard;
