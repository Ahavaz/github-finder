export const Types = {
  GET_USER_REQUEST: 'users/GET_USER_REQUEST',
  GET_USER_SUCCESS: 'users/GET_USER_SUCCESS',
  GET_USER_ERROR: 'users/GET_USER_ERROR',

  GET_REPOS_REQUEST: 'users/GET_REPOS_REQUEST',
  GET_REPOS_SUCCESS: 'users/GET_REPOS_SUCCESS',
  GET_REPOS_ERROR: 'users/GET_REPOS_ERROR',

  GET_STARRED_REQUEST: 'users/GET_STARRED_REQUEST',
  GET_STARRED_SUCCESS: 'users/GET_STARRED_SUCCESS',
  GET_STARRED_ERROR: 'users/GET_STARRED_ERROR'
}

const INITIAL_STATE = {
  user: null,
  repos: [],
  starred: [],
  loading: false,
  paginating: false,
  error: '',
  nextPage: ''
}

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USER_REQUEST:
      return { ...INITIAL_STATE, loading: true }
    case Types.GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.data }
    case Types.GET_USER_ERROR:
      return { ...state, loading: false, error: action.error }

    case Types.GET_REPOS_REQUEST:
      return { ...state, loading: !action.nextPage, paginating: !!action.nextPage }
    case Types.GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: [...state.repos, ...action.data],
        nextPage: action.nextPage,
        paginating: false
      }
    case Types.GET_REPOS_ERROR:
      return { ...state, loading: false, error: action.error }

    case Types.GET_STARRED_REQUEST:
      return { ...state, loading: !action.nextPage, paginating: !!action.nextPage }
    case Types.GET_STARRED_SUCCESS:
      return {
        ...state,
        loading: false,
        starred: [...state.starred, ...action.data],
        nextPage: action.nextPage,
        paginating: false
      }
    case Types.GET_STARRED_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export const Creators = {
  getUserRequest: username => ({
    type: Types.GET_USER_REQUEST,
    username
  }),
  getUserSuccess: data => ({
    type: Types.GET_USER_SUCCESS,
    data
  }),
  getUserError: error => ({
    type: Types.GET_USER_ERROR,
    error
  }),

  getReposRequest: (username, nextPage) => ({
    type: Types.GET_REPOS_REQUEST,
    username,
    nextPage
  }),
  getReposSuccess: (data, nextPage) => ({
    type: Types.GET_REPOS_SUCCESS,
    data,
    nextPage
  }),
  getReposError: error => ({
    type: Types.GET_REPOS_ERROR,
    error
  }),

  getStarredRequest: (username, nextPage) => ({
    type: Types.GET_STARRED_REQUEST,
    username,
    nextPage
  }),
  getStarredSuccess: (data, nextPage) => ({
    type: Types.GET_STARRED_SUCCESS,
    data,
    nextPage
  }),
  getStarredError: error => ({
    type: Types.GET_STARRED_ERROR,
    error
  })
}
