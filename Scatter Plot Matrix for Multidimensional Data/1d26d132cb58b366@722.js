// https://observablehq.com/@dhrubo/dhrubo-hasan-chowdhury-4797864-assignment-5@722
import define1 from "./e93997d5089d7165@2286.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["asia.csv",new URL("./files/37052fb7e45769cee8f1075777e191aeacd745df0f53d88034684de4e47a67f5e82dda4a16e0ab10619f91a2102800dc8ecd64d6e45445c4945ad5c116ae9a57",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Dhrubo Hasan Chowdhury 4797864 Assignment 5
`
)});
  main.variable(observer("irisData")).define("irisData", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/iris.csv", d3.autoType)
)});
  main.variable(observer("extract1")).define("extract1", ["irisData"], function(irisData){return(
attribute=>irisData.map(d=>d[attribute])
)});
  main.variable(observer("SepalLength")).define("SepalLength", ["extract1"], function(extract1){return(
extract1("SepalLength")
)});
  main.variable(observer("PetalLength")).define("PetalLength", ["extract1"], function(extract1){return(
extract1("PetalLength")
)});
  main.variable(observer("SepalWidth")).define("SepalWidth", ["extract1"], function(extract1){return(
extract1("SepalWidth")
)});
  main.variable(observer("PetalWidth")).define("PetalWidth", ["extract1"], function(extract1){return(
extract1("PetalWidth")
)});
  main.variable(observer()).define(["SepalLength","SepalWidth","PetalLength","PetalWidth","DOM","Plotly"], function(SepalLength,SepalWidth,PetalLength,PetalWidth,DOM,Plotly)
{
  let pick1 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: SepalLength,
      // y: SepalLength,
    text: `Correlation 1`,
      marker: {
        size: 6,
        color: "black"
      }
    };
  let pick2 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: SepalWidth,
      // y: SepalLength,
    xaxis: 'x2',
  yaxis: 'y2',
      marker: {
        size: 6,
        color: "blue"
      }
    };
  let pick3 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: PetalLength,
      // y: SepalLength,
    xaxis: 'x3',
  yaxis: 'y3',
      marker: {
        size: 6,
        color: "red"
      }
    };
  let pick4 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: PetalWidth,
      // y: SepalLength,
    xaxis: 'x4',
  yaxis: 'y4',
      marker: {
        size: 6,
        color: "tan"
      }
    };
  let pick5 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      x: SepalLength,
      y: SepalWidth,
    xaxis: 'x5',
  yaxis: 'y5',
      marker: {
        size: 6,
        color: "purple"
      }
    };
  let pick6 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: SepalWidth,
      // y: SepalWidth,
    xaxis: 'x6',
  yaxis: 'y6',
      marker: {
        size: 6,
        color: "crimson"
      }
    };
  let pick7 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: PetalLength,
      // y: SepalWidth,
    xaxis: 'x7',
  yaxis: 'y7',
      marker: {
        size: 6,
        color: "orange"
      }
    };
  
  let pick8 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: PetalWidth,
      // y: SepalWidth,
    xaxis: 'x8',
  yaxis: 'y8',
      marker: {
        size: 6,
        color: "indigo"
      }
    };
  let pick9 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      x: SepalLength,
      y: PetalLength,
    xaxis: 'x9',
  yaxis: 'y9',
      marker: {
        size: 6,
        color: "scarlet"
      }
    };
  let pick10 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      x: SepalWidth,
      y: PetalLength,
    xaxis: 'x10',
  yaxis: 'y10',
      marker: {
        size: 6,
        color: "scarlet"
      }
    };
  let pick11 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: PetalLength,
      // y: PetalLength,
    xaxis: 'x11',
  yaxis: 'y11',
      marker: {
        size: 6,
        color: "scarlet"
      }
    };
  let pick12 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: PetalWidth,
      // y: PetalLength,
    xaxis: 'x12',
  yaxis: 'y12',
      marker: {
        size: 6,
        color: "scarlet"
      }
    };
  let pick13 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      x: SepalLength,
      y: PetalWidth,
    xaxis: 'x13',
  yaxis: 'y13',
      marker: {
        size: 6,
        color: "scarlet"
      }
    };
  let pick14 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      x: SepalWidth,
      y: PetalWidth,
    xaxis: 'x14',
  yaxis: 'y14',
      marker: {
        size: 6,
        color: "scarlet"
      }
    };
  let pick15 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      x: PetalLength,
      y: PetalWidth,
    xaxis: 'x15',
  yaxis: 'y15',
      marker: {
        size: 6,
        color: "scarlet"
      }
    };
  let pick16 = {
      mode: "markers",
      // name: "setosa",
      type: "scatter",
      // x: PetalWidth,
      // y: PetalWidth,
    xaxis: 'x16',
  yaxis: 'y16',
      marker: {
        size: 6,
        color: "pink"
      }
    };
  
   let data = [pick1, pick2, pick3, pick4, pick5, pick6, pick7, pick8, pick9, pick10, pick11, pick12, pick13, pick14, pick15, pick16];

  var layout = {
  grid: {rows: 4, columns: 4, pattern: 'independent'},
    // xaxis: {
    //   title: " "
    // },
    // yaxis:{
    //   title:" SepalLength "
    // },
    // x5axis: {
    //   title: " "
    // },
    // y5axis: {
    //   title: "SepalWidth"
    // },
    // x9axis: {
    //   title: " "
    // },
    // y9axis: {
    //   title: "SepalWidth"
    // },
    // // x13axis: {
    // //   title: "SepalLength"
    // // },
    // x13axis: {
    //   title: "SepalLength"
    // },
    //   y13axis: {
    //   title: "SepalLength"
    // },
    //   x14axis: {
    //   title: "SepalLength"
    // },
    //   y14axis: {
    //   title: "SepalLength"
    // },
    //   x15axis: {
    //   title: "SepalLength"
    // },
    //   y15axis: {
    //   title: "SepalLength"
    // },
    //   x16axis: {
    //   title: "SepalLength"
    // },
    // y16axis: {
    //   title: "SepalLength"
    // }  
};
  
  const div = DOM.element('div');
  Plotly.newPlot(div, data, layout);
  return div;
}
);
  main.variable(observer("STDeviation")).define("STDeviation", ["Mean"], function(Mean){return(
function STDeviation(X)
{
  var varXsum = 0;
  var L = X.length;
  var dataXmean = Mean(X);
 
  for (var i = 0; i < L; i++)
  {
    varXsum += ((X[i]-dataXmean) * (X[i]-dataXmean));
  }
  return Math.sqrt(varXsum / L);
}
)});
  main.variable(observer("Mean")).define("Mean", function(){return(
function Mean(X)
{
  var sumX = 0;
  var L = X.length;

  for (var i=0; i < L; i++)
  {
    sumX += X[i];
  }
  return sumX / L;
}
)});
  main.variable(observer("CalculateCovariance")).define("CalculateCovariance", ["Mean"], function(Mean){return(
function CalculateCovariance (X, Y)
{
  var covXYsum = 0;
  var data_legnth = X.length;
  var dataXmean = Mean(X);
  var dataYmean = Mean(Y);

  for (var i=0; i<data_legnth; i++)
  {
    covXYsum += ((X[i] - dataXmean) * (Y[i] - dataYmean));
  }
  return covXYsum/data_legnth;
}
)});
  main.variable(observer("rCoeff")).define("rCoeff", ["CalculateCovariance","STDeviation"], function(CalculateCovariance,STDeviation){return(
function rCoeff(parameter1, parameter2)
{
  return CalculateCovariance(parameter1, parameter2)/(STDeviation(parameter1) * STDeviation(parameter2))
}
)});
  main.variable(observer()).define(["rCoeff","SepalLength","PetalLength"], function(rCoeff,SepalLength,PetalLength){return(
rCoeff(SepalLength, PetalLength)
)});
  main.variable(observer()).define(["rCoeff","SepalLength","SepalWidth"], function(rCoeff,SepalLength,SepalWidth){return(
rCoeff(SepalLength, SepalWidth)
)});
  main.variable(observer()).define(["rCoeff","SepalWidth","PetalLength"], function(rCoeff,SepalWidth,PetalLength){return(
rCoeff(SepalWidth, PetalLength)
)});
  main.variable(observer()).define(["rCoeff","SepalLength","PetalWidth"], function(rCoeff,SepalLength,PetalWidth){return(
rCoeff(SepalLength, PetalWidth)
)});
  main.variable(observer()).define(["rCoeff","SepalWidth","PetalWidth"], function(rCoeff,SepalWidth,PetalWidth){return(
rCoeff(SepalWidth, PetalWidth)
)});
  main.variable(observer()).define(["rCoeff","PetalLength","PetalWidth"], function(rCoeff,PetalLength,PetalWidth){return(
rCoeff(PetalLength, PetalWidth)
)});
  main.variable(observer("variance")).define("variance", ["STDeviation"], function(STDeviation){return(
function variance(X)
{
  return STDeviation(X) * STDeviation(X)
}
)});
  main.variable(observer()).define(["variance","SepalLength"], function(variance,SepalLength){return(
variance(SepalLength)
)});
  main.variable(observer()).define(["variance","SepalWidth"], function(variance,SepalWidth){return(
variance(SepalWidth)
)});
  main.variable(observer()).define(["variance","PetalLength"], function(variance,PetalLength){return(
variance(PetalLength)
)});
  main.variable(observer()).define(["variance","PetalWidth"], function(variance,PetalWidth){return(
variance(PetalWidth)
)});
  main.variable(observer("asia")).define("asia", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("asia.csv").csv()
)});
  main.variable(observer("extractasia")).define("extractasia", ["asia"], function(asia){return(
attribute=>asia.map(d=>d[attribute])
)});
  main.variable(observer("locationasia")).define("locationasia", ["extractasia"], function(extractasia){return(
extractasia("iso_code")
)});
  main.variable(observer("totaldeath")).define("totaldeath", ["extractasia"], function(extractasia){return(
extractasia("total_deaths")
)});
  main.variable(observer()).define(["locationasia","totaldeath","DOM","Plotly"], function(locationasia,totaldeath,DOM,Plotly)
{
  var cityName = locationasia,
        cityPop = totaldeath,
        //cityLat = unpack(rows, 'lat'),
        //cityLon = unpack(rows, 'lon'),
        color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        citySize = [],
        hoverText = [],
        scale = 50000;

    for ( var i = 0 ; i < cityPop.length; i++) {
        var currentSize = cityPop[i] / scale;
        var currentText = cityName[i] + " pop: " + cityPop[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
    }

    var data = [{
        type: 'scattergeo',
        locationmode: 'asia',
        //lat: cityLat,
        //lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        title: '2014 US City Populations',
        showlegend: false,
        geo: {
            scope: 'asia',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
    };

    const myDiv = DOM.element("div")
  Plotly.newPlot(myDiv, data, layout, {showLink: false});
  return myDiv

}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
### Require JavaScript libraries and import Observable tools`
)});
  main.variable(observer("Plotly")).define("Plotly", ["require"], function(require){return(
require("https://cdn.plot.ly/plotly-latest.min.js")
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3")
)});
  return main;
}
