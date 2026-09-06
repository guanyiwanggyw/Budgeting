import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { clearAuthTokens } from "../auth";
import Account from "../components/Account";
import "../styles/Home.css";
import LogoutButton from "../components/LogoutButton";
import AccountForm from "../components/AccountForm";
import TransactionForm from "../components/TransactionForm";

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
