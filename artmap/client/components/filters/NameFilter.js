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
        <div className="col-md-3">
          <div className="form-group form-inline">
            <label for="input-email">Nach Künstler suchen</label>
            <input type="text" className="form-control" id="input-name" ref="name" placeholder="Künstlername" />
            <input type="submit" className="form-control" value="Go"/>
          </div>
        </div>
      </form>
    );
  }
});

export default NameFilter;
