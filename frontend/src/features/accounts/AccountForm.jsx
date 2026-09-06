import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Account from "./Account";
import "../../styles/Form.css";

function AccountForm({ route, method }) {
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAccounts();
  }, []);

  const getAccounts = () => {
    api
      .get("/api/accounts/")
      .then((res) => res.data)
      .then((data) => {
        (setAccounts(data), console.log(data));
      })
      .catch((err) => alert(err));
  };

  const deleteAccount = (id) => {
    api
      .delete(`/api/accounts/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Account was deleted");
        else alert("Failed to delete account!");
        getAccounts();
      })
      .catch((err) => alert(err));
  };

  const createAccount = (e) => {
    e.preventDefault();
    api
      .post("/api/accounts/", { balance, name })
      .then((res) => {
        if (res.status === 201) {
          setName("");
          setBalance("");
        } else alert("Failed to add account");
        getAccounts();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Accounts</h2>
        {accounts.map((account) => (
          <Account
            account={account}
            onDelete={deleteAccount}
            key={account.id}
          />
        ))}
      </div>

      <h2>Add an account</h2>
      <form onSubmit={createAccount}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="balance">Balance:</label>
        <br />
        <input
          type="text"
          inputmode="numeric"
          pattern="^\d*(\.\d{0,2})?$"
          id="balance"
          step="0.01"
          required
          onChange={(e) => setBalance(e.target.value)}
          value={balance}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default AccountForm;
