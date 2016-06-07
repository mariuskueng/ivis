import React, { PropTypes } from 'react'
import $ from 'jQuery';

const museumTitleInfo = React.createClass({
  getInitialState() {
    return {
      toggleClass: 'hidden',
    }
  },

  renderImage(image) {
    let imageUrl = `http://www.sikart.ch/abb373/${image.BILDNAME}`;
    return(
      <div key={image.BILDNAME} className="artwork-image col-md-6">
        <img src={imageUrl} className="img-responsive" alt={image.TITEL} title={image.TITEL} />
      </div>
    )
  },

  render () {
    return (
      <div className="museum-info-wrapper col-md-3">
        <button className="btn btn-default btn-circle btn-lg museum-info-toggle-button" onClick={this.props.toggleMuseumInfo}>
          <span className={'fa ' + (this.props.showMuseumInfo ? 'fa-close' : 'fa-info')}></span>
        </button>
        <div className={'museum-info ' + (this.props.showMuseumInfo ? 'show' : 'hidden')}>
          <h4>Ausgewähltes Museum:</h4>
          {!this.props.favorites.includes(this.props.museumTitle) && this.props.museumTitle ? <button className="btn btn-primary" onClick={this.props.addToFavorites.bind(null, this.props.museumTitle)}>Zur Merkliste hinzufügen</button> : ''}
          <h1>{this.props.museumTitle ? this.props.museumTitle : 'Klicken Sie auf einen Pin in der Karte!'}</h1>
          <div className="">
            {this.props.images.length ? this.props.images.map(this.renderImage) : 'Keine Bilder gefunden!'}
          </div>
        </div>
      </div>
    )
  }
})

export default museumTitleInfo
