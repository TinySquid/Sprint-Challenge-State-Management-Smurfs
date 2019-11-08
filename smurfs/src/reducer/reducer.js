import * as ACTIONS from '../actions/actions';

const initialState = {
  smurfs: [],
  error: '',
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SMURFS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case ACTIONS.FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case ACTIONS.FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}