import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import api from '../../services/api';
import {Creators as LoginActions, Types as LoginTypes} from '../ducks/login';
import {
  Creators as RepositoriesActions,
  Types as RepositoriosTypes,
} from '../ducks/repositories';

import {navigate} from '../../services/navigation';
// o * é como se fosse async e o yield é como se fosse o await
function* login(action) {
  try {
    const {username} = action.payload;
    yield call(api.get, `/users/${username}`); // dois parametros: 1- qual parametro vamos fazer. 2- é qual parametro vamos mandar para o primeiro parametro

    yield put(LoginActions.loginSucess(username));

    navigate('Repositories');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}
function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSucess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* roootSaga() {
  return yield all([
    // takeLatest(LoginTypes.REQUEST, login),
    // takeLatest(RepositoriosTypes.REQUEST, loadRepositories),
  ]);
}
