import React from 'react';
import Map from './Map';
import $ from 'jQuery';

import NameFilter from './filters/NameFilter';
import markers from '../data/markers';
import MuseumInfo from './MuseumInfo';

const GEOCODE_API_KEY = 'AIzaSyCDbgMkPWtPF1RXKYsgDKTX-nc_gmgmnp0';

const App = React.createClass({
  getInitialState(){
    return {
      markers, // use default markers for testing
      museumTitle: '',
      artistId: 4000058
    }
  },

  getArtists(name) {
    console.info('Searching for artist ' + name);
    if (name) {
      $.get('/artist?name=' + name)
      .done((results) => {
        if (results.length) {
          let artist = results[0];
          this.setState({
            artistId: artist.RECNR
          })
          this.getLocations(name, artist.RECNR, artist.NAMIDENT);
        } else {
          alert(`Keine Künstler gefunden zu ${name}!`);
        }
      });
    }
  },

  getLocations(searchName, artistId, artistName) {
    console.info('Searching for exhibition locations of ' + searchName);
    $.get('/locations?artistId=' + artistId + '&artistName=' + artistName)
    .done((results) => {
      if (results.length) {
        this.getMarkers(results);
      } else {
        alert(`Keine Ausstellungen gefunden zu ${searchName}!`);
      }
    })
  },

  getMarkers(locations) {
    let markers = [];
    console.info('Searching for exhibition location markers');
    locations.forEach((location) => {
      const address = `${location.AUSST_INSTITUT}`;
      $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + GEOCODE_API_KEY)
      .done((data) => {
        if (data.results.length) {
          let geolocation = data.results[0];
          markers.push({
            position: {
              lat: geolocation.geometry.location.lat,
              lng: geolocation.geometry.location.lng,
            },
            title: address,
            defaultAnimation: 2,
          });

          this.setState({
            markers
          });
        } else {
          console.error(data);
        }
      });
    });
  },

  onMarkerClick(index) {
    this.setState({
      museumTitle: this.state.markers[index].title
    });
  },

  render() {
    return (
      <div>
        {/* Header */}
        <header className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h1>Artmap</h1>
            </div>
            <div className="col-md-8 col-md-push-2">
              <div className="row">
                <div className="col-md-12">

                  <NameFilter getArtists={this.getArtists} />

                  <div className="col-md-3">
                    <div className="form-group">
                      <label for="form-material">Welches Material?</label>
                      <select id="form-material" className="form-control">
                        <option>Alle</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label for="form-year">Welches Jahr?</label>
                      <select id="form-year" className="form-control">
                        <option>Alle</option>
                      </select>
                    </div>
                  </div>

                </div>
                <div className="col-md-12">

                  <div className="col-md-3">
                    <div className="form-group">
                      <label for="form-style">Welcher Stil?</label>
                      <select id="form-style" className="form-control">
                        <option>Alle</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label for="form-place">Welche Ortschaft?</label>
                      <select id="form-place" className="form-control">
                        <option>Alle</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label for="form-exhibition">Welche Ausstellung?</label>
                      <select id="form-exhibition" className="form-control">
                        <option>Alle</option>
                      </select>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </header>

        {/* App content */}
        <div className="container-fluid">
          <div className="row">
            <section className="col-md-3">
              <MuseumInfo artistId={this.state.artistId} museum={this.state.museumTitle} />
            </section>
            <section className="map col-md-9">
              <Map markers={this.state.markers} onMarkerClick={this.onMarkerClick} />
            </section>
          </div>
        </div>
      </div>
    )
  }
});

export default App;
