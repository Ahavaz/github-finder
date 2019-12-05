import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;

  p {
    color: ${theme.babyPowder};
    font-weight: bold;
    font-size: 1em;
    line-height: 1.1em;
  }
`
