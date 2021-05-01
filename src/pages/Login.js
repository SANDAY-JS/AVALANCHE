import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../StateProvider";
import "./SignInForm.css";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("入力内容に誤りがあります");
    }

    setLoading(false);
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" />
          <label htmlFor="password">password</label>
          <input ref={passwordRef} type="password" id="password" />
          <button disabled={loading} type="submit">
            Login
          </button>
        </form>
        <Link to="/password-reset">パスワードをお忘れの場合</Link>
        <Link to="/signup">アカウントをお持ちでない方</Link>
      </div>
    </div>
  );
}
