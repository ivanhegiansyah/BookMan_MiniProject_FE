import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import InputBook from "../pages/InputBook/InputBook";
import useSubscribeBook from "../hooks/useSubscribeBook";
import useAddBook from "../hooks/useAddBook";
import useDeleteBook from "../hooks/useDeleteBook";
import useUpdateQuantity from "../hooks/useUpdateQuantity";
import useUpdateBook from "../hooks/useUpdateBook";
import ListBook from "../pages/ListBook/ListBook";
import loadingLogo from "../assets/img/Ellipsis-1s-210px.svg";

export default function Router() {
  const { data, loading } = useSubscribeBook();
  const { addBook, loadingAdd } = useAddBook();
  const { delBook, loadingDelete } = useDeleteBook();
  const { editBook, loadingUpdate } = useUpdateBook();
  const { updateQuantityBook } = useUpdateQuantity();

  if (loading || loadingAdd || loadingDelete || loadingUpdate) {
    return (
      <div className="text-center">
        <img src={loadingLogo} alt="loading..." />
        <h3>loading...</h3>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/add-book"
          exact
          element={<InputBook addBook={addBook} />}
        />
        <Route
          path="/list-book"
          exact
          element={
            <ListBook
              data={data}
              deleteBook={delBook}
              updateQuantity={updateQuantityBook}
              updateBook={editBook}
            />
          }
        />
      </Routes>
    </>
  );
}
