import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import eventBus from './EventBus';
import ImageCard from './imageCard';

function Butterfly() {
    const location = useLocation();
    let [data,setData] = useState(location.state.data)

    // let searchEvent = (event) => {
    //     setData(location.state.data.filter(em => em.text.toLowerCase().includes(event.target.value.toLowerCase())))
    // }
    // eventBus.on("searched", () => searchEvent(event));

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

export default Butterfly;