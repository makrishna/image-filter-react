import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import './index.css';
import LeftsidePanel from './leftside-panel/leftside-panel';
import HeaderSection from './header-section/header-section';
import Butterfly from './butterfly';
import Cars from './cars';
import Cellphones from './cellphones';
import Office from './office';
import eventBus from './EventBus';
import MainArea from './main-area/main-area';
class App extends Component {
  searchEvent = (event) => {
    setData(location.state.data.forEach(em => em.category='butterfly'))
    setData(location.state.data.filter(em => em.text.toLowerCase().includes(event.target.value.toLowerCase())) || em.category.toLowerCase().includes(event.target.value.toLowerCase()))
}
  render() {
    return (
      <Router>
        <div>
          <HeaderSection />
          <div style={{display:'flex'}}>
          <LeftsidePanel />
          <div className="wrapper">
            <Switch>
              <Route path={"/"} exact component={MainArea} />
              <Route path={"/butterfly"} component={Butterfly} />
              <Route path={"/cars"} component={Cars} />
              <Route path={"/cellphones"} component={Cellphones} />
              <Route path={"/office"} component={Office} />
            </Switch>
          </div>
        </div>
      </div>
      </Router >
    );
  }
}

render(<App />, document.getElementById('root'));
