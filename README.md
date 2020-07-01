<img src="https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/11/atom-teletype.png" height="300" width="100%" style="background-size: cover" />

<div>
  <br />
  <div><strong>Start your next react project faster</strong></div>
  <div>Focus on performance and best practices</div>
  <br />
</div>

<div>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/devs9/react-gb-dashbord">
    <img src="https://david-dm.org/react-boilerplate/react-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/devs9/react-gb-dashbord#info=devDependencies">
    <img src="https://david-dm.org/react-boilerplate/react-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/devs9/react-gb-dashbord">
    <img src="https://travis-ci.org/react-boilerplate/react-boilerplate.svg" alt="Build Status" />
  </a>
</div>

<div>
  <sub>Created by <a href="https://github.com/devs9">devs9</a></sub><sub> George PolAdaShvili</sub>
</div>
<br />

## Features

* ####TypeScript
* ####React Hooks
* ####Redux-Saga + Redux-Thunk + Typesafe Actions 
  (completely typesafe Reducers + ActionCreator + Stores)

* ####ESLint + Prettier for syntax check

* ####Styled Components + Styled Breakpoints + Material UI styles
<br />

## Quick start

1.  Clone this repo using `git clone https://github.com/devs9/react-ts-github.git <YOUR_PROJECT_NAME>`
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
3.  Run `npm run install or yarn` for install dependencies.<br /> 
    _At this point you can run `npm start or yarn start` to see the example app at `http://localhost:3000`._

<br />

## Optimization and Bundle Analysis

* ####Why-did-you-render connected
  Notify you about avoidable re-renders. For example, when you pass `style={{width: '100%'}}` to a big pure component and make it always re-render:
  
  <br />    
  <img src="https://github.com/welldone-software/why-did-you-render/raw/master/images/demo.png" width="666" />

* ####Analyzes React bundles 
  The tool is to help you understand what your bundle looks like and what is included in your bundle.
  
  <br />    
  <img src="https://www.dropbox.com/s/zun4n4tgp059neh/bundle-analysis.png?raw=1" height=50% width="666" />

<br />


## Scripts
* For run analyzes

#####  <small>step 1</small> #####
```
  nmp run build:dev or yarn build:dev
```
#####  <small>step 2</small> #####
```
  nmp run analyze or yarn analyze
```
