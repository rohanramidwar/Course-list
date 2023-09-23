import React from "react";

function Search() {
    return (
      <div>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Find a course" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    );
}

export default Search;