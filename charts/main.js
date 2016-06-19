var data = [4, 8, 15, 16, 23, 42];

// Scaling to Fit
var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });


var artists = 2217;
var artistWithMoreThan10Artworks = 672;

// var circular = d3.scale
