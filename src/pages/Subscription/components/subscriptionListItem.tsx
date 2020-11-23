import React from 'react'
import styled from 'styled-components'

import arrow from '../../../assets/images/subscription/arrow.png'
export const SubscriptionItemWrapper = styled.div`
   margin-top:60px;
 .header{
    font-size: 36px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #FFFFFF;
    text-align:center;
  img{
    margin-right:20px;
  }
 }
 .border-wrap{
    margin-top:48px;
    border-radius: 16px;
    border: 2px solid #333333;
 }
 
`

export default function SubscriptionListItem({title, children }: {title:string, children: React.ReactNode }) {
  return <SubscriptionItemWrapper>
    <div className="header">
      <img src={arrow} width={20} alt=""/>
      {title}
    </div>
    <div className="border-wrap">
     {children}
    </div>
  </SubscriptionItemWrapper>
}
