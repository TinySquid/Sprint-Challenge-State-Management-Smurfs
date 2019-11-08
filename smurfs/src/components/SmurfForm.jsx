import React from 'react'

import { handleSmurfForm, handleSmurfFormSubmit } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const SmurfForm = () => {
  const input = useSelector(state => state.smurfFormInput);
  const isEditMode = useSelector(state => state.isEditMode);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (input.name.length > 0 && input.age > 0 && input.height.length > 0) {
      dispatch(handleSmurfFormSubmit(input, isEditMode));
    }
  }

  const handleChange = e => {
    dispatch(handleSmurfForm({ ...input, [e.target.name]: e.target.value }))
  }

  return (
    <form className="smurf-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter name..." value={input.name} onChange={handleChange} />
      <input type="number" name="age" placeholder="Enter age..." value={input.age} onChange={handleChange} />
      <input type="text" name="height" placeholder="Enter height..." value={input.height} onChange={handleChange} />
      <button>{isEditMode ? 'Edit Smurf' : 'Submit'}</button>
    </form>
  )
}

export default SmurfForm
