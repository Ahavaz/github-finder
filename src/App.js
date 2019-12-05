import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'

import ScrollToTop from './components/ScrollToTop'

import Routes from './routes'

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Routes />
    </Router>
  )
}
