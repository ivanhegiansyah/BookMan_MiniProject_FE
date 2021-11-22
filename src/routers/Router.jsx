import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}