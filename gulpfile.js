const gulp = require('gulp'),
      sass = require('gulp-sass'),
      imagemin = require('gulp-imagemin');




let app = './'; // dossier de travail
let destination = './dist'; // dossier à livrer



//envoi du styles.scss vers dist/public/styles.css
gulp.task('sass', () => {
      return gulp.src('./sass/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./dist/public/css'))
});


//envoi des views ejs vers le dist/views
gulp.task('ejs', () => {
      return gulp.src('./views/*.ejs')
            .pipe(gulp.dest('./dist/views'))
});


//envoi les partials vers dist/views
gulp.task('partials', () => {
      return gulp.src('./partials/*.ejs')
            .pipe(gulp.dest('./dist/views/partials'))
});


//envoi des images et les minifies avec imagemin vers dist/public
gulp.task('img', () => {
      return gulp.src('./img/**/*.+(png|jpg|gif|svg)')
            .pipe(imagemin())
            .pipe(gulp.dest('./dist/public/img'))
});

//envoi du server.js vers dist
gulp.task('server', () => {
      return gulp.src('./server.js')
            .pipe(gulp.dest('./dist'))
});


// gulp build dans la console pour lancer toutes les taches qui envoie sur le dist
gulp.task('build', ['server', 'ejs', 'partials', 'sass', 'img'], () => {
      console.log('Building files');
});


// gulp watch 
gulp.task('watch', () => {
      gulp.watch('./sass/**/*.scss', ['sass']);
      gulp.watch('./views/*.ejs', ['ejs']);
      gulp.watch('./partials/*.ejs', ['partials']);
      gulp.watch('./img/**/*.+(png|jpg|gif|svg', ['img']);
      gulp.watch('./server.js', ['server']);
});
