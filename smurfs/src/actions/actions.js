/*** ACTIONS ***/
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

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

export const HANDLE_SMURF_FORM_INPUTS = "HANDLE_SMURF_FORM_INPUTS";
/*** / ACTIONS / */

/*** ACTION CREATORS ***/

//Get all smurfs from server
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });

  fetch('http://localhost:3333/smurfs')
    .then(response => response.json())
    .then(smurfs => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: smurfs }))
    .catch(error => dispatch({ type: FETCH_SMURFS_FAIL, payload: error }));
}

//Handle input change (form state is held in store)
export const handleSmurfFormChange = inputs => {
  return {
    type: HANDLE_SMURF_FORM_INPUTS,
    payload: inputs
  }
}

//Depending on editmode, our form will either submit a new smurf, or edit an existing one (POST/PUT).
export const handleSmurfFormSubmit = (formData, isEditMode, editSmurfId) => dispatch => {
  if (isEditMode) {
    dispatch({ type: EDIT_SMURF_START });

    //Edit an existing smurf via ID.
    //form inputs are sent in the body of the request
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

    //Add a new smurf with a POST to the API
    //smurf data is in the body of the request
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

//Deletes a smurf from the server via ID
export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });

  fetch(`http://localhost:3333/smurfs/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(result => dispatch({ type: DELETE_SMURF_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: DELETE_SMURF_FAIL, payload: error }));
}

//This action enables edit mode in the application, which will set form inputs with the data of the smurf we are editi
export const editSmurf = smurf => {
  return {
    type: EDIT_SMURF_MODE,
    payload: smurf
  }
}
/*** / ACTION CREATORS / ***/