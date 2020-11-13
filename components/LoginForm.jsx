import { useDispatch } from "react-redux";
import { login } from "../store";

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(login("andrekmbv", "admin"))}>Login</button>
  );
};

export default LoginForm;
