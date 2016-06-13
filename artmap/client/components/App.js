import React from 'react';
import Map from './Map';
import $ from 'jQuery';

import NameFilter from './filters/NameFilter';
import MuseumInfo from './MuseumInfo';
import Favorites from './Favorites';

import markers from '../data/markers';
import images from '../data/images';

const GEOCODE_API_KEY = 'AIzaSyCDbgMkPWtPF1RXKYsgDKTX-nc_gmgmnp0';

const App = React.createClass({
  getInitialState(){
    return {
      markers, // use default markers for testing
      museumTitle: 'Zentrum Paul Klee',
      museumCity: 'Bern',
      artistId: 4000058,
      favorites: [
        'Kunstmuseum Bern',
        'Galerie Beyeler',
        'Seedamm-Kulturzentrum'
      ],
      images,
      showMuseumInfo: false,
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
      const address = `${location.AUSST_INSTITUT} ${location.AUSST_ORT}`;
      $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + GEOCODE_API_KEY)
      .done((data) => {
        if (data.results.length) {
          let geolocation = data.results[0];
          markers.push({
            position: {
              lat: geolocation.geometry.location.lat,
              lng: geolocation.geometry.location.lng,
            },
            title: location.AUSST_INSTITUT,
            city: location.AUSST_ORT,
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
    const museum = this.state.markers[index];

    this.setState({
      museumTitle: museum.title,
      museumCity: museum.city,
      showMuseumInfo: true
    });
    this.updateImages();
  },

  addToFavorites(museum) {
    if (!this.state.favorites.includes(museum)) {
      this.state.favorites.push(museum);
      this.setState({
        favorites: this.state.favorites
      });
    }
  },

  removeFromFavorites(index) {
    if (index > -1) {
      delete this.state.favorites[index];
      this.setState({
        favorites: this.state.favorites
      });
    }
  },

  updateImages(museumTitle) {
    $.get('/images?artistId=' + this.state.artistId + '&museum=' + this.state.museumTitle)
    .done((results) => {
      this.setState({
        images: results
      });
    });
  },

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar">
            <NameFilter getArtists={this.getArtists} />
            <Favorites
              favorites={this.state.favorites}
              removeFromFavorites={this.removeFromFavorites}
            />
            <hr />
            <MuseumInfo
              artistId={this.state.artistId}
              museumTitle={this.state.museumTitle}
              museumCity={this.state.museumCity}
              favorites={this.state.favorites}
              addToFavorites={this.addToFavorites}
              images={this.state.images}
              updateImages={this.updateImages}
            />
          </div>
          <div className="col-md-9 main">
            <div className="map">
            <Map
              markers={this.state.markers}
              onMarkerClick={this.onMarkerClick}
            />
            </div>
          </div>
        </div>
        <div className="logo">
          <h1>Artmap</h1>
          <img src="/assets/logo_sik.gif" />
        </div>
      </div>
    )
  }
});

export default App;
