import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../gloalConstant";

export default function Doctorregistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialisation, setspecialisation] = useState("");

  const navigate = useNavigate();

  async function doctorDetailSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !specialisation) {
      alert("Please Fill All The Fields");
    }

    try {
      let result = await fetch(`${BACKEND_URL}/admin/doctor/register`, {
        method: "post",
        body: JSON.stringify({
          fullName: name,
          email,
          password,
          speciality: specialisation,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await result.json();
      if (data) {
        alert("Doctor Registered Successfully");
        navigate("/admin/panel");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="imgbg">
        <div className="backbg">
          <div className="text">Doctor Registration</div>
          <div className="userform-wp mt-3 mb-5">
            <div className="container-fluid">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Full Name"
                  />
                </div>
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
                  <input
                    type="text"
                    onChange={(e) => {
                      setspecialisation(e.target.value);
                    }}
                    placeholder="Specialisation"
                  />
                </div>
                <button
                  className="cmnbtn"
                  onClick={(e) => doctorDetailSubmit(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
