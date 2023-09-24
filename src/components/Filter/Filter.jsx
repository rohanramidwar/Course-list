import React from "react";
import "./styles.css";

function Filter(props) {
  const handleChange = (event) => {
    const selectedOptionElement =
      event.target.options[event.target.selectedIndex];
    const selectedOptionText = selectedOptionElement.innerHTML;
    props.filterFn(selectedOptionText);
  };

  return (
    <div class="form-floating course-filter">
      <select
        onChange={handleChange}
        class="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
      >
        <option selected>{props.opt1}</option>
        <option value="1">{props.opt2}</option>
        <option value="2">{props.opt3}</option>
        <option value="3">{props.opt4}</option>
      </select>
      <label for="floatingSelect">{props.label}</label>
    </div>
  );
}

export default Filter;
