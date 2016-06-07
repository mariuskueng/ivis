import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default function SimpleMap (props) {
  return (
    <section style={{height: '100%'}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 46.891461, lng: 8.099526 }} // Rotbach
            onClick={props.onMapClick}
            defaultOptions={{
              disableDefaultUI: true,
              backgroundColor: '#CCC',
              styles: [
                {
                  featureType: 'all',
                  stylers: [
                    { saturation: -100 }
                  ]
                }
              ]
            }}

          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)}
                  onClick={() => props.onMarkerClick(index)}
                  icon='/assets/marker.png'
                />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
