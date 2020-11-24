// 我的资产
import React from 'react'

import SubscriptionListItem from './subscriptionListItem'
import { AccountWrap} from '../styled'
import { useSingleCallResult } from '../../../state/multicall/hooks'
import { useSubContract } from '../../../hooks/useContract'
import { SUB_ADDRESS } from '../../../constants'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { useActiveWeb3React } from '../../../hooks'

export default function AssetsModule (props: { periods: number,globalData:any }) {
  const {
    periods,
    globalData
  } = props

  const { account } = useActiveWeb3React()
  const {  active }=useWeb3ReactCore()
  const contract = useSubContract(SUB_ADDRESS, true)

  const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,account ?? undefined])

  return(
    <SubscriptionListItem title='我的资产'>
      <AccountWrap className='border-wrap'>
        <div className="left">
          <div>您已拥有</div>
          <div><span className="number">{(userData.result?.stats[5]/1000000000000000000)*(globalData.result?.stats[3])}</span> <span className='unit'>PZS</span></div>

        </div>
        <div className='divider'/>
        <div className="right">
          <div>钱包地址</div>
          <div className='address'>{account?.substr(0,15)}*********{account?.substr(30,account.length)}</div>
          {active?'':<button className="btn btn-default" >连接钱包</button>}
        </div>
      </AccountWrap>
    </SubscriptionListItem>
  )
}
