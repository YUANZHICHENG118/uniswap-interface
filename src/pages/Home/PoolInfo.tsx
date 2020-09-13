import React, { useEffect, useState } from 'react'
import { Col } from 'antd'
import usdjImg from '../../assets/images/home/usdj.png'
import { balanceOf, totalSupply, ITokenInfo } from '../../utils/tron'


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
      totalSupply: 0
    }
    data.symbol = token.symbol
    let balance = await balanceOf(token.poolAddress)
    let total = await  totalSupply(token.poolAddress)
    data.balance = balance / Math.pow(10, token.decimals)
    data.totalSupply = total / Math.pow(10, token.decimals)
    setData(data)


  }


  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <div className="statsCard">
        <img src={usdjImg} alt="ball" width="50px"/>
        <span>{data&&data.symbol} Stats</span>
        <h1>{data&&data.balance && data.balance.toFixed(6) || '0.000000'}</h1>
        <p>My Stake</p>
        <br/>
        <h1>
          {data&&data.totalSupply && data.totalSupply.toFixed(6) || '0.000000'}<span>0.00%</span>
        </h1>
        <p>Total Staked</p>
        <br/>
        <p>========== PRICES ==========</p>
        <p>1 Dragon = 0.0000 $</p>
        <p>1 {data&&data.symbol} = 0.0000 $</p>
        <br/>
        <p>====== Dragon REWARDS ======</p>
        <p>Claimable Rewards : 0.0000&nbsp; Dragon = $0.0000</p>

      </div>
    </Col>
  )
}
