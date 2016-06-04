import React, { PropTypes } from 'react'

const Favorites = React.createClass({
  renderFavorite(key) {
    const favorite = this.props.favorites[key];
    const removeButton = <a href="#" className="favorite-remove btn-danger btn-xs" onClick={this.props.removeFromFavorites.bind(null, key)}>x</a>;
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
          {favoriteIds.length ? favoriteIds.map(this.renderFavorite) : 'Es sind noch keine Museen in der Merkliste'}
        </ul>
      </div>
    )
  }
})

export default Favorites
