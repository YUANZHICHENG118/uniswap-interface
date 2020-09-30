import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function XpoolItem(props:{title:string,token:any,amount:number,rate?:boolean,btn?:any}) {
  const {title,token,amount,rate,btn}=props;
  return <BodyWrapper>
    <div className="col p-1">
      <div className="wow bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp">
        <h5>{title}</h5>
        <span className="total-lock show-data">{amount||"--.--"}</span>&nbsp;
        <span>{rate?'%':token.symbol}</span>{btn}
      </div>
    </div>
  </BodyWrapper>
}
