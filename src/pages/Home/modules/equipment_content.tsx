import React from 'react'
//images
import DeviceImg from '../../../assets/images/mario/divice.png'
import {EquipmentWrap} from '../styles'
export default function EquipmentContent() {
  return (
    <EquipmentWrap className="equipment">
      <div className='title'>
        <div>
          <img src={DeviceImg} alt=""/>我的设备收益
        </div>
        <div className="level">LV .1</div>
      </div>
      <div className="middle">
         <b className="themeColor">16633</b>
        <span>USDT</span>
      </div>
      <div className="flex-between">
        <div className="flex-column">
          <span className="deadline">到期日</span>
          <span className="themeColor">2020/08/23</span>
        </div>
        <div><button className="btn btn-default" style={{'height':'48px'}}>升级设备</button></div>
      </div>

    </EquipmentWrap>
  )
}

