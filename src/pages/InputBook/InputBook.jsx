import Sidebar from "../../components/Sidebar";
import Form from "./Form";
// import styles from "./InputBook.module.css";
export default function InputBook(props) {
  
  return (
    <>
      <div className="container-fluid add-book">
        <div className="row d-flex justify-content-start">
          <div className="col-md-3 px-0">
            <Sidebar />
          </div>
          {/* <div className="row d-flex justify-content-start">
            <div className="col-12 mx-auto">
              <h2 className="fw-bold">Add New Book</h2>
            </div>
          </div> */}
          <div>
            <Form addBook={props.addBook}/>
          </div>
        </div>
      </div>
    </>
  );
}
