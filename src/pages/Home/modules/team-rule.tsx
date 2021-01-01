import React from 'react'
//style
import {TeamRuleWrap} from '../styles'

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
        <div className='profit'>

        </div>
      </div>
      team rules
    </TeamRuleWrap>
  )
}
