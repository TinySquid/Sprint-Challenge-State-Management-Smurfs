import React from 'react'

import { useDispatch } from 'react-redux';

import { editSmurf, deleteSmurf } from '../actions/actions';

import Smurf from './Smurf';

const Smurfs = props => {
  const dispatch = useDispatch();
  const smurfList = props.smurfs;

  const changeSmurf = id => {
    console.log('Edit:', smurfList.find(smurf => smurf.id === id));
  }

  const removeSmurf = id => {
    dispatch(deleteSmurf(id));
  }

  return (
    <div className="smurfs">
      {props.smurfs.map((smurf, idx) => (
        <Smurf key={idx} {...smurf} editSmurf={changeSmurf} deleteSmurf={removeSmurf} />
      ))}
    </div>
  )
}

export default Smurfs
