import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../gloalConstant";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  async function userLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fill All The Fields");
      return;
    }

    try {
      let response = await fetch(`${BACKEND_URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
        alert("Welcome " + result.user.fullName);
      } else {
        alert("User Not Found");
      }
    } catch (error) {
      console.error("There was an error during the fetch operation:", error);
      alert("An error occurred. Please try again.");
    }
  }

  async function adminLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fill All The Fields");
      return;
    }

    try {
      let response = await fetch(`${BACKEND_URL}/admin/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/admin-panel");
        alert("Welcome " + result.admin.fullName);
      } else {
        alert("User Not Found");
        return;
      }
    } catch (error) {
      console.log(error);
      console.error("There was an error during the fetch operation:", error);
      alert("An error occurred. Please try again.");
    }
  }

  async function doctorLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fill All The Fields");
      return;
    }

    try {
      let response = await fetch(`${BACKEND_URL}/doctor/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/doctor-panel");
        alert("Welcome " + result.doctor.fullName);
      } else {
        alert("User Not Found");
        return;
      }
    } catch (error) {
      console.log(error);
      console.error("There was an error during the fetch operation:", error);
      alert("An error occurred. Please try again.");
    }
  }

  const [activeLogin, setActiveLogin] = useState("user");
  const handleButtonClick = (loginType) => {
    setActiveLogin(loginType);
  };

  return (
    <>
      <section>
        <div className="userform-wp mt-3 mb-3">
          <div className="container-fluid">
            <div className="loginbtns mb-5">
              <ul id="login-buttons">
                <li>
                  <button
                    className={activeLogin === "user" ? "activebtn" : ""}
                    onClick={() => handleButtonClick("user")}
                  >
                    User Login
                  </button>
                </li>
                <li>
                  <button
                    className={activeLogin === "doctor" ? "activebtn" : ""}
                    onClick={() => handleButtonClick("doctor")}
                  >
                    Doctor Login
                  </button>
                </li>
                <li>
                  <button
                    className={activeLogin === "admin" ? "activebtn" : ""}
                    onClick={() => handleButtonClick("admin")}
                  >
                    Admin Login
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="login-content"
              style={{ display: activeLogin === "user" ? "block" : "none" }}
            >
              <div className="text-center mb-4">
                <h3>User Login</h3>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button className="cmnbtn" type="button" onClick={userLogin}>
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div
              className="login-content"
              style={{ display: activeLogin === "doctor" ? "block" : "none" }}
            >
              <div className="text-center mb-4">
                <h3>Doctor Login</h3>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button
                    className="cmnbtn"
                    type="button"
                    onClick={doctorLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div
              className="login-content"
              style={{ display: activeLogin === "admin" ? "block" : "none" }}
            >
              <div className="text-center mb-4">
                <h3>Admin Login</h3>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button className="cmnbtn" type="button" onClick={adminLogin}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
