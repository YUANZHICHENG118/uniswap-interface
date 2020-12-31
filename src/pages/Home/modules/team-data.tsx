import React from 'react'
//components
import TeamDataItem from './TeamDataItem'
import { ButtonWhite } from '../../../components/Button'
//style
import { TeamDataWrap } from '../styles'

export default function TeamData() {
  return (
    <TeamDataWrap className="bgwrap team-item">
      <header className="text-center text-white">我的团队数据</header>
      <div className="row no-gutters">
        <div className="col-lg-4 col-xs-6">
          <TeamDataItem className="item1" >
            <dl>
              <dt>组员地址</dt>
              <dd>jlljoo3n4o1on*****2949IODj2399</dd>
            </dl>
          </TeamDataItem>
        </div>
        <div className="col-lg-4 col-xs-6">
          <TeamDataItem className="item2" >
            <dl>
              <dt>组员地址</dt>
              <dd>jlljoo3n4o1on*****2949IODj2399</dd>
            </dl>
          </TeamDataItem>
        </div>
        <div className="col-lg-4 col-xs-6">
          <TeamDataItem className="item3">
            <ButtonWhite className="item-button" style={{ width: '60%', margin: 'auto' }}>
              激活组员
            </ButtonWhite>
          </TeamDataItem>
        </div>
      </div>
    </TeamDataWrap>
  )
}
