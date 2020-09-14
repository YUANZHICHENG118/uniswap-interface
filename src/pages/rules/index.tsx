import React from 'react'
import styled from 'styled-components'
import FarmTop from '../Farms/menuTop'
import titleImg from '../../assets/images/farm/logo.png'
import { contractList, ITokens, mainContract } from '../../utils/tron'
const trxBlock="https://tronscan.org/#/contract/";
export const BodyWrapper = styled.div`
  padding: 30px 200px;
  .ruleBox {
    text-align: left;
    border: 2px solid #aa8592;
    border-radius: 12px;
    padding: 24px;
    margin: 0 auto;
    h3 {
    font-size: 18px;
    line-height: 20px;
    padding: 15px 0;
    color: #000;
    font-weight: 700;
}
    h2 {
    color: #000;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    padding: 30px 0;
}
    p {
      color: #444;
      font-size: 20px;
      line-height: 20px;
      font-weight: 600;
      margin: 0;
      padding: 2px 0;
      a{
      display:block;
      }
    }
    .address {
    margin-bottom: 10px;
}
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Rules() {
  return (
    <BodyWrapper>
      <FarmTop imgUrl={titleImg} h1Text="Rules" />
      <div className="ruleBox">
        <p>
          {mainContract.symbol} will be distributed in the sprit of YFI: no pre-mine, no founder shares, no VC interests - simply
          equal-opportunity staking distribution to attract a broad and vision-aligned community to steward the future
          of the protocol and token.
        </p>
        <h2>Regarding Delays</h2>
        <p className="question">Q: Why there are delays in updating the numbers?</p>
        <p className="anwser">
          A: On opening the website, the website will try to talk with TronLink to get the numbers. Tronlink itself has
          delays in displaying the assets, the website can only show updated numbers once Tronlink is updated.
        </p>
        <h2>Pools</h2>
        <p>USDJ 500</p>
        <p>PEARL 500</p>
        <p>TAI 500</p>
        <p>JST 500</p>
        <p>JFI 500</p>
        <p>DRAGON/TRX LP 2500</p>
        <p>BALL 2000</p>
        <p>BALL/TRX LP 1000</p>
        <p>USDT 1000</p>
        <p>SUN 500</p>
        <p>500 Reserved for early justswap liquidity</p>
        <p className="addingPoolNote"> Adding more pools will subject to community vote.</p>
        <h2>Address</h2>
        <div>
          <h3>{mainContract.symbol}</h3>
          <p> Token Address:
            <a href={`${trxBlock}${mainContract.address}`} target="_blank" rel="noopener noreferrer">
              {mainContract.address}
            </a>
          </p>

          {
            contractList().map((item:ITokens)=>{
              return <>
                <h3>{item.symbol}</h3>
                <p className="address">
                  Token Address :
                  <a href={`${trxBlock}${item.address}`} target="_blank" rel="noopener noreferrer">
                    {item.address}
                  </a>
                </p>
                <p className="address">
                  Pool Address:
                  <a href={`${trxBlock}${item.poolAddress}`} target="_blank" rel="noopener noreferrer">
                    {item.poolAddress}
                  </a>
                </p>
              </>
            })
          }


        </div>
        <h2>Distribution Timetable</h2>
        <p>
          Each pool has 45 days for mining since its start. Every three days, the mineable DRAGON tokens will reduce in
          half for the next stage, and there’re totally 15 mining stages. This is to encourage miners and communities to
          participate mining early on to get maximum rewards in DRAGON.
        </p>
        <h2>Governance</h2>
        <p>
          The rest of the DRAGON token would be locked in the contract and entirely governed by DRAGON holders, for
          example, vote for adding more distribution pools.
        </p>
      </div>
    </BodyWrapper>
  )
}
