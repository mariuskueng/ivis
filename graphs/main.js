'use strict';

var INITIAL_NODE_SIZE = 20;
var amount = 100;

$('.amount-select').on('change', function(e) {
  e.preventDefault();
  loadData($('.amount-select').val());
});

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
    },

    {
      selector: '.node-hover',
      style: {
        'width': 400,
        'height': 400,
        'font-size': '20px',
        'font-weight': 'bold',
        'shape': 'square'
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

function loadData(amount) {
  cy.elements().remove();

  $.ajax({
    url: "http://server1102.cs.technik.fhnw.ch/json.php?t=Werk&n=" + amount + "&c=TITEL,JAHR,MATERIAL,BILDNAME",
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
          name: artworkName,
          id: artworkId,
          year: year,
          material: material,
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

    var currentNodeName;
    cy.$('node').on('mouseover', function(e){
      var ele = e.cyTarget;
      var data = ele.data();
      currentNodeName = data.name;

      if (data.imageUrl) {
        ele.data({name: data.name + ' | ' + data.year + ' | ' + data.material});
        ele.style({
          'background-image': 'url(' + data.imageUrl + ')',
        });
        ele.addClass('node-hover');
        console.log('hover ' + ele.id());
      }
      cy.nodes().difference(ele).style({
        'opacity': 0.2
      });
    });

    cy.$('node').on('mouseout', function(e){
      var ele = e.cyTarget;
      var data = ele.data();

      ele.data({name: currentNodeName});

      if (data.imageUrl) {
        ele.style({
          'background-image': '',
        })
        ele.removeClass('node-hover');
      }

      cy.nodes().style({
        'opacity': 1
      });
    });

    cy.elements().layout({ name: 'spread', minDist : 100});
  });
}

loadData(100);
