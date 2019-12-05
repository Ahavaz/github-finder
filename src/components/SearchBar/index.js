import React from 'react'
import { DebounceInput } from 'react-debounce-input'

import { Container } from './style'

import SearchIcon from '../icons/SearchIcon'

export default function SearchBar(props) {
  return (
    <Container>
      <div>
        <SearchIcon />
      </div>

      <DebounceInput {...props} minLength={1} debounceTimeout={300} />
    </Container>
  )
}
