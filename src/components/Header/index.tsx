import { ChainId } from '@uniswap/sdk'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
//组件
import { Text } from 'rebass'
import { Modal, Dropdown, Menu } from 'antd'
import Settings from '../Settings'
import MenuList from '../Menu'

// 样式
import styled from 'styled-components'
import { YellowCard } from '../Card'

//图片
import Logo from '../../assets/images/logo.png'
import Ball from '../../assets/images/home/ball.png'
import EnLangImg from '../../assets/images/lang/en.png'
import KoLangImg from '../../assets/images/lang/ko.png'
import ZhLangImg from '../../assets/images/lang/zh.png'

import { useActiveWeb3React } from '../../hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import Web3Status from '../Web3Status'
import VersionSwitch from './VersionSwitch'
import { balanceOf, mainContract } from '../../utils/tron'

const HeaderFrame = styled.div`
  width: 100%;
  .header {
    padding: 20px 0;
    position: relative;
    .flag {
      display: inline-block;
      position: absolute;
      top: 25px;
      right: 30px;
      font-weight: 700;
      font-size: 16px;
      line-height: 36px;
      margin-bottom: 0;
      color: #aa8592;
      cursor: pointer;
      .anticon {
        font-size: 12px;
        margin-left: 5px;
      }
    }
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
      span {
        color: ${({ theme }) => theme.highLignt};
      }
    }
    ${({ theme }) => theme.mediaWidth.upToMiddle`
      padding: 10px 0;
      height: 62px;
    .myWallet {
      top: 13px;
      right: 90px;
      font-size: 14px;
      line-height: 30px;
      height: 30px;
      border-radius: 10px;
    }
    .flag {
      top: 10px;
      right: 0;
    }
  `};
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
const Headertabs = styled.div`
  display: inline-block;
  margin-left: 40px;
  a {
    display: inline-block;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    :hover {
      background-color: #f1dae1;
      cursor: pointer;
      opacity: 0.9;
      color: #aa8592;
    }
  }
  a.active {
    color: ${({ theme }) => theme.highLignt};
  }
  ${({ theme }) => theme.mediaWidth.upToMiddle`
    margin: 10px -20px;
    display: block;
    text-align:center;
    a{
    padding: 5px 10px;
    font-size: 14px;
    }
  `}
`

const Title = styled.a`
  display: inline-block;
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
  ${({ theme }) => theme.mediaWidth.upToMiddle`
  img {
    width: 40px;
  }
  span {
    font-size: 14px;
  }
 `}
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
const WalletBox = styled.div`
  text-align: center;
  h2 {
    text-align: center;
    color: #5b2639;
    font-size: 18px;
    font-weight: 700;
    position: relative;
  }
  img {
    background-color: #f0e7ea;
    font-size: 36px;
    height: 80px;
    width: 80px;
    align-items: center;
    display: flex;
    justify-content: center;
    box-shadow: inset 4px 4px 8px #e2cfd5, inset -6px -6px 12px #f7f2f4;
    border-radius: 40px;
    margin: 70px auto 16px;
    font-style: normal;
  }
  h1 {
    color: #5b2639;
    font-size: 36px;
    font-weight: 700;
    padding: 0;
    line-height: 40px;
    margin-bottom: 0;
    margin-top: 40px;
  }
  p {
    color: #80495d;
    font-size: 16px;
    line-height: 18px;
  }
  .cancle {
    margin: 60px 20px 20px;
    align-items: center;
    background-color: #f0e7ea;
    box-shadow: 4px 4px 8px #e2cfd5, -8px -8px 16px #f7f2f4;
    color: #d1004b;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    height: 56px;
    justify-content: center;
    width: calc(100% - 40px);
    border-radius: 12px;
  }
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
  const [balance,setBalance]=useState<number>(0.000000);

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  useEffect(()=>{
    setTimeout(findBalance,500)
  })
  const findBalance=()=>{
    balanceOf(mainContract.address).then((data:any)=>{
      setBalance(data/Math.pow(10,mainContract.decimals));
    })
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <span><img src={EnLangImg} alt="EnLangImg" width='25px' />&nbsp;EN</span>
      </Menu.Item>
      <Menu.Item>
        <span><img src={ZhLangImg} alt="ZhLangImg" width='25px'/>&nbsp;CN</span>
      </Menu.Item>
      <Menu.Item>
        <span><img src={KoLangImg} alt="KoLangImg" width='25px'/>&nbsp;KO</span>
      </Menu.Item>
    </Menu>
  )
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <HeaderFrame>
      <div className="header">
        <Title href=".">
          <img src={Logo} alt="logo" style={{width:'7rem'}}/>

        </Title>
        <Headertabs>
          <StyledNavLink to={'/home'}>Home</StyledNavLink>
          <StyledNavLink to={'/Farms'}>Farms</StyledNavLink>
          <StyledNavLink to={'/Rules'}>Rules</StyledNavLink>
          <NavTitle href="https://uniswap.org/">About</NavTitle>
        </Headertabs>
        {/*钱包*/}
        <div className="myWallet clickableButton" onClick={() => setModalOpen(true)}>
          <span>My Wallet</span>
        </div>
        {/*语言*/}
        <Dropdown overlay={menu} className="flag">
          <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <img src={EnLangImg} alt="" width="30px" />
            &nbsp; EN
            <span className="anticon">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                className=""
                data-icon="down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </span>
          </span>
        </Dropdown>
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
            <MenuList />
          </HeaderElementWrap>
        </HeaderControls>
      </div>
      {
        <Modal visible={modalOpen} footer={null} onCancel={() => setModalOpen(false)}>
          <WalletBox>
            <h2>My Account</h2>
            <img src={Ball} alt="logo" width="80px" />
            <h1>{balance.toFixed(6)}</h1>
            <p>{mainContract.symbol} Balance</p>
            <div className="cancle clickableButton" onClick={()=>setModalOpen(false)}>Cancel</div>
          </WalletBox>
        </Modal>
      }
    </HeaderFrame>
  )
}
