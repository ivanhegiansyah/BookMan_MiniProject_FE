import Sidebar from "../../components/Sidebar";
import FormInput from "../../components/FormInput";
import styles from "./InputBook.module.css";
export default function InputBook(props) {
  return (
    <>
      <div className={`container-fluid ${styles.cover}`}>
        <div className="row d-flex">
          <div className="col-md-3 px-0">
            <Sidebar />
          </div>
          <div className="col-md-8 mt-4">
            <h2 className="fw-bold text-center">Add New Book</h2>
            <div className="d-flex justify-content-center">
              <FormInput addBook={props.addBook} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
