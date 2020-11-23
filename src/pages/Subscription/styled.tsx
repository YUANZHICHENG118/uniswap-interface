import styled from 'styled-components'

export const TradeWrapper = styled.div`
  display:flex;
  margin-top:168px;
.history{
  background: rgba(0, 0, 0, 0.6);
  border-radius: 14px;
  opacity: 0.6;
  border: 1px solid #666666;
  padding:20px;
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

`
export const PartnerWrap = styled.div`
  display:flex;
  .partner-item{
     width:50%;
    border-radius: 18px;
    padding:50px 58px;
    .content{
     margin:30px 0 47px;
     .tip{
        font-size: 16px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: #999999;
      span{
        color:#EBAA00;
      }
     }
    }
    .advantage{
      margin:20px 0;
      .advantage-item{
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color:rgba(255,255,255,0.65);
        line-height:50px;
        .big{
        font-size: 36px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #EBAA00;
        margin-left:10px;
        }
      }
    }
    .title{
      font-size: 36px;
      font-family: PingFang-SC-Heavy, PingFang-SC;
      font-weight: 800;
      color: #FFFFFF;
    }
   &:hover{
     background: linear-gradient(313deg, rgba(97, 94, 94, 0.03) 0%, rgba(255, 255, 255, 0.16) 100%);
   }
  }

`
