/**
 *@desc 提取成功
 *@date 2021/1/2 6:33 PM
 */
import React from 'react'
import styled from 'styled-components'
//images
import successImg from '../../../assets/images/mario/success.png'
const Wrap = styled.div`
  .title {
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333647;
    line-height: 33px;
  }
  .tip {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333647;
    line-height: 20px;
    opacity:56%;
  }
`
export default function Success() {
  return (
    <Wrap className="text-center">
      <img src={successImg} alt="" />
      <div className="title mt-3">购买成功</div>
      <div className="mt-3 tip">
        如设备达到使用期限，您可以点击 <span className="themeColor">升级设备</span> 复投重新激活
      </div>
      <button className="w-75 btn btn-default mt-5">确认</button>
    </Wrap>
  )
}
