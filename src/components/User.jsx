import styles from "./User.module.css";
import { useAuth } from "../contexts/FakeAuthContext.jsx";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleClick() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
