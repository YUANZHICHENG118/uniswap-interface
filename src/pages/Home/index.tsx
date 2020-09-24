import React from 'react'
import styled from 'styled-components'
import HomeSection from './home_section'
import XpoolSection from './home_xpool'
import wow from 'wowjs'
export const BodyWrapper = styled.div`
width:100%;
background-color: #193dc0;
height:100%;
`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Home() {
  new wow.WOW().init({
    live: true,
    animateClass:'animated'
  });
  return <BodyWrapper>
    <HomeSection/>
    <XpoolSection/>
  </BodyWrapper>
}
