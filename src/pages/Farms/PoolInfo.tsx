import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {  Col ,Statistic} from 'antd'

import ItemWrap from './ItemWrap'
import {  periodFinish } from '../../utils/tron'


const { Countdown } = Statistic;

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
export default function PoolInfo(props: any) {

  const { token } = props

  const [data, setData] = useState<number>()
  const [end, setEnd] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(()=>{
      findTime();
    },300)
    console.log(data)

  },[])

  const findTime=  ()=>{
     periodFinish(token.poolAddress).then(data=>{
      setData(data*1000);

    });
  }

  const onFinish=()=>{
    setEnd(true)
  }


  return (
    <Col xs={24} sm={24} md={8} >
      <ItemWrap itemLogo={token.logo.toLowerCase()}  title={token.lp?`${token.earn}/${token.symbol} LP`:`${token.symbol}`} address={token.address} subTitle={[token.lp?`Deposit ${token.earn}/${token.symbol} LP token`:`Deposit ${token.symbol}`, `Earn ${token.earn}`]} sourceLink="111">
        <div className="status" slot="status">
          {/*<span>ENDED</span>*/}
          <strong>{end?'ENDED':<Countdown title="" value={data} onFinish={onFinish} />}</strong>
        </div>
        {
          token.coming?<RowItemButton slot="button" to={'#'}>
            <div className="select">Coming Soon</div>
          </RowItemButton>:<RowItemButton slot="button" to={`/Menu/${token.key}`}>
            <div className="select">Select</div>
          </RowItemButton>
        }
        <div className="apy" slot="APY">
          APY<span>{token.apy}%</span>
        </div>
      </ItemWrap>
    </Col>
  )
}
