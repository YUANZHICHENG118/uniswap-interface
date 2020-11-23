import styled from 'styled-components'

export const TradeWrapper = styled.div`
  display:flex;
  margin-top:168px;
.history{
  background: rgba(0, 0, 0, 0.6);
  border-radius: 14px;
  opacity: 0.6;
  border: 1px solid #666666;
  margin-left:100px;
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
.head{
  border-bottom:1px solid #ddd;
  display:flex;
  justify-content:space-between;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255,255,255,.65);
  line-height:50px;
  }
}
.countDown{
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
  }
.time-item{
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.01) 100%);
  border-radius: 10px;
  opacity: 0.5;
  display:flex;
  flex-direction:column;
  margin-right:17px;
  padding:22px 20px;
  &:last-child{
    margin-right:0;
  }
  .number{
    font-size: 48px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #EBAA00;
    line-height: 56px;
  }
  .unit{
    font-size: 21px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
}


}
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
 }
 .btn-default{
   width:100%;
 }
}
`
export const InviteWrap = styled.div`
    padding:56px 80px;
    .invite-tip{
      font-weight: 500;
      color: #999999;
      font-size: 24px;
      margin-top:30px;
    }
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
      color:rgba(255,255,255,.7)
    }
`
export const PartnerWrap = styled.div`
  display:flex;
  .partner-item{
     width:50%;
     border-radius: 18px;
     padding:50px 58px;
    .content{
      margin:30px 0 47px;
      .profit{
        background: rgba(0, 0, 0, 0.6);
        border-radius: 16px;
        padding:27px 36px 20px;
        border: 1px solid #666666;
        .profit-detail{
          font-family: DINAlternate-Bold, DINAlternate;
          font-size: 16px;
          color:rgba(255,255,255,.7);
          align-items:flex-end;
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
     }
    }
    .advantage{
      margin:20px 0 47px;
      .advantage-item{
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color:rgba(255,255,255,0.65);
        line-height:50px;
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
        }
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
  .summary-item-label{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color:rgba(255,255,255,.6);
    margin-top:10px;
  }
}

`
export const HistoryWrap=styled.div`
  padding:12px 3% 25px;
  width:50%;
  .table-head{
   padding:20px 0;
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
