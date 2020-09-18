import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import Column from '../../components/Column'
import titleImg from '../../assets/images/farm/logo.png'

import ItemWrap from './ItemWrap'
import { Row, Col, notification, Modal, Input } from 'antd'
import {  RouteComponentProps } from 'react-router-dom'
import {
  contractList,
  ITokens,
  allowance,
  mainContract,
  approve,
  stake,
  balanceOf,
  earned,
  getReward,
  exit,
  deposit,
  getAccount
} from '../../utils/tron'
const { Search } = Input;

const WalletBox = styled.div`
  text-align: center;
  h2 {
    text-align: center;
    color: #5b2639;
    font-size: 18px;
    font-weight: 700;
    position: relative;
  }
  img {
    background-color: #f0e7ea;
    font-size: 36px;
    height: 80px;
    width: 80px;
    align-items: center;
    display: flex;
    justify-content: center;
    box-shadow: inset 4px 4px 8px #e2cfd5, inset -6px -6px 12px #f7f2f4;
    border-radius: 40px;
    margin: 70px auto 16px;
    font-style: normal;
  }
  h1 {
    color: #5b2639;
    font-size: 36px;
    font-weight: 700;
    padding: 0;
    line-height: 40px;
    margin-bottom: 0;
    margin-top: 40px;
  }
  p {
    color: #80495d;
    font-size: 16px;
    line-height: 18px;
  }
  .cancle {
  
    margin: 60px 20px 20px;
    align-items: center;
    background-color: #f0e7ea;
    box-shadow: 4px 4px 8px #e2cfd5, -8px -8px 16px #f7f2f4;
    color: #d1004b;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    height: 56px;
    justify-content: center;
    width: calc(100% - 40px);
    border-radius: 12px;
    
    :hover {
      background-color: #f1dae1;
     
    }
  }
`

const Flex = styled.div`
  display: flex;
`
const DetailItem = styled(Flex)`
  flex-direction: column;
  flex: 1 1 0%;
`
export default function Menu(props: RouteComponentProps<{ symbol: string }>) {
  const { t } = useTranslation()
  const [allowStake, setAllowStake] = useState<boolean>(false)
  const [amount, setAmount] = useState<number>(0)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [balance, setBalance] = useState<number>(0.0)
  const [stakeBalance, setStakeBalance] = useState<number>(0.0)
  const [earnedBalance, setEarnedBalance] = useState<number>(0.0)

  const {
    match: {
      params: { symbol }
    }
  } = props
  const tokens = contractList().find((x: ITokens) => x.key === symbol)
  let timer: any


  useEffect(() => {
    setTimeout(() => {
      if (tokens && tokens.symbol === 'TRX') {
        setAllowStake(true)
      } else {
        findAllow()
      }

    }, 300)


    timer = setInterval(() => {
      findAllow()
      findBalance()
      findStakeBalance()
      findEarnedBalance()
    }, 5000)
    return componentWillUnmount
  }, [])



  function componentWillUnmount() {
    if (timer) {
      clearInterval(timer)
    }
  }

  // 是否已授权
  const findAllow = () => {
    if (tokens) {
      allowance(tokens.address, tokens.poolAddress,tokens.lp).then(data => {
        setAllowStake(data)
      })
    }
  }
  // 授权
  const handelApprove = () => {
    if (tokens) {
      approve(tokens.address, tokens.poolAddress).then(data => {
        console.log('data====>>>', data)
        notification.success({
          message: 'success',
          description: 'success'
        })
      })
    }
  }

  //质押
  const handelStake = () => {
    if(amount<=0){
      notification.error({
        message: 'Amount error',
        description: 'Amount error'
      })
      return;
    }
    if (tokens) {
      stake(amount, tokens.poolAddress, tokens.decimals).then(data => {
        console.log('data====>>>', data)
        notification.success({
          message: 'success',
          description: 'success'
        })
        setVisibleModal(false)
      })
    }
  }

  //提取收益
  const handelGetReward = () => {
    if (tokens) {
      getReward(tokens.poolAddress).then(data => {
        console.log('data====>>>', data)
        notification.success({
          message: 'success',
          description: 'success'
        })
      })
    }
  }

  //退出
  const handelExit = () => {
    if (tokens) {
      exit(tokens.poolAddress).then(data => {
        notification.success({
          message: 'success',
          description: 'success'
        })
      })
    }
  }

  const findBalance = () => {
    if (tokens) {
      if (tokens.symbol === 'TRX') {
        getAccount().then((data: any) => {
          setBalance(data.balance / Math.pow(10, tokens.decimals))
        })
      } else {
        balanceOf(tokens.address,tokens.lp).then((data: any) => {
          setBalance(data / Math.pow(10, tokens.decimals))
        })
      }
    }
  }

  const findStakeBalance = () => {
    if (tokens) {
      balanceOf(tokens.poolAddress,tokens.lp).then((data: any) => {
        setStakeBalance(data / Math.pow(10, tokens.decimals))
      })
    }
  }

  const findEarnedBalance = () => {
    if (tokens) {
      earned(tokens.poolAddress).then((data: any) => {
        setEarnedBalance(data / Math.pow(10, mainContract.decimals))
      })
    }
  }

  const findDeposit = () => {
    if(amount<=0){
      notification.error({
        message: 'Amount error',
        description: 'Amount error'
      })
      return;
    }
    if (tokens) {
      deposit(amount, tokens.poolAddress, tokens.decimals).then(data => {
        console.log('=====' + data)
        notification.success({
          message: 'success',
          description: 'success'
        })
        setVisibleModal(false)
      })
    }
  }

  const onChange = (e: any) => {
    console.log('e====', e.currentTarget.value)
    setAmount(e.currentTarget.value)
  }
  useMemo(() => {
    findBalance()
  }, [balance])

  useMemo(() => {
    findStakeBalance()
  }, [stakeBalance])

  useMemo(() => {
    findEarnedBalance()
  }, [earnedBalance])


  return (
    <MenuWrap>
      <MenuTop
        imgUrl={titleImg}
        h1Text="COCKTAIL"
        h3Text={
          tokens && tokens.lp
            ? `Deposit ${tokens && tokens.symbol} LP Tokens and earn ${tokens && tokens.earn}`
            : `${t('menu-detail-greet-small',{symbol1:tokens && tokens.symbol,symbol2:tokens && tokens.earn})}`
        }
      />
      <Column>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" align="middle">
          <Col className="gutter-row" span={12} xs={24} sm={24} md={10}>
            <DetailItem>
              <ItemWrap
                itemLogo={tokens && tokens.earn.toLowerCase()}
                title={earnedBalance.toFixed(6)}
                subTitle={[`${tokens && tokens.earn} ${t('earned')}`]}
              >
                <div
                  slot="button"
                  className="button clickableButton"
                  onClick={() => (earnedBalance > 0 ? handelGetReward() : console.log(''))}
                  style={{ color: earnedBalance > 0 ? '' : 'rgba(209, 0, 75, 0.333)' }}
                >
                  {t('harvest')}
                </div>
              </ItemWrap>
            </DetailItem>
          </Col>

          <Col className="gutter-row" span={12} xs={24} sm={24} md={10}>
            <DetailItem>
              <ItemWrap
                itemLogo={tokens && tokens.logo.toLowerCase()}
                title={stakeBalance.toFixed(6)}
                subTitle={[
                  tokens && tokens.lp
                    ? `${tokens.symbol} LP ${t('stake')}`
                    : `${tokens && tokens.symbol} ${t('stake')}`
                ]}
              >
                <div
                  slot="button"
                  className=" button clickableButton"
                  onClick={() => (allowStake ? setVisibleModal(true) : handelApprove())}
                >
                  {allowStake ? `${t('stake')}` : `${t('Approve')} ${symbol}`}
                </div>
              </ItemWrap>
            </DetailItem>
          </Col>
        </Row>
      </Column>
      <div
        className="button harvestAndUnstake clickableButton"
        onClick={() => (stakeBalance > 0 && earnedBalance > 0 ? handelExit() : console.error('not balance'))}
        style={{ color: stakeBalance > 0 && earnedBalance > 0 ? '' : 'rgba(209, 0, 75, 0.333)' }}
      >
        {t('HarUnst')}
      </div>
      <Modal visible={visibleModal} footer={null} onCancel={() => setVisibleModal(false)}>
        <WalletBox>
          <h2>Stake</h2>
          <h3>
            {balance.toFixed(6)} {tokens && tokens.symbol} {tokens&&tokens.lp?'LP':''} Avaliable
          </h3>
          <p>

            <Search
              onChange={e => onChange(e)}
              value={amount}
              placeholder="input amount"
              enterButton="Max"
              size="large"
              onSearch={() => setAmount(balance)}
            />
          </p>
          <div className="cancle clickableButton" onClick={() => setVisibleModal(false)}>
            Cancel
          </div>
          <div
            className="cancle clickableButton"
            onClick={() => (tokens && tokens.symbol === 'TRX' ? findDeposit() : handelStake())}
          >
            Stake
          </div>
        </WalletBox>
      </Modal>
    </MenuWrap>
  )
}
