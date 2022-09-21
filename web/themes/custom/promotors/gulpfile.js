// ################################
// Load Gulp and tools we will use.
// ################################

const { gulp, src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const del = require('del');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');
const filter = require('gulp-filter');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concatcss = require('gulp-concat-css'); // not apart of sourcemaps
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// #############################
// OPTIONS: Edit these paths and options.
// #############################

let options = {};

// The root paths are used to construct all the other paths in this
// configuration. The "project" root path is where this gulpfile.js is located.
options.rootPath = {
  project: __dirname + '/',
  theme: __dirname + '/'
};

options.theme = {
  name: 'promotors',
  root: options.rootPath.theme,
  scss: options.rootPath.theme + 'scss/',
  js: options.rootPath.theme + 'js/',
  build: options.rootPath.theme + 'asset-builds/',
  build_css: options.rootPath.theme + 'asset-builds/css/',
  build_js: options.rootPath.theme + 'asset-builds/js/'
};

// Define the node-sass configuration. The includePaths is critical!
options.sass = {
  // importer: nodeSass,
  includePaths: [
    options.theme.scss,
    'node_modules'
  ],
  outputStyle: 'expanded',
};

// Define the paths to the JS files to lint.
options.eslint = {
  files: [
    // options.rootPath.project + 'gulpfile.js',
    options.theme.js + '**/*.js',
    '!' + options.theme.js + '**/*.min.js',
    options.theme.components + '**/*.js',
    '!' + options.theme.build + '**/*.js'
  ],
  configFile: options.rootPath.project + '.eslintrc'
};

// #############################
// DEFINE TASKS
// #############################


// #############################
// Styling
// #############################

const sassFiles = [
  options.theme.scss + '**/*.scss'
];

const sassToCss = () => src(sassFiles)
  .pipe(sourcemaps.init())
  .pipe(sass(options.sass).on('error', sass.logError))
  // .pipe(concat('bundle.css'))
  .pipe(postcss([autoprefixer({ grid: 'autoplace' }), cssnano()]))
  .pipe(rename({ dirname: '' }))
  .pipe(sourcemaps.write('.'))
  .pipe(dest(options.theme.build_css))
  .pipe(filter('**/*.css'))
  .pipe(livereload());


// #############################
// Linting Sass
// #############################

const lintSass = () => src([
  options.theme.scss + '**/*.scss'
])
  .pipe(sassLint())
  .pipe(sassLint.format());


// #############################
// Scripting
// #############################

const jsFiles = [
  options.theme.js + '**/*.js'
];

const buildJs = () => src(jsFiles)
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(rename({ dirname: '' }))
  .pipe(uglify({ mangle: true, keep_fnames: false })) // Could let Drupal handle this instead.
  .pipe(sourcemaps.write('./'))
  .pipe(dest(options.theme.build_js));


// #############################
// Linting JS
// #############################

const lintJs = () => src(options.eslint.files)
  .pipe(eslint({
    configFile: options.eslint.configFile,
    useEslintrc: false
  }))
  .pipe(eslint.format());


// #############################
// Clean Build Directories
// #############################

const cleanCss = () => del([
  options.theme.build_css + '**/*.css',
  options.theme.build_css + '**/*.map',
], { force: true });

const cleanJs = () => del([
  options.theme.build_js + '**/*.js',
  options.theme.build_js + '**/*.map',
], { force: true });

const cleanAll = () => del(options.theme.build, { force: true });


// #############################
// Watching
// #############################

const watchStyles = () => {
  livereload.listen();
  return watch([
    options.theme.scss + '**/*.scss'
  ], exports.styles);
}

const watchScripts = () => {
  livereload.listen();
  return watch(
    options.eslint.files,
    exports.scripts);
}


// #############################
// DEMO for Montere/Ratio-driven
// #############################

const demoHtml = () => src(["./demo/**/*", "./demo/*"])
  .pipe(dest("./asset-builds/"));

// Watch Demo files
const watchDemoHtml = () => {
  return watch("./demo/**/*", exports.demo);
}


// #############################
// Export Tasks for cli
// #############################

// Clean utilities
exports.clean = cleanAll; // gulp clean
exports.cleanCss = cleanCss; // gulp cleanCss
exports.cleanJs = cleanJs; // gulp cleanJs

// Styling build process
exports.styles = series(cleanCss, lintSass, sassToCss); // gulp styles
exports.lintSass = lintSass; // gulp lintSass

// Scripting build process
exports.scripts = series(cleanJs, lintJs, buildJs); // gulp scripts
exports.lintJs = lintJs; // gulp lintJs

// Default startup task, then end.
// gulp
exports.default = series(
  exports.clean,
  demoHtml,
  parallel(
    exports.styles,
    exports.scripts
  )
);

// THIS IS THE MAIN TASK TO RUN ON THE CLI
// Watch tasks (run default, then poll for changes in watch mode)
// gulp watch
exports.watch = series(
  exports.default,
  parallel(
    watchStyles,
    watchScripts,
    watchDemoHtml
  )
);


// Run demo for Montere/Ratio-driven system guide/documentation
/*
 * Do a fresh build of the css
 * then generate the demo html
 */
exports.demo = series(exports.styles, demoHtml); // gulp demo
