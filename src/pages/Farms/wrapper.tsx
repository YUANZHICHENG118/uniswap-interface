import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 144px);
  padding: 30px;
  .button {
    width: calc(100% - 40px);
    align-items: center;
    background-color: rgb(240, 231, 234);
    box-shadow: rgb(226, 207, 213) 4px 4px 8px, rgb(247, 242, 244) -8px -8px 16px;
    color: rgb(209, 0, 75);
    font-size: 16px;
    font-weight: 700;
    height: 56px;
    line-height: 56px;
    justify-content: center;
    margin: 60px 20px 0px;
    padding: 0px;
    border-radius: 12px;
    outline: none;
    text-align:center;
    margin:0 auto;
  }
  .harvestAndUnstake {
    width: 300px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   padding: 30px 0;
  `};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function MenuWrap({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
