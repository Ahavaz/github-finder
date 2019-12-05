import { all, takeLatest } from 'redux-saga/effects'

import { Types as UsersTypes } from '../ducks/users'

import { getUser, getRepos, getStarred } from './users'

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.GET_USER_REQUEST, getUser),
    takeLatest(UsersTypes.GET_REPOS_REQUEST, getRepos),
    takeLatest(UsersTypes.GET_STARRED_REQUEST, getStarred)
  ])
}
