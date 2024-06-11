---
toc: false
---
<style>
  body, svg {
     font-family: var(--sans-serif);
  }
</style>
<div class="hero">
<h1> Correlations </h1>
</div>

<!-- Load and transform the data -->

```js
import {utcParse} from "npm:d3-time-format";
import * as d3 from "npm:d3";
import {csvFormat} from "d3-dsv";
const parseDate = utcParse("%m/%d/%Y");
const coerceRow = (d) => ({date: parseDate(d.date),
                        //variable: d.variable,
                        //y: Number(d.y)});
                        //steps: Number(d.steps),
                        //fatigue: Number(d.fatigue),
                        value: Number(d.value),
                        name: d.name});
//const correlations  = FileAttachment("data/correlations.csv").csv({typed: true})
const surveyData = FileAttachment("data/study_data.csv").csv({typed: true}).then((D) => D.map(coerceRow));
//const launches = FileAttachment("data/launches.csv").csv({typed: true});
```

<!-- A shared color scale for consistency, sorted by the number of launches -->


```js

display(surveyData)
display(FatiguePlot(surveyData))
function FatiguePlot(data, {width} = {}) {
  return Plot.plot({
    //title: "Experienced Fatigue",
    width,
    marginRight: 100,
    marginLeft: 75,
    marginTop:50,
    //marginRight: 70,
    y: {type: "time", ticks: "day", label: null},
    x: {anchor: 'top'},
    fx: {axis:null},
    fill: {label: null},
    //x: {grid: true, inset: 10, label: "Level of Fatigue", type:"point",domain: [1,2,3,4, 5]},
    height: 700,
    width: 1000,
    //facet: {label: null},
    //y:{grid:true},
    //facet: {marginRight: 79},
    marks: [
        Plot.gridX({strokeDasharray: "2",strokeWidth:1, stroke: '#E1BEE7',interval:1, opacity:.5}),
        //Plot.rectX({length: 1}, {y1: 0, y2: 1.4, fill: "red", fillOpacity: 0.3}),
        Plot.axisX({anchor: "top", grid:true}),
        //Plot.text(data, {x: "value", y: "date", text: 'value',fx:'name', dx: 6, lineAnchor: "bottom", rotate:90}),
        //Plot.text(data, {'name', frameAnchor: "top-left", dx: 6, dy: 6}),
        Plot.areaX(data, {
        x: "value",
        fx: "name",
        y: "date",
        fill: '#E1BEE7',
        clip: false
      }),
      Plot.text([`How fatigued were you today?`,`Overall how did you feel today?`,`How difficult was it to dress and shower today?`,
        `How difficult was it to climb stairs today?`,`How difficult was it to complete common daily activities?`,
        `How difficult was it to complete common daily activities?`,`Do you have an active and visible rash?`
      ], {
      fx: ["fatigue","wellness","dress_shower","stairs","common","pain","rash"],
      frameAnchor: "top-left",
      lineWidth: 5,
      rotate: 90,
      dx: 12,
      fill: 'black',
      dy: 3,
      lineWidth:300,
    }),
      //Plot.axisFx({ label: null, tickRotate: 90, inset:50, color: 'black'}),

    //Plot.barX(data, {x: "fatigue", y: "steps", fill: "green", dx: -2, dy: -2, facet:"include"})
    //Plot.text(data, Plot.selectLast({x: "date", y: "value", z: "name", text: "name", textAnchor: "start"}))
    ]
  });
}
function correlationPlot(correlations, {width} = {}){
return(Plot.plot({
  x: {tickRotate: -90},
  marginBottom: 200,
  marginLeft: 200,
  width: width,
  label: null,
  color: { scheme: "PRGn", pivot: 0, legend: true, label: "cor" },
  marks: [
    Plot.cell(correlations, { x: "v1", y: "v2", fill: "cor" }),
    Plot.text(correlations, {
      x: "v1",
      y: "v2",
      text: (d) => d.cor.toFixed(2),
      fill: (d) => (Math.abs(d.cor) > 0.6 ? "white" : "black")
    })
  ]
}))
}


// display(Plot.plot({
//   x: {
//     //ticks: simpsons.filter((d) => d.number_in_season === 1).map((d) => d.id),
//     //tickFormat: (x) => simpsons.find((d) => d.id === x).season,
//     label: "Days",
//     labelAnchor: "right",
//     labelArrow: true,
//     tickRotate:-90
//   },
//   color: {
//     type: "linear",
//     scheme: "PiYG"
//   },
//   marks: [
//     Plot.cell(surveyData, {x: "date",fill: "fatigue"})
//   ]
// }))
```
