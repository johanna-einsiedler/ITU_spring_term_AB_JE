---
toc: false
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 0rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 4rem 0;
  padding-bottom: 2rem;
  max-width: none;
  text-align: center;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 200px;
  color: #fff;
  text-align: center;

}


.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}
.button {
  position: relative;
  z-index: 1;
  background: var(--purple-900);
  border: 3px solid;
  border-color: var(--purple-400);
  border-radius: 0.75rem;
  color: var(--purple-300);
  padding: 0.75rem 1rem;
  text-decoration: none;
  transition: 250ms ease-in-out;
  transition-property: all;
}

.button:hover,
.button:focus {
  color: var(--purple-200);
  background-color: var(--purple-800);
  transform: scale(1.1);
}

.text {
  filter: drop-shadow(0 0 1px currentcolor);
}

.button:after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: 0.6;
  border-radius: inherit;
  box-shadow: 0 0 1em 0.5em var(--purple-300);
  transition: 250ms ease-in-out;
  transition-property: opacity;
}

.button:hover::after,
.button:focus::after {
  opacity: 0.6;
}
</style>

<div class=" hero">
  <h1>N=1</h1>
  <div class="center">
  <a href="/example-dashboard" 
  class="button" target="_blank">
    <span class="text">Do Algorithms Care?</span>
    </a>
    </div>
 <!-- <h2>Welcome to your new project! Edit&nbsp;<code style="font-size: 90%;">docs/index.md</code> to change this page.</h2>
  <a href="https://observablehq.com/framework/getting-started" target="_blank">Get started<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>
