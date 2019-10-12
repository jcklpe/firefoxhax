// Grab our gulp packages
var gulp = require("gulp"),
  gutil = require("gulp-util"),
  sass = require("gulp-sass"),
  cssnano = require("gulp-cssnano"),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  rename = require("gulp-rename"),
  plumber = require("gulp-plumber"),
  browserSync = require("browser-sync").create();

//TODO: Fix build process to only create necessary css
// Compile Sass, Autoprefix and minify
gulp.task("scss", function() {
  return gulp
    .src("./assets/userChrome.scss")
    .pipe(
      plumber(function(error) {
        gutil.log(gutil.colors.red(error.message));
        this.emit("end");
      })
    )
    .pipe(sourcemaps.init()) // Start Sourcemaps

    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./"))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(cssnano())
    .pipe(sourcemaps.write(".")) // Creates sourcemaps for minified styles
    .pipe(gulp.dest("./"));
});

// Browser-Sync watch files and inject changes
gulp.task("browsersync", function() {
  // Watch files
  var files = ["./*.css"];

  browserSync.init(files, {
    // Replace with URL of your local site
    proxy: "http://localhost/"
  });

  gulp.watch("./assets/*.scss", ["scss"]);
});

// Watch files for changes (without Browser-Sync)
gulp.task("watch", function() {
  // Watch .scss files
  gulp.watch("./assets/**/*.scss", ["scss"]);
});

// default = compile
gulp.task("default", function() {
  gulp.start("scss");
});
