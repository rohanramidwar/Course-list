import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-truncate">
            {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
