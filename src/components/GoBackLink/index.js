import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './style'

import ArrowIcon from '../../components/icons/ArrowIcon'

export default function GoBackLink({ children, ...props }) {
  let history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return (
    <Container {...props} onClick={handleClick}>
      <ArrowIcon />
      <span>{children}</span>
    </Container>
  )
}
