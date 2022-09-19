import React from 'react';
import eventBus from '../EventBus';
import './main-area.scss'
import { MemoryRouter, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Butterfly } from '../butterfly';

function MainArea() {
    return (
        <div className="main-area">
            please select any item from menu
        </div>
    )
}

export default MainArea;
