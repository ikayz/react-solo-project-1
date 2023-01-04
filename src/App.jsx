import React from "react";
import Information from "./components/Information";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Information />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
