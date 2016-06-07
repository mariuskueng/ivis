import React, { PropTypes } from 'react'
import $ from 'jQuery';

const NameFilter = React.createClass({
  seachArtists(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    this.props.getArtists(name);
  },

  render() {
    return (
      <form ref="nameFilterForm" onSubmit={this.seachArtists}>
        <div className="form-group">
          <input type="text" className="form-control" id="input-name" ref="name" placeholder="Nach Künstlername suchen" />
        </div>
      </form>
    );
  }
});

export default NameFilter;
