export interface IAccount {
  base58?: string
  hex?: string
  name?: string
}

export interface ITokens {
  logo:string
  key:string
  symbol: string
  earn: string
  decimals: number
  earnDecimals: number
  coming: boolean
  lp: boolean
  address: string
  poolAddress: string
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
  price: 257.8067
} : {
  symbol: 'COCK',
  decimals: 18,
  address: 'TMYigtLSE5uaqWLRQQAQzHuWdXAutFpfN8',
  poolAddress: '',
  price: 257.8067

}
const contractAddress: ITokens[] = process.env.REACT_APP_DEV === '0' ? [{
  logo:'USDJ',
  key:'USDJ',
  symbol: 'USDJ',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp:false,
  apy: 'infinity',
  address: 'TLBaRhANQoJFTqre9Nf1mjuwNWjCJeYqUL',
  poolAddress: 'TH7XHfCjGtt1kmEDJvyZ2wqXM5r52yy29Z'
}, {
  logo:'USDT',
  key:'USDT',

  symbol: 'USDT',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: false,
  lp:false,

  apy: 'infinity',
  address: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
  poolAddress: 'TA533qgBKEikbzM7ayAGkEMLsEPsGs36ky'
}, {
  logo:'TRX',
  key:'TRX',

  symbol: 'TRX',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:false,
  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}, {
  logo:'cocktrx',
  key:'COCK_TRX',
  symbol: 'TRX',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:true,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}, {
  logo:'JFI',
  key:'JFI_TRX',

  symbol: 'TRX',
  earn: 'JFI',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:true,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}, {
  logo:'SUN',
  key:'SUN_TRX',

  symbol: 'TRX',
  earn: 'SUN',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:true,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}] : [{
  logo:'USDJ',
  key:'USDJ',

  symbol: 'USDJ',
  earn: 'COCK',
  decimals: 18,
  earnDecimals: 18,
  coming: false,
  lp:false,

  apy: 'infinity',
  address: 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT',
  poolAddress: 'TUzsz6a8e316X8qpDtNxiNr98mvkcZ791a'
}, {
  logo:'USDT',
  key:'USDT',

  symbol: 'USDT',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: false,
  lp:false,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}, {
  logo:'TRX',
  key:'TRX',

  symbol: 'TRX',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:false,
  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}, {
  logo:'cocktrx',
  key:'COCK_TRX',
  symbol: 'TRX',
  earn: 'COCK',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:true,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}, {
  logo:'JFI',
  key:'JFI_TRX',

  symbol: 'TRX',
  earn: 'JFI',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:true,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
}, {
  logo:'SUN',
  key:'SUN_TRX',

  symbol: 'TRX',
  earn: 'SUN',
  decimals: 6,
  earnDecimals: 18,
  coming: true,
  lp:true,

  apy: 'infinity',
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  poolAddress: 'TFUUtF4zHhjjMJMF9YcDFPr65CJFFhkia2'
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
    console.log(`>> Await tronWeb:: ${_awaitCount * 300}ms`)

    if (tronWeb) {
      return resolve(tronWeb)
    } else {
      console.log('_awaitCount===', _awaitCount)
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
export async function account() {
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
export async function allowance(contractAddress: string, poolAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return false


  const parameter = [{ type: 'address', value: (await address()).hex }, { type: 'address', value: poolAddress }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'allowance(address,address)', {}, parameter, (await address()).hex)

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
export async function balanceOf(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0


  const parameter = [{ type: 'address', value: (await address()).base58 }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'balanceOf(address)', {}, parameter, (await address()).hex)
  if (tx) {
    const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
    return amount
  } else {
    return 0
  }

}

// 我的收益
export async function earned(contractAddress: string) {
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

}

// 可分红
export async function initreward(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0

  const parameter = [{ type: 'address', value: (await address()).hex }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'initreward(address)', {}, parameter, (await address()).hex)
  if (tx) {
    const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
    return amount
  } else {
    return 0
  }

}


// 我的收益 数据库
export async function reward(contractAddress: string) {
  const tronWeb = await findTronWeb()
  if (!chk(tronWeb)) return 0

  const parameter = [{ type: 'address', value: (await address()).hex }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'rewards(address)', {}, parameter, (await address()).hex)
  if (tx) {
    const amount = tronWeb.toDecimal('0x' + tx['constant_result'][0])
    return amount
  } else {
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