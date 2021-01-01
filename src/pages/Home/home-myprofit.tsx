/**
 *@desc  我的收益
 *@date 2021/1/1 1:27 PM
 */
import React from 'react'
//components
import Title1 from './modules/title1'
//style
import { MyProfitWrap, MyProfitItemWrap } from './styles'
export default function MyProfit() {
  return (
    <MyProfitWrap>
      <Title1 imgType="2" title="我的收益" subTitle="显示你的收益，并可将利润提取到钱包" />
      <div className="profit-content row flex-between">
        <div className="col-lg-5 col-xs-6">
          <MyProfitItemWrap className="left flex-column flex-between align-items-center">
            <div className="inner-option">
              <h5 className="grey">综合收益总额</h5>
              <div className="content">
                <b className="themeColor">16633</b>
                <span className="grey">USDT</span>
              </div>
            </div>
            <div className="divider" />
            <div className="inner-option">
              <h5 className="grey">已结算收益</h5>
              <div className="content">
                <b className="themeColor">16633</b>
                <span className="grey">USDT</span>
              </div>
            </div>
          </MyProfitItemWrap>
        </div>
        <div className="col-lg-5 col-xs-6">
          <MyProfitItemWrap className="right">
            <div className="inner-option">
              <h5 className="grey">综合收益总额</h5>
              <div className="content">
                <b className="themeColor">16633</b>
                <span className="grey">USDT</span>
              </div>
              <div>
                <button className='btn btn-default'><b>提取收益</b></button>
              </div>
              <div className='themeColor'>
                <span>取款明细</span>
              </div>
            </div>
          </MyProfitItemWrap>
        </div>
      </div>
    </MyProfitWrap>
  )
}
