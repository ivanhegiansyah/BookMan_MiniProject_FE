import banner from "../../assets/img/accept-tasks-animate.svg";
import "./Home.css";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid home">
      <div className="row">
        <div className="col-md-3 px-0">
          <Sidebar />
        </div>
        <div className="col-md-3 my-auto">
          <div className="banner">
            <h4 className="home-banner-title">Manage Your Book</h4>
            <h5 className="subtitle-banner">
              Add, update, and delete your book easily!
            </h5>
            <Link
              to="/add-book"
              className="btn btn-outline-success mt-4 add-button"
            >
              Add Book
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-banner">
            <img src={banner} alt="" className="banner-home" />
          </div>
        </div>
      </div>
    </div>
  );
}
