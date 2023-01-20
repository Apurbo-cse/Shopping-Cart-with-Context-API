import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/include/Navbar";
import Master from "./components/layouts/Master";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
