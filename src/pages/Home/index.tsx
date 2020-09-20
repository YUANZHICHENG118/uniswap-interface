import React from 'react'
import styled from 'styled-components'
import titleImg from '../../assets/images/farm/logo.png'
import DataSet from './DataSet'
import StatsSet from './StatsSet'
import { mainContract } from '../../utils/tron'
import { useTranslation } from 'react-i18next'

export const BodyWrapper = styled.div`
  padding: 30px 0;
  min-height: calc(100vh - 144px);
  width:100% 
  .greating {
    margin-bottom: 50px;
    text-align:center 
    ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 30px;
    img{
    width: 100px;
    }
    h1{
    font-size: 30px;
    line-height: 35px;
    }
    h3 {
    font-size: 16px;
    a{
    word-break: break-all;
    }
    }
  `}
    h1 {
      font-size: 36px;
      font-weight: 700;
      color: #5b2639;
      margin-bottom: 0;
    }
    h3 {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 10px;
      color: #aa8592;
    }
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Home() {
  const { t } = useTranslation()
  return (
    <BodyWrapper>
      <div className="greating">
        <img src={titleImg} alt="ball" width="180px"/>
        <h1>{t('greet')}</h1>
        <h3>{t('greet-small', { label: mainContract.symbol })}</h3>
        <h3>
          {t('contract-verified', { name: mainContract.symbol })}
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>{t('here')}</a>
        </h3>
        <h3 style={{ color: 'rgb(91, 38, 57)', fontWeight: 700 }}>{t('token_info')}</h3>
        <h3 style={{ color: 'rgb(91, 38, 57)', fontWeight: 700 }}>
          {mainContract.symbol} {t('address')}:
          <a className="ellipsis" href="" style={{ color: 'rgb(91, 38, 57)', marginLeft: '10px' }}>
            {mainContract.address}
          </a>
        </h3>
      </div>
      {/*account*/}
      <DataSet/>
      <StatsSet/>
    </BodyWrapper>
  )
}
