import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ACTION_SEARCH_MOVIES_REQUEST, actionSearchMoviesSuccess } from '../actions';

export function* fetchMovies(action) {
  console.log('FETCH MOVIES SAGA', action.params);
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

export function* Movies() {
  console.log('ROOORR');
  yield takeEvery(ACTION_SEARCH_MOVIES_REQUEST, fetchMovies);
}

export default function* rootSaga() {
  console.log('ROOORR');
  yield all([Movies()]);
}
