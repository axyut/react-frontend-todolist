import React from "react";

function Card(props) {
  return (
    <div className="whole-card" id={props.id}>
      <h2>{props.name}</h2>
      <img src={props.url} alt=""></img>
      <p>{props.info}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="heading">
      <h1>App Heading</h1>
      <Card
        id="first Card"
        name="Micheal Jackson"
        url="https://www.hero url dot com"
        info="About Micheal Jackson"
      />
      <Card
        name="Jack baur"
        url="https://www.hero url dot com"
        info="About Jack baur"
      />
    </div>
  );
}

export default Header;
