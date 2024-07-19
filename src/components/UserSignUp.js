import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../gloalConstant";

function UserSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function userFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("please fill all the fileds");
    }

    try {
      let result = await fetch(`${BACKEND_URL}/user/register`, {
        method: "post",
        body: JSON.stringify({ fullName: name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await result.json();

      localStorage.setItem("user", JSON.stringify(data));
      if (data) {
        navigate("/Login");
        alert("User registered");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section>
        <div className="userform-wp mt-5 mb-5">
          <div className="container-fluid">
            <div className="text-center mb-5">
              <h3>User Registration</h3>
            </div>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="cmnbtn" onClick={userFormSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1> */}
      </section>
    </>
  );
}

export default UserSignUp;
