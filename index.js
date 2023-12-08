import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import MainContent from "./MainContent.js";

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
