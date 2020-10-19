import request from 'umi-request'
//查询交易记录
const exApi = 'https://api.just.network/swap/scan/transactions?exchangeAddress='

export interface IAccount {
  base58?: string | boolean
  hex?: string | boolean
  name?: string | boolean
}

export interface ITokens {
  logo: string
  key: string
  symbol: string
  earn: string
  decimals: number
  earnDecimals: number
  coming: boolean
  lp: boolean
  address: string
  poolAddress: string
  exAddress?: string
  price?: number
  apy?: string
}

export interface ITokenInfo {
  symbol?: string
  balance?: number
  totalSupply?: number
  reward?: number
  price?: number
  apy?: string
}

export const mainContract = process.env.REACT_APP_DEV === '0' ? {
  symbol: 'COCK',
  decimals: 18,
  address: 'TCfomXuaxYY2Hx2zmYBZhmNHt7U3hKBq5x',
  poolAddress: '',
  exAddress: '',
  price: 0
} : {
  symbol: 'COCK',
  decimals: 18,
  address: 'TE7BRt9GxPoossd1Csyidnai8q4EjsXKs4',
  poolAddress: '',
  exAddress: 'TCWxwQhsphTT2rGmhLHcq46Z6LHssYp67A',
  price: 0

}
const contractAddress: ITokens[] = process.env.REACT_APP_DEV === '0' ? [{
  logo: 'USDJ',
  key: 'USDJ',
  symbol: 'USDJ',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp: false,
  apy: 'infinity',
  address: 'TLBaRhANQoJFTqre9Nf1mjuwNWjCJeYqUL',
  poolAddress: 'TH7XHfCjGtt1kmEDJvyZ2wqXM5r52yy29Z',
  exAddress: ''
}, {
  logo: 'JFI',
  key: 'JFI',

  symbol: 'JFI',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: false,
  lp: false,
  apy: 'infinity',
  address: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
  poolAddress: 'TA533qgBKEikbzM7ayAGkEMLsEPsGs36ky',
  exAddress: ''
}, {
  logo: 'TRX',
  key: 'TRX',

  symbol: 'TRX',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: false,
  lp: false,
  apy: 'infinity',
  address: '',
  poolAddress: 'TKEhao64iZWpzC2wSeMwiUwqExWFzSGqrH',
  exAddress: ''
}, {
  logo: 'COCK',
  key: 'COCK_TRX',
  symbol: 'TRX',
  earn: 'COCKTRX',
  decimals: 6,
  earnDecimals: 18,
  coming: false,
  lp: true,

  apy: 'infinity',
  address: 'TEHQqgsjLZgFVJuXiF6srBC7yv7ewApeJo',
  poolAddress: 'TShP1uAcn3VF2eTpzzNkanmq9CJ6JHWFy9',
  exAddress: ''
}, {
  logo: 'jfitrx',
  key: 'JFI_TRX',

  symbol: 'JFITRX',
  earn: 'JFI',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp: true,

  apy: 'infinity',
  address: 'TA6NMuj45t5yn4SkhqjCmabYGZ1jw3n7EE',
  poolAddress: 'TLuVHVPKhDUfo4TcPnwgYYqCzyZhK7xjiq',
  exAddress: ''
}, {
  logo: 'suntrx',
  key: 'SUN_TRX',

  symbol: 'SUNTRX',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp: true,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TWfAVfUrdXmJdrcD4Qrmqoa1PGSf8n9Ymn',
  exAddress: ''
}] : [{
  logo: 'USDJ',
  key: 'USDJ',

  symbol: 'USDJ',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp: false,

  apy: 'infinity',
  address: 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT',
  poolAddress: 'TLJ7tXMbAauYy5bxRXGQ1ng5XPxbuPfVEL',
  exAddress: 'TQcia2H2TU3WrFk9sKtdK9qCfkW8XirfPQ'
}, {
  logo: 'JFI',
  key: 'JFI',
  symbol: 'JFI',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp: false,

  apy: 'infinity',
  address: 'TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha',
  poolAddress: 'TECM6dzCnreMPc5ZESJuxS5bFAEpdz2fZK',
  exAddress: 'TA6NMuj45t5yn4SkhqjCmabYGZ1jw3n7EE'
}, {
  logo: 'TRX',
  key: 'TRX',

  symbol: 'TRX',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: false,
  lp: false,
  apy: 'infinity',
  address: 'TWBwgjgRcTnUwM861bQzdaKCBHaUtsZd4q',
  poolAddress: 'TWBwgjgRcTnUwM861bQzdaKCBHaUtsZd4q',
  exAddress: 'TTnSHzUoho1CU6zFYVzVSCKq8EX8ZddkVv'
}, {
  logo: 'COCK',
  key: 'COCK_TRX',
  symbol: 'COCKTAIL/TRX',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp: true,

  apy: 'infinity',
  address: 'TCWxwQhsphTT2rGmhLHcq46Z6LHssYp67A',
  poolAddress: 'TJFfeZ5CPTAASQidxsWnRfmjBAmJW53aJP',
  exAddress: 'TCWxwQhsphTT2rGmhLHcq46Z6LHssYp67A'
}, {
  logo: 'jfitrx',
  key: 'JFI_TRX',

  symbol: 'JFI/TRX',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp: true,

  apy: 'infinity',
  address: 'TA6NMuj45t5yn4SkhqjCmabYGZ1jw3n7EE',
  poolAddress: 'TBe56bbcPZSSM4du6q1u6HtzjB7y7ccz1a',
  exAddress: 'TA6NMuj45t5yn4SkhqjCmabYGZ1jw3n7EE'
}, {
  logo: 'suntrx',
  key: 'SUN_TRX',

  symbol: 'SUN/TRX',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp: true,

  apy: 'infinity',
  address: 'TUEYcyPAqc4hTg1fSuBCPc18vGWcJDECVw',
  poolAddress: 'TDzhqfU4cdpXzwTcR2MKYnAVxd96GuRATG',
  exAddress: 'TUEYcyPAqc4hTg1fSuBCPc18vGWcJDECVw'
}]

export function contractList(): ITokens[] {
  return contractAddress
}

/**
 * 异步延迟等待
 */
let _awaitCount: number = 1

export function findTronWeb(): Promise<any> {
  const { tronWeb } = window
  return new Promise<any>((resolve, reject) => {
    _awaitCount = _awaitCount + 1
    // console.log(`>> Await tronWeb:: ${_awaitCount * 300}ms`)

    if (tronWeb) {
      return resolve(tronWeb)
    } else {
      // console.log('_awaitCount===', _awaitCount)
      if (_awaitCount < 3) {
        return reject()
      } else {
        console.log('new tronweb')
        return resolve(undefined)
      }

    }
  }).catch(() => {

    return new Promise(resolve => {
      setTimeout(resolve, 300)
    }).then(() => findTronWeb())
  })
}

/**
 * 异步延迟等待
 */
let awaitCount: number = 1

export function address(): Promise<IAccount> {
  const { tronWeb } = window

  return new Promise<IAccount>((resolve, reject) => {
    awaitCount = awaitCount + 1
    console.log(`>> Await count:: ${awaitCount * 200}ms`)

    if (tronWeb.defaultAddress && tronWeb.defaultAddress.hex) {

      return resolve(tronWeb.defaultAddress)
    } else {
      console.log('awaitCount===', awaitCount)

      if (_awaitCount < 3) {
        return reject()
      } else {
        console.log('new address')
        return resolve(undefined)
      }
    }
  }).catch(() => {

    return new Promise(resolve => {
      setTimeout(resolve, 200)
    }).then(() => address())
  })
}

export function chk(tronWeb: any) {
  return tronWeb && tronWeb.defaultAddress && tronWeb.defaultAddress.hex
}

// 获取账号信息包括 token 余额
export async function getAccount() {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) {
    return new Promise<IAccount>((resolve, reject) => {
      return reject()
    })
  }
  const tx = await  tronWeb.trx.getAccount((await address()).hex)
  return tx
}


// 获取totalSupply
export async function totalSupply(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0

  const tx = await  tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'totalSupply()', {}, [], (await address()).hex)
  if (tx) {
    const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
    return amount
  } else {
    return 0
  }
}


// 是否已授权
export async function allowance(contractAddress: string, poolAddress: string, lp: boolean) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return false


    const parameter = [{ type: 'address', value: (await address()).hex }, { type: 'address', value: poolAddress }]

    let tx = undefined
    if (lp) {
      tx = await tronWeb.transactionBuilder.triggerConstantContract(tronWeb.address.toHex(contractAddress), 'allowance(address,address)', {}, parameter, (await address()).hex)
    } else {

      tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'allowance(address,address)', {}, parameter, (await address()).hex)

    }
    if (tx) {
      const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
      return amount > 0
    } else {
      return false
    }

}

// 授权
export async function approve(contractAddress: string, poolAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) {
    return new Promise<IAccount>((resolve, reject) => {
      return reject()
    })
  }

  const value = 10000000000000000000000000000000000000000000000000
  const parameter = [{ type: 'address', value: poolAddress }, { type: 'uint256', value: tronWeb.toHex(value) }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'approve(address,uint256)', {}, parameter, (await address()).hex)
  const signedTx = await tronWeb.trx.sign(tx.transaction)
  const broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log('broastTx====', broastTx)
  return broastTx

}

// 质押
export async function stake(amount: number, contractAddress: string, decimals: number) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) {
    return new Promise<IAccount>((resolve, reject) => {
      return reject()
    })
  }

  const value = tronWeb.toBigNumber(amount * Math.pow(10, decimals))

  const parameter = [{ type: 'uint256', value: tronWeb.toHex(value.toNumber()) }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'stake(uint256)', {}, parameter, (await address()).hex)
  var signedTx = await tronWeb.trx.sign(tx.transaction)
  var broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log('stake tx====', broastTx)
  return broastTx
}


// 我的质押/代币余额
export async function balanceOf(contractAddress: string, lp: boolean) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0

  try {
    const parameter = [{ type: 'address', value: (await address()).base58 }]
    let tx = undefined
    if (lp) {
      tx = await tronWeb.transactionBuilder.triggerConstantContract(tronWeb.address.toHex(contractAddress), 'balanceOf(address)', {}, parameter, (await address()).hex)
    } else {
      tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'balanceOf(address)', {}, parameter, (await address()).hex)
    }
    if (tx) {
      const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
      return amount
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}

// 价格
export async function price(exAddress: string) {

  if (exAddress === '') {
    return 0
  }
  return request(`${exApi}${exAddress}`).then(data => {
    return data
  })
}

// 我的收益
export async function earned(contractAddress: string) {
  try {
    const tronWeb = await findTronWeb()
    if (!chk(tronWeb)) return 0

    const parameter = [{ type: 'address', value: (await address()).hex }]
    const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'earned(address)', {}, parameter, (await address()).hex)
    if (tx) {
      const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
      return amount
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }


}

// 可分红
export async function initreward(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0

  try {
    const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'initreward()', {}, [], (await address()).hex)
    if (tx) {
      const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
      return amount
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}


// 我的收益 数据库
export async function reward(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0
  try {
    const parameter = [{ type: 'address', value: (await address()).hex }]
    const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'rewards(address)', {}, parameter, (await address()).hex)
    if (tx) {
      const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
      return amount
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}

// 结束时间
export async function periodFinish(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0
  try {

    const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'periodFinish()', {}, [], (await address()).hex)
    if (tx) {
      const time = tronWeb.toDecimal('0x' + tx['constant_result'][0])
      return time
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}


// 开始时间
export async function startTime(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0
  try {

    const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'starttime()', {}, [], (await address()).hex)
    if (tx) {
      const time = tronWeb.toDecimal('0x' + tx['constant_result'][0])
      return time
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}

// 提取收益
export async function getReward(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) {
    return new Promise<IAccount>((resolve, reject) => {
      return reject()
    })
  }
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'getReward()', {}, [], (await address()).hex)
  const signedTx = await tronWeb.trx.sign(tx.transaction)
  const broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log('broastTx====', broastTx)
  return broastTx

}

// 提取收益 并且赎回
export async function exit(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) {
    return new Promise<IAccount>((resolve, reject) => {
      return reject()
    })
  }
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'exit()', {}, [], (await address()).hex)
  const signedTx = await tronWeb.trx.sign(tx.transaction)
  const broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log('broastTx====', broastTx)
  return broastTx
}


// trx 转账
// 质押
export async function deposit(amount: number, contractAddress: string, decimals: number) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) {
    return new Promise<IAccount>((resolve, reject) => {
      return reject()
    })
  }
  const value = tronWeb.toBigNumber(amount * Math.pow(10, decimals))
  let instance = await tronWeb.contract().at(contractAddress)
  let res = await instance['stake'](tronWeb.toHex(value.toNumber()))
  let tx = await res.send({
    feeLimit: 100000000,
    callValue: tronWeb.toSun(amount),
    tokenId: 0,
    shouldPollResponse: false
  })
  console.log('deposit=====' + tx)

  return tx

}


