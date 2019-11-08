import * as ACTIONS from '../actions/actions';

const initialState = {
  //Form state for adding / editing smurfs
  smurfFormInput: {
    name: '',
    age: '',
    height: ''
  },

  //List of smurfs from API
  smurfs: [],

  //boolean to change functionality of existing form
  isEditMode: false,

  //ID of the smurf we are editing (if in edit mode)
  editSmurfId: null,

  //On request error, this will be set
  error: '',

  //When making requests this will be true
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //Form input handling
    case ACTIONS.HANDLE_SMURF_FORM_INPUTS:
      return {
        ...state,
        smurfFormInput: action.payload
      }



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



    case ACTIONS.ADD_SMURF_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case ACTIONS.ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        smurfFormInput: {
          name: '',
          age: '',
          height: ''
        }
      }
    case ACTIONS.ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }



    case ACTIONS.EDIT_SMURF_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case ACTIONS.EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        smurfFormInput: {
          name: '',
          age: '',
          height: ''
        },
        isEditMode: false,
        editSmurfId: null
      }
    case ACTIONS.EDIT_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }



    case ACTIONS.DELETE_SMURF_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case ACTIONS.DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      }
    case ACTIONS.DELETE_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }



    case ACTIONS.EDIT_SMURF_MODE:
      return {
        ...state,
        smurfFormInput: {
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height
        },
        isEditMode: true,
        editSmurfId: action.payload.id
      }
    default:
      return state;
  }
}