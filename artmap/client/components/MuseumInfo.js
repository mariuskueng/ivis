import React, { PropTypes } from 'react'

const MuseumInfo = React.createClass({
  render () {
    return (
      <div className="museum-info">
        <h3>Museum Info</h3>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
})

export default MuseumInfo
