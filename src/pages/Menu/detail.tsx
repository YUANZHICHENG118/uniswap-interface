import React from 'react'
import styled from 'styled-components'
import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import Column from '../../components/Column'
import ItemWrap from './ItemWrap'
const Flex=styled.div`
 display: flex;
`
const DetailWarp = styled(Flex)`
  width: 600px;
  margin: 0 auto;
`
const DetailItem = styled(Flex)`
  flex-direction: column;
  flex: 1 1 0%;
`


export default function Menu() {
  return (
    <MenuWrap>
      <MenuTop textLogo="🐢" h1Text="Tether Turtle" h3Text="Deposit USDT-ETH UNI-V2 LP  Tokens and earn SUSHI" />
      <Column>
        <DetailWarp>
          <DetailItem>
            <ItemWrap/>
          </DetailItem>
          <div style={{height:'24px',width:'24px'}}></div>
          <DetailItem>
            <ItemWrap/>
          </DetailItem>
        </DetailWarp>
      </Column>
    </MenuWrap>
  )
}
