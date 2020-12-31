import React from 'react'
//images
import smallDevice from '../../../assets/images/mario/small-device.png'
//style
import { ChooseItemWrap } from '../styles'
export default function HomeChoose() {
  return (
    <ChooseItemWrap className="col-md-4 col-lg-3 col-xs-6  ">
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
        <button className="btn btn-default">购买</button>
      </div>
    </ChooseItemWrap>
  )
}
