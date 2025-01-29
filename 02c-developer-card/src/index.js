import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);
function Card(params) {
  return (
    <div className="card">
      <ProfileImage />
      <Name />
      <Skills />
    </div>
  );
}

function ProfileImage(params) {
  return <img className="avatar" src="profile.jpg" alt="Developer"></img>;
}

function Name() {
  return <p className="data">Krum Kuzmov</p>;
}

function Skills() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" emoji="👌" />
      <Skill skill="React" emoji="👍" />
      <Skill skill="SASS/CSS" emoji="👷‍♂️" />
      <Skill skill="GIT" emoji="🦻" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      {props.skill}&nbsp;{props.emoji}
    </div>
  );
}
//TODO

// --create components - skill
// add photo
// add text
// add skills with props
