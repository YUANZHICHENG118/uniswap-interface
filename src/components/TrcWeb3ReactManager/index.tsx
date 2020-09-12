import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'


const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
`

const Message = styled.h2`
  color: ${({ theme }) => theme.secondary1};
`

export default function Web3ReactManager({ children }: { children: JSX.Element }) {
  const { t } = useTranslation()
  const { tronWeb } = window;

  // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error
  if (!tronWeb) {
    return (
      <MessageWrapper>
        <Message>{t('unknownError')}</Message>
      </MessageWrapper>
    )
  }


  return children
}
