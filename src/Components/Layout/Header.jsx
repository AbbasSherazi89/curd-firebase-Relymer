import React from "react";
import {Link} from "react-scroll"
const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container">
            <a href="/">
              <div >
                <img className="rounded-circle"  src="assets/logo.png" alt=" Relymer logo " width={70} />
              </div>
            </a>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav fw-bold ms-auto">
                <li className="nav-item ms-4">
                  <Link
                    className="nav-link"
                    to="/"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                  Roadmap
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                  Document
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                  FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
