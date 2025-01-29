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
      <Nut name="5mm" material="Steel" price="0.05" />
      <Nut name="15mm" material="Magnesium" price="62" />
      <Nut name="0.255mm" material="Diamant" price="632" />
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
function Nut(props) {
  return (
    <div className="pizza">
      <p>
        {props.material} {props.name} Nut
      </p>
      <p>{props.price} $</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
