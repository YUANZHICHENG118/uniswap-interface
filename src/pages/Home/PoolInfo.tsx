import React, { useEffect, useState } from 'react'
import { Col } from 'antd'
import { balanceOf, totalSupply, ITokenInfo, reward, mainContract, price, initreward } from '../../utils/tron'
import { useTranslation } from 'react-i18next'


/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function PoolInfo(props: any) {
  const { t } = useTranslation()
  const { token } = props

  const [data, setData] = useState<ITokenInfo>()

  const [_price, setPrice] = useState<number>(0)
  const [_mainPrice, setMainPrice] = useState<number>(100)
  // 矿池代币总量
  const [initAmount, setInitAmount] = useState<number>(0)


  let timer: any
  useEffect(() => {
    findData()
    findInitreward()
    timer = setInterval(() => {
      findData()
      findInitreward()
      findTokenPrice()
      findMainTokenPrice()
    }, 5000)
    return componentWillUnmount

  }, [])

  function componentWillUnmount() {
    if (timer) {
      clearInterval(timer)
    }
  }

  const findData = async () => {
    let data: ITokenInfo = {
      symbol: '',
      balance: 0,
      totalSupply: 0,
      reward: 0,
      price: 0
    }
    data.symbol = token.symbol
    let balance = await balanceOf(token.poolAddress, token.lp)
    let total = await  totalSupply(token.poolAddress)
    let _reward = await reward(token.poolAddress)
    data.balance = balance / Math.pow(10, token.decimals)
    data.totalSupply = total / Math.pow(10, token.decimals)
    data.reward = _reward / Math.pow(10, mainContract.decimals)
    setData(data)
  }

  const findTokenPrice = async () => {
    const p = await  findPrice(token.exAddress)
    setPrice(p)
  }

  const findMainTokenPrice = async () => {
    const p = await  findPrice(mainContract.exAddress)
    setMainPrice(p)
  }

  const findPrice = (exAddress: string) => {

    return price(exAddress).then((ret: any) => {
      console.log('data====', ret)
      if (ret && ret.code === 0) {

        let data = ret.data
        let tx = data['transactionList'][0]

        let trxPrice = data['trxPrice']
        let trxAmount = tx['trxAmount']
        let tokenAmount = tx['tokenAmount']
        let tokenDecimal = tx['tokenDecimal']

        let _trxAmount = trxAmount / Math.pow(10, 6)
        let _tokenAmount = tokenAmount / Math.pow(10, tokenDecimal)

        let rate = _trxAmount / _tokenAmount

        let price = rate * trxPrice
        return price
      }
      return 0
    })
  }

  const findInitreward = () => {
    return initreward(token.poolAddress).then(data=>{
      setInitAmount(data/ Math.pow(10, mainContract.decimals));
    })
  }

  const income = (period:number) => {
    return ((initAmount*_mainPrice)/((data&&data.totalSupply||0)*_price)*period)||0
  }
  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <div className="statsCard">
        <img src={require(`../../assets/images/token/${token.logo.toLowerCase()}.png`)} alt={token.symbol}
             width="50px"/>
        <span style={{ marginLeft: '8px' }}>{data && data.symbol} {t('Recipe')}</span>
        <h1>{data && data.balance && data.balance.toFixed(4) || '0.0000'}</h1>
        <p>{t('MyStake')}</p>
        <br/>
        <h1>
          {data && data.totalSupply && data.totalSupply.toFixed(4) || '0.0000'}<span>{(((data && data.balance || 0) / (data && data.totalSupply || 1)) * 100).toFixed(2)}%</span>
        </h1>
        <p>{t('totalStake')}</p>
        <br/>
        <p>========== {t('price')} ==========</p>
        <p>1 {mainContract.symbol} = {_mainPrice} $</p>
        <p>1 {data && data.symbol} = {_price && _price.toFixed(4)} $</p>
        <p>2 {data && data.symbol} = {initAmount} $</p>

        <br/>
        <p>====== {mainContract.symbol} {t('rewords')} ======</p>
        <p>{t('Claimable')} : {data && data.reward && data.reward.toFixed(4)}&nbsp; {mainContract.symbol} =
          ${((data && data.reward || 0) * (mainContract.price || 0)).toFixed(4)}</p>

        <p>{t('Hourly')} : 0.0000 COCK = $0.0000</p>
        <p>{t('Daily')} : 0.0000 COCK = $0.0000</p>
        <p>{t('Weekly')} : 0.0000 COCK = $0.0000</p>
        <p>{t('Hourly-ROI')} : {income(1)}%</p>
        <p>{t('Daily-ROI')} : {income(24)}%</p>
        <p>{t('Weekly-ROI')} : {income(24*7)}%</p>
      </div>
    </Col>
  )
}
