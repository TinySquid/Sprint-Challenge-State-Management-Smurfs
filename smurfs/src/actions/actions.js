export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const HANDLE_SMURF_FORM_INPUTS = "HANDLE_SMURF_FORM_INPUTS";

export const HANDLE_SMURF_FORM_SUBMIT_START = "HANDLE_SMURF_FORM_SUBMIT_START";
export const HANDLE_SMURF_FORM_SUBMIT_SUCCESS = "HANDLE_SMURF_FORM_SUBMIT_SUCCESS";
export const HANDLE_SMURF_FORM_SUBMIT_FAIL = "HANDLE_SMURF_FORM_SUBMIT_FAIL";

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

export const handleSmurfFormSubmit = formData => dispatch => {
  console.log('Submitting:', JSON.stringify(formData));

  dispatch({ type: HANDLE_SMURF_FORM_SUBMIT_START });

  fetch('http://localhost:3333/smurfs', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(result => dispatch({ type: HANDLE_SMURF_FORM_SUBMIT_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: HANDLE_SMURF_FORM_SUBMIT_FAIL, payload: error }));
}