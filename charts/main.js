var data = [4, 8, 15, 16, 23, 42];

d3.json("data4.json", function(error, data){
  if(error) throw error;
  var counts = data.map(function(obj) {
    return obj.count;
  }).sort(function(a, b){return a-b});

  // Scaling to Fit
  var x = d3.scale.linear()
      .domain([0, d3.max(counts)])
      .range([counts[0], counts[counts.length - 1]]);

  d3.select(".chart")
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d) { return x(d.count / 35) + "px"; })
      .text(function(d) { return d.century + " (" + d.count + ")"; });
});
