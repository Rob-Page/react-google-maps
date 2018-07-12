import React from 'react';
import {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationDot from './LocationDot';
import GoogleIcon from './GoogleIcon';
import CustomIcon from './CustomIcon';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
constructor(props){
    super(props)
}
static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCu7rsf9wfUgHKspaVJ7wbXT9KQywq0ixI"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationDot
            lat={59.955413}
            lng={30.337844}
            text={'A'}
          />
          <GoogleIcon
            lat={59.99}
            lng={30.337844}
            text={'B'}
            messageTitle="Cat"
            messageSrc="http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_66/cw_288/ch_162/APL/uploads/2014/10/cat_5-1.jpg"
          />
          <CustomIcon
            lat={59.99}
            lng={30.4}
            text={'B'}
            messageTitle="Cat"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_66/cw_288/ch_162/APL/uploads/2014/10/cat_5-1.jpg"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;