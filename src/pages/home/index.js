import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { UserCard, CardContent, WrapperButtons } from './style'

import MainContainer from '../../components/MainContainer'
import WrapperCenter from '../../components/WrapperCenter'
import SearchBar from '../../components/SearchBar'
import RepoIcon from '../../components/icons/RepoIcon'
import StarIcon from '../../components/icons/StarIcon'
import LocationIcon from '../../components/icons/LocationIcon'
import LoadingCenter from '../../components/LoadingCenter'
import ErrorHandler from '../../components/ErrorHandler'

import { Creators as UsersActions } from '../../store/ducks/users'

export default function Home() {
  let history = useHistory()
  const { username } = useParams()

  const loading = useSelector(state => state.users.loading)
  const error = useSelector(state => state.users.error)
  const user = useSelector(state => state.users.user)

  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState(username || '')

  useEffect(() => {
    usernameInput && history.push(`/${usernameInput}`)
  }, [dispatch, history, usernameInput])

  useEffect(() => {
    username && dispatch(UsersActions.getUserRequest(username))
  }, [dispatch, username])

  const handleInput = e => {
    setUsernameInput(e.target.value || '')
  }

  const handleClick = path => {
    history.push(`/${user.login}/${path}`)
  }

  return (
    <MainContainer>
      <SearchBar placeholder="Buscar por usuário" value={usernameInput} onChange={handleInput} />

      {loading ? (
        <LoadingCenter />
      ) : error ? (
        <ErrorHandler errorMsg={error} notFoundText="Usuário não encontrado" />
      ) : user ? (
        <UserCard>
          <CardContent>
            <img src={user.avatar_url} alt={user.login} />

            <div>
              <h6>{user.name}</h6>

              {user.location && (
                <div>
                  <LocationIcon />
                  <p>{user.location}</p>
                </div>
              )}
            </div>

            <p>{user.bio}</p>
          </CardContent>

          <WrapperButtons>
            <div onClick={() => handleClick('repos')}>
              <RepoIcon />
              <p>Repos</p>
            </div>

            <div onClick={() => handleClick('starred')}>
              <StarIcon />
              <p>Starred</p>
            </div>
          </WrapperButtons>
        </UserCard>
      ) : (
        <WrapperCenter>
          <p>Insira o nome de um usuário do github acima</p>
        </WrapperCenter>
      )}
    </MainContainer>
  )
}
