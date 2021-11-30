import { useState } from "react";
import { useNavigate } from "react-router";
import "./Form.css";
import { app } from "../firebase/config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FormInput(props) {
  const navigate = useNavigate();
  const baseData = {
    title: "",
    author: "",
    publisher: "",
    quantity: "",
    price: "",
    image: "",
  };
  const baseError = {
    title: "",
    author: "",
    publisher: "",
    quantity: "",
    price: "",
    image: "",
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

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const storageRef = getStorage();
    const fileRef = ref(storageRef, file.name);
    uploadBytes(fileRef, file).then(() => {
      getDownloadURL(fileRef).then((url) => {
        setData({ ...data, image: url });
      });
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validField = Object.keys(data).filter((key) => data[key] !== "");
    console.log(validField.length);

    if (validField.length < 6) {
      validateOnSubmit();
    } else {
      props.addBook({
        variables: {
          title: data.title,
          author: data.author,
          publisher: data.publisher,
          quantity: data.quantity,
          price: data.price,
          images: data.image,
        },
      });
      navigate("/list-book");
    }
  };

  return (
    <div className="col-sm-9 col-md-9 mt-4">
      <form onSubmit={onSubmit}>
        <div className="pb-2">
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
        <div className="pb-2">
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
        <div className="pb-2">
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
        <div className="pb-2">
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

        <div className="pb-2">
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
        <div className="pb-2">
          <label className="form-label" htmlFor="image">
            Image
          </label>
          <input
            className="form-control"
            type="file"
            name="image"
            onChange={onChangeImage}
          />
          <span style={{ color: "red" }}>{errorMessage.image}</span>
        </div>
        <button
          type="submit"
          className="btn text-white mt-2 btn-submit"
          style={{ backgroundColor: "#1f332b" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
