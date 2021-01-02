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
import { LineTitle, WithdrawalListWrap, AmountWrap } from '../styles'
export default function WithdrawalDetail({ onDismiss, isOpen }: { isOpen: boolean; onDismiss: () => void }) {
  const detalData = [
    {amount:'16633',address:'jlljoo3n4o1on2949IODj2399',time:'2020-10-11 13:00'},
    {amount:'16633',address:'jlljoo3n4o1on2949IODj2399',time:'2020-10-11 13:00'},
    {amount:'16633',address:'jlljoo3n4o1on2949IODj2399',time:'2020-10-11 13:00'},
    {amount:'16633',address:'jlljoo3n4o1on2949IODj2399',time:'2020-10-11 13:00'},
    {amount:'16633',address:'jlljoo3n4o1on2949IODj2399',time:'2020-10-11 13:00'},
  ]
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} width={'66vw'} minHeight={false} maxHeight={94}>
      <div className="flex-grow-1 p-4">
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <div className="flex-column align-items-center">
          <LineTitle>提款明细</LineTitle>
          <WithdrawalListWrap className="w-100 mt-5">
            <div className="row title mb-4">
              <div className="col-3">转出金额</div>
              <div className="col-6 text-center">转出地址</div>
              <div className="col-3 text-right">转出时间</div>
            </div>
            {detalData.map(item => {
              return <div className="row mb-3 listItem">
                <AmountWrap className="col-3"><b>{item.amount}</b> <span className='unit'>USDT</span></AmountWrap>
                <div className="col-6 text-center">{item.address}</div>
                <div className="col-3 text-right">{item.time}</div>
              </div>
            })}
          </WithdrawalListWrap>
        </div>
      </div>
    </Modal>
  )
}
