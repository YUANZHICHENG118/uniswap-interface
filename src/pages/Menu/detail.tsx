import React from 'react'
import styled from 'styled-components'
import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import Column from '../../components/Column'
import ItemWrap from './ItemWrap'
import { Row, Col } from 'antd';
const Flex = styled.div`
  display: flex;
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
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='center' align='middle'>
          {
            [1,1].map(()=>{
             return  <Col  className="gutter-row" span={12} xs={24} sm={24} md={10}>
                <DetailItem>
                  <ItemWrap itemLogo='🍣' title='0.000' subTitle={['SUSHI Earned']}/>
                </DetailItem>
              </Col>
            })
          }

        </Row>
      </Column>
    </MenuWrap>
  )
}
