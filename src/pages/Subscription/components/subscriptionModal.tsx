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
import BigNumber from 'bignumber.js'
import { useETHBalances } from '../../../state/wallet/hooks'

export const Wrapper = styled.div`
  padding: 30px 4%;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  .content{
     flex:1;
     overflow:auto;
  }
  .summarize {
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 500;
  }
  .text-center {
    text-align: center;
  }
  .title {
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 22px;
  }
  .bg-item,
  .absenteeism {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 16px;
    border: 1px solid #666666;
  }
  .bg-item {
    padding: 27px 4% 23px;
    margin-bottom: 30px;
    .bg-item-bottom {
      margin-top: 18px;
      align-items: flex-end;
      .tag {
        width: 69px;
        display: inline-block;
        height: 43px;
        line-height: 43px;
        margin-right: 20px;
        background: #ffb800;
        border-radius: 10px;
        opacity: 0.7;
        font-size: 21px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
      }
      .left {
        font-size: 42px;
        font-weight: 600;
        flex: 1;
        input {
          background: none;
          border: 0;
          outline: 0;
          width: 100%;
        }
      }
    }
  }
  .down-arrow {
    margin-bottom: 30px;
    font-size: 30px;
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
  onDismiss: () => void
  periods: number
}

export default function SubscriptionModal({ isOpen, onDismiss, periods }: SubscriptionModalProps) {

  const { account } = useActiveWeb3React()

  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [txId, setTxId] = useState<string>('')
  const [amount, setAmount] = useState<any>(0)
  const [tokenAmount, setTokenAmount] = useState<any>(0)
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']


  const contract = useSubContract(SUB_ADDRESS, true)

  const rate = 500
  const change = (e: any) => {
    setAmount(e.currentTarget.value)
    setTokenAmount(e.currentTarget.value * rate)
  }
  // 认购
  const deposit = async () => {
    if (!account) {
      alert('connect to wallet')
      return
    }
    if (contract) {
      let value = new BigNumber(amount * Math.pow(10, 18))
      let _amount = '0x' + value.toString(16)
      setTxLoading(true)

      debugger
      const estimatedGas = await contract.estimateGas.subscribe


      await estimatedGas([periods], { value: _amount })
        .then(estimatedGasLimit =>
          contract.subscribe([periods], {
            value: _amount,
            gasLimit: calculateGasMargin(estimatedGasLimit)
          }).then((response: TransactionResponse) => {

            setTxLoading(false)

            setTxConfirm(true)
            setTxId(response.hash)
            console.log('response====', response)
          })
            .catch((error: Error) => {
              console.debug('Failed to reg token', error)
              throw error
            }))

    }
  }

  const max = () => {

    setAmount(userEthBalance?.toFixed(4))
    setTokenAmount(1)

  }
  return (
    <Modal isOpen={isOpen} showCloseIcon={true} onDismiss={onDismiss} minHeight={false} maxHeight={90}>
      <Wrapper>
        <div className="title text-center">认购</div>
        <div className="content">
          <div className="bg-item">
            <div>从</div>
            <div className="bg-item-bottom flex-between">
              <span className="left themeColor">
                <input type="number" placeholder="1" value={amount} className="themeColor" onChange={change}/>
              </span>
              <div className="right">
                <span className="tag text-center" onClick={max}>MAX</span>
                <span>ETH</span>
              </div>
            </div>
          </div>
          <div className="down-arrow text-center">↓</div>
          <div className="bg-item">
            <div>至</div>
            <div className="bg-item-bottom flex-between ">
              <span className="left themeColor">
                <input type="text" placeholder={rate.toString()} disabled={true} className="themeColor"
                       value={tokenAmount}/>
              </span>
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
            <div className="coin-name">
              <span>ETH/PZS</span>
            </div>
            <div className="coin-percent">1:{rate}</div>
          </div>
          <div className="btnbox">
            <button className="btn btn-default" style={{ width: '100%', borderRadius: '39px' }} onClick={deposit}>
              兑换
            </button>
          </div>
        </div>

        <TransactionConfirmationModal
          isOpen={txConfirm}
          onDismiss={() => setTxConfirm(false)}
          attemptingTxn={txLoading}
          hash={txId}
          content={() => <></>}
          pendingText={'Loading'}
        />
      </Wrapper>
    </Modal>
  )
}
