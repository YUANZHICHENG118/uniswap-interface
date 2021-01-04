/**
 *@desc
 */
import React from 'react'
//
import styled from 'styled-components'

const Wrapper = styled.div`
  .title {
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333647;
    line-height: 25px;
    opacity: 70%;
  }
`
const ItemWrap = styled.div`
  margin: 2rem 0;
  div {
    :last-child {
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #393b7b;
      line-height: 20px;
    }
    .smallImg {
      margin: 0 -1rem;
    }
  }
`

const Item = ({ children }: { children: React.ReactNode }) => (
  <ItemWrap className="flex-between align-items-center">{children}</ItemWrap>
)
const DescContent = function({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper className="w-100 mt-4">
      <div className="flex-between title">
        <span>设备等级</span>
        <span>挖矿分润收益率</span>
      </div>
      <div className="desc-list">{children}</div>
    </Wrapper>
  )
}
DescContent.item = Item
export default DescContent
