import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Row, Col } from 'antd';
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
const RowItemButton = styled.a`
  width: 100%;
  .select {
    height: 56px;
    font-size: 16px;
    align-items: center;
    background-color: #f0e7ea;
    border: 0;
    border-radius: 12px;
    box-shadow: 4px 4px 8px #efc6ed, -8px -8px 16px #e7d7ea;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    justify-content: center;
    outline: none;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    color: #d100c9;
    :hover {
      background-color: #f1dae1;
    }
  }
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
          <Row gutter={{sm: 16, md: 32}} justify='center' align='middle' style={{width:'100%'}}>
            {
              [1,1,1,1,1].map(()=>{
                return <Col  xs={24} sm={24} md={8}>
                  <ItemWrap
                    itemLogo='🍣'
                    title='USDJ'
                    subTitle={['Deposit USDJ','Earn Dragon']}
                    sourceLink='111'
                  >
                    <RowItemButton>
                     <NavLink className="select" to={`/Farms/22`}>Select</NavLink>
                    </RowItemButton>
                  </ItemWrap>
                </Col>
              })
            }

          </Row>
        </RowBox>
      </MenuBody>
    </MenuWrap>
  )
}
