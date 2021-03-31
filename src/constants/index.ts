import { ChainId, JSBI, Percent, Token, WETH } from '@uniswap/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const HOST = 'https://www.pizzaswap.pizza'
export const defRefAddress = '0x49e39fB0CB1461597436d67119d982FFa0E56688'

// main
//export const ethApi="https://mainnet.infura.io/v3/06fca9a79923403492775e750c1917b8";
export const ethApi="https://api-cn.etherscan.com/api";
export const SUB_ADDRESS='0x66B1012F689305aBf28577d5300740f6117ca30C'

// export const ethApi="https://api-ropsten.etherscan.io/api";
// export const SUB_ADDRESS='0x102dae99cbe3253a8229d11feac9b096668eee6d'



const UNI_ADDRESS = '0xaa037Fd61cBC515f70C8ae68CC5f34Eb3A2e10fD'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, UNI_ADDRESS, 6, 'UNI', 'Uniswap'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, UNI_ADDRESS, 18, 'PIPE', 'Uniswap'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, UNI_ADDRESS, 18, 'PIPE', 'Uniswap'),

}
export const LPCONTRACT="0x17301bc5EbB46513128e2aa285FF9a427aE64062"
export const TOKENCONTRACT="0x7A2100F562dd3cE2abc94129519b3065bC3553e3"
export const STAKE_TOKEN = [
  {
    id: 1,
    symbol: 'pipe',
    type:'TK',
    title: 'PIPE for MDEX',
    desc: 'Stake PIPE Earn PIPE',
    earn:'PIPE',
    lpToken:'',
    pid:0,
    decimals:6,
    address:'0xaa037fd61cbc515f70c8ae68cc5f34eb3a2e10fd'
  },
  {
    id: 2,
    symbol: 'pipe_ht',
    type:'LP',
    title: 'PIPE-HT for MDEX',
    desc: 'Stake PIPE-HT Earn PIPE',
    earn:'PIPE',
    lpToken:'HT',
    pid:3,
    decimals:18,
    address:'0xC93FfA72626f9d37fab0830bb708279Ae27B5d25'
  }, {
    id: 3,
    symbol: 'pipe_usdt',
    type:'LP',
    title: 'PIPE-USDT for MDEX',
    desc: 'Stake PIPE-USDT Earn PIPE',
    earn:'PIPE',
    lpToken:'USDT',
    pid:1,
    decimals:18,
    address:'0x589254625d8d1b64AD76407265d3E5b68E805253'
  }, {
    id: 4,
    symbol: 'pipe_husdt',
    type:'LP',
    title: 'PIPE-HUSD for MDEX',
    desc: 'Stake PIPE-HUSD Earn PIPE',
    earn:'PIPE',
    lpToken:'HUSD',
    pid:2,
    decimals:18,
    address:'0xEeFB713FA3c02C969E8539eE7F2b4a5115086089'
  }]
export const POOL_ADDRESS = '0xC1C83369f3F7662bC72370ac98Bd93644EDcf92C'
export const PZS_ADDRESS='0x10334122EF6DDb3c0Cf84639d881b442c00Ab2e8'
export const PZSS_ADDRESS='0x42669036fA54e8355D5C2a8b7313f81A1e0cd83d'
export const mainToken = {
  name:"Pizza ",
  symbol: 'PZ',
  address:'0x4a6431be40c1aA36EaEE17CE5010DDdaF23F77A4',
  decimals:18,
  icon: '🦆'
}

export const ethToken = {
  name:"eth ",
  symbol: 'ETH',
  decimals:1000000000000000000
}
export const pzsToken = {
  name:"pzs ",
  symbol: 'PZS',
  address:'0x205BB454CfF5ece04A102D7449313ebb934014e8',
  decimals:1000000000000000000,
  icon: '🦆'
}

export const supportedPools = [
 {
    pid: 1,
    lpAddresses: '0xeE991052F02BccfB3758B80b5A17D629ca81808A',
    tokenAddresses: '0x4a6431be40c1aA36EaEE17CE5010DDdaF23F77A4',
    name: 'Donald PZ',
    symbol: 'PZ-ETH',
    tokenSymbol: 'PIZZA',
   tag:false,

   decimals:18,
    icon: '🦆',
   lp:true,
    available:true
  }
  ,
  {
    pid: 0,
    lpAddresses: '0xa83818Bfd163c0Ce33Ee3147a3688a205499DCC8',
    tokenAddresses: '0x4a6431be40c1aA36EaEE17CE5010DDdaF23F77A4',
    name: 'Donald PZ',
    symbol: 'PZ-USDT',
    tokenSymbol: 'PIZZA',
    tag:false,

    decimals:18,
    icon: '🦆',
    lp:true,

    available:true
  },
  {
    pid: 3,
    lpAddresses: '0x937dB386Bf569Ee29F87B0E1d708f42308a476b0',
    tokenAddresses: '0x205BB454CfF5ece04A102D7449313ebb934014e8',
    name: 'Donald PZ',
    symbol: 'PZS',
    tokenSymbol: 'PIZZA',
    tag:false,

    decimals:18,
    icon: '🦆',
    lp:false,
    available:true
  },
  {
    pid: 0,
    lpAddresses: '0x205BB454CfF5ece04A102D7449313ebb934014e8',
    tokenAddresses: '0x205BB454CfF5ece04A102D7449313ebb934014e8',
    name: 'Donald PZS V1',
    symbol: 'PZS',
    tokenSymbol: 'PZS',
    tag:false,

    decimals:18,
    icon: '🦆',
    lp:false,
    available:true
  },
  {
    pid: 0,
    lpAddresses: '0x205BB454CfF5ece04A102D7449313ebb934014e8',
    tokenAddresses: '0x205BB454CfF5ece04A102D7449313ebb934014e8',
    name: 'Donald PZS V2',
    symbol: 'PZS',
    tokenSymbol: 'PZS',
    tag:true,
    decimals:18,
    icon: '🦆',
    lp:false,
    available:true
  },
  // {
  //   pid: 3,
  //   lpAddresses: '0x2Ea9fb46e9b67ffD23369d21bdcE93621d0EAE7B',
  //   tokenAddresses: '0x4a6431be40c1aA36EaEE17CE5010DDdaF23F77A4',
  //   name: 'Donald PZ',
  //   symbol: 'PZ-NFT',
  //   tokenSymbol: 'PIZZA',
  //   decimals:18,
  //   icon: '🦆',
  //   available:false
  // }
]

export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound')
export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
    ],
    [USDC, USDT],
    [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
