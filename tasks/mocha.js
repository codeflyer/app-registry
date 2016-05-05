'use strict';

/**
 * Run the unit test
 */
module.exports = (gulp) => {
  const tasks = {
    mocha: {
      fn: mochaTask,
      description: 'Run the unit test'
    }
  };
  return tasks;

  function mochaTask(done) {
    const mocha = require('gulp-mocha-co');

    gulp.src([
        './src/**/*.spec.js'
      ], { read: false })
      .pipe(
        mocha({
          reporter: 'spec'
        })
      )
      .on('end', done)
      .on('error', err => {
        console.log(err);
        done(err);
      });
  }
};
