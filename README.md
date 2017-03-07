# React Native Demo

A quick test driven React Native app.

## Install Prerequisites

* Install XCode.
* `brew install carthage`
* `brew install yarn`

## Setup the Environment

* `bundle`
* `yarn`

## Run Integration Tests

* Build and run the app once.

  `react-native run-ios`

* Start the React Native packager.

  `yarn start`

* Boot the Appium server.

  `yarn run appium`

* Run Rspec.

  `rspec`

## Run the Component Specs

* All of the specs can be run via Yarn.

  `yarn test`

* Specific tests can be run with the grep option.

  `yarn test -- --grep "has three children"`
