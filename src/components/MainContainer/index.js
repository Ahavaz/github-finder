import React from 'react'

import { Container } from './style'

export default function MainContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
