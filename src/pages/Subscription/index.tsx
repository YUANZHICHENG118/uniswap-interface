import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo.png'
import Wordmark from '../../assets/images/logoTitle.png'
import WordmarkDark from '../../assets/images/logoTitle.png'
import { useDarkModeManager } from '../../state/user/hooks'
import {TradeWrapper} from './styled';
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
  </BodyWrapper>
}
