var div = document.getElementById("pie");
var width = 960
var height = 500
var radius = Math.min(width, height) / 2;
var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);
var arc2 = d3.svg.arc()
    .outerRadius(radius - 70)
    .innerRadius(radius - 140);
var arc3 = d3.svg.arc()
    .outerRadius(radius - 140)
    .innerRadius(radius - 210);
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// SELECT COUNT(URHAUPTNR) FROM ivis_fs16.Werk GROUP BY URHAUPTNR
d3.json("data1.json", function(error, data){
  if(error) throw error;
  arc.startAngle(0);
  arc.endAngle(toRadiant(data[0].artworks, data[1].artworks));
  svg.append("path")
    .attr("class", "arc")
    .attr("d", arc);
  svg.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("text-anchor", "middle")
    .text("KW > 10");
});

// SELECT COUNT(*) AS chs FROM ivis_fs16.Ort WHERE AUTOZEICHEN = ‚CH‘UNION SELECT COUNT(*) AS total FROM ivis_fs16.Ort;
d3.json("data2.json", function(error, data){
  if(error) throw error;
  arc2.startAngle(0);
  arc2.endAngle(toRadiant(data[0].chs, data[1].chs));
  svg.append("path")
    .attr("class", "arc2")
    .attr("d", arc2);
  svg.append("text")
    .attr("transform", function(d) { return "translate(" + arc2.centroid(d) + ")"; })
    .attr("text-anchor", "middle")
    .text("ch");
});

function toRadiant(value, max){
  var smallest = (2 * Math.PI) / max;
  return value * smallest;
}
