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
      margin: 0;
    }
    p {
      color: #444;
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      margin: 0;
      padding: 2px 0;
      a {
        display: block;
        word-break: break-all;
      }
    }
    .address {
      margin-bottom: 5px;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToMiddle`
  padding: 30px 0;
  .ruleBox {
  p{
  line-height:25px;
  }
  }
  `}
  
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Rules() {
  const { t } = useTranslation()
  return (
    <BodyWrapper>
      <FarmTop imgUrl={titleImg} h1Text={t('rules')} />
      <div className="ruleBox">
        <h3>{t('Drinking-rules')}</h3>
        <p>{t('distribute-desc')}</p>
        <h3>{t('how-mine')}?</h3>
        <p>{t('res-how-mine')}</p>
        <h3>{t('aboout-regarding')}</h3>
        <p>{t('why-aboout-regarding')}?</p>
        <p>{t('res-why-aboout-regarding')}</p>
        <h3>{t('when-begin')}?</h3>
        <p>{t('re-when-begin')}</p>
        <h3>{t('how-long-last')}?</h3>
        <p>{t('re-how-long-last')}</p>
        <h3>{t('will-list-swap')}?</h3>
        <p>{t('yes')}</p>
        <h3>{t('Pools')}</h3>
        <p>{t('first-round')} - 4000</p>
        <p> USDJ 1500</p>
        <p> JFI 1500</p>
        <p> TRX 1000</p>
        <p>{t('second-round')} - 5000</p>
        <p>COCKTAIL/TRX LP 3500</p>
        <p> JFI/TRX LP 750</p>
        <p> SUN/TRX LP 750</p>
        <p>{t('future-reserved')}</p>
        <p>{t('add-more')}</p>
        <h3>{t('address')}</h3>
        <div>
          <p>{mainContract.symbol}</p>
          <p>
            {t('tokenAddress')}:
            <a href={`${trxBlock}${mainContract.address}`} target="_blank" rel="noopener noreferrer">
              {mainContract.address}
            </a>
          </p>
          {contractList().map((item: ITokens) => {
            return (
              <>
                <p>
                  {item.symbol} {item.lp ? 'LP' : ''}
                </p>
                <p className="address">
                  {t('tokenAddress')} :
                  <a href={`${trxBlock}${item.address}`} target="_blank" rel="noopener noreferrer">
                    {item.address}
                  </a>
                </p>
                <p className="address">
                  {t('poolAddress')}:
                  <a href={`${trxBlock}${item.poolAddress}`} target="_blank" rel="noopener noreferrer">
                    {item.poolAddress}
                  </a>
                </p>
              </>
            )
          })}
        </div>
        <h3>{t('distribution-timetable')}</h3>
        <p>{t('re-distribution-timetable')}</p>
        <h3>{t('Development-fund')}</h3>
        <p>{t('re-Development-fund')}</p>
        <h3>{t('Governance')}</h3>
        <p>{t('re-governance')}</p>
        <h3>{t('how-calculated')}?</h3>
        <p>{t('res-how-calculated')} 1500/28/24 = 2.232142 COCK.</p>
      </div>
    </BodyWrapper>
  )
}
