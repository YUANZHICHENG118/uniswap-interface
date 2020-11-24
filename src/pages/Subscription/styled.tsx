import styled from 'styled-components'
import leftBg from '../../assets/images/subscription/leftBg.png';
import rightBg from '../../assets/images/subscription/rightbg.png';
export const TradeWrapper = styled.div`
  display:flex;
  margin-top:48px;
  .history{
  background: rgba(0, 0, 0, 0.6);
  border-radius: 14px;
  border: 1px solid #666666;
  .table-tr{
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #CCCCCC;
  }
  .table-tr.table-head{
    color:#EBAA00;
    font-weight:600;
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

export const SubscriptionItems = styled.div`

`
export const AccountWrap = styled.div`
  display:flex;
  justify-content: space-around;
  padding:44px 0 56px;

  .divider{
    width:1px;
    background:#343434;
  }
  .left,.right{
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255,255,255,0.65);
  }
  .left{
    .number{
      font-size: 60px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #EBAA00;
      margin-top:20px;
      display:inline-block;
    }
    .unit{
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color:rgba(255,255,255,0.6)
    }
}
.right{
 .address{
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFB800;
    margin:16px 0 32px;
    word-break: break-all;
 }
 .btn-default{
   width:100%;
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
`};
`
export const InviteWrap = styled.div`
    padding:56px 80px;
    .invite-tip{
      font-weight: 500;
      color: #999999;
      font-size: 24px;
      margin-top:30px;
      display:flex;
      img{
        width:30px;
      }
      b{
        font-size: 48px;
        font-family: DINAlternate-Bold, DINAlternate;
        margin:0 5px;
      }
      .invite-tip-opt{
        margin-right:3%;
      }
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding:30px 3%;
      .invite-tip{
        font-size: 18px;
        margin-top: 15px;
      }
  `};
    
    .invite-address{
      background: rgba(0, 0, 0, 0.6);
      border-radius: 32px;
      border: 2px solid #323232;
      height:64px;
      line-height:64px;
      padding-left:20px;
      margin-top:36px;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color:rgba(255,255,255,.7);
      input{
       background:none;
       outline:0;
       border:0;
       flex:1;
       color: inherit;
       width:40%;
      }
    }
`
export const PartnerWrap = styled.div`
  display:flex;
  flex-wrap:wrap;
  .partner-item{
     border-radius: 18px;
     padding:50px 5%;
    .content{
      margin:30px 0 47px;
      .profit{
        background: rgba(0, 0, 0, 0.6);
        border-radius: 16px;
        padding:27px 36px 20px;
        border: 1px solid #666666;
         ${({ theme }) => theme.mediaWidth.upToExtraSmall`
          padding:15px 3% 15px;
        `};
        .profit-detail{
          font-family: DINAlternate-Bold, DINAlternate;
          font-size: 16px;
          color:rgba(255,255,255,.7);
          align-items:flex-end;
          margin-top:15px;
          a{
           color:unset;
          }
          .value{
            font-size: 42px;
          }
        }
        .head{
          font-size: 21px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(255,255,255,.7);
        }
     }
     .tip{
        font-size: 16px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: #999999;
        margin-top:7px;
        padding-left:8%;
     }
    }
    .advantage{
      margin:20px 0 47px;
      .advantage-item{
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color:rgba(255,255,255,0.65);
        line-height:55px;
        img{
          width:35px;
          margin-right:10px;
        }
        .big{
          font-size: 36px;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: 600;
          color: #EBAA00;
          margin-left:10px;
          i{
           font-style:normal;
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
   &:hover{
     background: linear-gradient(313deg, rgba(97, 94, 94, 0.03) 0%, rgba(255, 255, 255, 0.16) 100%);
   }
  }

`
export const GatherWrap=styled.div`
  margin-top:30px;
  margin-bottom:28px;
  .value{
    font-size: 60px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #EBAA00;
    position:relative;
    padding-bottom:8px;
    &:after{
    content:'';
     position:absolute;
     width: 50px;
     height: 2px;
     background: #EBAA00;
     display:inline-block;
      bottom:0;
      left:0;
    }
    .unit{
      font-size: 18px;
      color: rgba(255,255,255,.7);
    }
  }
   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     .value{
      font-size: 50px;
     }
  `};

  .label{
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255,255,255,.7);
    margin-top:10px;
  }
`;
export const SummaryWrap=styled.div`
.summary-item{
  .summary-item-label{
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color:rgba(255,255,255,.6);
      margin-top:10px;
    }
  .summary-item-value{
    font-size: 42px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #FFFFFF;
    position:relative;
    padding-bottom:8px
    &:after{
      content:'';
      width: 50px;
      height: 2px;
      background: #EBAA00;
      display:inline-block;
      position:absolute;
      bottom:0;
      left:0;
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
export const HistoryWrap=styled.div`
  padding:12px 3% 25px;
  width:50%;
  max-width:100%;
  margin:0 auto;
  .history-table{
   overflow:auto;
  }
  .head{
    border-bottom:1px solid #ddd;
    display:flex;
    justify-content:space-between;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255,255,255,.65);
    line-height:50px;
    .circle-icon{
      i{
        width: 12px;
        height: 12px;
        border-radius:50%;
        display:inline-block;
        margin-right:10px;
        &:first-child{
          background:#D95852;
        }
        &:nth-child(2){
          background:#D8A62B;
        }
        &:last-child{
          background:#36B649;
          margin-right:0px;
        }
      }
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      line-height:40px;
      font-size: 16px;
  `};
  }
  .table-head{
   padding:20px 0;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding:10px 0;
  `};
  }
  .table-tr{
    line-height:30px;
    i{
      font-style: normal;
    }
    span{
      display:inline-block;
    }
    .value{
      width:20%;
    }
    .date{
     width:40%;
    }
    .tx{
      width:40%
    }
  }
`
export const LeftWithBg=styled.div`
background:url(${leftBg}) no-repeat left top;

`
export const RightWithBg=styled.div`
background:url(${rightBg}) no-repeat left top;
`
export const BodyWrapper = styled.div`
  .logo-box{
    text-align:center;
  }
  .statistic{
    display:flex;
    flex-direction:column;
    align-items:center;
    .getmore{
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255,255,255,.7);
      margin-top:10px;
    }
    .btn-box{
      margin-top:30px;
    }
    .process{
        margin-top:30px;
        width:500px;
        max-width:100%;
      .outer{
        height: 12px;
        border-radius: 6px;
        border: 2px solid #FFFFFF;
        position:relative;
      }
      .inner{
        background: #FFFFFF;
        box-shadow: 0px 0px 16px 4px rgba(255, 255, 255, 0.86);
        border-radius: 6px;
        height:100%;
        position:absolute;
      }
    }
  .number-box{
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color:rgba(255,255,255,.7);
    margin-top:70px;
    .number{
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #EBAA00;
      margin-right:10px;
    }
  }
}
`
export const CountDownWrap=styled.div`
margin-top:60px;
 h3{
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color:rgba(255,255,255,.7);
    text-align:center;
    margin-bottom:40px;
  }
   .time-box{
    display:flex;
    justify-content: center;
  }
  .time-item{
    border-radius: 10px;
    margin-right:13px;
    &:last-child{
      margin-right:0;
    }
    .number{
      font-size: 78px;
      width: 131px;
      height: 121px;
      background: #0F1C24;
      box-shadow: 0px 5px 5px 0px #000000;
      border-radius: 7px;
      border: 1px solid #212121;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      position:relative;
      &:after{
        content: ' ';
        position: absolute;
        width: 100%;
        height: 1px;
        display: inline-block;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #101317;
      }
    }
    .unit{
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      margin-top:10px;
    }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`

  padding: 10px 15px;
  .number{
    font-size: 30px;
  }
  `};
}
`
