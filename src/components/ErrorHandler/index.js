import React from 'react'

import WrapperCenter from '../WrapperCenter'

export default function ErrorHandler({ errorMsg, notFoundText }) {
  return (
    <WrapperCenter>
      <p>
        {errorMsg.split(' ').includes('404')
          ? notFoundText
          : 'Ocorreu algum erro, favor tentar novamente mais tarde'}
      </p>
    </WrapperCenter>
  )
}
