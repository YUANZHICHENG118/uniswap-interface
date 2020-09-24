import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.section`
  position: relative;
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
            {[1, 1, 1, 1].map(() => {
              return (
                <div className="col p-1">
                  <div
                    className="bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp"
                    data-animation="fadeInUp"
                    data-animation-delay="0s"
                  >
                    <h5>Total Lock-ups</h5>
                    <span className="total-lock show-data">--.--</span>
                    <span>ZFI</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}
