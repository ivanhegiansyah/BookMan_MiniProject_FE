import "./Sidebar.css";
import logo from "../assets/img/Logo.png";
import { useState } from "react";

export default function Sidebar() {
  const temp = {
    active: "",
  };
  const [status, setStatus] = useState(temp);

  // const handleStatus = () => {

  // }

  return (
    <>
      <div
        className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "250px" }}
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width={30} height={32}></svg>
          <img src={logo} alt="" className="logo" />
          <span className="fs-4">Book-Man</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto text-center">
          <li className="nav-item">
            <a
              href="/"
              className={`nav-link text-white ${status.active}`}
              aria-current="page"
              // id="v-pills-home-tab"
              // data-bs-toggle="pill"
              // data-bs-target="#v-pills-home"
              // type="button"
              // role="tab"
              // aria-controls="v-pills-home"
              // aria-selected="true"
            >
              <i className="fa fa-home" />
              <span className="ms-2">Home</span>
            </a>
          </li>
          <li>
            <a
              href="/add-book"
              // onClick={() => setStatus({ active: "active" })}
              className={`nav-link text-white ${status.active}`}
              // id="v-pills-add-tab"
              // data-bs-toggle="pill"
              // data-bs-target="/add-book"
              // type="button"
              // role="button"
              // aria-controls="v-pills-add"
              // aria-selected="false"
            >
              <i className="fa fa-add" />
              <span className="ms-2">Add Book</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`nav-link text-white ${status.active}`}
              // id="v-pills-list-tab"
              // data-bs-toggle="pill"
              // data-bs-target="#v-pills-list"
              // type="button"
              // role="tab"
              // aria-controls="v-pills-list"
              // aria-selected="false"
            >
              <i className="fa fa-list" />
              <span className="ms-2">List Book</span>
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
