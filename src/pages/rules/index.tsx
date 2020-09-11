import React from 'react'
import styled from 'styled-components'
import FarmTop from '../Farms/menuTop'
export const BodyWrapper = styled.div`
  padding: 30px 200px
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function Rules() {
  return <BodyWrapper>
    <FarmTop imgUrl={''} h1Text='Rules'/>
  </BodyWrapper>
}
