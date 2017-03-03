# React Native Demo

A quick test driven React Native app.

## Install Prerequisites

* Install XCode.
* `brew install carthage`

## Setup the Environment

* `bundle`
* `npm install`

## Run Integration Tests

* Build and run the app once.

  `react-native run-ios`

* Start the React Native packager.

  `npm start`

* Boot the Appium server.

  `npm run appium`

* Run Rspec.

  `rspec`

## Run the Component Specs

* All of the specs can be run via NPM.

  `npm test`

* Specific tests can be run with the grep option.

  `npm test -- --grep "has three children"`
