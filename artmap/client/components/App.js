import React from 'react';
import Map from './Map';

const App = React.createClass({
  render() {
    let markers = [{
      position: {
        lat: 46.951220,
        lng: 7.443125,
      },
      key: 'Bern',
      defaultAnimation: 2,
    }];

    return (
      <div>
        <header className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h1>Artmap</h1>
            </div>
            <div className="col-md-8 col-md-push-2">
              <form>
                <div className="row">
                  <div className="col-md-12">

                    <div className="col-md-3">
                      <div className="form-group form-inline">
                        <label for="input-email">Nach Künstler suchen</label>
                        <input type="email" className="form-control" id="input-email" placeholder="Künstlername" />
                        <input type="submit" className="form-control" value="Go"/>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label for="form-material">Welches Material?</label>
                        <select id="form-material" className="form-control">
                          <option>Alle</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label for="form-year">Welches Jahr?</label>
                        <select id="form-year" className="form-control">
                          <option>Alle</option>
                        </select>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-12">

                    <div className="col-md-3">
                      <div className="form-group">
                        <label for="form-style">Welcher Stil?</label>
                        <select id="form-style" className="form-control">
                          <option>Alle</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label for="form-place">Welche Ortschaft?</label>
                        <select id="form-place" className="form-control">
                          <option>Alle</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label for="form-exhibition">Welche Ausstellung?</label>
                        <select id="form-exhibition" className="form-control">
                          <option>Alle</option>
                        </select>
                      </div>
                    </div>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </header>
        <section className="map">
          <Map markers={markers} />
        </section>
      </div>
    )
  }
});

export default App;
