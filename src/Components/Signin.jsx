import React, { useState } from "react";
import "./style.css";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Fetch fake users from JSONPlaceholder
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      // Check if email exists
      const user = users.find((u) => u.email === email);

      if (user && password === "1234") {
        // Test password
        setIsLoggedIn(true); // Show dashboard
      } else {
        setError("Incorrect email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };

  // Dashboard component
  const Dashboard = () => (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>☕ Coffee Shop Dashboard</h1>
        <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </header>
      <div className="rectangle" />

      <div className="text-wrapper">Home</div>

      <div className="div">Service</div>

      <div className="text-wrapper-2">Logout</div>

      <div className="text-wrapper-3">Linda James</div>

      <div className="frame">
        <p className="welcome-to-brew">
          <span className="span">
            Welcome to Brew Haven
            <br />
          </span>

          <span className="text-wrapper-4">Every cup has a story to tell</span>
        </p>
      </div>

      <div className="text-wrapper-5">Recent orders</div>

      <div className="espresso-br-wrapper">
        <div className="espresso-br">
          Espresso&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Br.200
          <br />
          Cappuccino&nbsp;&nbsp;Br.270
          <br />
          Latte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Br.400
        </div>
      </div>

      <div className="div-wrapper">
        <div className="espresso-br">
          Espresso&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Br.200
          <br />
          Cappuccino&nbsp;&nbsp;Br.270
          <br />
          Latte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Br.400
        </div>
      </div>
    </div>
  );

  // Login form
  const LoginForm = () => (
    <div className="sign-in">
      <div className="frame">
        <div className="text-wrapper">Login</div>

        <div className="div">Email:</div>
        <input
          className="rectangle"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="div">Password:</div>
        <input
          className="rectangle-2"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div
          className="div-wrapper"
          onClick={handleSubmit}
          style={{ cursor: "pointer" }}
        >
          <div className="text-wrapper-2">Submit</div>
        </div>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );

  return <>{isLoggedIn ? <Dashboard /> : <LoginForm />}</>;
};
