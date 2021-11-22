import "./Sidebar.css";
import logo from "../assets/img/Logo.png";
export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "250px" }}
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
          <a href="/" className="nav-link active" aria-current="page">
            <i className="fa fa-home" />
            <span className="ms-2">Home</span>
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            <i className="fa fa-add" />
            <span className="ms-2">Add Book</span>
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            <i className="fa fa-list" />
            <span className="ms-2">List Book</span>
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
