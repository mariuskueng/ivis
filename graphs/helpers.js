function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function addNode(cy, collection, item) {
  if (!collection.has(item)) {
    if (item && !item.includes('.jpg')) {
      collection.add(item);
      cy.add({group: "nodes", data: {id: item, name: item }});
    }
  }
}

function addEdge(cy, source, target) {
  cy.add({group: "edges", data: {source: source, target: target}});
}
