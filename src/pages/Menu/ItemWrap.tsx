import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FlexCenter } from '../../components/Column'

const FlexBox = styled(FlexCenter)`
  height: 100%;
  justify-content: space-between;
`

export const BodyWrapper = styled.div`
  box-shadow: rgb(247, 244, 242) 1px 1px 0px inset;
  display: flex;
  flex-direction: column;
  background: rgb(240, 233, 231);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(226, 214, 207);
  border-image: initial;
  border-radius: 12px;
  flex: 1 1 0%;
`
const RowItemBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 16px;
`
const RowItemTop = styled.div``

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
const RowItemTitle = styled.h4`
  color: rgb(91, 57, 38);
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0px 0px;
  padding: 0px;
  text-align:center
`
const RowItemSubTitle = styled.div`
  margin-top: 8px;
  text-align: center;
  .kdcQzs {
    color: rgb(128, 94, 73);
  }
`
const RowItemButton = styled.div`
  align-items: center;
  background-color: rgb(240, 233, 231);
  box-shadow: rgb(226, 214, 207) 6px 6px 12px, rgb(247, 244, 242) -12px -12px 24px -2px;
  color: rgb(209, 108, 0);
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 56px;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 12px;
  outline: none;
  margin-top: 24px;
`
const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: inherit;
  display: flex;
  height: 56px;
  justify-content: center;
  flex: 1 1 0%;
  margin: 0px -24px;
  padding: 0px 24px;
  text-decoration: none;
`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function ItemWrap({
  children,
  itemLogo,
  title = '',
  subTitle = [],
  showButton
}: {
  children?: React.ReactNode
  itemLogo?: string
  title?: string
  subTitle: Array<string>
  showButton: boolean
}) {
  return (
    <BodyWrapper>
      <RowItemBox>
        <FlexBox>
          <RowItemTop>
            <RowItemLogo>{itemLogo}</RowItemLogo>
            <RowItemTitle>{title}</RowItemTitle>
            <RowItemSubTitle>
              <div className="kdcQzs">{subTitle[0]}</div>
              {subTitle[1] && <div className="kdcQzs">{subTitle[1]}</div>}
            </RowItemSubTitle>
          </RowItemTop>
          <RowItemButton color="#d16c00" font-size="16">
            {showButton ? <span>22222</span> : <StyledNavLink to={`/menu/22`}>Select</StyledNavLink>}
          </RowItemButton>
          {children}
        </FlexBox>
      </RowItemBox>
    </BodyWrapper>
  )
}
