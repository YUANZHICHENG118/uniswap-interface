import React from 'react'
import styled from 'styled-components'

import XpoolItem from './xpoolItem'

export const BodyWrapper = styled.section`
  position: relative;
  .income {
    .pool-news {
      background-color: rgba(255, 255, 255, 0.1);
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
      }
      .withdraw {
        width: 100%;
        margin: 0 0 10px 0 !important;
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
        color: #fff;
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
            <h4 className="animation animated fadeInUp">ZFI POOL</h4>
            <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s">
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
            <div className="token_sale res_md_mt_10 animation p-1 w-100 animated fadeInUp">
              <div className="tk_countdown bg-white-tran text-center animation animated fadeInUp">
                <div className="tk_counter_inner inner-wrapper">
                  <div className="text-center mb-2">
                    You Balance: <div className="zfi-balance">--.-----</div> ZFI
                  </div>
                  <a
                    className="btn btn-default btn-radius withdraw animation active-zfi animated fadeInUp"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
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
            <div className="pool-news animation mt-0 animated fadeInUp">
              <div className="link-name pool-content">Your Referral Link：</div>
              <div className="link-content pool-content">
                Please install tronlink wallet, if installed, please login！{' '}
              </div>
              <div className="pool-wrapper">
                <a
                  className="btn btn-default btn-radius withdraw animation pool-width btn-copy animated fadeInUp"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
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
