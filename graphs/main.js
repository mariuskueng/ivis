'use strict';

var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(name)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 1
  }

});

// Example with numbers and groups
//
// var values = [
//   {id:1, group:'a'},
//   {id:2, group:'b'},
//   {id:3, group:'c'},
//   {id:4, group:'a'},
//   {id:5, group:'b'},
//   {id:6, group:'c'},
//   {id:7, group:'a'},
//   {id:8, group:'b'},
//   {id:9, group:'c'},
//   {id:10, group:'a'},
// ];
//
// var groups = new Set();
// for (var n in values) {
//   cy.add({group: "nodes", data: {id: values[n].id, name: '#'+values[n].id }})
//   var group = values[n].group;
//   if (!groups.has(group)) {
//     groups.add(group);
//     cy.add({group: "nodes", data: {id: group, name: group }})
//   }
//   cy.add({group: "edges", data: {source: values[n].id, target: group}});
// }
//

// remove titles and limit dataset
var data = graphData.data.splice(1, 200);

var artworks = new Set();
var years = new Set();
var materials = new Set();

for(var a of data) {
  var artworkId = a[0] + '-' + makeid();
  var artworkName = a[0];
  var year = a[1];
  var material = a[2];
  var image = a[3] ? a[3] : '';

  // add artwork node
  cy.add({group: "nodes", data: {id: artworkId , name: artworkName, image: image }});

  addNode(cy, years, year);
  addNode(cy, materials, material);

  addEdge(cy, artworkId, year);
  addEdge(cy, artworkId, material);
}

cy.elements().layout({ name: 'cose' });
