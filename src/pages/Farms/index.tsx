import React from 'react'
import styled from 'styled-components'
import { Row } from 'antd'
import titleImg from '../../assets/images/farm/logo.png'

import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import PoolInfo from './PoolInfo'
import { contractList, ITokens, mainContract } from '../../utils/tron'


const MenuBody = styled.div`
  width: 100%;
`
const RowBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-flow: row wrap;
`

export default function Menu() {


  return (
    <MenuWrap>
      <MenuTop imgUrl={titleImg} h1Text={'It’s time for your favorite cocktail.'} h3Text={`Earn ${mainContract.symbol} tokens by providing liquidity.`} />
      <MenuBody>
        <RowBox>
          <Row gutter={{ sm: 16, md: 32 }} justify="center" align="middle" style={{ width: '100%' }}>
            {contractList().map((item:ITokens) => {
              return (
                <PoolInfo token={item} key={item.key}></PoolInfo>
              )
            })}
          </Row>
        </RowBox>
      </MenuBody>
    </MenuWrap>
  )
}
