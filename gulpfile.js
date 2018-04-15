var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var filelist = require('gulp-filelist');
var fs = require('fs');
//var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create();

var gutil           = require('gulp-util');             // Some extra gulp utils
var sass            = require('gulp-sass');             // Compiles sass
var sourcemaps      = require('gulp-sourcemaps');       // Generates sass sourcemaps
var imagemin 		= require('gulp-imagemin');			// Optimises images
var autoprefixer    = require('gulp-autoprefixer');     // Adds vendor prefixes to css rules
var uncss           = require('gulp-uncss');            // Scan for unused CSS rules and remove them

require('es6-promise').polyfill();                      // Adds es6 promises support





var dirs = {
    css     : 'dist/css',
    scss    : 'src/scss/**', // Includes all sub directories
    images  : 'images',
    views   : 'Views'
};
//var siteurl = 'http://www.google.com';

// Sass Output Settings
var sassConfig = {
    errLogToConsole: false,
    outputStyle: 'nested'  // default: 'nested' to allow minifiying by bundles, or: 'expanded', 'compact', 'compressed'
};

// Autoprefixer config
var apConfig = {
    browsers: ['last 2 versions', '> 5%'],
    cascade: true
};


gulp.task("createFileIndex", function(){
		gulp.src(['./src/*.*'])
      .pipe(filelist('filelist.json', { flatten: true, removeExtensions: true }))
      .pipe(gulp.dest("./"));
});

gulp.task("default", ['browser-sync'],function() {
	gulp.watch('src/*.handlebars',{cwd:'./'}, ['createFileIndex'])
	gulp.watch('src/**/*.handlebars',{cwd:'./'}, ['compile'])
	gulp.watch('filelist.json',{cwd:'./'},['compile']);
	
});

gulp.task('compile', function () {
	var templateList = JSON.parse(fs.readFileSync("./filelist.json", "utf8"));
	var templateData = {
		firstName: 'Bren',
		templates: templateList
	},
	options = {
		ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
		batch : ['./src/partials'],
		helpers : {
			capitals : function(str){
				return str.toUpperCase();
			}
		}
	}
	var doAllTemplates = function() {
		for (var i = 0; i <  templateList.length; i++) {
			compileTemplate(templateList[i]);
		}
	}
	var compileTemplate = function(templateName) {
		return gulp.src('src/' + templateName + '.handlebars')
			.pipe(handlebars(templateData, options))
			.pipe(rename(templateName + '.html'))
			.pipe(gulp.dest('dist'));
	}
	doAllTemplates();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('sass', function(){

    has_error = ''; // Track errors during compile

	return gulp.src(dirs.scss + '/*.scss') 	// Get all files ending with .scss in app/scss and children dirs
        .pipe(sourcemaps.init())
        .pipe(sass(sassConfig).on('error', function(err){                   // Handle errors gracefully
            has_error = true;                                               // We have an error
            gutil.log( gutil.colors.red(err.message) );                     // Spit out the error
            this.emit('end');                                               // We can't continue so 'jump' to the end
        }))
        .pipe(autoprefixer(apConfig))                                       // Add out autoprefixing
        .pipe(sourcemaps.write())		                                    // Output sourcemaps to a separate file
        .pipe(gulp.dest(dirs.css)) 				                            // Output compiled css to the css folder
        .pipe(browserSync.stream())

        .on('end', function(){                                              // Handle the end event
            if(has_error === '') {                                          // If we don't have an error, compiling was successful
                gutil.log(gutil.colors.green('## CSS compile succeeded'));  // Woohoo!
            }
        }
    );
});
gulp.task('watch', function() {
	gulp.watch('src/*.handlebars',{cwd:'./'}, ['createFileIndex']);
	gulp.watch('src/**/*.handlebars',{cwd:'./'}, ['compile']);
	gulp.watch('filelist.json',{cwd:'./'},['compile']);
	gulp.watch('src/scss/**/*.scss',{cwd:'./'},['sass']);
})
gulp.task('serve',  ['watch'], function (){
	browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    //if(bsConfig.enabled === true){
        
        gulp.watch(dirs.views + "/**/*.handlebars").on('change', browserSync.reload);   // Reload the page when a view file changes
        browserSync.stream();
    //}

});