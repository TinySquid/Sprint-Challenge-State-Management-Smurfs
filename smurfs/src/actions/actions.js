export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const HANDLE_SMURF_FORM_INPUTS = "HANDLE_SMURF_FORM_INPUTS";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const EDIT_SMURF_MODE = "EDIT_SMURF_MODE";
export const EDIT_SMURF_START = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAIL = "EDIT_SMURF_FAIL";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });

  fetch('http://localhost:3333/smurfs')
    .then(response => response.json())
    .then(smurfs => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: smurfs }))
    .catch(error => dispatch({ type: FETCH_SMURFS_FAIL, payload: error }));
}

export const handleSmurfForm = inputs => {
  return {
    type: HANDLE_SMURF_FORM_INPUTS,
    payload: inputs
  }
}

export const handleSmurfFormSubmit = (formData, isEditMode, editSmurfId) => dispatch => {
  if (isEditMode) {
    console.log('Editing', editSmurfId, formData)
    dispatch({ type: EDIT_SMURF_START });

    fetch(`http://localhost:3333/smurfs/${editSmurfId}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(result => dispatch({ type: EDIT_SMURF_SUCCESS, payload: result }))
      .catch(error => dispatch({ type: EDIT_SMURF_FAIL, payload: error }));

  } else {

    dispatch({ type: ADD_SMURF_START });

    fetch('http://localhost:3333/smurfs', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(result => dispatch({ type: ADD_SMURF_SUCCESS, payload: result }))
      .catch(error => dispatch({ type: ADD_SMURF_FAIL, payload: error }));
  }
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });

  fetch(`http://localhost:3333/smurfs/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(result => dispatch({ type: DELETE_SMURF_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: DELETE_SMURF_FAIL, payload: error }));
}

export const editSmurf = smurf => {
  return {
    type: EDIT_SMURF_MODE,
    payload: smurf
  }
}