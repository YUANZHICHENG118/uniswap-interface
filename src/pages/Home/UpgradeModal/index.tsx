/**
 *@desc  升级您的设备
 *@date 2021/1/2 12:39 PM
 */
import React, { useState } from 'react'
//components
import Modal from '../../../components/Modal'
import { RowBetween } from '../../../components/Row'
import { CloseIcon } from '../../../theme/components'
//styles
import { LevelListWrap, Earnings, LineTitle, SubTitle } from '../styles'
//images
import smallDeviceImg from '../../../assets/images/mario/small-device.png'

export default function UpgradeModal() {
  const [upgradeModalOpen, toggleUpgradeModal] = useState(true)
  const onDismiss = () => {
    toggleUpgradeModal(false)
  }
  const levelLists = [
    { name: 'LV 1', value: '100' },
    { name: 'LV 2', value: '200' },
    { name: 'LV 3', value: '500' },
    { name: 'LV 4', value: '1000' },
    { name: 'LV 5', value: '3000' },
    { name: 'LV 6', value: '5000' },
    { name: 'LV 7', value: '10000' },
    { name: 'LV 8', value: '30000' }
  ]
  return (
    <Modal isOpen={upgradeModalOpen} onDismiss={onDismiss} minHeight={false} maxHeight={94}>
      <div className="flex-grow-1 p-4">
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <div className="flex-column align-items-center">
        <div className="title">
          <LineTitle>升级你的设备</LineTitle>
          <SubTitle className='text-center mt-3'>复投获取更多收益</SubTitle>
        </div>
        <Earnings className='earnings mt-3'>
          <b>16633</b>
          <span>USDT</span>
        </Earnings>
        <button className="btn btn-default mt-4">复投</button>
        </div>
        <LevelListWrap className="levels mt-5">
          <RowBetween className='head'>
            <span>设备等级</span>
            <span>认购金额</span>
          </RowBetween>
          <div className="level-list">
            {levelLists.map(item => (
              <RowBetween className="level-list-item">
                <div className="tagBox">
                  <img src={smallDeviceImg} alt=""/>
                  <span className='tag ml-1 themeColor  px-2'>{item.name}</span>
                </div>
                <div className="amount">
                  <span>{item.value}</span>
                  <span className="unit">USDT</span>
                </div>
              </RowBetween>
            ))}
          </div>
        </LevelListWrap>
      </div>
    </Modal>
  )
}
