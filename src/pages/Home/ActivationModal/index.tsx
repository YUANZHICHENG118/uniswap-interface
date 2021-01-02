/**
 *@desc  激活组员
 *@date 2021/1/2 3:15 PM
 */
import React from 'react'
//components
import Modal from '../../../components/Modal'
import { RowBetween } from '../../../components/Row'
import { CloseIcon } from '../../../theme/components'
//styles
import { LineTitle, Earnings } from '../styles'

export default function ActivationModal({ onDismiss, isOpen }: { isOpen: boolean; onDismiss: () => void }) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={94}>
      <div className="flex-grow-1 p-4">
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <div className="flex-column align-items-center">
          <LineTitle>激活团队组员</LineTitle>
          <Earnings className="earnings my-5 w-75">
            <input className='border-0' style={{outline:0}} type="text" placeholder='请输入激活组员钱包地址'/>
          </Earnings>
          <button className="btn btn-default w-75">确认激活</button>
        </div>
      </div>
    </Modal>
  )
}
