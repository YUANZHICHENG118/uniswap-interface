import React from 'react'
import styled from 'styled-components'
import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import Column from '../../components/Column'
import ItemWrap from './ItemWrap'
import Footer from '../../components/Footer'
const Flex = styled.div`
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
const Tip=styled.h3`
color: rgb(170, 149, 133);
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin: 48px 0;
    padding: 0px;
`

export default function Menu() {
  return (
    <MenuWrap>
      <MenuTop textLogo="🐢"  h1Text="Tether Turtle" h3Text="Deposit USDT-ETH UNI-V2 LP  Tokens and earn SUSHI" />
      <Column>
        <DetailWarp>
          <DetailItem>
            <ItemWrap itemLogo='🍣' showButton={true} title='0.000' subTitle={['SUSHI Earned']}/>
          </DetailItem>
          <div style={{ height: '24px', width: '24px' }}></div>
          <DetailItem>
            <ItemWrap itemLogo='👨🏻‍🍳' showButton={true} title='0.000' subTitle={['USDT-ETH UNI-V2 LP Tokens Staked']}/>
          </DetailItem>
        </DetailWarp>
      </Column>
      <Tip>⭐️ Every time you stake and unstake LP tokens, the contract will automagically
        harvest SUSHI rewards for you!</Tip>
      <Footer/>
    </MenuWrap>
  )
}
