export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });

  fetch('http://localhost:3333/smurfs')
    .then(response => response.json())
    .then(smurfs => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: smurfs }))
    .catch(error => dispatch({ type: FETCH_SMURFS_FAIL, payload: error }));
}