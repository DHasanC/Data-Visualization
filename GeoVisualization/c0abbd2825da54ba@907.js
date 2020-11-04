// https://observablehq.com/@dhrubo/dhrubo-hasan-chowdhury-4797864/2@907
import define1 from "./e93997d5089d7165@2286.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["us_county_geojson.csv",new URL("./files/8dbe84f39ea873f3dd1d867fe5c63605079ca14e94d9ea2170229e9372fdecb32e4c904988ae393109eee4ce7328828cadedc9ef1e7fa174b24d5868816eccb3",import.meta.url)],["CenPop2010_Mean_CO.csv",new URL("./files/53cd7119e48cbd038ed22a5169f0940b24ebdc91292c453b9372c666dc4b5e45eb078488d84f61c3a611e7f1cdb8572f048d8cb991389566cefcfd8b430f559e",import.meta.url)],["Unemployment.csv",new URL("./files/c9967a9d0f57b1faade86dd145a78c2b11e272c400893d7dfa0ad52e42ee731d296580424692bc881c05385eb383756c540dda5a5b7f4eeed289ed3ec32c5dfb",import.meta.url)],["2019data.csv",new URL("./files/914518e57afe065b051893e8c6f33f176fd5170593b44b5b3c137e9ecb2c96ab67b6bb16ef987311891f0817683dda11eb6fe6bf76ab62fc857c52a8ee3aa060",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`#  Dhrubo Hasan Chowdhury 4797864`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Mapbox: Choropleth`
)});
  main.variable(observer()).define(["locations","medianIncome2019","fips_geojson","DOM","Plotly"], function(locations,medianIncome2019,fips_geojson,DOM,Plotly)
{
  const data = [{
    type: 'choroplethmapbox',
    locations: locations,
    z : medianIncome2019,
    geojson: fips_geojson,
    coloraxis: 'coloraxis',
    hoverinfo: 'skip'  
  }];

  const layout = {
    mapbox: {
        center: {lat:37.0902,lon:-95.7129}, 
        style: "open-street-map", 
        zoom: 3
      },
    coloraxis: {colorscale: "Jet"}, 
    title: {text: "Median_Income - 2019"},
    width: 900, 
    height: 500, 
    margin: {t: 30, b: 0}
  };
  
  const myDiv = DOM.element("div");
  Plotly.newPlot(myDiv, data, layout);
  return myDiv;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `### Mapbox: Bubbleplot`
)});
  main.variable(observer()).define(["lats","longs","Unemployment","fips_geojson","DOM","Plotly"], function(lats,longs,Unemployment,fips_geojson,DOM,Plotly)
{
  const  data = [{
    type: 'scattermapbox',
    lat: lats,
    lon: longs,
    mode : 'markers',
    marker: {
          size: Unemployment.map(d=>d<4?4:d),
          line: {
            color: 'black',
            width: 2
          },
         },
    geojson: fips_geojson,
    //text: countyStatePopulation
  }];

  const layout = {
    mapbox: {
      center: {lat:37.0902,lon:-95.7129}, 
      style: "open-street-map", 
      zoom: 3
    },
    title: {text: "Unemployment- 2019"},
    width: 900, 
    height: 500, 
    margin: {t: 30, b: 0}
  };
  
  const myDiv = DOM.element("div");
  Plotly.newPlot(myDiv, data, layout);
  return myDiv;
}
);
  main.variable(observer("data2019")).define("data2019", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("2019data.csv").text(), d3.autoType)
)});
  main.variable(observer("filtereddata2019")).define("filtereddata2019", ["data2019"], function(data2019){return(
data2019.filter(function(d){ return d.COUNTYFP != 0 })
)});
  main.variable(observer("Unemployment")).define("Unemployment", ["filtereddata2019"], function(filtereddata2019){return(
filtereddata2019.map(d => d.Unemployment_rate_2019)
)});
  main.variable(observer()).define(["d3","filtereddata2019"], function(d3,filtereddata2019){return(
d3.min(filtereddata2019, function(d) { return +d.Unemployment_rate_2019; })
)});
  main.variable(observer("fips_geojson")).define("fips_geojson", ["d3"], function(d3){return(
d3.json("https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json")
)});
  main.variable(observer("medianIncome2019")).define("medianIncome2019", ["locationsbyme"], function(locationsbyme){return(
locationsbyme.map(d=>Math.random()*10000)
)});
  main.variable(observer("medianIncome2010")).define("medianIncome2010", ["locations"], function(locations){return(
locations.map(d=>Math.random()*10000)
)});
  main.variable(observer("population")).define("population", ["countyFIPSLatLong"], function(countyFIPSLatLong){return(
countyFIPSLatLong.map(d=>d.POPULATION)
)});
  main.variable(observer("locations")).define("locations", ["countyFIPSLatLong","zeroPad"], function(countyFIPSLatLong,zeroPad){return(
countyFIPSLatLong.map(d=>zeroPad(d.STATEFP,2)+zeroPad(d.COUNTYFP,3))
)});
  main.variable(observer("lats")).define("lats", ["countyFIPSLatLong"], function(countyFIPSLatLong){return(
countyFIPSLatLong.map(d=>+d.LATITUDE)
)});
  main.variable(observer("longs")).define("longs", ["countyFIPSLatLong"], function(countyFIPSLatLong){return(
countyFIPSLatLong.map(d=>+d.LONGITUDE)
)});
  main.variable(observer("countyStatePopulation")).define("countyStatePopulation", ["countyFIPSLatLong"], function(countyFIPSLatLong){return(
countyFIPSLatLong.map(d=>d.COUNAME + ", "+d.STNAME+" : "+d.POPULATION)
)});
  main.variable(observer("countyFIPSLatLong")).define("countyFIPSLatLong", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("CenPop2010_Mean_CO.csv").text(), d3.autoType)
)});
  main.variable(observer("countyFIPSLatLongContiguousUS")).define("countyFIPSLatLongContiguousUS", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/btskinner/spatial/master/data/county_centers.csv")
)});
  main.variable(observer("extract")).define("extract", ["attachmentbyme"], function(attachmentbyme){return(
attribute=>attachmentbyme.map(d=>d[attribute])
)});
  main.variable(observer()).define(["attachmentbyme"], function(attachmentbyme){return(
attachmentbyme
)});
  main.variable(observer("locationsbyme")).define("locationsbyme", ["filtereddata","zeroPad"], function(filtereddata,zeroPad){return(
filtereddata.map(d=>zeroPad(d.FIPStxt,5))
)});
  main.variable(observer("filtereddata")).define("filtereddata", ["attachmentbyme"], function(attachmentbyme){return(
attachmentbyme.filter(function(d){ return d.FIPStxt % 1000 != 0 })
)});
  main.variable(observer("newarray")).define("newarray", ["attachmentbyme"], function(attachmentbyme){return(
attachmentbyme.filter(function(d,i){ return i<10 })
)});
  main.variable(observer("attachmentbyme")).define("attachmentbyme", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("Unemployment.csv").text(), d3.autoType)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Data`
)});
  main.variable(observer("counties_geojson")).define("counties_geojson", ["county"], function(county){return(
{
  type: "FeatureCollection",
  features: county.map(d=>({type: "Feature", id: d.county+" "+d.state_code, property: {county: d.county, state_code: d.state_code}, geometry: JSON.parse(d.json_object)}))
}
)});
  main.variable(observer("floida_red_data")).define("floida_red_data", ["florida_red_data_raw"], function(florida_red_data_raw){return(
florida_red_data_raw.features.map(d=>d.properties.name.substring(0, d.properties.name.indexOf(' County'))+" FL")
)});
  main.variable(observer("florida_red_data_raw")).define("florida_red_data_raw", ["d3"], function(d3){return(
d3.json('https://raw.githubusercontent.com/plotly/datasets/master/florida-red-data.json',d3.autoType)
)});
  main.variable(observer("floida_blue_data")).define("floida_blue_data", ["florida_blue_data_raw"], function(florida_blue_data_raw){return(
florida_blue_data_raw.features.map(d=>d.properties.name.substring(0, d.properties.name.indexOf(' County'))+" FL")
)});
  main.variable(observer("florida_blue_data_raw")).define("florida_blue_data_raw", ["d3"], function(d3){return(
d3.json('https://raw.githubusercontent.com/plotly/datasets/master/florida-blue-data.json', d3.autoType)
)});
  main.variable(observer("county")).define("county", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("us_county_geojson.csv").text(),d3.autoType)
)});
  main.variable(observer("us_states")).define("us_states", ["d3"], function(d3){return(
d3.json("https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json")
)});
  main.variable(observer("EarthquateRows")).define("EarthquateRows", ["d3"], function(d3){return(
d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/earthquakes-23k.csv',d3.autoType)
)});
  main.variable(observer("CityPopulationRows")).define("CityPopulationRows", ["d3"], function(d3){return(
d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv', d3.autoType)
)});
  main.variable(observer("AlcoholConsumptionRows")).define("AlcoholConsumptionRows", ["d3"], function(d3){return(
d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2010_alcohol_consumption_by_country.csv', d3.autotype)
)});
  main.variable(observer("populationRows")).define("populationRows", ["d3"], function(d3){return(
d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_usa_states.csv', d3.autoType)
)});
  main.variable(observer("stateNameToPostal")).define("stateNameToPostal", ["d3"], function(d3){return(
d3.json("https://worldpopulationreview.com/static/states/name-abbr.json")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Libraries and Tools`
)});
  main.variable(observer("zeroPad")).define("zeroPad", function(){return(
(num, places) => String(num).padStart(places, '0')
)});
  const child1 = runtime.module(define1);
  main.import("radio", child1);
  main.import("select", child1);
  main.variable(observer("Plotly")).define("Plotly", ["require"], function(require){return(
require("https://cdn.plot.ly/plotly-latest.min.js")
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}
