import React, { useState } from 'react'



import { TransactionResponse } from '@ethersproject/providers'

import { Card, Button, Avatar, Modal, Form, notification,Input } from 'antd'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import { LPCONTRACT, STAKE_TOKEN, UNI } from '../../constants'
import { useTranslation } from 'react-i18next'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { TokenAmount, JSBI,Token,ChainId } from '@uniswap/sdk'
import { useLpContract, useTokenContract } from '../../hooks/useContract'
import { useActiveWeb3React } from '../../hooks'
import { calculateGasMargin } from '../../utils'
import TransactionConfirmationModal from '../../components/TransactionConfirmationModal'
import { RowBetween } from '../../components/Row'

const PageWrapper = styled(AutoColumn)`
  max-width: 840px;
  width: 100%;
`
export default function Earn({
                               match: {
                                 params: { symbol, type }
                               }
                             }: RouteComponentProps<{ symbol?: string; type?: string }>) {
  const { t } = useTranslation()
  const data = STAKE_TOKEN.find(x => x.symbol === symbol)

  const {chainId,account}=useActiveWeb3React()
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [txId, setTxId] = useState<string>("")
  const [txConfirm, setTxConfirm] = useState<boolean>(false)
  const [txLoading, setTxLoading] = useState<boolean>(false)
  const [showModel, setShowModel] = useState<boolean>(false)
  const [form] = Form.useForm()

  const min=0.0001;
  // 代币合约
  const tokenContract = useTokenContract(data?.address, true)
  // 代币合约
  const tokenStakeContract = useLpContract(LPCONTRACT, true)

  // 我的余额
  const balanceOfResult = useSingleCallResult(tokenContract, 'balanceOf', [account??undefined])
  const balance=balanceOfResult?.result?.[0]??0;
  const token=new TokenAmount(new Token(chainId||ChainId.MAINNET,data?.address??"", data?.decimals??18),balance)
  console.log("my balance==",token.toSignificant(4))

  // 授权数量
  const allowanceResult = useSingleCallResult(tokenContract, 'allowance', [account??undefined,LPCONTRACT])
  const approveAmount=allowanceResult?.result?.[0]??0;
  const approveToken=new TokenAmount(new Token(chainId||ChainId.MAINNET,data?.address??"", data?.decimals??18),approveAmount)

  // 我质押的数量
  const userStakeResult = useSingleCallResult(tokenStakeContract, 'userInfo', [data?.pid,account??undefined])
  const userStakeAmount=userStakeResult?.result?.[0]??0;
  const userStakeAmountToken=new TokenAmount(new Token(chainId||ChainId.MAINNET,data?.address??"", data?.decimals??18),userStakeAmount)

  // 我的收益
  const userEarnedResult = useSingleCallResult(tokenStakeContract, 'earned', [account??undefined,data?.pid])
  const userEarnedAmount=userEarnedResult?.result?.[0]??0;
  const userEarnedAmountToken=new TokenAmount(UNI[chainId??1],userEarnedAmount)




  // 授权
  const approve=async ()=>{
    if(tokenContract) {
      setBtnLoading(true);

      setTxLoading(true)
      setTxConfirm(true)
      let value = JSBI.BigInt( 50000 * Math.pow(10, data && data.decimals || 18))
      let _amount = "0x" + value.toString(16);
      //let _amount =token.raw
      const estimatedGas = await tokenContract.estimateGas.approve(LPCONTRACT, _amount).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return tokenContract.estimateGas.approve(LPCONTRACT, _amount)
      })

      return tokenContract.approve(LPCONTRACT, _amount, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)
          setBtnLoading(false)

          setTxConfirm(true)
          setTxId(response.hash)

          console.log("response====", response)
        })
        .catch((error: Error) => {
          console.debug('Failed to approve token', error)
          throw error
        })
    }
  }

  // 质押
  const onFinish = async (values: any) => {
    console.log('Success:', values)
    if(parseFloat(values['stakeAmount'])<min){
      notification.error({
        message: t("tip"),
        description:
          t("Min "+min+" "+data?.earn+"—"+data?.lpToken),
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
      return ;
    }
    if(values['stakeAmount']-parseFloat(token.toFixed(8))>0){
      notification.error({
        message: t("tip"),
        description:
          t("balanceLow"),
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
      return ;
    }

    setBtnLoading(true)

    if(tokenStakeContract){


      let value=parseFloat(values['stakeAmount'])*Math.pow(10,data?.decimals||18)
      let amount="0x"+value.toString(16)
      //console.log('amount===',value,amount);

      //let value= new TokenAmount(Token.ETHER.,BigNumber.from(values['usdt']))

      setTxLoading(true)
      setTxConfirm(true)

      const estimatedGas = await tokenStakeContract.estimateGas.stake(amount,data?.pid).catch(() => {
        return tokenStakeContract.estimateGas.stake(amount,data?.pid)
      })

      return tokenStakeContract.stake(amount,data?.pid,{
        from:account??undefined,
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)
          setTxConfirm(true)
          setTxId(response.hash)
          setBtnLoading(false)
          setShowModel(false)

          console.log("stake response====",response)
        })
        .catch((error: Error) => {
          console.debug('Failed to stake token', error)
          throw error
        })

    }

  }

  // 领取收益
  const reap=async ()=>{

    setBtnLoading(true)
    if(tokenStakeContract){

      setTxLoading(true)
      setTxConfirm(true)

      const estimatedGas = await tokenStakeContract.estimateGas.reap(data?.pid).catch((e) => {

        return tokenStakeContract.estimateGas.reap(data?.pid)
      })

      return tokenStakeContract.reap(data?.pid, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)
          setTxConfirm(true)
          setTxId(response.hash)
          setBtnLoading(false)

          console.log("stake response====",response)
        })
        .catch((error: Error) => {
          console.debug('Failed to stake token', error)
          throw error
        })
    }
  }
  // 退本
  const unStake=async ()=>{

    setBtnLoading(true)
    if(tokenStakeContract){

      setTxLoading(true)
      setTxConfirm(true)

      const estimatedGas = await tokenStakeContract.estimateGas.exit(data?.pid).catch(() => {
        return tokenStakeContract.estimateGas.exit(data?.pid)
      })

      return tokenStakeContract.exit(data?.pid, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
        .then((response: TransactionResponse) => {
          setTxLoading(false)
          setTxConfirm(true)
          setTxId(response.hash)
          setBtnLoading(false)

          console.log("stake response====",response)
        })
        .catch((error: Error) => {
          console.debug('Failed to stake token', error)
          throw error
        })
    }
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>

      <PageWrapper>

        <Card
          hoverable
          cover={<img alt="example" style={{ width: '3rem', margin: '20px auto' }}
                      src={require(`../../assets/token/pipe.png`)}/>}
          actions={[
            <Button loading={btnLoading} disabled={userEarnedAmountToken.equalTo(JSBI.BigInt(0))} type="primary" style={{ width: '90%' }} onClick={reap}>
              {t('get-income')}
            </Button>
          ]}
        >

          <div style={{ textAlign: 'center' }}>
            <h1>{data?.earn}</h1>
            <h2>{userEarnedAmountToken.toFixed(4)}</h2>
            {/*可领取*/}
            <h2>{t('available')}</h2>
          </div>
        </Card>

        <br/>
        <Card
          hoverable
          bodyStyle={{ paddingBottom: 10 }}
          cover={

            <Avatar.Group
              maxCount={2}
              style={{ width:'6rem',margin:'20px auto'}}
            >
              <Avatar src={require(`../../assets/token/pipe.png`)} />
              {
                data?.type==="LP"?<Avatar src={require(`../../assets/token/${data.lpToken.toLowerCase()}.png`)}></Avatar>:''
              }
            </Avatar.Group>

          }
          actions={[
            parseInt(approveToken.toSignificant())>0?<Button loading={btnLoading} disabled={btnLoading} type="primary" style={{ width: '90%' }} onClick={()=>{setShowModel(true)}}>
              Stake
            </Button>:<Button loading={btnLoading} disabled={btnLoading} type="primary" style={{ width: '90%' }} onClick={approve}>
              {t('authorize')}
            </Button>,
            <Button loading={btnLoading} disabled={userStakeAmountToken.equalTo(JSBI.BigInt(0))} type="primary" style={{ width: '90%' }} onClick={unStake}>
              Withdraw
            </Button>
          ]}
        >

          <div>
            <div style={{ textAlign: 'center' }}>
              <h1>{data?.title}</h1>
              <h2>My Staked: {userStakeAmountToken.toFixed(4)}</h2>
              {/*挖矿中*/}
              <h2>{data?.earn} - {data?.lpToken} {t('mining')}</h2>
            </div>

          </div>
        </Card>

        <Modal title="Stake" visible={showModel} onOk={onFinish} footer={null} onCancel={()=>{setShowModel(false)}}>
          <Form
            layout="vertical"
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <RowBetween>
                {/*总量*/}
                <span>{t("balance")}{token.toSignificant(4)} {data?.earn+"-"+data?.lpToken}</span>
                {/*已完成*/}
              </RowBetween>
            </Form.Item>

            <Form.Item
              name="stakeAmount"
              rules={[{ required: true, message: t('P-input-amount') }]}
            >
              <Input  type={'number'} size="large" addonAfter={data?.earn+"-"+data?.lpToken} placeholder={t('p-input')+'LP'}
              />
            </Form.Item>

            <Form.Item>
              <Button disabled={ !account || token.equalTo(JSBI.BigInt(0))} loading={btnLoading}
                      style={{ width: '100%' }} size={'large'} type="primary" htmlType="submit">
                Stake
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <TransactionConfirmationModal
          isOpen={txConfirm}
          onDismiss={()=>{
            setTxConfirm(false)
            setBtnLoading(false)
          }
          }
          attemptingTxn={txLoading}
          hash={txId}
          content={()=><></>}
          pendingText={"Loading"}
        />
      </PageWrapper>
    </>
  )
}

