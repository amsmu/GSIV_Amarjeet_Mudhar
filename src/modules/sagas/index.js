import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  ACTION_SEARCH_MOVIES_REQUEST,
  ACTION_FETCH_MOVIE_DETAILS_REQUEST,
  actionSearchMoviesSuccess,
  actionFetchMovieDetailsSuccess,
} from '../actions';

export function* fetchMovies(action) {
  var page = action.params.page ? action.params.page : 1;
  const endpoint =
    action.params.query.length > 0
      ? 'https://api.themoviedb.org/3/search/movie?api_key=8c246a93f391e55281a44d1e497c682e&language=en-US&query=' +
        action.params.query +
        '&page=' +
        page
      : 'https://api.themoviedb.org/3/movie/upcoming?api_key=8c246a93f391e55281a44d1e497c682e&language=en-US&page=' + page;

  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  if (data) {
    data.is_new = action.params.is_new;
    yield put(actionSearchMoviesSuccess(data));
  }
}

export function* fetchMovieDetailById(action) {
  const endpoint =
    'https://api.themoviedb.org/3/movie/' + action.params.id + '?api_key=8c246a93f391e55281a44d1e497c682e&language=en-US';

  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  if (data) {
    yield put(actionFetchMovieDetailsSuccess(data));
  }
}

export function* Movies() {
  yield takeEvery(ACTION_SEARCH_MOVIES_REQUEST, fetchMovies);
  yield takeEvery(ACTION_FETCH_MOVIE_DETAILS_REQUEST, fetchMovieDetailById);
}

export default function* rootSaga() {
  yield all([Movies()]);
}
