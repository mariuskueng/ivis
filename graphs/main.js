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
    // {
    //   selector: 'edge[[weight >= 3]]',
    //   style: {
    //     width: 50
    //   }
    // },
    // {
    //   selector: 'node[[degree >= 3]]',
    //   style: {
    //     'font-weight': 'bold',
    //     width: INITIAL_NODE_SIZE * 2,
    //     height: INITIAL_NODE_SIZE * 2
    //   }
    // },
    // {
    //   selector: 'node[[degree >= 5]]',
    //   style: {
    //     'font-weight': 'bold',
    //     width: INITIAL_NODE_SIZE * 2.5,
    //     height: INITIAL_NODE_SIZE * 2.5
    //   }
    // },
    // {
    //   selector: 'node[[degree >= 10]]',
    //   style: {
    //     'font-weight': 'bold',
    //     width: INITIAL_NODE_SIZE * 3,
    //     height: INITIAL_NODE_SIZE * 3
    //   }
    // },

    {
      selector: 'node:active',
      style: {
        'background-color': 'green',
      }
    },

    {
      selector: '.edge-year',
      style: {
        'line-color': 'yellow',
      }
    },

    {
      selector: '.edge-material',
      style: {
        'line-color': 'lime',
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
    name: 'spread',
    rows: 1
  }

});

var artworks = new Set();
var years = new Set();
var materials = new Set();

$.ajax({
  url: "http://server1102.cs.technik.fhnw.ch/json.php?t=Werk&n=100&c=TITEL,JAHR,MATERIAL,BILDNAME",
})
.done(function( data ) {
  var artworks = JSON.parse(data);

  cy.startBatch();

  for(var artwork of artworks) {
    var artworkName = artwork.TITEL.trim();
    artwork.ID = makeid();
    var artworkId = artwork.ID;
    var year = artwork.JAHR.trim();
    var material = artwork.MATERIAL.trim();
    var imageUrl = 'http://www.sikart.ch/abb373/' + artwork.BILDNAME.trim();

    // add artwork node
    cy.add({
      group: "nodes",
      classes: 'node-artwork',
      data: {
        name:artworkName,
        id: artworkId ,
        imageUrl: imageUrl,
        weight: 0
      }
    });

    for(var a of artworks) {
      if (a.ID && artworkId !== a.ID) {
        if (material == a.MATERIAL && year == a.JAHR) {
          addEdge(cy, artworkId, a.ID, 'red');
          console.log("yolo1");
        } else if (material == a.MATERIAL) {
          addEdge(cy, artworkId, a.ID, 'yellow');
          console.log("yolo2");
        } else if (year == a.JAHR) {
          addEdge(cy, artworkId, a.ID, 'green');
          console.log("yolo3");
        }
      }
    }
  }

  cy.endBatch();

  cy.$('node').on('mouseover', function(e){
    var ele = e.cyTarget;
    var data = ele.data();

    if (data.imageUrl) {
      ele.style({
        'background-image': 'url(' + data.imageUrl + ')',
        'width': 500,
        'height': 500,
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

  cy.elements().layout({ name: 'spread', minDist : 100});
});
