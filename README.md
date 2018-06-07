# Front End Developer Test

A simple test for front end developers
## Acceptance Criteria
### Instructions

1. Fork or clone this repo.
2. Set up a "static" project that includes a basic build system.
3. Develop a page based on the design using SCSS and a templating language of your choice.
4. If you are completing this test as part of a job application please include a zip file of your project (including git config/metadata) with your application otherwise create a pull request and we'll take a look :)

#### Guidelines

1. Your repo needs to include at minimum anything required to build the compiled HTML, CSS and JavaScript (where applicable).
   Detailed instructions should be provided in the `README.md` file to setup and run the app.
2. Use best practice.
3. Show us what you're capable of without using CSS frameworks such as foundation, bootstrap, etc.
4. Cross browser compatibility is important.
5. Try not spend too much time on it.

#### Bonus Points

* Use patterns like BEM, ITCSS
* Accessibility
* Consume dependencies with tools like Bower, NPM and RubyGems/Bundler
* Compile any assets with a build tool like gulp, webpack etc
* Unit and code quality tests
* Include a dev server
* Pay attention to the grid system

## Configuration

1. From your terminal of choice run 'npm install', this will refer to the package.json file to automatically set up all your required node dependencies such as Gulp and SASS.
2. In your terminal, run 'gulp sass', this will build all SASS files and corresponding assets into a cleaned, minified, product-ready CSS file.
3. Open index.html in a browser to see the final results
4. In your terminal, run 'gulp', this will watch for any code changes you make, and build updated files on the fly.

## HTML

The HTML in this project is developed using HTML5 BEM methodology (see <https://en.bem.info/methodology/quick-start/>).

As soon as you enter the page wrapper, you will find that the HTML is categorised and separated into a component naming convention, e.g 'product-list' and 'product-list__item'. Check the BEM guidelines for more information.

## CSS / SASS

We use SASS to write our styles. These SASS files are separated into two categories; "main" and "extension" SASS.

Our SASS is based on the BEM methodology (see <https://en.bem.info/methodology/quick-start/>).

Tip: Always favour the use of CSS3 over background images where possible. When using background images, favour SVG image format, and consider PNG fallback for older browsers and devices. Don't be afraid to sprite if you find yourself developing a large number of icons that are intended for use on the same page template -- every time you make an extra HTTP request, god kills a kitten! Have consideration for the kittens.

### Main SASS

Main SASS includes base styling, element styling, and styling for each individual component. For example, "elements.scss" is used for styling elements such as headings and paragraphs, "gallery.scss" is used to style the gallery component.

Location: assets/sass/

### Extension SASS

Extension SASS is used to include optional styling such as SASS variables and utilities.

Location: assets/sass/extensions/

If for example you need access to SASS variables in the gallery component, you can import this at the top of gallery.scss file:

``` @import 'extensions/_variables'; ```

Or you may decide to include all extensions:

``` @import 'extensions/all'; ```

### Generating CSS

Our CSS is automatically generated from the SASS files using Gulp.

Various Gulp extensions are used to build development SASS into a single, cleaned and minified production CSS file called 'styles.css' (see the configuration category above for more on these Gulp commands).

Location: assets/css/styles.css

Note: Do not directly modify styles.css unless you want to lose your code! It is a built file not intended for modification.

### normalize.css

normalize.css is used to reset some of the default styles built into CSS for easier customisation of styling. It is used before any other styling begins.

Location: assets/css/normalize.css

Note: normalize.css is a third-party stylesheet developed by github.com/necolas/ avoid direct modifications of this file. If you should need to update this file, see necolas' GitHub repository for the latest version.

## What next?

fe-test-lewisbarron-1.0 branch has been created to meet a minimal viable product, meaning it meets the needs of the acceptance criteria;code written from the ground up, utilised modern technologies, methodologies and web standards. It is intended as a first iteration for a fictional product.

What would I expect to produce in version 1.1.0?

Improvements!

1. I would make more use of Node and Gulp extensions, and maybe produce a proper server
2. I would spend more time polishing the design -- I know 1 or 2 pixels are off in some places, and I ask for forgiveness :-p
3. The gallery is currently very basic and uses pure HTML/CSS with an overflow; I would improve the design, usability and functionality of this particular component by utilising front-end JavaScript to do something smarter
4. I might consider using JavaScript validation for the contact form rather than using HTML5 validation. Why? HTML5 form validation is not very comprehensive and delivers a different experience to different browsers, so JS or even PHP is at least worth considering
5. I might check the page through Google PageSpeed Insights to see if performance can be further improved, and also explore SEO and usability improvements
6. Would consider increasing use of em units to tie design with typography
7. Some code could be refactored, especially around the footer ... i'm not proud of that footer! it's giving me a refactoring itch :'(
7. Most importantly of all! I would set up an analytics tool such as Google Analytics, and perhaps provide some method of user feedback. I would then explore metrics and feedback to develop a hypothesis around which features are working and which features are not working, and I would support the design team in producing new features that meet the client > user needs.

Of course this is all academic because this is just a test..

