import { ChainId } from '@uniswap/sdk'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'

import Logo from '../../assets/images/farm/logo.png'
import LogoDark from '../../assets/svg/logo_white.svg'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'

import Row from '../Row'
import Web3Status from '../Web3Status'
import VersionSwitch from './VersionSwitch'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
  .myWallet {
    display: inline-block;
    position: absolute;
    top: 25px;
    right: 150px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    padding: 0 16px;
    line-height: 36px;
    height: 36px;
    border-radius: 12px;
    box-shadow: 4px 4px 8px #efc6ed, -8px -8px 16px #e7d7ea;
    span{
     color: ${({ theme }) =>theme.highLignt};
    }
}
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
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
const Headertabs=styled.div`
    display: inline-block;
    margin-left: 40px;
    a{
    display: inline-block;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    }
    a.active{
    color: ${({ theme }) =>theme.highLignt};
    }
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  img {
    width: 50px;
  }
  span {
    color: #5b2639;
    font-size: 16px;
    font-weight: 700;
    padding: 0 10px;
  }
  :hover {
    cursor: pointer;
  }
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

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
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

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [isDark] = useDarkModeManager()

  // const TronWeb = require('tronweb')
  // const HttpProvider = TronWeb.providers.HttpProvider;
  // const fullNode = new HttpProvider("https://api.trongrid.io");
  // const solidityNode = new HttpProvider("https://api.trongrid.io");
  // const eventServer = new HttpProvider("https://api.trongrid.io");
  // const  privateKey = "3481E79956D4BD95F358AC96D151C976392FC4E3FC132F78A847906DE588C145";
  // const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

  // const tronWeb = window.tronWeb;
  //

  return (
    <HeaderFrame>
      <Row padding="20px 0">
        <Title href=".">
          <img src={isDark ? LogoDark : Logo} alt="logo" />
          <span>Dragon Ball</span>
        </Title>
        <Headertabs>
          <StyledNavLink to={'/home'}>home</StyledNavLink>
          <StyledNavLink to={'/Farms'}>Farms</StyledNavLink>
          <NavTitle href="https://uniswap.org/">About</NavTitle>
        </Headertabs>
        {/*钱包*/}
        <div className="myWallet clickableButton"><span>My Wallet</span></div>
        {/*先隐藏*/}
        <HeaderControls style={{ display: 'none' }}>
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
            <VersionSwitch />
            <Settings />
            <Menu />
          </HeaderElementWrap>
        </HeaderControls>
      </Row>
    </HeaderFrame>
  )
}
