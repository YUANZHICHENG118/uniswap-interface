//佣金明细的弹窗
import React from 'react'

import Modal from '../../../components/Modal'
import WhiteArrowTitle from './WhiteArrowTitle'
import { CommissionWrapper } from '../styled'

interface CommissionModalProps {
  isOpen: boolean
  onDismiss: () => void
}

export default function CommissionModal({ isOpen, onDismiss }: CommissionModalProps) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={90}>
      <CommissionWrapper>
        <WhiteArrowTitle title='我的佣金明细'/>
        <div className="commission-table">
          <table>
            <thead>
              <tr>
                <th className="themeColor profit">佣金收益</th>
                <th className="themeColor address">兑换人地址</th>
                <th className="themeColor type">推荐类型</th>
                <th className="themeColor time">时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="profit">
                  <span className="themeColor">+5612214</span>
                  <span className="greyColor"> ETH</span>
                </td>
                <td>0x81b7e08f65bdf5A64……</td>
                <td>直接推荐</td>
                <td>2020-07-20 20:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CommissionWrapper>
    </Modal>
  )
}
