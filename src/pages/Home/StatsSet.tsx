import React from 'react'
import styled from 'styled-components'
import { Row } from 'antd'
import { contractList ,ITokens} from '../../utils/tron'
import PoolInfo from './PoolInfo'
export const BodyWrapper = styled.div`
  margin: 50px 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 20px 0px;
    .statsCard{
    margin-bottom: 20px;
    }
  `}
  .statsCard {
    padding: 14px 24px 24px;
    border: 1px solid #efc6ed;
    border-radius: 12px;
    box-shadow: inset 1px 1px 0 #e7d7ea;
    position: relative;
    margin-bottom: 30px;
    h1 {
      color: #5b2639 !important;
      font-size: 32px;
      margin: 0 !important;
      span {
        font-size: 16px;
        font-weight: 400;
        padding-left: 5px;
        color: #aa8592;
      }
    }
    p {
      margin: 0;
      font-size: 14px;
      color: #aa8592;
      font-weight: 700;
      line-height: 16px;
      word-spacing: -1px;
    }
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function StatsSet() {

  return (
    <BodyWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 32 }} justify="start" align="middle">
        {contractList().map((item:ITokens) => {
          return item.coming?'':<PoolInfo token={item}></PoolInfo>

        })}
      </Row>
    </BodyWrapper>
  )
}
