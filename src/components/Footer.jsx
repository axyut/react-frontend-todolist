import React from "react";

function Footer() {
  const Year = new Date().getFullYear();
  return (
    <div className="footing">
      <p>Copyright {Year}</p>
    </div>
  );
}

export default Footer;
