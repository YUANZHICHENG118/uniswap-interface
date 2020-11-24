// 成为超级合伙人
import React from 'react'

import SubscriptionListItem from './subscriptionListItem'
import {PartnerWrap}  from '../styled'
import checkIcon from '../../../assets/images/subscription/check.png'
import WhiteArrowTitle from './WhiteArrowTitle'

export default function PartnerModule() {
  return (
    <SubscriptionListItem title='成为超级合伙人'>
      <PartnerWrap className='border-wrap'>
        <div className="partner-item col-lg-6">
          <WhiteArrowTitle title='加入我们'/>
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
          <WhiteArrowTitle title='我的合伙人收益'/>
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
  )

}
