// 我的资产
import React from 'react'

import SubscriptionListItem from './subscriptionListItem'
import { AccountWrap} from '../styled'

export default function AssetsModule() {
  return(
    <SubscriptionListItem title='我的资产'>
      <AccountWrap className='border-wrap'>
        <div className="left">
          <div>您已拥有</div>
          <div><span className="number">16519</span> <span className='unit'>PZS</span></div>
        </div>
        <div className='divider'/>
        <div className="right">
          <div>钱包地址</div>
          <div className='address'>0xF42E48789013******D57b1b3f06650e</div>
          <button className="btn btn-default">连接钱包</button>
        </div>
      </AccountWrap>
    </SubscriptionListItem>
  )
}
