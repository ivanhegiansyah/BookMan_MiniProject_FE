import "./Sidebar.css";
import logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark position-fixed"
        style={{ width: "250px" }}
        aria-orientation="vertical"
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="me-2" width={30} height={32}></svg>
          <img src={logo} alt="logo" className="logo" />
          <span className="fs-4">Book-Man</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto text-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white" aria-current="page">
              <span className="ms-2">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-book" className="nav-link text-white">
              <span className="ms-2">Add Book</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/list-book" className="nav-link text-white">
              <span className="ms-2">List Book</span>
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
