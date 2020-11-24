import React from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal'

export const CommissionWrapper = styled.div`
  padding:45px 50px 60px;
  width:100%;
.title{
  font-size: 32px;
  font-family: PingFang-SC-Heavy, PingFang-SC;
  font-weight: 800;
  color: #FFFFFF;
   margin-bottom:40px;
}
.commission-table{
  overflow:auto;
  thead{
    font-size:18px;
    margin-bottom:20px;
  }
  tbody{
   font-size:16px;
   line-height:30px;
  }
  .profit{
    min-width:130px;
  }
  .type{
    min-width:100px;
  }
  .time{
    min-width:180px;
  }
}
`

interface CommissionModalProps {
  isOpen: boolean
  onDismiss: () => void
}

export default function CommissionModal({ isOpen, onDismiss }: CommissionModalProps) {
  return <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={false} >
    <CommissionWrapper>
      <div className="title">我的佣金明细</div>
      <div className="commission-table">
        <table>
          <thead>
          <tr>
            <th className='themeColor profit'>佣金收益</th>
            <th className='themeColor address'>兑换人地址</th>
            <th className='themeColor type'>推荐类型</th>
            <th className='themeColor time'>时间</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className='profit'>
              <span className='themeColor'>+5612214</span>
              <span className='greyColor'> ETH</span>
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
}
