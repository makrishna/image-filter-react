import React from 'react';
import { useLocation } from 'react-router-dom';
import eventBus from './EventBus';
import './index.css'

export class ImageCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        eventBus.on("rangeValueChange", (data) => {
            if(document.getElementById(this.props.image) != null) {
                document.getElementById(this.props.image).style.opacity = (parseFloat(data.range))/10
            }
        })
        return (
            <div className='image-card'>
                <img id={this.props.image} src={this.props.image}/>
                <h3>{this.props.text}</h3>
            </div>
        )
    }


}

export default ImageCard;