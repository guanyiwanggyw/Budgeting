import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { clearAuthTokens } from "../auth";
import Account from "../components/Account";
import "../styles/Home.css";

function Home() {
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0.0);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthTokens();
    navigate("/login");
  };

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
        if (res.status === 201) alert("Account added!");
        else alert("Failed to add account");
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
          type="number"
          id="balance"
          step="0.01"
          required
          onChange={(e) => setBalance(e.target.value)}
          value={balance}
        />
        <input type="submit" value="Submit"></input>
      </form>
      <div>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
