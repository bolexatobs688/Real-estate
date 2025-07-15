import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Aboutpage from "./Pages/About/Aboutpage";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
