'use strict';

var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        width: 10,
        height: 10,
        'background-color': '#666',
        'label': 'data(name)'
      }
    },

    {
      selector: 'node[[degree >= 10]]',
      style: {
        'background-color': 'red',
        'font-weight': 'bold',
        width: 50,
        height: 50
      }
    },

    {
      selector: 'node:active',
      style: {
        'background-color': 'green',
        width: 25,
        height: 25,
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

var artworks = new Set();
var years = new Set();
var materials = new Set();

$.ajax({
  url: "http://server1102.cs.technik.fhnw.ch/json.php?t=Werk&n=3000&c=TITEL,JAHR,MATERIAL,BILDNAME",
})
.done(function( data ) {
  var artworks = JSON.parse(data);

  cy.startBatch();

  for(var artwork of artworks) {
    var artworkName = artwork.TITEL.trim();
    var artworkId = artworkName + '-' + makeid();
    var year = artwork.JAHR.trim();
    var material = artwork.MATERIAL.trim();
    var imageUrl = 'http://server1102.cs.technik.fhnw.ch/bilder/' + artwork.BILDNAME.trim();

    // add artwork node
    cy.add({group: "nodes", data: {id: artworkId , name: artworkName, imageUrl: imageUrl }});

    addNode(cy, years, year);
    addNode(cy, materials, material);

    addEdge(cy, artworkId, year);
    addEdge(cy, artworkId, material);
  }

  cy.endBatch();

  // var nodesWithSmallIndegree = cy.nodes().filterFn(function( ele ){
  //   return ele.degree() < 2;
  // });
  // cy.remove(nodesWithSmallIndegree);

  cy.elements().layout({ name: 'cose' });
});
