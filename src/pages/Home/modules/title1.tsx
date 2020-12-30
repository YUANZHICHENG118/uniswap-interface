import React from 'react'
//style
import {Title1Wrap} from '../styles'
//images
import BigDeviceImg from '../../../assets/images/mario/big-device.png'
import BigDeviceImg2 from '../../../assets/images/mario/big-device2.png'

export default function Title1({imgType,title,subTitle}:{imgType?:string,title:string,subTitle:string}) {
  return (
    <Title1Wrap className="flex-between align-center">
      <img src={imgType ==='1'? BigDeviceImg : BigDeviceImg2} alt="" />
      <div className="flex-column">
        <div className='title-top'>{title}</div>
        <span>{subTitle}</span>
      </div>
    </Title1Wrap>
  )
}
