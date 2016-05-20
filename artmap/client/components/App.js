import React from 'react';
import Map from './Map';

const App = React.createClass({
  render() {
    let markers = [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: 'Taiwan',
      defaultAnimation: 2,
    }];

    return (
      <div>
        <h1>Artmap</h1>
        <div className="map">
          <Map markers={markers} />
        </div>
      </div>
    )
  }
});

export default App;
