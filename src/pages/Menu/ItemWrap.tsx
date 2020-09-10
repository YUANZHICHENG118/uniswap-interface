import React from 'react'
import styled from 'styled-components'

import { FlexCenter } from '../../components/Column'

export const BodyWrapper = styled.div`
  padding: 24px;
  border: 1px solid #efc6ed;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0 #e7d7ea;
  position: relative;
  margin-bottom: 30px;
`
const RowItemBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 16px;
  .cardNote {
    margin-bottom: 38px;
    margin-top: 8px;
    text-align: center;
    color: #80495d;
    position: relative;
    display: flex;
    flex-direction: column;
    a {
      text-decoration: underline;
      font-size: 16px;
      color: #aa8592;
    }
    span {
      font-size: 16px;
      color: #80495d;
      line-height:25px;
    }
  }
`

const RowItemLogo = styled.div`
    background-color: #f0e7ea;
    font-size: 36px;
    height: 80px;
    width: 80px;
    border-radius: 40px;
    box-shadow: inset 4px 4px 8px #efc6ed, inset -6px -6px 12px #e7d7ea;
    margin: 0 auto;
    padding: 5px;
    font-style: normal;
    display:flex;
    justify-content: center;
    align-items: center;
    img{
    width:100%;
    }
`
const RowItemTitle = styled.h2`
  margin-top: 24px;
  text-align: center;
  color: #5b2639;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  display: block;
  word-break: break-all;
`
const RowItemButton = styled.a`
  width: 100%;
  .select {
    height: 56px;
    font-size: 16px;
    align-items: center;
    background-color: #f0e7ea;
    border: 0;
    border-radius: 12px;
    box-shadow: 4px 4px 8px #efc6ed, -8px -8px 16px #e7d7ea;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    justify-content: center;
    outline: none;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    color: #d100c9;
    :hover {
      background-color: #f1dae1;
    }
  }
`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function ItemWrap({
  children,
  itemLogo,
  title = '',
  subTitle = []
}: {
  children?: React.ReactNode
  itemLogo?: string
  title?: string
  subTitle: Array<string>
}) {
  return (
    <BodyWrapper>
      <RowItemBox>
        <FlexCenter>
          <RowItemLogo>{itemLogo}</RowItemLogo>
          <RowItemTitle>{title}</RowItemTitle>
          <div className="cardNote">
            <span>{subTitle[0]}</span>
            {subTitle[1] && <span>{subTitle[1]}</span>}
            <span>
              <a href="" target="_blank" rel="noopener noreferrer">
                Contract source code
              </a>
            </span>
          </div>
          <RowItemButton color="#d16c00" font-size="16">
            <div className="select">Select</div>
          </RowItemButton>
          {children}
        </FlexCenter>
      </RowItemBox>
    </BodyWrapper>
  )
}
