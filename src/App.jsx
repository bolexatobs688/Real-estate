import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Aboutpage from "./Pages/About/Aboutpage";
import Contact from "./Pages/Contact/Contact";
import ProductList from "./Pages/Product/ProductList";
import Blog from "./Pages/Blog/Blog";
import ScrollToTop from "./components/scroll";


function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
