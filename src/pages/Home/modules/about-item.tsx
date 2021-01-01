import React from 'react'
//components
import { ButtonWhite } from '../../../components/Button'


export default function AboutItem() {
  return (
    <div className="col-lg-7 col-12">
      <div className="about bgwrap pl-lg-5 pl-4 pr-lg-5 pt-lg-5 pb-lg-5 pr-4 pt-4 pb-4">
        <div className='pl-0 pl-lg-3'>
          <h6>关于Metastable Capital</h6>
          <div className="content">
            MetaStable总部设在旧金山，由Naval Ravikant于2015年创立，目前管理资金规模超过27亿美金。 MetaStable
            Capital目前持有ETH超过50万个。
          </div>
          <div className="bottom">
            <div>
              <span className="themeColor">Super Mario ETH 2.0</span>计划
            </div>
            <div>由全球前十的加密数字基金MetaStable Capital推出</div>
          </div>
          <div className="row justify-content-end">
            <ButtonWhite className="col-lg-3 col-12" style={{ borderRadius: '24px', height: '48px' }}>
              了解更多
            </ButtonWhite>
          </div>
        </div>
      </div>
    </div>
  )

}
