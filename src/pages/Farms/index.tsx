import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import titleImg from '../../assets/images/farm/logo.png'

import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import ItemWrap from './ItemWrap'
import { contractList, ITokens, mainContract } from '../../utils/tron'


const MenuBody = styled.div`
  width: 100%;
`
const RowBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-flow: row wrap;
`
const RowItemButton = styled(NavLink)`
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
    color: ${({ theme }) => theme.highLignt};
    :hover {
      background-color: #f1dae1;
    }
  }
`

export default function Menu() {


  useEffect(()=>{


  },[])



  return (
    <MenuWrap>
      <MenuTop imgUrl={titleImg} h1Text={'Select a farm.'} h3Text={`Earn ${mainContract.symbol} tokens by providing liquidity.`} />
      <MenuBody>
        <RowBox>
          <Row gutter={{ sm: 16, md: 32 }} justify="center" align="middle" style={{ width: '100%' }}>
            {contractList().map((item:ITokens, index) => {
              return (
                <Col xs={24} sm={24} md={8} key={index}>
                  <ItemWrap itemLogo={item.logo.toLowerCase()}  title={`${item.earn}/${item.symbol}`} address={item.address} subTitle={[`Deposit ${item.symbol}`, `Earn ${item.earn}`]} sourceLink="111">
                    {/*<div className="v2tag" slot="tag">*/}
                      {/*Pool v2*/}
                    {/*</div>*/}
                    {
                      item.coming?<RowItemButton slot="button" to={'#'}>
                        <div className="select">Coming Soon</div>
                      </RowItemButton>:<RowItemButton slot="button" to={`/Farms/${item.symbol}/${item.earn}`}>
                        <div className="select">Select</div>
                      </RowItemButton>
                    }

                    <div className="apy" slot="APY">
                      APY<span>{item.apy}%</span>
                    </div>
                  </ItemWrap>
                </Col>
              )
            })}
          </Row>
        </RowBox>
      </MenuBody>
    </MenuWrap>
  )
}
