//加入我们的弹窗
import React, { useState } from 'react'

import Modal from '../../../components/Modal'
import WhiteArrowTitle from './WhiteArrowTitle'
import { JoinUsWrapper } from '../styled'
import checkIcon from '../../../assets/images/subscription/check.png'
import { useSubContract } from '../../../hooks/useContract'
import { SUB_ADDRESS } from '../../../constants'
import { useActiveWeb3React } from '../../../hooks'
import TransactionConfirmationModal from '../../../components/TransactionConfirmationModal'
import { TransactionResponse } from '@ethersproject/providers'
import { calculateGasMargin } from '../../../utils'
import { useSingleCallResult } from '../../../state/multicall/hooks'
import { useTranslation } from 'react-i18next'

interface JoinUsModalProps {
  isOpen: boolean
  onDismiss: () => void
  periods:number
}
export default  function JoinUsModal({ isOpen, onDismiss,periods }: JoinUsModalProps){
  const {t}=useTranslation();

  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [txId, setTxId] = useState<string>("")

  const { account } = useActiveWeb3React()
  const contract = useSubContract(SUB_ADDRESS, true)

  const ref=sessionStorage.getItem("ref");
  const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,ref ?? undefined])


  // 升级为超级节点
  const reg= async ()=>{
    if(!account){
      alert("connect to wallet")
      return ;
    }

    if (contract) {

      // if(userData.result?.stats[9]===0){
      //   alert("refuser not register")
      //   return ;
      // }


      let refid=userData.result?.stats[0]||1;
      setTxLoading(true)

      const estimatedGas = await contract.estimateGas.regist(refid).catch((e) => {
        alert(e.message)
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.regist(refid)
      })

      return contract.regist(refid, {
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

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={90} width={'600px'}>
      <JoinUsWrapper>
        <WhiteArrowTitle title={t("joinus")}/>
        <div className='acquisition'>
          <img src={checkIcon} className='checkIcon' alt=""/>
          <span>{t("start-getting")}</span>
          <div className='coinInfo'>
            <span className='themeColor'>PZS</span>
          </div>
        </div>
        <div className="write-box flex-between">
          <input type="text" placeholder={t("write-code")} disabled={true} value={userData.result?.stats[0]||''}/>
          <button className='btn btn-default' onClick={reg} disabled={userData.result?.stats[0]?false:true}>{t("register")}</button>
        </div>
      </JoinUsWrapper>
      <TransactionConfirmationModal
        isOpen={txConfirm}
        onDismiss={()=>setTxConfirm(false)}
        attemptingTxn={txLoading}
        hash={txId}
        content={()=><></>}
        pendingText={"Loading"}
      />
    </Modal>
  )
}
