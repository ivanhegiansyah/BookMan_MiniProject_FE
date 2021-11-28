import { useState } from "react";
import { useNavigate } from "react-router";
import "./Form.css";

export default function FormEdit(props) {
  const { id: idx } = props.datas;

  const navigate = useNavigate();
  const baseData = {
    id: "",
    title: "",
    author: "",
    publisher: "",
    quantity: "",
    price: "",
  };
  const baseError = {
    title: "",
    author: "",
    publisher: "",
    quantity: "",
    price: "",
  };

  const [data, setData] = useState(baseData);
  const [errorMessage, setErrorMessage] = useState(baseError);

  const validateOnSubmit = () => {
    setErrorMessage(() => {
      const errorMessageArr = Object.keys(errorMessage).map((key) => {
        if (data[key] === "") {
          const err = `${key} cannot be empty`;

          return { [key]: err };
        }
        return { [key]: "" };
      });
      const updatedErrorMessage = errorMessageArr.reduce(
        (previousValue, currentValue) => {
          return { ...previousValue, ...currentValue };
        },
        {}
      );
      return updatedErrorMessage;
    });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validField = Object.keys(data).filter((key) => data[key] !== "");

    if (validField.length < 5) {
      validateOnSubmit();
    } else {
      props.updateBook(
        idx,
        data.title,
        data.author,
        data.publisher,
        data.quantity,
        data.price
      );
      console.log(idx);
      console.log(data.quantity);

      navigate("/list-book");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="pb-3">
        <label className="form-label" htmlFor="title">
          Book Name
        </label>
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="ex: Harry Potter"
          value={data.title}
          onChange={onChange}
        />
        <span style={{ color: "red" }}>{errorMessage.title}</span>
      </div>
      <div className="pb-3">
        <label className="form-label" htmlFor="author">
          Author
        </label>
        <input
          className="form-control"
          type="text"
          name="author"
          placeholder="ex: J.K. Rowling"
          value={data.author}
          onChange={onChange}
        />
        <span style={{ color: "red" }}>{errorMessage.author}</span>
      </div>
      <div className="pb-3">
        <label className="form-label" htmlFor="publisher">
          Publisher
        </label>
        <input
          className="form-control"
          type="text"
          name="publisher"
          placeholder="ex: Bloomsbury Children's Books"
          value={data.publisher}
          onChange={onChange}
        />
        <span style={{ color: "red" }}>{errorMessage.publisher}</span>
      </div>
      <div className="pb-3">
        <label className="form-label" htmlFor="quantity">
          Quantity
        </label>
        <input
          className="form-control"
          type="number"
          name="quantity"
          placeholder="ex: 150"
          value={data.quantity}
          onChange={onChange}
        />
        <span style={{ color: "red" }}>{errorMessage.quantity}</span>
      </div>

      <div className="pb-3">
        <label className="form-label" htmlFor="price">
          Book Price
        </label>
        <input
          className="form-control"
          type="number"
          name="price"
          placeholder="ex: 150000"
          value={data.price}
          onChange={onChange}
        />
        <span style={{ color: "red" }}>{errorMessage.price}</span>
      </div>

      <button
        type="submit"
        className="btn text-white mt-3 justify-content-md-end btn-submit"
        style={{ backgroundColor: "#1f332b" }}
      >
        Submit
      </button>
    </form>
  );
}
