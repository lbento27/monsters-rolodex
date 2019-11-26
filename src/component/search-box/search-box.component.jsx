import React from "react";

import "./search-box.styles.css";

//destructuring props
export const SearchBox = ({ placeholder, handleChange }) => (
  // Search */
  <input
    className="search"
    type="search"
    placeholder="search monsters"
    //onChange={e => this.setState({ searchField: e.target.value })}//(code when it was in app.js) onchange comes with react JSX and fires when input is change and gives us a big object e, but the most used ones are target, get and set, then this will gives back the html element, then we want the value of that html element, the string we type in the search box*/}
    onChange={handleChange}
  />
);
