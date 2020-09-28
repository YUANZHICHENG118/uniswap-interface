import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { TransactionResponse } from '@ethersproject/providers'

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
  width: 900px;
`
const RowBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-flow: row wrap;
`
const RowItem = styled.div`
  display: flex;
  width: 30%;
  position: relative;
  .itemWarp {
    box-shadow: rgb(247, 244, 242) 1px 1px 0px inset;
    display: flex;
    flex-direction: column;
    background: rgb(240, 233, 231);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226, 214, 207);
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
  color: rgb(91, 57, 38);
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0px 0px;
  padding: 0px;
`
const RowItemSubTitle = styled.div`
  margin-top: 8px;
  text-align: center;
  .kdcQzs {
    color: rgb(128, 94, 73);
  }
`

const RowItemButton = styled.div`
  align-items: center;
  background-color: rgb(240, 233, 231);
  box-shadow: rgb(226, 214, 207) 6px 6px 12px, rgb(247, 244, 242) -12px -12px 24px -2px;
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
  const { account } = useActiveWeb3React()

  const [allow, setAllow] = useState<boolean>(false)

  const token = supportedPools.find(x => x.symbol === symbol)

  const lpcontract = useLpContract(token && token.lpAddresses, true)

  const contract = useBatContract(POOL_ADDRESS, true)


  const allowance = useSingleCallResult(lpcontract, 'allowance', [account||"", POOL_ADDRESS])

  const stakeBalance = useSingleCallResult(contract, 'userInfo', [token&&token.pid, account||""])

  const getTokenBalance = useSingleCallResult(contract, 'pendingSushi', [token&&token.pid, account||""])

  console.log('allowance', allowance,stakeBalance,getTokenBalance)
  console.log('contract', contract,lpcontract,account)

  useEffect(()=>{
    setAllow(true)
  },[])

  // 授权
  const approvalHandel= async ()=>{
    if(lpcontract){
      const estimatedGas = await lpcontract.estimateGas.approve(POOL_ADDRESS,100000).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return lpcontract.estimateGas.approve(POOL_ADDRESS,100000)
      })

      return lpcontract.approve(POOL_ADDRESS,100000, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {

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
    if(contract){
      const amount=1* Math.pow(10,token&&token.decimals||18);
      const _amount=1*amount;

      const estimatedGas = await contract.estimateGas.deposit(token && token.pid,_amount).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.deposit(token && token.pid,_amount)
      })

      return contract.deposit(token && token.pid,_amount, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {

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
      const estimatedGas = await contract.estimateGas.withdraw(token && token.pid,1).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.withdraw(token && token.pid,1)
      })

      return contract.withdraw(token && token.pid,1, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {

          console.log("stake response====",response)
        })
        .catch((error: Error) => {
          console.debug('Failed to stake token', error)
          throw error
        })

    }
  }
  return (
    <MenuWrap>
      <MenuTop></MenuTop>
      <MenuBody>
        <RowBox>
          <div></div>

          <RowItem>
            <div className={'itemWarp'}>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo>{mainToken && mainToken.icon}</RowItemLogo>
                  <RowItemTitle>0.00</RowItemTitle>
                  <RowItemSubTitle>
                    <div className="kdcQzs">Earn {mainToken && mainToken.symbol}</div>
                  </RowItemSubTitle>
                  <RowItemButton color="#d16c00" font-size="16">
                    <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={harvestHandel}>
                      Harvest
                    </a>
                  </RowItemButton>

                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>


          <RowItem>
            <div className={'itemWarp'}>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo>{token && token.icon}</RowItemLogo>
                  <RowItemTitle>0.00</RowItemTitle>
                  <RowItemSubTitle>
                    <div className="kdcQzs">{token && token.symbol} Tokens Staked</div>
                  </RowItemSubTitle>
                  <RowItemButton color="#d16c00" font-size="16">

                    {
                      allow ? <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={stakeHandel}>
                        stack
                      </a> : <a className="sc-AxirZ kRQAGp" href={'javascript:void(0)'} onClick={approvalHandel}>
                        Approval
                      </a>
                    }
                  </RowItemButton>

                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>


        </RowBox>
      </MenuBody>
    </MenuWrap>
  )
}
