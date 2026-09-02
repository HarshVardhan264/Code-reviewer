import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Review from "./Pages/Review";

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

        </Routes>
    );
}

export default App;