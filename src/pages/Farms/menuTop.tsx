import React from 'react'
import styled from 'styled-components'

const MenuTopBox = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0px auto 50px;
  h1 {
    font-family: 'Kaushan Script', sans-serif;
    color: rgb(91, 57, 38);
    font-size: 36px;
    font-weight: 700;
    margin: 0px;
    padding: 0px;
  }
  h3 {
    color: rgb(170, 149, 133);
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin: 0px;
    padding: 0px;
  }
  ${({ theme }) => theme.mediaWidth.upToMiddle`
  margin: 0px auto 30px;
   h1 {
    font-size: 30px;
    line-height: 35px;
  }
  `};
`
const MenuTopImgWrap = styled.div`
  text-align: center;
  ${({ theme }) => theme.mediaWidth.upToMiddle`
  img {
    width: 100px;
   }
   h1 {
    font-size: 30px;
   }
  `}
`
export const BodyWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0px auto;
  padding: 0px 24px;
`
const TextLogo = styled.div`
  font-size: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  width: 120px;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function menuTop({
  imgUrl = '',
  h1Text = '',
  h3Text = '',
  textLogo
}: {
  imgUrl?: string
  h1Text?: string
  h3Text?: string
  textLogo?: string
}) {
  return (
    <BodyWrapper>
      <MenuTopBox>
        <MenuTopImgWrap>
          {imgUrl ? <img src={imgUrl} alt="" width="180" /> : <TextLogo>{textLogo}</TextLogo>}
        </MenuTopImgWrap>
        <h1>{h1Text}</h1>
        {h3Text && <h3>{h3Text}</h3>}
      </MenuTopBox>
    </BodyWrapper>
  )
}
