# web-package-start-kit

This repository is the start kit of web component package. The developer that want to
develop the web package, can clone this repository and modify the source to satisfy the special requirement.

## Local Setup

- Install the dependencies with `npm install`
- Build with `gulp`
- Run tests `gulp test`
- Run tests in watch mode `gulp test-watch`

## What inside

- Build the `ES6` js code to `ES5` code with `babel`, and move it to 'lib/' directory
- Build the js code to the `UMD` type code with `webpack` that support `CMD` and `AMD` platform
- Launch the test process in browser with `karma`
