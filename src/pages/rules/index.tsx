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

          <p>  1. The total number of cocks is 10000, and there is no additional issue;</p>
          <p>  2. All tokens will be issued within 12 weeks, which will be divided into three stages. The first stage will open the pledge currency: usdt, usdj, TRX is divided into four weeks of equal release; the second stage starts from the fifth week, opening three groups of liquidity Mining: Cock LP / JFI LP / Sun LP; among them, the liquidity mining of cock LP lasts for 8 weeks (from the fifth week to the twelfth week), and the mining income is determined by the proportion of mining liquidity and the mining duration;</p>
          <p>  3. In the third stage, 10% of cocks (i.e. 1000 pieces) will be reserved, and the specific liquidity currency pairs will be determined by the community;</p>
          <p>  4. The team will retain 10% of all cocks as development fund“</p>


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
          Each pool has 45 days for mining since its start. Every three days, the mineable {mainContract.symbol} tokens will reduce in
          half for the next stage, and there’re totally 15 mining stages. This is to encourage miners and communities to
          participate mining early on to get maximum rewards in {mainContract.symbol}.
        </p>
        <h2>Governance</h2>
        <p>
          The rest of the {mainContract.symbol} token would be locked in the contract and entirely governed by {mainContract.symbol} holders, for
          example, vote for adding more distribution pools.
        </p>
      </div>
    </BodyWrapper>
  )
}
