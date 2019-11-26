import React, { Component } from "react";
// import logo from "./logo.svg";

import { CardList } from "./component/card-list/card-list.component"; //import component made by me
import { SearchBox } from "./component/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  //Component Life cycle are methods that get call at different stages(auto by react), when this component gets render
  componentDidMount() {
    //fetch makes a api call and returns a promise, note we can catch error if we want ex: .catch(err => console.log("Error!"));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) //taking the response and converting to json format, because its a promise that response will be raped in a new resolve promise so that way we can call .then
      .then(users => this.setState({ monsters: users })); //set our monsters to that response array of users
  }

  //my method, we need to use arrow func, so 'this' reference to the component

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const {
      monsters,
      searchField
    } = this.state; /*where we are destructuring an object, in this case the this.state object, this way we are pulling monster and searchField from the object and set then to const */

    //using arrays methods filter and includes
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        {/* Search- moved to its own component */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        {/* use component made by me and pass truth props and props.children */}
        <CardList monsters={filteredMonsters}>
          {/* this will take everything in this CardList and passes in the component cardlist(props.children) given in this case a grid/style, note :now we move the code and pass state above */}
        </CardList>
      </div>
    );
  }
}

export default App;
