import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const hardwareData = [
  {
    name: "Flat Washer",
    description: "Stainless steel with zinc coating and smooth finish",
    price: 6,
    photoSrc: "images/washer.jpg",
    soldOut: false,
  },
  {
    name: "Hex Bolt",
    description: "Carbon steel and zinc plating",
    price: 10,
    photoSrc: "images/hexbolt.jpg",
    soldOut: false,
  },
  {
    name: "Lock Nut",
    description: "Steel alloy, nylon insert, and serrated flange",
    price: 12,
    soldOut: false,
  },
  {
    name: "Wing Nut",
    description: "Brass body with butterfly wings and threading",
    price: 12,
    photoSrc: "images/wingnut.jpg",
    soldOut: false,
  },
  {
    name: "Carriage Bolt",
    description: "Steel with square neck and round head",
    price: 15,
    photoSrc: "images/carriagebolt.jpg",
    soldOut: true,
  },
  {
    name: "Machine Screw",
    description: "Stainless steel, Phillips head, and fine threads",
    price: 18,
    soldOut: false,
  },
];

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
  const allHardware = hardwareData;

  return (
    <ul className="nuts">
      {allHardware.map((nut) => {
        return (
          <Nut
            name={nut.name}
            description={nut.description}
            price={nut.price}
            src={nut.photoSrc ? nut.photoSrc : "images/no-image.jpg"}
          />
        );
      })}
    </ul>
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
    <li className="nut">
      <h3 className="nut__name">{props.name}</h3>
      <p className="nut__description">{props.description}</p>
      <img
        src={props.src ? props.src : "images/no-image.png"}
        alt={props.name}
      />
      <p className="nut__price">{props.price}$</p>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
