import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

export const BodyWrapper = styled.div`
width:100%;
height:100%;
`
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function About() {
  const { t } = useTranslation()
  return <BodyWrapper>
      <div className="col p-1">
        <div className="wow bg-white-tran radius_box token_sale_box_white text_white  animation animated fadeInUp" style={{padding:'0 10%'}}>
          <h4 style={{marginTop:20}} >{t("about0")}</h4>

          <p id={"about"}>{t("index15")}</p>
        </div>
      </div>
    <div className="col p-1">
      <div className="wow bg-white-tran radius_box token_sale_box_white text_white  animation animated fadeInUp" style={{padding:'0 10%'}}>
        <h4 style={{marginTop:20}} >{t("about1")}</h4>
        <p>{t("about2")}</p>
        <p>{t("about3")}</p>
        <p>{t("about4")}</p>
        <p>{t("about5")}</p>
        <p>{t("about6")}</p>
        <h4 style={{marginTop:20}} >{t("about7")}</h4>
        <p>{t("about8")}</p>
        <p>{t("about9")}</p>
        <h4 style={{marginTop:20}} >{t("about10")}</h4>

        <p>{t("about11")}</p>
        <p>{t("about12")}</p>
        <p>{t("about13")}</p>
        <h4 style={{marginTop:20}} >{t("about14")}</h4>
        <p>{t("about15")}</p>
        <p>{t("about16")}</p>
        <p>{t("about17")}</p>
        <h4 style={{marginTop:20}} >{t("about18")}</h4>

        <p>{t("about19")}</p>
      </div>
    </div>
  </BodyWrapper>
}
