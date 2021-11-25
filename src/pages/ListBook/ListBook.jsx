import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import styles from "./ListBook.module.css";

export default function ListBook(props) {
  return (
    <>
      <div className={`${styles.cover} container-fluid`}>
        <div className="row d-flex">
          <div className="col-md-3 px-0">
            <Sidebar />
          </div>
          <div className="col-md-9 mt-4">
            <h2 className="fw-bold text-center">List Book</h2>
            <div className="row mt-5">
              {props.data?.bookman_books.map((item) => (
                <Card key={item.id} data={item} deleteBook={props.deleteBook} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
