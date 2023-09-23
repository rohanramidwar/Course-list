import React from "react";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import "./styles.css";

function Searchbar() {
    return (
        <div className="container-fluid search-bar">
        <div className="d-flex gap-3">
        <Filter/>
        <Filter />
        </div>
        <Search />
        </div>
    );
}

export default Searchbar;