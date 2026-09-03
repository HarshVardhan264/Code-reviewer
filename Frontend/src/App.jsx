import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Review from "./Pages/Review";
import About from "./Pages/About";

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

        </Routes>
    );
}

export default App;