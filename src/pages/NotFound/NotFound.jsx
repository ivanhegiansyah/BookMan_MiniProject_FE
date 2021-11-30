import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import error from "../../assets/img/error.png";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={`${styles.cover} container-fluid`}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <img className="w-100" src={error} alt="error" />
        <h1 className="m-3 text-center">Page Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className={`nav-link mt-3 mx-auto ${styles.button}`}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
