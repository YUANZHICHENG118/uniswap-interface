import React, { useEffect, useState } from 'react'
import { Col } from 'antd'
import { balanceOf, totalSupply, ITokenInfo, reward, mainContract } from '../../utils/tron'
import { useTranslation } from 'react-i18next'


/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function PoolInfo(props: any) {
  const { t } = useTranslation()
  const { token } = props

  const [data, setData] = useState<ITokenInfo>()

  let timer:any;
  useEffect(()=>{
    findData()
    timer= setInterval(()=>{
      findData()
    },5000)
    return componentWillUnmount;

  },[])
  function componentWillUnmount() {
    if(timer){
      clearInterval(timer);
    }
  }
  const findData = async () => {
    let data: ITokenInfo = {
      symbol: '',
      balance: 0,
      totalSupply: 0,
      reward:0,
      price:0

    }
    data.symbol = token.symbol
    let balance = await balanceOf(token.poolAddress)
    let total = await  totalSupply(token.poolAddress)
    let _reward= await reward(token.poolAddress);
    data.balance = balance / Math.pow(10, token.decimals)
    data.totalSupply = total / Math.pow(10, token.decimals)
    data.reward=_reward / Math.pow(10, mainContract.decimals)
    setData(data)


  }


  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <div className="statsCard">
        <img src={require(`../../assets/images/token/${token.logo.toLowerCase()}.png`)} alt={token.symbol} width="50px"/>
        <span style={{marginLeft:'8px'}}>{data&&data.symbol} Recipe</span>
        <h1>{data&&data.balance && data.balance.toFixed(4) || '0.000000'}</h1>
        <p>{t('MyStake')}</p>
        <br/>
        <h1>
          {data&&data.totalSupply && data.totalSupply.toFixed(4) || '0.000000'}<span>{(((data&&data.balance||0)/(data&&data.totalSupply||1))*100).toFixed(2)}%</span>
        </h1>
        <p>Total Staked</p>
        <br/>
        <p>========== PRICES ==========</p>
        <p>1 {mainContract.symbol} = {mainContract.price} $</p>
        <p>1 {data&&data.symbol} = 0.0000 $</p>
        <br/>
        <p>====== {mainContract.symbol} REWARDS ======</p>
        <p>Claimable Rewards : {data&&data.reward&&data.reward.toFixed(4)}&nbsp; {mainContract.symbol} = ${((data&&data.reward||0)*(mainContract.price||0)).toFixed(4)}</p>

        <p>Hourly estimate : 0.0000 Pearl = $0.0000</p>
        <p> Daily estimate : 0.0000 Pearl = $0.0000</p>
        <p> Weekly estimate : 0.0000 Pearl = $0.0000</p>
        <p> Hourly ROI in USD : 407.7491%</p>
        <p> Daily ROI in USD : 9785.9789%</p>
        <p> Weekly ROI in USD : 68501.8522%</p>
      </div>
    </Col>
  )
}
