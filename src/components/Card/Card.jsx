import React from "react";
import "./styles.css";

function Card(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title course-title">{props.title}</h5>
          <p className="m-0 card-text text-muted course-author">
            {props.author}
          </p>
          <div className="d-flex align-items-center gap-1">
            <p className="m-0 course-rating">{props.rating}</p>
            <p className="m-0 course-stars">{props.stars}</p>
            <p className="m-0 text-muted course-views">{props.views}</p>
          </div>
          <p className="m-0 course-price">&#8377;{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
