/**
 *@desc 提取收益的弹窗
 *@date 2021/1/2 2:51 PM
 */

import React from 'react'
//components
import Modal from '../../../components/Modal'
import { RowBetween } from '../../../components/Row'
import { CloseIcon } from '../../../theme/components'
//styles
import { Earnings, LineTitle, SubTitle } from '../styles'

export default function WithdrawalModal({ onDismiss, isOpen }: { isOpen: boolean; onDismiss: () => void }) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={94}>
      <div className="flex-grow-1 px-4 pb-5 pt-3">
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <div className="flex-column align-items-center">
          <div className="mt-4">
            <LineTitle>提取收益</LineTitle>
            <SubTitle className="mt-2">每24小时仅可提款1次</SubTitle>
          </div>
          <Earnings className="earnings mt-5 w-75">
            <b>16633</b>
            <span className="unit ml-1">USDT</span>
          </Earnings>
          <button className="btn btn-default mt-4 w-75">升级设备</button>
        </div>
      </div>
    </Modal>
  )
}
