import React from 'react'
import styled from 'styled-components'
import HomeSection from './home_section'
export const BodyWrapper = styled.div`
width:100%;

`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Home() {
  return <BodyWrapper>
   <HomeSection/>
  </BodyWrapper>
}
