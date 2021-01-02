/**
 *@desc 提款明细
 *@date 2021/1/2 3:34 PM
 */
import React from 'react'
//components
import Modal from '../../../components/Modal'
import { RowBetween } from '../../../components/Row'
import { CloseIcon } from '../../../theme/components'
//styles
import { LineTitle } from '../styles'
export default function WithdrawalDetail({ onDismiss, isOpen }: { isOpen: boolean; onDismiss: () => void }){
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={94}>
      <div className="flex-grow-1 p-4">
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <div className="flex-column align-items-center">
          <LineTitle>提款明细</LineTitle>

        </div>
      </div>
    </Modal>
  )
}

