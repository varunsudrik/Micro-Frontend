import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import "./index.css";

const App = () => (
  <div className="containerr"> 
    <Header />
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
