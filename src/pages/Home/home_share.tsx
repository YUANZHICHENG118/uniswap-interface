/**
 *@desc 分享奖励
 *@date 2021/1/1 10:17 AM
 */
import React from 'react'
//images
import smallDevice from '../../assets/images/mario/small-device.png'
//components
import Title1 from './modules/title1'
import MyFenRunProfit from './modules/my-fenrun'
// /styles
import { ShareWrap, ShareItem, RateItemWrap, ProfitWrap } from './styles'
export default function ShareReward() {
  return (
    <ShareWrap>
      <Title1 imgType="1" title="分享奖励" subTitle="显示你的收益，并可将利润提取到钱包" />
      <div className="flex-column">
        <ShareItem className="flex-between row no-gutters">
          <div className="left col-12 col-lg-6">
            <div className="tag">
              <b className="themeColor">1</b>
              <dl>
                <dt>分享收益</dt>
                <dd>可获得直接分享和间接分享收益</dd>
              </dl>
            </div>
            <div className="rates row no-gutters mb-5 mb-lg-0">
              <RateItemWrap className="col-6">
                <div className="value">
                  <b>8</b>
                  <span>%</span>
                </div>
                <div className="desc">直接分享</div>
              </RateItemWrap>
              <RateItemWrap className="col-6 pl-lg-0 ">
                <div className="value">
                  <b>4</b>
                  <span>%</span>
                </div>
                <div className="desc">间接分享</div>
              </RateItemWrap>
            </div>
          </div>
          {/*我的分享收益*/}
          <div className="col-lg-6 col-12 pl-lg-0  pl-2 pl-sm-4">
            <ProfitWrap className="bgwrap">
              <div className="title">
                <img className='smallImg' src={smallDevice} alt="" />
                我的分享收益
              </div>
              <div className="middle">
                <b className="themeColor">16633</b>
                <span>USDT</span>
              </div>
              <div className='bottom row'>
                <div className='bottom-item col-6 col-lg-5'>
                  <div><b className='grey'>我的直接分享收益</b></div>
                  <div><span className='value'>812.00</span><span className='grey'>USDT</span></div>
                </div>
                <div className='bottom-item col-6 offset-lg-1 offset-0'>
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
            <div className="rates row no-gutters  mb-5 mb-lg-0">
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
          <div className="col-lg-6 col-xs-12 pl-lg-0  pl-2 pl-sm-4">
            <MyFenRunProfit/>
          </div>
        </ShareItem>
      </div>
    </ShareWrap>
  )
}
