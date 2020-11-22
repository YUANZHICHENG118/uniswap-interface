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
