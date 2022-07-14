import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Home from "./components/home";
import Details from "./components/details";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navbar style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={"/home"}>
          <Button>Home</Button>
        </Link>
      </Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
