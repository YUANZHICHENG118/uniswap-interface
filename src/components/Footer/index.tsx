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
    ${({ theme }) => theme.mediaWidth.upToMiddle`
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
    <a href="https://t.me/cocktailswap" target="_blank" rel="noopener noreferrer">Telegram</a>
    <a href="https://twitter.com/cocktailswap" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="mailto:cocktailswap@protonmail.com" target="_blank" rel="noopener noreferrer">Medium</a>
  </BodyWrapper>
}
