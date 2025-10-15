import { useState } from "react";
import "../../styles/auth/loginForm.css";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-container">
      <button className="back-btn">
        <ChevronLeft width={22} height={24} /> Back
      </button>

      <h1 className="login-title">Login to your account</h1>

      <p className="login-subtitle">Enter your log in details.</p>

      <form className="login-form">
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            className="login-form-input"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff
                  width={22}
                  height={24}
                  color="#4C5361"
                  strokeWidth={1.5}
                />
              ) : (
                <Eye width={22} height={24} color="#4C5361" strokeWidth={1.5} />
              )}
            </span>
          </div>
        </div>

        <a href="#" className="forgot-password">
          Forgot password?
        </a>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="signup-text">
        New to Lagos State Judiciary? <a href="#">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
