import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './LocationStyle.css';
import MaterialIcon, {colorPallet} from 'material-icons-react';

export default class CustomIcon extends Component {
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
            <div>
                <div  onClick={this.messageOnClick}>
                    {this.props.text}
                    <img src={this.props.markerSrc}/>
                </div>
                <div>
                    

                    {this.state.infoWindowVisible
                        ? <div className="infoWindow">
                                <h1>{this.props.messageTitle}</h1>
                                <img src={this.props.messageSrc}/>
                            </div>
                        : null}
                </div>
            </div>
        );
    }
}