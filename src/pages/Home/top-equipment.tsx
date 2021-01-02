import React from 'react'

//images
import marioImg from '../../assets/images/home/mario.png'
import marioTextImg from '../../assets/images/home/Mario-text.png'
import copyImg from '../../assets/images/copy.png'
//style
import { MarioWrapper } from './styles'
//components
import { ButtonWhite } from '../../components/Button'
import AddressContent from './modules/address_content'
import EquipmentContent from './modules/equipment_content'
export default function AppBody() {
  return (
    <MarioWrapper>
      <div className="text-lg-right text-center">
        <img src={marioTextImg} className="marioTextImg" alt="" />
        <img src={marioImg} className="marioImg" alt="" />
      </div>
      <div className="content-box row no-gutters">
        <div className="col-12 col-lg-5">
          <EquipmentContent />
        </div>
        <div className="mt-3">
          <div className="address">
            <AddressContent>
              {/*地址*/}
              <div className="address-text">
                <input type="text" disabled value="jlljoo3n4o1on2949IODj2399" />
                <img src={copyImg} alt="" />
              </div>
              <div className="joinTeam row">
                <div className="col-lg-6 col-xs-12 remark mt-5">复制地址加入团队，开始获得Super Mario ETH2.0 高额收益</div>
                <div className='col-lg-5 col-xs-12 mt-5'>
                  <ButtonWhite className="button">连接钱包</ButtonWhite>
                </div>
              </div>
            </AddressContent>
          </div>
        </div>
      </div>
    </MarioWrapper>
  )
}
