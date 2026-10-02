import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("cmsUser"));

    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid username or password. Please sign up first.");
    }
  };

  return (
    <div>
      <h1>CMS Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>

      <br />

      <button onClick={() => navigate("/signup")}>
        Create New Account
      </button>
    </div>
  );
}

export default Login;