/**
 *@desc 分享奖励
 *@date 2021/1/1 10:17 AM
 */
import React from 'react'
//images
import smallDevice from '../../assets/images/mario/small-device.png'
//components
import Title1 from './modules/title1'
// /styles
import { ShareWrap, ShareItem, RateItemWrap, ProfitWrap } from './styles'
export default function ShareReward() {
  return (
    <ShareWrap>
      <Title1 imgType="1" title="分享奖励" subTitle="显示你的收益，并可将利润提取到钱包" />
      <div className="flex-column">
        <ShareItem className="flex-between row no-gutters">
          <div className="left col-6">
            <div className="tag">
              <b className="themeColor">1</b>
              <dl>
                <dt>分享收益</dt>
                <dd>可获得直接分享和间接分享收益</dd>
              </dl>
            </div>
            <div className="rates row no-gutters">
              <RateItemWrap className="col-6">
                <div className="value">
                  <b>8</b>
                  <span>%</span>
                </div>
                <div className="desc">直接分享</div>
              </RateItemWrap>
              <RateItemWrap className="col-6">
                <div className="value">
                  <b>4</b>
                  <span>%</span>
                </div>
                <div className="desc">间接分享</div>
              </RateItemWrap>
            </div>
          </div>
          {/*我的分享收益*/}
          <div className="col-lg-6 col-xs-12">
            <ProfitWrap className="bgwrap">
              <div className="title">
                <img src={smallDevice} alt="" />
                我的分享收益
              </div>
              <div className="middle">
                <b className="themeColor">16633</b>
                <span>USDT</span>
              </div>
              <div className='bottom row'>
                <div className='bottom-item col-5'>
                  <div><b className='grey'>我的直接分享收益</b></div>
                  <div><span className='value'>812.00</span><span className='grey'>USDT</span></div>
                </div>
                <div className='bottom-item col-6 offset-1'>
                  <div><b className='grey'>我的直接分享收益</b></div>
                  <div><span className='value'>812.00</span><span className='grey'>USDT</span></div>
                </div>
              </div>
            </ProfitWrap>
          </div>
        </ShareItem>
        <ShareItem className="flex-between row no-gutters">
          <div className="left col-lg-6 col-xs-12">
            <div className="tag">
              <b className="themeColor">2</b>
              <dl>
                <dt>挖矿分润</dt>
                <dd>被分享者提取收益即可获得</dd>
              </dl>
            </div>
            <div className="rates row no-gutters">
              <RateItemWrap className="col-4">
                <div className="value">
                  <b>8</b>
                  <span>%</span>
                </div>
                <div className="desc">1级收益</div>
              </RateItemWrap>
              <RateItemWrap className="col-4">
                <div className="value">
                  <b>4</b>
                  <span>%</span>
                </div>
                <div className="desc">1级收益</div>
              </RateItemWrap>
              <RateItemWrap className="col-4">
                <div className="value">
                  <b>1</b>
                  <span>%</span>
                </div>
                <div className="desc">3级收益</div>
              </RateItemWrap>
            </div>
          </div>
          {/*我的分润收益*/}
          <div className="col-lg-6 col-xs-12">
            <ProfitWrap className="bgwrap">
              <div className="title flex-between align-items-center">
                <div>
                  <img src={smallDevice} alt="" />
                  我的分润收益
                </div>
                <div className="themeColor">LV .1</div>
              </div>
              <div className="middle">
                <b className="themeColor">16633</b>
                <span>USDT</span>
              </div>
              <div className='bottom flex-between'>
                <p className='tip'>当被分享者获得收益时，您也将获得不同比例收益</p>
                <button className="btn btn-default">升级设备</button>
              </div>
            </ProfitWrap>
          </div>
        </ShareItem>
      </div>
    </ShareWrap>
  )
}
