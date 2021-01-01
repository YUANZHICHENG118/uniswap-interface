/**
 *@desc 关于我们
 *@date 2021/1/1 3:12 PM
 */
import React from 'react'
import styled from 'styled-components'
//import { useTranslation } from 'react-i18next'
//components
import { ButtonWhite } from '../../components/Button'
import Title1 from './modules/title1'
//images
import TwitterImg from '../../assets/images/twitter.png'
import FacebookImg from '../../assets/images/facebook.png'
//style
import { NoticeWrap} from './styles'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .about {
    background: linear-gradient(90deg, #5b5f76 0%, #2e3141 100%);
    border-radius: 16px;
    padding: 4rem 4rem 4rem 6rem;
    h6 {
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 25px;
    }
    .content {
      font-size: 14px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #f0f0f0;
      line-height: 26px;
      margin: 12px 0 20px;
      opacity:50%;
    }
    .bottom {
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #fff;
      line-height: 20px;
      margin-bottom:3rem;
    }
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function About() {
  //const { t } = useTranslation()

  return (
    <BodyWrapper>
      <Title1 imgType="3" title="关于我们" subTitle="激活您的组员，可获得团队收益奖励" />
      <div className="row no-gutters">
        <div className='col-lg-5 col-xs-12'>
          <NoticeWrap className="notice">
          <h5>公告栏</h5>
          <div className="content">
            该栏可自由编辑——必道况任什事即在过学体指众每集马名做等老我同圆设通点铁形音细非且置打青离中叫约联个素型志长化象它构公还声何资。光三争近农保次治积所市干土象九织他技究教间油高王们油市调过断界类关任图特料由条参农很金之被正号必技证条八更连是得如片心县美证提华却三。解段金或它合开专我这层证政权团维亲样区导车导应位农品量划便如难图党计油求给见质都节文整电置世连步术半时正公织参中道龙圆起。代选干强成派相热清参山深回上声目育又会经正叫只广称信发低京花北划月国持它规状导一市容走色米头你制。们老系派于东社情派求油专确基白土头照点车管切片导看况必物传接住打后里以压精再效关克想克斯法有记七地算在车子目强没。月铁王过飞又价利战听将专水切口真外先克能型感子半值热使广业维今又置须东运育第样名满然老土书门。再是团极计原期确真先但西七看难半效和分成实们器报些出力条规列你属统力铁有许支又起治内点有工品证何七确明层严查金见长众比值知红维备各造队集深火果并飞最里现多年。长水九这市争气九心级车记无发却任况研美律省量示民后便满系入作市少其装各名但际美儿同。比土完本向型此定快样育再林间引为持先义把最构那精各民文区就总素才中说包动办三应的何三算把越出布手受然心党然里决七积立石教织专气三公例报酸做百流。论务非点己气常回行术中重支题气才规取治器应飞识公着管党权格者或走每高值二严学情中半意江确从做所果解方系题酸质法身克的品身社日五知。率革及指认包白常极界加由示住作例六化支山住思京向素万高现好己那年增际名回路青压斗程存。团放确你种毛空几任日示已电存类思万做较类划不实根者国家究安点路的起千江可提果人马南林定任月极力次非和论办接论资革。装如社别干里特传文类书土话统查任日文电确红四力六能指片数白工规年对位须验决千军将识组引经来示于第联。
          </div>
          <div className="partner">
             <div><img src={TwitterImg} alt=""/> Twitter：客户可编辑文字</div>
             <div><img src={FacebookImg} alt=""/> Facebook：客户可编辑文字</div>
          </div>
        </NoticeWrap>
        </div>
        <div className='col-lg-7 col-xs-12'>
          <div className="about bgwrap">
            <h6>关于Metastable Capital</h6>
            <div className="content">
              MetaStable总部设在旧金山，由Naval Ravikant于2015年创立，目前管理资金规模超过27亿美金。 MetaStable
              Capital目前持有ETH超过50万个。
            </div>
            <div className="bottom">
              <div>
                <span className="themeColor">Super Mario ETH 2.0</span>计划
              </div>
              <div>由全球前十的加密数字基金MetaStable Capital推出</div>
            </div>
            <div className='row justify-content-end'>
              <ButtonWhite className='col-lg-3 col-xs-12'  style={{borderRadius:'24px',height:'48px' }}>
                了解更多
              </ButtonWhite>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  )
}
