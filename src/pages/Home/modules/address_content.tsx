import React from 'react'
//images
import riceImg from '../../../assets/images/mario/rice.png'

export default function AddressContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="address-content">
      <div className="title">
        <img src={riceImg} alt="" />
        我的地址
      </div>
      {
        children
      }
    </div>
  )
}
