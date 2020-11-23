import React, { useCallback, useState } from 'react'

import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo.png'
import Wordmark from '../../assets/images/logoTitle.png'
import WordmarkDark from '../../assets/images/logoTitle.png'
import checkIcon from '../../assets/images/subscription/check.png'
import ArrowWhite from '../../assets/images/subscription/arrow-white.png'

import Copy from '../../components/AccountDetails/Copy'
import SubscriptionModal from './components/subscriptionModal'
import { useDarkModeManager } from '../../state/user/hooks'

import {
  BodyWrapper,
  TradeWrapper,
  SubscriptionItems,
  AccountWrap,
  InviteWrap,
  PartnerWrap,
  SummaryWrap, GatherWrap, HistoryWrap
} from './styled'
import SubscriptionListItem from './components/subscriptionListItem'


export default function Subscription() {
  const [showSubscriptionModal, setSubscriptionModal] = useState<boolean>(false)
  const handleSubscriptionDismiss = useCallback(()=>{
    setSubscriptionModal(false);
  },[setSubscriptionModal])
  const [isDark] = useDarkModeManager()
  return <BodyWrapper className='container'>
    <div className="logo-box">
      <img src={isDark ? LogoDark : Logo} height={92} alt=""/>
      <img style={{ marginLeft: '4px', marginTop: '4px' }} height={92} src={isDark ? WordmarkDark : Wordmark}
           alt="logo"/>
    </div>
    <div className="statistic">
      <div className="number-box">
        <span>总剩余数量：</span>
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
      <div className='countDown col-lg-6  '>
        <h3>认购倒计时</h3>
        <div className="time-box">
          <div className='time-item'>
            <span className='number'>06</span>
            <span className="unit">days</span>
          </div>
          <div className='time-item'>
            <span className='number'>09</span>
            <span className="unit">hours</span>
          </div>
          <div className='time-item'>
            <span className='number'>14</span>
            <span className="unit">min</span>
          </div>
          <div className='time-item'>
            <span className='number'>06</span>
            <span className="unit">sec</span>
          </div>
        </div>
      </div>
      <HistoryWrap className='history col-lg-6 '>
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
      <SubscriptionListItem title='我的资产'>
        <AccountWrap className='border-wrap'>
          <div className="left">
            <div>您已拥有</div>
            <div><span className="number">16519</span> <span className='unit'>PZS</span></div>
          </div>
          <div className='divider'/>
          <div className="right">
            <div>钱包地址</div>
            <div className='address'>0xF42E48789013******D57b1b3f06650e</div>
            <button className="btn btn-default">连接钱包</button>
          </div>
        </AccountWrap>
      </SubscriptionListItem>
      <SubscriptionListItem title='推荐奖励'>
        <InviteWrap className='border-wrap'>
          <div className='white-title'><img src={ArrowWhite} alt=""/> 推荐邀请人</div>
          <div className='invite-address flex-between'>
            <input type="text" value='Search name or paste address（邀请人地址'/>
            <button className='btn btn-default' style={{ height: '100%' }}>
              <Copy toCopy={'222'}>复制</Copy>
            </button>
          </div>
          <div className='invite-tip'>
            直接推荐收益为 <span className='themeColor'>20%</span>
            ，间接收益为 <span className='themeColor'>15%</span>
          </div>
        </InviteWrap>
        <PartnerWrap className='border-wrap'>
          <div className="partner-item col-lg-6">
            <div className='white-title'><img src={ArrowWhite} alt=""/>推荐统计</div>
            <GatherWrap className='gather-box'>
              <div className="value"><span>16529</span> <span className='unit'>ETH</span></div>
              <div className="label">累计收益</div>
            </GatherWrap>
            <SummaryWrap className="Summary flex-between">
              <div className="summary-item flex-column">
                <span className='summary-item-value'>1659</span>
                <span className="summary-item-label">直接推荐</span>
              </div>
              <div className="summary-item flex-column">
                <span className='summary-item-value'>1659</span>
                <span className="summary-item-label">间接推荐</span>
              </div>
              <div className="summary-item flex-column">
                <span className='summary-item-value'>16529</span>
                <span className="summary-item-label">团队总人数</span>
              </div>
            </SummaryWrap>
          </div>
          <div className="partner-item col-lg-6">
            <div className='white-title'><img src={ArrowWhite} alt=""/>我的佣金</div>
            <div className='content'>
              <div className="profit">
                <div className='head'>可提佣金</div>
                <div className='flex-between profit-detail'>
                  <span><b className="value themeColor">0.000</b> ETH</span>
                  <span>佣金明细 &gt;</span>
                </div>
              </div>
              <div className='tip'>
                <span className="themeColor">PZS</span>
                <span>可提取推荐奖励</span>
              </div>
            </div>
            <button className='btn btn-default' style={{ width: '100%' }}>提取</button>
          </div>
        </PartnerWrap>
      </SubscriptionListItem>
      <SubscriptionListItem title='成为超级合伙人'>
        <PartnerWrap className='border-wrap'>
          <div className="partner-item col-lg-6">
            <div className='white-title'>
              <img src={ArrowWhite} alt=""/>
              加入我们
            </div>
            <div className='advantage'>
              <div className='advantage-item'><img src={checkIcon} alt=""/><span>收益</span><span
                className='big'>15 <i>%</i></span></div>
              <div className='advantage-item'><img src={checkIcon} alt=""/><span>代数</span><span
                className='big'>无限代</span></div>
              <div className='advantage-item'><img src={checkIcon} alt=""/><span>仅需支付</span><span
                className='big'>2 ETH</span></div>
            </div>
            <button className='btn btn-default' style={{ width: '100%' }}>成为超级合伙人</button>
          </div>
          <div className="partner-item col-lg-6">
            <div className='white-title'><img src={ArrowWhite} alt=""/>我的合伙人收益</div>
            <div className='content'>
              <div className="profit">
                <div className='head'>可提收益</div>
                <div className='flex-between profit-detail'>
                  <span><b className='themeColor value'>0.000</b> ETH</span>
                  <span>收益明细 &gt;</span>
                </div>
              </div>
              <div className='tip'>
                <span className="themeColor">PZS</span>
                <span>可提取推荐奖励</span>
              </div>
            </div>
            <button className='btn btn-default' style={{ width: '100%' }}>提取</button>
          </div>
        </PartnerWrap>
      </SubscriptionListItem>
    </SubscriptionItems>
    <SubscriptionModal
      isOpen={showSubscriptionModal}
      onDismiss={handleSubscriptionDismiss}
    />
  </BodyWrapper>
}
