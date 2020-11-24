/**
 * @desc 推荐奖励
 *
 */

import React, { useState } from 'react'

import { PartnerWrap, GatherWrap, SummaryWrap,InviteWrap } from '../styled'
import Copy from '../../../components/AccountDetails/Copy'
import SubscriptionListItem from './subscriptionListItem'
//佣金明细弹窗
import CommissionModal from './commissionModal'
import WhiteArrowTitle from './WhiteArrowTitle'
export default function InviteModule() {
  const [showCommissionnModal, setCommissionModal] = useState<boolean>(false)

  return <SubscriptionListItem title='推荐奖励'>
    <InviteWrap className='border-wrap'>
      <WhiteArrowTitle title='推荐邀请人' />
      <div className='invite-tip'>
        <div>直接推荐收益 <span className='themeColor'>20%</span></div>
        <div>间接收益<span className='themeColor'>15%</span></div>
      </div>
      <div className='invite-address flex-between'>
        <input type="text" value='我的推荐编码'/>
        <button className='btn btn-default' style={{ height: '100%' }}>
          <Copy toCopy={'222'}>复制</Copy>
        </button>
      </div>
    </InviteWrap>
    <PartnerWrap className='border-wrap'>
      <div className="partner-item col-lg-6">
        <WhiteArrowTitle title='推荐统计'/>
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
        <WhiteArrowTitle title='我的佣金'/>
        <div className='content'>
          <div className="profit">
            <div className='head'>可提佣金</div>
            <div className='flex-between profit-detail'>
              <span><b className="value themeColor">0.000</b> ETH</span>
              <a href='javascript:;' onClick={()=>{setCommissionModal(true)}}>佣金明细 &gt;</a>
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
    {/*佣金明细*/}
    <CommissionModal
      isOpen={showCommissionnModal}
      onDismiss={()=>{setCommissionModal(false)}}
    />
  </SubscriptionListItem>
}
