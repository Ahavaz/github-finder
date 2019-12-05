import styled from 'styled-components'

import theme from '../../styles/theme'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: ${theme.raisinBlack};
  min-height: 320px;
  width: 250px;
  background-color: ${theme.white};
  box-shadow: 0px 1px 1px 1px ${theme.shadowDefault};
  border: 1px solid ${theme.raisinBlack};
  border-radius: 8px;
  transition: all 200ms ease;
  color: ${theme.raisinBlack};

  :hover {
    box-shadow: 0px 3px 3px 3px ${theme.shadowDefault};
  }

  h3 {
    word-wrap: break-word;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  div {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${theme.raisinBlack};
      font-size: 0.9em;
      width: fit-content;
    }

    span {
      font-size: 0.9em;
      font-weight: 600;
    }
  }
`
