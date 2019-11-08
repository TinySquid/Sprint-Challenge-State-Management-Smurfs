import React from 'react'

import Smurf from './Smurf';


const Smurfs = props => {
  const smurfList = props.smurfs;

  const editSmurf = id => {
    console.log('Edit:', smurfList.find(smurf => smurf.id == id));
  }

  const deleteSmurf = id => {
    console.log('Delete:', id);
  }

  return (
    <div className="smurfs">
      {props.smurfs.map((smurf, idx) => (
        <Smurf key={idx} {...smurf} editSmurf={editSmurf} deleteSmurf={deleteSmurf} />
      ))}
    </div>
  )
}

export default Smurfs
