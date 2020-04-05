import { SAVE_SEARCH_QUERY } from '../actions';

const initialState = {
  search_query: '',
};

export default function movieSearch(state = initialState, action) {
  switch (action.type) {
    case SAVE_SEARCH_QUERY:
      return {
        ...state,
        search_query: action.params,
      };
    default:
      return state;
  }
}
