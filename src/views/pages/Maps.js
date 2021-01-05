import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
class SimpleMap extends Component {
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
            <div style={{ height: '100vh', width: '100%', filter: 'grayscale(80%)' }}>
                
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDI6BqHuvhar253kqxReJ-5b5YKeq7AyE0" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals= "true"
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >

                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;