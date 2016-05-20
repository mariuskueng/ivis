import React from 'react';
import Map from './Map';

const App = React.createClass({
  render() {
    let markers = [{
      position: {
        lat: 46.951220,
        lng: 7.443125,
      },
      key: 'Bern',
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
