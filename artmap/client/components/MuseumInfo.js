import React, { PropTypes } from 'react'
import $ from 'jQuery';

const MuseumInfo = React.createClass({
  getInitialState() {
    return {
      museum: '',
      images: []
    }
  },
  componentDidMount() {
    this.setState({
      museum: this.props.museum
    });
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.museum !== this.state.museum) {
      $.get('/images?artistId=' + this.props.artistId + '&museum=' + nextProps.museum)
      .done((results) => {
        this.setState({
          images: results,
          museum: nextProps.museum
        });
      });
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
      <div className="museum-info">
        <h4>Ausgewähltes Museum:</h4>
        <h1>{this.props.museum ? this.props.museum : 'Klicken Sie auf einen Pin in der Karte!'}</h1>
        <div className="">
          {this.state.images.length ? this.state.images.map(this.renderImage) : 'Keine Bilder gefunden!'}
        </div>
      </div>
    )
  }
})

export default MuseumInfo
