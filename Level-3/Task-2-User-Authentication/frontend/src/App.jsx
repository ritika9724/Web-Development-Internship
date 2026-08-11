import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [registeredUser, setRegisteredUser] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // REGISTER
  // =========================
  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setRegisteredUser(null);

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const registeredName = name;
      const registeredEmail = email;

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      setRegisteredUser({
        name: registeredName,
        email: registeredEmail,
      });

      setMessage(
        response.data.message || "Registration successful!"
      );

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Registration error:", err);

      setError(
        err.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOGIN
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!loginEmail || !loginPassword) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setUser(response.data.user);

      setLoginEmail("");
      setLoginPassword("");
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err.response?.data?.message ||
          "Login failed. Please check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setMessage("");
    setError("");
    setRegisteredUser(null);
  };

  // =========================
  // PROFILE
  // =========================
  if (user) {
    return (
      <div className="app">
        <div className="auth-container">

          <div className="auth-header">
            <h1>🔐 User Authentication</h1>
            <p>Secure JWT Authentication System</p>
          </div>

          <div className="auth-card profile-card">

            <div className="profile-icon">
              👤
            </div>

            <h2>Welcome, {user.name}!</h2>

            <p>
              You are successfully logged in.
            </p>

            <div className="profile-info">

              <div className="info-item">
                <span>Name</span>
                <strong>{user.name}</strong>
              </div>

              <div className="info-item">
                <span>Email</span>
                <strong>{user.email}</strong>
              </div>

            </div>

            <div className="protected-badge">
              🔒 JWT Protected Profile
            </div>

            <button
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    );
  }

  // =========================
  // LOGIN / REGISTER
  // =========================
  return (
    <div className="app">
      <div className="auth-container">

        <div className="auth-header">
          <h1>🔐 User Authentication</h1>
          <p>Secure JWT Authentication System</p>
        </div>

        <div className="auth-card">

          {showRegister ? (
            <>
              <h2>Create Account</h2>
              <p>Register a new account</p>

              {message && registeredUser && (
                <div className="success-message">

                  <div className="success-title">
                    ✅ {message}
                  </div>

                  <div className="registration-details">

                    <div className="registration-item">
                      <span>Registered Name</span>
                      <strong>
                        {registeredUser.name}
                      </strong>
                    </div>

                    <div className="registration-item">
                      <span>Registered Email</span>
                      <strong>
                        {registeredUser.email}
                      </strong>
                    </div>

                    <p className="login-note">
                      Account created successfully.
                      You can now login with this account.
                    </p>

                  </div>
                </div>
              )}

              {error && (
                <div className="error-message">
                  ❌ {error}
                </div>
              )}

              {!registeredUser && (
                <form onSubmit={handleRegister}>

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />

                  <button type="submit">
                    {loading
                      ? "Registering..."
                      : "Register"}
                  </button>

                </form>
              )}

              <div className="switch">
                Already have an account?

                <button
                  type="button"
                  className="link-button"
                  onClick={() => {
                    setShowRegister(false);
                    setMessage("");
                    setError("");
                    setRegisteredUser(null);
                  }}
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>Welcome Back</h2>
              <p>Login to your account</p>

              {error && (
                <div className="error-message">
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleLogin}>

                <input
                  type="email"
                  placeholder="Email Address"
                  value={loginEmail}
                  onChange={(e) =>
                    setLoginEmail(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) =>
                    setLoginPassword(e.target.value)
                  }
                />

                <button type="submit">
                  {loading
                    ? "Logging in..."
                    : "Login"}
                </button>

              </form>

              <div className="switch">
                Don't have an account?

                <button
                  type="button"
                  className="link-button"
                  onClick={() => {
                    setShowRegister(true);
                    setMessage("");
                    setError("");
                  }}
                >
                  Register
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;