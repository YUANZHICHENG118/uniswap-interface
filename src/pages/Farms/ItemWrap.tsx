import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/images/bg.png'

import { FlexCenter } from '../../components/Column'
import { useTranslation } from 'react-i18next'

export const BodyWrapper = styled.div`
  padding: 24px;
  border: 1px solid #efc6ed;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0 #e7d7ea;
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  .status{
    right: 0;
    top: 0;
    left: auto;
    bottom: auto;
    overflow: hidden;
    border-top-right-radius: 12px;
    background:url(${bg}) no-repeat;
    background-size: contain;
    span{
    position: absolute;
    width: 80px;
    height: 80px;
    color: #fff;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-content: center;
    transform: rotate(45deg);
    text-align: center;
    right: 11px;
    top: 12px;
    }
    position: absolute;
    width: 80px;
    height: 80px;
    }
`
const RowItemBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  // padding: 16px;
  .v2tag {
    position: absolute;
    left: -1px;
    top: -1px;
    background-color: #efc6ed;
    padding: 0 5px;
    font-size: 16px;
  }
  .apy {
    text-align: left;
    margin-top: 20px;
    line-height: 35px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 700;
    color: #444;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    span {
      float: right;
      color: #444;
    }
  }
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
      line-height: 25px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function ItemWrap(props: any) {
  const { t } = useTranslation()
  let childrens = Array.isArray(props.children) ? props.children : [props.children]
  const slots = childrens.reduce((slots: any, item: any) => {
    slots[item.props.slot] = item
    return slots
  }, {})
  return (
    <BodyWrapper>
      {slots['status']}
      <RowItemBox>
        <FlexCenter>
          {slots['tag']}
          <RowItemLogo>
            <img src={require(`../../assets/images/token/${props.itemLogo.toLowerCase()}.png`)} alt={props.symbol} height="80px"/>
          </RowItemLogo>
          <RowItemTitle>{props.title}</RowItemTitle>
          <div className="cardNote">
            <span>{props.subTitle[0]}</span>
            {props.subTitle[1] && <span>{props.subTitle[1]}</span>}
            {props.sourceLink && (
              <span>
                <a href={`https://tronscan.org/#/contract/${props.address}`} target="_blank" rel="noopener noreferrer">
                  {' '}
                  {t('source')}
                </a>
              </span>
            )}
          </div>
          {slots['button']}
          {slots['APY']}
        </FlexCenter>
      </RowItemBox>
    </BodyWrapper>
  )
}
