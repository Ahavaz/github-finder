import React from 'react'

import { Container } from './style'

export default function GoBackLink({ children, ...props }) {
  return (
    <Container {...props}>
      <p>Quantidade: {children}</p>
    </Container>
  )
}
