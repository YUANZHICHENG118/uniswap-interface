import React from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal'

export const Wrapper=styled.div`
padding:30px 4%;
display:flex;
flex-direction:column;
width:100%;
.text-center{
text-align:center;
}
.title{
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  margin-bottom:22px;
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
    padding:27px 4% 23px;
    margin-bottom:30px;
  }
  .down-arrow{
   margin-bottom:30px;
   font-size:30px;
  }

`
interface SubscriptionModalProps {
  isOpen: boolean
  onDismiss: () => void
}
export default function AppBody({ isOpen,onDismiss }: SubscriptionModalProps) {
  return <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={90}>
    <Wrapper>
     <div className="title text-center">认购</div>
      <div className="bg-item">
        <div>从</div>
        <div>
          <span className="left"></span>
        </div>
      </div>
      <div className="down-arrow text-center">↓</div>
      <div className="bg-item">
        <div>至</div>
        <div>
          <span className="left"></span>
        </div>
      </div>
      <div className="btnbox">
        <button className='btn btn-default'>兑换</button>
      </div>
    </Wrapper>
  </Modal>
}
