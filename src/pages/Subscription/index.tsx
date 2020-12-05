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
import moment from 'moment'

import { BodyWrapper, TradeWrapper, SubscriptionItems, HistoryWrap, CountDownWrap } from './styled'

import { SUB_ADDRESS, pzsToken, ethApi, ethToken } from '../../constants'
import { useSubContract } from '../../hooks/useContract'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { useActiveWeb3React } from '../../hooks'
import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Subscription(props: RouteComponentProps<{}>) {
  const {
    location: { search }
  } = props
  const {t}=useTranslation();

  const [showSubscriptionModal, setSubscriptionModal] = useState<boolean>(false)
  const handleSubscriptionDismiss = useCallback(() => {
    setSubscriptionModal(false)
  }, [setSubscriptionModal])


  // const [showJoinModal, setJoinModal] = useState<boolean>(false)
  // const handleJoinDismiss = useCallback(() => {
  //   setJoinModal(false)
  // }, [showJoinModal])

  const [isDark] = useDarkModeManager()
  const [txList, setTxList] = useState<any[]>([])

  /**
   * [通过参数名获取url中的参数值]
   * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
   * @param  {[string]} queryName [参数名]
   * @return {[string]}           [参数值]
   */
  const GetQueryValue = (queryName: string) => {
    var reg = new RegExp('(^|&)' + queryName + '=([^&]*)(&|$)', 'i')
    var r = search.substr(1).match(reg)
    if (r != null) {
      sessionStorage.setItem('ref', decodeURI(r[2]))//把data对应的值保存到sessionStorage
      return decodeURI(r[2])
    } else {
      return null
    }
  }


  const contract = useSubContract(SUB_ADDRESS, true)
  const periodsData = useSingleCallResult(contract, 'underway')
  const periods = periodsData.result?.[0]
  const { account } = useActiveWeb3React()
  const rate = periods===0?1000:periods===1?800:500

  const globalData = useSingleCallResult(contract, 'getGlobalStats', [periods])
  const userData = useSingleCallResult(contract, 'getPersonalStats', [periods, account ?? undefined])

  const initDate = () => {
    // if (globalData.result) {
    //   return moment(globalData.result?.stats[5].toNumber() * 1000).add((globalData.result?.stats[2].toNumber()), 's').format('YYYY-MM-DD HH:mm:ss')
    // }
    return '2020-12-12 12:00:00'
  }

  console.log("periods====",periods)
  useEffect(() => {


    GetQueryValue('ref')


    fetch(ethApi + '?module=account&action=txlist&address=' + SUB_ADDRESS + '&startblock=0&endblock=99999999&sort=desc&apikey=D15U6EVP8CX89EFZ7FW9GC51AUT2IWYD11').then((response) => {
      return response.json()
    }).then(data => {
      console.log('data====', data)
      if (data && data.result) {
        setTxList(data.result || [])
      }
    })

  }, [])
  return (
    <BodyWrapper>
      <div className="container">
        <div className="logo-box">
          <img src={isDark ? LogoDark : Logo} height={100} alt=""/>
          <img style={{ marginLeft: '14px' }} height={80} src={isDark ? WordmarkDark : Wordmark} alt="logo"/>
        </div>
        <CountDownWrap>
          {/*<h3>{t("subscription-count-down",{num:(periods || 0) + 1})}</h3>*/}
          <h3>{t("subscription-count-down",{num:2})}</h3>

          <CountDown endDate={initDate()}/>



        </CountDownWrap>
        <div className="statistic">
          <div className="number-box">
            {/*<span>{t("subscribed")} PZS：</span>*/}
            {/*<span className="number">{((globalData.result?.stats[7] || 0) / pzsToken.decimals).toFixed(2)}</span>*/}


            <span>剩余认购PZS：</span>
            <span className="number">1000000</span>

            <span>Pzs</span>
          </div>
          <div className="process">
            <div className="outer">
              <div className="inner"
                   style={{ width: `${(globalData.result?.stats[7] / globalData.result?.stats[4]) / pzsToken.decimals * 100}%` }}></div>
            </div>
          </div>
          <div className="btn-box">

            {
              periods===255?<span style={{color:'#999'}} className="btn-default btn-radius">
              {t("subscription")}
            </span>:<span className="btn-default btn-radius" onClick={() => setSubscriptionModal(true)}>
              {t("subscription")}
            </span>
            }

          </div>
          {/*<div className="getmore">*/}
          {/*<span>了解详情 &gt;</span>*/}
          {/*</div>*/}
        </div>
        <TradeWrapper className="flex-between row">
          <HistoryWrap className="history">
            <div className="head">
              <span className="circle-icon">
                <i/>
                <i/>
                <i/>
              </span>
              <span>{t("subscription-history")}</span>
            </div>
            <div className="history-table">
              <div className="table-tr table-head">
                <span className="value">VALUE</span>
                <span className="date">DATE</span>
                <span className="tx">TX</span>
              </div>
              {txList && txList.map((item: any, index: any) => {
                  return item.to.toLowerCase() === SUB_ADDRESS.toLowerCase() && index < 10 && item.value > 0 ?
                    <div key={index} className="table-tr">
                    <span className="value">
                      <span className=" themeColor">+{item.value / ethToken.decimals * rate}</span> <i>PZS</i>
                    </span>
                      <span className="date">{`${moment(item.timeStamp * 1000).format('yyyy-MM-DD HH:mm:ss')}`}</span>
                      <span
                        className="tx">{item.hash.substring(0, 10)}******{item.hash.substring(50, item.hash.length)}</span>
                    </div> : ''
                }
              )}
            </div>
          </HistoryWrap>
        </TradeWrapper>
        <SubscriptionItems>
          {/*我的资产*/}
          <AssetsModule periods={periods} globalData={globalData}/>
          {/*推荐奖励*/}
          <InviteModule periods={periods} fee={globalData.result?.stats[6]}/>
          {/*成为超级合伙人-新设计图上没有这块了*/}
          {/*<PartnerModule/>*/}
        </SubscriptionItems>
        {/*认购弹窗*/}
        <SubscriptionModal periods={periods} isOpen={showSubscriptionModal} onDismiss={handleSubscriptionDismiss}/>
        {/*加入我们的弹窗*/}
        <JoinUsModal isOpen={userData.result?.stats[9].toNumber() === 0} onDismiss={()=>{}} periods={periods}/>
      </div>
    </BodyWrapper>
  )
}

