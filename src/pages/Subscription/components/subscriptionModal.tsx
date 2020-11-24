import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal'
import pizzaImg from '../../../assets/images/lp/pz.png'
import TransactionConfirmationModal from '../../../components/TransactionConfirmationModal'
import { TransactionResponse } from '@ethersproject/providers'
import { useSubContract } from '../../../hooks/useContract'
import { SUB_ADDRESS } from '../../../constants'
import { useActiveWeb3React } from '../../../hooks'
import { calculateGasMargin } from '../../../utils'

export const Wrapper=styled.div`
padding:30px 4%;
display:flex;
flex-direction:column;
width:100%;
overflow:auto;
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
// export const AbsenteeismWrap=styled.div`
//  .absenteeism-fee{
//   font-size: 24px;
//     span{
//       &:first-child{
//         color:rgba(255,255,255,.6);
//       }
//       &:last-child{
//         color:#fff;
//       }
//     }
//   }
// .absenteeisms{
//   margin-top:22px;
//   margin-bottom:30px;
//   .absenteeism{
//     width:47%;
//     padding:13px 3% 15px;
//     box-sizing:border-box;
//      font-weight: 500;
//     .value{
//       font-size: 21px;
//       color:#fff;
//     }
//     .unit{
//       color:rgba(255,255,255,.6);
//       font-size: 18px;
//     }
//   }
// }
//
// `

interface SubscriptionModalProps {
  isOpen: boolean
  onDismiss: () => void,
  periods:number
}
export default function SubscriptionModal({ isOpen,onDismiss,periods }: SubscriptionModalProps) {

  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [txId, setTxId] = useState<string>("")

  const { account } = useActiveWeb3React()
  const contract = useSubContract(SUB_ADDRESS, true)


  // 认购
  const deposit= async ()=>{
    if(!account){
      alert("connect to wallet")
      return ;
    }

    if (contract) {

      setTxLoading(true)

      const estimatedGas = await contract.estimateGas.subscribe(periods).catch((e) => {
        alert(e.message)
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.subscribe(periods)
      })

      return contract.subscribe(periods, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)

          setTxConfirm(true)
          setTxId(response.hash)
          console.log('response====', response)
        })
        .catch((error: Error) => {
          console.debug('Failed to reg token', error)
          throw error
        })

    }
  }

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
      {/*<AbsenteeismWrap>*/}
        {/*<div className="flex-between absenteeism-fee">*/}
          {/*<span>旷工费</span>*/}
          {/*<span>0.011 ETH</span>*/}
        {/*</div>*/}
        {/*<div className="flex-between absenteeisms">*/}
          {/*<div className="absenteeism flex-between">*/}
            {/*<span className='value'>1546</span><span  className='unit'>gwei</span>*/}
          {/*</div>*/}
          {/*<div className="absenteeism flex-between">*/}
            {/*<span  className='value'>1546</span><span  className='unit'>gas</span>*/}
          {/*</div>*/}
        {/*</div>*/}
      {/*</AbsenteeismWrap>*/}
      <div className="summarize flex-between themeColor">
        <div className='coin-name'><span>ETH/PZS</span></div>
        <div className='coin-percent'>1:500</div>
      </div>
      <div className="btnbox">
        <button className='btn btn-default' style={{width:'100%',borderRadius:'39px'}} onClick={deposit}>兑换</button>
      </div>



      <TransactionConfirmationModal
        isOpen={txConfirm}
        onDismiss={()=>setTxConfirm(false)}
        attemptingTxn={txLoading}
        hash={txId}
        content={()=><></>}
        pendingText={"Loading"}
      />
    </Wrapper>
  </Modal>
}
