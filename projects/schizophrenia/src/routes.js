import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import GeneResults from './GeneResults'
import GwasPage from './GwasPage'
import HomePage from './HomePage'
import ExomePage from './ExomePage'
import ManhattanPage from './Manhattan'
import TopBar from './TopBar'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  height: 100%;
  width: 100%;
  background-color: #FAFAFA;
`

const MainPanel = styled.div`
  width: 100%;
  height: 100%;
`

const App = () => (
  <Root>
    <MainPanel>
      <TopBar />
      <Route path="/" exact component={HomePage} />
      <Switch>
        <Route exact path="/results" component={GeneResults} />
        <Route path="/gene/:gene" component={ExomePage} />
        <Route exact path="/region/:regionId" component={GwasPage} />
        <Route exact path="/manhattan" component={ManhattanPage} />
      </Switch>
    </MainPanel>
  </Root>
)

export default App
