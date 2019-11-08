import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf">
      <h1>{props.name}</h1>
      <ul className="smurf-attributes">
        <li>Age: {props.age} years</li>
        <li>Height: {props.height}</li>
      </ul>
    </div>
  )
}

export default Smurf;
