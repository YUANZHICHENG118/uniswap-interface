import styled from 'styled-components'

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
      width: 45%;
    }
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
    margin-top: 46px;
    .button {
      border: 0;
      outline: 0;
      height: 48px;
      background: #ffffff;
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
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
width:90%;
`};
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
    padding:20px 3%;
    margin-bottom:28px;
  }
`
export const ChooseItemWrap= styled.div`
`
