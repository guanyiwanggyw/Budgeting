import { clearAuthTokens } from "../auth";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthTokens();
    navigate("/login");
  };

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
