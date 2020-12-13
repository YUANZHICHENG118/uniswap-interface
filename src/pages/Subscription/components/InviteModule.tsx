/**
 * @desc 推荐奖励
 *
 */

import React, { useEffect, useState } from 'react'
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
import { useETHBalances } from '../../../state/wallet/hooks'
import { useTranslation } from 'react-i18next'

export default function InviteModule (props: { periods: number ,fee:any }) {
  const {
    periods,
    fee
  } = props

  const {t}=useTranslation();

  const [showCommissionnModal, setCommissionModal] = useState<boolean>(false)
  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [txId, setTxId] = useState<string>("")

  const [num, setNum] = useState<number>(0)


  const { account } = useActiveWeb3React()
  const contract = useSubContract(SUB_ADDRESS, true)
  const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,account ?? undefined])

  const userData1 = useSingleCallResult(contract, 'getPersonalStats',[(periods||1)-1,account ?? undefined])

  const userData2 = useSingleCallResult(contract, 'getPersonalStats',[(periods||1)+1,account ?? undefined])

  const userData3 = useSingleCallResult(contract, 'getPersonalStats',[num,account ?? undefined])

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']


  useEffect(()=>{
    setNum(periods)
  },[periods])
  // 认购
  const nodeReg = async () => {
    if (!account) {
      alert('connect to wallet')
      return
    }

    if(userEthBalance?.lessThan((fee/ethToken.decimals).toString())){
      alert('余额不足')
      return
    }
    if (contract) {
      let value = new BigNumber((fee/ethToken.decimals)* Math.pow(10, 18))
      let _amount ='0x' + value.toString(16)
      setTxLoading(true)

      const estimatedGas = await contract.estimateGas.applyForPartner
      await estimatedGas([periods], { value: _amount })
        .then(estimatedGasLimit =>{
          debugger
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
            })})

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

      const estimatedGas = await contract.estimateGas.withdrawAward(num).catch((e) => {
        alert(e.message)
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.withdrawAward(num)
      })

      return contract.withdrawAward(num, {
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

  return <SubscriptionListItem title={t("subscription-recommendation")}>
    <InviteWrap className='border-wrap'>
      <WhiteArrowTitle title={t("subscription-recommendation-invite")} />
      <div className='invite-tip'>
        <div className='invite-tip-opt'><img src={checkIcon}/>{t("subscription-direct-invite")} <span className='themeColor'><b>20</b>%</span></div>
        <div><img src={checkIcon}/>{t("subscription-indirect-invite")} <span className='themeColor'><b>15</b>%</span></div>
      </div>
      <div className='invite-address flex-between'>
        <input type="text" value={`${HOST}/#/subscription?ref=${account || ''}`}/>
        <CopyBtn copyData={`${HOST}/#/subscription?ref=${account || ''}`} title='Copy'/>
      </div>
    </InviteWrap>
    <PartnerWrap className='border-wrap'>
      <div className="partner-item col-lg-6">
        <WhiteArrowTitle title={t("subscription-invite-total")} />
        <GatherWrap className='gather-box'>
          <div className="value"><span>{((((userData.result?.stats[6]||0)/ethToken.decimals)+((userData.result?.stats[7]||0)/ethToken.decimals))+(((userData1.result?.stats[6]||0)/ethToken.decimals)+((userData1.result?.stats[7]||0)/ethToken.decimals))+(((userData2.result?.stats[6]||0)/ethToken.decimals)+((userData2.result?.stats[7]||0)/ethToken.decimals))).toFixed(2)}</span> <span className='unit'>ETH</span></div>
          <div className="label">{t("subscription-invite-allprofits")}</div>
        </GatherWrap>

        <GatherWrap className='gather-box'>
          <div className="value"><span>{userData.result?.stats[2].toString()}</span> <span className='unit'>人</span></div>
          <div className="label"> {t("subscription-team-total")} </div>
        </GatherWrap>


        <SummaryWrap className="Summary flex-between">
          <div className="summary-item flex-column">
            <span className='summary-item-value'>{userData.result?.stats[3].toString()||0}人</span>
            <span className="summary-item-label">{t("direct-recommendation")}</span>
          </div>
          <div className="summary-item flex-column">
            <span className='summary-item-value'>{userData.result?.stats[4].toString()||0}人</span>
            <span className="summary-item-label">{t("indirect-recommendation")}</span>
          </div>
          {/*<div className="summary-item flex-column">*/}
            {/*<span className='summary-item-value'>16529</span>*/}
            {/*<span className="summary-item-label">团队总人数</span>*/}
          {/*</div>*/}
        </SummaryWrap>
      </div>
      <div className="partner-item col-lg-6">
        <WhiteArrowTitle title={t("my-Commission")}>

          {
            userData.result?.stats[1].toNumber()===1?<span className='tag btn-default btn' >{t("upgrade1")}</span>:<span className='tag btn-default btn' onClick={nodeReg}>{t("upgrade")}</span>

          }



        </WhiteArrowTitle>
        <div className='content'>
          <div className="profit">
            <div className='head'>{t("commission-payable")}<a href={"javascript:void(0)"} className={num===0?"active":''} onClick={()=>setNum(0)}>1</a><a href={"javascript:void(0)"} onClick={()=>setNum(1)} className={num===1?"active":''}>2</a><a href={"javascript:void(0)"} className={num===2?"active":''} onClick={()=>setNum(2)}>3</a></div>

            <div className='flex-between profit-detail'>
              <span><b className="value themeColor">{((userData3.result?.stats[8]||0)/ethToken.decimals)}</b> ETH</span>
              <a href='javascript:;' onClick={()=>{setCommissionModal(true)}}>{t("detailed-commission")} &gt;</a>
            </div>
          </div>
          <div className='tip'>
            <span className="themeColor">ETH</span>
            <span>{t("extractable-rewards")}</span>
          </div>
        </div>
        <button className='btn btn-default' style={{ width: '100%' }} onClick={draw}>{t("extract")}</button>
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
