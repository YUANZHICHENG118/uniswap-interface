import React from 'react';
//components
import Title1 from './modules/title1'
import ChooseItem from './modules/home-choose-item'
//style
import {ChooseWrap} from './styles'
export default function HomeChoose(){
  return (
    <div>
      <Title1 imgType="1" title='请选购您的设备' subTitle='可通过复投升级您的设备，获取更高收益'/>
      <ChooseWrap className='row'>
        <ChooseItem ></ChooseItem>
        <ChooseItem ></ChooseItem>
        <ChooseItem ></ChooseItem>
        <ChooseItem ></ChooseItem>
        <ChooseItem ></ChooseItem>
        <ChooseItem ></ChooseItem>
        <ChooseItem ></ChooseItem>
        <ChooseItem ></ChooseItem>
      </ChooseWrap>
    </div>
  )
}
