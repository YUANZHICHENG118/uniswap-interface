import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Popups from '../components/Popups'
// import TrcWeb3ReactManager from '../components/TrcWeb3ReactManager'
// import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import Detail from './Farms/detail'
import Farms from './Farms'
import Home from './Home'
import Rules from './rules'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import './app.css'

const AppWrapper = styled.div`
    background-color: #f0e7ea;
    font-family: Nunito,sans-serif;
    font-weight: 400!important;
    color: #aa8592;
    padding: 0 100px;
    ${({ theme }) => theme.mediaWidth.upToLarge`
    padding: 0 10px;
  `};
`
const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
`
const SecWrapper = styled.div`
  height: 100px;
width: 100%;
position: fixed;
bottom: 0;
right:0;
text-align:right
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
        {/*<Route component={GoogleAnalyticsReporter} />*/}
        {/*<Route component={DarkModeQueryParamReader} />*/}
        <AppWrapper>
          <HeaderWrapper>
            <Header/>
          </HeaderWrapper>
          <BodyWrapper>
            <Popups/>
            {/*<TrcWeb3ReactManager>*/}
            <Switch>
              <Route exact strict path="/home" component={Home}/>
              <Route exact strict path="/swap" component={Swap}/>
              <Route exact strict path="/Menu" component={Farms}/>
              <Route exact strict path="/Menu/:symbol" component={Detail}/>
              {/*Rules*/}
              <Route exact strict path="/Rules" component={Rules}/>
              <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap}/>
              <Route exact strict path="/send" component={RedirectPathToSwapOnly}/>
              <Route exact strict path="/find" component={PoolFinder}/>
              <Route exact strict path="/pool" component={Pool}/>
              <Route exact strict path="/create" component={RedirectToAddLiquidity}/>
              <Route exact path="/add" component={AddLiquidity}/>
              <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure}/>
              <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds}/>
              <Route exact strict path="/remove/v1/:address" component={RemoveV1Exchange}/>
              <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure}/>
              <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity}/>
              <Route exact strict path="/migrate/v1" component={MigrateV1}/>
              <Route exact strict path="/migrate/v1/:address" component={MigrateV1Exchange}/>
              <Route component={RedirectPathToSwapOnly}/>
            </Switch>
            {/*</TrcWeb3ReactManager>*/}
            <Marginer/>
          </BodyWrapper>

          <Footer/>
        </AppWrapper>
      </HashRouter>
      <SecWrapper>
        <img src={require("../assets/images/sec.png")}/>
      </SecWrapper>
    </Suspense>
  )
}
