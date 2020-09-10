import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import ImgBall from '../../assets/images/home/ball.png'

export const BodyWrapper = styled.div`
  .dataBox {
    padding: 24px;
    background: #f0e7ea;
    border: 1px solid #efc6ed;
    border-radius: 12px;
    box-shadow: inset 1px 1px 0 #e7d7ea;
    ${({ theme }) => theme.mediaWidth.upToMiddle`
    margin: 5px 0px;
   `}
    img {
      display: block;
      width: 70px;
      height: 70px;
      line-height: 36px;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }
    .ballBalance {
      display: inline-block;
      padding-left: 70px;
    }
    h2 {
      color: #5b2639;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      text-align: left;
      margin: 0;
    }
    p {
      text-align: left;
      font-size: 16px;
      line-height: 16px;
      margin:0;
    }
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function DataSet() {
  return (
    <BodyWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 32 }} justify="center" align="middle">
        <Col xs={24} sm={24} md={10}>
          <div className="dataBox">
            <img src={ImgBall} alt="" />
            <div className="ballBalance">
              <h2>0.000000</h2>
              <p>Dragon Ball Balance</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10}>
          <div className="dataBox">
            <h2>10,000</h2>
            <p>Total Supply</p>
          </div>
        </Col>
      </Row>
    </BodyWrapper>
  )
}
