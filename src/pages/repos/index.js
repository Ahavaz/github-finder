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

export default function Repos() {
  const { username } = useParams()

  const loading = useSelector(state => state.users.loading)
  const error = useSelector(state => state.users.error)
  const repos = useSelector(state => state.users.repos)
  const nextPage = useSelector(state => state.users.nextPage)
  const paginating = useSelector(state => state.users.paginating)

  const [repoInput, setRepoInput] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(UsersActions.getReposRequest(username))
  }, [dispatch, username])

  const scroll = () => {
    // console.log(
    //   'top',
    //   document.body.getBoundingClientRect().height - document.body.getBoundingClientRect().top
    // )
    // console.log('scrollHeight', document.body.scrollHeight)
    // console.log(
    //   'top - scrollHeight',
    //   document.body.getBoundingClientRect().height - document.body.getBoundingClientRect().top >
    //     document.body.scrollHeight - 100
    // )

    if (nextPage && !paginating) {
      const paginate =
        document.body.getBoundingClientRect().height - document.body.getBoundingClientRect().top >
        document.body.scrollHeight - 100

      paginate && dispatch(UsersActions.getReposRequest(username, nextPage))
    }
  }

  window.onscroll = scroll
  // document.ontouchmove = scroll

  const handleInput = e => {
    setRepoInput(e.target.value || '')
  }

  const displayRepos = filterRepos(repos, 'name', 'language', repoInput)

  return (
    <MainContainer>
      <GoBackLink>Voltar</GoBackLink>

      {displayRepos.length ? <QtyDisplay>{displayRepos.length}</QtyDisplay> : ''}

      <SearchBar placeholder="Buscar por repositório" value={repoInput} onChange={handleInput} />

      {loading ? (
        <LoadingCenter />
      ) : error ? (
        <ErrorHandler errorMsg={error} notFoundText="Repositório não encontrado" />
      ) : displayRepos.length ? (
        <GridContainer>
          {displayRepos.map(repo => (
            <CardContainer key={repo.id}>
              <h3>{repo.name}</h3>

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
          <p>Nenhum repositório encontrado contendo "{repoInput}"</p>
        </WrapperCenter>
      )}

      {paginating ? <LoadingDots /> : ''}
    </MainContainer>
  )
}
