import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import usdjImg from '../../assets/images/home/usdj.png'
export const BodyWrapper = styled.div`
  margin: 50px 0;
  ${({ theme }) => theme.mediaWidth.upToMiddle`
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
        {[1, 1, 2, 1].map(() => {
          return (
            <Col xs={24} sm={24} md={12} lg={8}>
              <div className="statsCard">
                <img src={usdjImg} alt="ball" width="50px"/>
                <span>USDJ Stats</span>
                <h1>0.000000</h1>
                <p>My Stake</p>
                <br />
                <h1>
                  0.000<span>0.00%</span>
                </h1>
                <p>Total Staked</p>
                <br />
                <p>========== PRICES ==========</p>
                <p>1 Dragon = 0.0000 $</p>
                <p>1 USDJ = 0.0000 $</p>
                <br />
                <p>====== Dragon REWARDS ======</p>
                <p>Claimable Rewards : 0.0000&nbsp; Dragon = $0.0000</p>
                <p>Hourly estimate : 0.0000&nbsp; Dragon = $0.0000</p>
                <p>Daily estimate : 0.0000&nbsp; Dragon = $0.0000</p>
                <p>3 days estimate : 0.0000&nbsp; Dragon = $0.0000</p>
                <p>Hourly ROI in USD : infinity%</p>
                <p>Daily ROI in USD : infinity%</p>
                <p>3 days ROI in USD : infinity%</p>
              </div>
            </Col>
          )
        })}
      </Row>
    </BodyWrapper>
  )
}
