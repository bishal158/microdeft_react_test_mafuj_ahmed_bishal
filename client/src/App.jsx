
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.jsx";
import {Blogs} from "./pages/Blogs.jsx";
import {Register} from "./pages/Register.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Blogs />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
