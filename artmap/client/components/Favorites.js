import React, { PropTypes } from 'react'

const Favorites = React.createClass({
  renderFavorite(key) {
    const favorite = this.props.favorites[key];
    const removeButton = <a href="#" className="favorite-remove" onClick={this.props.removeFromFavorites.bind(null, key)}>x</a>;
    return (
      <li key={favorite}>{favorite} {removeButton}</li>
    );
  },

  render () {
    const favoriteIds = Object.keys(this.props.favorites);
    return (
      <div>
        <h1>Merkliste</h1>
        <ul>
          {favoriteIds.map(this.renderFavorite)}
        </ul>
      </div>
    )
  }
})

export default Favorites
