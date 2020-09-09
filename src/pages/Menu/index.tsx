import React from 'react'

import styled from 'styled-components'

const MenuWrap = styled.div`
    display: flex;
    flex-direction: column;
`
const FlexCenter = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`
const MenuTop = styled.div`
    box-sizing: border-box;
    max-width: 600px;
    width: 100%;
    margin: 0px auto;
    padding: 0px 24px;
`
const MenuBody = styled.div`
    width: 900px;
`
const RowBox = styled.div`
    display: flex;
    margin-bottom: 24px;
    flex-flow: row wrap;
`
const RowItem = styled.div`
    display: flex;
    width:30%;
    position: relative;
    .itemWarp{
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
    }
`
const RowItemBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    padding: 16px;

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
const RowItemTitle = styled.h4`
color: rgb(91, 57, 38);
    font-size: 24px;
    font-weight: 700;
    margin: 8px 0px 0px;
    padding: 0px;
`
const RowItemSubTitle = styled.div`
margin-top: 8px;
    text-align: center;
    .kdcQzs {
    color: rgb(128, 94, 73);
}
`
const RowItemBottom = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    color: rgb(170, 149, 132);
    width: 100%;
    margin-top: 12px;
    line-height: 32px;
    font-size: 13px;
    text-align: center;
    border-radius: 8px;
    background: rgb(255, 253, 250);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(230, 220, 213);
    border-image: initial;
    padding: 0px 12px;
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
    margin-top:24px;
   
    a{
    align-items: center;
    color: inherit;
    display: flex;
    height: 56px;
    justify-content: center;
    flex: 1 1 0%;
    margin: 0px -24px;
    padding: 0px 24px;
    text-decoration: none;
    }
`
export default function Menu() {
  return (
    <MenuWrap>
      <MenuTop>menu</MenuTop>
      <MenuBody>
        <RowBox>
          <div></div>
          <RowItem>
            <div className={'itemWarp'}>
              <RowItemBox>
                <FlexCenter>
                  <RowItemLogo>🍣</RowItemLogo>
                  <RowItemTitle>Sushi Party!</RowItemTitle>
                  <RowItemSubTitle>
                    <div className="kdcQzs">Deposit SUSHI-ETH UNI-V2 LP</div>
                    <div className="kdcQzs">Earn SUSHI</div>
                  </RowItemSubTitle>
                  <RowItemButton color="#d16c00" font-size="16" >
                    <a className="sc-AxirZ kRQAGp" href="/farms/SUSHI-ETH UNI-V2 LP">Select</a>
                  </RowItemButton>
                  <RowItemBottom>
                    <span>APY</span>
                    <span>914.87%</span>
                  </RowItemBottom>
                </FlexCenter>
              </RowItemBox>
            </div>
          </RowItem>
        </RowBox>
      </MenuBody>
    </MenuWrap>
  )

}