import Sidebar from "../../components/Sidebar";
import Form from "./Form";
import styles from "./InputBook.module.css";
export default function InputBook(props) {
  return (
    <>
      <div className={`${styles.cover} container-fluid`}>
        <div className="row d-flex">
          <div className="col-md-3 px-0">
            <Sidebar />
          </div>
          <div className="col-md-8 mt-4">
            <h2 className="fw-bold text-center">Add New Book</h2>
            <div className="d-flex justify-content-center">
              <Form addBook={props.addBook} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
