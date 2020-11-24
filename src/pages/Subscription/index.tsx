import React, { useCallback, useState } from 'react'

import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo.png'
import Wordmark from '../../assets/images/logoTitle.png'
import WordmarkDark from '../../assets/images/logoTitle.png'

import SubscriptionModal from './components/subscriptionModal'
import { useDarkModeManager } from '../../state/user/hooks'
import InviteModule from './components/InviteModule'
//我的资产
import AssetsModule from './components/AssetsModule'
//超级和伙人
// import PartnerModule from './components/PartnerModule'

import {
  BodyWrapper,
  TradeWrapper,
  SubscriptionItems,
  HistoryWrap,
  CountDownWrap
} from './styled'

export default function Subscription() {
  const [showSubscriptionModal, setSubscriptionModal] = useState<boolean>(false)
  const handleSubscriptionDismiss = useCallback(()=>{
    setSubscriptionModal(false);
  },[setSubscriptionModal])
  const [isDark] = useDarkModeManager()
  return <BodyWrapper className='container'>
    <div className="logo-box">
      <img src={isDark ? LogoDark : Logo} height={100} alt=""/>
      <img style={{ marginLeft: '14px'}} height={80} src={isDark ? WordmarkDark : Wordmark}
           alt="logo"/>
    </div>
    <CountDownWrap>
      <h3>第一期认购倒计时</h3>
      <div className="time-box">
        <div className='time-item flex-column'>
          <span className='number text-center'>06</span>
          <span className="unit text-center">days</span>
        </div>
        <div className='time-item flex-column'>
          <span className='number text-center'>09</span>
          <span className="unit text-center">hours</span>
        </div>
        <div className='time-item flex-column'>
          <span className='number text-center'>14</span>
          <span className="unit text-center">min</span>
        </div>
        <div className='time-item flex-column'>
          <span className='number text-center'>06</span>
          <span className="unit text-center">sec</span>
        </div>
      </div>
    </CountDownWrap>
    <div className="statistic">
      <div className="number-box">
        <span>剩余PZS：</span>
        <span className='number'>99513</span>
        <span>Pzs</span>
      </div>
      <div className='process'>
        <div className="outer">
          <div className="inner" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="btn-box">
        <span className="btn-default btn-radius" onClick={()=>setSubscriptionModal(true)}>认购</span>
      </div>
      <div className="getmore">
        <span>了解详情 &gt;</span>
      </div>
    </div>
    <TradeWrapper className='flex-between row'>
      <HistoryWrap className='history'>
        <div className="head">
          <span className='circle-icon'><i/><i/><i/></span>
          <span>最近交易记录</span>
        </div>
        <div className="history-table">
          <div className='table-tr table-head'>
            <span className="value">VALUE</span>
            <span className='date'>DATE</span>
            <span className='tx'>TX</span>
          </div>
          {
            [1, 1, 1, 1, 1].map(() => {
              return <div className='table-tr'>
                <span className="value"><span className=' themeColor'>+5</span> <i>PZS</i></span>
                <span className='date'>2020-07-20 20:00</span>
                <span className='tx'>0x81b7e08f65bdf5648606c</span>
              </div>
            })
          }
        </div>
      </HistoryWrap>
    </TradeWrapper>
    <SubscriptionItems>
      {/*我的资产*/}
      <AssetsModule/>
      {/*推荐奖励*/}
      <InviteModule/>
      {/*成为超级合伙人-新设计图上没有这块了*/}
      {/*<PartnerModule/>*/}
    </SubscriptionItems>
    {/*认购弹窗*/}
    <SubscriptionModal
      isOpen={showSubscriptionModal}
      onDismiss={handleSubscriptionDismiss}
    />
  </BodyWrapper>
}
