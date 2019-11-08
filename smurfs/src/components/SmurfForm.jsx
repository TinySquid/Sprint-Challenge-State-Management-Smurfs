import React from 'react'

import { handleSmurfForm, handleSmurfFormSubmit } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const SmurfForm = () => {
  const input = useSelector(state => state.smurfFormInput);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(handleSmurfFormSubmit(input));
  }

  const handleChange = e => {
    dispatch(handleSmurfForm({ ...input, [e.target.name]: e.target.value }))
  }

  return (
    <form className="smurf-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter name..." onChange={handleChange} />
      <input type="number" name="age" placeholder="Enter age..." onChange={handleChange} />
      <input type="text" name="height" placeholder="Enter height..." onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}

export default SmurfForm
