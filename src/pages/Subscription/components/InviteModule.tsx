/**
 * @desc 推荐奖励
 *
 */

import React, { useState } from 'react'
import TransactionConfirmationModal from '../../../components/TransactionConfirmationModal'
import { TransactionResponse } from '@ethersproject/providers'
import BigNumber from 'bignumber.js'

import { PartnerWrap, GatherWrap, SummaryWrap,InviteWrap } from '../styled'
import SubscriptionListItem from './subscriptionListItem'
import CopyBtn from './copyBtn'
import checkIcon from '../../../assets/images/subscription/check.png'
//佣金明细弹窗
import CommissionModal from './commissionModal'
import WhiteArrowTitle from './WhiteArrowTitle'
import { HOST, SUB_ADDRESS,ethToken } from '../../../constants'
import { useActiveWeb3React } from '../../../hooks'
import { useSingleCallResult } from '../../../state/multicall/hooks'
import { useSubContract } from '../../../hooks/useContract'
import { calculateGasMargin } from '../../../utils'

export default function InviteModule (props: { periods: number ,fee:any}) {
  const {
    periods,
    fee
  } = props


  const [showCommissionnModal, setCommissionModal] = useState<boolean>(false)
  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [txId, setTxId] = useState<string>("")

  const { account } = useActiveWeb3React()
  const contract = useSubContract(SUB_ADDRESS, true)
  const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,account ?? undefined])


  // 认购
  const nodeReg = async () => {
    if (!account) {
      alert('connect to wallet')
      return
    }
    if (contract) {
      let value = new BigNumber((fee/ethToken.decimals)* Math.pow(10, 18))
      let _amount ='0x' + value.toString(16)
      setTxLoading(true)

      const estimatedGas = await contract.estimateGas.applyForPartner
      await estimatedGas([periods], { value: _amount })
        .then(estimatedGasLimit =>
          contract.applyForPartner([periods], {
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


  // 提取
  const draw= async ()=>{
    if(!account){
      alert("connect to wallet")
      return ;
    }

    if (contract) {

      //let value=new BigNumber(stakeAmount*Math.pow(10,token &&token.decimals||18))
      //let _amount=userData.result?.stats[8]||0;

      setTxLoading(true)

      const estimatedGas = await contract.estimateGas.withdrawAward(periods).catch((e) => {
        alert(e.message)
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.withdrawAward(periods)
      })

      return contract.withdrawAward(periods, {
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
  return <SubscriptionListItem title='推荐奖励'>
    <InviteWrap className='border-wrap'>
      <WhiteArrowTitle title='推荐邀请人' />
      <div className='invite-tip'>
        <div className='invite-tip-opt'><img src={checkIcon}/> 直接推荐收益 <span className='themeColor'><b>20</b>%</span></div>
        <div><img src={checkIcon}/> 间接收益<span className='themeColor'><b>15</b>%</span></div>
      </div>
      <div className='invite-address flex-between'>
        <input type="text" value={`${HOST}/#/Home?ref=${account || ''}`}/>
        <CopyBtn copyData={`${HOST}/#/Home?ref=${account || ''}`} title='复制'/>
      </div>
    </InviteWrap>
    <PartnerWrap className='border-wrap'>
      <div className="partner-item col-lg-6">
        <WhiteArrowTitle title='推荐统计'/>
        <GatherWrap className='gather-box'>
          <div className="value"><span>{(userData.result?.stats[6]/ethToken.decimals)+(userData.result?.stats[7]/ethToken.decimals)}</span> <span className='unit'>ETH</span></div>
          <div className="label">累计收益</div>
        </GatherWrap>
        <SummaryWrap className="Summary flex-between">
          <div className="summary-item flex-column">
            <span className='summary-item-value'>{userData.result?.stats[3].toString()}</span>
            <span className="summary-item-label">直接推荐</span>
          </div>
          <div className="summary-item flex-column">
            <span className='summary-item-value'>{userData.result?.stats[4].toString()}</span>
            <span className="summary-item-label">间接推荐</span>
          </div>
          {/*<div className="summary-item flex-column">*/}
            {/*<span className='summary-item-value'>16529</span>*/}
            {/*<span className="summary-item-label">团队总人数</span>*/}
          {/*</div>*/}
        </SummaryWrap>
      </div>
      <div className="partner-item col-lg-6">
        <WhiteArrowTitle title='我的佣金'>
          <span className='tag btn-default btn' onClick={nodeReg}>升级为超级节点</span>
        </WhiteArrowTitle>
        <div className='content'>
          <div className="profit">
            <div className='head'>可提佣金</div>
            <div className='flex-between profit-detail'>
              <span><b className="value themeColor">{(userData.result?.stats[8]/ethToken.decimals)}</b> ETH</span>
              <a href='javascript:;' onClick={()=>{setCommissionModal(true)}}>佣金明细 &gt;</a>
            </div>
          </div>
          <div className='tip'>
            <span className="themeColor">PZS</span>
            <span>可提取推荐奖励</span>
          </div>
        </div>
        <button className='btn btn-default' style={{ width: '100%' }} onClick={draw}>提取</button>
      </div>
    </PartnerWrap>
    {/*佣金明细*/}
    <CommissionModal
      isOpen={showCommissionnModal}
      onDismiss={()=>{setCommissionModal(false)}}
    />

    <TransactionConfirmationModal
      isOpen={txConfirm}
      onDismiss={()=>setTxConfirm(false)}
      attemptingTxn={txLoading}
      hash={txId}
      content={()=><></>}
      pendingText={"Loading"}
    />
  </SubscriptionListItem>
}
