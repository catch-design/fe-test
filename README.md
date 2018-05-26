A front-end test of sorts
=================================

A front-end test of sorts is a [React](https://facebook.github.io/react/) application for desktop/mobile devices.

# Contents

* [Installation](#markdown-header-installation)
* [Usage](#markdown-header-usage)
* [Code](#markdown-header-code)
* [Style](#markdown-header-style)
* [Linting](#markdown-header-linting)

-----
# Installation

```
git clone https://github.com/NataliaSheviakova/catch-design.git
cd catch-design
nvm use
npm install
```

-----
# Usage

    The development build is used - as the name suggests - for development reasons. You have: source maps, debugging and hot reloading ability.

    The production build, on the other hand, runs in production mode. The production build should run uglify and build your source files into one or multiple minimized files. It also extracts CSS and images and other sources loading with webpack. There's also no source maps or hot reloading included.

    // Build your app in dev mode
    "build": "webpack -d",

    // start you app with prod mode
    // TODO: have to be updated if necessary with uglify
    "start:prod": "webpack -p && live-server ./public",

    // start you app with dev mode
    "start:dev": "webpack-dev-server --open",

    // pattern library
    "storybook": "start-storybook -p 9001 -c .storybook",

    // linting
    "test:lint": "eslint 'src/**/*.js' *.js",

    // TODO; write tests if necessary
    "test": "echo \"No tests available\" && exit 0",

    // husky precommit which will not let us make a commit if we have linting errors in our case
    "precommit": "npm test:lint"

-----
# Code

Application code is found in the `./src` directory.

The application is composed of the following components:

    header - the application title

    form - the contact form for a user

    button - button component

    separator - dashline which can be used across the app to separate components

    adventures - the component that manages state for Adventures and all child components (adventureList and adventureCard).
    it's also connecting to AdventureService and getting adventure data

    adventureList - list of adventures

    adventureCard - Represents a single instance of a adventure

    gallery - carousel

    footer - the component that contains child components such as sharebar, copyright, contactInfo

-----
# Style

Styles are found in the `./src/components/theme` directory. They are written in [SASS](http://sass-lang.com/).

There are base styles and shared styles.

Shared styles are preferred - they contain mixins, variables - things that don't actually give us CSS if generated. These are pulled into each component's `.scss` file.

Base styles are global classes (utility classes, typography, icons).

-----
# Linting

```
npm run lint
```

This project is set up with [`eslint`](http://eslint.org/) configuration, for its better handling of React's JSX. Your IDE should have an `eslint` plugin or module, or you can run it from the commandline.