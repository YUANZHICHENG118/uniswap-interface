// 白色箭头的标题
import React from 'react'
import styled from 'styled-components'
import ArrowWhite from '../../../assets/images/subscription/arrow-white.png'

export const Wrap = styled.div`
  font-size: 32px;
  font-family: PingFang-SC-Heavy, PingFang-SC;
  font-weight: 800;
  color: #ffffff;
  .tag{
    width: 139px;
    height: 33px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin-left:3%;
  }
  img {
    margin-right: 15px;
    width: 25px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     font-size: 22px;
      img{
        width:20px;
      }
  `};
`
export default function InviteModule({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <Wrap>
      <img src={ArrowWhite} alt="" /> {title}
      {children}
    </Wrap>
  )
}
