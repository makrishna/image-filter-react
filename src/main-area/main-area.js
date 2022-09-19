import React, { useEffect, useState } from 'react';
import eventBus from '../EventBus';
import './main-area.scss'
import { MemoryRouter, Route, Link, Switch, useRouteMatch, useParams, useHistory, useLocation } from 'react-router-dom';
import { Butterfly } from '../butterfly';
import jsonData from "./../assets/data/data.json"
import ImageCard from '../imageCard';
import { Navigate } from "react-router-dom";

function MainArea() {

    let loc = useHistory();

    let res = jsonData;
    let [data, setData] = useState([...res.Butterfly, ...res.Cars, ...res.Cellphone, ...res.Office]);

    let getData = (resp) => {
        if (resp) {
            return [...resp.Butterfly, ...resp.Cars, ...resp.Cellphone, ...resp.Office]
        }
    }

    console.log(res);

    eventBus.on("searched", (event) => {
        loc.push("/");
        if (data.length == getData(res).length) {
            if(data.length == 36) {
                setData(data.filter(em => em.text.toLowerCase().includes(event.query.toLowerCase())));
            }
        }
    });

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data.map(el => {
                        return (

                            <ImageCard key={el.text} image={el.image} text={el.text} />

                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainArea;

