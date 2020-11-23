import React from 'react'
import styled from 'styled-components'

import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo.png'
import Wordmark from '../../assets/images/logoTitle.png'
import WordmarkDark from '../../assets/images/logoTitle.png'
import checkIcon from '../../assets/images/subscription/check.png'

import { useDarkModeManager } from '../../state/user/hooks'
import {TradeWrapper,SubscriptionItems,AccountWrap,InviteWrap,PartnerWrap} from './styled';
import SubscriptionListItem from './components/subscriptionListItem';
export const BodyWrapper = styled.div`
.btn-default{
    width: 200px;
    height: 47px;
    background: linear-gradient(270deg, #E6A600 0%, #FFB800 100%);
    border-radius: 39px;
    font-size:18px;
    color: #333333;
    font-weight: 600;
    display:inline-flex;
    align-items: center;
    justify-content: center;
}
.logo-box{
  text-align:center;  
}
.statistic{
  display:flex;
  flex-direction:column;
  align-items:center;
  .getmore{
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255,255,255,.7);
    margin-top:10px;
  }
  .btn-box{
    margin-top:30px;
  }
  .process{
    margin-top:30px;
    width:500px;
    .outer{
    height: 12px;
    border-radius: 6px;
    border: 2px solid #FFFFFF;
    position:relative;
    }
    .inner{
    background: #FFFFFF;
    box-shadow: 0px 0px 16px 4px rgba(255, 255, 255, 0.86);
    border-radius: 6px;
    height:100%;
    position:absolute;
    }
  }
  .number-box{
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color:rgba(255,255,255,.7);
    margin-top:70px;
    .number{
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #EBAA00;
      margin-right:10px;
    }
  }
}
`

export default function Subscription() {
  const [isDark] = useDarkModeManager()
  return <BodyWrapper>
    <div className="logo-box">
      <img src={isDark ? LogoDark : Logo} height={92} alt=""/>
      <img style={{ marginLeft: '4px', marginTop: '4px' }} height={92} src={isDark ? WordmarkDark : Wordmark}
           alt="logo"/>
    </div>
    <div className="statistic">
      <div className="number-box">
        <span>总剩余数量：</span>
        <span className='number'>99513</span>
        <span>Pzs</span>
      </div>
      <div className='process'>
        <div className="outer">
          <div className="inner" style={{width:'80%'}}></div>
        </div>
      </div>
      <div className="btn-box">
        <span className="btn-default btn-radius">认购</span>
      </div>
      <div className="getmore">
        <span>了解详情 &gt;</span>
      </div>
    </div>
    <TradeWrapper>
      <div className='countDown'>
        <h3>认购倒计时</h3>
        <div className="time-box">
          <div className='time-item'>
            <span className='number'>06</span>
            <span className="unit">days</span>
          </div>
          <div className='time-item'>
            <span className='number'>09</span>
            <span className="unit">hours</span>
          </div>
          <div className='time-item'>
            <span className='number'>14</span>
            <span className="unit">min</span>
          </div>
          <div className='time-item'>
            <span className='number'>06</span>
            <span className="unit">sec</span>
          </div>
        </div>
      </div>
      <div className='history'>
        <div className="head">
          <span></span>
          <span>最近交易记录</span>
        </div>
        <div className="history-table">
          <div className='table-tr table-head'>
            <span>VALUE</span>
            <span>DATE</span>
            <span>TX</span>
          </div>
          {
            [1,1,1,1,1].map(()=>{
             return <div className='table-tr'>
                <span>+5 <i>PZS</i></span>
                <span>2020-07-20 20:00</span>
                <span>0x81b7e08f65bdf5648606c89998a9cc8164397647</span>
              </div>
            })
          }

        </div>
      </div>
    </TradeWrapper>
    <SubscriptionItems>
      <SubscriptionListItem title='我的资产'>
        <AccountWrap>
          <div className="left">
            <div>您已拥有</div>
            <div><span className="number">16519</span> <span className='unit'>PZS</span></div>
          </div>
          <div className='divider'/>
          <div className="right">
            <div>钱包地址</div>
            <div className='address'>0xF42E48789013******D57b1b3f06650e</div>
            <button className="btn btn-default">连接钱包</button>
          </div>
        </AccountWrap>
      </SubscriptionListItem>
      <SubscriptionListItem title='推荐奖励'>
        <InviteWrap>
          <div>推荐邀请人</div>
          <div>
            Search name or paste address（邀请人地址
            <button>复制</button>
          </div>
          <div>
            直接推荐收益为 <span>20%</span>
            ，间接收益为 <span>15%</span>
          </div>
        </InviteWrap>
      </SubscriptionListItem>
      <SubscriptionListItem title='成为超级合伙人'>
        <PartnerWrap>
          <div className="partner-item">
            <div className='title'>加入我们</div>
            <div className='advantage'>
              <div className='advantage-item'><img src={checkIcon} alt=""/><span>收益</span><span className='big'>15 <i>%</i></span></div>
              <div className='advantage-item'><img src={checkIcon} alt=""/><span>代数</span><span className='big'>无限代</span></div>
              <div className='advantage-item'><img src={checkIcon} alt=""/><span>仅需支付</span><span className='big'>2 ETH</span></div>
            </div>
            <button className='btn btn-default'>成为超级合伙人</button>
          </div>
          <div className="partner-item">
            <div className='title'>我的合伙人收益</div>
            <div className='content'>
              <div className="profit">
                <div className='head'>可提收益</div>
                <div>
                  <span><b>0.000</b>ETH</span>
                  <span>收益明细 &gt;</span>
                </div>

              </div>
              <div className='tip'>
                <span className="themeColor">PZS</span>
                <span>可提取推荐奖励</span>
              </div>
            </div>
            <button className='btn btn-default'>提取</button>
          </div>
        </PartnerWrap>
      </SubscriptionListItem>
    </SubscriptionItems>
  </BodyWrapper>
}
