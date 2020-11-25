//佣金明细的弹窗
import React from 'react'

import Modal from '../../../components/Modal'
import WhiteArrowTitle from './WhiteArrowTitle'
import { CommissionWrapper } from '../styled'
import styled from 'styled-components'
// import { useSingleCallResult } from '../../../state/multicall/hooks'
// import { useSubContract } from '../../../hooks/useContract'
// import { SUB_ADDRESS } from '../../../constants'
// import { useActiveWeb3React } from '../../../hooks'
import { ReactComponent as Close } from '../../../assets/images/x.svg'
const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const CloseColor = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.text4};
  }
`

interface CommissionModalProps {
  isOpen: boolean
  onDismiss: () => void
}

export default function CommissionModal({ isOpen, onDismiss }: CommissionModalProps) {



  // const { account } = useActiveWeb3React()
  // const contract = useSubContract(SUB_ADDRESS, true)
  // const userData = useSingleCallResult(contract, 'getPersonalStats',[periods,account ?? undefined])
  //


  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} maxHeight={90} width={'700px'}>
      <CommissionWrapper>
        <CloseIcon onClick={onDismiss}>
          <CloseColor />
        </CloseIcon>
        <WhiteArrowTitle title='我的佣金明细' className='arrowTitle'/>
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
