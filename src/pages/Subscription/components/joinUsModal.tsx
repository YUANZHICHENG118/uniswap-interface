//加入我们的弹窗
import React from 'react'

import Modal from '../../../components/Modal'
import WhiteArrowTitle from './WhiteArrowTitle'
import { JoinUsWrapper } from '../styled'
import checkIcon from '../../../assets/images/subscription/check.png'

interface JoinUsModalProps {
  isOpen: boolean
  onDismiss: () => void
}
export default  function JoinUsModal({ isOpen, onDismiss }: JoinUsModalProps){
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={90} width={'600px'}>
      <JoinUsWrapper>
        <WhiteArrowTitle title='加入我们'/>
        <div className='acquisition'>
          <img src={checkIcon} className='checkIcon' alt=""/>
          <span>开始获取</span>
          <div className='coinInfo'>
            <span className='themeColor'>PZS</span>
          </div>
        </div>
        <div className="write-box flex-between">
          <input type="text" placeholder='请输入推荐人编码'/>
          <button className='btn btn-default'>注册</button>
        </div>
      </JoinUsWrapper>
    </Modal>
  )
}
