import React from "react";

function MenuItem({ image, name, age}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> minimum age : {age} </p>
    </div>
  );
}

export default MenuItem;
