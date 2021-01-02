/**
 *@desc  我的分润收益
 *@date 2021/1/2 5:27 PM
 */
import React, { useState } from 'react'
//components
import UpgradeModal from '../UpgradeModal'
import FenrunDescModal from '../FenrunDescModal'
//images
import smallDevice from '../../../assets/images/mario/small-device.png'
import questionImg from '../../../assets/images/mario/question.png'
//style
import {ProfitWrap } from '../styles'
export default function MyFenRunProfit(){

  const [upgradeModalOpen, toggleUpgradeModal] = useState(false)
  const [descModalOpen, toggleDescModal] = useState(true)
  const upgradeMethod=()=>{
    toggleUpgradeModal(true)
  }
  const onDismiss = () => {
    toggleUpgradeModal(false)
  }
  const toggleDesc = () => {
    toggleDescModal(!descModalOpen)
  }

   return (
     <ProfitWrap className="bgwrap">
       <div className="title flex-between align-items-center">
         <div>
           <img src={smallDevice} alt="" />
           我的分润收益
           {/*挖矿分润描述*/}
           <img onClick={toggleDesc} src={questionImg} alt=""/>
         </div>
         <div className="themeColor">LV .1</div>
       </div>
       <div className="middle">
         <b className="themeColor">16633</b>
         <span>USDT</span>
       </div>
       <div className='bottom flex-between'>
         <p className='tip'>当被分享者获得收益时，您也将获得不同比例收益</p>
         <button className="btn btn-default" onClick={upgradeMethod}>升级设备</button>
       </div>
       {/*升级设备的弹窗*/}
       <UpgradeModal
         isOpen={upgradeModalOpen}
         onDismiss={onDismiss}/>
       {/*挖矿分润描述*/}
       <FenrunDescModal
         isOpen={descModalOpen}
         onDismiss={toggleDesc}/>
     </ProfitWrap>
   )
}
