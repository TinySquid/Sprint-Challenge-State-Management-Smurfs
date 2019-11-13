import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf">
      <h1>{props.name}</h1>
      <ul className="smurf-attributes">
        <li>Age: {props.age} years</li>
        <li>Height: {props.height}</li>
      </ul>
      <div className="buttons">
        <button onClick={() => props.editSmurf(props.id)}>Edit</button>
        <button onClick={() => props.deleteSmurf(props.id)}>X</button>
      </div>
    </div >
  )
}

export default Smurf;
