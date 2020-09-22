import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Col, Statistic } from 'antd'

import ItemWrap from './ItemWrap'
import {
  initreward,
  mainContract,
  periodFinish, price,
  startTime,
  totalSupply
} from '../../utils/tron'
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
  .selectbtn {
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
    }
  }
`
export default function PoolInfo(props: any) {
  const { t } = useTranslation()
  const { token } = props

  const [data, setData] = useState<number>()
  const [end, setEnd] = useState<boolean>(false)
  const [_startTime, setStartTime] = useState<number>()
  const [start, setStart] = useState<boolean>(false)

  const [_price, setPrice] = useState<number>(0)

  const [total, setTotal] = useState<number>(0)

  const [_mainPrice, setMainPrice] = useState<number>(0)
  // 矿池代币总量
  const [initAmount, setInitAmount] = useState<number>(0)

  let timer: any
  let timer1: any

  useEffect(() => {
    setTimeout(async () => {
      await findTime()
      const s = await findStartTime()
      const timestamp = (new Date()).getTime()
      if (timestamp > s * 1000) {
        setStart(true)
      }
    }, 800)
    timer = setInterval(() => {
      findTotal()
      findInitreward()
      findMainTokenPrice()
    }, _mainPrice>0?10000:5000)

    timer1 = setInterval(() => {
      findTokenPrice()
    }, _price>0?15000:3000)
    return componentWillUnmount

  }, [])

  function componentWillUnmount() {
    if (timer) {
      clearInterval(timer)
    }
    if (timer1) {
      clearInterval(timer1)
    }
  }

  const findTime = async () => {
    const t = await periodFinish(token.poolAddress)
    console.log('t=======', t)
    setData(t * 1000)
  }

  const findStartTime = async () => {
    const t = await startTime(token.poolAddress)
    setStartTime(t * 1000)
    return t
  }

  const onFinish = () => {
    setEnd(true)
  }

  const onStartFinish = () => {
    setStart(true)
  }


  const findTotal = async () => {

    let total = await  totalSupply(token.poolAddress)
    let t =total / Math.pow(10, token.decimals)
    setTotal(t)
  }

  const findTokenPrice = async () => {
    const p = await  findPrice(token.exAddress)
    setPrice(p)
  }

  const findMainTokenPrice = async () => {
    const p = await  findPrice(mainContract.exAddress)
    setMainPrice(p)
  }

  const findPrice = (exAddress: string) => {

    return price(exAddress).then((ret: any) => {
      console.log('data====', ret)
      if (ret && ret.code === 0) {

        let data = ret.data
        let tx = data['transactionList'][0]

        let trxPrice = data['trxPrice']
        let trxAmount = tx['trxAmount']
        let tokenAmount = tx['tokenAmount']
        let tokenDecimal = tx['tokenDecimal']

        let _trxAmount = trxAmount / Math.pow(10, 6)
        let _tokenAmount = tokenAmount / Math.pow(10, tokenDecimal)

        let rate = _trxAmount / _tokenAmount

        let price = rate * trxPrice
        return price
      }
      return 0
    })
  }

  const findInitreward = () => {
    return initreward(token.poolAddress).then(data => {
      setInitAmount(data / Math.pow(10, mainContract.decimals))
    })
  }


  const income = (period: number) => {
    return ((initAmount * _mainPrice) / ((total) * _price) * period).toFixed(4) || 0
  }

  return (
    <Col xs={24} sm={24} md={8}>
      <ItemWrap
        itemLogo={token.logo.toLowerCase()}
        title={token.lp ? `${token.symbol} LP` : `${token.symbol}`}
        address={token.address}
        subTitle={[
          token.lp ? `${t('deposit')} ${token.symbol} LP token` : `${t('deposit')} ${token.symbol}`,
          `${t('earn')} ${token.earn}`
        ]}
        sourceLink={token.coming ? false : true}
      >
        <div className="status" slot="status">
          {/*<span>ENDED</span>*/}
          {token.coming ? (
            <span>{t('coming')}</span>
          ) : (
            <strong>{end && start ? t('ended') : <Countdown value={start ? data : _startTime}
                                                            onFinish={() => start ? onFinish() : onStartFinish()}/>}</strong>
          )}
        </div>
        {token.coming || !start ? (
          <RowItemButton slot="button" to={'#'}>
            <div className="select" style={{ color: '#dad1d1' }}>{!start ?
              <Countdown value={start ? data : _startTime}/> : t('coming')}</div>
          </RowItemButton>
        ) : (
          <RowItemButton slot="button" to={`/Menu/${token.key}`}>
            <div className="select selectbtn">
              {t('select')}
              <span className="hasbg"></span>
            </div>
          </RowItemButton>
        )}
        <div className="apy" slot="APY">
          APY<span>{token.coming?'Infinity':income(24*7)}%</span>
        </div>
      </ItemWrap>
    </Col>
  )
}
