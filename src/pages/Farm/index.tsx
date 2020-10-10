import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import Countdown from 'react-countdown-now';
import moment from 'moment';

import styled from 'styled-components'
import { TransactionResponse } from '@ethersproject/providers'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
//import { MaxUint256 } from '@ethersproject/constants'
import Modal from '../../components/Modal'
import { Input as NumericalInput } from '../../components/NumericalInput'
import TransactionConfirmationModal from '../../components/TransactionConfirmationModal'
import { supportedPools, mainToken, POOL_ADDRESS } from '../../constants/index'
import { RouteComponentProps } from 'react-router-dom'
import { useBatContract, useLpContract } from '../../hooks/useContract'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { useActiveWeb3React } from '../../hooks'
//import { calculateGasMargin } from '../../utils'
import BigNumber from 'bignumber.js'
import { defRefAddress } from '../../constants'
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})
const InputRow = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`

const StyledBalanceMax = styled.button`
  height: 28px;
  background-color: ${({ theme }) => theme.primary5};
  border: 1px solid ${({ theme }) => theme.primary5};
  border-radius: 0.5rem;
  font-size: 0.875rem;

  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.primaryText1};
  :hover {
    border: 1px solid ${({ theme }) => theme.primary1};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
    outline: none;
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin-right: 0.5rem;
  `};
`

const WalletBox = styled.div`
  text-align: center;
  padding:50px auto;
  margin:10px auto;
  h2 {
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin:20px auto;
    position: relative;
  }
 
  p {
    color: #80495d;
    font-size: 16px;
    line-height: 18px;
  }
  .cancle {
    margin: 30px 20px 20px;
    align-items: center;
    background-color: #f0e7ea;
    color: #d1004b;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    height: 56px;
    justify-content: center;
    width: calc(100% - 40px);
    border-radius: 12px;
    :hover {
      background-color: #f1dae1;
    }
  }
`

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexCenter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const MenuTop = styled.div`
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 24px;
`
const MenuBody = styled.div`
`
const RowBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-flow: row wrap;
`
const RowItem = styled.div`
  display: flex;
  position: relative;
  .itemWarp {
    margin:10px 0;
    //box-shadow: rgb(247, 244, 242) 1px 1px 0px inset;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.bg1};
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    border-image: initial;
    border-radius: 12px;
    flex: 1 1 0%;
  }
`
const RowItemBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 16px;
`
const RowItemLogo = styled.span.attrs({
  role: 'img'
})`
  background-color: rgb(240, 233, 231);
  font-size: 36px;
  height: 80px;
  width: 80px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: rgb(226, 214, 207) 4px 4px 8px inset, rgb(247, 244, 242) -6px -6px 12px inset;
  border-radius: 40px;
  margin: 0px auto 16px;
`
const RowItemTitle = styled.h4`
  color: #efe7e7;
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0px 0px;
  padding: 0px;
`
const RowItemSubTitle = styled.div`
  margin-top: 8px;
  text-align: center;
  .kdcQzs {
    color: #efe7e7;
  }
`

const RowItemButton = styled.div`
  align-items: center;
  background-color: #130f09;
  color: rgb(209, 108, 0);
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 56px;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 12px;
  outline: none;
  margin-top: 24px;

  a {
    align-items: center;
    color: inherit;
    display: flex;
    height: 56px;
    justify-content: center;
    flex: 1 1 0%;
    margin: 0px -24px;
    padding: 0px 24px;
    text-decoration: none;
  }
`
export default function Farm(props: RouteComponentProps<{ symbol: string }>) {
  const {
    match: {
      params: { symbol }
    }
  } = props
  const {t}=useTranslation()
  const { account } = useActiveWeb3React()
  const { activate, active }=useWeb3ReactCore()
  console.log("useWeb3ReactCore===",activate,active)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [stakeAmount, setAmount] = useState<number>(0)
  const [txId, setTxId] = useState<string>("")
  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [pid, setPid] = useState<number>(0)

  const onChange = (e: any) => {
    setAmount(e)
  }
  const token = supportedPools.find(x => x.symbol === symbol)

  const lpcontract = useLpContract(token && token.lpAddresses, true)

  const contract = useBatContract(POOL_ADDRESS, true)

  const isUserExists = useSingleCallResult(contract, 'isUserExists', [account || defRefAddress])

  const allowance = useSingleCallResult(lpcontract, 'allowance', [account ?? undefined, POOL_ADDRESS])

  const getLpBalance = useSingleCallResult(lpcontract, 'balanceOf', [account ?? undefined])

  const getStakeBalance0 = useSingleCallResult(contract, 'userInfo', [0, account ?? undefined])
  const getStakeBalance1 = useSingleCallResult(contract, 'userInfo', [1, account ?? undefined])
  const getStakeBalance2 = useSingleCallResult(contract, 'userInfo', [2, account ?? undefined])

  const getTokenBalance0 = useSingleCallResult(contract, 'pendingLef', [0, account ?? undefined])
  const getTokenBalance1 = useSingleCallResult(contract, 'pendingLef', [1, account ?? undefined])
  const getTokenBalance2 = useSingleCallResult(contract, 'pendingLef', [2, account ?? undefined])


  const allow=allowance && allowance.result && allowance.result[0]&& allowance.result[0]['_hex']!="0x00"

  const tokenBalance=getTokenBalance0 && getTokenBalance0.result && getTokenBalance0.result[0]
  const tokenBalance1=getTokenBalance1 && getTokenBalance1.result && getTokenBalance1.result[0]
  const tokenBalance2=getTokenBalance2 && getTokenBalance2.result && getTokenBalance2.result[0]

  const stakeBalance=getStakeBalance0 && getStakeBalance0.result&& getStakeBalance0.result[1]
  const stakeBalance1=getStakeBalance1 && getStakeBalance1.result&& getStakeBalance1.result[1]
  const stakeBalance2=getStakeBalance2 && getStakeBalance2.result&& getStakeBalance2.result[1]

  const time0=getStakeBalance0 && getStakeBalance0.result&& getStakeBalance0.result[5]
  const time1=getStakeBalance1 && getStakeBalance1.result&& getStakeBalance1.result[5]
  const time2=getStakeBalance2 && getStakeBalance2.result&& getStakeBalance2.result[5]


  const _time0=moment(time0&&parseInt(time0.toString())*1000).add(3, 'd')
  const _time1=moment(time1&&parseInt(time1.toString())*1000).add(10, 'd')
  const _time2=moment(time2&&parseInt(time2.toString())*1000).add(25, 'd')

  console.log("time0===",time0&&time0.toString(),time1&&time1.toString(),time2&&time2.toString())
  console.log("time1===",_time0.valueOf(),_time1.valueOf(),_time2.valueOf())

  const lpBalance=getLpBalance && getLpBalance.result&& getLpBalance.result[0]
  const isReg = isUserExists && isUserExists.result && isUserExists.result[0]

  console.log("isReg====",isReg)
  const format=(value:number,decimal:number):any=>{
    if(value){
      value=value/Math.pow(10,decimal)
    }
    return value&&value.toFixed(4) ||"0.0000"
  }

  console.log("stakeBalance===",stakeBalance)

  useEffect(()=>{
  },[])

  // 授权
  const approvalHandel= async ()=>{
    if(lpcontract){
      const Web3 = require('web3');

      let web3 = new Web3(window.ethereum);

      setTxLoading(true)
      setTxConfirm(true)

      let amount=new BigNumber(1000000000*Math.pow(10,token &&token.decimals||18))
      let _amount=web3.utils.toHex(amount);
      const estimatedGas = await lpcontract.estimateGas.approve(POOL_ADDRESS,_amount).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return lpcontract.estimateGas.approve(POOL_ADDRESS,_amount)
      })

      return lpcontract.approve(POOL_ADDRESS,_amount, {
        gasLimit: estimatedGas
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)

          setTxConfirm(true)
          setTxId(response.hash)

          console.log("response====",response)
        })
        .catch((error: Error) => {
          console.debug('Failed to approve token', error)
          throw error
        })
    }

  }

  // 质押
  const stakeHandel= async (pid:number)=>{
    const Web3 = require('web3');

    let web3 = new Web3(window.ethereum);

    if(stakeAmount<=0){
      return ;
    }
    if(contract){

      let value=new BigNumber(stakeAmount*Math.pow(10,token &&token.decimals||18))
      let _amount=web3.utils.toHex(value);
      setTxLoading(true)
      setTxConfirm(true)

      // const estimatedGas = await contract.estimateGas.deposit(pid,_amount).catch(() => {
      //   return contract.estimateGas.deposit(pid,_amount)
      // })
      //
      // console.log("estimatedGas====",estimatedGas)

      return contract.deposit(pid,_amount, {
        gasLimit: 300000
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)

          setTxConfirm(true)
          setTxId(response.hash)
          setVisibleModal(false)
          console.log("stake response====",response)
        })
        .catch((error: Error) => {
          console.debug('Failed to stake token', error)
          throw error
        })

    }
  }

  // 赎回
  const harvestHandel= async (pid:number)=>{
    if(contract){
      const Web3 = require('web3');
      let web3 = new Web3(window.ethereum);
      let _amount=web3.utils.toHex(pid===0?stakeBalance.toString():pid===1?stakeBalance1.toString():stakeBalance2.toString());
      setTxLoading(true)
      setTxConfirm(true)

      // const estimatedGas = await contract.estimateGas.withdraw(pid,_amount).catch(() => {
      //   // general fallback for tokens who restrict approval amounts
      //   return contract.estimateGas.withdraw(pid,_amount)
      // })

      return contract.withdraw(pid,_amount, {
        gasLimit: 300000
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)

          setTxConfirm(true)
          setTxId(response.hash)
          console.log("stake response====",response)
        })
        .catch((error: Error) => {
          console.debug('Failed to stake token', error)
          throw error
        })

    }
  }

// Renderer callback with condition
  const renderer = (params:any) => {
    const { hours, minutes, seconds, completed,props }=params;
    if (completed) {
      // Render a completed state
      return props.children;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  return (
    <MenuWrap className='container'>
      <MenuTop />
      <MenuBody>
        <RowBox className='row'>
          <RowItem className='col-xs-6 col-md-4 col-sm-12'>
            <div className='itemWarp'>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo><img src={require(`../../assets/images/lp/${token&&token.symbol.toLowerCase()}.png`)} height={75}></img></RowItemLogo>
                  <RowItemTitle>3天</RowItemTitle>
                  <RowItemSubTitle>我的质押:{format(stakeBalance&&stakeBalance.toString(),token&&token.decimals||18)}</RowItemSubTitle>

                  <RowItemSubTitle>我的收益:{format(tokenBalance&&tokenBalance.toString(),mainToken.decimals||18)}</RowItemSubTitle>
                  <RowItemSubTitle>
                    <div className="kdcQzs">质押 {mainToken && mainToken.symbol} LP Token</div>
                  </RowItemSubTitle>

                  <RowItemButton color="#d16c00" font-size="16">

                    <Countdown date={_time0&&_time0.valueOf()} renderer={renderer}>
                    {
                      stakeBalance&&stakeBalance.toString()==="0"||!account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                        {t("Harvest")}
                      </span>:<a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?harvestHandel(0):console.log("000")}>
                        {t("Harvest")}
                      </a>
                    }
                    </Countdown>
                  </RowItemButton>
                  <RowItemButton color="#d16c00" font-size="16">
                    {
                      !account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                         {t("Approval")}
                      </span>: allow ? <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>{setVisibleModal(true);setPid(0)}}>
                        {t("stake")}
                      </a> : <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?approvalHandel():console.log("111")}>
                        {t("Approval")}
                      </a>
                    }
                  </RowItemButton>
                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>

          <RowItem className='col-xs-6 col-md-4 col-sm-12'>
            <div className='itemWarp'>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo><img src={require(`../../assets/images/lp/${token&&token.symbol.toLowerCase()}.png`)} height={75}></img></RowItemLogo>
                  <RowItemTitle>10天</RowItemTitle>
                  <RowItemSubTitle>我的质押:{format(stakeBalance1&&stakeBalance1.toString(),token&&token.decimals||18)}</RowItemSubTitle>

                  <RowItemSubTitle>我的收益:{format(tokenBalance1&&tokenBalance1.toString(),mainToken.decimals||18)}</RowItemSubTitle>


                  <RowItemSubTitle>
                    <div className="kdcQzs">质押 {mainToken && mainToken.symbol} LP Token</div>
                  </RowItemSubTitle>

                  <RowItemButton color="#d16c00" font-size="16">

                    <Countdown date={_time1&&_time1.valueOf()} renderer={renderer}>
                    {
                      stakeBalance1&&stakeBalance1.toString()==="0"||!account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                        {t("Harvest")}
                      </span>:<a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?harvestHandel(1):console.log("000")}>
                        {t("Harvest")}
                      </a>
                    }
                    </Countdown>
                  </RowItemButton>

                  <RowItemButton color="#d16c00" font-size="16">

                    {
                      !account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                         {t("Approval")}
                      </span>: allow ? <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>{setVisibleModal(true);setPid(1)}}>
                        {t("stake")}
                      </a> : <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?approvalHandel():console.log("111")}>
                        {t("Approval")}
                      </a>
                    }
                  </RowItemButton>

                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>


          <RowItem className='col-xs-6 col-md-4 col-sm-12'>
            <div className='itemWarp'>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo><img src={require(`../../assets/images/lp/${token&&token.symbol.toLowerCase()}.png`)} height={75}></img></RowItemLogo>
                  <RowItemTitle>25天</RowItemTitle>
                  <RowItemSubTitle>我的质押:{format(stakeBalance2&&stakeBalance2.toString(),token&&token.decimals||18)}</RowItemSubTitle>
                  <RowItemSubTitle>我的收益:{format(tokenBalance2&&tokenBalance2.toString(),mainToken.decimals||18)}</RowItemSubTitle>


                  <RowItemSubTitle>
                    <div className="kdcQzs">质押 {mainToken && mainToken.symbol} LP Token</div>
                  </RowItemSubTitle>

                  <RowItemButton color="#d16c00" font-size="16">
                    <Countdown date={_time2&&_time2.valueOf()} renderer={renderer}>
                    {
                      stakeBalance2&&stakeBalance2.toString()==="0"||!account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                        {t("Harvest")}
                      </span>:<a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?harvestHandel(2):console.log("000")}>
                        {t("Harvest")}
                      </a>
                    }
                    </Countdown>
                  </RowItemButton>

                  <RowItemButton color="#d16c00" font-size="16">

                    {
                      !account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                         {t("Approval")}
                      </span>: allow ? <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>{setVisibleModal(true);setPid(2)}}>
                        {t("stake")}
                      </a> : <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?approvalHandel():console.log("111")}>
                        {t("Approval")}
                      </a>
                    }
                  </RowItemButton>

                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>

        </RowBox>
      </MenuBody>
      <Modal isOpen={visibleModal} onDismiss={()=>setVisibleModal(false)} minHeight={20} maxHeight={390} >
        <WalletBox>
          <h2>
            {format(lpBalance&&lpBalance.toString(),token&&token.decimals||18)} {token && token.symbol} LP Avaliable
          </h2>
          <InputRow style={true ? { padding: '0', borderRadius: '8px' } : {}} selected={false}>
            <>
              <NumericalInput
                className="token-amount-input"
                value={stakeAmount}
                onUserInput={val => {
                  onChange(val)
                }}
              />
              {account  && (
                <StyledBalanceMax onClick={()=>setAmount(format(lpBalance&&lpBalance.toString(),token&&token.decimals||18))}>MAX</StyledBalanceMax>
              )}
            </>

          </InputRow>

          <div
            className="cancle clickableButton"
            onClick={()=>stakeHandel(pid)}
          >
            {t("stake")}
          </div>
        </WalletBox>
      </Modal>
      <TransactionConfirmationModal
        isOpen={txConfirm}
        onDismiss={()=>setTxConfirm(false)}
        attemptingTxn={txLoading}
        hash={txId}
        content={()=><></>}
        pendingText={"Loading"}
      />
    </MenuWrap>
  )
}
