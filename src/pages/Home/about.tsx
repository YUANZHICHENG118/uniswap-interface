import React from 'react'
import styled from 'styled-components'
//import { useTranslation } from 'react-i18next'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function About() {
  //const { t } = useTranslation()

  return <BodyWrapper>
    <div className="col p-1">
      <div className="wow bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp">
        {/*<h4 style={{marginTop:20}} id={"about"}>{t("about")}</h4>*/}
        {/*<p id={"about"}>{t("index15")}</p>*/}
      </div>
    </div>
  </BodyWrapper>
}
