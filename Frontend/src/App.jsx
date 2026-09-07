import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Review from "./Pages/Review";
import About from "./Pages/About";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";

function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/review"
                element={<Review />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/signup"
                element={<Signup />}
            />

        </Routes>
    );
}

export default App;