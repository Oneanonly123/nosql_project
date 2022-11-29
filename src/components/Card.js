import React from "react";

const Card = ({ burger }) => {
  return (
    <div className="card">
      <h2>Restaurant Name : {burger.name}</h2>
      <p>Description: {burger.description}</p>
      <p>Address: {burger.location.address}</p>
      <p>Website: {burger.location.web}</p>
      {burger.visited && <div className="visited"> </div>}
      {!burger.visited && <div className="not-visited"> </div>}
    </div>
  );
};

export default Card;
