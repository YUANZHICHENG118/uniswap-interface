import React, { useState } from 'react'
//components
import TeamDataItem from './TeamDataItem'
import { ButtonWhite } from '../../../components/Button'
import ActivationModal from '../ActivationModal'
//style
import { TeamDataWrap } from '../styles'

export default function TeamData() {
  const [activeModalOpen, toggleActiveModal] = useState(false)
  const onDismiss = () => {
    toggleActiveModal(false)
  }
  const activeMethod=()=>{
    toggleActiveModal(true)
  }
  return (
    <TeamDataWrap className="bgwrap team-item">
      <header className="text-center text-white">我的团队数据</header>
      <div className='row teamInfo'>
        <div className='col-lg-4 col-xs-6'>
          <dl>
            <dt>
              <b>4</b>
              <span>%</span>
            </dt>
            <dd>我的团队收益率</dd>
          </dl>
        </div>
        <div className='col-lg-4 col-xs-6'>
          <dl>
            <dt>
              <b className='themeColor'>18877</b>
              <span>USDT</span>
            </dt>
            <dd>我的团队奖励</dd>
          </dl>
        </div>
        <div className='col-lg-4 col-xs-6'>
          <dl>
            <dt>
              <b>18877</b>
              <span>USDT</span>
            </dt>
            <dd>我的团队总认购</dd>
          </dl>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-4 col-xs-6">
          <TeamDataItem className="item1" >
            <dl>
              <dt>组员地址</dt>
              <dd>jlljoo3n4o1on*****2949IODj2399</dd>
            </dl>
          </TeamDataItem>
        </div>
        <div className="col-lg-4 col-xs-6">
          <TeamDataItem className="item2" >
            <dl>
              <dt>组员地址</dt>
              <dd>jlljoo3n4o1on*****2949IODj2399</dd>
            </dl>
          </TeamDataItem>
        </div>
        <div className="col-lg-4 col-xs-6">
          <TeamDataItem className="item3">
            <ButtonWhite onClick={activeMethod} className="item-button" style={{ width: '60%', margin: 'auto',borderRadius:'24px' }}>
              激活组员
            </ButtonWhite>
          </TeamDataItem>
        </div>
      </div>
      {/*激活组员-modal*/}
      <ActivationModal
        isOpen={activeModalOpen}
        onDismiss={onDismiss}
      />
    </TeamDataWrap>
  )
}
