import React from 'react'

import { Container } from './style'

export default function WrapperCenter({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
