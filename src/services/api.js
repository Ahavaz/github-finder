import axios from 'axios'

const { REACT_APP_USERS_API } = process.env

export const usersApi = axios.create({
  baseURL: REACT_APP_USERS_API
})
