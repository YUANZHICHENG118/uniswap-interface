import React from 'react'
import styled from 'styled-components'
// import HomeSection from './home_section'
// import XpoolSection from './home_xpool'
import About from './about'
import TopEquipment from './top-equipment'
//选择设备
import HomeChoose from './home-choose'
//团队奖励
import TeamReward from './Team_reward'
import { RouteComponentProps } from 'react-router-dom'
export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  .bgwrap {
    background: linear-gradient(90deg, #5b5f76 0%, #2e3141 100%);
  }
`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Home(props: RouteComponentProps<{}>) {
  const {
    location: { search }
  } = props

  /**
   * [通过参数名获取url中的参数值]
   * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
   * @param  {[string]} queryName [参数名]
   * @return {[string]}           [参数值]
   */
  const GetQueryValue = (queryName: string) => {
    var reg = new RegExp('(^|&)' + queryName + '=([^&]*)(&|$)', 'i')
    var r = search.substr(1).match(reg)
    if (r != null) {
      sessionStorage.setItem('ref', decodeURI(r[2])) //把data对应的值保存到sessionStorage
      return decodeURI(r[2])
    } else {
      return null
    }
  }

  const ref = GetQueryValue('ref')

  return (
    <BodyWrapper>
      <div className="container">
        <TopEquipment />
        <HomeChoose />
        <TeamReward />
        {/*<HomeSection/>*/}
        {/*<XpoolSection refAddress={ref||sessionStorage.getItem("ref")}/>*/}
        <About></About>
      </div>
    </BodyWrapper>
  )
}
