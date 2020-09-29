import React from 'react'
import styled from 'styled-components'
import { mainToken} from '../../constants/index'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function XpoolItem() {
  return <BodyWrapper>
    <div className="col p-1">
      <div className="wow bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp">
        <h5>Total Lock-ups</h5>
        <span className="total-lock show-data">--.--</span>
        <span>{mainToken.symbol}</span>
      </div>
    </div>
  </BodyWrapper>
}
