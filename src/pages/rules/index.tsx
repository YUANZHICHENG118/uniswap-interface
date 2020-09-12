import React from 'react'
import styled from 'styled-components'
import FarmTop from '../Farms/menuTop'

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
      <FarmTop imgUrl={''} h1Text="Rules" />
      <div className="ruleBox">
        <p>
          DRAGON will be distributed in the sprit of YFI: no pre-mine, no founder shares, no VC interests - simply
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
          <h3>DRAGON</h3>
          <p> Token Address:
            <a href="" target="_blank" rel="noopener noreferrer">
              TYLPtEvANesoVWEKKzbDFnfuiKdaRNkpmb
            </a>
          </p>
          <h3>DRAGON/TRX LP</h3>
          <p className="address">
            Pool Address:
            <a href="" target="_blank" rel="noopener noreferrer">
              TC7CyQt6MU5AGnomxPSC51G1HbzCJRFvpk
            </a>
          </p>
          <h3>BALL/TRX LP</h3>
          <p className="address">
            Pool Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TP6eUbxGLsBxc6HwMziEy6TTy21dXjofZ8
            </a>
          </p>
          <h3>BALL</h3>
          <p className="address">
            Token Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TWWqNMyDTB3yhJ1bhz1Rwow1AVTfw46rqu
            </a>
          </p>
          <h3>USDJ</h3>
          <p className="address">
            Token Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT
            </a>
          </p>
          <p>
            Pool Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TW49qje1BEcrQ13w5orRwrb8hxP7JhyHZN
            </a>
          </p>
          <h3>USDJ</h3>
          <p className="address">
            Token Address :<a rel="noopener noreferrer">TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT</a>
          </p>
          <p>
            Pool Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TW49qje1BEcrQ13w5orRwrb8hxP7JhyHZN
            </a>
          </p>
          <h3>PEARL</h3>
          <p className="address">
            Token Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TGbu32VEGpS4kDmjrmn5ZZJgUyHQiaweoq
            </a>
          </p>
          <p>
            Pool Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TWJGyUGgYb283CWchS4o8iBnH8xWSdFH81
            </a>
          </p>
          <h3>TAI</h3>
          <p className="address">
            Token Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TRwS7apsNdRGzMBfhB2hVC4RhqfubUYZ8P
            </a>
          </p>
          <p>
            Pool Address :{' '}
            <a href="" target="_blank" rel="noopener noreferrer">
              TSPdPBHBQpnWC7LH5iJvJgi8yPD7MN7m7u
            </a>
          </p>
          <h3>JST</h3>
          <p className="address">
            Token Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9
            </a>
          </p>
          <p>
            Pool Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              THfXJt2o7qY2bNDUM5xGipGVjDoga6M24Q
            </a>
          </p>
          <h3>JFI</h3>
          <p className="address">
            Token Address :
            <a href="" target="_blank" rel="noopener noreferrer">
              TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha
            </a>
          </p>
          <p>
            Pool Address :{' '}
            <a href="" target="_blank" rel="noopener noreferrer">
              TYerCtnmZ93nwVpfy8oWWVafbUnH9oHcZb
            </a>
          </p>
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
