import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Col, Statistic } from 'antd'

import ItemWrap from './ItemWrap'
import { periodFinish } from '../../utils/tron'
import { useTranslation } from 'react-i18next'
import shakeImg from '../../assets/images/token/bottle.png'

const { Countdown } = Statistic
const rock = keyframes`
   0% {
		        transform: rotate(-30deg)
		    }
		    10% {
		        transform: rotate(-15deg)
		    }
		    20% {
		        transform: rotate(-30deg)
		    }
		    30% {
		        transform: rotate(-45deg)
		    }
		    35% {
		        transform: rotate(-15deg)
		    }
		    40% {
		        transform: rotate(-45deg)
		    }
		    45% {
		        transform: rotate(-15deg)
		    }
		    50% {
		        transform: rotate(-30deg)
		    }
		    60% {
		        transform: rotate(-15deg)
		    }
		    100% {
		        transform: rotate(-30deg)
		    }
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
    position: relative;
    :hover {
      background-color: #f1dae1;
      :after {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #f1dae1;
      }
      .hasbg {
        display: inline-block;
        width: 40px;
        height: 80%;
        position: absolute;
        top: 0px;
        left: 45%;
        transform: translateX(-45%);
        background: url(${shakeImg}) no-repeat;
        background-size: contain;
        background-position: center;
        animation: ${rock} 1s 0s ease-in-out infinite;
        z-index: 5;
      }
    }
  }
`
export default function PoolInfo(props: any) {
  const { t } = useTranslation()
  const { token } = props

  const [data, setData] = useState<number>()
  const [end, setEnd] = useState<boolean>(false)

  useEffect(() => {
    console.log('=======', token.symbol)
    setTimeout(async () => {
      await findTime()
    }, 500)
    console.log(data)
  }, [])

  const findTime = async () => {
    const t = await periodFinish(token.poolAddress)
    console.log('t=======', t)
    setData(t * 1000)
  }

  const onFinish = () => {
    setEnd(true)
  }

  return (
    <Col xs={24} sm={24} md={8}>
      <ItemWrap
        itemLogo={token.logo.toLowerCase()}
        title={token.lp ? `${token.earn}/${token.symbol} LP` : `${token.symbol}`}
        address={token.address}
        subTitle={[
          token.lp ? `${t('deposit')} ${token.earn}/${token.symbol} LP token` : `${t('deposit')} ${token.symbol}`,
          `Earn ${token.earn}`
        ]}
        sourceLink="111"
      >
        <div className="status" slot="status">
          {/*<span>ENDED</span>*/}
          <strong>{end ? 'ENDED' : <Countdown title="" value={data} onFinish={onFinish} />}</strong>
        </div>
        {token.coming ? (
          <RowItemButton slot="button" to={'#'}>
            <div className="select">Coming Soon</div>
          </RowItemButton>
        ) : (
          <RowItemButton slot="button" to={`/Menu/${token.key}`}>
            <div className="select">
              {t('select')}
              <span className="hasbg"></span>
            </div>
          </RowItemButton>
        )}
        <div className="apy" slot="APY">
          APY<span>{token.apy}%</span>
        </div>
      </ItemWrap>
    </Col>
  )
}
