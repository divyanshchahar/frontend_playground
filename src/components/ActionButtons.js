import { useDispatch } from "react-redux";
import { login, logout } from "../features/users";

function ActionButtons() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Divyansh", age: 29, email: "divyansh@chahar.com" })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ActionButtons;
