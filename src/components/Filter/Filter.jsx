import React from "react";
import "./styles.css"

function Filter() {
  return (
    <div class="form-floating course-filter">
    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>All</option>
    <option value="1">Web Development(1)</option>
    <option value="2">Flutter(2)</option>
    </select>
    <label for="floatingSelect">Category</label>
    </div>
  );
}

export default Filter;
