import { useState } from "react";
import Modals from "./Modals";

export default function Card(props) {
  const { id, title, author, publisher, quantity, price } = props.data;
  const [quan, setQuan] = useState(quantity);

  const handleMinusQuantity = () => {
    console.log(id);
    console.log(quan);
    setQuan((quan) => quan - 1);
    console.log(quan);
    props.updateQuantity(id, quan - 1);
  };

  const handlePlusQuantity = () => {
    setQuan((quan) => quan + 1);
    console.log(quan);
    props.updateQuantity(id, quan + 1);
  };

  return (
    <div className="col-sm-4 mb-3">
      <div className="card border-dark mb-3 h-100" style={{ width: "17rem" }}>
        <div className="card-body text-dark">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Author: {author}</p>
          <p className="card-text">Publisher: {publisher}</p>
          <p className="card-text">
            Quantity: {quantity}
            <button
              className="btn btn-outline-dark btn-sm py-0"
              style={{ marginLeft: "5em" }}
              onClick={handleMinusQuantity}
            >
              -
            </button>
            <button
              className="btn btn-outline-dark btn-sm py-0 ms-1"
              onClick={handlePlusQuantity}
            >
              +
            </button>
          </p>
          <p className="card-text">Price: {price}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div>
              <Modals data={props.data} updateBook={props.updateBook} />
            </div>
            <button
              className="btn btn-danger mt-2"
              onClick={() => {
                props.deleteBook(id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
