import React from 'react'
//style
import {TeamDataWrap} from '../styles'
import {TeamDataItemWrap} from '../styles'

export default function TeamData(){
  return (
    <TeamDataWrap className='bgwrap team-item'>
      team data
      <div className="row">
        <div className='col-4'>
          <TeamDataItemWrap className='item1'>
            <div className='title'>认购金额</div>
            <div className='middle'>
              <b>130</b>
              <span>USDT</span>
            </div>
          </TeamDataItemWrap>
        </div>
        <div className='col-4'>
          <TeamDataItemWrap className='item2'>2</TeamDataItemWrap>
        </div>
        <div className='col-4'>
          <TeamDataItemWrap className='item3'>3</TeamDataItemWrap>
        </div>
      </div>
    </TeamDataWrap>
  )
}
