import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CardContainer } from './style'

import MainContainer from '../../components/MainContainer'
import WrapperCenter from '../../components/WrapperCenter'
import GridContainer from '../../components/GridContainer'
import GoBackLink from '../../components/GoBackLink'
import QtyDisplay from '../../components/QtyDisplay'
import SearchBar from '../../components/SearchBar'
import LoadingCenter from '../../components/LoadingCenter'
import ErrorHandler from '../../components/ErrorHandler'
import LoadingDots from '../../components/icons/LoadingDots'

import { Creators as UsersActions } from '../../store/ducks/users'

import { filterRepos } from '../../utils/array'

export default function Starred() {
  const { username } = useParams()

  const loading = useSelector(state => state.users.loading)
  const error = useSelector(state => state.users.error)
  const starred = useSelector(state => state.users.starred)
  const nextPage = useSelector(state => state.users.nextPage)
  const paginating = useSelector(state => state.users.paginating)

  const [starredInput, setStarredInput] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(UsersActions.getStarredRequest(username))
  }, [dispatch, username])

  const scroll = () => {
    if (nextPage && !paginating) {
      const paginate =
        document.body.getBoundingClientRect().height - document.body.getBoundingClientRect().top ===
        document.body.scrollHeight

      paginate && dispatch(UsersActions.getStarredRequest(username, nextPage))
    }
  }

  window.onscroll = scroll

  const handleInput = e => {
    setStarredInput(e.target.value || '')
  }

  const displayRepos = filterRepos(starred, 'full_name', 'language', starredInput)

  return (
    <MainContainer>
      <GoBackLink>Voltar</GoBackLink>

      {displayRepos.length ? <QtyDisplay>{displayRepos.length}</QtyDisplay> : ''}

      <SearchBar placeholder="Buscar por repositório" value={starredInput} onChange={handleInput} />

      {loading ? (
        <LoadingCenter />
      ) : error ? (
        <ErrorHandler errorMsg={error} notFoundText="Repositório não encontrado" />
      ) : displayRepos.length ? (
        <GridContainer>
          {displayRepos.map(repo => (
            <CardContainer key={repo.id}>
              <h3>{repo.full_name}</h3>

              <p>{repo.description}</p>

              <div>
                <a href={repo.html_url}>Ver no github</a>

                <span>{repo.language}</span>
              </div>
            </CardContainer>
          ))}
        </GridContainer>
      ) : (
        <WrapperCenter>
          <p>Nenhum repositório encontrado contendo "{starredInput}"</p>
        </WrapperCenter>
      )}

      {paginating ? <LoadingDots /> : ''}
    </MainContainer>
  )
}
