import{dsvFormat as i,csvParse as c,tsvParse as h}from"../d3-dsv@1.2.0/index.js";function m(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.blob()}function v(n,t){return fetch(n,t).then(m)}function g(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.arrayBuffer()}function l(n,t){return fetch(n,t).then(g)}function w(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.text()}function s(n,t){return fetch(n,t).then(w)}function f(n){return function(t,r,e){return arguments.length===2&&typeof r=="function"&&(e=r,r=void 0),s(t,r).then(function(u){return n(u,e)})}}function x(n,t,r,e){arguments.length===3&&typeof r=="function"&&(e=r,r=void 0);var u=i(n);return s(t,r).then(function(o){return u.parse(o,e)})}var p=f(c),d=f(h);function b(n,t){return new Promise(function(r,e){var u=new Image;for(var o in t)u[o]=t[o];u.onerror=e,u.onload=function(){r(u)},u.src=n})}function k(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);if(!(n.status===204||n.status===205))return n.json()}function E(n,t){return fetch(n,t).then(k)}function a(n){return function(t,r){return s(t,r).then(function(e){return new DOMParser().parseFromString(e,n)})}}var P=a("application/xml"),T=a("text/html"),y=a("image/svg+xml");export{v as blob,l as buffer,p as csv,x as dsv,T as html,b as image,E as json,y as svg,s as text,d as tsv,P as xml};