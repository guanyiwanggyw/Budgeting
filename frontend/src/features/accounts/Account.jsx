import React from "react";
import "../../styles/Account.css";

function Account({ account, onDelete }) {
  return (
    <div className="account-container">
      <p className="account-name">{account.name}</p>
      <p className="account-balance">£{account.balance}</p>
      <button className="delete-button" onClick={() => onDelete(account.id)}>
        Delete
      </button>
    </div>
  );
}

export default Account;
