import { ChainId } from '@uniswap/sdk'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'
import Row from '../Row'

import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo.png'
import Wordmark from '../../assets/images/logoTitle.png'
import WordmarkDark from '../../assets/images/logoTitle.png'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
// import Settings from '../Settings'
//import Menu from '../Menu'
import Lan from '../Lan'
import { RowBetween } from '../Row'
import Web3Status from '../Web3Status'
//import VersionSwitch from './VersionSwitch'
import { useTranslation } from 'react-i18next'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 0 0 5px;
    width: calc(100%);
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`
const NavElements = styled.nav`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    position:absolute;
    top:20px;
    width: 100%;
    overflow: auto;
    left: 0;
    right: 0
 `};
`
//
// const LogoElements = styled.nav`
//   display: flex;
//   align-items: center;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//
//  `};
// `

const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
  color: #808080;
  &.active {
    color: rgb(209, 108, 0);
  }
`
const NavTitle = styled.a`
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
  color: rgb(170, 149, 133);
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const TitleText = styled(Row)`
  width: fit-content;
  white-space: nowrap;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`
// const UniIconMobile = styled.div`
//   transition: transform 0.3s ease;
//   :hover {
//     transform: rotate(-5deg);
//   }
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//    display: block;
//     img {
//       width: 3.5rem;
//       margin-top:20px
//     }
//   `};
// `
const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    img {
      margin-top:10px 
      width: 7.5rem;
      display: none;
    }
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    //flex-direction: column;
    align-items: flex-end;
    margin-top:45px;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
  `};
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [isDark] = useDarkModeManager()

  return (
    <HeaderFrame>
      <div className="container">
        <RowBetween padding="1rem 1rem 0 1rem">
          <NavElements>
            {isMobile ? (
              ''
            ) : (
              <HeaderElement>
                <Title href=".">
                  <UniIcon>
                    <img src={isDark ? LogoDark : Logo} alt="logo" height={30} />
                  </UniIcon>
                  <TitleText className='ml-2'>
                    <img
                      height={30}
                      src={isDark ? WordmarkDark : Wordmark}
                      alt="logo"
                    />
                  </TitleText>
                </Title>
              </HeaderElement>
            )}

            <StyledNavLink to={'/home'}>{t('home')}</StyledNavLink>
            <StyledNavLink to={'/menu'}>{t('pizza')}</StyledNavLink>
            <StyledNavLink to={'/swap'}>{t('swap')}</StyledNavLink>
            {/*<StyledNavLink  to={'/about'} >{t('about')}</StyledNavLink>*/}
            <NavTitle
              href={'javascript:void(0)'}
              onClick={() => {
                alert(t('wait'))
              }}
            >
              NFT
            </NavTitle>
            {/*认购*/}
            {/*<StyledNavLink  to={'/subscription'} >{t('subscription')}</StyledNavLink>*/}
          </NavElements>
          {/*<LogoElements>*/}
          {/*<UniIconMobile style={{display:isMobile?'block':'none'}}>*/}
          {/*<img src={isDark ? LogoDark : Logo} alt="logo" height={55} width={40} />*/}
          {/*</UniIconMobile>*/}
          {/*</LogoElements>*/}

          <HeaderControls>
            <HeaderElement>
              <TestnetWrapper>
                {!isMobile && chainId && NETWORK_LABELS[chainId] && (
                  <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>
                )}
              </TestnetWrapper>
              <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
                {account && userEthBalance ? (
                  <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                    {userEthBalance?.toSignificant(4)} ETH
                  </BalanceText>
                ) : null}
                <Web3Status />
              </AccountElement>
            </HeaderElement>
            <HeaderElementWrap>
              <Lan />
              {/*<VersionSwitch />*/}
              {/*<Settings />*/}
              {/*<Menu />*/}
            </HeaderElementWrap>
          </HeaderControls>
        </RowBetween>
        {/*{
        isMobile?<HeaderElement>
          <Title href=".">
            <UniIcon>
              <img src={isDark ? LogoDark : Logo} alt="logo" height={120} />
            </UniIcon>
            <TitleText>
              <img style={{ marginLeft: '4px', marginTop: '4px' }} height={30} src={isDark ? WordmarkDark : Wordmark} alt="logo" />
            </TitleText>
          </Title>
        </HeaderElement>:null
      }*/}
      </div>
    </HeaderFrame>
  )
}
