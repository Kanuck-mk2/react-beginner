import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import MainContent from "./MainContent.js";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
