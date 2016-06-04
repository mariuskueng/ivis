import React, { PropTypes } from 'react'

const Favorites = React.createClass({
  render () {
    return (
      <div>
        <h1>Merkliste</h1>
        <ul>
          {this.props.favorites.map((favorite) =>
            <li key={favorite}>{favorite}</li>
          )}
        </ul>
      </div>
    )
  }
})

export default Favorites
