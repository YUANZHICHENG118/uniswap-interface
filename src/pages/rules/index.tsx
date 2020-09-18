import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import FarmTop from '../Farms/menuTop'
import titleImg from '../../assets/images/farm/logo.png'
import { contractList, ITokens, mainContract } from '../../utils/tron'

const trxBlock = 'https://tronscan.org/#/contract/'
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
    line-height: 20px;
    font-weight: 700;
    padding: 30px 0;
}
    p {
      color: #444;
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      margin: 0;
      padding: 2px 0;
      a{
      display:block;
      }
    }
    .address {
    margin-bottom: 5px;
}
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Rules() {
  const { t } = useTranslation()
  return (
    <BodyWrapper>
      <FarmTop imgUrl={titleImg} h1Text={t('rules')}/>
      <div className="ruleBox">

        <h3> Drinking Rules</h3>

        <p> COCKTAIL(COCK) will be distributed in the spirit of YFI: there is no pre-mine, no founder shares, no VC
          interests - simply equal-opportunity staking distribution to attract a broad and vision-aligned community to
          steward the future of the protocol and token. COCK is built on the TRON network.</p>

        <h3> How can I mine COCK?</h3>
        <p> You will need TronLink to mine COCK. Choose your favorite cocktail and click on ‘Stake’. Wait for a few
          seconds and you will see the ‘Success’ notice.</p>

        <h3>Regarding Delays</h3>
        <p> Why are there delays in updating the numbers?</p>

        <p> On opening the website, the website will try to talk with TronLink to get the numbers. Tronlink itself has
          delays in displaying the assets, the website can only show updated numbers once Tronlink is updated.</p>

        <h3> When did the pool begin?</h3>
        <p> For the first round, the #USDJ, #JFI and #TRX begins on 20th Sep 2020 2:00 PM UTC time.</p>

        <h3>How long will the mining last?</h3>
        <p> Each round lasts for 14 days since it starts. There are three rounds in total. While for #COCK/TRX pool, it
          lasts for 28 days since it starts from the second round.</p>

        <h3> Will COCK be listed on Justswap?</h3>
        <p> Yes.</p>

        <h2> Pools</h2>

        <p> FIrst Round - 4000</p>
        <p> USDJ 1500</p>
        <p> JFI 1500</p>
        <p> TRX 1000</p>

        <p> Second Round - 5000</p>
        <p>COCKTAIL/TRX LP 3500</p>
        <p> JFI/TRX LP 750</p>
        <p> SUN/TRX LP 750</p>

        <p> 1000 Reserved for future pool (the third round)</p>
        <p>Adding more pools will be subject to community vote.</p>


        <h3>Address</h3>
        <div>
          <p>{mainContract.symbol}</p>
          <p> Token Address:
            <a href={`${trxBlock}${mainContract.address}`} target="_blank" rel="noopener noreferrer">
              {mainContract.address}
            </a>
          </p>

          {
            contractList().map((item: ITokens) => {
              return <>
                <p>{item.symbol} {item.lp?'LP':''}</p>
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
        <h3>Distribution Timetable</h3>
        <p>The total supply of COCK token is fixed at 10,000 with no extra supply. All tokens will be distributed to
          miners within 12 weeks.</p>

        <h3> Development Fund</h3>
        <p>In order to maintain the project and bring more pools & features, 10% of all mined COCK token rewards will be
          set aside for the development fund.</p>

        <h3> Governance</h3>
        <p>The rest of the COCK token would be locked in the contract and entirely governed by COCK holders, for
          example, vote for adding more distribution pools.</p>

        <h3> How does the earning calculated?</h3>
        <p>It’s equally distributed through time. For example, each hour USDJ pool generates 1500/28/24 = 2.232142 COCK.
        </p>

      </div>
    </BodyWrapper>
  )
}
