import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import InputBook from "../pages/InputBook/InputBook";
import useAddBook from "../hooks/useAddBook";

export default function Router() {
  const { addBook, loadingAdd } = useAddBook();

  if (loadingAdd) {
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
      </Routes>
    </>
  );
}
