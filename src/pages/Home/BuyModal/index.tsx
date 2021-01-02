/**
 *@desc  购买
 *@date 2021/1/2 4:38 PM
 */

import React from 'react'

//components
import Modal from '../../../components/Modal'
import { RowBetween } from '../../../components/Row'
import { CloseIcon } from '../../../theme/components'
//styles
import { LineTitle, SubTitle, AmountWrap } from '../styles'

export default function BuyModal({ onDismiss, isOpen }: { isOpen: boolean; onDismiss: () => void }) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={94}>
      <div className="flex-grow-1 p-4">
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <div className="flex-column align-items-center">
          <div>
            <LineTitle>购买 LV 3 设备</LineTitle>
            <SubTitle className="text-center mt-3">购买该设备需支付 </SubTitle>
          </div>
          <AmountWrap className='py-5' size={36}>
            <b>16333</b>
            <span className="unit ml-1">USDT</span>
          </AmountWrap>
          <button className='btn btn-default w-75'>确认</button>
        </div>
      </div>
    </Modal>
  )
}
