export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS'

const initialState = {
    smurfs: [],
    isLoading: false,
    errors: ''
}

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURFS_START:
        return {
          ...state,
          isLoading: true,
          errors: ""
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          smurfs: action.payload
        };
        case FETCH_SMURFS_FAILURE:
            return {
              ...state,
              isLoading: false,
              errors: action.payload,
              smurfs: []
            };
      default:
        return state;
    }
  };
