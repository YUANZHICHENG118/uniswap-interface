import { ChainId } from '@uniswap/sdk'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'
//import Row  from '../Row'

import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo.png'
//import Wordmark from '../../assets/images/logoTitle.png'
//import WordmarkDark from '../../assets/images/logoTitle.png'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
//import Settings from '../Settings'
//import Menu from '../Menu'
import Lan from '../Lan'
import  { RowBetween } from '../Row'
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
    padding: 0 0 40px;
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
    bottom:8px;
 `};
`

const StyledNavLink = styled(NavLink)`
    font-weight: 700;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    color: rgb(170, 149, 133);
    &.active {
    color: rgb(209, 108, 0);
}
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
${({ theme }) => theme.mediaWidth.upToExtraSmall`

    display: none;
  `}
  :hover {
    cursor: pointer;
  }
  
`
const NavTitle=styled.a`
   font-weight: 700;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    color: rgb(170, 149, 133);
`

// const TitleText = styled(Row)`
//   width: fit-content;
//   white-space: nowrap;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     display: none;
//   `};
// `

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
      width: 3.5rem;
      margin-top:20px
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

  console.log("userEthBalance====",userEthBalance)
  return (
    <HeaderFrame>
      {/*<UniIconMobile style={{display:isMobile?'block':'none'}}>*/}
        {/*<img src={isDark ? LogoDark : Logo} alt="logo" height={55} width={40} />*/}
      {/*</UniIconMobile>*/}
      <RowBetween  padding="1rem 1rem 0 1rem">

        <NavElements>
          <HeaderElement>
            <Title href=".">
              <UniIcon>
                <img src={isDark ? LogoDark : Logo} alt="logo" height={55} width={55} />
              </UniIcon>
              {/*<TitleText>*/}
                {/*<img style={{ marginLeft: '4px', marginTop: '4px' }} height={30} src={isDark ? WordmarkDark : Wordmark} alt="logo" />*/}
              {/*</TitleText>*/}
            </Title>
          </HeaderElement>
          <StyledNavLink  to={'/home'} >{t('home')}</StyledNavLink>
          <StyledNavLink to={'/menu'}>{t('pool')}</StyledNavLink>
          <StyledNavLink  to={'/swap'} >{t('swap')}</StyledNavLink>
          <StyledNavLink  to={'/air'} >{t('bear')}</StyledNavLink>
          <StyledNavLink  to={'/about'}>{t('about')}</StyledNavLink>
          <NavTitle target={"_blank"} href={"http://202.46.44.8:8081/"}>V1</NavTitle>

        </NavElements>
        <HeaderControls>
          <HeaderElement>
            <TestnetWrapper>
              {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
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
    </HeaderFrame>
  )
}
