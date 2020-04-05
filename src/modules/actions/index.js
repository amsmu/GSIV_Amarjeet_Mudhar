export const SAVE_SEARCH_QUERY = 'SAVE_SEARCH_QUERY';
export const ACTION_SEARCH_MOVIES_REQUEST = 'ACTION_SEARCH_MOVIES_REQUEST';
export const ACTION_SEARCH_MOVIES_SUCCESS = 'ACTION_SEARCH_MOVIES_SUCCESS';
export const ACTION_SEARCH_MOVIES_FAILURE = 'ACTION_SEARCH_MOVIES_FAILURE';
export const ACTION_FETCH_MOVIE_DETAILS_REQUEST = 'ACTION_FETCH_MOVIE_DETAILS_REQUEST';
export const ACTION_FETCH_MOVIE_DETAILS_SUCCESS = 'ACTION_FETCH_MOVIE_DETAILS_SUCCESS';
export const ACTION_FETCH_MOVIE_DETAILS_FAILURE = 'ACTION_FETCH_MOVIE_DETAILS_FAILURE';

export function actionSaveSearchQuery(params) {
  return {
    type: SAVE_SEARCH_QUERY,
    params: params,
  };
}

//Find Movies List
export function actionSearchMoviesRequest(params) {
  return {
    type: ACTION_SEARCH_MOVIES_REQUEST,
    params: params,
  };
}

export function actionSearchMoviesSuccess(params) {
  return {
    type: ACTION_SEARCH_MOVIES_SUCCESS,
    params: params,
  };
}
export function actionSearchMoviesFailure(params) {
  return {
    type: ACTION_SEARCH_MOVIES_FAILURE,
    params: params,
  };
}

//Find Movie by Id
export function actionFetchMovieDetailsRequest(params) {
  return {
    type: ACTION_FETCH_MOVIE_DETAILS_REQUEST,
    params: params,
  };
}

export function actionFetchMovieDetailsSuccess(params) {
  return {
    type: ACTION_FETCH_MOVIE_DETAILS_SUCCESS,
    params: params,
  };
}
export function actionFetchMovieDetailsFailure(params) {
  return {
    type: ACTION_FETCH_MOVIE_DETAILS_FAILURE,
    params: params,
  };
}
