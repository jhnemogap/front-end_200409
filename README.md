# Front-end exercise (2020/04/09)

## What is this project?

It is the result of executing a separate [front end exercise](#overview-requirements) in phases to apply part of what has been learned in the Platzi Master program.

## Usage

Make a copy of this repository in your local directory. It can be cloning or downloading the compressed file. Then, enter the corresponding folder `front-end_exercise_200409/`.

If you only require to run the project in development mode and that the changes are made in hot:

```bash
npm run dev
```

Same as the previous command but this time the test execution is added using Cypress. Starting tests with Cypress requires manual intervention; so you should expect the Cypress interface to get up to run all or some of the tests as you need.

```bash
npm run test:dev
```

You can also automatically run tests on the same files that will be exposed in production. In this mode the Cypress GUI does not lift and all results may look alike in terminal.

```bash
npm run test:gh-pages
```

Same as the previous command `npm run test:gh-pages` but adding the deploy. Then, following command allows you to carry out a simple construction, testing and deployment process only using GitHub.

To run this mode, you must have your local repository connected to your own GitHub repository. also, the `gh-pages` branch must be free.

```bash
npm run gh-pages:build:test:deploy
```

## Description result of the exercise

In this exercise all the necessary html5 and css3 are used directly without javascript intervention. In this case, the entry point file is index.html, and it will load the initial javascript file `js / index.js`

Initially, javascript code is only used to apply the menu effect and also to color card titles. But to the need to integrate tests in the second phase (testing phase); added a series of events to button-like elements (review content [testing specifications](#testing-specifications)).

For the execution of unit and integration tests, the [Cypress testing framework](https://www.cypress.io/) has been used.

The page was intended to be presented mobile-first ([Link to Exercise](https://jhnemogap.github.io/front-end_exercise_200409/)). The similarity of the replica made can be seen from a width greater than 1024px and better from 1200px onwards.

**NOTE**: It was decided to make some visual improvements to the mockup to improve the presentation on different device sizes, specifically increasing the font size accordingly.

### Documentation

For this stage of the project, the html and css documentation was done in the same files with internal comments.

The javascript files received internal comments using the base tag naming used by projects like [JSDoc](https://jsdoc.app/index.html).

### Proposed file structure

- **`index.html`**: all html web page in and entry point
- **`css`**: all files type `.css`
  - **`mediaQueries`**: this folder exclusively contains media queries
- **`image`**: images to serve. `.Webp` images were used to test their functionality
- **`js`**: all `.js` type documents
- **`resources`**: contains auxiliary files
- **`testCypress`**: contains the internal file structure required by the Cypress test framework

## Overview (requirements)

This [image resembles a basic website](./resources/webImageHome.png). You will need basic understanding of HTML and CSS in order to achieve this.

![webHome](./resources/webImageHome.png)

### Goals

1. Replicate the website

### Specifications

The replica must be as exact as possible, with the correct color and images.
You’re only allowed to use HTML,CSS and JS, you cannot use any Framework or libraries.

### Milestones

Milestones are specifications that will be added in the near future.

#### Start script

The project must have a system that allows him to build it and run it.

#### Testing

You must implement unit and integration testing to your code.

##### Testing Specifications

For the testing, you need to add some logic to your project. Starting with the buttons, all the buttons need to have:

- Whenever I pressed one, you should show in console the next message `"Id: ${id}, Count: ${count}"`
- You need to send an event the does not propagate to the father called `"composed"` and show this message on the console `"I’m not propagating"`.
- You need to send an event to change the color of the other buttons (_If you press the navbar, you change the ones on the footer and vice versa_)

You need to add all the pertinent testing
