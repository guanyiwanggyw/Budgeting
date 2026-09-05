import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import Transaction from "../components/Transaction";
import "../styles/Form.css";

function TransactionForm({ route, method }) {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [sent_from, setSentFrom] = useState("");
  const [sent_to, setSentTo] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = () => {
    api
      .get("/api/transactions/")
      .then((res) => res.data)
      .then((data) => {
        (setTransactions(data), console.log(data));
      })
      .catch((err) => alert(err));
  };

  const deleteTransaction = (id) => {
    api
      .delete(`/api/transaction/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Transaction was deleted");
        else alert("Failed to delete transaction!");
        getTransactions();
      })
      .catch((err) => alert(err));
  };

  const createTransaction = (e) => {
    e.preventDefault();
    api
      .post("/api/transactions/", {
        date,
        type,
        amount,
        category,
        sent_from,
        sent_to,
        note,
      })
      .then((res) => {
        if (res.status === 201) {
          setDate("");
          setType("");
          setAmount("");
          setCategory("");
          setSentFrom("");
          setSentTo("");
          setNote("");
        } else alert("Failed to add account");
        getTransactions();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Transactions</h2>
        {transactions.map((transaction) => (
          <Transaction
            transaction={transaction}
            onDelete={deleteTransaction}
            key={transaction.id}
          />
        ))}
      </div>

      <h2>Add a transaction</h2>
      <form onSubmit={createTransaction}>
        <label htmlFor="date">Date:</label>
        <br />
        <input
          type="text"
          id="date"
          required
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <label htmlFor="type">Type:</label>
        <br />
        <input
          type="text"
          id="type"
          required
          onChange={(e) => setType(e.target.value)}
          value={type}
        />

        <label htmlFor="amount">Amount:</label>
        <br />
        <input
          type="text"
          inputmode="numeric"
          pattern="^\d*(\.\d{0,2})?$"
          id="balance"
          required
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <label htmlFor="category">Category:</label>
        <br />
        <input
          type="text"
          id="category"
          required
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <label htmlFor="sent_from">Sent from:</label>
        <br />
        <input
          type="text"
          id="sent_from"
          required
          onChange={(e) => setSentFrom(e.target.value)}
          value={sent_from}
        />

        <label htmlFor="sent_to">Sent to:</label>
        <br />
        <input
          type="text"
          id="sent_to"
          required
          onChange={(e) => setSentTo(e.target.value)}
          value={sent_to}
        />

        <label htmlFor="note">Note:</label>
        <br />
        <input
          type="text"
          id="note"
          required
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default TransactionForm;
