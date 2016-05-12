'use strict';

var INITIAL_NODE_SIZE = 20;

var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        width: INITIAL_NODE_SIZE,
        height: INITIAL_NODE_SIZE,
        'background-color': '#666',
        'label': 'data(name)'
      }
    },
    {
      selector: 'node[[degree >= 3]]',
      style: {
        'font-weight': 'bold',
        width: INITIAL_NODE_SIZE * 2,
        height: INITIAL_NODE_SIZE * 2
      }
    },
    {
      selector: 'node[[degree >= 5]]',
      style: {
        'font-weight': 'bold',
        width: INITIAL_NODE_SIZE * 2.5,
        height: INITIAL_NODE_SIZE * 2.5
      }
    },
    {
      selector: 'node[[degree >= 10]]',
      style: {
        'font-weight': 'bold',
        width: INITIAL_NODE_SIZE * 3,
        height: INITIAL_NODE_SIZE * 3
      }
    },

    {
      selector: 'node:active',
      style: {
        'background-color': 'green',
      }
    },

    {
      selector: '.node-year',
      style: {
        'background-color': 'yellow',
      }
    },

    {
      selector: '.node-material',
      style: {
        'background-color': 'lime',
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
  url: "http://server1102.cs.technik.fhnw.ch/json.php?t=Werk&n=500&c=TITEL,JAHR,MATERIAL,BILDNAME",
})
.done(function( data ) {
  var artworks = JSON.parse(data);

  cy.startBatch();

  for(var artwork of artworks) {
    var artworkName = artwork.TITEL.trim();
    var artworkId = artworkName + '-' + makeid();
    var year = artwork.JAHR.trim();
    var material = artwork.MATERIAL.trim();
    var imageUrl = 'http://www.sikart.ch/abb373/' + artwork.BILDNAME.trim();

    // add artwork node
    cy.add({group: "nodes", classes: 'node-artwork', data: {id: artworkId , name: artworkName, imageUrl: imageUrl }});

    addNode(cy, 'year', years, year);
    addNode(cy, 'material', materials, material);

    addEdge(cy, artworkId, year);
    addEdge(cy, artworkId, material);
  }

  cy.endBatch();

  // var nodesWithSmallIndegree = cy.nodes().filterFn(function( ele ){
  //   return ele.degree() < 2;
  // });
  // cy.remove(nodesWithSmallIndegree);

  cy.$('node').on('mouseover', function(e){
    var ele = e.cyTarget;
    var data = ele.data();

    if (data.imageUrl) {
      ele.style({
        'background-image': 'url(' + data.imageUrl + ')',
        'width': 200,
        'height': 200,
      });
      console.log('hover ' + ele.id());
    }
  });

  cy.$('node').on('mouseout', function(e){
    var ele = e.cyTarget;
    var data = ele.data();

    if (data.imageUrl) {
      ele.style({
        'background-image': '',
        'width': 10,
        'height': 10,
      });
    }
  });

  cy.elements().layout({ name: 'cose', idealEdgeLength : 500});
});
