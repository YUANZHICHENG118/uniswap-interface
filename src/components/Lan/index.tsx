import React, { useRef, useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import useToggle from '../../hooks/useToggle'
import { useTranslation } from 'react-i18next'
import i18next from '../../i18n'
//images
import zhImg from '../../assets/images/lang/zh.png'
import enImg from '../../assets/images/lang/en.png'
// import jaImg from '../../assets/images/lang/ja.png'
// import krImg from '../../assets/images/lang/kr.png'
// import poImg from '../../assets/images/lang/po.png'

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
// font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323232;
  padding: 0.15rem 0.5rem;
  :after{
  content: " ";
  height:0;
  width:0;
  display:inline-block;
  margin-left:0.25rem;
  border-width:0.35rem 0.35rem 0;
  border-style:solid;
  border-color:#D1D1D1 transparent transparent transparent;
  transition: transform .2s ease-in-out,-webkit-transform .2s ease-in-out;
  }
  &.rotate{
  :after{
    transform:rotate(180deg)
    }
  }

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    // background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
  img {
    width: 22px;
    height: 22px;
  }
`

const MenuFlyout = styled.span`
  min-width: 8.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
`

const MenuItem = styled.div`
  flex: 1;
  padding: 0.5rem 0.5rem;
  // color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

export default function Menu() {
  const node = useRef<HTMLDivElement>()
  const [open, toggle] = useToggle(false)
  const { t } = useTranslation()
  const [curLang, setCurLang] = useState('en')

  useOnClickOutside(node, open ? toggle : undefined)
  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng') || 'en'
    change(lang)
  }, [])
  const change = (lan: string) => {
    setCurLang(lan)
    localStorage.setItem('i18nextLng', lan)
    i18next.changeLanguage(lan)
  }
  const curLangImg = useMemo(() => {
    switch (curLang) {
      case 'en':
        return enImg
      default:
        return zhImg
    }
  }, [curLang])

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle} className={open?'rotate':''}>
        <img src={curLangImg} className="mr-1" alt="" />
        {t(curLang)}
      </StyledMenuButton>
      {open && (
        <MenuFlyout>
          <MenuItem onClick={() => change('en')}>
            <img src={enImg} className="mr-1" alt="" />
            {t('en')}
          </MenuItem>
          <MenuItem onClick={() => change('zh-CN')}>
            <img src={zhImg} className="mr-1" alt="" />
            {t('zh-CN')}
          </MenuItem>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
