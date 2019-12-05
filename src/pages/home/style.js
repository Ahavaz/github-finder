import styled from 'styled-components'

import theme from '../../styles/theme'

export const UserCard = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  width: 250px;
  background-color: ${theme.babyPowder};
  box-shadow: 0px 1px 1px 1px ${theme.shadowDefault};
  border-radius: 8px;
  transition: all 200ms ease;

  :hover {
    box-shadow: 0px 3px 3px 3px ${theme.shadowDefault};
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: ${theme.raisinBlack};

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 7px;

    h6 {
      flex: 1;
      font-size: 0.9em;
      font-weight: 600;
      line-height: 1.1em;
    }

    div {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: ${theme.raisinBlack};

      p {
        font-size: 0.9em;
        line-height: 1.1em;
        margin-left: 5px;
      }
    }
  }

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${theme.raisinBlack};
    font-size: 0.9em;
    margin-top: 7px;
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    color: ${theme.raisinBlack};
    transition: all 200ms ease;
    cursor: pointer;

    p {
      line-height: 1.1em;
      margin-left: 5px;
    }

    svg {
      path {
        transition: all 200ms ease;
      }
    }

    :hover {
      color: ${theme.babyPowder};
      background-color: ${theme.raisinBlack};

      svg {
        path {
          fill: ${theme.babyPowder};
        }
      }
    }
  }
`
