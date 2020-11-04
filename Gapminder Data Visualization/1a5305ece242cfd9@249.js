// https://observablehq.com/@dhrubo/dhrubo-hasan-chowdhury-4797864/3@249
import define1 from "./e93997d5089d7165@2286.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["colorbrewer.json",new URL("./files/c231f66207bd33bd83acad7c45251ea0759bee7fd98ab0b3a39967bfaceff234e14f3a63a2db9d2cd87dae76b136468143d3840355046aee5e71c268f053aebd",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Dhrubo Hasan Chowdhury 4797864
Assignment 9`
)});
  main.variable(observer("colorBrewer")).define("colorBrewer", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("colorbrewer.json").json()
)});
  main.variable(observer("viewof categoricalColor")).define("viewof categoricalColor", ["radio"], function(radio){return(
radio({
  title: "Categorical Color Choice",
  options: [
    "ColorBlind-safe", "Plotly-default"
  ],
  value: "Plotly-default"
})
)});
  main.variable(observer("categoricalColor")).define("categoricalColor", ["Generators", "viewof categoricalColor"], (G, _) => G.input(_));
  main.variable(observer()).define(["africa2007","americas2007","europe2007","Oceania2007","asia2007","categoricalColorScheme","DOM","Plotly"], function(africa2007,americas2007,europe2007,Oceania2007,asia2007,categoricalColorScheme,DOM,Plotly)
{
  var africa = {
  x: africa2007.map(d=>d["gdpPercap"]),
  y: africa2007.map(d=>d["lifeExp"]),
  mode: 'markers',
    name: 'Africa',
  marker: {
          size: africa2007.map(d=>d["pop"]).map(d=> d < 100000000 ? d * 35e-8 :  d * 7e-8),
          name : 'Africa',
         },
};
  
  var america = {
  x: americas2007.map(d=>d["gdpPercap"]),
  y: americas2007.map(d=>d["lifeExp"]),
  mode: 'markers',
    name: 'America',
  marker: {
          size: americas2007.map(d=>d["pop"]).map(d=> d < 100000000 ? d * 35e-8 :  d * 7e-8),
          //line: {
          //color: '#FF0027',
          //color: '#ff7f0e',
          //width: 2
           //},
         },
};
  var europe = {
  x: europe2007.map(d=>d["gdpPercap"]),
  y: europe2007.map(d=>d["lifeExp"]),
  mode: 'markers',
    name: 'Europe'
    
    ,
  marker: {
          size: europe2007.map(d=>d["pop"]).map(d=> d < 100000000 ? d * 35e-8 :  d * 7e-8),
          //line: {
          //color: '#060101',
          //width: 2
           //},
         },
};
  var oceania = {
  x: Oceania2007.map(d=>d["gdpPercap"]),
  y: Oceania2007.map(d=>d["lifeExp"]),
  mode: 'markers',
    name: 'Oceania',
  marker: {
          size: Oceania2007.map(d=>d["pop"]).map(d=> d < 100000000 ? d * 35e-8 :  d * 7e-8),
          //line: {
          //color: '#d62728',
          //width: 2
           //},
         },
};
  var asia = {
  x: asia2007.map(d=>d["gdpPercap"]),
  y: asia2007.map(d=>d["lifeExp"]),
  mode: 'markers',
    name: 'Asia',
  marker: {
          size: asia2007.map(d=>d["pop"]).map(d=> d < 100000000 ? d * 35e-8 :  d * 7e-8),
          //line: {
          //color: '#808000',
          //width: 2
           //},
         },
};

var data = [africa, asia, america, europe, oceania];

var layout = {
  title: `Gapminder-Data Visualization`,
  xaxis: {
    showgrid : false,
    type: "log",
    //autorange: false
    title: 'income per capita',
  },
  yaxis: {
    showgrid : false,
    title: 'Life-Expectancy',
    //type: "log",
    //autorange: true
  },
  colorway :categoricalColorScheme
};
  
  const config = {
    staticPlot: true,
    responsive: true,
    displayModeBar: false
  };

const myDiv = DOM.element("div");
  Plotly.newPlot(myDiv, data, layout, config);
  return myDiv

}
);
  main.variable(observer("file")).define("file", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv")
)});
  main.variable(observer("data2007")).define("data2007", ["file"], function(file){return(
file.filter(function(d){ return d.year == "2007" })
)});
  main.variable(observer("asia2007")).define("asia2007", ["data2007"], function(data2007){return(
data2007.filter(function(d) { return d.continent == "Asia"})
)});
  main.variable(observer("europe2007")).define("europe2007", ["data2007"], function(data2007){return(
data2007.filter(function(d) { return d.continent == "Europe"})
)});
  main.variable(observer("americas2007")).define("americas2007", ["data2007"], function(data2007){return(
data2007.filter(function(d) { return d.continent == "Americas"})
)});
  main.variable(observer("Oceania2007")).define("Oceania2007", ["data2007"], function(data2007){return(
data2007.filter(function(d) { return d.continent == "Oceania"})
)});
  main.variable(observer("africa2007")).define("africa2007", ["data2007"], function(data2007){return(
data2007.filter(function(d) { return d.continent == "Africa"})
)});
  main.variable(observer("extract")).define("extract", ["data2007"], function(data2007){return(
attribute=>data2007.map(d=>d[attribute])
)});
  main.variable(observer("population")).define("population", ["extract"], function(extract){return(
extract("pop")
)});
  main.variable(observer()).define(["d3","data2007"], function(d3,data2007){return(
d3.max(data2007, function(d) { return +d.pop; })
)});
  main.variable(observer("gdp")).define("gdp", ["extract"], function(extract){return(
extract("gdpPercap")
)});
  main.variable(observer("lifeExp")).define("lifeExp", ["extract"], function(extract){return(
extract("lifeExp")
)});
  main.variable(observer("country")).define("country", ["extract"], function(extract){return(
extract("country")
)});
  main.variable(observer("continent1")).define("continent1", ["extract"], function(extract){return(
extract("continent")
)});
  main.variable(observer()).define(["continent1"], function(continent1){return(
continent1.values
)});
  main.variable(observer("Plotly")).define("Plotly", ["require"], function(require){return(
require("https://cdn.plot.ly/plotly-latest.min.js")
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("radio", child1);
  main.import("checkbox", child1);
  main.import("select", child1);
  main.variable(observer("categoricalColorScheme")).define("categoricalColorScheme", ["categoricalColor","d3"], function(categoricalColor,d3){return(
(categoricalColor=="ColorBlind-safe")? ['#4477AA', '66CCEE', '#228833', '#CCBB44', '#EE6677']: d3[categoricalColor]
)});
  return main;
}
