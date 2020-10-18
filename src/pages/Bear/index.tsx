import React, { useState } from 'react'

import styled from 'styled-components'

import { AIR_POOL_ADDRESS, mainToken } from '../../constants/index'
import { useTranslation } from 'react-i18next'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { useAirContract } from '../../hooks/useContract'
import { TransactionResponse } from '@ethersproject/providers'
import { useActiveWeb3React } from '../../hooks'
import { calculateGasMargin } from '../../utils'
import TransactionConfirmationModal from '../../components/TransactionConfirmationModal'

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

const RowItemSubTitle = styled.div`
  margin-top: 8px;
  text-align: center;
  .kdcQzs {
    color: #000;
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
export default function Bear() {
  const {t}=useTranslation();

  const { account } = useActiveWeb3React()
  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [txId, setTxId] = useState<string>("")

  const contract = useAirContract(AIR_POOL_ADDRESS, true)


  const allowance = useSingleCallResult(contract, 'isAirdrop', [account ?? undefined])


  console.log("allowance====",allowance)

  const allow=allowance && allowance.result && allowance.result[0]&& allowance.result[0]['_hex']!="0x00"


  const airHandeler= async ()=>{
    if(contract){
      setTxLoading(true)
      setTxConfirm(true)

      const estimatedGas = await contract.estimateGas.airDefiTransfer(account ?? undefined).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.airDefiTransfer(account ?? undefined)
      })

      return contract.airDefiTransfer(account ?? undefined, {
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

  return (
    <MenuWrap className='container'>
      <MenuTop></MenuTop>
      <MenuBody>
        <RowBox className='row'>
          <RowItem className='col-xs-6 col-md-4 col-sm-12'>
            <div className='itemWarp '>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo><img src={require(`../../assets/images/lp/lef.png`)} height={75}></img></RowItemLogo>

                  <RowItemSubTitle>
                    <div className="kdcQzs">{t("index14")}  {mainToken.symbol}</div>
                  </RowItemSubTitle>
                  <RowItemButton color="#d16c00" font-size="16">
                    {
                      allow?<a className="sc-AxirZ kRQAGp" href="JavaScript:void(0)" >
                        已领取
                      </a>:<a className="sc-AxirZ kRQAGp" href="JavaScript:void(0)"  onClick={airHandeler}>
                        {t("index14")}
                      </a>
                    }

                  </RowItemButton>

                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>
        </RowBox>
      </MenuBody>
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
