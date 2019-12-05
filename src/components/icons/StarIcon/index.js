import React from 'react'

import theme from '../../../styles/theme'

export default function StarIcon(props) {
  return (
    <svg {...props} viewBox="0 0 14 16" width="14" height="16" aria-hidden="true">
      <path
        fill={theme.raisinBlack}
        fillRule="evenodd"
        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
      ></path>
    </svg>
  )
}
