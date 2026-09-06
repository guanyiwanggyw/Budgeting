import React from "react";
import "../../styles/Account.css"; // Temporarily transactions will use the same .css as account

function Transaction({ transaction, onDelete }) {
  /*
  Temporarily Transacation will borrow Account.css for the sake of aesthetics
   */
  return (
    <div className="account-container">
      <p className="account-name">{transaction.date}</p>
      <p className="account-balance">{transaction.type}</p>
      <p className="account-balance">£{transaction.amount}</p>
      <p className="account-balance">{transaction.category}</p>
      <p className="account-balance">From: {transaction.sent_from}</p>
      <p className="account-balance">To: {transaction.sent_to}</p>
      <p className="account-balance">{transaction.note}</p>

      <button
        className="delete-button"
        onClick={() => onDelete(transaction.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Transaction;
