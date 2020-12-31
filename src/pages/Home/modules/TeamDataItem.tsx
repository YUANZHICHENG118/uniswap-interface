import React from 'react'
//style
import {TeamDataItemWrap} from '../styles'

export default function TeamData({className,children}:{className?:string,children?: React.ReactNode}) {
  return (
    <TeamDataItemWrap className={className}>
      <div className='title'>认购金额</div>
      <div className='middle'>
        <b>130</b>
        <span>USDT</span>
      </div>
      {children}
    </TeamDataItemWrap>
  )
}
