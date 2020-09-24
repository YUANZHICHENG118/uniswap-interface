import React from 'react'
import styled from 'styled-components'

import XpoolItem from './xpoolItem'

export const BodyWrapper = styled.section`
  position: relative;
  .title_default_light {
    p {
      margin-bottom: 30px;
    }
  }
  .income {
    .middleBG {
      background-color: ${({ theme }) => theme.middleBG};
    }
    .tk_countdown.bg-white-tran {
      padding: 20px 10px;
    }
    .token_sale_box_white {
      background-color: ${({ theme }) => theme.middleBG};
      padding: 20px 15px 15px;
      colorr: ${({ theme }) => theme.text1};
    }
    .pool-news {
      padding: 20px 40px;
      border-radius: 5px;
      .pool-content {
        color: #ffcb68;
        word-wrap: break-word;
        word-break: normal;
        font-size: 16px;
        margin: 10px 0;
      }
      .link-name {
        color: white;
      }
      .link-content {
        word-break: break-all;
        cursor: pointer;
      }
      .pool-wrapper {
        text-align: center;
        margin-top: 30px;
        .withdraw {
          margin: 0 0 10px 0 !important;
          padding: 0;
          height: 54px;
          line-height: 54px;
          color: ${({ theme }) => theme.text1};
          border-radius: 27px;
          background: ${({ theme }) => theme.primary3};
        }
      }
      @media (min-width: 960px) {
        .pool-width {
          width: 300px;
        }
      }
    }
    .inner-wrapper {
      max-width: none;
      clear: both;
    }
    .tk_counter_inner {
      .mb-2 {
        color: ${({ theme }) => theme.text1};
      }
      .zfi-balance {
        color: #ffcb68;
        display: inline-block;
      }
      .withdraw {
        width: 100%;
        margin: 0 0 10px 0 !important;
      }
    }
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Xpool() {
  return (
    <BodyWrapper>
      <div className="container">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
          <div className="title_default_light title_border text-center">
            <h4 className="wow animation animated fadeInUp">ZFI POOL</h4>
            <p className="wow animation animated fadeInUp " data-wow-animation="fadeInUp" data-wow-delay="0.4s">
              Stake ZFI, Earn ZFI
            </p>
          </div>
        </div>
        <div className="income">
          <div className="row row-cols-1 row-cols-lg-2 m-n1">
            {[1, 1, 1, 1].map(() => (
              <XpoolItem />
            ))}
          </div>
          <div className="row my-1 mx-n1">
            <div className="token_sale res_md_mt_10 p-1 w-100">
              <div className="tk_countdown bg-white-tran text-center middleBG">
                <div className="tk_counter_inner inner-wrapper">
                  <div className="text-center mb-2">
                    You Balance: <div className="zfi-balance">--.-----</div> ZFI
                  </div>
                  <a href="/" className="btn btn-default btn-radius withdraw  active-zfi">
                    Registration with 100 TRX!
                    <i className="ion-ios-arrow-thin-right btn-radius"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-1 row row-cols-1 row-cols-lg-3 m-n1">
            {[1, 1, 1].map(() => (
              <XpoolItem />
            ))}
          </div>
          <div className="my-1 pt-1">
            <div className="pool-news mt-0 middleBG">
              <div className="link-name pool-content">Your Referral Link：</div>
              <div className="link-content pool-content">
                Please install tronlink wallet, if installed, please login！{' '}
              </div>
              <div className="pool-wrapper">
                <a href='/' className="btn btn-default btn-radius withdraw  pool-width btn-copy">
                  copy
                  <i className="ion-ios-arrow-thin-right btn-radius "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}
