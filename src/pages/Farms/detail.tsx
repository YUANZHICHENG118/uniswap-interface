import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuWrap from './wrapper'
import MenuTop from './menuTop'
import Column from '../../components/Column'
import ItemWrap from './ItemWrap'
import { Row, Col,notification,Modal,Input,Button } from 'antd';
import { RouteComponentProps } from 'react-router-dom'
import { contractList, ITokens, allowance, mainContract, approve, stake, balanceOf ,earned,getReward,exit} from '../../utils/tron'
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

const Flex = styled.div`
  display: flex;
`
const DetailItem = styled(Flex)`
  flex-direction: column;
  flex: 1 1 0%;
`
export default function Menu(props: RouteComponentProps<{ symbol: string }>) {
  const [allowStake,setAllowStake]=useState<boolean>(false);
  const [amount,setAmount]=useState<number>(0);
  const [visibleModal,setVisibleModal]=useState<boolean>(false);
  const [balance,setBalance]=useState<number>(0.000000);
  const [stakeBalance,setStakeBalance]=useState<number>(0.000000);
  const [earnedBalance,setEarnedBalance]=useState<number>(0.000000);

  const {
    match: {
      params: { symbol }
    }
  } = props
  const tokens=contractList().find((x:ITokens)=>x.symbol===symbol)
  let timer:any;
  useEffect(()=>{
    setTimeout(()=>{
      findAllow()
      findBalance()
      findStakeBalance()
      findEarnedBalance()

     timer= setInterval(()=>{
       findAllow()
       findBalance()
        findStakeBalance()
        findEarnedBalance()
      },5000)
    },300)

    return componentWillUnmount;

  },[])
  function componentWillUnmount() {
    if(timer){
      clearInterval(timer);

    }
  }

  // 是否已授权
  const findAllow=()=>{
    if(tokens){
      allowance(tokens.address,tokens.poolAddress).then(data=>{
        setAllowStake(data)
      })
    }
  }
  // 授权
  const handelApprove=()=>{
    if(tokens){
      approve(tokens.address,tokens.poolAddress).then(data=>{
        console.log("data====>>>",data)
        notification.success({
          message:'success',
          description:'success'
        });
      })
    }
  }

  //质押
  const handelStake=()=>{
    if(tokens){
      stake(amount,tokens.poolAddress,tokens.decimals).then(data=>{
        console.log("data====>>>",data)
        notification.success({
          message:'success',
          description:'success'
        });
        setVisibleModal(false)
      })
    }
  }

  //提取收益
  const handelGetReward=()=>{
    if(tokens){
      getReward(tokens.poolAddress).then(data=>{
        console.log("data====>>>",data)
        notification.success({
          message:'success',
          description:'success'
        });
      })
    }
  }

  //退出
  const handelExit=()=>{
    if(tokens){
      exit(tokens.poolAddress).then(data=>{
        console.log("data====>>>",data)
        notification.success({
          message:'success',
          description:'success'
        });
      })
    }
  }


  const findBalance=()=>{
    if(tokens) {
      balanceOf(tokens.address).then((data: any) => {
        setBalance(data / Math.pow(10, tokens.decimals));
      })
    }
  }

  const findStakeBalance=()=>{
    if(tokens) {
      balanceOf(tokens.poolAddress).then((data: any) => {
        setStakeBalance(data / Math.pow(10, tokens.decimals));
      })
    }
  }

  const findEarnedBalance=()=>{
    if(tokens) {
      earned(tokens.poolAddress).then((data: any) => {
        setEarnedBalance(data / Math.pow(10, tokens.decimals));
      })
    }
  }

  const onChange=(e:any)=>{
   console.log("e====",e.currentTarget.value)
    setAmount(e.currentTarget.value)
  }
  return (
    <MenuWrap>
      <MenuTop textLogo="🐢" h1Text="Tether Turtle" h3Text={`Deposit ${symbol}-TRX UNI-V2 LP  Tokens and earn ${mainContract.symbol}`} />
      <Column>
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='center' align='middle'>
          <Col  className="gutter-row" span={12} xs={24} sm={24} md={10}>
            <DetailItem>
              <ItemWrap itemLogo={mainContract.symbol.toLowerCase()}  title={earnedBalance.toFixed(6)} subTitle={[`${mainContract.symbol} Earned`]}>
                <div slot="button" className="button clickableButton" onClick={()=>earnedBalance>0?handelGetReward():console.log('')} style={{color: earnedBalance>0?'':'rgba(209, 0, 75, 0.333)'}}>Harvest</div>
              </ItemWrap>
            </DetailItem>
          </Col>

          <Col  className="gutter-row" span={12} xs={24} sm={24} md={10}>
            <DetailItem>
              <ItemWrap itemLogo={symbol.toLowerCase()}  title={stakeBalance.toFixed(6)} subTitle={[`${symbol} Earned`]}>
                <div slot="button" className="button clickableButton"  onClick={()=>allowStake?setVisibleModal(true):handelApprove()}>{allowStake?'Stake':`Approve ${symbol}`}</div>
              </ItemWrap>
            </DetailItem>
          </Col>

        </Row>
      </Column>
      <div className="button harvestAndUnstake clickableButton" onClick={()=>stakeBalance>0&&earnedBalance>0?handelExit():console.error("not balance")}  style={{color:stakeBalance>0&&earnedBalance>0?'': 'rgba(209, 0, 75, 0.333)'}}>Harvest &amp; Unstake
      </div>
      <Modal visible={visibleModal} footer={null} onCancel={() => setVisibleModal(false)}>
        <WalletBox>
          <h2>Stake</h2>
          <h3>{balance.toFixed(6)} {symbol} Avaliable</h3>
          <p>
            <Input value={amount} type={'number'} onChange={(e)=>onChange(e)} addonAfter={<Button type="primary" onClick={()=>setAmount(balance)}>Max</Button>}  />
          </p>
          <div className="cancle clickableButton" onClick={()=>setVisibleModal(false)}>Cancel</div>
          <div className="cancle clickableButton" onClick={()=>handelStake()}>Stake</div>

        </WalletBox>
      </Modal>
    </MenuWrap>
  )
}
