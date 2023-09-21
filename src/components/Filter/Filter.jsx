import React, {useState} from "react";

function Filter(props) {

  // const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick(event) {
    const cat = event.target.innerHTML;
    // setSelectedCategory(cat);
    props.onFilter(cat);
  }
  
  return (
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-item" onClick={handleClick}>All</li>
            <li className="dropdown-item" onClick={handleClick}>Web Development</li>
            <li className="dropdown-item" onClick={handleClick}>Flutter</li>
          </ul>
        </div>
  )
}

export default Filter;