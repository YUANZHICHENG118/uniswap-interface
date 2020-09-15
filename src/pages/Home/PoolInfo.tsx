import React, { useEffect, useState } from 'react'
import { Col } from 'antd'
import { balanceOf, totalSupply, ITokenInfo, reward, mainContract } from '../../utils/tron'


/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function PoolInfo(props: any) {

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
        <span>{data&&data.symbol} Stats</span>
        <h1>{data&&data.balance && data.balance.toFixed(4) || '0.000000'}</h1>
        <p>My Stake</p>
        <br/>
        <h1>
          {data&&data.totalSupply && data.totalSupply.toFixed(4) || '0.000000'}<span>{((data&&data.balance||0)/(data&&data.totalSupply||1)).toFixed(4)}%</span>
        </h1>
        <p>Total Staked</p>
        <br/>
        <p>========== PRICES ==========</p>
        <p>1 {mainContract.symbol} = {mainContract.price} $</p>
        <p>1 {data&&data.symbol} = 0.0000 $</p>
        <br/>
        <p>====== Dragon REWARDS ======</p>
        <p>Claimable Rewards : {data&&data.reward&&data.reward.toFixed(4)}&nbsp; {mainContract.symbol} = ${((data&&data.reward||0)*(mainContract.price||0)).toFixed(4)}</p>

      </div>
    </Col>
  )
}
