# Project Overview

Objective of the Feed Reader Testing project is to learn how to use [Jasmine](https://jasmine.github.io/index.html) to write tests against a pre-existing application (a web-based application that reads RSS feeds).
The tests are written using [v2.1.2](https://jasmine.github.io/2.1/introduction); the library is [included](https://github.com/Wryhder/FEND-Feed-Reader-Testing/tree/master/jasmine/lib/jasmine-2.1.2) in the files, so you do not need to worry about getting it.

The Feed Reader app is hosted [here](https://wryhder.github.io/FEND-Feed-Reader-Testing/).
Results of all tests run are displayed at the end of the page.

## Tests

The test suites include tests for:
1. **The RSS feeds**, to ensure each feed has a name and url.
2. **The menu**, to ensure the menu toggles on/off when the menu icon is clicked.
3. **Initial feed entries**, to ensure there is at least one feed entry when the page loads.
4. **New feed selection**, to ensure that page content changes when a new feed is loaded.

## Run app locally
1. Clone the repo.
```
git clone https://github.com/Wryhder/FEND-Feed-Reader-Testing.git
```
2. Open index.html in a browser.
 
