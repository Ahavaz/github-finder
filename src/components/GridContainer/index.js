import React from 'react'

import { Container } from './style'

export default function GridContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
