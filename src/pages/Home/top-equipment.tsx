import React from 'react'
import styled from 'styled-components'

import marioImg from '../../assets/images/home/mario.png'
import marioTextImg from '../../assets/images/home/Mario-text.png'

import { Button } from 'antd';
export const BodyWrapper = styled.div`
position: relative;
.address{
background: linear-gradient(90deg, #FFB707 0%, #FFCE00 100%);
border-radius: 27px;
}
.equipment{
background: linear-gradient(90deg, #5B5F76 0%, #2E3141 100%);
box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.5);
border-radius: 27px;
}
${({ theme }) => theme.mediaWidth.upToExtraSmall`
width:90%;
`};

`

/**
* The styled container element that wraps the content of most pages and the tabs.
*/
export default function AppBody() {
return <BodyWrapper>
  <div>
    <img src={marioTextImg} alt=""/>
    <img src={marioImg} alt=""/>
  </div>
  <div>
    <div className="equipment"></div>
    <div className="address">
      <div>我的地址</div>
      <div></div>
      <div>
        <div>复制地址加入团队，开始获得Super Mario ETH2.0 高额收益</div>
        <Button type="primary">连接钱包</Button>
      </div>
    </div>
  </div>
</BodyWrapper>
}
