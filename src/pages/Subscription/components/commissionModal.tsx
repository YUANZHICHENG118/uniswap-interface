//佣金明细的弹窗
import React, { useEffect, useState } from 'react'

import Modal from '../../../components/Modal'
import WhiteArrowTitle from './WhiteArrowTitle'
import { CommissionWrapper } from '../styled'
import { ethApi, ethToken, SUB_ADDRESS } from '../../../constants'
// import { useSingleCallResult } from '../../../state/multicall/hooks'
// import { useSubContract } from '../../../hooks/useContract'
// import { SUB_ADDRESS } from '../../../constants'
// import { useActiveWeb3React } from '../../../hooks'
import { useTranslation } from 'react-i18next'

import moment from 'moment';
import web3Utils from 'web3-utils'
import { useActiveWeb3React } from '../../../hooks'
interface CommissionModalProps {
  isOpen: boolean
  onDismiss: () => void
}

export default function CommissionModal({ isOpen, onDismiss }: CommissionModalProps) {
  const {t}=useTranslation();

  const [txList, setTxList] = useState<any[]>()

  const { account } = useActiveWeb3React()

  // const { account } = useActiveWeb3React()
  // const contract = useSubContract(SUB_ADDRESS, true)
  // const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,account ?? undefined])
  //
  const desAmountData=(data:any)=>{
    let d=data.replace("0x","");
    return  parseFloat(web3Utils.hexToNumberString("0x"+d.substr(0,64)))/ethToken.decimals
  }

  const desTypeData=(data:any)=>{
    let d=data.replace("0x","");
    let type=parseInt(web3Utils.hexToNumberString("0x"+d.substr(64,d.length)))
    return  type===1?"直接推荐":type===2?"间接推荐":type===3?"超级节点":''
  }

    useEffect(()=>{

      fetch(ethApi+"?module=logs&action=getLogs&fromBlock=9132499&address="+SUB_ADDRESS+"&topic0=0xdf90071417a9d3d5fb24d3c23acbf2f1506b1eff54b1f5d85c067928923fcf6c&topic2="+account?.replace("0x","0x000000000000000000000000")+"&apikey=D15U6EVP8CX89EFZ7FW9GC51AUT2IWYD11").then((response) => {
        return response.json()
      }).then(data=>{
        console.log("data====",data)
        if(data&&data.result){
          setTxList(data.result||[])
        }
      })

    },[])
  return (
    <Modal isOpen={isOpen} showCloseIcon={true} onDismiss={onDismiss} minHeight={false} maxHeight={90} width={'700px'}>
      <CommissionWrapper>
        <WhiteArrowTitle title={t("detailed-commission")} className='arrowTitle'/>
        <div className="commission-table">
          <table>
            <thead>
              <tr>
                <th className="themeColor profit">{t("commission-revenues")}</th>
                <th className="themeColor address">{t("converter-address")}</th>
                <th className="themeColor type">{t("recommendType")}</th>
                <th className="themeColor time">{t("time")}</th>
              </tr>
            </thead>
            <tbody>

            {
              txList&&txList.map(item=>{
                return <tr>
                  <td className="profit">
                    <span className="themeColor">+{desAmountData(item.data)}</span>
                    <span className="greyColor"> ETH</span>
                  </td>
                  <td>{item.topics[1].replace("0x000000000000000000000000","0x").substring(0,10)}******{item.topics[1].substring(50,item.topics[1].length)}</td>
                  <td>{desTypeData(item.data)}</td>
                  <td>{`${moment(item.timeStamp*1000).format("yyyy-MM-DD HH:mm:ss")}`}</td>
                </tr>
              })
            }

            </tbody>
          </table>
        </div>
      </CommissionWrapper>
    </Modal>
  )
}
