import { retry, put } from 'redux-saga/effects'

import { usersApi } from '../../services/api'

import { Creators as UsersActions } from '../ducks/users'

import { extractNextPage } from '../../utils/text'

export function* getUser(action) {
  try {
    const response = yield retry(2, 2000, usersApi.get, `/${action.username}`)

    yield put(UsersActions.getUserSuccess(response.data))
  } catch (err) {
    yield put(UsersActions.getUserError(err.message))
  }
}

export function* getRepos(action) {
  try {
    const response = yield retry(
      2,
      2000,
      usersApi.get,
      `/${action.username}/repos${action.nextPage ? `?${action.nextPage}` : ''}`
    )

    const nextPage = extractNextPage(response.headers.link)

    yield put(UsersActions.getReposSuccess(response.data, nextPage))
  } catch (err) {
    yield put(UsersActions.getReposError(err.message))
  }
}

export function* getStarred(action) {
  try {
    const response = yield retry(
      2,
      2000,
      usersApi.get,
      `/${action.username}/starred${action.nextPage ? `?${action.nextPage}` : ''}`
    )

    const nextPage = extractNextPage(response.headers.link)

    yield put(UsersActions.getStarredSuccess(response.data, nextPage))
  } catch (err) {
    yield put(UsersActions.getStarredError(err.message))
  }
}
