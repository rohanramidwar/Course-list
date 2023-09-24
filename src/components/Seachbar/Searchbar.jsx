import React from "react";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { filterOptions } from "../../Mock Data/data";
import "./styles.css";

function Searchbar(props) {
  return (
    <div className="container-fluid search-bar px-5 py-1">
      <div className="d-flex gap-3">
        {filterOptions.map((filterItem) => {
          return (
            <Filter
              key={filterItem.id}
              opt1={filterItem.opt1}
              opt2={filterItem.opt2}
              opt3={filterItem.opt3}
              opt4={filterItem.opt4}
              label={filterItem.label}
              filterFn={props.passFilterFn}
            />
          );
        })}
      </div>
      <Search />
    </div>
  );
}

export default Searchbar;
