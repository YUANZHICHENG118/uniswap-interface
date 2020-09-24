import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

export const BodyWrapper = styled.section`
  background-position: left bottom;
  background-size: cover;
  position: relative;
  overflow: hidden;
  width: 100%;
  .container {
    padding-bottom: 50px;
    .certificate {
      text-align: center;
      .blue_dark_bg {
        display: inline-block;
        border-radius: 10px;
        color: white;
        padding: 10px;
        background-color: ${({ theme }) => theme.primary4};
        ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size:14px;
      `};
        .code {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          .iconfont {
            margin-left: 10px;
          }
        }
        .token-url {
          width: 100%;
          color: #ffcb68;
        }
        span {
          color: ${({ theme }) => theme.text1};
        }
      }
    }
    .banner_text {
      h1 {
        color: ${({ theme }) => theme.text1};
        font-weight: bold;
        margin-bottom: 25px;
        text-align: center;
      }
      p {
        color: ${({ theme }) => theme.text1};
        margin-bottom: 30px;
        text-align: center;
        word-break: break-word;
      }
    }
  }
`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function HomeSection() {
  return (
    <BodyWrapper>
      <div className="container">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="banner_text text_md_center">
              <h1>Zebra DeFi</h1>
              <p>让我们一起养斑马，有邀请奖励的斑马</p>
            </div>
          </Col>
        </Row>
        <div className="certificate">
          <div className="wow blue_dark_bg banner_token col-lg-6">
            <a href=" " className="token-url">
              <span>ZFI通证:</span>
              <span className="code">
                <span>TFHyQvBcqMeL5yq7y1dHJutzZX4YqLRzhe</span>
                <span className="iconfont icon-copy"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}
