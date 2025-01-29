import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Nuts 'N Bolts </h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>Catalog</h2>
      <Nut />
      <Nut />
      <Nut />
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <p>We're here to hizzelp.</p>
    </footer>
  );
  // return React.createElement("footer", null, "We're here to help");
}
function Nut() {
  return <h2>NUTTIN</h2>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
