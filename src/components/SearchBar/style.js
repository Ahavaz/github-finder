import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.div`
  position: relative;
  margin-top: 30px;

  > div {
    position: absolute;
    left: 0;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    min-height: 25px;
    width: 300px;
    padding: 0 10px 0 25px;
    color: ${theme.raisinBlack};
    font-weight: 600;
    border: 1px solid ${theme.gray};
    border-radius: 25px;
  }
`
