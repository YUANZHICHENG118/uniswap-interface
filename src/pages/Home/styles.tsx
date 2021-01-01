import styled from 'styled-components'
//images-bg
import item1Bg from '../../assets/images/home/teambg1.png'
import item2Bg from '../../assets/images/home/teambg2.png'
import item3Bg from '../../assets/images/home/teambg3.png'
import shareNg from '../../assets/images/home/sharebg.png'
import profitLeftBg from '../../assets/images/home/profit-left-bg.png'
import profitRightBg from '../../assets/images/home/profit-right-bg.png'

export const MarioWrapper = styled.div`
  position: relative;
  .content-box {
    height: 385px;
    position: relative;
    margin-top: -80px;
    z-index: -1;
    .address {
      position: absolute;
      right: 0;
      width: 91%;
      height: 100%;
      z-index: 1;
      padding-left: 50%;
    }
    .equipment {
      position: absolute;
      left: 0;
      z-index: 2;
      height: 80%;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }
    ${({ theme }) => theme.mediaWidth.upToSmall`
     height:auto;
     margin-top:0;
     .address{
        position:relative;
        width:100%;
        padding:5%;
     .address-content{
        position: unset;
        width: 100%;
        transform: inherit;
     }
     }
     .equipment {
     position:relative;
     height:auto;
     }
   `}
  }
  .marioImg {
    width: 283px;
    height: 346px;
  }
  .marioTextImg {
    height: 133px;
    width: 586px;
    margin-right: 47px;
    position: relative;
    top: -40px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
     width: 100%;
     height:auto;
     top:0;
   `}
  }

  .address {
    background: linear-gradient(90deg, #ffb707 0%, #ffce00 100%);
    border-radius: 27px;
    .address-content {
      position: absolute;
      right: 0;
      z-index: 2;
      top: 50%;
      right: 4%;
      width: 50%;
      transform: translateY(-50%);
      .title {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #292d47;
        line-height: 33px;
        margin-bottom: 25px;
        img {
          margin-right: 10px;
        }
      }
    }
  }
  .equipment {
    background: linear-gradient(90deg, #5b5f76 0%, #2e3141 100%);
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.5);
    border-radius: 27px;
  }
  .joinTeam {
    display: flex;
    justify-content: space-between;
    .button {
      height: 48px;
      box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.08);
      border-radius: 24px;
      color: #333647;
      font-family: PingFangSC-Semibold, PingFang SC;
    }
    .remark {
      font-size: 14px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.6);
      line-height: 20px;
    }
  }
  .address-text {
    height: 56px;
    background: #333647;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3%;
    input {
      font-size: 21px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.6);
      line-height: 29px;
      background: transparent;
      border: none;
    }
  }
`
export const EquipmentWrap = styled.div`
  padding: 41px;
  .title {
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 33px;
    display: flex;
    justify-content: space-between;
    img {
      margin-right: 15px;
    }
    .level {
      font-size: 26px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #ffcf07;
      line-height: 30px;
    }
  }
  .middle {
    margin: 38px 0 31px;
    b {
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
    }
    span {
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      line-height: 29px;
      margin-left: 15px;
    }
  }
  .deadline {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
`
export const Title1Wrap = styled.div`
  justify-content: center;
  margin: 80px 0 60px;
  img {
    margin-right: 10px;
    height: 65px;
    width: auto;
  }
  .title-top {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333647;
    line-height: 50px;
  }
  span {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #676767;
    line-height: 22px;
  }
`
export const ChooseWrap = styled.div`
  .item {
    background: linear-gradient(90deg, #5b5f76 0%, #2e3141 100%);
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.31);
    border-radius: 24px;
    padding: 30px 10% 40px;
    margin: 14px 0;
  }
`
export const ChooseItemWrap = styled.div`
  .head {
    .left {
      font-size: 24px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      line-height: 28px;
      text-shadow: 0px 2px 24px rgba(0, 0, 0, 0.31);
      position: relative;
      padding-left: 20px;
      img {
        position: absolute;
        left: -30px;
        top: -20px;
      }
    }
    .right {
      font-size: 24px;
      font-family: DINAlternate-Bold, DINAlternate;
      line-height: 28px;
      span {
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        line-height: 16px;
        text-shadow: 0px 2px 24px rgba(0, 0, 0, 0.5);
      }
    }
  }
  .middle {
    font-family: PingFang-SC-Regular, PingFang-SC;
    margin: 31px 0;
    .name {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
      text-shadow: 0px 2px 24px rgba(0, 0, 0, 0.31);
    }
    .rate {
      margin: 12px 0;
      b {
        font-size: 48px;
        font-family: DINAlternate-Bold, DINAlternate;
        line-height: 56px;
        text-shadow: 0px 2px 24px rgba(0, 0, 0, 0.31);
      }
      span {
        font-size: 21px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.67);
        line-height: 29px;
        text-shadow: 0px 2px 24px rgba(0, 0, 0, 0.31);
      }
    }
    .time {
      font-size: 21px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #ffffff;
      line-height: 25px;
      text-shadow: 0px 2px 24px rgba(0, 0, 0, 0.31);
    }
  }
`
export const TeamRuleWrap = styled.div`
  .header {
    h3 {
      font-size: 36px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 50px;
      margin-bottom: 24px;
    }
    .remark {
      div {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.58);
        line-height: 22px;
        position: relative;
        padding-left: 30px;
        :before {
          content: '';
          position: absolute;
          display: inline-block;
          width: 19px;
          height: 19px;
          left: 0;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          background-color: ${({ theme }) => theme.primary1};
        }
        ${({ theme }) => theme.mediaWidth.upToSmall`
          padding-left: 20px;
          :before {
            width: 10px;
            height: 10px;
          }
        `}
      }
    }
  }
`

export const TeamRewardWrap = styled.div`
  .team-item {
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.5);
    border-radius: 21px;
    padding: 53px 3% 44px;
    margin: 13px 0;
    header {
      margin-bottom: 30px;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
    }
  }
`
export const TeamDataWrap = styled.div`
  .item1 {
    background-image: url(${item1Bg});
  }
  .item2 {
    background-image: url(${item2Bg});
  }
  .item3 {
    background-image: url(${item3Bg});
  }
  .teamInfo {
    margin-bottom: 30px;
    dl {
      text-align: center;
      dt {
        b {
          font-size: 60px;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: bold;
          color: #ffffff;
          line-height: 70px;
          margin-right: 10px;
        }
        span {
          font-size: 21px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #8b8b8c;
          line-height: 29px;
        }
      }
      dd {
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 25px;
        opacity: 50%;
        margin-top: 6px;
      }
    }
  }
`
export const TeamDataItemWrap = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left bottom;
  height: 220px;
  padding: 30px 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .title {
    font-size: 18px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #323232;
    line-height: 25px;
    opacity: 80%;
  }
  .middle {
    margin: 12px 0;
    b {
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #393b7b;
      line-height: 56px;
    }
    span {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1a1c5c;
      line-height: 22px;
      opacity: 60%;
      margin-left: 10px;
    }
  }
  dl {
    font-family: PingFang-SC-Bold, PingFang-SC;
    color: #323232;
    font-weight: bold;
    dt {
      font-size: 18px;
      line-height: 25px;
    }
    dd {
      font-size: 14px;
      line-height: 20px;
      margin-top: 12px;
      opacity: 50%;
    }
  }
`
export const ShareWrap = styled.div``
export const ShareItem = styled.div`
  background: linear-gradient(90deg, #ffb707 0%, #ffce00 100%) linear-gradient(90deg, #f5f6f6 0%, #fcfcfc 100%);
  box-shadow: 0px 2px 14px 0px rgba(83, 86, 157, 0.29);
  border-radius: 27px;
  margin: 20px 0;
  padding: 2.5rem 3% 2.5rem 0;
  .left {
    .rates {
      padding-right: 8%;
    }
    .tag {
      background: url(${shareNg}) no-repeat left top;
      width: 320px;
      height: 107px;
      padding: 0 3% 13px 25px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      left: -16px;
      position: relative;
      b {
        font-size: 60px;
        font-family: DINAlternate-Bold, DINAlternate;
        line-height: 70px;
        margin-right: 2%;
      }
      dl {
        text-align: left;
        margin: 0;
        dt {
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 33px;
        }
        dd {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
          opacity: 70%;
          margin-bottom: 0;
        }
      }
    }
  }
`
export const RateItemWrap = styled.div`
  text-align: center;
  position: relative;
  margin-top: 2rem;
  :after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 90%;
    top: 50%;
    transform: translateY(-50%);
    background: #000;
    opacity: 10%;
  }
  :last-child {
    :after {
      content: none;
    }
  }
  .value {
    b {
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
      color: #1a1c5c;
      line-height: 56px;
    }
    span {
      opacity: 50%;
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #323232;
      line-height: 29px;
    }
  }
  .desc {
    font-size: 18px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #1a1c5c;
    line-height: 25px;
    opacity: 40%;
  }
`
export const ProfitWrap = styled.div`
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  padding: 2rem 5%;
  .bottom {
    margin-top: 30px;
    .bottom-item {
      position: relative;
      :last-child {
        :after {
          content: none;
        }
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 1px;
        height: 90%;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        opacity: 20%;
      }
      .value {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 33px;
        margin-right: 10px;
      }
    }
    .tip {
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 20px;
      opacity: 70%;
      margin-right: 7%;
    }
  }
  .title {
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 33px;
  }
  .middle {
    b {
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
      line-height: 56px;
      margin-right: 10px;
    }
    span {
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #c5c6cc;
      line-height: 29px;
    }
  }
`

export const MyProfitWrap = styled.div``

export const MyProfitItemWrap = styled.div`
  padding: 7rem 5rem 5rem;
  .divider {
    width: 100%;
    height: 1px;
    background: #fff;
    opacity: 20%;
    margin: 4rem 0;
  }
  .inner-option {
    .extract-btn {
      margin: 4rem 0 3rem;
    }
    .content {
      b {
        font-size: 60px;
        font-family: DINAlternate-Bold, DINAlternate;
        line-height: 70px;
        margin-right: 1rem;
      }
      span {
        font-size: 21px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 29px;
      }
    }
  }
  &.left {
    background: url(${profitLeftBg}) no-repeat;
    background-size: 100% 100%;
  }
  &.right {
    height: fit-content;
    background: url(${profitRightBg}) no-repeat;
    background-size: 100% 100%;
  }
`
export const NoticeWrap = styled.div`
  background: linear-gradient(90deg, #f5f6f6 0%, #fcfcfc 100%);
  box-shadow: 0px 2px 14px 0px rgba(83, 86, 157, 0.29);
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 3rem;
  margin-right: -2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  height: 325px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
     position:relative;
     margin-right:0;
   `}
  .content {
    font-size: 14px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #5455a0;
    line-height: 26px;
    height: 57%;
    overflow: hidden;
    margin: 20px 0;
  }
  .partner {
    font-size: 14px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #393b7b;
    line-height: 30px;
  }
`
