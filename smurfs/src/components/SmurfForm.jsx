import React from 'react'

import { handleSmurfForm, addSmurf } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const SmurfForm = () => {
  const input = useSelector(state => state.addSmurfFormInput);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form data:', input);
  }

  const handleChange = e => {
    dispatch(handleSmurfForm({ ...input, [e.target.name]: e.target.value }))
  }

  return (
    <form className="smurf-form" onSubmit={handleSubmit}>
      <input type="text" name="smurfName" placeholder="Enter name..." />
      <input type="text" name="smurfAge" placeholder="Enter age..." />
      <input type="text" name="smurfHeight" placeholder="Enter height..." />
      <button>Submit</button>
    </form>
  )
}

export default SmurfForm
