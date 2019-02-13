import React, { Component } from "react";
import { DataSearch } from "@appbaseio/reactivesearch";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-container">
          <img className="app-logo" src="Images/logo.png" alt="MovieSearch" />
        </div>

        <div className="search-container">
          <DataSearch
            componentId="mainSearch"
            dataField={["original_title"]}
            categoryField="title"
            className="search-bar"
            queryFormat="and"
            placeholder="Search for images..."
            iconPosition="left"
            autosuggest={false}
            filterLabel="search"
          />
        </div>
      </div>
    );
  }
}
export default Navbar;
