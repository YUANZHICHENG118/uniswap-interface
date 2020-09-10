import React from 'react'

import styled from 'styled-components'

import titleImg from '../../assets/images/farm/logo.png'

import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import ItemWrap from './ItemWrap'

const MenuBody = styled.div`
  width: 100%;
`
const RowBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-flow: row wrap;
`
const RowItem = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  width: 33.33333333%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   padding: 0;
   width:100%
  `};
`

export default function Menu() {
  return (
    <MenuWrap>
      <MenuTop
        imgUrl={titleImg}
        h1Text={'Select a farm.'}
        h3Text={'Earn Dragon tokens by providing liquidity.'}
      />
      <MenuBody>
        <RowBox>
          <RowItem>
            <ItemWrap itemLogo='🍣' title='USDJ' subTitle={['Deposit USDJ','Earn Dragon']} ></ItemWrap>
          </RowItem>
        </RowBox>
      </MenuBody>
    </MenuWrap>
  )
}
