import { SAVE_SEARCH_QUERY, ACTION_SEARCH_MOVIES_SUCCESS } from '../actions';

const initialState = {
  search_query: '',
  movies: [],
  current_page: 1,
  current_movie: null,
  show_more: true,
};

export default function movieSearch(state = initialState, action) {
  switch (action.type) {
    case SAVE_SEARCH_QUERY:
      return {
        ...state,
        search_query: action.params,
      };
    case ACTION_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
          current_page: action.params.page,
        show_more: action.params.page!=action.params.total_pages,
        movies: action.params.is_new ? action.params.results : state.movies.concat(action.params.results),
      };
    default:
      return state;
  }
}
