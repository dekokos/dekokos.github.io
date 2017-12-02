var gulp           = require('gulp'),
		sass 					 = require('gulp-sass'),
		cssnano				 = require('gulp-cssnano'),
		rename         = require('gulp-rename'),
		concat				 = require('gulp-concat'),
		uglifyjs			 = require('gulp-uglifyjs'),
		autoprefixer 	 = require('gulp-autoprefixer'),

		sourcemaps 		 = require('gulp-sourcemaps'),
		browserSync	   = require('browser-sync'),
		cache					 = require('gulp-cache'),
		plumber				 = require('gulp-plumber'),
		notify				 = require('gulp-notify');
		
gulp.task('sass', function() {
	return gulp.src('src/style.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', notify.onError()))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8']))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('libscss', function(){
	return gulp.src([
		// 'src/libs/normalize.css',
			// 'src/libs/owl/assets/owl.carousel.css',
			// 'src/libs/jquery-ui/jquery-ui.min.css',
			// 'src/libs/font-awesome/css/font-awesome.min.css',
			// 'src/libs/modal/jquery.arcticmodal-0.3.css',
			// 'src/libs/scroll/jquery.mCustomScrollbar.css',
			// 'src/libs/bootstrap-select/assets/bootstrap-select.min.css',
			// 'src/libs/colorbox/colorbox.css',
			// 'src/libs/audio/mediaelementplayer.min.css',
			// 'src/libs/icomoon/style.css',
			// 'src/libs/wowjs/animate.css',
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

			// 'src/libs/autoresize/autosize.js',
			// 'src/libs/owl/owl.carousel.min.js',
			// 'src/libs/transformicon/transformicon.js',
			// 'src/libs/audio/mediaelement-and-player.js',
			// 'src/libs/devise/device.js',
			// 'src/libs/countup/jquery.animateNumber.min.js',
			// 'src/libs/modal/jquery.arcticmodal-0.3.min.js',
			// 'src/libs/scroll/jquery.mCustomScrollbar.min.js',
			// 'src/libs/chart/highcharts.js',
			// 'src/libs/bootstrap-collapse/scripts.js',
			// 'src/libs/mask/jquery.mask.js',
			// 'src/libs/colorbox/jquery.colorbox-min.js',
			// 'src/libs/calendar/jquery.calendario.js',
			// 'src/libs/progressbar/scripts.js',
			// 'src/libs/wowjs/wow.js',
			// 'src/libs/ckeditor/ckeditor.js',
			// 'src/libs/tether/tether.min.js',
			// 'src/libs/bootstrap-select/bootstrap-select.min.js',
			// 'src/libs/bootstrap/bootstrap.min.js',
		])
		// .pipe(plumber())
		// .pipe(sourcemaps.init())
		.pipe(concat('libs.min.js'))
		.pipe(uglifyjs())
		// .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js/'))
});

/* Собираем все js файлы в один */
gulp.task('scripts', function(){
	return gulp.src([
			'src/scripts.js',
		])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.min.js'))
		.pipe(uglifyjs())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
			// index: "index.html"
		},
		notify: true,//false
		// tunnel: true,
		port: 8080,
		open: true
		// tunnel: "projectmane",
	});
});

// gulp.task('img', function() {
// 	return gulp.src('src/img/**/*')
// 	.pipe(gulp.dest('dist/img'));
// });

gulp.task('watch', ['sass', 'libscss', 'libsjs', 'scripts', 'browser-sync'], function(){
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch(['src/**/*.js', 'blocks/*/*.js' ], ['scripts']);
	gulp.watch('dist/**/*.html', browserSync.reload);
});

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
// gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
// 	gulp.watch(config.srcDir + '/' + config.sassPattern, ['sass']);
// 	gulp.watch(['libs/**/*.js', config.jsDir + '/common.js'], ['js']);
// 	gulp.watch(config.srcDir + '/*.html', browserSync.reload);
// });

// gulp.task('build', ['img', 'less', 'scripts'], function() {

// 	var buildFiles = gulp.src([
// 		'src/*.html',
// 		'src/.htaccess'
// 		]).pipe(gulp.dest('dist'));

// 	var buildCss = gulp.src([
// 		'src/css/*.css'
// 		]).pipe(gulp.dest('dist/css'));

// 	var buildJs = gulp.src([
// 		'src/js/*.js'
// 		]).pipe(gulp.dest('dist/js'));

// 	var buildFonts = gulp.src([
// 		'src/fonts/**/*'
// 		]).pipe(gulp.dest('dist/fonts'));

// });

// gulp.task('clean', function() { return del.sync('dist'); });