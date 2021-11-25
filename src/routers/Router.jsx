import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import InputBook from "../pages/InputBook/InputBook";
import useSubscribeBook from "../hooks/useSubscribeBook";
import useAddBook from "../hooks/useAddBook";
import useDeleteBook from "../hooks/useDeleteBook";
import ListBook from "../pages/ListBook/ListBook";

export default function Router() {
  const { data, loading } = useSubscribeBook();
  const { addBook, loadingAdd } = useAddBook();
  const { delBook, loadingDelete } = useDeleteBook();

  if (loading || loadingAdd || loadingDelete) {
    return <div>Loading...</div>;
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
          element={<ListBook data={data} deleteBook={delBook} />}
        />
      </Routes>
    </>
  );
}
