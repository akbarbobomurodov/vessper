import React,{Component} from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <div style={{
                width:'300px',
                height:'400px'
            }}>
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                      
                    </div>
                </InfoWindow>
            
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD8UghDyT05c9FjgNi5iSnCDUhz9AyJj5M')
})(MapContainer)