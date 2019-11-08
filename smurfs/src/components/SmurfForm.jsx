import React from 'react';

import { handleSmurfFormChange, handleSmurfFormSubmit } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const SmurfForm = () => {
  //Form inputs
  const inputs = useSelector(state => state.smurfForminputs);

  //Edit mode bool
  const isEditMode = useSelector(state => state.isEditMode);

  //Smurf id 
  const editSmurfId = useSelector(state => state.editSmurfId);

  //Dispatch hook
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (inputs.name.length > 1 && inputs.age > 1 && inputs.height.length > 2) {
      dispatch(handleSmurfFormSubmit(inputs, isEditMode, editSmurfId));
    }
  }

  const handleChange = e => {
    dispatch(handleSmurfFormChange({ ...inputs, [e.target.name]: e.target.value }));
  }

  return (
    <form className="smurf-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter name..." value={inputs.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Enter age..." value={inputs.age} onChange={handleChange} required />
      <input type="text" name="height" placeholder="Enter height..." value={inputs.height} onChange={handleChange} required />
      <button>{isEditMode ? 'Edit Smurf' : 'Submit'}</button>
    </form>
  )
}

export default SmurfForm;
