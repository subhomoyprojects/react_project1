import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import { Suspense, lazy } from "react";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import Home from "./components/Home";

// import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "./shared/Footer";

const Home = lazy(() => import("../src/components/Home"));
const Login = lazy(() => import("../src/auth/Login"));
const Register = lazy(() => import("../src/auth/Register"));

function App() {
  // const dispatch = useDispatch();

  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/login" />
        {alert("Please go for login either you can't access product list")}
      </>
    );
  }

  const PrivateRouteNames = [
    {
      path: "/",
      Component: <Home />,
    },
  ];

  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
  ];

  return (
    <>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router> */}
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Router>
          <Header />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return <Route key={index} exact path={route.path} element={route.Component} />;
            })}

            {PrivateRouteNames?.map((route, index) => {
              return <Route key={index} path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />;
            })}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
