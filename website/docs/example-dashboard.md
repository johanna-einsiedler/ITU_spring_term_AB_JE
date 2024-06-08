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
                        steps: Number(d.steps),
                        fatigue: Number(d.fatigue),
});
const correlations  = FileAttachment("data/correlations.csv").csv({typed: true})
const surveyData = FileAttachment("data/study_data.csv").csv({typed: true}).then((D) => D.map(coerceRow));
//const launches = FileAttachment("data/launches.csv").csv({typed: true});
```

<!-- A shared color scale for consistency, sorted by the number of launches -->



<!-- Cards with big numbers -->

<!--<div class="grid grid-cols-4">
  <div class="card">
    <h2>United States 🇺🇸</h2>
    <span class="big">${launches.filter((d) => d.stateId === "US").length.toLocaleString("en-US")}</span>
  </div>
  <div class="card">
    <h2>Russia 🇷🇺 <span class="muted">/ Soviet Union</span></h2>
    <span class="big">${launches.filter((d) => d.stateId === "SU" || d.stateId === "RU").length.toLocaleString("en-US")}</span>
  </div>
  <div class="card">
    <h2>China 🇨🇳</h2>
    <span class="big">${launches.filter((d) => d.stateId === "CN").length.toLocaleString("en-US")}</span>
  </div>
  <div class="card">
    <h2>Other</h2>
    <span class="big">${launches.filter((d) => d.stateId !== "US" && d.stateId !== "SU" && d.stateId !== "RU" && d.stateId !== "CN").length.toLocaleString("en-US")}</span>
  </div>
</div>
-->
<!-- Plot of launch history -->

```js
display(surveyData)

display(Plot.plot({
  x: {tickRotate: -90},
  marginBottom: 200,
  marginLeft: 200,
  width: 800,
  label: null,
  color: { scheme: "rdylbu", pivot: 0, legend: true, label: "cor" },
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


display(Plot.plot({
  x: {
    //ticks: simpsons.filter((d) => d.number_in_season === 1).map((d) => d.id),
    //tickFormat: (x) => simpsons.find((d) => d.id === x).season,
    label: "Days",
    labelAnchor: "right",
    labelArrow: true,
    tickRotate:-90
  },
  color: {
    type: "linear",
    scheme: "PiYG"
  },
  marks: [
    Plot.cell(surveyData, {x: "date",fill: "fatigue"})
  ]
}))
```
