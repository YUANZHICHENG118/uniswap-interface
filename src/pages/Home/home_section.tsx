import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { mainToken } from '../../constants/index'
import Copy from '../../components/AccountDetails/Copy'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <BodyWrapper>
      <div className="container">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="banner_text text_md_center">
              <h1>{mainToken.name} DeFi</h1>
              <p>{t("index1")}</p>
            </div>
          </Col>
        </Row>
        <div className="certificate">
          <div className="wow blue_dark_bg banner_token col-lg-6">

            <span>{mainToken.symbol}{t("index2")}:</span>
            <span className="code">
               <a href={`https://etherscan.io/address/${mainToken.address}`}
                  className="token-url" target="_blank" rel="noopener noreferrer"> <span>{mainToken.address}</span></a>
                <Copy toCopy={mainToken.address}>
                  </Copy>

              </span>

          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}
