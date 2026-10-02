import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    localStorage.setItem("cmsUser", JSON.stringify(user));

    alert("Signup successful!");

    navigate("/");
  };

  return (
    <div>
      <h1>CMS Signup</h1>

      <form onSubmit={handleSignup}>
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

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;