
export interface IAccount {
  base58?: string
  hex?: string
  name?: string
}
export interface ITokens {
  symbol: string
  decimals: number
  address: string
  poolAddress:string
  apy?:string
}
export interface ITokenInfo {
  symbol?: string
  balance?: number
  totalSupply?: number
  apy?:string
}

// interface ITrc20 {
//   balance?: string
//   address?: string
// }
//const dev = true
//const api = dev ? 'https://api.nileex.io' : 'https://api.trongrid.io'
export const mainContract={
  symbol: 'DRAGON',
  decimals:18,
  address: 'TCfomXuaxYY2Hx2zmYBZhmNHt7U3hKBq5x',
  poolAddress: 'TCfomXuaxYY2Hx2zmYBZhmNHt7U3hKBq5x'
}
const contractAddress: ITokens[] = [{
  symbol: 'USDJ',
  decimals:18,
  apy:'infinity',
  address: 'TLBaRhANQoJFTqre9Nf1mjuwNWjCJeYqUL',
  poolAddress: 'TH7XHfCjGtt1kmEDJvyZ2wqXM5r52yy29Z'
},{
  symbol: 'USDA',
  decimals:18,
  apy:'infinity',
  address: 'TLBaRhANQoJFTqre9Nf1mjuwNWjCJeYqUL',
  poolAddress: 'TH7XHfCjGtt1kmEDJvyZ2wqXM5r52yy29Z'
}]

export function contractList():ITokens[] {
  return contractAddress
}


export function address(): IAccount {
  const { tronWeb } = window
  return tronWeb && tronWeb.defaultAddress
}

// 获取账号信息包括 token 余额
export async function account() {
  const { tronWeb } = window
  const tx=await  tronWeb.trx.getAccount(address().hex)
  return tx;
}



// 获取totalSupply
export async function totalSupply(contractAddress: string) {
  const { tronWeb } = window
  const tx=await  tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'totalSupply()', {}, [], tronWeb.defaultAddress.hex)
  if(tx){
    const amount=tronWeb.toDecimal("0x"+tx['constant_result'][0])
    return amount
  }else{
    return 0
  }
}



// 是否已授权
export async function allowance(contractAddress: string, poolAddress: string) {
  const { tronWeb } = window
  const parameter = [{ type: 'address', value: address().base58 }, { type: 'address', value: poolAddress }]
  const tx=await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'allowance(address,address)', {}, parameter, address().hex);

  if(tx){
    const amount=tronWeb.toDecimal("0x"+tx['constant_result'][0])
    return amount>0
  }else{
    return false
  }
}

// 授权
export async function approve(contractAddress: string, poolAddress: string) {
  const { tronWeb } = window
  const value = tronWeb.toBigNumber(Math.pow(10,31));
  const parameter = [{ type: 'address', value: poolAddress }, { type: 'uint256', value: tronWeb.toHex(value.toNumber()) }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'approve(address,uint256)', {}, parameter, address().hex)
  const signedTx = await tronWeb.trx.sign(tx.transaction)
  const broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log("broastTx====",broastTx)
  return broastTx;

}

// 质押
export async function stake(amount: number, contractAddress: string) {
  const { tronWeb } = window
  const value = tronWeb.toBigNumber(amount*Math.pow(10,18));

  const parameter = [{ type: 'uint256', value: tronWeb.toHex(value.toNumber()) }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'stake(uint256)', {}, parameter, address().hex)
  var signedTx = await tronWeb.trx.sign(tx.transaction)
  var broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log("stake tx====",broastTx)
  return broastTx;
}


// 我的质押/代币余额
export async function balanceOf(contractAddress: string) {
  const { tronWeb } = window
  const parameter = [{ type: 'address', value: address().hex }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'balanceOf(address)', {}, parameter, address().hex)
  if(tx){
    const amount=tronWeb.toDecimal("0x"+tx['constant_result'][0])
    return amount
  }else{
    return 0
  }

}

// 我的收益
export async function earned(contractAddress: string) {
  const { tronWeb } = window
  const parameter = [{ type: 'address', value: address().hex }]
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'earned(address)', {}, parameter, address().hex)
  if(tx){
    const amount=tronWeb.toDecimal("0x"+tx['constant_result'][0])
    return amount
  }else{
    return 0
  }

}

// 提取收益
export async function getReward(contractAddress: string) {
  const { tronWeb } = window
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'getReward()', {}, [], address().hex)
  const signedTx = await tronWeb.trx.sign(tx.transaction)
  const broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log("broastTx====",broastTx)
  return broastTx;

}

// 提取收益 并且赎回
export async function exit(contractAddress: string) {
  const { tronWeb } = window
  const tx = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(contractAddress), 'exit()', {}, [], address().hex)
  const signedTx = await tronWeb.trx.sign(tx.transaction)
  const broastTx = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log("broastTx====",broastTx)
  return broastTx;

}