import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const username = "Mr. Koirala";

  const date = new Date();
  const currentTime = date.getHours();

  let greetings;
  var customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greetings = "Good Morning!";
    customStyle.color = "orange";
  } else if (currentTime < 18) {
    greetings = "Good Afternoon!";
    customStyle.color = "red";
  } else {
    greetings = "Good Night!";
    customStyle.color = "green";
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1 style={{ color: "black", border: "1px solid black" }}>
          Hello, {username}
        </h1>
        <h3 style={customStyle}>{greetings}</h3>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
