import React from 'react'

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className="smurfs">
      {props.smurfs.map((smurf, idx) => (
        <Smurf key={idx} {...smurf} />
      ))}
    </div>
  )
}

export default Smurfs
