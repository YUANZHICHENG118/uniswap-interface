/**
 *@desc  提取失败
 *@date 2021/1/2 6:33 PM
 */
import React from 'react'
//images
import failImg from '../../../assets/images/mario/fail.png'
import styled from 'styled-components'
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
export default function Fail(){
  return (
    <Wrap className="text-center">
      <img src={failImg} alt="" />
      <div className="title mt-3">提取失败</div>
      <div className="mt-3 tip">
        每24小时可提款1次，您已达到提款上限
      </div>
      <button className="w-75 btn btn-default mt-5">确认</button>
    </Wrap>
  )
}
