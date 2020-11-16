import Router from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (selector, value) => {
    if (selector == "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div
      style={{ width: "35%", height: "40vh" }}
      className="bg-yellow-700 flex flex-col space-y-4 justify-center items-center rounded">
      <input
        onChange={(e) => handleChange("username", e.target.value)}
        value={username}
        className="p-2"
        type="text"
      />
      <input
        onChange={(e) => handleChange("password", e.target.value)}
        value={password}
        className="p-2"
        type="password"
      />
      <button
        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch(login(username, password));
          Router.push("/create");
        }}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
