import React, { useState } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import eventBus from '../EventBus';
import './leftside-panel.scss';
import data from "./../assets/data/data.json"

function LeftsidePanel() {
    let menuItems = [
        { name: "Butterfly", active: true, path: "/butterfly", data: data.Butterfly },
        { name: "Cars", active: false, path: "/cars", data: data.Cars },
        { name: "Cell Phones", active: false, path: "/cellphones", data: data.Cellphone },
        { name: "Office", active: false, path: "/office", data: data.Office }]

    const [range, setRange] = useState(10);

    let rangeValueChange = (event) => {
        setRange(event.target.value);
        eventBus.dispatch("rangeValueChange", { range: range })
        console.log(range);
    }

    return (
        <div className='leftside-panel'>
            <ul className='menu-items'>
                <li className='menu-item'>
                </li>
                {
                    menuItems.map((element, index) => {
                        return (
                            <li key={element.name} className='menu-item'>
                                <NavLink to={{ pathname: `${element.path}`, state: { data: element.data } }} exact activeClassName='active'>{element.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='range-slider'>
                <div>Opacity</div>
                <input
                    id="typeinp"
                    type="range"
                    min="0" max="10"
                    value={range}
                    orient="vertical"
                    onChange={rangeValueChange}
                    step="1" />
            </div>
        </div>
    );
}

export default LeftsidePanel;

