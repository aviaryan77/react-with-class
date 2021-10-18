import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className={"Person"}>
      <p>
        I am {props.name} and I am {props.age} years old
      </p>
      <p> {props.children}</p>
      {props.changed ? (
        <input type="text" onChange={props.changed} value={props.name} />
      ) : null}
    </div>
  );
};

export default person;
