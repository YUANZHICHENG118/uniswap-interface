import React from 'react'
import styled from 'styled-components'

import arrow from '../../../assets/images/subscription/arrow.png'
export const SubscriptionItemWrapper = styled.div`
   margin-top:60px;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      margin-top:40px;
  `};
 .header{
    font-size: 36px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: #FFFFFF;
    text-align:center;
     ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     font-size: 26px;
    `};
    img{
      margin-right:20px;
    }
 }
 .border-wrap{
    margin-top:48px;
    border-radius: 16px;
    border: 2px solid #333333;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      margin-top:30px;
    `};
 }

`

export default function SubscriptionListItem({title, children }: {title:string, children: React.ReactNode }) {
  return <SubscriptionItemWrapper>
    <div className="header">
      <img src={arrow} width={20} alt=""/>
      {title}
    </div>
     {children}
  </SubscriptionItemWrapper>
}
