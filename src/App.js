import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import NavBar from "./NavBar";

/** App Component
 *
 * Top level component - renders
 *
 *  : NavBar
 *  : Routes (no authentication)
 */
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
