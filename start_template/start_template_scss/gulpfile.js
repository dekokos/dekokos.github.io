

var gulp           = require('gulp'),
    pug            = require('gulp-pug'),
    sass           = require('gulp-sass'),
    cssnano	       = require('gulp-cssnano'),
    rename         = require('gulp-rename'),
    uglify         = require('gulp-uglify'),
    concat         = require('gulp-concat'),
    autoprefixer   = require('gulp-autoprefixer'),
    sourcemaps     = require('gulp-sourcemaps'),
    browserSync    = require('browser-sync'),
    plumber				 = require('gulp-plumber'),
    notify         = require("gulp-notify");

gulp.task('pug', function() {
  return gulp.src('src/*.pug')
          .pipe(plumber())
	        .pipe(sourcemaps.init())
          .pipe(pug({pretty: true}).on('error', notify.onError()))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist'))
          .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function() {
	return gulp.src('src/style.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expand' }).on('error', notify.onError()))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8']))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
	return gulp.src([
      'src/scripts.js',
      'src/blocks/**/*.js'
		])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.min.js'))
		// .pipe(uglifyjs()) // Minify js (opt)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('libscss', function(){
	return gulp.src([
		// 'src/libs/normalize.css',
			// 'src/libs/owl/assets/owl.carousel.css',
			// 'src/libs/jquery-ui/jquery-ui.min.css',
		])
		.pipe(concat('libs.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('libsjs', function(){
	return gulp.src([
			'src/libs/jquery/jquery-3.2.1.min.js',
			// 'src/libs/jquery/dist/jquery.min.js',
			// 'src/libs/jquery-ui/jquery-ui.min.js',
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
      baseDir: 'dist'
      // index: "index.html"
		},
    notify: true, //false
		port: 8080,
		// open: false,
		// tunnel: true,
		// tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('watch', ['sass', 'scripts', 'libscss', 'libsjs', 'browser-sync'], function() {
	gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('src/**/*.pug', ['pug']);
	gulp.watch('dist/**/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);