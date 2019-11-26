import React, { Component } from "react";
// import logo from "./logo.svg";

import { CardList } from "./component/card-list/card-list.component.jsx"; //import component made by me

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  //Component Life cycle are methods that get call at different stages(auto by react), when this component gets render
  componentDidMount() {
    //fetch makes a api call and returns a promise, note we can catch error if we want ex: .catch(err => console.log("Error!"));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) //taking the response and converting to json format, because its a promise that response will be raped in a new resolve promise so that way we can call .then
      .then(users => this.setState({ monsters: users })); //set our monsters to that response array of users
  }

  render() {
    return (
      <div className="App">
        {/* use component made by me and pass truth props and props.children */}
        <CardList monsters={this.state.monsters}>
          {/* this will take everything in this CardList and passes in the component cardlist(props.children) given in this case a grid/style, note :now we move the code and pass state above */}
        </CardList>
      </div>
    );
  }
}

export default App;
