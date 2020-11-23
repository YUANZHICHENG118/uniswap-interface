import React from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal'

export const Wrapper=styled.div`
padding:30px 4%;
.title{
font-size: 28px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #FFFFFF;
}
.btn-default{
    width: 100%;
    height: 47px;
    background: linear-gradient(270deg, #E6A600 0%, #FFB800 100%);
    border-radius: 39px;
    font-size:18px;
    color: #333333;
    font-weight: 600;
    display:inline-flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
  }
  .bg-item{
    background: rgba(0, 0, 0, 0.6);
    border-radius: 16px;
    border: 1px solid #666666;
  }

`
interface SubscriptionModalProps {
  isOpen: boolean
  onDismiss: () => void
}
export default function AppBody({ isOpen,onDismiss }: SubscriptionModalProps) {
  return <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={90}>
    <Wrapper>
     <div className="title">认购</div>
      <div className="bg-item"></div>
      <div className="down-arrow"></div>
      <div className="bg-item"></div>
      <div className="btnbox">
        <button className='btn btn-default'>兑换</button>
      </div>
    </Wrapper>
  </Modal>
}
