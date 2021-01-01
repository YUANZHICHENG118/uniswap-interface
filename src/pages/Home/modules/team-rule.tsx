import React from 'react'
//style
import {TeamRuleWrap, SubscriptionWrap} from '../styles'

export default function TeamRule(){
  return (
    <TeamRuleWrap className='bgwrap team-item'>
      <div className="header">
        <h3>团队奖励规则</h3>
        <div className='row remark no-gutters'>
          <div className='col-lg-3 col-xs-12'>最多邀请 <span className='themeColor'>3</span>名组员入团</div>
          <div className='col-lg-6 col-xs-12'>团队总认购大于 <span className='themeColor'>3000 USDT</span> ,即可获取相应的团队收益奖励</div>
          <div className='col-lg-3 col-xs-12'>团队奖励=团队总认购*团队收益率</div>
        </div>
        <SubscriptionWrap className='subscription mt-5'>
          <div className="top">
            <h6 className='text-white'>可获得团队奖励收益率</h6>
          </div>
          <div className='middle row align-items-center'>
            <h5 className='col-lg-3 mt-2 mb-0'> <b className='themeColor'>实时团队总认购</b></h5>
            <div className='col-lg-9 mt-2'>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}
                     style={{width: '40%'}}>
                  <span className="sr-only">40% 完成</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom mt-3'>
            <h6 className='text-white'>团队总认购数</h6>
          </div>
        </SubscriptionWrap>
      </div>
    </TeamRuleWrap>
  )
}
