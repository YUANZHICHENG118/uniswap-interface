import React from 'react'

import styled from 'styled-components'

import titleImg from '../../assets/images/chef.png'

import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import ItemWrap from './ItemWrap'
import Footer from '../../components/Footer'

const flex = styled.div`
display: flex;
`
const MenuBody = styled.div`
  width: 900px;
  margin: 0 auto;
`
const RowBox = styled(flex)`
  margin-bottom: 24px;
  flex-flow: row wrap;
`
const RowItem = styled(flex)`
  width: 30%;
  position: relative;
`

const RowItemBottom = styled(flex)`
  justify-content: space-between;
  box-sizing: border-box;
  color: rgb(170, 149, 132);
  width: 100%;
  margin-top: 12px;
  line-height: 32px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  background: rgb(255, 253, 250);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 220, 213);
  border-image: initial;
  padding: 0px 12px;
`
export default function Menu() {
  return (
    <MenuWrap>
      <MenuTop
        imgUrl={titleImg}
        h1Text={'Select Your Favorite Dishes'}
        h3Text={'Earn SUSHI tokens by staking Uniswap V2 LP Tokens.'}
      />
      <MenuBody>
        <RowBox>
          <RowItem>
            <ItemWrap itemLogo='🍣' title='Sushi Party!' subTitle={['Deposit SUSHI-ETH UNI-V2 LP', 'Earn SUSHI']}>
              <RowItemBottom>
                <span>APY</span>
                <span>914.87%</span>
              </RowItemBottom>
            </ItemWrap>
          </RowItem>
        </RowBox>
      </MenuBody>
      <Footer/>
    </MenuWrap>
  )
}
