import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from  "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: ''
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
