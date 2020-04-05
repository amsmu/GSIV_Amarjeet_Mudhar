export const SAVE_SEARCH_QUERY = 'SAVE_SEARCH_QUERY';
export const ACTION_SEARCH_MOVIES_REQUEST = 'ACTION_SEARCH_MOVIES_REQUEST';
export const ACTION_SEARCH_MOVIES_SUCCESS = 'ACTION_SEARCH_MOVIES_SUCCESS';
export const ACTION_SEARCH_MOVIES_FAILURE = 'ACTION_SEARCH_MOVIES_FAILURE';

export function actionSaveSearchQuery(params) {
  return {
    type: SAVE_SEARCH_QUERY,
    params: params,
  };
}

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
