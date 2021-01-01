import React from 'react'
//style
import {TeamRuleWrap, SubscriptionWrap, ProgressIdentify} from '../styles'
//components
import ProgressIdentifyItem from './progress-identify-item'

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
            <h5 className='col-lg-2 mt-3 mb-0'> <b className='themeColor'>实时团队总认购</b></h5>
            <div className='col-lg-10 mt-3'>
              <div className="progress relative">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}
                     style={{width: '40%'}}>
                  <span className="sr-only">40% 完成</span>
                </div>
                {/*标识*/}
                <ProgressIdentify className='row progress-identify'>
                  <ProgressIdentifyItem top={1} bottom={3000}/>
                  <ProgressIdentifyItem top={2} bottom={5000}/>
                  <ProgressIdentifyItem top={3} bottom={9000}/>
                  <ProgressIdentifyItem top={4} bottom={15000}/>
                  <ProgressIdentifyItem top={5} bottom={20000}/>
                  <ProgressIdentifyItem top={6} bottom={30000}/>
                </ProgressIdentify>
              </div>
            </div>
          </div>
          <div className='bottom mt-4'>
            <h6 className='text-white'>团队总认购数</h6>
          </div>
        </SubscriptionWrap>
      </div>
    </TeamRuleWrap>
  )
}
