import React, { PropTypes } from 'react'

const MuseumInfo = React.createClass({
  render () {
    return (
      <div className="museum-info">
        <h4>Ausgewähltes Museum</h4>
        <h1>{this.props.title ? this.props.title : 'Klicken Sie auf einen Pin in der Karte!'}</h1>
      </div>
    )
  }
})

export default MuseumInfo
