import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './LocationStyle.css';
import {dotStyle} from './DotStyle';

export default class LocationDot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoWindowVisible: false
        }
    }
    messageOnClick = () => {
        this.state.infoWindowVisible
            ? this.setState({infoWindowVisible: false})
            : this.setState({infoWindowVisible: true})
    }
    render() {
        return (
            <div style={dotStyle} onClick={this.messageOnClick}>
                {this.props.text}

                {this.state.infoWindowVisible
                    ? <div className="infoWindow">
                            <h1>{this.props.messageTitle}</h1>
                            <img
                                src={this.props.messageSrc}/>
                        </div>
                    : null}
            </div>
        );
    }
}