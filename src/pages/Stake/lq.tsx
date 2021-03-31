import React from 'react'


import { Card, Button, Avatar, Row, Col } from 'antd'

import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useActiveWeb3React } from '../../hooks'
import { LPCONTRACT } from '../../constants'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { TokenAmount, Token, ChainId } from '@uniswap/sdk'
import { useTokenContract } from '../../hooks/useContract'

export default function Lq({
  item,
                             history
                           }: {item:any,history:RouteComponentProps}) {
  const { t } = useTranslation()
  const {chainId}=useActiveWeb3React()

  // 代币合约
  const tokenContract = useTokenContract(item.address, false)

  // 总质押
  const balanceOfResult = useSingleCallResult(tokenContract, 'balanceOf', [LPCONTRACT])

  const balance=balanceOfResult?.result?.[0]??0;

  const token=new TokenAmount(new Token(chainId||ChainId.MAINNET,item.address,item.decimals),balance)

  return (
    <>
      <Card
        hoverable
        bodyStyle={{ paddingBottom: 20 }}
        actions={[
          <Button type="primary" style={{ width: '90%' }} onClick={() => {
            history.history.push(`/earn/${item.symbol}/${item.type}`)
          }}>
            {/*选择*/}
            {t('select')}
          </Button>
        ]}
      >
        <br/>
        <Card.Meta
          avatar={
            <Avatar.Group>
              <Avatar src={require(`../../assets/token/pipe.png`)}/>
              {
                item.type === 'LP' ?
                  <Avatar src={require(`../../assets/token/${item.lpToken.toLowerCase()}.png`)}></Avatar> : ''
              }
            </Avatar.Group>

          } title={item.title}
          description={item.desc}/>
        <div>
          <br/>
          <Row>
            {/*已质押*/}
            <Col flex={2}>{t('pledged')}:</Col>
            <Col flex={3} style={{ textAlign: 'right', color: '#9e9e9e' }}>{token.toSignificant(4)}</Col>
          </Row>

          <Row>
            {/*年利率*/}
            <Col flex={2}>APY:</Col>
            <Col flex={3} style={{ textAlign: 'right', color: '#9e9e9e' }}>10000%</Col>
          </Row>
        </div>
      </Card>
    </>
  )
}
