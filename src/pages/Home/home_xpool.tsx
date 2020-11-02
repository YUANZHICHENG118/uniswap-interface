import React, { useState } from 'react'
import styled from 'styled-components'
import { TransactionResponse } from '@ethersproject/providers'
import BigNumber from 'bignumber.js'
import { POOL_ADDRESS, HOST, mainToken,defRefAddress,supportedPools } from '../../constants/index'
import TransactionConfirmationModal from '../../components/TransactionConfirmationModal'

import XpoolItem from './xpoolItem'
import { useBatContract, useLpContract, useTokenContract } from '../../hooks/useContract'
import { useActiveWeb3React } from '../../hooks'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { calculateGasMargin } from '../../utils'
import useCopyClipboard from '../../hooks/useCopyClipboard'
import { useTranslation } from 'react-i18next'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
})

export const BodyWrapper = styled.section`
  position: relative;
  .title_default_light {
    p {
      margin-bottom: 30px;
    }
  }
  .income {
    .middleBG {
      background-color: ${({ theme }) => theme.middleBG};
    }
    .tk_countdown.bg-white-tran {
      padding: 20px 10px;
    }
    .token_sale_box_white {
      background-color: ${({ theme }) => theme.middleBG};
      padding: 20px 15px 15px;
      color: ${({ theme }) => theme.text1};
    }
    .pool-wrapper {
      text-align: center;
      margin-top: 30px;
      .withdraw {
        margin: 0 0 10px 0 !important;
        padding: 0;
        height: 54px;
        line-height: 54px;
        color: ${({ theme }) => theme.text1};
        border-radius: 27px;
        background: ${({ theme }) => theme.primary4};
        ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        width:80%;
      `};
      }
    }
     @media (min-width: 960px) {
        .pool-width {
          width: 300px;
        }
    }

    .pool-news {
      padding: 20px 40px;
      border-radius: 5px;
      .pool-content {
        color: #ffcb68;
        word-wrap: break-word;
        word-break: normal;
        font-size: 16px;
        margin: 10px 0;
      }
      .link-name {
        color: ${({ theme }) => theme.text1};
      }
      .link-content {
        word-break: break-all;
        cursor: pointer;
      }
    }
    .inner-wrapper {
      max-width: none;
      clear: both;
    }
    .tk_counter_inner {
      .mb-2 {
        color: ${({ theme }) => theme.text1};
      }
      .sushi-balance {
        color: #ffcb68;
        display: inline-block;
      }
    }
  }
`
//
// const StyledBalanceMax = styled.button`
//   height: 28px;
//   background-color: ${({ theme }) => theme.primary5};
//   border: 1px solid ${({ theme }) => theme.primary5};
//   border-radius: 0.5rem;
//   font-size: 0.875rem;
//
//   font-weight: 500;
//   cursor: pointer;
//   margin-right: 0.5rem;
//   color: ${({ theme }) => theme.primaryText1};
//   :hover {
//     border: 1px solid ${({ theme }) => theme.primary1};
//   }
//   :focus {
//     border: 1px solid ${({ theme }) => theme.primary1};
//     outline: none;
//   }
//
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     margin-right: 0.5rem;
//   `};
// `

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Xpool(props: { refAddress: any }) {
  const {
    refAddress
  } = props
  const { t } = useTranslation()

  const [isCopied, setCopied] = useCopyClipboard()

  const { account } = useActiveWeb3React()
  const [txId, setTxId] = useState<string>("")
  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)

  const token=supportedPools[0];
  const token1=supportedPools[1];

  const lpcontract = useLpContract(token && token.lpAddresses, true)
  const lpcontract1 = useLpContract(token1 && token1.lpAddresses, true)

  const tokenContract = useTokenContract(mainToken.address, false)

  const contract = useBatContract(POOL_ADDRESS, true)
  const isUserExists = useSingleCallResult(contract, 'isUserExists', [account || defRefAddress])


  const isRefUserExists =useSingleCallResult(contract, 'isUserExists', [refAddress||defRefAddress])
  const getLpBalance = useSingleCallResult(lpcontract, 'balanceOf', [POOL_ADDRESS])
  const getLpBalance1 = useSingleCallResult(lpcontract1, 'balanceOf', [POOL_ADDRESS])
  const getTokenBalance = useSingleCallResult(tokenContract, 'balanceOf', [account??undefined])
  //const getTotalReward = useSingleCallResult(contract, 'totalReward', [account??undefined])
 // const getNotRef = useSingleCallResult(contract, 'refer_pending', [account??undefined])

  const getTotalRef1 = useSingleCallResult(contract, 'getReferAmount', [account??undefined,0])
  const getTotalRef2 = useSingleCallResult(contract, 'getReferAmount', [account??undefined,1])


  const getReferCount = useSingleCallResult(contract, 'getReferCount', [account??undefined])


  const lpBalance=getLpBalance && getLpBalance.result&& getLpBalance.result[0]
  const lpBalance1=getLpBalance1 && getLpBalance1.result&& getLpBalance1.result[0]
  const tokenBalance=getTokenBalance && getTokenBalance.result&& getTokenBalance.result[0]
 // const totalReward=getTotalReward && getTotalReward.result&& getTotalReward.result[0]

  // 待领取
  // const notRef=getNotRef && getNotRef.result&& getNotRef.result[0]
  // // 领取合计
   const totalRef1=getTotalRef1 && getTotalRef1.result&& getTotalRef1.result[0]
  const totalRef2=getTotalRef2 && getTotalRef2.result&& getTotalRef2.result[0]


  const isReg = isUserExists && isUserExists.result && isUserExists.result[0]
  const isRefReg = isRefUserExists && isRefUserExists.result && isRefUserExists.result[0]

  const format=(value:number,decimal:number):any=>{
    if(value){
      value=value/Math.pow(10,decimal)
    }
    return value&&value.toFixed(4) ||"0.0000"
  }
  const copy = (val: string) => {
    setCopied(val)
  }
  const register = async () => {

    if(!account){
      alert("connect to wallet")
      return ;
    }

    if (contract) {
      let _ref=refAddress;

      if(!refAddress){
        _ref=defRefAddress;
      }else{
        if(!isRefReg){
          alert("refAddress not register")
        }
      }


      setTxLoading(true)
      setTxConfirm(true)


      const estimatedGas = await contract.estimateGas.registrationExt(_ref).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.registrationExt(_ref)
      })

      return contract.registrationExt(_ref, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)
          setTxConfirm(true)
          setTxId(response.hash)
          console.log('response====', response)
        })
        .catch((error: Error) => {
          console.debug('Failed to reg token', error)
          throw error
        })

    }
  }

  // 领取奖励
  // const receiveRef= async ()=>{
  //   if(!account){
  //     alert("connect to wallet")
  //     return ;
  //   }
  //
  //   if (contract) {
  //
  //
  //     const estimatedGas = await contract.estimateGas.getReferPending(account).catch(() => {
  //       // general fallback for tokens who restrict approval amounts
  //       return contract.estimateGas.getReferPending(account)
  //     })
  //
  //     return contract.getReferPending(account, {
  //       gasLimit: calculateGasMargin(estimatedGas)
  //     })
  //       .then((response: TransactionResponse) => {
  //         setTxConfirm(true)
  //         setTxId(response.hash)
  //         console.log('response====', response)
  //       })
  //       .catch((error: Error) => {
  //         console.debug('Failed to reg token', error)
  //         throw error
  //       })
  //
  //   }
  // }


  return (
    <BodyWrapper>
      <div className="container">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
          <div className="title_default_light title_border text-center">
            <h4 className="wow animation animated fadeInUp">{mainToken.name} POOL</h4>
            <p className="wow animation animated fadeInUp " data-wow-animation="fadeInUp" data-wow-delay="0.4s">
              {t("index3")} {mainToken.symbol}, {t("index4")} {mainToken.symbol} <a href={"/PizzaSwap.pdf"} target={"_blank"}>{t("audit")}</a>
            </p>
          </div>
        </div>
        <div className="income">
          <div className="row row-cols-1 row-cols-lg-2 m-n1">
            <XpoolItem title={`${token.symbol} ${t("index5")}`} token={token} amount={format(lpBalance&&lpBalance.toString(),token&&token.decimals||18)}/>
            <XpoolItem title={`${token1.symbol} ${t("index5")}`} token={token1} amount={format(lpBalance1&&lpBalance1.toString(),token1&&token1.decimals||18)}/>
            <XpoolItem title={t("index6")} token={mainToken} amount={9000}/>

            <BodyWrapper>
              <div className="col p-1">
                <div className="wow bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp">
                  <h5>{`APR (${t("index7")})`}</h5>
                  <span className="total-lock show-data">{`${t("index701")}`}</span>&nbsp;
                </div>
              </div>
            </BodyWrapper>


          </div>
          <div className="row my-1 mx-n1">
            <div className="token_sale res_md_mt_10 p-1 w-100">
              <div className="tk_countdown bg-white-tran text-center middleBG">
                <div className="tk_counter_inner inner-wrapper">
                  <div className="text-center mb-2">
                    {t("index8")}: <div className="sushi-balance">{format(tokenBalance&&tokenBalance.toString(),mainToken&&mainToken.decimals||18)||'--.-----'}</div> {mainToken.symbol}
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="my-1 row row-cols-1 row-cols-lg-4 m-n1">

            <div className="col p-1">
              <div className="wow bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp">
                <h5>{t("index11")}</h5>
                <span className="total-lock show-data">{parseInt(getReferCount && getReferCount.result&& getReferCount.result[0]||0)}</span>
              </div>
            </div>

            <div className="col p-1">
              <div className="wow bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp">
                <h5>{t("index12")}</h5>
                <span className="total-lock show-data">{parseInt(getReferCount && getReferCount.result&& getReferCount.result[1]||0)}</span>
              </div>
            </div>


            <XpoolItem title={t("index13")} token={mainToken} amount={format(totalRef1&&totalRef1.toString(),mainToken&&mainToken.decimals||18)}/>
            <XpoolItem title={t("index131")} token={mainToken} amount={format(totalRef2&&totalRef2.toString(),mainToken&&mainToken.decimals||18)}/>

          </div>
          <div className="my-1 pt-1">
            <div className="pool-wrapper ">
              {
                isReg ? <a href="javascript:void(0)"
                           className="btn btn-default pool-width btn-radius withdraw  active-{mainToken.symbol}">
                  {t("index10")}
                  <i className="ion-ios-arrow-thin-right btn-radius"></i>
                </a> : <a href="javascript:void(0)" onClick={() => register()}
                          className="btn btn-default pool-width btn-radius withdraw  active-{mainToken.symbol}">
                  {t("index9")}
                  <i className="ion-ios-arrow-thin-right btn-radius"></i>
                </a>
              }

            </div>
            <div className="pool-news mt-0 middleBG">
              <div className="link-name pool-content">{t("index16")}：{`${HOST}/#/Home?ref=${account || ''}`}</div>
              {/*<div className="link-content pool-content">*/}
              {/*Please install tronlink wallet, if installed, please login！{' '}*/}
              {/*</div>*/}
              <div className="pool-wrapper">
                <a href="javascript:void(0)" onClick={() => copy(`${HOST}/#/Home?ref=${account || ''}`)}
                   className="btn btn-default btn-radius withdraw  pool-width btn-copy">
                  {
                    isCopied ? 'Copy Sucess' : t("index17")
                  }
                  <i className="ion-ios-arrow-thin-right btn-radius "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionConfirmationModal
        isOpen={txConfirm}
        onDismiss={()=>setTxConfirm(false)}
        attemptingTxn={txLoading}
        hash={txId}
        content={()=><></>}
        pendingText={"Loading"}
      />
    </BodyWrapper>
  )
}
