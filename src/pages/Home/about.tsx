import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function about() {
  return <BodyWrapper>
    <div className="col p-1">
      <div className="wow bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp">
        <h4 style={{marginTop:20}} id={"about"}>About</h4>
        <p>PizzaSwap是一个集Defi，去中心化交易，流动性挖矿，邀请奖励，NFT于一体的交易所，我们的初衷是纪念那笔比特币和披萨的交易</p>
      </div>
    </div>
  </BodyWrapper>
}
