// 我的资产
import React from 'react'

import SubscriptionListItem from './subscriptionListItem'
import { AccountWrap} from '../styled'
import { useSingleCallResult } from '../../../state/multicall/hooks'
import { useSubContract } from '../../../hooks/useContract'
import { SUB_ADDRESS } from '../../../constants'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { useActiveWeb3React } from '../../../hooks'
import { useTranslation } from 'react-i18next'

export default function AssetsModule (props: { periods: number,globalData:any }) {
  const {
    periods,
    globalData
  } = props

  const { account } = useActiveWeb3React()
  const {  active }=useWeb3ReactCore()
  const contract = useSubContract(SUB_ADDRESS, true)

  const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,account ?? undefined])
  const {t}=useTranslation();

  return(
    <SubscriptionListItem title={t("subscription-assest")}>
      <AccountWrap className='border-wrap'>
        <div className="left">
          <div>{t("subscription-owed")}</div>
          <div><span className="number">{((userData.result?.stats[5]||0)/1000000000000000000)*(globalData.result?.stats[3]||0)}</span> <span className='unit'>PZS</span></div>

        </div>
        <div className='divider'/>
        <div className="right">
          <div>{t("subscription-wallet-address")}</div>
          <div className='address'>{account?.substr(0,15)}*********{account?.substr(30,account.length)}</div>
          {active?'':<button className="btn btn-default" >{t("subscription-wallet-link")}</button>}
        </div>
      </AccountWrap>
    </SubscriptionListItem>
  )
}
