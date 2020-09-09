import React from 'react'

import styled from 'styled-components'

import {AutoRow} from '../../components/Row'
const CODE_LINK = 'https://github.com/Uniswap/uniswap-interface'
const MenuBottom = styled.div`

`

const LinkItem= styled.a`
    color: rgb(170, 149, 133);
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    line-height:72px
`
export default function Footer() {
  return (
      <MenuBottom>
        <AutoRow align="center" justify='center'>
          <LinkItem target="_blank" href='https://uniswap.org/docs/v2'>Docs</LinkItem>
          <LinkItem target="_blank" href={CODE_LINK}>Code</LinkItem>
          <LinkItem target="_blank" href="https://discord.gg/EwFs3Pp" >Discord</LinkItem>
          <LinkItem target="_blank" href="https://uniswap.info/" >Analytics</LinkItem>
        </AutoRow>
      </MenuBottom>
  )
}
