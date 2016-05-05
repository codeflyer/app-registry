'use strict';

const gulp = require('gulp');
const taskLoader = require('gulp-commonjs-tasks/task-loader');

// load tasks
const tasksContext = taskLoader.load('./tasks', gulp);

// Add the gulp help task
tasksContext.addHelpTask();
