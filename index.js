import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="./react-logo.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer-tag">
      <small> © 2021 Parenteau development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <>
      <h1>Why I want to learn React</h1>
      <ol className="list-items">
        <li>Its a skill</li>
        <li>Further my understanding in programming</li>
        <li>take pride that this skill is "self taught"</li>
        <li>Hopefully lead to a promising career</li>
        <li>
          Have some use for it in the changing, uncertain future of this world
        </li>
      </ol>
    </>
  );
}

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
