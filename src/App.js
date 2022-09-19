import { useEffect, useState } from 'react';
import './App.css';
import HeaderSection from './header-section/header-section';
import { LeftsidePanel } from './leftside-panel/leftside-panel';
import { MainArea } from './main-area/main-area';
import myData from './assets/data/data.json';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from 'react-dom';
export class App {
  constructor() {

  }

  render() {
    return (
          // <div>
    //   <HeaderSection />
    //   <div className='d-flex'>
    //     <LeftsidePanel />
    //     <MainArea myData={myData} />
    //   </div>
    // </div>
    <div>
      
    </div>
    );
  }
}
