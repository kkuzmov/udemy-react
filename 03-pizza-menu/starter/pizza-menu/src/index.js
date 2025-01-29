import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Nuts 'N Bolts </h1>;
}
function Menu() {
  return (
    <div>
      <h2>Please, inspect our catalog</h2>
      <Nut />
      <Nut />
      <Nut />
    </div>
  );
}
function Footer() {
  return (
    <footer>
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
