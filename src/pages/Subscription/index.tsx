import React, { useCallback, useEffect, useState } from 'react'

import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo.png'
import Wordmark from '../../assets/images/logoTitle.png'
import WordmarkDark from '../../assets/images/logoTitle.png'
import CountDown from './components/CountDown/CountDown'

import SubscriptionModal from './components/subscriptionModal'
import JoinUsModal from './components/joinUsModal'
import { useDarkModeManager } from '../../state/user/hooks'
import InviteModule from './components/InviteModule'
//我的资产
import AssetsModule from './components/AssetsModule'
//超级和伙人
// import PartnerModule from './components/PartnerModule'
import moment from 'moment';

import { BodyWrapper, TradeWrapper, SubscriptionItems, HistoryWrap, CountDownWrap } from './styled'

import { SUB_ADDRESS, pzsToken, ethApi, ethToken } from '../../constants'
import { useSubContract } from '../../hooks/useContract'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { useActiveWeb3React } from '../../hooks'

export default function Subscription() {
  const [showSubscriptionModal, setSubscriptionModal] = useState<boolean>(false)
  const handleSubscriptionDismiss = useCallback(() => {
    setSubscriptionModal(false)
  }, [setSubscriptionModal])
  const [isDark] = useDarkModeManager()
  const [txList, setTxList] = useState<any>([])


  const contract = useSubContract(SUB_ADDRESS, true)
  const periodsData = useSingleCallResult(contract, 'underway')
  const periods = periodsData.result?.[0] || undefined
  const { account } = useActiveWeb3React()

  const globalData = useSingleCallResult(contract, 'getGlobalStats', [periods])
  const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,account ?? undefined])

  const initDate=()=>{
    if(globalData.result){
      return  moment(globalData.result?.stats[5].toNumber()*1000).add(globalData.result?.stats[2].toNumber(), 's').format("yyyy-MM-DD HH:mm:ss")
    }
    return ''
  }
  useEffect(()=>{

    fetch(ethApi+"?module=account&action=txlist&address="+SUB_ADDRESS+"&startblock=0&endblock=99999999&sort=desc&apikey=").then((response) => {
      return response.json()
    }).then(data=>{
      console.log("data====",data)
      if(data&&data.result){
        setTxList(data.result)
      }
    })
  },[])
  return (
    <BodyWrapper>
      <div className="container">
        <div className="logo-box">
          <img src={isDark ? LogoDark : Logo} height={100} alt="" />
          <img style={{ marginLeft: '14px' }} height={80} src={isDark ? WordmarkDark : Wordmark} alt="logo" />
        </div>
        <CountDownWrap>
          <h3>第{periods + 1}期认购倒计时</h3>
          <CountDown endDate={initDate()} />

        </CountDownWrap>
        <div className="statistic">
          <div className="number-box">
            <span>已认购PZS：</span>
            <span className="number">{globalData.result?.stats[7] / pzsToken.decimals}</span>
            <span>Pzs</span>
          </div>
          <div className="process">
            <div className="outer">
              <div className="inner" style={{ width: `${(globalData.result?.stats[7]/globalData.result?.stats[4])/pzsToken.decimals*100}%` }}></div>
            </div>
          </div>
          <div className="btn-box">
            <span className="btn-default btn-radius" onClick={() => setSubscriptionModal(true)}>
              认购
            </span>
          </div>
          {/*<div className="getmore">*/}
            {/*<span>了解详情 &gt;</span>*/}
          {/*</div>*/}
        </div>
        <TradeWrapper className="flex-between row">
          <HistoryWrap className="history">
            <div className="head">
              <span className="circle-icon">
                <i />
                <i />
                <i />
              </span>
              <span>最近交易记录</span>
            </div>
            <div className="history-table">
              <div className="table-tr table-head">
                <span className="value">VALUE</span>
                <span className="date">DATE</span>
                <span className="tx">TX</span>
              </div>
              {txList.map((item:any,index:any) =>{
                 return  item.to===SUB_ADDRESS&&index<10&&item.value>0? <div key={index} className="table-tr">
                    <span className="value">
                      <span className=" themeColor">+{item.value/ethToken.decimals*500}</span> <i>PZS</i>
                    </span>
                    <span className="date">{`${moment(item.timeStamp*1000).format("yyyy-MM-DD HH:mm:ss")}`}</span>
                    <span className="tx">{item.hash.substring(0,10)}******{item.hash.substring(50,item.hash.length)}</span>
                  </div>:''
              }


              )}
            </div>
          </HistoryWrap>
        </TradeWrapper>
        <SubscriptionItems>
          {/*我的资产*/}
          <AssetsModule periods={periods} globalData={globalData} />
          {/*推荐奖励*/}
          <InviteModule periods={periods} fee={globalData.result?.stats[6]}/>
          {/*成为超级合伙人-新设计图上没有这块了*/}
          {/*<PartnerModule/>*/}
        </SubscriptionItems>
        {/*认购弹窗*/}
        <SubscriptionModal periods={periods} isOpen={showSubscriptionModal} onDismiss={handleSubscriptionDismiss} />
        {/*加入我们的弹窗*/}
        <JoinUsModal isOpen={userData.result?.stats[9].toNumber()===0} onDismiss={() => {}} periods={periods}/>
      </div>
    </BodyWrapper>
  )
}
