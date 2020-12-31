import React from 'react'
//style
import {TeamRewardWrap} from './styles'
//components
import Title1 from './modules/title1'
import TeamData from './modules/team-data'
import TeamRule from './modules/team-rule'
export default function TeamReward(){
  return (
    <TeamRewardWrap>
      <Title1 imgType='2' title='团队奖励' subTitle='激活您的组员，可获得团队收益奖励'/>
      <div className='flex-column'>
        <TeamData/>
        <TeamRule/>
      </div>
    </TeamRewardWrap>
  )
}
