/**
 *@desc  挖矿分润描述
 *@date 2021/1/2 5:33 PM
 */
import React from 'react'
//components
import Modal from '../../../components/Modal'
import { RowBetween } from '../../../components/Row'
import { CloseIcon } from '../../../theme/components'
import DescContent from './DescContent'
//styles
import { LineTitle, SubTitle, Tag } from '../styles'
//images
import smallDevice from '../../../assets/images/mario/small-device.png'
export default function FenrunDescModal({ onDismiss, isOpen }: { isOpen: boolean; onDismiss: () => void }) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} width={'55rw'} minHeight={false} maxHeight={94}>
      <div className="flex-grow-1 p-4">
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <div className="flex-column align-items-center">
          <LineTitle>挖矿分润</LineTitle>
          <SubTitle className="text-center mt-3">挖矿分润收益=分享者收益*挖矿分润收益率 </SubTitle>
          <DescContent>
            <DescContent.item>
              <div><img className='smallImg' src={smallDevice} alt=""/><Tag>LV 1</Tag></div>
              <div>无分润收益</div>
            </DescContent.item>
            <DescContent.item>
              <div><img className='smallImg' src={smallDevice} alt=""/><Tag>LV 2</Tag></div>
              <div>1级收益8%，2级收益4%</div>
            </DescContent.item>
            <DescContent.item>
              <div><img className='smallImg' src={smallDevice} alt=""/><Tag>LV 3</Tag> - <Tag>LV 8</Tag></div>
              <div>1级收益8%，2级收益4%，3级收益1%</div>
            </DescContent.item>
          </DescContent>
        </div>
      </div>
    </Modal>
  )
}
