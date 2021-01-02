import React, { useState } from 'react'
//components
import BuyModal from '../BuyModal'
//images
import smallDevice from '../../../assets/images/mario/small-device.png'
//style
import { ChooseItemWrap } from '../styles'
export default function HomeChoose() {
  const [buyModalOpen,setbuyModalOpen]=useState(false)
  const setBuyModal=()=>{
    setbuyModalOpen(!buyModalOpen)
  }
  return (
    <ChooseItemWrap className="col-lg-3 col-sm-4 col-xs-6  ">
      <div className="item text-center">
        <div className="head flex-between align-items-center">
          <div className="left themeColor">
            <img src={smallDevice} alt="" />
            LV 2
          </div>
          <div className="right">
            <b className="themeColor">360</b>
            <span>/500</span>
          </div>
        </div>
        <div className="middle">
          <div className="name">日化收益</div>
          <div className="rate">
            <b className="themeColor">1.2</b> <span> %</span>
          </div>
          <div className="time">10 months</div>
        </div>
        <button className="btn btn-default" onClick={setBuyModal} >购买</button>
      </div>
      {/*购买-弹窗*/}
      <BuyModal isOpen={buyModalOpen} onDismiss={setBuyModal} />
    </ChooseItemWrap>
  )
}
