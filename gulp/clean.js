import del from 'del';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('clean-build', () => del('build/*'));
gulp.task('clean-ios-build', () => del('ios/build/*'));

gulp.task('clean', done => {
  runSequence('clean-build', 'clean-ios-build', done);
});
