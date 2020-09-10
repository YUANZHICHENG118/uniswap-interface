import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  padding-top: 30px;
  font-weight: 600;
  height: 72px;
  background-color: #f0e7ea;
  text-align:center
  a {
    font-size: 16px;
    color: #aa8592;
    padding: 5px 15px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 14px;
    padding: 5px;
  `}
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Footer() {
  return <BodyWrapper>
    <a href="https://t.me/dragonfinance" target="_blank" rel="noopener noreferrer">Telegram</a>
    <a href="/">Discord</a>
    <a href="https://twitter.com/DragonfiHunter" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://medium.com/@dragonfinance" target="_blank" rel="noopener noreferrer">Medium</a>
  </BodyWrapper>
}
