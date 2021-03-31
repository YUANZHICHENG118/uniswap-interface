import React from 'react'

import { List } from 'antd'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { STAKE_TOKEN } from '../../constants'
import Lq from './lq'
import Lqt from './lqt'

import { RouteComponentProps } from 'react-router-dom'

// const { Countdown } = Statistic
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

const PageWrapper = styled(AutoColumn)`
  width: 90%;
  ${({ theme }) => theme.mediaWidth.upToLarge`
        padding: 0rem 0.2rem;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
        width: 100%;
  `}

`
export default function Stake(history: RouteComponentProps) {
  //const { t } = useTranslation()
  // const onFinish = () => {
  //
  // }


  return (
    <>

      <PageWrapper>
        <List
          rowKey="id"
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4
          }}
          dataSource={STAKE_TOKEN}
          renderItem={(item) => (
            <List.Item key={item.id}>
              {/*<Badge.Ribbon text={<Countdown value={deadline} onFinish={onFinish} valueStyle={{ fontSize: 12 }}/>*/}
              {/*} color={'#10ff25'}>*/}
              {
                item.type==="LP"?<Lq item={item} history={history}/>:<Lqt item={item} history={history}/>
              }

              {/*</Badge.Ribbon>*/}
            </List.Item>
          )}
        />


      </PageWrapper>
    </>
  )
}
