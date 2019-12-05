import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  span {
    color: ${theme.babyPowder};
    font-weight: bold;
    font-size: 1em;
    line-height: 1.1em;
    margin-left: 5px;
  }
`
