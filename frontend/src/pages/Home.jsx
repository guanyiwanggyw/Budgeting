import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { clearAuthTokens } from "../services/auth";
import Account from "../features/accounts/Account";
import LogoutButton from "../components/LogoutButton";
import AccountForm from "../features/accounts/AccountForm";
import TransactionForm from "../features/transactions/TransactionForm";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <AccountForm />
      <TransactionForm />
      <LogoutButton />
    </div>
  );
}

export default Home;
