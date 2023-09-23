import React from "react";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { filterBy } from "../../Mock Data/data";
import "./styles.css";

function Searchbar() {

    return (
        <div className="container-fluid search-bar px-5 py-1">
        <div className="d-flex gap-3">
        {filterBy.map(filterItem => {
            return (<Filter 
                key={filterItem.id}
                opt1={filterItem.opt1}
                opt2={filterItem.opt2}
                opt3={filterItem.opt3}
                label={filterItem.label}
            />
        )})}
        </div>
        <Search />
        </div>
    );
}

export default Searchbar;