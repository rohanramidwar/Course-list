import React from "react";

function Filter(props) {
  function handleClick(event) {
    const cat = event.target.innerHTML;
    props.onFilter(cat);
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li className="dropdown-item" onClick={handleClick}>
          {props.pref1}
        </li>
        <li className="dropdown-item" onClick={handleClick}>
          {props.pref2}
        </li>
        <li className="dropdown-item" onClick={handleClick}>
          {props.pref3}
        </li>
      </ul>
    </div>
  );
}

export default Filter;
