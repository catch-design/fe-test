# Front End Developer Test

A simple test for front end developers. See notes / considerations for more info

## Setup

1. install using `npm install` or run `yarn`
2. run `gulp serve` to start 

## note / considerations

* This package uses an in-development (lightly tested) template builder that may cause a few oddities. The template builder 
is outside of the scope of this test, so shouldn't be looked at too closely.
* The compile gulp script compiles all of the handlebars templates and sass files into the `build` folder.
* In the event you can't see the site when running `gulp serve` or get a "not found" error, stop the `serve` task and run `gulp compile` first, OR 
simply open and save one of the partial handlebars files to recompile the site into the `dist` folder.
* This package was developed in the most rapid way possible. It's using the default Sass install and grid system that I use on a daily basis.
This is also to be deemed to be relatively out of scope as I'm likely to be using _your_ CSS preprocessor systems anyway.
* The build system does not currently support JS or image files - this is why I've chosen to use a CDN for the slider
* The slider I chose is not _quite_ right. The image sizes are responsive, ergo do not show the exact size as per the design. This is
something I would normally reconcile but have pushed to "backlog" given the time constraints.

## Original README.md contents

### Instructions

1. Fork or clone this repo.
2. Set up a "static" project that includes a basic build system.
3. Develop a page based on the design using SCSS and a templating language of your choice.
4. If you are completing this test as part of a job application please include a zip file of your project (including git config/metadata) with your application otherwise create a pull request and we'll take a look :)

#### Guidelines

1. Your repo needs to include at minimum anything required to build the compiled HTML, CSS and JavaScript (where applicable).
   Detailed instructions should be provided in the `README.md` file to setup and run the app.
2. Use best practice.
3. Cross browser compatibility is important.
3. Try not spend too much time on it.

#### Bonus Points

* Consume dependencies with tools like Bower, NPM and RubyGems/Bundler
* Use patterns like BEM, ITCSS
* Compile any assets with a build tool like gulp, webpack etc
* Unit and code quality tests
* Include a dev server
* Accessibility
* Pay attention to the grid system
