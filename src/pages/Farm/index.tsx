import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'

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
import { calculateGasMargin } from '../../utils'
import BigNumber from 'bignumber.js'
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
  background-color: ${({ theme }) => theme.primary5};
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

  const onChange = (e: any) => {
    setAmount(e)
  }
  const token = supportedPools.find(x => x.symbol === symbol)

  const lpcontract = useLpContract(token && token.lpAddresses, true)

  const contract = useBatContract(POOL_ADDRESS, true)


  const allowance = useSingleCallResult(lpcontract, 'allowance', [account ?? undefined, POOL_ADDRESS])

  const getLpBalance = useSingleCallResult(lpcontract, 'balanceOf', [account ?? undefined])

  const getStakeBalance = useSingleCallResult(contract, 'userInfo', [token&&token.pid, account ?? undefined])

  const getTokenBalance = useSingleCallResult(contract, 'pendingPizza', [token&&token.pid, account ?? undefined])


  const allow=allowance && allowance.result && allowance.result[0]&& allowance.result[0]['_hex']!="0x00"

  const tokenBalance=getTokenBalance && getTokenBalance.result && getTokenBalance.result[0]
  const stakeBalance=getStakeBalance && getStakeBalance.result&& getStakeBalance.result[1]

  const lpBalance=getLpBalance && getLpBalance.result&& getLpBalance.result[0]

  const format=(value:number,decimal:number,d?:number):any=>{
    if(value){
      value=value/Math.pow(10,decimal)
    }
    return value&&value.toFixed(d||4) || parseFloat("0").toFixed(d||4)
  }

  console.log("stakeBalance===",stakeBalance)

  useEffect(()=>{
  },[])

  // 授权
  const approvalHandel= async ()=>{
    if(lpcontract){


      setTxLoading(true)
      setTxConfirm(true)

      let value=new BigNumber(1000000000000*Math.pow(10,token &&token.decimals||18))
      let _amount="0x"+value.toString(16);
      const estimatedGas = await lpcontract.estimateGas.approve(POOL_ADDRESS,_amount).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return lpcontract.estimateGas.approve(POOL_ADDRESS,_amount)
      })

      return lpcontract.approve(POOL_ADDRESS,_amount, {
        gasLimit: calculateGasMargin(estimatedGas)
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
  const stakeHandel= async ()=>{


    if(stakeAmount<=0){
      return ;
    }
    if(contract){


      let value=new BigNumber(stakeAmount*Math.pow(10,token &&token.decimals||18))
      let _amount="0x"+value.toString(16);
      setTxLoading(true)
      setTxConfirm(true)


      const estimatedGas = await contract.estimateGas.deposit(token && token.pid,_amount).catch(() => {
        return contract.estimateGas.deposit(token && token.pid,_amount)
      })

      console.log("estimatedGas====",estimatedGas)

      return contract.deposit(token && token.pid,_amount, {
        gasLimit: calculateGasMargin(estimatedGas)
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
  const harvestHandel= async ()=>{
    if(contract){

      let _amount=stakeBalance._hex;
      setTxLoading(true)
      setTxConfirm(true)

      const estimatedGas = await contract.estimateGas.withdraw(token && token.pid,_amount).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.withdraw(token && token.pid,_amount)
      })

      return contract.withdraw(token && token.pid,_amount, {
        gasLimit: calculateGasMargin(estimatedGas)
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

  // 领取奖励
  const getRewardHandel= async ()=>{
    if(contract){

      setTxLoading(true)
      setTxConfirm(true)

      const estimatedGas = await contract.estimateGas.getReward(token && token.pid).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.getReward(token && token.pid)
      })

      return contract.getReward(token && token.pid, {
        gasLimit: calculateGasMargin(estimatedGas)
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
  return (
    <MenuWrap className='container'>
      <MenuTop />
      <MenuBody>
        <RowBox className='row'>
          <RowItem className='col-xs-6 col-md-4 col-sm-12'>
            <div className='itemWarp'>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo><img src={require("../../assets/images/lp/pz.png")} height={75}></img></RowItemLogo>
                  <RowItemTitle>{format(tokenBalance&&tokenBalance.toString(),mainToken.decimals||18)}</RowItemTitle>
                  <RowItemSubTitle>
                    <div className="kdcQzs">Earn {mainToken && mainToken.symbol}</div>
                  </RowItemSubTitle>
                  <RowItemButton color="#d16c00" font-size="16">



                    {
                      tokenBalance&&tokenBalance.toString()==="0"||!account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                        {t("index14")}
                      </span>:<a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?getRewardHandel():console.log("000")}>
                        {t("index14")}
                      </a>
                    }

                  </RowItemButton>
                  <RowItemButton color="#d16c00" font-size="16">



                    {
                      stakeBalance&&stakeBalance.toString()==="0"||!account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                        {t("Harvest")}
                      </span>:<a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>account?harvestHandel():console.log("000")}>
                        {t("Harvest")}
                      </a>
                    }

                  </RowItemButton>

                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>


          <RowItem className='col-xs-6 col-md-4 col-sm-12'>
            <div className={'itemWarp'}>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo><img src={require(`../../assets/images/lp/${token&&token.symbol.toLowerCase()}.png`)} height={75}></img></RowItemLogo>
                  <RowItemTitle>{format(stakeBalance&&stakeBalance.toString(),token&&token.decimals||18,8)}</RowItemTitle>
                  <RowItemSubTitle>
                    <div className="kdcQzs">{token && token.symbol} LP Staked</div>
                  </RowItemSubTitle>
                  <RowItemButton color="#d16c00" font-size="16">



                    {
                      !account?<span className="sc-AxirZ kRQAGp" style={{color:'#999'}} >
                         {t("Approval")}
                      </span>: allow ? <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={()=>setVisibleModal(true)}>
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
            {format(lpBalance&&lpBalance.toString(),token&&token.decimals||18,8)} {token && token.symbol} LP Avaliable
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
                <StyledBalanceMax onClick={()=>setAmount(format(lpBalance&&lpBalance.toString(),token&&token.decimals||18,8))}>MAX</StyledBalanceMax>
              )}
            </>

          </InputRow>

          <div
            className="cancle clickableButton"
            onClick={stakeHandel}
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
