import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

 const handleSubmit = async (e) => {

  e.preventDefault();

  const res = await fetch(
    "https://go-cart-backend-api.onrender.com/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    }
  );

  const data = await res.json();

   if (data.success) {

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    toast.success(data.message);

    navigate("/");

  } else {
    toast.error(data.message);
  }

};


  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="overlay">

          <h1>Welcome Back To GoCart</h1>

          <p>
            Sign in to access your orders,
            wishlist, exclusive deals and
            continue shopping with ease.
          </p>

          <div className="stats">

            <div>
              <h2>10K+</h2>
              <span>Products</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Support</span>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <h2>Login Account</h2>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <div className="options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/">
              Forgot Password?
            </a>

          </div>

          <button type="submit">
            Login
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
          >
            Continue with Google
          </button>

          <p>
            Don't have an account?
            <a href="/signup"> Sign Up</a>
          </p>

        </form>

      </div>

    </div>
  );
}