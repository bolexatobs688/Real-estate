import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Aboutpage from "./Pages/About/Aboutpage";
import Contact from "./Pages/Contact/Contact";
import ProductList from "./Pages/Product/ProductList";

function App() {
  return (
    <div>
      <Header />
      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
