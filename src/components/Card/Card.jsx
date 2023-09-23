import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-truncate">{props.subtitle}</p>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {props.author}
              <span>$14</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
