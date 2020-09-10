import React from 'react'

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
                  ></ItemWrap>
                </Col>
              })
            }

          </Row>
        </RowBox>
      </MenuBody>
    </MenuWrap>
  )
}
