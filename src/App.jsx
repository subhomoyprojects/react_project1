import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
