import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
    display: flex;
    width:30%;
    position: relative;
`
const RowItemLogo = styled.div`
   background-color: rgb(240, 233, 231);
    font-size: 36px;
    height: 80px;
    width: 80px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    box-shadow: rgb(226, 214, 207) 4px 4px 8px inset, rgb(247, 244, 242) -6px -6px 12px inset;
    border-radius: 40px;
    margin: 0px auto 16px;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function RowItemCon({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>
    <RowItemLogo>🍣</RowItemLogo>
    {children}
  </BodyWrapper>
}
