/**
 *@desc  我的收益
 *@date 2021/1/1 1:27 PM
 */
import React, { useState } from 'react'
//components
import Title1 from './modules/title1'
import WithdrawalModal from './WithdrawalModal'
//style
import { MyProfitWrap, MyProfitItemWrap } from './styles'
export default function MyProfit() {
  const [withdrawalModalOpen, toggleWithdrawalModal] = useState(false)
  const onDismiss = () => {
    toggleWithdrawalModal(false)
  }
  const withdrawalMethod=()=>{
    toggleWithdrawalModal(true)
  }
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
              <div className='extract-btn' >
                <button onClick={withdrawalMethod} className='btn btn-default' style={{width:'100%'}}><b>提取收益</b></button>
              </div>
              <div className='themeColor text-right'>
                <b>取款明细 <span style={{fontSize:'12px'}}>►</span></b>
              </div>
            </div>
          </MyProfitItemWrap>
        </div>
      </div>
      {/*提取收益的弹窗*/}
      <WithdrawalModal
        isOpen={withdrawalModalOpen}
        onDismiss={onDismiss}
      />
    </MyProfitWrap>
  )
}
