import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBAr() {
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="header-wp">
          <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Sanjeevni
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">
                      About us
                    </Link>
                  </li>
                </ul>
                {auth ? (
                  <div>
                    <p>welcome user</p>
                  </div>
                ) : (
                  <form className="d-flex" role="search">
                    <div className="text-end">
                      <Link className="signinbtn" to="/login">
                        Log in
                      </Link>
                      <Link className="signinbtn" to="/user/registration">
                        User Singup
                      </Link>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBAr;
