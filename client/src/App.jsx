import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Blogs from "./pages/Blogs";
import { RootLayout } from "./layouts/RootLayout.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { theme } = useSelector((state) => state.auth);
  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/userRegister" element={<Register />} />
          <Route path="/readBlogs" element={<Blogs />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
