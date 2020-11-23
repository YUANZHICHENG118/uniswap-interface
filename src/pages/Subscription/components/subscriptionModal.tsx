import React from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal'
import pizzaImg from '../../../assets/images/lp/pz.png'
export const Wrapper=styled.div`
padding:30px 4%;
display:flex;
flex-direction:column;
width:100%;
.summarize{
  margin-bottom:30px;
  font-size: 28px;
  font-weight:500;
}
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
.bg-item,.absenteeism{
 background: rgba(0, 0, 0, 0.6);
 border-radius: 16px;
 border: 1px solid #666666;
}
  .bg-item{
    padding:27px 4% 23px;
    margin-bottom:30px;
    .bg-item-bottom{
      margin-top:18px;
      align-items:flex-end;
      .tag{
        width: 69px;
        display:inline-block;
        height: 43px;
        line-height:43px;
        margin-right:20px;
        background: #FFB800;
        border-radius: 10px;
        opacity: 0.7;
        font-size: 21px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
      }
      .left{
        font-size: 42px;
        font-weight: 600;
      }
    }
  }
  .down-arrow{
   margin-bottom:30px;
   font-size:30px;
  }

`
export const AbsenteeismWrap=styled.div`
 .absenteeism-fee{
  font-size: 24px;
    span{
      &:first-child{
        color:rgba(255,255,255,.6);
      }
      &:last-child{
        color:#fff;
      }
    }
  }
.absenteeisms{
  margin-top:22px;
  margin-bottom:30px;
  .absenteeism{
    width:47%;
    padding:13px 3% 15px;
    box-sizing:border-box;
     font-weight: 500;
    .value{
      font-size: 21px;
      color:#fff;
    }
    .unit{
      color:rgba(255,255,255,.6);
      font-size: 18px;
    }
  }
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
        <div  className='bg-item-bottom flex-between'>
          <span className="left themeColor">1</span>
          <div className="right">
            <span className="tag text-center">MAX</span>
            <span>ETH</span>
          </div>
        </div>
      </div>
      <div className="down-arrow text-center">↓</div>
      <div className="bg-item">
        <div>至</div>
        <div className='bg-item-bottom flex-between '>
          <span className="left themeColor">1000</span>
          <div className="right">
            <img src={pizzaImg} width={20} alt=""/>
            <span>&nbsp;PZS</span>
          </div>
        </div>
      </div>
      <AbsenteeismWrap>
        <div className="flex-between absenteeism-fee">
          <span>旷工费</span>
          <span>0.011 ETH</span>
        </div>
        <div className="flex-between absenteeisms">
          <div className="absenteeism flex-between">
            <span className='value'>1546</span><span  className='unit'>gwei</span>
          </div>
          <div className="absenteeism flex-between">
            <span  className='value'>1546</span><span  className='unit'>gas</span>
          </div>
        </div>
      </AbsenteeismWrap>
      <div className="summarize flex-between themeColor">
        <div className='coin-name'><span>ETH/PZS</span></div>
        <div className='coin-percent'>1:1000</div>
      </div>
      <div className="btnbox">
        <button className='btn btn-default' style={{width:'100%',borderRadius:'39px'}}>兑换</button>
      </div>
    </Wrapper>
  </Modal>
}
