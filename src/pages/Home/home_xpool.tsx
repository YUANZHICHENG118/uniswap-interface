import React from 'react'
import styled from 'styled-components'
import { TransactionResponse } from '@ethersproject/providers'
import BigNumber from 'bignumber.js'
import { POOL_ADDRESS, HOST, mainToken } from '../../constants/index'

import XpoolItem from './xpoolItem'
import { useBatContract } from '../../hooks/useContract'
import { useActiveWeb3React } from '../../hooks'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { calculateGasMargin } from '../../utils'
import useCopyClipboard from '../../hooks/useCopyClipboard'

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

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Xpool(props: { refAddress: any }) {
  const {
    refAddress
  } = props

  const [isCopied, setCopied] = useCopyClipboard()

  const { account } = useActiveWeb3React()

  const defRefAddress="0xcfce2a772ae87c5fae474b2de0324ee19c2c145f";

  const contract = useBatContract(POOL_ADDRESS, true)
  const isUserExists = useSingleCallResult(contract, 'isUserExists', [account || ''])

  const isRefUserExists =useSingleCallResult(contract, 'isUserExists', [refAddress||defRefAddress])



  const isReg = isUserExists && isUserExists.result && isUserExists.result[0]
  const isRefReg = isRefUserExists && isRefUserExists.result && isRefUserExists.result[0]


  const copy = (val: string) => {
    setCopied(val)
  }
  const register = async () => {

    if (contract) {
      let _ref=refAddress;

      if(!refAddress){
        _ref=defRefAddress;
      }else{
        if(!isRefReg){
          alert("refAddress not register")
        }
      }



      const estimatedGas = await contract.estimateGas.registrationExt(_ref).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return contract.estimateGas.registrationExt(_ref)
      })

      return contract.registrationExt(_ref, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {

          console.log('response====', response)
        })
        .catch((error: Error) => {
          console.debug('Failed to reg token', error)
          throw error
        })

    }
  }


  return (
    <BodyWrapper>
      <div className="container">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
          <div className="title_default_light title_border text-center">
            <h4 className="wow animation animated fadeInUp">{mainToken.symbol} POOL</h4>
            <p className="wow animation animated fadeInUp " data-wow-animation="fadeInUp" data-wow-delay="0.4s">
              Stake {mainToken.symbol}, Earn {mainToken.symbol}
            </p>
          </div>
        </div>
        <div className="income">
          <div className="row row-cols-1 row-cols-lg-2 m-n1">
            {[1, 1, 1, 1].map(() => (
              <XpoolItem/>
            ))}
          </div>
          <div className="row my-1 mx-n1">
            <div className="token_sale res_md_mt_10 p-1 w-100">
              <div className="tk_countdown bg-white-tran text-center middleBG">
                <div className="tk_counter_inner inner-wrapper">
                  <div className="text-center mb-2">
                    You Balance: <div className="sushi-balance">--.-----</div> {mainToken.symbol}
                  </div>
                  <div className="pool-wrapper ">
                    {
                      isReg ? <a href="javascript:void(0)"
                                 className="btn btn-default pool-width btn-radius withdraw  active-{mainToken.symbol}">
                        Register Success
                        <i className="ion-ios-arrow-thin-right btn-radius"></i>
                      </a> : <a href="javascript:void(0)" onClick={() => register()}
                                className="btn btn-default pool-width btn-radius withdraw  active-{mainToken.symbol}">
                        Registration with 100 TRX!
                        <i className="ion-ios-arrow-thin-right btn-radius"></i>
                      </a>
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-1 row row-cols-1 row-cols-lg-3 m-n1">
            {[1, 1, 1].map(() => (
              <XpoolItem/>
            ))}
          </div>
          <div className="my-1 pt-1">
            <div className="pool-news mt-0 middleBG">
              <div className="link-name pool-content">Your Referral Link：{`${HOST}/#/Home?${account || ''}`}</div>
              {/*<div className="link-content pool-content">*/}
              {/*Please install tronlink wallet, if installed, please login！{' '}*/}
              {/*</div>*/}
              <div className="pool-wrapper">
                <a href="javascript:void(0)" onClick={() => copy(`${HOST}/#/Home?${account || ''}`)}
                   className="btn btn-default btn-radius withdraw  pool-width btn-copy">
                  {
                    isCopied ? 'Copy Sucess' : 'Copy Link'
                  }
                  <i className="ion-ios-arrow-thin-right btn-radius "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}
