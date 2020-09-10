import React from 'react'
import styled from 'styled-components'
import titleImg from '../../assets/images/farm/logo.png'
export const BodyWrapper = styled.div`
 padding: 30px 0;
 min-height: calc(100vh - 144px);
 width:100%
 .greating{
 margin-bottom: 50px;
 text-align:center
 h1 {
    font-size: 36px;
    font-weight: 700;
    color: #5b2639;
    margin-bottom: 0;
}
 h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #aa8592;
}
 }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Home() {
  return <BodyWrapper>
     <div className="greating">
       <img src={titleImg} alt="ball" width="180px"/>
       <h1>Stake Anytime, Unstake Anytime, Get Rewards Instantly.</h1>
       <h3>It's a great day to mine some Dragon Balls on TRON.</h3>
       <h3>Dragon Finance's Smart Contract has been verified  TronScan. Check open source code
         <a href="" target="_blank" rel="noopener noreferrer" >here</a>.
       </h3>
       <h3 style={{color: 'rgb(91, 38, 57)',fontWeight: 700}}>
         DRAGON Address:
         <span className="ellipsis" style={{color: 'rgb(91, 38, 57)'}}>TYLPtEvANesoVWEKKzbDFnfuiKdaRNkpmb</span>
       </h3>
     </div>
  </BodyWrapper>
}
