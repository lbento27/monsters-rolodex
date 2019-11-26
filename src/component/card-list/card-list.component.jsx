import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css"; //import css
// className"card-list" comes form the css

export const CardList = props => {
  return (
    <div className="card-list">
      {/* map() = iterate over an array, has a callback function thats call in every element and then returns a new array*/}
      {props.monsters.map(monster => (
        //monster.id its necessary because react needs to now in case of change one element witch element we are referring
        //<h1 key={monster.id}>{monster.name}</h1>
        <Card key={monster.id} monster={monster} /> //where we pass monster to the Card component
      ))}
    </div>
  );
};
