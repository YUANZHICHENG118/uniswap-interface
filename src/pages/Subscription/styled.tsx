import styled from 'styled-components'
import leftBg from '../../assets/images/subscription/leftBg.png'
import rightBg from '../../assets/images/subscription/rightbg.png'
export const TradeWrapper = styled.div`
  display: flex;
  margin-top: 48px;
  .history {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 14px;
    border: 1px solid #666666;
    .table-tr {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #cccccc;
    }
    .table-tr.table-head {
      color: #ebaa00;
      font-weight: 600;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin-top:80px;
    padding:0 3%;
    .history{
      margin-top:0;
      width:100%;
    }
  `};
`

export const SubscriptionItems = styled.div``
export const AccountWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 44px 0 56px;

  .divider {
    width: 1px;
    background: #343434;
  }
  .left,
  .right {
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.65);
  }
  .left {
    .number {
      font-size: 60px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #ebaa00;
      margin-top: 20px;
      display: inline-block;
      ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 43px;
      `}
    }
    .unit {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .right {
    .address {
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffb800;
      margin: 16px 0 32px;
      word-break: break-all;
    }
    .btn-default {
      width: 100%;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    flex-direction:column;
    padding:20px 3%;
    .divider{
      height: 1px;
      width: 70%;
      margin: 20px auto;
    }
    .right{
      font-size:21px;
      .address{
        font-size:16px;
      }
    }
    .left,.right{
      font-size:20px;
  }
`};
`
export const InviteWrap = styled.div`
  padding: 56px 80px;
  .invite-tip {
    font-weight: 500;
    color: #999999;
    font-size: 24px;
    margin-top: 30px;
    display: flex;
    img {
      width: 30px;
    }
    b {
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
      margin: 0 5px;
    }
    .invite-tip-opt {
      margin-right: 3%;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding:30px 3%;
      .invite-tip{
        font-size: 18px;
        img {
          width: 20px;
        }
      }
  `};

  .invite-address {
      background: rgba(0, 0, 0, 0.6);
      border-radius: 32px;
      border: 2px solid #323232;
      height: 64px;
      line-height: 64px;
      padding-left: 20px;
      margin-top: 36px;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);
      flex-wrap:wrap;
      input {
        background: none;
        outline: 0;
        border: 0;
        flex: 1;
        color: inherit;
      }
      .btn{
         height:64px;
         line-height:64px;
         padding:0;
      }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     font-size: 18px;
     height: auto;
     line-height:auto;
     border:0;
     padding:0;
     flex-direction:column;
     align-items:flex-end;
     input{
        border-radius: 32px;
        border: 2px solid #323232;
        padding:0 3%;
        height: 40px;
        line-height: 40px;
        width: 100%;
     }
     .btn{
        width: 100px;
        height: 35px;
        line-height: 35px;
        padding: 0;
        margin-top:10px;
    }
     }
  `};
  }
`
export const PartnerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  .partner-item {
    border-radius: 18px;
    padding: 50px 5%;
    .content {
      margin: 30px 0 47px;
      .profit {
        background: rgba(0, 0, 0, 0.6);
        border-radius: 16px;
        padding: 27px 36px 20px;
        border: 1px solid #666666;
        .head {
          font-size: 21px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
        }
        .profit-detail {
          font-family: DINAlternate-Bold, DINAlternate;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          align-items: flex-end;
          margin-top: 15px;
          a {
            color: unset;
          }
          .value {
            font-size: 42px;
          }
        }
        ${({ theme }) => theme.mediaWidth.upToExtraSmall`
          padding:15px 3% 15px;
          .head {
            font-size: 18px;
          }
          .profit-detail {
            font-size: 14px;
          }
        `};
      }
      .tip {
        font-size: 16px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: #999999;
        margin-top: 7px;
        padding-left: 8%;
      }
    }
    .advantage {
      margin: 20px 0 47px;
      .advantage-item {
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.65);
        line-height: 55px;
        img {
          width: 35px;
          margin-right: 10px;
        }
        .big {
          font-size: 36px;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: 600;
          color: #ebaa00;
          margin-left: 10px;
          i {
            font-style: normal;
          }
        }
        ${({ theme }) => theme.mediaWidth.upToExtraSmall`
         font-size: 21px;
         line-height:45px;
         img{
           width:30px;
         }
         .big{
          font-size: 28px;
          }
      `};
      }
    }
    &:hover {
      background: linear-gradient(313deg, rgba(97, 94, 94, 0.03) 0%, rgba(255, 255, 255, 0.16) 100%);
    }
  }
`
export const GatherWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 28px;
  .value {
    font-size: 60px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #ebaa00;
    position: relative;
    padding-bottom: 8px;
    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 2px;
      background: #ebaa00;
      display: inline-block;
      bottom: 0;
      left: 0;
    }
    .unit {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .label {
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     .value{
      font-size: 42px;
     }
     .label{
      font-size: 18px;
     }
  `};
`
export const SummaryWrap = styled.div`
  .summary-item {
    .summary-item-label {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      margin-top: 10px;
    }
    .summary-item-value {
      font-size: 42px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #ffffff;
      position: relative;
      padding-bottom:8px &:after {
        content: '';
        width: 50px;
        height: 2px;
        background: #ebaa00;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   .summary-item-value{
      font-size: 32px;
   }
   .summary-item-label{
      font-size: 16px;
   }
  `};
  }
`
export const HistoryWrap = styled.div`
  padding: 12px 3% 25px;
  min-width: 50%;
  max-width: 100%;
  margin: 0 auto;
  .history-table {
    overflow: auto;
  }
  .head {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.65);
    line-height: 50px;
    .circle-icon {
      i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 10px;
        &:first-child {
          background: #d95852;
        }
        &:nth-child(2) {
          background: #d8a62b;
        }
        &:last-child {
          background: #36b649;
          margin-right: 0px;
        }
      }
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      line-height:40px;
      font-size: 16px;
  `};
  }
  .table-head {
    padding: 20px 0;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding:10px 0;
  `};
  }
  .table-tr {
    line-height: 30px;
    i {
      font-style: normal;
    }
    span {
      display: inline-block;
    }
    .value {
      width: 20%;
    }
    .date {
      width: 40%;
    }
    .tx {
      width: 40%;
    }
  }
`
export const LeftWithBg = styled.div`
  background: url(${leftBg}) no-repeat left top;
`
export const RightWithBg = styled.div`
  background: url(${rightBg}) no-repeat left top;
`
export const BodyWrapper = styled.div`
  .logo-box {
    text-align: center;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     margin-top:30px;
     img{
      &:first-child{
        height:55px;
      }
       &:last-child{
        height:45px;
      }
     }
  `}
  }
  .statistic {
    display: flex;
    flex-direction: column;
    align-items: center;
    .getmore {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 10px;
    }
    .btn-box {
      margin-top: 30px;
    }
    .process {
      margin-top: 30px;
      width: 500px;
      max-width: 100%;
      .outer {
        height: 12px;
        border-radius: 6px;
        border: 2px solid #ffffff;
        position: relative;
      }
      .inner {
        background: #ffffff;
        box-shadow: 0px 0px 16px 4px rgba(255, 255, 255, 0.86);
        border-radius: 6px;
        height: 100%;
        position: absolute;
      }
    }
    .number-box {
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 70px;
      .number {
        font-size: 48px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #ebaa00;
        margin-right: 10px;
        ${({ theme }) => theme.mediaWidth.upToExtraSmall`
         font-size: 40px; 
        `}
      }
    }
  }
`
export const CountDownWrap = styled.div`
  margin-top: 60px;
  h3 {
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-bottom: 40px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    h3{
      font-size:18px;
    }
  `}
  .time-box {
    display: flex;
    justify-content: center;
  }
  .time-item {
    border-radius: 10px;
    margin-right: 13px;
    &:last-child {
      margin-right: 0;
    }
    .number {
      font-size: 78px;
      width: 130px;
      height: 120px;
      background: #0f1c24;
      box-shadow: 0px 5px 5px 0px #000000;
      border-radius: 7px;
      border: 1px solid #212121;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      position: relative;
      box-sizing:content-box;
      &:after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 1px;
        display: inline-block;
        top: 50%;
        transform: translateY(-50%);
        background: #101317;
      }
    }
    .unit {
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      margin-top: 10px;
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      width:20%;
      .number{
        font-size: 36px;
        width:100%;
        height:60px;
        line-height:60px;
      }
      .unit{
        font-size: 18px;
      }
  `};
  }
`
export const CommissionWrapper = styled.div`
  padding:45px 50px 60px;
  width:100%;
  position:relative;
  .arrowTitle{
    font-size:26px;
  }
  .commission-table{
    overflow:auto;
    margin-top:30px;
    thead{
      font-size:18px;
      th{
      padding:15px 0;
      }
    }
    tbody{
     font-size:16px;
     line-height:30px;
    }
    .profit{
      min-width:130px;
    }
    .address{
      min-width:220px;
    }
    .type{
      min-width:100px;
    }
    .time{
      min-width:180px;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding:25px 20px 30px;
    .commission-table{
     margin-top:30px;
    }
  `};

`
export const JoinUsWrapper=styled.div`
  padding:45px 50px 60px;
  width:100%;
  .acquisition{
    margin:40px 0;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color:rgba(255,255,255,.65);
    display:flex;
    align-items: flex-end;
    .coinInfo{
      font-size: 48px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      margin-bottom:-10px;
      margin-left:5%;
    }
   .checkIcon{
     margin-right:2%;
     width:30px;
     height:30px;
     border-radius:50%;
   }
  }
  .write-box{
    height: 52px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 32px;
    border: 2px solid #323232;
    &:focus{
      border:0;
      outline:0;
    }
    input{
      background:none;
      border:0;
      font-size: 24px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255,255,255,.7);
      padding:0 6%;
      &:hover,&:focus{
       border:0;
       outline:0;
      }
    }
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding:25px 20px 30px;
    flex-direction:column;
    border:0;
    input{
      width:100%;
      background: rgba(0, 0, 0, 0.6);
    }
    
  `};
`
export const FlipClockWrap = styled.div`
  .fold {
    animation: fold 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
    transform-style: preserve-3d;
  }
  .unfold {
    animation: unfold 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
    transform-style: preserve-3d;
  }
  @keyframes fold {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
  }
  @keyframes unfold {
    0% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
  .flipUnitContainer {
    display: block;
    position: relative;
    width: 140px;
    height: 120px;
    perspective: 300px;
    background: #0F1C24;
    border-radius: 7px;
    box-shadow: 0px 5px 5px 0px #000000;
    .upperCard {
        align-items: flex-end;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        span{
          transform: translateY(50%);
        }
    }
    .lowerCard {
        align-items: flex-start;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        span{
          transform: translateY(-50%);
        }
      }
    .upperCard,
    .lowerCard {
        display: flex;
        position: relative;
        justify-content: center;
        width: 100%;
        height: 50%;
        overflow: hidden;
    }
    .flipCard {
      display: flex;
      justify-content: center;
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      overflow: hidden;
      backface-visibility: hidden;
      background-color: #0F1C24;
      &.fold {
        top: 0%;
        align-items: flex-end;
        transform-origin: 50% 100%;
        transform: rotateX(0deg);
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        span {
          transform: translateY(50%);
        }
      }
      &.unfold {
        top: 50%;
        align-items: flex-start;
        transform-origin: 50% 0%;
        transform: rotateX(180deg);
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        margin-left:-0.03px;
        span {
          transform: translateY(-50%);
        }
      }
    }
  }
`
